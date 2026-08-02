import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { PageHeaderComponent } from '@shared';
import { ScholasticAreaComponent } from '../scholastic-area/scholastic-area.component';
import { ScholasticSkillsComponent } from '../scholastic-skills/scholastic-skills.component';

type ScholasticSettingTab = 'scholasticArea' | 'scholasticSkills';

@Component({
  selector: 'app-scholastic-setting',
  host: { class: 'admin-page-host' },
  imports: [
    PageHeaderComponent,
    MatCardModule,
    ScholasticAreaComponent,
    ScholasticSkillsComponent,
  ],
  templateUrl: './scholastic-setting.component.html',
  styleUrl: './scholastic-setting.component.scss',
})
export class ScholasticSettingComponent {
  selectedTab: ScholasticSettingTab = 'scholasticArea';

  readonly tabs: { key: ScholasticSettingTab; label: string }[] = [
    { key: 'scholasticArea', label: 'Scholastic Area' },
    { key: 'scholasticSkills', label: 'Scholastic Skills' },
  ];
}
