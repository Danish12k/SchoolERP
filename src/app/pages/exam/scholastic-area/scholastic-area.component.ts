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

import { IScholasticArea } from '../../../interfaces/IScholastic';

import { ISession } from '../../../interfaces/isession';

import { CollegeService } from '../../../services/masterservice/college.service';

import { SessionService } from '../../../services/masterservice/session.service';

import { ExamSetupService } from '../../../services/examservice/exam-setup.service';



@Component({

  selector: 'app-scholastic-area',

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

  templateUrl: './scholastic-area.component.html',

  styleUrl: './scholastic-area.component.scss',

})

export class ScholasticAreaComponent implements OnInit, AfterViewInit {

  @Input() embedded = false;



  private readonly sessionService = inject(SessionService);

  private readonly collegeService = inject(CollegeService);

  private readonly examSetupService = inject(ExamSetupService);

  private readonly toast = inject(ToastrService);

  private readonly dialog = inject(MatDialog);



  sessions: ISession[] = [];

  colleges: ICollege[] = [];



  selectedSessionId: number | null = null;

  selectedCollegeId: number | null = null;

  filterGroupName = '';

  filterScholastic = '';



  addSessionId: number | null = null;

  addCollegeId: number | null = null;

  addGroupName: string | null = null;

  addScholastic: string | null = null;

  areaName = '';



  isLoading = false;

  isSaving = false;



  readonly groupOptions = ['Nursery', 'Kg', 'Primary', 'VI-VII', 'IX-X', 'XI-XII'];

  readonly coScholasticOptions = ['Areas'];



  dataSource = new MatTableDataSource<IScholasticArea>([]);

  displayedColumns = ['index', 'areaName', 'groupName', 'scholastic'];



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



  loadScholasticAreas(): void {

    if (this.selectedSessionId == null || this.selectedCollegeId == null) {

      this.toast.warning('Please select session and college.');

      return;

    }



    const scholastic = this.filterScholastic.trim();

    const groupName = this.filterGroupName.trim();

    if (!scholastic || !groupName) {

      this.toast.warning('Please enter scholastic and group name.');

      return;

    }



    this.isLoading = true;

    this.examSetupService

      .listScholasticAreas({

        collegeId: this.selectedCollegeId,

        sessionId: this.selectedSessionId,

        scholastic,

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

          this.toast.error('Failed to load scholastic areas.');

        },

      });

  }



  openAddDialog(): void {

    this.resetForm();

    this.addSessionId = this.selectedSessionId;

    this.addCollegeId = this.selectedCollegeId;

    this.addGroupName = this.filterGroupName.trim() || null;

    this.addScholastic = this.filterScholastic.trim() || null;

    this.dialog.open(this.addDialog, { width: 'min(520px, 92vw)', maxWidth: '95vw' });

  }



  saveScholasticArea(): void {

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



    const areaName = this.areaName.trim();

    if (!areaName) {

      this.toast.warning('Please enter co-scholastic name.');

      return;

    }



    this.isSaving = true;

    this.examSetupService

      .createScholasticArea({

        areaName,

        groupName: this.addGroupName,

        scholastic: this.addScholastic,

        sessionId: this.addSessionId,

        collegeId: this.addCollegeId,

      })

      .subscribe({

        next: res => {

          this.isSaving = false;

          if (res.success) {

            this.toast.success(res.message || 'Scholastic area added successfully.');

            this.dialog.closeAll();

            this.resetForm();

            this.selectedSessionId = this.addSessionId;

            this.selectedCollegeId = this.addCollegeId;

            this.filterGroupName = this.addGroupName ?? '';

            this.filterScholastic = this.addScholastic ?? '';

            this.loadScholasticAreas();

          } else {

            this.toast.error(res.message || 'Failed to add scholastic area.');

          }

        },

        error: () => {

          this.isSaving = false;

          this.toast.error('Failed to add scholastic area.');

        },

      });

  }



  resetForm(): void {

    this.addSessionId = null;

    this.addCollegeId = null;

    this.addGroupName = null;

    this.addScholastic = null;

    this.areaName = '';

  }



  rowIndex(index: number): number {

    const paginator = this.dataSource.paginator;

    return paginator ? paginator.pageIndex * paginator.pageSize + index + 1 : index + 1;

  }

}


