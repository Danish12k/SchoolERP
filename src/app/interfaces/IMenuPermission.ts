export interface IMenuPermissionSubItem {
  subMenuId: number;
  subMenuName: string;
  url: string;
  menuDescription: string;
  checked: boolean;
}

export interface IMenuPermissionItem {
  menuId: number;
  menuName: string;
  menuUrl: string;
  menuDescription: string;
  checked: boolean;
  subMenus: IMenuPermissionSubItem[];
}

/** Payload row sent when saving allocated menu access for a faculty. */
export interface IMenuPermissionSavePayload {
  facultyId: number;
  collegeId: number;
  menuIds: number[];
  subMenuIds: number[];
}
