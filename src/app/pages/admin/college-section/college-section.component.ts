import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { SectionComponent } from '../section/section.component';
import { ClassmasterComponent } from '../classmaster/classmaster.component';
import { AssignSectionComponent } from "../assign-section/assign-section.component";
import { AssignClassTeacherComponent } from "../assign-class-teacher/assign-class-teacher.component";

@Component({
  selector: 'app-college-section',
  imports: [
    MatTabsModule,
    MatCardModule,
    SectionComponent,
    ClassmasterComponent,
    AssignSectionComponent,
    AssignClassTeacherComponent
],
  templateUrl: './college-section.component.html',
  styleUrl: './college-section.component.scss'
})
export class CollegeSectionComponent {

}
