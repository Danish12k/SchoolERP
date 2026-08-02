import { Injectable } from '@angular/core';
import { BehaviorSubject, share } from 'rxjs';

export interface MenuTag {
  color: string; // background color
  value: string;
}

export interface MenuPermissions {
  only?: string | string[];
  except?: string | string[];
}

export interface MenuChildrenItem {
  route: string;
  name: string;
  type: 'link' | 'sub' | 'extLink' | 'extTabLink';
  seqNo?: number;
  children?: MenuChildrenItem[];
  permissions?: MenuPermissions;
}

export interface Menu {
  route: string;
  name: string;
  type: 'link' | 'sub' | 'extLink' | 'extTabLink';
  icon: string;
  seqNo?: number;
  label?: MenuTag;
  badge?: MenuTag;
  children?: MenuChildrenItem[];
  permissions?: MenuPermissions;
}

export interface MenuResponse {
  success: boolean;
  message: string;
  data: MenuResponse[];
  totalRecord: number;
}

export interface MenuItemResponse {
  name: string;
  route: string;
  icon: string;
  type: 'link' | 'sub' | 'extLink' | 'extTabLink';
  label?: MenuTagResponse;
  children?: MenuChildResponse[];
}

export interface MenuTagResponse {
  color: string;
  value: string;
}

export interface MenuChildResponse  {
  name: string;
  route: string;
  icon: string;
  type: 'link' | 'extLink' | 'extTabLink';
  seqNo?: number;
  children?: MenuChildResponse[];
}

/* export interface MenuChildrenItem {
  subMenuName: string;
  subMenuUrl: string;
}
export interface MenuData {
  mainId: number;
  mainMenuName: string;
  mainMenuUrl:string;
  subMenus: MenuChildrenItem[];
} 
  export interface Menu {
  success: boolean;
  message: string;
  data: MenuData[];
} */

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private readonly menu$ = new BehaviorSubject<Menu[]>([]);

  /** Get all the menu data. */
  getAll() {
    console.log(this.menu$.asObservable());
    return this.menu$.asObservable();
  }

  /** Observe the change of menu data. */
  change() {
    return this.menu$.pipe(share());
  }

  /** Initialize the menu data. */
  set(menu: Menu[]) {
    this.menu$.next(this.sortMenuTree(menu));
    return this.menu$.asObservable();
  }

  private sortMenuTree(menu: Menu[]): Menu[] {
    return this.sortBySeqNo(menu).map(item => ({
      ...item,
      children: item.children?.length ? this.sortMenuChildren(item.children) : [],
    }));
  }

  private sortMenuChildren(children: MenuChildrenItem[]): MenuChildrenItem[] {
    return this.sortBySeqNo(children).map(child => ({
      ...child,
      children: child.children?.length ? this.sortMenuChildren(child.children) : [],
    }));
  }

  private sortBySeqNo<T extends { seqNo?: number }>(items: T[]): T[] {
    return items
      .map((item, index) => ({ item, index }))
      .sort((a, b) => {
        const seqA = a.item.seqNo ?? Number.MAX_SAFE_INTEGER;
        const seqB = b.item.seqNo ?? Number.MAX_SAFE_INTEGER;
        if (seqA !== seqB) {
          return seqA - seqB;
        }
        return a.index - b.index;
      })
      .map(({ item }) => item);
  }

  /** Add one item to the menu data. */
  add(menu: Menu) {
    const tmpMenu = this.menu$.value;
    tmpMenu.push(menu);
    this.menu$.next(tmpMenu);
  }

  /** Reset the menu data. */
  reset() {
    this.menu$.next([]);
  }

  /** Delete empty values and rebuild route. */
  buildRoute(routeArr: string[]) {

    const routeParts = routeArr
      .filter(item => item && item.trim())
      .map(item => item.replace(/^\/+|\/+$/g, ''))
      .filter(item => {
        const key = item.toLowerCase();
        return key !== '#' && key !== '%23';
      });

    if (routeParts.length === 1 && routeParts[0].toLowerCase() === 'home') {
      return '/dashboard';
    }

    const lastPart = routeParts[routeParts.length - 1]?.toLowerCase().replace(/[\s_-]/g, '') ?? '';
    if (lastPart === 'tclist') {
      return '/student/tclist';
    }
    if (lastPart === 'uploadstudentdata') {
      return '/student/uploadstudentdata';
    }
    if (lastPart === 'installmentstatus' || lastPart === 'feeinstallmentstatus') {
      return '/fee/installmentStatus';
    }
    const lastPartNoAspx = lastPart.replace(/\.aspx$/, '');
    if (
      lastPartNoAspx === 'feedefaulter' ||
      lastPartNoAspx === 'feedefaulterlist' ||
      lastPartNoAspx === 'feedeefaulterlist'
    ) {
      return '/fee/feeDefaulter';
    }
    if (lastPartNoAspx === 'feeheadsection' || lastPartNoAspx === 'feeheadbysection') {
      return '/fee/feeHeadSection';
    }

    return routeParts.length ? '/' + routeParts.join('/') : '';
  }

  /** Get the menu item name based on current route. */
  getItemName(routeArr: string[]) {
    return this.getLevel(routeArr)[routeArr.length - 1];
  }

  // Whether is a leaf menu
  private isLeafItem(item: MenuChildrenItem) {
    const cond0 = item.route === undefined;
    const cond1 = item.children === undefined;
    const cond2 = !cond1 && item.children?.length === 0;
    return cond0 || cond1 || cond2;
  }

  // Deep clone object could be jsonized
  private deepClone(obj: any) {
    return JSON.parse(JSON.stringify(obj));
  }

  // Whether two objects could be jsonized equal
  private isJsonObjEqual(obj0: any, obj1: any) {
    return JSON.stringify(obj0) === JSON.stringify(obj1);
  }

  // Whether routeArr equals realRouteArr (after remove empty route element)
  private isRouteEqual(routeArr: string[], realRouteArr: string[]) {
    realRouteArr = this.deepClone(realRouteArr);
    realRouteArr = realRouteArr.filter(r => r !== '');
    return this.isJsonObjEqual(routeArr, realRouteArr);
  }

  /** Get the menu level. */
  getLevel(routeArr: string[]): string[] {
    let tmpArr: any[] = [];
    this.menu$.value.forEach(item => {
      // Breadth-first traverse
      let unhandledLayer = [{ item, parentNamePathList: [], realRouteArr: [] }];
      while (unhandledLayer.length > 0) {
        let nextUnhandledLayer: any[] = [];
        for (const ele of unhandledLayer) {
          const eachItem = ele.item;
          const currentNamePathList = this.deepClone(ele.parentNamePathList).concat(eachItem.name);
          const currentRealRouteArr = this.deepClone(ele.realRouteArr).concat(eachItem.route);
          // Compare the full Array for expandable
          if (this.isRouteEqual(routeArr, currentRealRouteArr)) {
            tmpArr = currentNamePathList;
            break;
          }
          if (!this.isLeafItem(eachItem)) {
            const wrappedChildren = eachItem.children?.map(child => ({
              item: child,
              parentNamePathList: currentNamePathList,
              realRouteArr: currentRealRouteArr,
            }));
            nextUnhandledLayer = nextUnhandledLayer.concat(wrappedChildren);
          }
        }
        unhandledLayer = nextUnhandledLayer;
      }
    });
    return tmpArr;
  }

  /** Add namespace for translation. */
  addNamespace(menu: Menu[] | MenuChildrenItem[], namespace: string) {
    menu.forEach(menuItem => {
      //menuItem.name = `${namespace}.${menuItem.name}`;
        menuItem.name = `${menuItem.name}`;
      if (menuItem.children && menuItem.children.length > 0) {
        this.addNamespace(menuItem.children, menuItem.name);
      }
    });
  }
}
