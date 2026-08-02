import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { PageHeaderComponent } from '@shared';
import { ExamMasterComponent } from '../exam-master/exam-master.component';
import { SubExamComponent } from '../sub-exam/sub-exam.component';
import { AddGradePointComponent } from '../add-grade-point/add-grade-point.component';
import { ClassGroupComponent } from '../class-group/class-group.component';

type ExamSettingTab = 'examMaster' | 'subExam' | 'gradePoint' | 'classGroup';

@Component({
  selector: 'app-examsetting',
  host: { class: 'admin-page-host' },
  imports: [
    PageHeaderComponent,
    MatCardModule,
    ExamMasterComponent,
    SubExamComponent,
    AddGradePointComponent,
    ClassGroupComponent,
  ],
  templateUrl: './examsetting.component.html',
  styleUrl: './examsetting.component.scss',
})
export class ExamsettingComponent {
  selectedTab: ExamSettingTab = 'examMaster';

  readonly tabs: { key: ExamSettingTab; label: string }[] = [
    { key: 'examMaster', label: 'Exam Master' },
    { key: 'subExam', label: 'Sub Exam' },
    { key: 'gradePoint', label: 'Grade Point' },
    { key: 'classGroup', label: 'Assign Class Group' },
  ];
}
