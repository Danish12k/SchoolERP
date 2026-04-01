import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { ISection } from '../../../interfaces/IClassAndSection';
import { SectionService } from '../../../services/section.service';

/**
 * Reusable section (+ optional Active) filter bound to a parent {@link FormGroup}.
 * Parent must declare controls matching {@link sectionKey} and optionally {@link activeKey}.
 */
@Component({
  selector: 'app-section-filter',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatSelectModule],
  templateUrl: './section-filter.component.html',
  styleUrl: './section-filter.component.scss',
  host: {
    '[class.section-filter--inline]': 'inline',
  },
})
export class SectionFilterComponent implements OnInit {
  private sectionService = inject(SectionService);

  /** Parent form that contains the section (and optional active) controls. */
  @Input({ required: true }) form!: FormGroup;

  /** Form control name for section id (default `sectionId`). */
  @Input() sectionKey = 'sectionId';

  /** Form control name for active flag 1/0 (default `active`). */
  @Input() activeKey = 'active';

  /** Show Active / Inactive selector (default true). */
  @Input() showActive = true;

  @Input() sectionLabel = 'Select section';
  @Input() activeLabel = 'Status';
  @Input() appearance: 'fill' | 'outline' = 'outline';

  /**
   * When true, host uses `display: contents` so fields participate in a parent CSS grid
   * (e.g. Assign Section row). When false, this component lays out its own grid.
   */
  @Input() inline = false;

  /** Emits when section or active selection changes. */
  @Output() filterChange = new EventEmitter<void>();

  sections: ISection[] = [];

  ngOnInit(): void {
    this.loadSections();
  }

  get sectionControl(): FormControl<number | null> {
    return this.form.get(this.sectionKey) as FormControl<number | null>;
  }

  get activeControl(): FormControl<number> | null {
    if (!this.showActive) {
      return null;
    }
    return this.form.get(this.activeKey) as FormControl<number>;
  }

  loadSections(): void {
    this.sectionService.getSectionList().subscribe({
      next: (res) => {
        if (res.success && res.data != null) {
          this.sections = Array.isArray(res.data) ? res.data : [res.data];
        } else {
          this.sections = [];
        }
      },
      error: () => {
        this.sections = [];
      },
    });
  }

  onSelectionChange(): void {
    this.filterChange.emit();
  }
}
