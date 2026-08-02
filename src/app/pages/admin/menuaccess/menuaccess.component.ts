import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { ToastrService } from 'ngx-toastr';
import { PageHeaderComponent } from '@shared';

import { ICollege } from '../../../interfaces/ICollege';
import { IDesignation } from '../../../interfaces/IDesignation';
import { IFaculty } from '../../../interfaces/IClassAndSection';
import {
  IMenuPermissionItem,
  IMenuPermissionSubItem,
} from '../../../interfaces/IMenuPermission';
import { CollegeService } from '../../../services/masterservice/college.service';
import { DesignationService } from '../../../services/masterservice/designation.service';
import { MenuPermissionService } from '../../../services/masterservice/menu-permission.service';
import { FacultyService } from '../../faculty/services/faculty.service';

@Component({
  selector: 'app-menuaccess',
  host: { class: 'admin-page-host' },
  imports: [
    FormsModule,
    PageHeaderComponent,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule,
  ],
  templateUrl: './menuaccess.component.html',
  styleUrl: './menuaccess.component.scss',
})
export class MenuaccessComponent implements OnInit {
  private collegeService = inject(CollegeService);
  private designationService = inject(DesignationService);
  private facultyService = inject(FacultyService);
  private menuService = inject(MenuPermissionService);
  private toast = inject(ToastrService);

  colleges: ICollege[] = [];
  designations: IDesignation[] = [];
  private allFaculties: IFaculty[] = [];
  faculties: IFaculty[] = [];
  menuList: IMenuPermissionItem[] = [];

  selectedCollegeId: number | null = null;
  selectedDesignation: string | null = null;
  selectedFacultyId: number | null = null;

  isLoadingFaculties = false;
  isLoadingMenus = false;
  isSaving = false;

  ngOnInit(): void {
    this.loadColleges();
  }

  private loadColleges(): void {
    this.collegeService.getCollegeList().subscribe({
      next: res => {
        if (res.success) {
          this.colleges = Array.isArray(res.data) ? res.data : res.data ? [res.data] : [];
        }
      },
      error: () => this.toast.error('Failed to load colleges.'),
    });
  }

  onCollegeChange(): void {
    this.selectedDesignation = null;
    this.selectedFacultyId = null;
    this.designations = [];
    this.allFaculties = [];
    this.faculties = [];
    this.menuList = [];

    if (!this.selectedCollegeId) {
      return;
    }

    this.loadDesignations();
    this.loadFaculties(Number(this.selectedCollegeId));
  }

  private loadDesignations(): void {
    this.designationService.getDesignationList().subscribe({
      next: res => {
        this.designations = res.success && Array.isArray(res.data) ? res.data : [];
      },
      error: () => this.toast.error('Failed to load designations.'),
    });
  }

  private loadFaculties(collegeId: number): void {
    this.isLoadingFaculties = true;
    this.facultyService.getListByCollegeId(collegeId).subscribe({
      next: res => {
        this.isLoadingFaculties = false;
        this.allFaculties = res.success && Array.isArray(res.data) ? res.data : [];
        this.applyFacultyFilter();
      },
      error: () => {
        this.isLoadingFaculties = false;
        this.allFaculties = [];
        this.faculties = [];
        this.toast.error('Failed to load faculties.');
      },
    });
  }

  onDesignationChange(): void {
    this.selectedFacultyId = null;
    this.menuList = [];
    this.applyFacultyFilter();
  }

  private applyFacultyFilter(): void {
    if (!this.selectedDesignation) {
      this.faculties = [...this.allFaculties];
      return;
    }
    const target = this.selectedDesignation.trim().toLowerCase();
    this.faculties = this.allFaculties.filter(
      f => (f.designation ?? '').trim().toLowerCase() === target
    );
  }

  facultyLabel(faculty: IFaculty): string {
    return [faculty.name, faculty.middleName, faculty.lastName]
      .filter(part => !!part && String(part).trim())
      .join(' ')
      .trim();
  }

  onFacultyChange(): void {
    this.menuList = [];
    if (!this.selectedFacultyId) {
      return;
    }
    this.loadMenuList();
  }

  private loadMenuList(): void {
    this.isLoadingMenus = true;
    this.menuService.listMenus().subscribe({
      next: res => {
        this.isLoadingMenus = false;
        this.menuList = res.success && Array.isArray(res.data) ? res.data : [];
      },
      error: () => {
        this.isLoadingMenus = false;
        this.menuList = [];
        this.toast.error('Failed to load menus.');
      },
    });
  }

  toggleMenu(menu: IMenuPermissionItem, checked: boolean): void {
    menu.checked = checked;
    menu.subMenus.forEach(sub => (sub.checked = checked));
  }

  toggleSubMenu(menu: IMenuPermissionItem, sub: IMenuPermissionSubItem, checked: boolean): void {
    sub.checked = checked;
    menu.checked = menu.subMenus.some(s => s.checked);
  }

  savePermissions(): void {
    if (!this.selectedFacultyId) {
      this.toast.warning('Select a faculty to allocate menu access.');
      return;
    }

    const menuIds = this.menuList.filter(m => m.checked).map(m => m.menuId);
    const subMenuIds = this.menuList
      .flatMap(m => m.subMenus)
      .filter(s => s.checked)
      .map(s => s.subMenuId);

    this.isSaving = true;
    this.menuService
      .savePermissions({
        facultyId: Number(this.selectedFacultyId),
        collegeId: Number(this.selectedCollegeId),
        menuIds,
        subMenuIds,
      })
      .subscribe({
        next: res => {
          this.isSaving = false;
          if (res.success) {
            this.toast.success(res.message || 'Menu access saved.');
          } else {
            this.toast.info(res.message || 'Save will be enabled once API is provided.');
          }
        },
        error: () => {
          this.isSaving = false;
          this.toast.error('Failed to save menu access.');
        },
      });
  }
}
