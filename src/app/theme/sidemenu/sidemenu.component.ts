import { animate, state, style, transition, trigger } from '@angular/animations';
import { AsyncPipe, NgTemplateOutlet, SlicePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
  inject,
} from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NgxPermissionsModule } from 'ngx-permissions';

import { MenuService } from '@core';
import { NavAccordionItemDirective } from './nav-accordion-item.directive';
import { NavAccordionToggleDirective } from './nav-accordion-toggle.directive';
import { NavAccordionDirective } from './nav-accordion.directive';

@Component({
    selector: 'app-sidemenu',
    templateUrl: './sidemenu.component.html',
    styleUrl: './sidemenu.component.scss',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        AsyncPipe,
        SlicePipe,
        NgTemplateOutlet,
        RouterLink,
        RouterLinkActive,
        NgxPermissionsModule,
        MatIconModule,
        MatRippleModule,
        TranslateModule,
        NavAccordionDirective,
        NavAccordionItemDirective,
        NavAccordionToggleDirective,
    ],
    animations: [
        trigger('expansion', [
            state('collapsed, void', style({ height: '0px', visibility: 'hidden' })),
            state('expanded', style({ height: '*', visibility: '' })),
            transition('expanded <=> collapsed, void => collapsed', animate('225ms cubic-bezier(0.4,0,0.2,1)')),
        ]),
    ]
})
export class SidemenuComponent {
  // The ripple effect makes page flashing on mobile
  @Input() ripple = false;

  private readonly menu = inject(MenuService);

  menu$ = this.menu.getAll();

  buildRoute = this.menu.buildRoute;

  buildMenuRoute(item: { name?: string; route?: string }, parentRoute: string[]) {
    const normalizedName = item.name?.trim().toLowerCase() ?? '';
    const normalizedRoute = item.route?.replace(/^\/+|\/+$/g, '').toLowerCase() ?? '';
    const normalizedRouteKey = normalizedRoute.replace(/[\s_-]/g, '');

    if (normalizedName === 'home') {
      return '/dashboard';
    }

    if (
      normalizedName === 'student list' ||
      normalizedRouteKey === 'studentlist' ||
      normalizedRoute.endsWith('/studentlist')
    ) {
      return '/student/studentlist';
    }

    if (
      normalizedName === 'student attendance' ||
      normalizedRouteKey === 'studentattendance' ||
      normalizedRoute.endsWith('/studentattendance')
    ) {
      return '/student/studentattendance';
    }

    if (
      normalizedName === 'search student' ||
      normalizedRouteKey === 'searchstudent' ||
      normalizedRoute.endsWith('/searchstudent')
    ) {
      return '/student/searchstudent';
    }

    if (
      normalizedName === 'student update hight' ||
      normalizedName === 'student update height' ||
      normalizedRouteKey === 'studentupdatehight' ||
      normalizedRouteKey === 'studentupdateheight' ||
      normalizedRoute.endsWith('/studentupdatehight') ||
      normalizedRoute.endsWith('/studentupdateheight')
    ) {
      return '/student/studentupdatehight';
    }

    if (
      normalizedName === 'student appar update' ||
      normalizedName === 'student apaar update' ||
      normalizedName === 'update apaar aadhar' ||
      normalizedName === 'update aapar aadhar' ||
      normalizedRouteKey === 'studentapparupdate' ||
      normalizedRouteKey === 'studentapaarupdate' ||
      normalizedRoute.endsWith('/studentapparupdate') ||
      normalizedRoute.endsWith('/studentapaarupdate')
    ) {
      return '/student/studentapparupdate';
    }

    if (
      normalizedName === 'tc list' ||
      normalizedName === 'tclist' ||
      normalizedName === 'transfer certificate' ||
      normalizedName === 'transfer certificate list' ||
      normalizedRouteKey === 'tclist' ||
      normalizedRouteKey === '%23/tclist' ||
      normalizedRouteKey === '#/tclist' ||
      normalizedRoute.endsWith('/tclist') ||
      normalizedRoute.replace(/^(%23|#)\/?/, '').replace(/[\s_-]/g, '') === 'tclist'
    ) {
      return '/student/tclist';
    }

    if (
      normalizedName === 'upload student data' ||
      normalizedName === 'uploadstudentdata' ||
      normalizedRouteKey === 'uploadstudentdata' ||
      normalizedRoute.endsWith('/uploadstudentdata') ||
      normalizedRoute.replace(/^(%23|#)\/?/, '').replace(/[\s_-]/g, '') === 'uploadstudentdata'
    ) {
      return '/student/uploadstudentdata';
    }

    if (
      normalizedName === 'create online exam' ||
      normalizedName === 'online exam list' ||
      normalizedRouteKey === 'onlineexamlist' ||
      normalizedRoute.endsWith('/onlineexamlist')
    ) {
      return '/onlineexam/onlineexamlist';
    }

    if (
      normalizedName === 'question master' ||
      normalizedRouteKey === 'questionmaster' ||
      normalizedRoute.endsWith('/questionmaster')
    ) {
      return '/onlineexam/questionmaster';
    }

    if (
      normalizedName === 'online question paper' ||
      normalizedRouteKey === 'onlinequestionpaper' ||
      normalizedRoute.endsWith('/onlinequestionpaper')
    ) {
      return '/onlineexam/onlinequestionpaper';
    }

    if (
      normalizedName === 'exam setting' ||
      normalizedName === 'exam setting master' ||
      normalizedRouteKey === 'examsetting' ||
      normalizedRoute.endsWith('/examsetting')
    ) {
      return '/admin/examsetting';
    }

    if (
      normalizedName === 'scholastic setting' ||
      normalizedRouteKey === 'scholasticsetting' ||
      normalizedRoute.endsWith('/scholasticsetting')
    ) {
      return '/admin/scholasticsetting';
    }

    if (
      normalizedName === 'subject list' ||
      normalizedName === 'subject master' ||
      normalizedRouteKey === 'subjectlist' ||
      normalizedRouteKey === 'subjectmaster' ||
      normalizedRoute.endsWith('/subjectlist') ||
      normalizedRoute.endsWith('/subjectmaster')
    ) {
      return '/admin/subjectList';
    }

    if (
      normalizedName === 'get student latest data' ||
      normalizedRouteKey === 'getlatestdata' ||
      normalizedRoute.endsWith('/getlatestdata')
    ) {
      return '/admin/getlatestdata';
    }

    if (
      normalizedName === 'user permission' ||
      normalizedName === 'access right' ||
      normalizedRouteKey === 'menuaccess' ||
      normalizedRouteKey === 'accessright' ||
      normalizedRoute.endsWith('/menuaccess') ||
      normalizedRoute.endsWith('/accessright')
    ) {
      return '/admin/menuaccess';
    }

    if (
      normalizedName === 'installment status' ||
      normalizedName === 'fee installment status' ||
      normalizedRouteKey === 'installmentstatus' ||
      normalizedRouteKey === 'feeinstallmentstatus' ||
      normalizedRoute.endsWith('/installmentstatus') ||
      normalizedRoute.endsWith('/feeinstallmentstatus')
    ) {
      return '/fee/installmentStatus';
    }

    if (
      normalizedName === 'fee collection report' ||
      normalizedName === 'collection report' ||
      normalizedName === 'student fee collection report' ||
      normalizedRouteKey === 'collectionreport' ||
      normalizedRouteKey === 'feecollectionreport' ||
      normalizedRoute.endsWith('/collectionreport') ||
      normalizedRoute.endsWith('/feecollectionreport')
    ) {
      return '/fee/collectionReport';
    }

    if (
      normalizedName === 'fee defaulter' ||
      normalizedName === 'fee defaulters' ||
      normalizedName === 'fee defaulter list' ||
      normalizedName === 'defaulter list' ||
      normalizedName === 'student fee defaulter' ||
      normalizedRouteKey === 'feedefaulter' ||
      normalizedRouteKey === 'feedefaulterlist' ||
      normalizedRouteKey === 'feedeefaulterlist' ||
      normalizedRouteKey === '%23/feedefaulter' ||
      normalizedRouteKey === '%23/feedefaulterlist' ||
      normalizedRouteKey === '#/feedefaulter' ||
      normalizedRouteKey === '#/feedefaulterlist' ||
      normalizedRoute.endsWith('/feedefaulter') ||
      normalizedRoute.endsWith('/feedefaulterlist') ||
      normalizedRoute.replace(/^(%23|#)\/?/, '').replace(/[\s_-]/g, '').replace(/\.aspx$/, '') ===
        'feedefaulter' ||
      normalizedRoute.replace(/^(%23|#)\/?/, '').replace(/[\s_-]/g, '').replace(/\.aspx$/, '') ===
        'feedefaulterlist'
    ) {
      return '/fee/feeDefaulter';
    }

    if (
      normalizedName === 'fee head by section' ||
      normalizedName === 'fee head section' ||
      normalizedRouteKey === 'feeheadsection' ||
      normalizedRouteKey === 'feeheadbysection' ||
      normalizedRouteKey === '%23/feeheadsection' ||
      normalizedRouteKey === '%23/feeheadbysection' ||
      normalizedRouteKey === '#/feeheadsection' ||
      normalizedRouteKey === '#/feeheadbysection' ||
      normalizedRoute.endsWith('/feeheadsection') ||
      normalizedRoute.endsWith('/feeheadbysection') ||
      normalizedRoute.replace(/^(%23|#)\/?/, '').replace(/[\s_-]/g, '').replace(/\.aspx$/, '') ===
        'feeheadsection' ||
      normalizedRoute.replace(/^(%23|#)\/?/, '').replace(/[\s_-]/g, '').replace(/\.aspx$/, '') ===
        'feeheadbysection'
    ) {
      return '/fee/feeHeadSection';
    }

    return this.buildRoute(parentRoute.concat([item.route ?? '']));
  }
}
