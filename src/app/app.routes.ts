import { Routes } from '@angular/router';
import { authGuard } from '@core';
import { ngxPermissionsGuard } from 'ngx-permissions';
import { AdminLayoutComponent } from '@theme/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from '@theme/auth-layout/auth-layout.component';
import { DashboardComponent } from './routes/dashboard/dashboard.component';
import { Error403Component } from './routes/sessions/403.component';
import { Error404Component } from './routes/sessions/404.component';
import { Error500Component } from './routes/sessions/500.component';
import { LoginComponent } from './routes/sessions/login/login.component';
import { RegisterComponent } from './routes/sessions/register/register.component';
//import { DesingnationMasterComponent } from './pages/admin/desingnation-master/desingnation-master.component';

export const routes: Routes = [
  // Public auth pages (no auth required)
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: '',
    component: AdminLayoutComponent,
    canActivate: [authGuard],
    canActivateChild: [authGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: '403', component: Error403Component },
      { path: '404', component: Error404Component },
      { path: '500', component: Error500Component },
      {
        path: 'design',
        children: [
          {
            path: 'colors',
            loadComponent: () =>
              import('./routes/design/colors/colors.component').then(m => m.DesignColorsComponent),
          },
          {
            path: 'icons',
            loadComponent: () =>
              import('./routes/design/icons/icons.component').then(m => m.DesignIconsComponent),
          },
        ],
      },
      {
        path: 'material',
        children: [
          { path: 'autocomplete', loadComponent: () => import('./routes/material/autocomplete/autocomplete.component').then(m => m.AutocompleteComponent) },
          { path: 'checkbox', loadComponent: () => import('./routes/material/checkbox/checkbox.component').then(m => m.CheckboxComponent) },
          { path: 'datepicker', loadComponent: () => import('./routes/material/datepicker/datepicker.component').then(m => m.DatepickerComponent) },
          { path: 'form-field', loadComponent: () => import('./routes/material/form-field/form-field.component').then(m => m.FormFieldComponent) },
          { path: 'input', loadComponent: () => import('./routes/material/input/input.component').then(m => m.InputComponent) },
          { path: 'radio', loadComponent: () => import('./routes/material/radio-button/radio-button.component').then(m => m.RadioButtonComponent) },
          { path: 'select', loadComponent: () => import('./routes/material/select/select.component').then(m => m.SelectComponent) },
          { path: 'slider', loadComponent: () => import('./routes/material/slider/slider.component').then(m => m.SliderComponent) },
          { path: 'slide-toggle', loadComponent: () => import('./routes/material/slide-toggle/slide-toggle.component').then(m => m.SlideToggleComponent) },
          // layout
          { path: 'card', loadComponent: () => import('./routes/material/card/card.component').then(m => m.CardComponent) },
          { path: 'divider', loadComponent: () => import('./routes/material/divider/divider.component').then(m => m.DividerComponent) },
          { path: 'expansion', loadComponent: () => import('./routes/material/expansion-panel/expansion-panel.component').then(m => m.ExpansionPanelComponent) },
          { path: 'grid-list', loadComponent: () => import('./routes/material/grid-list/grid-list.component').then(m => m.GridListComponent) },
          { path: 'list', loadComponent: () => import('./routes/material/list/list.component').then(m => m.ListComponent) },
          { path: 'stepper', loadComponent: () => import('./routes/material/stepper/stepper.component').then(m => m.StepperComponent) },
          {
            path: 'tab',
            loadComponent: () => import('./routes/material/tab/tab.component').then(m => m.TabComponent),
            children: [
              { path: '', redirectTo: 'sunny-tab', pathMatch: 'full' },
              { path: 'sunny-tab', loadComponent: () => import('./routes/material/tab/tab.component').then(m => m.SunnyTabContentComponent) },
              { path: 'rainy-tab', loadComponent: () => import('./routes/material/tab/tab.component').then(m => m.RainyTabContentComponent) },
              { path: 'foggy-tab', loadComponent: () => import('./routes/material/tab/tab.component').then(m => m.FoggyTabContentComponent) },
            ],
          },
          { path: 'tree', loadComponent: () => import('./routes/material/tree/tree.component').then(m => m.TreeComponent) },
          // navigation
          { path: 'menu', loadComponent: () => import('./routes/material/menu/menu.component').then(m => m.MenuComponent) },
          { path: 'sidenav', loadComponent: () => import('./routes/material/sidenav/sidenav.component').then(m => m.SidenavComponent) },
          { path: 'sidenav/basic', loadComponent: () => import('./routes/material/sidenav/basic-sidenav').then(m => m.SidenavBasicComponent) },
          { path: 'sidenav/dual', loadComponent: () => import('./routes/material/sidenav/dual-sidenav').then(m => m.SidenavDualComponent) },
          { path: 'sidenav/mobile', loadComponent: () => import('./routes/material/sidenav/mobile-sidenav').then(m => m.SidenavMobileComponent) },
          { path: 'toolbar', loadComponent: () => import('./routes/material/toolbar/toolbar.component').then(m => m.ToolbarComponent) },
          // buttons-indicators
          { path: 'button', loadComponent: () => import('./routes/material/button/button.component').then(m => m.ButtonComponent) },
          { path: 'button-toggle', loadComponent: () => import('./routes/material/button-toggle/button-toggle.component').then(m => m.ButtonToggleComponent) },
          { path: 'badge', loadComponent: () => import('./routes/material/badge/badge.component').then(m => m.BadgeComponent) },
          { path: 'chips', loadComponent: () => import('./routes/material/chips/chips.component').then(m => m.ChipsComponent) },
          { path: 'icon', loadComponent: () => import('./routes/material/icon/icon.component').then(m => m.IconComponent) },
          { path: 'progress-spinner', loadComponent: () => import('./routes/material/progress-spinner/progress-spinner.component').then(m => m.ProgressSpinnerComponent), data: { title: 'Progress Spinner' } },
          { path: 'progress-bar', loadComponent: () => import('./routes/material/progress-bar/progress-bar.component').then(m => m.ProgressBarComponent) },
          { path: 'ripple', loadComponent: () => import('./routes/material/ripple/ripple.component').then(m => m.RippleComponent) },
          // popups-modals
          { path: 'bottom-sheet', loadComponent: () => import('./routes/material/bottom-sheet/bottom-sheet.component').then(m => m.BottomSheetComponent) },
          { path: 'dialog', loadComponent: () => import('./routes/material/dialog/dialog.component').then(m => m.DialogComponent) },
          { path: 'snack-bar', loadComponent: () => import('./routes/material/snack-bar/snack-bar.component').then(m => m.SnackBarComponent) },
          { path: 'tooltip', loadComponent: () => import('./routes/material/tooltip/tooltip.component').then(m => m.TooltipComponent) },
          // Data table
          { path: 'data-table/paginator', loadComponent: () => import('./routes/material/paginator/paginator.component').then(m => m.PaginatorComponent) },
          { path: 'data-table/sort', loadComponent: () => import('./routes/material/sort/sort.component').then(m => m.SortComponent) },
          { path: 'data-table/table', loadComponent: () => import('./routes/material/table/table.component').then(m => m.TableComponent) },
        ],
      },
      {
        path: 'media',
        children: [
          {
            path: 'gallery',
            loadComponent: () => import('./routes/media/gallery/gallery.component').then(m => m.MediaGalleryComponent),
          },
        ],
      },
      {
        path: 'forms',
        children: [
          { path: 'elements', loadComponent: () => import('./routes/forms/elements/elements.component').then(m => m.FormsElementsComponent) },
          { path: 'dynamic', loadComponent: () => import('./routes/forms/dynamic/dynamic.component').then(m => m.FormsDynamicComponent) },
          { path: 'select', loadComponent: () => import('./routes/forms/select/select.component').then(m => m.FormsSelectComponent) },
          { path: 'datetime', loadComponent: () => import('./routes/forms/datetime/datetime.component').then(m => m.FormsDatetimeComponent) },
        ],
      },
      {
        path: 'tables',
        children: [
          { path: 'kitchen-sink', loadComponent: () => import('./routes/tables/kitchen-sink/kitchen-sink.component').then(m => m.TablesKitchenSinkComponent) },
          { path: 'remote-data', loadComponent: () => import('./routes/tables/remote-data/remote-data.component').then(m => m.TablesRemoteDataComponent) },
        ],
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            loadComponent: () => import('./routes/profile/layout/layout.component').then(m => m.ProfileLayoutComponent),
            children: [
              { path: '', redirectTo: 'overview', pathMatch: 'full' },
              { path: 'overview', loadComponent: () => import('./routes/profile/overview/overview.component').then(m => m.ProfileOverviewComponent) },
              { path: 'settings', loadComponent: () => import('./routes/profile/settings/settings.component').then(m => m.ProfileSettingsComponent) },
            ],
          },
        ],
      },
      {
        path: 'permissions',
        children: [
          { path: 'role-switching', loadComponent: () => import('./routes/permissions/role-switching/role-switching.component').then(m => m.PermissionsRoleSwitchingComponent) },
          {
            path: 'route-guard',
            loadComponent: () => import('./routes/permissions/route-guard/route-guard.component').then(m => m.PermissionsRouteGuardComponent),
            canActivate: [ngxPermissionsGuard],
            data: {
              permissions: {
                except: 'GUEST',
                redirectTo: '/dashboard',
              },
            },
          },
          {
            path: 'test',
            loadComponent: () => import('./routes/permissions/test/test.component').then(m => m.PermissionsTestComponent),
            canActivate: [ngxPermissionsGuard],
            data: {
              permissions: {
                only: 'ADMIN',
                redirectTo: '/dashboard',
              },
            },
          },
        ],
      },
      {
        path: 'utilities',
        children: [
          { path: 'css-grid', loadComponent: () => import('./routes/utilities/css-grid/css-grid.component').then(m => m.UtilitiesCssGridComponent) },
          { path: 'css-helpers', loadComponent: () => import('./routes/utilities/css-helpers/css-helpers.component').then(m => m.UtilitiesCssHelpersComponent) },
        ],
      },
      {
        path: 'admin',
        children: [
          { path: 'country', loadComponent: () => import('./pages/admin/country/country.component').then(m => m.CountryComponent) },
          { path: 'classmaster', loadComponent: () => import('./pages/admin/classmaster/classmaster.component').then(m => m.ClassmasterComponent) },
          { path: 'designationmaster', loadComponent: () => import('./pages/admin/designationmaster/designationmaster.component').then(m => m.DesignationmasterComponent) },
          { path: 'session', loadComponent: () => import('./pages/admin/session/session.component').then(m => m.SessionComponent) },
          { path: 'section', loadComponent: () => import('./pages/admin/section/section.component').then(m => m.SectionComponent) },
          { path: 'college', loadComponent: () => import('./pages/admin/college/college.component').then(m => m.CollegeComponent) },
          { path: 'classSection', loadComponent: () => import('./pages/admin/college-section/college-section.component').then(m => m.CollegeSectionComponent) },
          {
            path: 'examsetting',
            loadComponent: () =>
              import('./pages/exam/examsetting/examsetting.component').then(m => m.ExamsettingComponent),
          },
          { path: 'ExamSetting', redirectTo: '/admin/examsetting', pathMatch: 'full' },
          {
            path: 'scholasticsetting',
            loadComponent: () =>
              import('./pages/exam/scholastic-setting/scholastic-setting.component').then(
                m => m.ScholasticSettingComponent
              ),
          },
          { path: 'ScholasticSetting', redirectTo: '/admin/scholasticsetting', pathMatch: 'full' },
          { path: 'assignSection', loadComponent: () => import('./pages/admin/assign-section/assign-section.component').then(m => m.AssignSectionComponent) },
          { path: 'assignClassTeacher', loadComponent: () => import('./pages/admin/assign-class-teacher/assign-class-teacher.component').then(m => m.AssignClassTeacherComponent) },
          { path: 'SMS', loadComponent: () => import('./pages/admin/smsapi/smsapi.component').then(m => m.SmsapiComponent) },
          { path: 'expense', loadComponent: () => import('./pages/admin/expense/expense.component').then(m => m.ExpenseComponent) },
          { path: 'feeMaster', loadComponent: () => import('./pages/admin/fee-master/fee-master.component').then(m => m.FeeMasterComponent) },
          // Back-compat redirects for old fee paths under /admin/*
          { path: 'FeeMaster', redirectTo: '/admin/feeMaster', pathMatch: 'full' },
          { path: 'FeeGroup', redirectTo: '/fee/feeGroup', pathMatch: 'full' },
          { path: 'FeeHead', redirectTo: '/fee/feeHead', pathMatch: 'full' },
          { path: 'feeInstallment', redirectTo: '/fee/feeInstallment', pathMatch: 'full' },
          { path: 'allocateFee', redirectTo: '/fee/allocateFee', pathMatch: 'full' },
          { path: 'installmentStatus', redirectTo: '/fee/installmentStatus', pathMatch: 'full' },
          { path: 'InstallmentStatus', redirectTo: '/fee/installmentStatus', pathMatch: 'full' },
          { path: 'feeDefaulter', redirectTo: '/fee/feeDefaulter', pathMatch: 'full' },
          { path: 'FeeDefaulterList', redirectTo: '/fee/feeDefaulter', pathMatch: 'full' },
          { path: 'feeHeadSection', redirectTo: '/fee/feeHeadSection', pathMatch: 'full' },
          { path: 'FeeHeadBySection', redirectTo: '/fee/feeHeadSection', pathMatch: 'full' },
          { path: 'house', loadComponent: () => import('./pages/admin/house/house.component').then(m => m.HouseComponent) },
          { path: 'salutation', loadComponent: () => import('./pages/admin/salutation/salutation.component').then(m => m.SalutationComponent) },
          { path: 'category', loadComponent: () => import('./pages/admin/category/category.component').then(m => m.CategoryComponent) },
          { path: 'addSchool', loadComponent: () => import('./pages/admin/add-school/add-school.component').then(m => m.AddSchoolComponent) },
          { path: 'addSubject', redirectTo: 'subjectList', pathMatch: 'full' },
          { path: 'assignSubject', redirectTo: 'subjectList', pathMatch: 'full' },
          {
            path: 'subjectList',
            loadComponent: () =>
              import('./pages/admin/subject-list/subject-list.component').then(m => m.SubjectListComponent),
          },
          { path: 'subjectMaster', redirectTo: 'subjectList', pathMatch: 'full' },
          { path: 'studentlist', redirectTo: '/student/studentlist', pathMatch: 'full' },
          { path: 'StudentList', redirectTo: '/student/studentlist', pathMatch: 'full' },
          {
            path: 'location',
            loadComponent: () =>
              import('./pages/admin/location/location.component').then(m => m.LocationComponent),
          },
          {
            path: 'certificate',
            loadComponent: () =>
              import('./pages/admin/certificate/certificate.component').then(m => m.CertificateComponent),
          },
          {
            path: 'getlatestdata',
            loadComponent: () =>
              import('./pages/admin/getlatestdata/getlatestdata.component').then(m => m.GetlatestdataComponent),
          },
          { path: 'GetLatestData', redirectTo: '/admin/getlatestdata', pathMatch: 'full' },
          { path: 'menuaccess', loadComponent: () => import('./pages/admin/menuaccess/menuaccess.component').then(m => m.MenuaccessComponent) },
          { path: 'AccessRight', redirectTo: '/admin/menuaccess', pathMatch: 'full' },
        ],
      },
      {
        path: 'fee',
        children: [
          { path: 'feeMaster', redirectTo: '/admin/feeMaster', pathMatch: 'full' },
          { path: 'feeGroup', loadComponent: () => import('./pages/admin/fee-group/fee-group.component').then(m => m.FeeGroupComponent) },
          { path: 'feeHead', loadComponent: () => import('./pages/admin/fee-head/fee-head.component').then(m => m.FeeHeadComponent) },
          { path: 'feeInstallment', loadComponent: () => import('./pages/admin/fee-installment/fee-installment.component').then(m => m.FeeInstallmentComponent) },
          { path: 'allocateFee', loadComponent: () => import('./pages/admin/allocate-fee/allocate-fee.component').then(m => m.AllocateFeeComponent) },
          {
            path: 'installmentStatus',
            loadComponent: () =>
              import('./pages/feereports/installmentstatus/installmentstatus.component').then(
                m => m.InstallmentstatusComponent
              ),
          },
          { path: 'InstallmentStatus', redirectTo: '/fee/installmentStatus', pathMatch: 'full' },
          {
            path: 'collectionReport',
            loadComponent: () =>
              import('./pages/feereports/collectionreport/collectionreport.component').then(
                m => m.CollectionreportComponent
              ),
          },
          { path: 'FeeCollectionReport', redirectTo: '/fee/collectionReport', pathMatch: 'full' },
          {
            path: 'feeDefaulter',
            loadComponent: () =>
              import('./pages/feereports/feedefaulter/feedefaulter.component').then(
                m => m.FeedefaulterComponent
              ),
          },
          { path: 'FeeDefaulterList', redirectTo: '/fee/feeDefaulter', pathMatch: 'full' },
          {
            path: 'feeHeadSection',
            loadComponent: () =>
              import('./pages/feereports/feeheadsection/feeheadsection.component').then(
                m => m.FeeheadsectionComponent
              ),
          },
          { path: 'FeeHeadBySection', redirectTo: '/fee/feeHeadSection', pathMatch: 'full' },
        ],
      },
      {
        path: 'student',
        children: [
          { path: '', redirectTo: 'studentlist', pathMatch: 'full' },
          { path: 'studentlist', loadComponent: () => import('./pages/student/studentlist/studentlist.component').then(m => m.StudentlistComponent) },
          { path: 'studentattendance', loadComponent: () => import('./pages/student/studentattendance/studentattendance.component').then(m => m.StudentattendanceComponent) },
          { path: 'searchstudent', loadComponent: () => import('./pages/student/searchstudent/searchstudent.component').then(m => m.SearchstudentComponent) },
          { path: 'studentupdatehight', loadComponent: () => import('./pages/student/studentupdatehight/studentupdatehight.component').then(m => m.StudentupdatehightComponent) },
          { path: 'studentapparupdate', loadComponent: () => import('./pages/student/studentapparupdate/studentapparupdate.component').then(m => m.StudentapparupdateComponent) },
          { path: 'tclist', loadComponent: () => import('./pages/student/tclist/tclist.component').then(m => m.TclistComponent) },
          { path: 'uploadstudentdata', loadComponent: () => import('./pages/student/uploadstudentdata/uploadstudentdata.component').then(m => m.UploadstudentdataComponent) },
          { path: 'StudentList', redirectTo: '/student/studentlist', pathMatch: 'full' },
          { path: 'StudentAttendance', redirectTo: '/student/studentattendance', pathMatch: 'full' },
          { path: 'SearchStudent', redirectTo: '/student/searchstudent', pathMatch: 'full' },
          { path: 'StudentUpdateHight', redirectTo: '/student/studentupdatehight', pathMatch: 'full' },
          { path: 'StudentApparUpdate', redirectTo: '/student/studentapparupdate', pathMatch: 'full' },
          { path: 'TcList', redirectTo: '/student/tclist', pathMatch: 'full' },
          { path: 'UploadStudentData', redirectTo: '/student/uploadstudentdata', pathMatch: 'full' },
        ],
      },
      {
        path: 'onlineexam',
        children: [
          { path: '', redirectTo: 'onlineexamlist', pathMatch: 'full' },
          { path: 'questionmaster', loadComponent: () => import('./pages/onlineexam/questionmaster/questionmaster.component').then(m => m.QuestionmasterComponent) },
          { path: 'QuestionMaster', redirectTo: '/onlineexam/questionmaster', pathMatch: 'full' },
          {
            path: 'onlineexamlist',
            loadComponent: () =>
              import('./pages/onlineexam/onlineexamlist/onlineexamlist.component').then(m => m.OnlineexamlistComponent),
          },
          { path: 'OnlineExamList', redirectTo: '/onlineexam/onlineexamlist', pathMatch: 'full' },
          {
            path: 'onlinequestionpaper',
            loadComponent: () =>
              import('./pages/onlineexam/onlinequestionpaper/onlinequestionpaper.component').then(
                m => m.OnlinequestionpaperComponent
              ),
          },
          { path: 'OnlineQuestionPaper', redirectTo: '/onlineexam/onlinequestionpaper', pathMatch: 'full' },
        ],
      },
      {
        path: 'onlineeam',
        children: [
          { path: '', redirectTo: '/onlineexam/questionmaster', pathMatch: 'full' },
          { path: 'questionmaster', redirectTo: '/onlineexam/questionmaster', pathMatch: 'full' },
          { path: 'QuestionMaster', redirectTo: '/onlineexam/questionmaster', pathMatch: 'full' },
          { path: 'onlineexamlist', redirectTo: '/onlineexam/onlineexamlist', pathMatch: 'full' },
          { path: 'OnlineExamList', redirectTo: '/onlineexam/onlineexamlist', pathMatch: 'full' },
          { path: 'onlinequestionpaper', redirectTo: '/onlineexam/onlinequestionpaper', pathMatch: 'full' },
          { path: 'OnlineQuestionPaper', redirectTo: '/onlineexam/onlinequestionpaper', pathMatch: 'full' },
        ],
      },
      {
        path: 'exam',
        children: [
          { path: '', redirectTo: '/admin/examsetting', pathMatch: 'full' },
          { path: 'examsetting', redirectTo: '/admin/examsetting', pathMatch: 'full' },
          { path: 'ExamSetting', redirectTo: '/admin/examsetting', pathMatch: 'full' },
          { path: 'scholasticsetting', redirectTo: '/admin/scholasticsetting', pathMatch: 'full' },
          { path: 'ScholasticSetting', redirectTo: '/admin/scholasticsetting', pathMatch: 'full' },
        ],
      },
      { path: 'Location', redirectTo: '/admin/location', pathMatch: 'full' },
    ],
  },
  // Backward-compatible routes: keep /auth/* working (optional)
  { path: 'auth', redirectTo: 'login', pathMatch: 'full' },
  { path: 'auth/login', redirectTo: 'login' },
  { path: 'auth/register', redirectTo: 'register' },
  { path: 'studentlist', redirectTo: '/student/studentlist', pathMatch: 'full' },
  { path: 'StudentList', redirectTo: '/student/studentlist', pathMatch: 'full' },
  { path: 'studentattendance', redirectTo: '/student/studentattendance', pathMatch: 'full' },
  { path: 'StudentAttendance', redirectTo: '/student/studentattendance', pathMatch: 'full' },
  { path: 'searchstudent', redirectTo: '/student/searchstudent', pathMatch: 'full' },
  { path: 'SearchStudent', redirectTo: '/student/searchstudent', pathMatch: 'full' },
  { path: 'studentupdatehight', redirectTo: '/student/studentupdatehight', pathMatch: 'full' },
  { path: 'StudentUpdateHight', redirectTo: '/student/studentupdatehight', pathMatch: 'full' },
  { path: 'studentapparupdate', redirectTo: '/student/studentapparupdate', pathMatch: 'full' },
  { path: 'StudentApparUpdate', redirectTo: '/student/studentapparupdate', pathMatch: 'full' },
  { path: 'tclist', redirectTo: '/student/tclist', pathMatch: 'full' },
  { path: 'TcList', redirectTo: '/student/tclist', pathMatch: 'full' },
  { path: 'uploadstudentdata', redirectTo: '/student/uploadstudentdata', pathMatch: 'full' },
  { path: 'UploadStudentData', redirectTo: '/student/uploadstudentdata', pathMatch: 'full' },
  { path: 'questionmaster', redirectTo: '/onlineexam/questionmaster', pathMatch: 'full' },
  { path: 'QuestionMaster', redirectTo: '/onlineexam/questionmaster', pathMatch: 'full' },
  { path: 'onlineexamlist', redirectTo: '/onlineexam/onlineexamlist', pathMatch: 'full' },
  { path: 'OnlineExamList', redirectTo: '/onlineexam/onlineexamlist', pathMatch: 'full' },
  { path: 'onlinequestionpaper', redirectTo: '/onlineexam/onlinequestionpaper', pathMatch: 'full' },
  { path: 'OnlineQuestionPaper', redirectTo: '/onlineexam/onlinequestionpaper', pathMatch: 'full' },
  { path: 'examsetting', redirectTo: '/admin/examsetting', pathMatch: 'full' },
  { path: 'ExamSetting', redirectTo: '/admin/examsetting', pathMatch: 'full' },
  { path: 'scholasticsetting', redirectTo: '/admin/scholasticsetting', pathMatch: 'full' },
  { path: 'ScholasticSetting', redirectTo: '/admin/scholasticsetting', pathMatch: 'full' },
  { path: 'feeDefaulter', redirectTo: '/fee/feeDefaulter', pathMatch: 'full' },
  { path: 'FeeDefaulterList', redirectTo: '/fee/feeDefaulter', pathMatch: 'full' },
  { path: 'feeHeadSection', redirectTo: '/fee/feeHeadSection', pathMatch: 'full' },
  { path: 'FeeHeadBySection', redirectTo: '/fee/feeHeadSection', pathMatch: 'full' },
  {
    path: '%23',
    children: [
      { path: 'studentattendance', redirectTo: '/student/studentattendance', pathMatch: 'full' },
      { path: 'StudentAttendance', redirectTo: '/student/studentattendance', pathMatch: 'full' },
      { path: 'searchstudent', redirectTo: '/student/searchstudent', pathMatch: 'full' },
      { path: 'SearchStudent', redirectTo: '/student/searchstudent', pathMatch: 'full' },
      { path: 'studentupdatehight', redirectTo: '/student/studentupdatehight', pathMatch: 'full' },
      { path: 'StudentUpdateHight', redirectTo: '/student/studentupdatehight', pathMatch: 'full' },
      { path: 'studentapparupdate', redirectTo: '/student/studentapparupdate', pathMatch: 'full' },
      { path: 'StudentApparUpdate', redirectTo: '/student/studentapparupdate', pathMatch: 'full' },
      { path: 'tclist', redirectTo: '/student/tclist', pathMatch: 'full' },
      { path: 'TcList', redirectTo: '/student/tclist', pathMatch: 'full' },
      { path: 'uploadstudentdata', redirectTo: '/student/uploadstudentdata', pathMatch: 'full' },
      { path: 'UploadStudentData', redirectTo: '/student/uploadstudentdata', pathMatch: 'full' },
      { path: 'questionmaster', redirectTo: '/onlineexam/questionmaster', pathMatch: 'full' },
      { path: 'QuestionMaster', redirectTo: '/onlineexam/questionmaster', pathMatch: 'full' },
      { path: 'onlineexamlist', redirectTo: '/onlineexam/onlineexamlist', pathMatch: 'full' },
      { path: 'OnlineExamList', redirectTo: '/onlineexam/onlineexamlist', pathMatch: 'full' },
      { path: 'onlinequestionpaper', redirectTo: '/onlineexam/onlinequestionpaper', pathMatch: 'full' },
      { path: 'OnlineQuestionPaper', redirectTo: '/onlineexam/onlinequestionpaper', pathMatch: 'full' },
      { path: 'examsetting', redirectTo: '/exam/examsetting', pathMatch: 'full' },
      { path: 'ExamSetting', redirectTo: '/exam/examsetting', pathMatch: 'full' },
      { path: 'scholasticsetting', redirectTo: '/admin/scholasticsetting', pathMatch: 'full' },
      { path: 'ScholasticSetting', redirectTo: '/admin/scholasticsetting', pathMatch: 'full' },
      { path: 'feeDefaulter', redirectTo: '/fee/feeDefaulter', pathMatch: 'full' },
      { path: 'FeeDefaulterList', redirectTo: '/fee/feeDefaulter', pathMatch: 'full' },
      { path: 'feeHeadSection', redirectTo: '/fee/feeHeadSection', pathMatch: 'full' },
      { path: 'FeeHeadBySection', redirectTo: '/fee/feeHeadSection', pathMatch: 'full' },
    ],
  },

  { path: '**', redirectTo: 'login' },

];
