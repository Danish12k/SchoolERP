import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { PageHeaderComponent } from '@shared';
import { SectionComponent } from '../section/section.component';
import { ClassmasterComponent } from '../classmaster/classmaster.component';
import { AssignSectionComponent } from '../assign-section/assign-section.component';
import { AssignClassTeacherComponent } from '../assign-class-teacher/assign-class-teacher.component';

type ClassSectionTab = 'class' | 'section' | 'assignSection' | 'assignTeacher';

@Component({
  selector: 'app-college-section',
  host: { class: 'admin-page-host' },
  imports: [
    PageHeaderComponent,
    MatCardModule,
    SectionComponent,
    ClassmasterComponent,
    AssignSectionComponent,
    AssignClassTeacherComponent,
  ],
  templateUrl: './college-section.component.html',
  styleUrl: './college-section.component.scss',
})
export class CollegeSectionComponent {
  selectedTab: ClassSectionTab = 'class';

  readonly tabs: { key: ClassSectionTab; label: string }[] = [
    { key: 'class', label: 'Class' },
    { key: 'section', label: 'Section' },
    { key: 'assignSection', label: 'Assign Section' },
    { key: 'assignTeacher', label: 'Assign Teacher' },
  ];
}
