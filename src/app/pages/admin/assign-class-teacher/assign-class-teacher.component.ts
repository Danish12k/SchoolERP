import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { SessionService } from '../services/session.service';
import { SectionService } from '../services/section.service';
import { CollegeService } from '../services/college.service';
import { ISession } from '../interfaces/isession';
import { ISection } from '../interfaces/IClassAndSection';
import { ICollege } from '../interfaces/ICollege';
import { IClass } from '../interfaces/IClassmaster';
import { MatCardModule, MatCardTitle } from '@angular/material/card';
import { MaterialModule } from '../../../../../schematics/ng-add/files/module-files/app/material.module';
import { MatColumnResizeCommonModule } from '@ng-matero/extensions/grid';

@Component({
  selector: 'app-assign-class-teacher',
  imports: [
      MatCardTitle,
    MaterialModule,
    MatCardModule,
    ReactiveFormsModule,
    MatColumnResizeCommonModule
  ],
  templateUrl: './assign-class-teacher.component.html',
  styleUrl: './assign-class-teacher.component.scss'
})
export class AssignClassTeacherComponent  implements OnInit{
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
   /*  this.assignSectionForm = this.fb.group({
      sessionId: [null, [Validators.required, Validators.min(1)]],
      collegeId: [null, [Validators.required, Validators.min(1)]],
      courseId: [null, [Validators.required, Validators.min(1)]],
      sectionId: [null, [Validators.required, Validators.min(1)]],
    }); */
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

}
