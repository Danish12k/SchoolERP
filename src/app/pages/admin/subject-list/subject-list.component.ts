import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { PageHeaderComponent } from '@shared';
import { SubjectmasterComponent } from '../subjectmaster/subjectmaster.component';
import { AssignsubjectComponent } from '../assignsubject/assignsubject.component';

type SubjectListTab = 'addSubject' | 'assignSubject';

@Component({
  selector: 'app-subject-list',
  host: { class: 'admin-page-host' },
  imports: [
    PageHeaderComponent,
    MatCardModule,
    SubjectmasterComponent,
    AssignsubjectComponent,
  ],
  templateUrl: './subject-list.component.html',
  styleUrl: './subject-list.component.scss',
})
export class SubjectListComponent {
  selectedTab: SubjectListTab = 'addSubject';

  readonly tabs: { key: SubjectListTab; label: string }[] = [
    { key: 'addSubject', label: 'Add Subject' },
    { key: 'assignSubject', label: 'Assign Subject' },
  ];
}
