import { Routes } from '@angular/router';
import { ClassmasterComponent } from './classmaster/classmaster.component';
import { DesignationComponent } from './designation/designation.component';
import { DesignationmasterComponent } from './designationmaster/designationmaster.component';
import { SessionComponent } from './session/session.component';
import { CountryComponent } from './country/country.component';
import { SectionComponent } from './section/section.component';


export const routes: Routes = [
  { path: 'country', component: CountryComponent },
  { path: 'classmaster', component: ClassmasterComponent },
  { path: 'designation', component: DesignationComponent },
  { path: 'designationmaster', component: DesignationmasterComponent },
  { path: 'session', component: SessionComponent },
  { path: 'section', component: SectionComponent }
];
