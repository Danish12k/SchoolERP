import { Component, inject, Inject, OnInit } from '@angular/core';
import { MatCardModule, MatCardTitle } from "@angular/material/card";
import { MaterialModule } from "../../../../../schematics/ng-add/files/module-files/app/material.module";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SessionService } from '../services/session.service';
import { SectionService } from '../services/section.service';
import { CollegeService } from '../services/college.service';
import { ISession } from '../interfaces/isession';
import { IAssignSection, ISection } from '../interfaces/IClassAndSection';
import { ICollege } from '../interfaces/ICollege';
import { IClass } from '../interfaces/IClassmaster';
import { MatColumnResizeCommonModule } from "@ng-matero/extensions/grid";
import { debug } from 'console';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-assign-section',
  imports: [
    MatCardTitle,
    MaterialModule,
    MatCardModule,
    ReactiveFormsModule,
    MatColumnResizeCommonModule
  ],
  templateUrl: './assign-section.component.html',
  styleUrl: './assign-section.component.scss'
})
export class AssignSectionComponent implements OnInit {
  constructor(private fb: FormBuilder, private dialog: MatDialog) { }
  //private fb = Inject(FormBuilder);
  sessionService = inject(SessionService);
  sectionService = inject(SectionService);
  collegeService = inject(CollegeService);

  assignSectionForm!: FormGroup;
  sessions!: ISession[];
  sections!: ISection[];
  schools!: ICollege[];
  classs!: IClass[];

  ngOnInit(): void {
    debugger;
    this.assignSectionForm = this.fb.group({
      sessionId: [null, [Validators.required, Validators.min(1)]],
      collegeId: [null, [Validators.required, Validators.min(1)]],
      courseId: [null, [Validators.required, Validators.min(1)]],
      sectionId: [null, [Validators.required, Validators.min(1)]],
    });
    debugger;
    this.loadSession();
    this.loadCollege();
    this.loadSection();
  };


  loadSection() {
    debugger;
    this.sectionService.getSectionList().subscribe(res => {
      this.sections = Array.isArray(res.data) ? res.data : [res.data];
    });
  }

  loadSession() {
    this.sessionService.getSessionList().subscribe(res => {
      this.sessions = Array.isArray(res.data) ? res.data : [res.data];
    })
  }

  loadCollege() {
    this.collegeService.getCollegeList().subscribe(res => {
      this.schools = Array.isArray(res.data) ? res.data : [res.data];
    })
  };

  getSchoolListById() {
    const sessionIdControl = this.assignSectionForm.get('sessionId');
    const collegeIdControl = this.assignSectionForm.get('collegeId');

    const sessionId = sessionIdControl?.value;
    const collegeId = collegeIdControl?.value;

    if (sessionId == null || collegeId == null) {
      return;
    }

    this.collegeService.getClassListBySessionAndCollege(sessionId, collegeId).subscribe({
      next: (res) => {
        debugger;
        if (res.success && res.data) {
          this.classs = Array.isArray(res.data) ? res.data : [res.data];
        } else {
          debugger;
          alert(res.message);
        }
      },
      error: (err) => {
        debugger;
        console.log("error");
      }
    });
  }

  submitForm() {
    debugger;
    if (this.assignSectionForm.valid) {
      const courseId = this.assignSectionForm.get('courseId')?.value;
      const sectionId = this.assignSectionForm.get('sectionId')?.value;

      const body: IAssignSection[] = [
        {
          courseId: 1,
          sectionId: 1
        }
      ];

      // const body: IAssignSection = { courseId: courseId, sectionId: sectionId }

      this.sectionService.assignSection(body).subscribe({
        next: (res) => {
          if (res.success && res.data) {
            alert(res.message);
          }
        }
      })
    }
  }

  onCancel() {
    this.assignSectionForm.reset();
  }


}
