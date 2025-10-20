import { Routes } from '@angular/router';
import { ClassmasterComponent } from './classmaster/classmaster.component';
import { DesignationmasterComponent } from './designationmaster/designationmaster.component';
import { SessionComponent } from './session/session.component';
import { CountryComponent } from './country/country.component';
import { SectionComponent } from './section/section.component';
import { CollegeComponent } from './college/college.component';
import { CollegeSectionComponent } from './college-section/college-section.component';
import { AssignSectionComponent } from './assign-section/assign-section.component';
import { AssignClassTeacherComponent } from './assign-class-teacher/assign-class-teacher.component';
import { SmsapiComponent } from './smsapi/smsapi.component';
import { ExpenseComponent } from './expense/expense.component';
import { FeeMasterComponent } from './fee-master/fee-master.component';
import { FeeGroupComponent } from './fee-group/fee-group.component';
import { FeeHeadComponent } from './fee-head/fee-head.component';
import { FeeInstallmentComponent } from './fee-installment/fee-installment.component';
import { AllocateFeetoClassComponent } from './allocate-feeto-class/allocate-feeto-class.component';


export const routes: Routes = [
  { path: 'country', component: CountryComponent },
  { path: 'classmaster', component: ClassmasterComponent },
  { path: 'designationmaster', component: DesignationmasterComponent },
  { path: 'session', component: SessionComponent },
  { path: 'section', component: SectionComponent },
  { path: 'college', component: CollegeComponent },
  { path: 'classSection', component: CollegeSectionComponent },
  { path: 'assignSection', component: AssignSectionComponent },
  { path: 'assignClassTeacher', component: AssignClassTeacherComponent },
  { path: 'SMS', component: SmsapiComponent },
  { path: 'Expense', component: ExpenseComponent },
  { path: 'FeeMaster', component: FeeMasterComponent },
  { path: 'FeeGroup', component: FeeGroupComponent },
  { path: 'FeeHead', component: FeeHeadComponent },
  { path: 'FeeInstallment', component: FeeInstallmentComponent },
  { path: 'AllocateFee', component: AllocateFeetoClassComponent }
];
