import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { PageHeaderComponent } from '@shared';
import { ToastrService } from 'ngx-toastr';
import { IClass } from '../../../interfaces/IClassmaster';
import { ICollege } from '../../../interfaces/ICollege';
import { IExam } from '../../../interfaces/IExam';
import { IOnlineExamListItem, IOnlineExamScheduleRow } from '../../../interfaces/IOnlineExam';
import { ISession } from '../../../interfaces/isession';
import { ISubject } from '../../../interfaces/ISubjectMst';
import { ExamSetupService } from '../../../services/examservice/exam-setup.service';
import { CollegeService } from '../../../services/masterservice/college.service';
import { SessionService } from '../../../services/masterservice/session.service';
import { SubjectmasterService } from '../../../services/masterservice/subjectmaster.service';
import { OnlineExamListService } from '../../../services/onlineexamservice/online-exam-list.service';

@Component({
  selector: 'app-onlineexamlist',
  host: { class: 'admin-page-host' },
  imports: [
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressBarModule,
    MatSelectModule,
    MatTableModule,
    PageHeaderComponent,
  ],
  templateUrl: './onlineexamlist.component.html',
  styleUrl: './onlineexamlist.component.scss',
})
export class OnlineexamlistComponent implements OnInit {
  private readonly sessionService = inject(SessionService);
  private readonly collegeService = inject(CollegeService);
  private readonly subjectService = inject(SubjectmasterService);
  private readonly examSetupService = inject(ExamSetupService);
  private readonly onlineExamListService = inject(OnlineExamListService);
  private readonly toast = inject(ToastrService);

  sessions: ISession[] = [];
  colleges: ICollege[] = [];
  classes: IClass[] = [];
  exams: IExam[] = [];
  scheduleRows: IOnlineExamScheduleRow[] = [];
  savedExamList: IOnlineExamListItem[] = [];

  selectedSessionId: number | null = null;
  selectedCollegeId: number | null = null;
  selectedCourseId: number | null = null;
  selectedExamId: number | null = null;

  readonly timeOptions = this.buildTimeOptions();
  readonly durationOptions = ['15 Minute', '30 Minute', '45 Minute', '60 Minute', '90 Minute', '120 Minute'];
  readonly examTypeOptions = ['Optional', 'Mandatory'];
  readonly displayedColumns = ['slNo', 'subjectName', 'examDate', 'examTime', 'duration', 'examType'];

  loadingClasses = false;
  loadingExams = false;
  loadingSubjects = false;
  loadingList = false;
  saving = false;

  ngOnInit(): void {
    this.loadSessions();
    this.loadColleges();
  }

  onSessionOrCollegeChange(): void {
    this.selectedSessionId = this.toNumber(this.selectedSessionId);
    this.selectedCollegeId = this.toNumber(this.selectedCollegeId);
    this.selectedCourseId = null;
    this.selectedExamId = null;
    this.classes = [];
    this.exams = [];
    this.scheduleRows = [];
    this.savedExamList = [];

    if (this.selectedSessionId == null || this.selectedCollegeId == null) {
      return;
    }

    this.loadExams();
    this.loadClasses();
  }

  onClassChange(classId: number | string | null): void {
    this.selectedCourseId = this.toNumber(classId);
    this.scheduleRows = [];
    this.savedExamList = [];

    if (this.selectedCourseId == null) {
      return;
    }

    if (this.selectedExamId != null) {
      this.loadScheduleData();
    }
  }

  onExamChange(examId: number | string | null): void {
    this.selectedExamId = this.toNumber(examId);
    this.scheduleRows = [];
    this.savedExamList = [];

    if (this.selectedExamId == null || this.selectedCourseId == null) {
      return;
    }

    this.loadScheduleData();
  }

  get hasDatedRows(): boolean {
    return this.scheduleRows.some(row => !!row.examDate?.trim());
  }

  get showExamListEntry(): boolean {
    return this.selectedExamId != null && this.selectedCourseId != null;
  }

  onExamDateModelChange(row: IOnlineExamScheduleRow, value: unknown): void {
    row.examDate = this.formatExamDateValue(value);
  }

  submitExam(): void {
    const rowsToSubmit = this.scheduleRows.filter(row => row.examDate?.trim());
    const validationMessage = this.getSubmitValidationMessage(rowsToSubmit);

    if (validationMessage) {
      this.toast.warning(validationMessage);
      return;
    }

    const payloads = this.onlineExamListService.buildAddPayloads(rowsToSubmit, {
      examId: this.toNumber(this.selectedExamId)!,
      classId: this.toNumber(this.selectedCourseId)!,
    });

    this.saving = true;
    this.onlineExamListService.addOnlineExamList(payloads).subscribe({
      next: res => {
        this.saving = false;
        if (res.success) {
          this.toast.success(res.message || 'Exam schedule saved successfully.');
          this.loadScheduleData();
        } else {
          this.toast.error(res.message || 'Failed to save exam schedule.');
        }
      },
      error: err => {
        this.saving = false;
        const message =
          err?.error?.message ??
          (typeof err?.error === 'string' ? err.error : null) ??
          err?.message;
        this.toast.error(message || 'Failed to save exam schedule.');
      },
    });
  }

  private getSubmitValidationMessage(rowsToSubmit: IOnlineExamScheduleRow[]): string {
    if (
      this.toNumber(this.selectedSessionId) == null ||
      this.toNumber(this.selectedCollegeId) == null ||
      this.toNumber(this.selectedCourseId) == null ||
      this.toNumber(this.selectedExamId) == null
    ) {
      return 'Select Session, College, Class, and Exam.';
    }

    if (!rowsToSubmit.length) {
      return 'Select exam date for at least one subject.';
    }

    if (rowsToSubmit.some(row => this.toNumber(row.subjectId) == null || this.toNumber(row.subjectId)! <= 0)) {
      return 'Subject ID missing for one or more selected rows — reload class subjects and try again.';
    }

    if (rowsToSubmit.some(row => !row.examTime?.trim() || !row.duration?.trim() || !row.examType?.trim())) {
      return 'Complete time, duration, and exam type for each subject with a selected date.';
    }

    return '';
  }

  private toNumber(value: unknown): number | null {
    if (value == null || value === '') {
      return null;
    }

    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : null;
  }

  private readSubjectId(item: Record<string, unknown>): number {
    const value =
      item['subjectId'] ??
      item['SubjectId'] ??
      item['subjectID'] ??
      item['classSectionSubjectId'] ??
      item['ClassSectionSubjectId'];
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : 0;
  }

  private loadScheduleData(): void {
    if (this.selectedCourseId == null) {
      return;
    }

    if (this.selectedExamId == null) {
      this.loadClassSubjectsOnly(this.selectedCourseId);
      return;
    }

    this.loadingList = true;
    this.loadingSubjects = true;

    this.onlineExamListService
      .listOnlineExams({
        ExamId: this.selectedExamId!,
        ClassId: this.selectedCourseId!,
      })
      .subscribe({
        next: res => {
          this.loadingList = false;
          const apiRows = this.normalizeListItems(this.extractListRows(res));

          if (res.success || apiRows.length) {
            this.savedExamList = [...apiRows];
            this.loadClassSubjectsAndMerge(apiRows);
          } else {
            this.savedExamList = [];
            this.loadClassSubjectsOnly(this.selectedCourseId!);
          }
        },
        error: () => {
          this.loadingList = false;
          this.savedExamList = [];
          this.loadClassSubjectsOnly(this.selectedCourseId!);
          this.toast.error('Failed to load online exam list.');
        },
      });
  }

  private loadClassSubjectsOnly(classId: number): void {
    this.loadingSubjects = true;
    this.subjectService.listClassSubjects(classId).subscribe({
      next: res => {
        this.loadingSubjects = false;
        if (res.success && res.data) {
          const subjects = this.normalizeSubjects(res.data);
          this.scheduleRows = subjects.map(subject => this.createScheduleRow(subject));
          if (!this.scheduleRows.length) {
            this.toast.info(res.message || 'No subjects found for selected class.');
          }
        } else {
          this.scheduleRows = [];
        }
      },
      error: () => {
        this.loadingSubjects = false;
        this.scheduleRows = [];
        this.toast.error('Failed to load subjects.');
      },
    });
  }

  private loadClassSubjectsAndMerge(apiRows: IOnlineExamListItem[]): void {
    if (this.selectedCourseId == null) {
      return;
    }

    this.subjectService.listClassSubjects(this.selectedCourseId).subscribe({
      next: res => {
        this.loadingSubjects = false;
        if (res.success && res.data) {
          const subjects = this.normalizeSubjects(res.data);
          this.scheduleRows = this.mergeScheduleWithApi(subjects, apiRows);
          if (!this.scheduleRows.length) {
            this.scheduleRows = apiRows
              .map(item => this.mapApiRowToSchedule(item))
              .filter((row): row is IOnlineExamScheduleRow => row != null);
          }
        } else if (apiRows.length) {
          this.scheduleRows = apiRows
            .map(item => this.mapApiRowToSchedule(item))
            .filter((row): row is IOnlineExamScheduleRow => row != null);
        } else {
          this.scheduleRows = [];
        }
      },
      error: () => {
        this.loadingSubjects = false;
        this.scheduleRows = apiRows
          .map(item => this.mapApiRowToSchedule(item))
          .filter((row): row is IOnlineExamScheduleRow => row != null);
      },
    });
  }

  private mergeScheduleWithApi(
    subjects: ISubject[],
    apiRows: IOnlineExamListItem[]
  ): IOnlineExamScheduleRow[] {
    return subjects.map(subject => {
      const existing = apiRows.find(
        item =>
          this.toNumber(item.subjectId) === subject.subjectId ||
          item.subjectName?.trim().toLowerCase() === subject.subjectName.trim().toLowerCase()
      );

      if (existing) {
        return this.mapApiRowToSchedule(existing, subject);
      }

      return this.createScheduleRow(subject);
    }).filter((row): row is IOnlineExamScheduleRow => row != null);
  }

  private mapApiRowToSchedule(
    item: IOnlineExamListItem,
    subject?: ISubject
  ): IOnlineExamScheduleRow | null {
    const subjectId = this.toNumber(item.subjectId) ?? subject?.subjectId ?? 0;
    if (subjectId <= 0) {
      return null;
    }

    const examDate = this.normalizeDate(item.examDate);
    return {
      onlineExamId: item.onlineExamId,
      subjectId,
      subjectName: item.subjectName?.trim() ?? subject?.subjectName?.trim() ?? '',
      examDate,
      examDateModel: this.parseExamDateForModel(examDate),
      examTime: this.normalizeExamTimeForUi(item.examTime) || '7:00 AM',
      duration:
        item.duration?.trim() ||
        this.formatDurationFromMinutes(this.toNumber(item.examDuration)) ||
        '15 Minute',
      examType: this.normalizeExamTypeForUi(item.examType) || 'Optional',
    };
  }

  private extractListRows(res: { data?: unknown }): IOnlineExamListItem[] {
    const data = res?.data;
    if (Array.isArray(data)) {
      return data as IOnlineExamListItem[];
    }
    if (data && typeof data === 'object') {
      return [data as IOnlineExamListItem];
    }
    return [];
  }

  private normalizeListItems(data: IOnlineExamListItem[]): IOnlineExamListItem[] {
    return data
      .map(item => {
        const raw = item as IOnlineExamListItem & Record<string, unknown>;
        const examDuration = this.toNumber(raw['examDuration'] ?? item.examDuration);
        const rawDate = String(item.examDate ?? raw['examDate'] ?? '').trim();
        const rawTime = String(item.examTime ?? raw['examTime'] ?? '').trim();
        const rawType = String(item.examType ?? raw['examType'] ?? '').trim();

        return {
          onlineExamId: item.onlineExamId ?? (raw['onlineExamListId'] as number | undefined),
          examId: item.examId ?? this.toNumber(raw['examId']) ?? undefined,
          examName: String(item.examName ?? raw['examName'] ?? '').trim() || undefined,
          classId: item.classId,
          courseName: String(item.courseName ?? raw['courseName'] ?? '').trim() || undefined,
          subjectId: this.readSubjectId(raw),
          subjectName: item.subjectName?.trim() ?? String(raw['SubjectName'] ?? '').trim(),
          examDate: rawDate ? this.formatDateForDisplay(rawDate) : '',
          examTime: this.normalizeExamTimeForUi(rawTime),
          duration: this.formatDurationFromMinutes(examDuration),
          examDuration: examDuration ?? undefined,
          examType: this.normalizeExamTypeForUi(rawType),
          publishStatus: String(
            item.publishStatus ?? raw['publishStatus'] ?? raw['publisStatus'] ?? ''
          ).trim() || undefined,
        };
      })
      .filter(item => item.subjectName && item.subjectId > 0);
  }

  private formatDateForDisplay(value: string): string {
    const normalized = this.normalizeDate(value);
    if (/^\d{4}-\d{2}-\d{2}$/.test(normalized)) {
      const [year, month, day] = normalized.split('-').map(Number);
      const date = new Date(year, month - 1, day);
      if (!Number.isNaN(date.getTime())) {
        return date.toLocaleDateString('en-GB', {
          day: '2-digit',
          month: 'short',
          year: 'numeric',
        }).replace(/ /g, '-');
      }
    }
    return value.trim();
  }

  private formatDurationFromMinutes(minutes: number | null | undefined): string {
    if (minutes == null || minutes <= 0) {
      return '';
    }
    return `${minutes} Minute`;
  }

  private normalizeExamTimeForUi(value?: string): string {
    const trimmed = value?.trim() ?? '';
    if (!trimmed) {
      return '';
    }

    const spaced = trimmed.replace(/(\d)(AM|PM)$/i, '$1 $2');
    const match = spaced.match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
    if (!match) {
      return trimmed;
    }

    const hour = Number(match[1]);
    const minute = match[2];
    const meridiem = match[3].toUpperCase();
    return `${hour}:${minute} ${meridiem}`;
  }

  private normalizeExamTypeForUi(value?: string): string {
    const trimmed = value?.trim() ?? '';
    if (!trimmed) {
      return '';
    }
    return trimmed.charAt(0).toUpperCase() + trimmed.slice(1).toLowerCase();
  }

  private normalizeDate(value?: string): string {
    if (!value) {
      return '';
    }

    const trimmed = value.trim();
    if (/^\d{4}-\d{2}-\d{2}$/.test(trimmed)) {
      return trimmed;
    }

    const ddMonYyyy = trimmed.match(/^(\d{1,2})-([A-Za-z]{3})-(\d{4})$/);
    if (ddMonYyyy) {
      const day = Number(ddMonYyyy[1]);
      const monthName = ddMonYyyy[2].toLowerCase();
      const year = Number(ddMonYyyy[3]);
      const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
      const monthIndex = months.indexOf(monthName);
      if (monthIndex >= 0) {
        return this.formatExamDate(new Date(year, monthIndex, day));
      }
    }

    const parsed = new Date(trimmed);
    if (Number.isNaN(parsed.getTime())) {
      return trimmed;
    }

    return this.formatExamDate(parsed);
  }

  private formatExamDateValue(value: unknown): string {
    if (value == null || value === '') {
      return '';
    }

    if (typeof value === 'object' && value !== null && 'format' in value) {
      const formatted = (value as { format: (pattern: string) => string }).format('YYYY-MM-DD');
      return formatted && formatted !== 'Invalid date' ? formatted : '';
    }

    if (value instanceof Date) {
      return Number.isNaN(value.getTime()) ? '' : this.formatExamDate(value);
    }

    if (typeof value === 'object' && value !== null && 'toDate' in value) {
      const date = (value as { toDate: () => Date }).toDate();
      return Number.isNaN(date.getTime()) ? '' : this.formatExamDate(date);
    }

    if (typeof value === 'string') {
      return this.normalizeDate(value);
    }

    return '';
  }

  private formatExamDate(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
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

  private loadClasses(): void {
    if (this.selectedSessionId == null || this.selectedCollegeId == null) {
      return;
    }

    this.loadingClasses = true;
    this.collegeService
      .getClassListBySessionAndCollege(this.selectedSessionId, this.selectedCollegeId)
      .subscribe({
        next: res => {
          this.loadingClasses = false;
          this.classes = res.success && res.data ? (Array.isArray(res.data) ? res.data : [res.data]) : [];
          if (!this.classes.length) {
            this.toast.info(res.message || 'No classes found for selected session and college.');
          }
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

  private normalizeSubjects(data: ISubject[] | ISubject): ISubject[] {
    const rows = Array.isArray(data) ? data : [data];
    return rows
      .map(item => {
        const raw = item as ISubject & Record<string, unknown>;
        const subjectId = this.readSubjectId(raw);
        return {
          subjectId,
          subjectName: item.subjectName?.trim() ?? String(raw['SubjectName'] ?? '').trim(),
          subjectCode: item.subjectCode?.trim() ?? String(raw['SubjectCode'] ?? '').trim(),
          subjectType: item.subjectType ?? String(raw['SubjectType'] ?? ''),
          subjectSeq: item.subjectSeq ?? Number(raw['SubjectSeq'] ?? 0),
        };
      })
      .filter(item => item.subjectName && item.subjectId > 0);
  }

  private createScheduleRow(subject: ISubject): IOnlineExamScheduleRow {
    return {
      subjectId: subject.subjectId,
      subjectName: subject.subjectName,
      examDate: '',
      examDateModel: null,
      examTime: '7:00 AM',
      duration: '15 Minute',
      examType: 'Optional',
    };
  }

  private parseExamDateForModel(value?: string): Date | null {
    if (!value?.trim()) {
      return null;
    }

    const trimmed = value.trim();
    if (/^\d{4}-\d{2}-\d{2}$/.test(trimmed)) {
      const [year, month, day] = trimmed.split('-').map(Number);
      return new Date(year, month - 1, day);
    }

    const parsed = new Date(trimmed);
    return Number.isNaN(parsed.getTime()) ? null : parsed;
  }

  private buildTimeOptions(): string[] {
    const options: string[] = [];
    for (let hour = 6; hour <= 20; hour++) {
      for (const minute of [0, 30]) {
        const date = new Date(2000, 0, 1, hour, minute);
        options.push(
          date.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true,
          })
        );
      }
    }
    return options;
  }
}
