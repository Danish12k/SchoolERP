import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MaterialModule } from '../../../../../schematics/ng-add/files/module-files/app/material.module';
import { IAssignSectionList } from '../../../interfaces/IClassAndSection';
import { IClass } from '../../../interfaces/IClassmaster';
import { ICollege } from '../../../interfaces/ICollege';
import { IFeeInstallment } from '../../../interfaces/IFeeMaster';
import { IFeeReportFilterSelection } from '../../../interfaces/IFeeReport';
import { ISession } from '../../../interfaces/isession';
import { CollegeService } from '../../../services/masterservice/college.service';
import { SectionService } from '../../../services/masterservice/section.service';
import { SessionService } from '../../../services/masterservice/session.service';
import { FeeMasterService } from '../../../services/feeservice/fee-master.service';

const SELECT_ALL_VALUE = -1;

@Component({
  selector: 'app-filterfeereport',
  imports: [MaterialModule, MatCardModule, ReactiveFormsModule],
  templateUrl: './filterfeereport.component.html',
  styleUrl: './filterfeereport.component.scss',
})
export class FilterfeereportComponent implements OnInit {
  @Output() filterChange = new EventEmitter<IFeeReportFilterSelection>();

  private fb = inject(FormBuilder);
  private sessionService = inject(SessionService);
  private sectionService = inject(SectionService);
  private collegeService = inject(CollegeService);
  private feeMasterService = inject(FeeMasterService);

  readonly selectAllValue = SELECT_ALL_VALUE;

  feeFilterForm!: FormGroup;
  sessions: ISession[] = [];
  schools: ICollege[] = [];
  classs: IClass[] = [];
  sections: IAssignSectionList[] = [];
  installments: IFeeInstallment[] = [];

  loadingClasses = false;
  loadingSections = false;
  loadingInstallments = false;
  errorMessage: string | null = null;

  ngOnInit(): void {
    this.feeFilterForm = this.fb.group({
      sessionId: [null, [Validators.required, Validators.min(1)]],
      collegeId: [null, [Validators.required, Validators.min(1)]],
      courseId: [null, [Validators.required, Validators.min(1)]],
      classSectionIds: [[] as number[]],
      installmentIds: [[] as number[]],
    });

    this.loadSession();
    this.loadCollege();
  }

  get allSectionIds(): number[] {
    return this.sections.map(item => item.classSectionId);
  }

  get allInstallmentIds(): number[] {
    return this.installments.map(item => item.installmentId);
  }

  get sectionTriggerLabel(): string {
    const selected = this.normalizeSectionIds(
      (this.feeFilterForm?.get('classSectionIds')?.value as number[]) ?? []
    );
    if (!selected.length) {
      return '';
    }
    if (this.allSectionIds.length > 0 && selected.length === this.allSectionIds.length) {
      return 'All';
    }
    const names = this.sections
      .filter(item => selected.includes(item.classSectionId))
      .map(item => item.displayName || item.sectionName || item.section || String(item.classSectionId));
    return names.join(', ');
  }

  get installmentTriggerLabel(): string {
    const selected = this.normalizeInstallmentIds(
      (this.feeFilterForm?.get('installmentIds')?.value as number[]) ?? []
    );
    if (!selected.length) {
      return '';
    }
    if (
      this.allInstallmentIds.length > 0 &&
      selected.length === this.allInstallmentIds.length
    ) {
      return 'All';
    }
    const names = this.installments
      .filter(item => selected.includes(item.installmentId))
      .map(item => item.installmentName);
    return names.join(', ');
  }

  loadSession(): void {
    this.sessionService.getSessionList().subscribe(res => {
      this.sessions = Array.isArray(res.data) ? res.data : [res.data];
    });
  }

  loadCollege(): void {
    this.collegeService.getCollegeList().subscribe(res => {
      this.schools = Array.isArray(res.data) ? res.data : [res.data];
    });
  }

  onSessionOrSchoolChange(): void {
    this.feeFilterForm.patchValue({
      courseId: null,
      classSectionIds: [],
      installmentIds: [],
    });
    this.classs = [];
    this.sections = [];
    this.installments = [];
    this.errorMessage = null;
    this.emitFilterChange();

    const sessionId = this.feeFilterForm.get('sessionId')?.value;
    const collegeId = this.feeFilterForm.get('collegeId')?.value;
    if (!sessionId || !collegeId) {
      return;
    }

    this.loadingClasses = true;
    this.collegeService.getClassListBySessionAndCollege(sessionId, collegeId).subscribe({
      next: res => {
        this.loadingClasses = false;
        if (res.success && res.data) {
          this.classs = Array.isArray(res.data) ? res.data : [res.data];
        } else {
          this.errorMessage = res.message || 'No assigned classes found.';
        }
      },
      error: () => {
        this.loadingClasses = false;
        this.errorMessage = 'Could not load assigned classes.';
      },
    });

    this.loadInstallments(collegeId, sessionId);
  }

  onClassChange(): void {
    this.feeFilterForm.patchValue({ classSectionIds: [] });
    this.sections = [];
    this.errorMessage = null;
    this.emitFilterChange();

    const courseId = this.feeFilterForm.get('courseId')?.value;
    if (!courseId) {
      return;
    }

    this.loadingSections = true;
    this.sectionService.getSectionListByClass(courseId).subscribe({
      next: res => {
        this.loadingSections = false;
        if (res.success && res.data) {
          this.sections = Array.isArray(res.data) ? res.data : [res.data];
        } else {
          this.errorMessage = res.message || 'No assigned sections found.';
        }
      },
      error: () => {
        this.loadingSections = false;
        this.errorMessage = 'Could not load assigned sections.';
      },
    });
  }

  onSectionSelectionChange(selected: number[]): void {
    const nextIds = this.resolveSectionSelection(selected);
    this.feeFilterForm.patchValue({ classSectionIds: nextIds }, { emitEvent: false });
    this.emitFilterChange();
  }

  onInstallmentSelectionChange(selected: number[]): void {
    const nextIds = this.resolveInstallmentSelection(selected);
    this.feeFilterForm.patchValue({ installmentIds: nextIds }, { emitEvent: false });
    this.emitFilterChange();
  }

  clearFilter(): void {
    this.feeFilterForm.reset({
      sessionId: null,
      collegeId: null,
      courseId: null,
      classSectionIds: [],
      installmentIds: [],
    });
    this.classs = [];
    this.sections = [];
    this.installments = [];
    this.errorMessage = null;
    this.emitFilterChange();
  }

  private loadInstallments(collegeId: number, sessionId: number): void {
    this.loadingInstallments = true;
    this.feeMasterService.listFeeInstallment(collegeId, sessionId).subscribe({
      next: res => {
        this.loadingInstallments = false;
        if (res.success && res.data != null) {
          this.installments = Array.isArray(res.data) ? res.data : [res.data];
        } else {
          this.installments = [];
        }
      },
      error: () => {
        this.loadingInstallments = false;
        this.installments = [];
      },
    });
  }

  private resolveSectionSelection(selected: number[]): number[] {
    const raw = Array.isArray(selected) ? selected : [];
    if (raw.includes(SELECT_ALL_VALUE)) {
      const withoutAll = raw.filter(id => id !== SELECT_ALL_VALUE);
      const allSelected =
        this.allSectionIds.length > 0 && withoutAll.length === this.allSectionIds.length;
      return allSelected ? [] : [...this.allSectionIds];
    }
    return this.normalizeSectionIds(raw);
  }

  private resolveInstallmentSelection(selected: number[]): number[] {
    const raw = Array.isArray(selected) ? selected : [];
    if (raw.includes(SELECT_ALL_VALUE)) {
      const withoutAll = raw.filter(id => id !== SELECT_ALL_VALUE);
      const allSelected =
        this.allInstallmentIds.length > 0 &&
        withoutAll.length === this.allInstallmentIds.length;
      return allSelected ? [] : [...this.allInstallmentIds];
    }
    return this.normalizeInstallmentIds(raw);
  }

  private normalizeSectionIds(ids: number[]): number[] {
    const allowed = new Set(this.allSectionIds);
    return [...new Set(ids.filter(id => id !== SELECT_ALL_VALUE && allowed.has(id)))];
  }

  private normalizeInstallmentIds(ids: number[]): number[] {
    const allowed = new Set(this.allInstallmentIds);
    return [...new Set(ids.filter(id => id !== SELECT_ALL_VALUE && allowed.has(id)))];
  }

  private emitFilterChange(): void {
    this.filterChange.emit(this.currentSelection());
  }

  private currentSelection(): IFeeReportFilterSelection {
    const value = this.feeFilterForm?.value ?? {};
    const classSectionIds = this.normalizeSectionIds(
      (value.classSectionIds as number[]) ?? []
    );
    const allSectionsSelected =
      this.allSectionIds.length > 0 &&
      classSectionIds.length === this.allSectionIds.length;

    return {
      sessionId: value.sessionId ?? null,
      collegeId: value.collegeId ?? null,
      courseId: value.courseId ?? null,
      classSectionIds,
      allSectionsSelected,
      installmentIds: this.normalizeInstallmentIds(
        (value.installmentIds as number[]) ?? []
      ),
    };
  }
}
