import {

  AfterViewInit,

  Component,

  inject,

  Input,

  OnInit,

  TemplateRef,

  ViewChild,

} from '@angular/core';

import { FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';

import { MatCardModule } from '@angular/material/card';

import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { MatFormFieldModule } from '@angular/material/form-field';

import { MatIconModule } from '@angular/material/icon';

import { MatInputModule } from '@angular/material/input';

import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

import { MatProgressBarModule } from '@angular/material/progress-bar';

import { MatSelectModule } from '@angular/material/select';

import { MatTableDataSource, MatTableModule } from '@angular/material/table';

import { ToastrService } from 'ngx-toastr';

import { ICollege } from '../../../interfaces/ICollege';

import { IScholasticArea, IScholasticSkill } from '../../../interfaces/IScholastic';

import { ISession } from '../../../interfaces/isession';

import { CollegeService } from '../../../services/masterservice/college.service';

import { SessionService } from '../../../services/masterservice/session.service';

import { ExamSetupService } from '../../../services/examservice/exam-setup.service';



@Component({

  selector: 'app-scholastic-skills',

  host: { class: 'admin-page-host' },

  imports: [

    FormsModule,

    MatButtonModule,

    MatCardModule,

    MatDialogModule,

    MatFormFieldModule,

    MatIconModule,

    MatInputModule,

    MatPaginatorModule,

    MatProgressBarModule,

    MatSelectModule,

    MatTableModule,

  ],

  templateUrl: './scholastic-skills.component.html',

  styleUrl: './scholastic-skills.component.scss',

})

export class ScholasticSkillsComponent implements OnInit, AfterViewInit {

  @Input() embedded = false;



  private readonly sessionService = inject(SessionService);

  private readonly collegeService = inject(CollegeService);

  private readonly examSetupService = inject(ExamSetupService);

  private readonly toast = inject(ToastrService);

  private readonly dialog = inject(MatDialog);



  sessions: ISession[] = [];

  colleges: ICollege[] = [];

  scholasticAreas: IScholasticArea[] = [];



  selectedSessionId: number | null = null;

  selectedCollegeId: number | null = null;

  filterGroupName = '';



  addSessionId: number | null = null;

  addCollegeId: number | null = null;

  addGroupName: string | null = null;

  addScholastic: string | null = null;

  selectedScholasticAreaId: number | null = null;

  skillName = '';



  isLoading = false;

  isLoadingAreas = false;

  isSaving = false;



  readonly groupOptions = ['Nursery', 'Kg', 'Primary', 'VI-VII', 'IX-X', 'XI-XII'];

  readonly coScholasticOptions = ['Areas'];



  dataSource = new MatTableDataSource<IScholasticSkill>([]);

  displayedColumns = ['index', 'skillName', 'areaName'];



  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @ViewChild('addDialog') addDialog!: TemplateRef<void>;



  ngOnInit(): void {

    this.loadSessions();

    this.loadColleges();

  }



  ngAfterViewInit(): void {

    this.dataSource.paginator = this.paginator;

  }



  loadSessions(): void {

    this.sessionService.getSessionList().subscribe({

      next: res => {

        if (res.success) {

          this.sessions = Array.isArray(res.data) ? res.data : [res.data];

        }

      },

    });

  }



  loadColleges(): void {

    this.collegeService.getCollegeList().subscribe({

      next: res => {

        if (res.success) {

          this.colleges = Array.isArray(res.data) ? res.data : [res.data];

        }

      },

    });

  }



  onFilterChange(): void {

    this.dataSource.data = [];

  }



  loadScholasticSkills(): void {

    if (this.selectedSessionId == null || this.selectedCollegeId == null) {

      this.toast.warning('Please select session and college.');

      return;

    }



    const groupName = this.filterGroupName.trim();

    if (!groupName) {

      this.toast.warning('Please enter group name.');

      return;

    }



    this.isLoading = true;

    this.examSetupService

      .listScholasticSkills({

        sessionId: this.selectedSessionId,

        collegeId: this.selectedCollegeId,

        groupName,

      })

      .subscribe({

        next: res => {

          this.isLoading = false;

          if (res.success && res.data) {

            this.dataSource.data = Array.isArray(res.data) ? res.data : [res.data];

          } else {

            this.dataSource.data = [];

            if (res.message) {

              this.toast.info(res.message);

            }

          }

        },

        error: () => {

          this.isLoading = false;

          this.dataSource.data = [];

          this.toast.error('Failed to load scholastic skills.');

        },

      });

  }



  openAddDialog(): void {

    this.resetForm();

    this.addSessionId = this.selectedSessionId;

    this.addCollegeId = this.selectedCollegeId;

    this.addGroupName = this.filterGroupName.trim() || null;

    this.dialog.open(this.addDialog, { width: 'min(520px, 92vw)', maxWidth: '95vw' });

  }



  onAddFilterChange(): void {

    this.selectedScholasticAreaId = null;

    this.loadScholasticAreasForAdd();

  }



  loadScholasticAreasForAdd(): void {

    if (this.addSessionId == null || this.addCollegeId == null || !this.addGroupName || !this.addScholastic) {

      this.scholasticAreas = [];

      return;

    }



    this.isLoadingAreas = true;

    this.examSetupService

      .listScholasticAreas({

        collegeId: this.addCollegeId,

        sessionId: this.addSessionId,

        scholastic: this.addScholastic,

        groupName: this.addGroupName,

      })

      .subscribe({

        next: res => {

          this.isLoadingAreas = false;

          if (res.success && res.data) {

            this.scholasticAreas = Array.isArray(res.data) ? res.data : [res.data];

          } else {

            this.scholasticAreas = [];

          }

        },

        error: () => {

          this.isLoadingAreas = false;

          this.scholasticAreas = [];

          this.toast.error('Failed to load co-scholastic names.');

        },

      });

  }



  saveScholasticSkill(): void {

    if (this.addSessionId == null || this.addCollegeId == null) {

      this.toast.warning('Please select session and college.');

      return;

    }



    if (!this.addGroupName) {

      this.toast.warning('Please select group.');

      return;

    }



    if (!this.addScholastic) {

      this.toast.warning('Please select co-scholastic.');

      return;

    }



    if (this.selectedScholasticAreaId == null) {

      this.toast.warning('Please select co-scholastic name.');

      return;

    }



    const name = this.skillName.trim();

    if (!name) {

      this.toast.warning('Please enter skill.');

      return;

    }



    this.isSaving = true;

    this.examSetupService

      .createScholasticSkill({

        skillName: name,

        scholasticAreaId: this.selectedScholasticAreaId,

      })

      .subscribe({

        next: res => {

          this.isSaving = false;

          if (res.success) {

            this.toast.success(res.message || 'Scholastic skill added successfully.');

            this.dialog.closeAll();

            this.selectedSessionId = this.addSessionId;

            this.selectedCollegeId = this.addCollegeId;

            this.filterGroupName = this.addGroupName ?? '';

            this.resetForm();

            this.loadScholasticSkills();

          } else {

            this.toast.error(res.message || 'Failed to add scholastic skill.');

          }

        },

        error: () => {

          this.isSaving = false;

          this.toast.error('Failed to add scholastic skill.');

        },

      });

  }



  resetForm(): void {

    this.addSessionId = null;

    this.addCollegeId = null;

    this.addGroupName = null;

    this.addScholastic = null;

    this.selectedScholasticAreaId = null;

    this.skillName = '';

    this.scholasticAreas = [];

  }



  rowIndex(index: number): number {

    const paginator = this.dataSource.paginator;

    return paginator ? paginator.pageIndex * paginator.pageSize + index + 1 : index + 1;

  }

}


