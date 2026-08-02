import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { QuillEditorComponent } from 'ngx-quill';
import { PageHeaderComponent } from '@shared';
import { registerQuillFormula } from '@shared/utils/quill-formula';
import { ToastrService } from 'ngx-toastr';
import { IClass } from '../../../interfaces/IClassmaster';
import { ICollege } from '../../../interfaces/ICollege';
import { IExam } from '../../../interfaces/IExam';
import { ISession } from '../../../interfaces/isession';
import { ISubject } from '../../../interfaces/ISubjectMst';
import { CollegeService } from '../../../services/masterservice/college.service';
import { SessionService } from '../../../services/masterservice/session.service';
import { SubjectmasterService } from '../../../services/masterservice/subjectmaster.service';
import { ExamSetupService } from '../../../services/examservice/exam-setup.service';
import { QuestionMasterOption, QuestionMasterPayload, QuestionMasterService } from '../../../services/onlineexamservice/question-master.service';

@Component({
  selector: 'app-questionmaster',
  host: { class: 'admin-page-host' },
  imports: [
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    QuillEditorComponent,
    PageHeaderComponent,
  ],
  templateUrl: './questionmaster.component.html',
  styleUrl: './questionmaster.component.scss',
})
export class QuestionmasterComponent implements OnInit {
  @ViewChild('questionEditor') questionEditor?: QuillEditorComponent;

  private readonly sessionService = inject(SessionService);
  private readonly collegeService = inject(CollegeService);
  private readonly subjectService = inject(SubjectmasterService);
  private readonly examSetupService = inject(ExamSetupService);
  private readonly questionMasterService = inject(QuestionMasterService);
  private readonly toast = inject(ToastrService);
  private readonly sanitizer = inject(DomSanitizer);

  sessions: ISession[] = [];
  colleges: ICollege[] = [];
  classes: IClass[] = [];
  subjects: ISubject[] = [];
  exams: IExam[] = [];

  selectedSessionId: number | null = null;
  selectedCollegeId: number | null = null;
  selectedCourseId: number | null = null;
  selectedSubjectName = '';
  examName = '';
  question = '';
  seqNo = 0;
  answerOptions: QuestionMasterOption[] = this.createDefaultOptions();

  loadingClasses = false;
  loadingSubjects = false;
  loadingExams = false;
  loadingQuestions = false;
  saving = false;
  questionList: QuestionMasterPayload[] = [];

  readonly questionEditorModules = {
    toolbar: {
      container: [
        ['bold', 'italic', 'underline', 'strike'],
        [{ script: 'sub' }, { script: 'super' }],
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ indent: '-1' }, { indent: '+1' }],
        [{ size: ['small', false, 'large', 'huge'] }],
        [{ color: [] }, { background: [] }],
        [{ align: [] }],
        ['formula'],
        ['clean'],
      ],
      handlers: {
        formula: () => this.insertFormula(),
      },
    },
    clipboard: {
      matchVisual: false,
    },
  };

  ngOnInit(): void {
    registerQuillFormula();
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
    this.questionList = [];

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
    this.questionList = [];

    if (classId == null) {
      return;
    }

    this.loadClassSubjects(classId);
  }

  onExamChange(): void {
    this.questionList = [];

    if (!this.selectedSubjectName.trim()) {
      return;
    }

    this.loadQuestionList();
  }

  onSubjectChange(): void {
    this.questionList = [];

    if (!this.canLoadQuestionList()) {
      return;
    }

    this.loadQuestionList();
  }

  canLoadQuestionList(): boolean {
    return Boolean(
      this.selectedClassName &&
      this.examName.trim() &&
      this.selectedSubjectName.trim()
    );
  }

  onTrueOptionChange(index: number, checked: boolean): void {
    if (!checked) {
      this.answerOptions[index].trueOption = false;
      return;
    }

    this.answerOptions = this.answerOptions.map((option, i) => ({
      ...option,
      trueOption: i === index,
    }));
  }

  insertFormula(): void {
    const latex = window.prompt(
      'Enter formula (LaTeX). Examples: E=mc^2, \\frac{1}{2}, x^2+y^2=z^2',
      ''
    );
    if (!latex?.trim()) {
      return;
    }

    const quill = this.questionEditor?.quillEditor;
    if (!quill) {
      return;
    }

    const range = quill.getSelection(true);
    const index = range?.index ?? quill.getLength();
    quill.insertEmbed(index, 'formula', latex.trim(), 'user');
    quill.insertText(index + 1, ' ', 'user');
    quill.setSelection(index + 2, 0, 'user');
  }

  questionHtml(content: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(content ?? '');
  }

  optionText(row: QuestionMasterPayload, opt: string): string {
    return (
      row.questionOptions?.find(option => option.opt.toUpperCase() === opt.toUpperCase())
        ?.optionDescription ?? ''
    );
  }

  private get selectedClassName(): string {
    const selectedClass = this.classes.find(item => item.courseId === this.selectedCourseId);
    return selectedClass?.courseName?.trim() ?? '';
  }

  private loadQuestionList(): void {
    if (!this.canLoadQuestionList()) {
      return;
    }

    this.loadingQuestions = true;
    this.questionMasterService
      .listQuestions({
        ClassName: this.selectedClassName,
        ExamName: this.examName.trim(),
        SubjectName: this.selectedSubjectName.trim(),
      })
      .subscribe({
        next: res => {
          this.loadingQuestions = false;
          if (res.success && res.data) {
            this.questionList = this.questionMasterService.normalizeListItems(res.data, {
              className: this.selectedClassName,
              examName: this.examName.trim(),
              subjectName: this.selectedSubjectName.trim(),
            });
          } else {
            this.questionList = [];
          }
        },
        error: () => {
          this.loadingQuestions = false;
          this.questionList = [];
          this.toast.error('Failed to load question list.');
        },
      });
  }

  private loadClasses(): void {
    if (this.selectedSessionId == null || this.selectedCollegeId == null) {
      return;
    }

    this.loadingClasses = true;
    this.collegeService.getClassListBySessionAndCollege(this.selectedSessionId, this.selectedCollegeId).subscribe({
      next: res => {
        this.loadingClasses = false;
        this.classes = res.success && res.data ? (Array.isArray(res.data) ? res.data : [res.data]) : [];
        if (!this.classes.length) {
          this.toast.info(res.message || 'No classes found for selected session and college.');
        }
      },
      error: () => {
        this.loadingClasses = false;
        this.toast.error('Failed to load classes.');
      },
    });
  }

  private loadExams(): void {
    if (this.selectedSessionId == null || this.selectedCollegeId == null) {
      return;
    }

    this.loadingExams = true;
    this.examSetupService
      .listExams({
        sessionId: this.selectedSessionId,
        collegeId: this.selectedCollegeId,
      })
      .subscribe({
        next: res => {
          this.loadingExams = false;
          if (res.success && res.data) {
            this.exams = Array.isArray(res.data) ? res.data : [res.data];
            if (!this.exams.length) {
              this.toast.info(res.message || 'No exams found for selected session and college.');
            }
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

  submit(): void {
    if (!this.isValid()) {
      if (!this.hasQuestionContent()) {
        this.toast.warning('Please enter the question.');
        return;
      }
      const filledCount = this.getFilledOptions().length;
      if (filledCount < 2) {
        this.toast.warning('Please enter at least two answer options.');
        return;
      }
      if (this.getFilledOptions().filter(option => option.trueOption).length !== 1) {
        this.toast.warning('Please mark exactly one option as the correct answer.');
        return;
      }
      this.toast.warning('Please fill all required fields.');
      return;
    }

    const payload: QuestionMasterPayload = {
      question: this.question.trim(),
      className: this.selectedClassName.trim(),
      examName: this.examName.trim(),
      seqNo: Number(this.seqNo) || 0,
      subjectName: this.selectedSubjectName.trim(),
      questionType: 'MCQ',
      questionOptions: this.getFilledOptions(),
    };

    this.saving = true;
    this.questionMasterService.addQuestion(payload).subscribe({
      next: res => {
        this.saving = false;
        if (res.success) {
          this.toast.success(res.message || 'Question saved successfully.');
          this.resetQuestionFields();
          this.loadQuestionList();
        } else {
          this.toast.error(res.message || 'Failed to save question.');
        }
      },
      error: () => {
        this.saving = false;
        this.toast.error('Failed to save question.');
      },
    });
  }

  private loadSessions(): void {
    this.sessionService.getSessionList().subscribe({
      next: res => {
        this.sessions = res.success && res.data ? (Array.isArray(res.data) ? res.data : [res.data]) : [];
      },
      error: () => this.toast.error('Failed to load sessions.'),
    });
  }

  private loadColleges(): void {
    this.collegeService.getCollegeList().subscribe({
      next: res => {
        this.colleges = res.success && res.data ? (Array.isArray(res.data) ? res.data : [res.data]) : [];
      },
      error: () => this.toast.error('Failed to load colleges.'),
    });
  }

  private loadClassSubjects(classId: number): void {
    this.loadingSubjects = true;
    this.subjectService.listClassSubjects(classId).subscribe({
      next: res => {
        this.loadingSubjects = false;
        if (res.success && res.data) {
          this.subjects = this.normalizeSubjects(res.data);
          if (!this.subjects.length) {
            this.toast.info(res.message || 'No subjects found for selected class.');
          }
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

  private isValid(): boolean {
    if (
      this.selectedCourseId == null ||
      !this.selectedClassName ||
      !this.examName.trim() ||
      !this.selectedSubjectName.trim() ||
      !this.hasQuestionContent()
    ) {
      return false;
    }

    const filledOptions = this.getFilledOptions();
    if (filledOptions.length < 2) {
      return false;
    }

    return filledOptions.filter(option => option.trueOption).length === 1;
  }

  private getFilledOptions(): QuestionMasterOption[] {
    return this.answerOptions
      .map(option => ({
        ...option,
        optionDescription: option.optionDescription.trim(),
      }))
      .filter(option => option.optionDescription);
  }

  private createDefaultOptions(): QuestionMasterOption[] {
    return ['A', 'B', 'C', 'D'].map((opt, index) => ({
      slNo: index + 1,
      opt,
      optionDescription: '',
      trueOption: false,
    }));
  }

  private hasQuestionContent(): boolean {
    const html = this.question?.trim() ?? '';
    if (!html || html === '<p><br></p>') {
      return false;
    }

    const container = document.createElement('div');
    container.innerHTML = html;
    const hasText = Boolean(container.textContent?.replace(/\u00a0/g, ' ').trim());
    const hasFormula = container.querySelector('.ql-formula') != null;
    return hasText || hasFormula;
  }

  private resetQuestionFields(): void {
    this.question = '';
    this.seqNo = 0;
    this.answerOptions = this.createDefaultOptions();
  }
}
