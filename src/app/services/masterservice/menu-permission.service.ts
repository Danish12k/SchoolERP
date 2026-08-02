import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IApiResponse } from '../../interfaces/ICommon';
import {
  IMenuPermissionItem,
  IMenuPermissionSavePayload,
} from '../../interfaces/IMenuPermission';

/**
 * Menu access permission service.
 *
 * NOTE: The real menu-master and get/save-permission APIs are not available yet.
 * `listMenus()` returns placeholder data so the allocation grid renders; the
 * get/save methods are stubs to be wired once the endpoints (curls) are provided.
 */
@Injectable({
  providedIn: 'root',
})
export class MenuPermissionService {
  /** TODO: replace with real GET menu-master API. */
  listMenus(): Observable<IApiResponse<IMenuPermissionItem[]>> {
    return of({
      success: true,
      message: '',
      data: this.samplePlaceholderMenus(),
    });
  }

  /** TODO: wire to GET faculty permissions API when the curl is provided. */
  getFacultyPermissions(_facultyId: number): Observable<IApiResponse<IMenuPermissionItem[]>> {
    return of({ success: true, message: '', data: [] });
  }

  /** TODO: wire to POST save permissions API when the curl is provided. */
  savePermissions(_payload: IMenuPermissionSavePayload): Observable<IApiResponse<unknown>> {
    return of({
      success: false,
      message: 'Save will be enabled once the permission API is provided.',
      data: null,
    });
  }

  private samplePlaceholderMenus(): IMenuPermissionItem[] {
    return [
      {
        menuId: 1,
        menuName: 'Home',
        menuUrl: '/Admin/AdminDashBoard1.aspx',
        menuDescription: 'Admin/Principal/Operator',
        checked: false,
        subMenus: [
          { subMenuId: 101, subMenuName: 'SMS Api', url: '/Admin/AdminInstitutionSet.Aspx', menuDescription: 'Admin', checked: false },
          { subMenuId: 102, subMenuName: 'Add Menu', url: '/Admin/AddMenu.Aspx', menuDescription: 'Admin', checked: false },
          { subMenuId: 103, subMenuName: 'User Permission', url: '/Admin/AccessRight.Aspx', menuDescription: 'Admin', checked: false },
          { subMenuId: 104, subMenuName: 'Class/Section', url: '/Admin/AdminClass-Section.Aspx', menuDescription: 'Admin', checked: false },
          { subMenuId: 105, subMenuName: 'Designation', url: '/Admin/AdminAddDesignation.Aspx', menuDescription: 'Admin', checked: false },
        ],
      },
      {
        menuId: 2,
        menuName: 'Administrator',
        menuUrl: '#',
        menuDescription: 'Admin/Principal',
        checked: false,
        subMenus: [
          { subMenuId: 201, subMenuName: 'Fee Master', url: '/Admin/AdminFeeMaster.Aspx', menuDescription: 'Admin', checked: false },
          { subMenuId: 202, subMenuName: 'Location', url: '/Admin/AdminLocation.Aspx', menuDescription: 'Admin', checked: false },
          { subMenuId: 203, subMenuName: 'Add Subject', url: '/Admin/AdminAddSubject.Aspx', menuDescription: 'Admin', checked: false },
        ],
      },
    ];
  }
}
