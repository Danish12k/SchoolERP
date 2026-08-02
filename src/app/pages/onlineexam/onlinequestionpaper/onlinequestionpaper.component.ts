import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { PageHeaderComponent } from '@shared';
import { ToastrService } from 'ngx-toastr';
import { IClass } from '../../../interfaces/IClassmaster';
import { ICollege } from '../../../interfaces/ICollege';
import { IExam } from '../../../interfaces/IExam';
import {
  IOnlineQuestionPaperAddItem,
  IQuestionPaperItem,
} from '../../../interfaces/IOnlineQuestionPaper';
import { ISession } from '../../../interfaces/isession';
import { ISubject } from '../../../interfaces/ISubjectMst';
import { OnlineExamFilterService } from '../../../services/onlineexamservice/online-exam-filter.service';
import { OnlineExamListService } from '../../../services/onlineexamservice/online-exam-list.service';
import { OnlineQuestionPaperService } from '../../../services/onlineexamservice/online-question-paper.service';
import { QuestionMasterService } from '../../../services/onlineexamservice/question-master.service';

@Component({
  selector: 'app-onlinequestionpaper',
  host: { class: 'admin-page-host' },
  imports: [
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    PageHeaderComponent,
  ],
  templateUrl: './onlinequestionpaper.component.html',
  styleUrl: './onlinequestionpaper.component.scss',
})
export class OnlinequestionpaperComponent implements OnInit {
  private readonly onlineExamFilterService = inject(OnlineExamFilterService);
  private readonly onlineExamListService = inject(OnlineExamListService);
  private readonly questionPaperService = inject(OnlineQuestionPaperService);
  private readonly questionMasterService = inject(QuestionMasterService);
  private readonly toast = inject(ToastrService);
  private readonly sanitizer = inject(DomSanitizer);

  sessions: ISession[] = [];
  colleges: ICollege[] = [];
  classes: IClass[] = [];
  subjects: ISubject[] = [];
  exams: IExam[] = [];

  questionMasterList: IQuestionPaperItem[] = [];
  selectedQuestionList: IQuestionPaperItem[] = [];
  checkedQuestionIds = new Set<number>();

  selectedSessionId: number | null = null;
  selectedCollegeId: number | null = null;
  selectedCourseId: number | null = null;
  examName = '';
  selectedSubjectName = '';
  resolvedOnlineExamId: number | null = null;
  resolvedPaperId = 0;

  loadingClasses = false;
  loadingSubjects = false;
  loadingExams = false;
  loadingQuestions = false;
  saving = false;

  ngOnInit(): void {
    this.loadSessions();
    this.loadColleges();
  }

  onSessionOrCollegeChange(): void {
    this.selectedCourseId = null;
    this.selectedSubjectName = '';
    this.examName = '';
    this.classes = [];
    this.exams = [];
    this.subjects = [];
    this.resolvedOnlineExamId = null;
    this.resolvedPaperId = 0;
    this.resetLists();

    if (this.selectedSessionId == null || this.selectedCollegeId == null) {
      return;
    }

    this.loadExams();
    this.loadClasses();
  }

  onClassChange(classId: number | null): void {
    this.selectedCourseId = classId;
    this.selectedSubjectName = '';
    this.subjects = [];
    this.resolvedOnlineExamId = null;
    this.resolvedPaperId = 0;
    this.resetLists();

    if (classId == null) {
      return;
    }

    this.loadClassSubjects(classId);
  }

  onExamOrSubjectChange(): void {
    this.resolvedOnlineExamId = null;
    this.resolvedPaperId = 0;
    this.resetLists();

    if (!this.canLoadQuestions()) {
      return;
    }

    this.resolveOnlineExamId(onlineExamId => this.loadPaperQuestions(onlineExamId));
    this.loadQuestionMasterList();
  }

  toggleQuestionSelection(question: IQuestionPaperItem, checked: boolean): void {
    const questionId = this.getQuestionId(question);
    if (questionId == null) {
      return;
    }

    if (checked) {
      this.checkedQuestionIds.add(questionId);
    } else {
      this.checkedQuestionIds.delete(questionId);
    }
  }

  isQuestionChecked(question: IQuestionPaperItem): boolean {
    const questionId = this.getQuestionId(question);
    return questionId != null && this.checkedQuestionIds.has(questionId);
  }

  addCheckedToPaper(): void {
    const selectedIds = new Set(this.selectedQuestionList.map(item => this.getQuestionId(item)));
    const toAdd = this.questionMasterList
      .filter(item => {
        const id = this.getQuestionId(item);
        return id != null && this.checkedQuestionIds.has(id) && !selectedIds.has(id);
      })
      .map(item => ({
        ...item,
        marks: Number(item.marks) || 0,
      }));

    if (!toAdd.length) {
      this.toast.info('Select questions from Question Master List first.');
      return;
    }

    if (toAdd.some(item => !(Number(item.marks) > 0))) {
      this.toast.warning('Please enter marks greater than 0 for each selected question.');
      return;
    }

    this.saving = true;
    this.resolveOnlineExamId(onlineExamId => {
      if (onlineExamId == null) {
        this.saving = false;
        this.toast.error(
          'Online exam not found for this class, exam, and subject. Create it in Online Exam List first.'
        );
        return;
      }

      const items: IOnlineQuestionPaperAddItem[] = toAdd
        .map(item => {
          const questionId = this.getQuestionId(item);
          return questionId == null
            ? null
            : {
                onlineExamId,
                questionId,
                examMarks: Number(item.marks),
              };
        })
        .filter((item): item is IOnlineQuestionPaperAddItem => item != null);

      this.questionPaperService.submitQuestionPaper(items).subscribe({
        next: res => {
          this.saving = false;
          if (res.success) {
            this.checkedQuestionIds.clear();
            this.toast.success(res.message || 'Selected questions added successfully.');
            this.loadPaperQuestions(onlineExamId);
          } else {
            this.toast.error(res.message || 'Failed to add selected questions.');
          }
        },
        error: () => {
          this.saving = false;
          this.toast.error('Failed to add selected questions.');
        },
      });
    });
  }

  removeFromPaper(question: IQuestionPaperItem): void {
    const paperId = Number(question.paperId);

    // Unsaved local row (not yet allocated on the server) — just drop it from the list.
    if (!(paperId > 0)) {
      const questionId = this.getQuestionId(question);
      this.selectedQuestionList = this.renumberRows(
        this.selectedQuestionList.filter(item => this.getQuestionId(item) !== questionId)
      );
      return;
    }

    this.questionPaperService.deletePaperQuestion(paperId).subscribe({
      next: res => {
        if (res.success) {
          this.toast.success(res.message || 'Question removed from paper.');
          this.loadPaperQuestions(this.resolvedOnlineExamId);
        } else {
          this.toast.error(res.message || 'Failed to remove question from paper.');
        }
      },
      error: () => this.toast.error('Failed to remove question from paper.'),
    });
  }

  isImageQuestion(content: string): boolean {
    const value = (content ?? '').trim();
    if (!value || value.startsWith('<')) {
      return false;
    }
    return /\.(png|jpe?g|gif|webp|bmp|svg)(\?.*)?$/i.test(value) || /^https?:\/\//i.test(value);
  }

  questionHtml(content: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(content ?? '');
  }

  private get selectedClassName(): string {
    const selectedClass = this.classes.find(item => item.courseId === this.selectedCourseId);
    return selectedClass?.courseName?.trim() ?? '';
  }

  private get selectedExamId(): number | null {
    const exam = this.exams.find(item => item.examName?.trim() === this.examName.trim());
    const id = Number(exam?.examId);
    return Number.isFinite(id) && id > 0 ? id : null;
  }

  private get selectedSubjectId(): number | null {
    const subject = this.subjects.find(
      item => item.subjectName?.trim().toLowerCase() === this.selectedSubjectName.trim().toLowerCase()
    );
    const id = Number(subject?.subjectId);
    return Number.isFinite(id) && id > 0 ? id : null;
  }

  canLoadQuestions(): boolean {
    return Boolean(
      this.selectedCourseId != null &&
      this.selectedClassName &&
      this.examName.trim() &&
      this.selectedSubjectName.trim()
    );
  }

  private getQuestionId(question: IQuestionPaperItem): number | null {
    const id = Number(question.questionId);
    return Number.isFinite(id) && id > 0 ? id : null;
  }

  private getListQuery() {
    return {
      ClassName: this.selectedClassName,
      ExamName: this.examName.trim(),
      SubjectName: this.selectedSubjectName.trim(),
    };
  }

  private renumberRows(rows: IQuestionPaperItem[]): IQuestionPaperItem[] {
    return rows.map((item, index) => ({ ...item, seqNo: index + 1 }));
  }

  private resetLists(): void {
    this.questionMasterList = [];
    this.selectedQuestionList = [];
    this.checkedQuestionIds.clear();
  }

  private resolveOnlineExamId(done?: (onlineExamId: number | null) => void): void {
    const examId = this.selectedExamId;
    const classId = this.selectedCourseId;
    if (examId == null || classId == null) {
      this.resolvedOnlineExamId = null;
      done?.(null);
      return;
    }

    this.onlineExamListService.listOnlineExams({ ExamId: examId, ClassId: classId }).subscribe({
      next: res => {
        const rows = res.success && res.data ? (Array.isArray(res.data) ? res.data : [res.data]) : [];
        const subjectId = this.selectedSubjectId;
        const subjectName = this.selectedSubjectName.trim().toLowerCase();
        const match = rows.find(row => {
          if (subjectId != null && Number(row.subjectId) === subjectId) {
            return true;
          }
          return (row.subjectName ?? '').trim().toLowerCase() === subjectName;
        });
        const onlineExamId = Number(match?.onlineExamId);
        this.resolvedOnlineExamId =
          Number.isFinite(onlineExamId) && onlineExamId > 0 ? onlineExamId : null;
        done?.(this.resolvedOnlineExamId);
      },
      error: () => {
        this.resolvedOnlineExamId = null;
        done?.(null);
      },
    });
  }

  private loadQuestionMasterList(): void {
    this.loadingQuestions = true;
    this.questionMasterService.listQuestions(this.getListQuery()).subscribe({
      next: res => {
        this.loadingQuestions = false;
        if (res.success && res.data) {
          this.questionMasterList = this.renumberRows(
            this.questionMasterService
              .normalizeListItems(res.data, {
                className: this.selectedClassName,
                examName: this.examName.trim(),
                subjectName: this.selectedSubjectName.trim(),
              })
              .map(item => ({ ...item, marks: 0 }))
          );
        } else {
          this.questionMasterList = [];
        }
      },
      error: () => {
        this.loadingQuestions = false;
        this.questionMasterList = [];
        this.toast.error('Failed to load question master list.');
      },
    });
  }

  private loadPaperQuestions(onlineExamId: number | null): void {
    if (onlineExamId == null) {
      this.selectedQuestionList = [];
      this.resolvedPaperId = 0;
      return;
    }

    this.questionPaperService.listPaperQuestions(onlineExamId).subscribe({
      next: res => {
        if (res.success && res.data) {
          this.selectedQuestionList = this.normalizeQuestions(res.data);
          const paperId = this.selectedQuestionList.find(item => Number(item.paperId) > 0)?.paperId;
          this.resolvedPaperId = Number(paperId) > 0 ? Number(paperId) : 0;
        } else {
          this.selectedQuestionList = [];
          this.resolvedPaperId = 0;
        }
      },
      error: () => {
        this.selectedQuestionList = [];
        this.resolvedPaperId = 0;
      },
    });
  }

  private normalizeQuestions(data: IQuestionPaperItem[] | IQuestionPaperItem): IQuestionPaperItem[] {
    const rows = Array.isArray(data) ? data : [data];
    return this.renumberRows(
      rows
        .map((item, index) => {
          const raw = item as IQuestionPaperItem & {
            examMarks?: number;
            ExamMarks?: number;
            paperId?: number;
            PaperId?: number;
            onlineExamId?: number;
            OnlineExamId?: number;
            Question?: string;
            QuestionId?: number;
          };
          return {
            questionId: raw.questionId ?? raw.QuestionId ?? index + 1,
            question: (raw.question ?? raw.Question ?? '').trim(),
            className: raw.className?.trim() ?? this.selectedClassName,
            examName: raw.examName?.trim() ?? this.examName.trim(),
            seqNo: raw.seqNo ?? index + 1,
            subjectName: raw.subjectName?.trim() ?? this.selectedSubjectName.trim(),
            questionType: raw.questionType?.trim() ?? 'Text',
            marks: Number(raw.marks ?? raw.examMarks ?? raw.ExamMarks) || 0,
            paperId: Number(raw.paperId ?? raw.PaperId) || 0,
            onlineExamId: Number(raw.onlineExamId ?? raw.OnlineExamId) || undefined,
            questionOptions: raw.questionOptions,
            correctAns: raw.correctAns,
          };
        })
        .filter(item => item.question)
    );
  }

  private loadSessions(): void {
    this.onlineExamFilterService.getSessions().subscribe({
      next: res => {
        this.sessions = res.success && res.data ? (Array.isArray(res.data) ? res.data : [res.data]) : [];
      },
      error: () => this.toast.error('Failed to load sessions.'),
    });
  }

  private loadColleges(): void {
    this.onlineExamFilterService.getColleges().subscribe({
      next: res => {
        this.colleges = res.success && res.data ? (Array.isArray(res.data) ? res.data : [res.data]) : [];
      },
      error: () => this.toast.error('Failed to load colleges.'),
    });
  }

  private loadClasses(): void {
    if (this.selectedSessionId == null || this.selectedCollegeId == null) {
      return;
    }

    this.loadingClasses = true;
    this.onlineExamFilterService
      .getClasses(this.selectedSessionId, this.selectedCollegeId)
      .subscribe({
        next: res => {
          this.loadingClasses = false;
          this.classes = res.success && res.data ? (Array.isArray(res.data) ? res.data : [res.data]) : [];
        },
        error: () => {
          this.loadingClasses = false;
          this.classes = [];
          this.toast.error('Failed to load classes.');
        },
      });
  }

  private loadExams(): void {
    if (this.selectedSessionId == null || this.selectedCollegeId == null) {
      return;
    }

    this.loadingExams = true;
    this.onlineExamFilterService
      .getExams({
        sessionId: this.selectedSessionId,
        collegeId: this.selectedCollegeId,
      })
      .subscribe({
        next: res => {
          this.loadingExams = false;
          if (res.success && res.data) {
            this.exams = Array.isArray(res.data) ? res.data : [res.data];
          } else {
            this.exams = [];
          }
        },
        error: () => {
          this.loadingExams = false;
          this.exams = [];
          this.toast.error('Failed to load exams.');
        },
      });
  }

  private loadClassSubjects(classId: number): void {
    this.loadingSubjects = true;
    this.onlineExamFilterService.getClassSubjects(classId).subscribe({
      next: res => {
        this.loadingSubjects = false;
        if (res.success && res.data) {
          this.subjects = this.normalizeSubjects(res.data);
        } else {
          this.subjects = [];
        }
      },
      error: () => {
        this.loadingSubjects = false;
        this.subjects = [];
        this.toast.error('Failed to load subjects.');
      },
    });
  }

  private normalizeSubjects(data: ISubject[] | ISubject): ISubject[] {
    const rows = Array.isArray(data) ? data : [data];
    return rows
      .map((item, index) => ({
        subjectId: item.subjectId ?? index + 1,
        subjectName: item.subjectName?.trim() ?? '',
        subjectCode: item.subjectCode?.trim() ?? '',
        subjectType: item.subjectType ?? '',
        subjectSeq: item.subjectSeq ?? 0,
      }))
      .filter(item => item.subjectName);
  }
}
