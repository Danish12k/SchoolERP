import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { SectionComponent } from '../section/section.component';
import { ClassmasterComponent } from '../classmaster/classmaster.component';

@Component({
  selector: 'app-college-section',
  imports: [
    MatTabsModule,
    MatCardModule,
    SectionComponent,
    ClassmasterComponent
  ],
  templateUrl: './college-section.component.html',
  styleUrl: './college-section.component.scss'
})
export class CollegeSectionComponent {

}
