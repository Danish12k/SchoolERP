import {
  MatMomentDateModule,
  environment
} from "./chunk-DL7BPOVA.js";
import {
  MatBottomSheetModule,
  MatExpansionModule,
  MatSliderModule,
  MatSnackBarModule,
  MatStepperModule,
  MatTreeModule
} from "./chunk-WMVVWLC2.js";
import {
  MatButtonToggleModule
} from "./chunk-YS74DO2Z.js";
import {
  MatProgressSpinnerModule,
  MatSidenavModule,
  MatSlideToggle,
  MatSlideToggleModule,
  MatToolbarModule
} from "./chunk-7QHBP55O.js";
import {
  MatGridListModule
} from "./chunk-2RI7FG4F.js";
import {
  MatProgressBarModule,
  MatSort,
  MatSortHeader,
  MatSortModule
} from "./chunk-UYJNLNSV.js";
import {
  MatBadgeModule,
  MatCell,
  MatCellDef,
  MatCheckboxModule,
  MatChipsModule,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatMenuModule,
  MatRadioModule,
  MatRow,
  MatRowDef,
  MatTable,
  MatTableDataSource,
  MatTableModule
} from "./chunk-SWW7YBYM.js";
import {
  MAT_DIALOG_DEFAULT_OPTIONS,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogConfig,
  MatDialogContent,
  MatDialogModule,
  MatDialogTitle
} from "./chunk-KXOHAYUN.js";
import {
  MatListModule,
  MatTabsModule
} from "./chunk-SYOIFQFY.js";
import {
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerModule,
  MatDatepickerToggle
} from "./chunk-7USXQSSE.js";
import {
  MatDividerModule
} from "./chunk-PLIWSWLX.js";
import {
  MAT_CARD_CONFIG,
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardModule,
  MatCardTitle
} from "./chunk-VYFYOWDW.js";
import {
  MatAutocompleteModule
} from "./chunk-6GHIWQHO.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-A73OTLOU.js";
import {
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE
} from "./chunk-V5CFSWHT.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  HttpClient,
  MatButton,
  MatButtonModule,
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatIcon,
  MatIconButton,
  MatIconModule,
  MatLabel,
  MatOption,
  MatOptionModule,
  MatPaginator,
  MatPaginatorIntl,
  MatPaginatorModule,
  MatRippleModule,
  MatSelect,
  MatSelectModule,
  MatSuffix,
  MatTooltipModule,
  MinLengthValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  PaginatorI18nService,
  ReactiveFormsModule,
  RequiredValidator,
  TranslateModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-VC5UOWO3.js";
import {
  Component,
  Injectable,
  NgModule,
  ViewChild,
  __spreadValues,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-KH435EP6.js";

// schematics/ng-add/files/module-files/app/material.module.ts
var _MaterialModule = class _MaterialModule {
};
_MaterialModule.\u0275fac = function MaterialModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MaterialModule)();
};
_MaterialModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _MaterialModule });
_MaterialModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ providers: [
  {
    provide: MatPaginatorIntl,
    deps: [PaginatorI18nService],
    useFactory: (paginatorI18nSrv) => paginatorI18nSrv.getPaginatorIntl()
  },
  {
    provide: MAT_DIALOG_DEFAULT_OPTIONS,
    useValue: __spreadValues({}, new MatDialogConfig())
  },
  {
    provide: MAT_DATE_LOCALE,
    useFactory: () => navigator.language
    // <= This will be overrided by runtime setting
  },
  {
    provide: MAT_DATE_FORMATS,
    useValue: {
      parse: {
        dateInput: "YYYY-MM-DD"
      },
      display: {
        dateInput: "YYYY-MM-DD",
        monthYearLabel: "YYYY MMM",
        dateA11yLabel: "LL",
        monthYearA11yLabel: "YYYY MMM"
      }
    }
  },
  {
    provide: MAT_CARD_CONFIG,
    useValue: {
      appearance: "outlined"
    }
  }
], imports: [
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatStepperModule,
  MatDatepickerModule,
  MatMomentDateModule,
  // <= You can also import the other adapter you need (e.g. luxon, date-fns)
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule
] });
var MaterialModule = _MaterialModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MaterialModule, [{
    type: NgModule,
    args: [{
      exports: [
        MatAutocompleteModule,
        MatBadgeModule,
        MatBottomSheetModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatCheckboxModule,
        MatChipsModule,
        MatStepperModule,
        MatDatepickerModule,
        MatMomentDateModule,
        // <= You can also import the other adapter you need (e.g. luxon, date-fns)
        MatDialogModule,
        MatDividerModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatRippleModule,
        MatSelectModule,
        MatSidenavModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        MatSortModule,
        MatTableModule,
        MatTabsModule,
        MatToolbarModule,
        MatTooltipModule,
        MatTreeModule
      ],
      providers: [
        {
          provide: MatPaginatorIntl,
          deps: [PaginatorI18nService],
          useFactory: (paginatorI18nSrv) => paginatorI18nSrv.getPaginatorIntl()
        },
        {
          provide: MAT_DIALOG_DEFAULT_OPTIONS,
          useValue: __spreadValues({}, new MatDialogConfig())
        },
        {
          provide: MAT_DATE_LOCALE,
          useFactory: () => navigator.language
          // <= This will be overrided by runtime setting
        },
        {
          provide: MAT_DATE_FORMATS,
          useValue: {
            parse: {
              dateInput: "YYYY-MM-DD"
            },
            display: {
              dateInput: "YYYY-MM-DD",
              monthYearLabel: "YYYY MMM",
              dateA11yLabel: "LL",
              monthYearA11yLabel: "YYYY MMM"
            }
          }
        },
        {
          provide: MAT_CARD_CONFIG,
          useValue: {
            appearance: "outlined"
          }
        }
      ]
    }]
  }], null, null);
})();

// src/app/core/constants/apiendpoint.ts
var baseURL = environment.baseUrl;
var apiEndpoint = {
  // Authentication
  LOGIN: baseURL + "/Auth/Login",
  REGISTER: baseURL + "/Auth/Register",
  REFRESH_TOKEN: baseURL + "/Auth/RefreshToken",
  //sess
  // Session Management
  session: {
    add: baseURL + "/Session/AddSession",
    update: baseURL + "/Session/UpdateSession",
    delete: baseURL + "/Session/DeleteSession",
    list: baseURL + "/Session/SessionList"
  },
  // Designation Management
  designation: {
    add: baseURL + "/Designation/AddDesignation",
    update: baseURL + "/Designation/UpdateDesignation",
    delete: baseURL + "/Designation/DeleteDesignation",
    list: baseURL + "/Designation/DesignationList"
  },
  //section
  section: {
    add: baseURL + "/Section/AddSection",
    update: baseURL + "/Section/UpdateSection",
    get: baseURL + "/Section/GetSection?SectionId=",
    delete: baseURL + "/Section/DeleteSection",
    list: baseURL + "/Section/SectionList",
    assignSection: baseURL + "/Course/AssignSection"
  },
  //college
  college: {
    add: baseURL + "/Course/AddClass",
    update: baseURL + "/Course/UpdateClass",
    get: baseURL + "",
    list: baseURL + "/College/CollegeList",
    ListBySessionAndCollege: baseURL + "/Course/ClassList",
    delete: baseURL + "/College/DeleteCollege"
  },
  faculty: {
    listByCollege: baseURL + "/Faculty/FacultyList?CollegeId="
  },
  SMSAPI: {
    listByCollegeId: baseURL + "/SmsApi/SmsApiList?CollegeId=",
    add: baseURL + "/SmsApi/AddApi",
    update: baseURL + "/SmsApi/UpdateAPI",
    delete: baseURL + "/SmsApi/Delete"
  },
  //expense head
  expensehead: {
    add: baseURL + "/Expense/AddExpense",
    update: baseURL + "/Expense/UpdateExpense",
    delete: baseURL + "/Expense/DeleteExpense?Id=",
    list: baseURL + "/Expense/ExpenseList"
  },
  //Fee Group
  feeGroup: {
    add: baseURL + "/FeeGroup/AddFeeGroup",
    update: baseURL + "/FeeGroup/UpdateFeeGroup",
    delete: baseURL + "/FeeGroup/DeleteFeeGroup?Id=",
    list: baseURL + "/FeeGroup/GetGroupList"
  },
  //fee head
  feeHead: {
    add: baseURL + "/FeeHead/AddFeeHead",
    update: baseURL + "/FeeHead/UpdateFeeHead",
    // delete:baseURL+'',
    list: baseURL + "/FeeHead/FeeHeadList"
  },
  //fee installment
  feeInstallment: {
    add: baseURL + "/FeeInstallment/AddFeeHead",
    update: baseURL + "/FeeInstallment/UpdateInstallment",
    // delete:baseURL+'',
    listByCollegeAndSession: baseURL + "/FeeInstallment/FeeInstallmentList"
  },
  //house
  house: {
    add: baseURL + "/House/AddHouse",
    update: baseURL + "/House/UpdateHouse",
    list: baseURL + "/House/HouseList"
  },
  //salutation
  salutation: {
    add: baseURL + "/Salutaion/AddSalutaion",
    update: baseURL + "/Salutaion/UpdateSalutaion",
    list: baseURL + "/Salutaion/SalutationList"
  },
  //admin category
  category: {
    add: baseURL + "/Category/AddCategory",
    update: baseURL + "/Category/UpdateCategory",
    list: baseURL + "/Category/CategoryList"
  },
  //add school
  addSchool: {
    add: baseURL + "/College/AddSchool",
    update: baseURL + "/College/UpdateCollege",
    list: baseURL + "/College/CollegeList"
  },
  //add subject 
  subject: {
    subjectType: baseURL + "/Subject/SubjectType",
    add: baseURL + "/Subject/AddSubject",
    update: baseURL + "/Subject/UpdateSubject",
    list: baseURL + "/Subject/SubjectList?SubjectType="
  },
  //assignSubject
  assignSubject: {
    add: baseURL + "/Subject/AssignSubject",
    delete: baseURL + "/Subject/DeleteAssignSubject?ClassSectionSubjectId=",
    list: baseURL + "/Subject/AssignSubjectList?classSectionId="
  },
  // student
  student: {
    list: baseURL + "/Student/StudentList"
  }
};

// src/app/services/fee-master.service.ts
var _FeeMasterService = class _FeeMasterService {
  constructor() {
    this.http = inject(HttpClient);
    this.endpoint = apiEndpoint;
  }
  // Fee Group. -- START --
  addFeeGroup(body) {
    return this.http.post(this.endpoint.feeGroup.add, body);
  }
  updateFeeGroup(body) {
    return this.http.post(this.endpoint.feeGroup.update, body);
  }
  deleteFeeGroup(Id) {
    debugger;
    return this.http.post(this.endpoint.feeGroup.delete + Id, null);
  }
  listFeeGroup() {
    return this.http.get(this.endpoint.feeGroup.list);
  }
  // Fee Group. -- END --
  // Fee head. -- START --
  addFeeHead(body) {
    return this.http.post(this.endpoint.feeHead.add, body);
  }
  updateFeeHead(body) {
    debugger;
    return this.http.post(this.endpoint.feeHead.update, body);
  }
  /*  deleteFeeHead(Id: Number): Observable<IApiResponse<IFeeHead>> {
     return this.http.post<IApiResponse<IFeeHead>>(this.endpoint.feeHead.delete + Id, null);
   } */
  listFeeHead() {
    return this.http.get(this.endpoint.feeHead.list);
  }
  // Fee head. -- END --
  // fee installment start
  listFeeInstallment(collegeId, sessionId) {
    debugger;
    return this.http.get(this.endpoint.feeInstallment.listByCollegeAndSession + "?CollegeId=" + collegeId + "&SessionId=" + sessionId);
  }
  addFeeInstallment(body) {
    return this.http.post(this.endpoint.feeInstallment.add, body);
  }
  updateFeeInstallment(body) {
    debugger;
    return this.http.post(this.endpoint.feeInstallment.update, body);
  }
};
_FeeMasterService.\u0275fac = function FeeMasterService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FeeMasterService)();
};
_FeeMasterService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FeeMasterService, factory: _FeeMasterService.\u0275fac, providedIn: "root" });
var FeeMasterService = _FeeMasterService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FeeMasterService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/pages/admin/fee-group/fee-group.component.ts
var _c0 = ["editDialog"];
var _c1 = () => [5, 10, 25];
function FeeGroupComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Fee group is required");
    \u0275\u0275elementEnd();
  }
}
function FeeGroupComponent_th_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 24);
    \u0275\u0275text(1, "Expense");
    \u0275\u0275elementEnd();
  }
}
function FeeGroupComponent_td_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r2.streamName);
  }
}
function FeeGroupComponent_th_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 24);
    \u0275\u0275text(1, "Status");
    \u0275\u0275elementEnd();
  }
}
function FeeGroupComponent_td_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", element_r3.activeStatus == 1 ? "Active" : "Inactive", " ");
  }
}
function FeeGroupComponent_th_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 26);
    \u0275\u0275text(1, "Actions");
    \u0275\u0275elementEnd();
  }
}
function FeeGroupComponent_td_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 25)(1, "button", 27);
    \u0275\u0275listener("click", function FeeGroupComponent_td_36_Template_button_click_1_listener() {
      const row_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.openEditDialog(row_r5));
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "drive_file_rename_outline");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 28)(5, "mat-icon", 29);
    \u0275\u0275listener("click", function FeeGroupComponent_td_36_Template_mat_icon_click_5_listener() {
      const row_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.DeleteExpense(row_r5));
    });
    \u0275\u0275text(6, "delete");
    \u0275\u0275elementEnd()()();
  }
}
function FeeGroupComponent_tr_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 30);
  }
}
function FeeGroupComponent_tr_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 31);
  }
}
function FeeGroupComponent_ng_template_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "h2", 32);
    \u0275\u0275text(1, "Edit Expense");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "mat-dialog-content")(3, "form", 6, 1)(5, "mat-form-field", 33)(6, "mat-label");
    \u0275\u0275text(7, "Fee Group");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "input", 34);
    \u0275\u0275twoWayListener("ngModelChange", function FeeGroupComponent_ng_template_40_Template_input_ngModelChange_8_listener($event) {
      const data_r8 = \u0275\u0275restoreView(_r7).$implicit;
      \u0275\u0275twoWayBindingSet(data_r8.streamName, $event) || (data_r8.streamName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "mat-slide-toggle", 35);
    \u0275\u0275twoWayListener("ngModelChange", function FeeGroupComponent_ng_template_40_Template_mat_slide_toggle_ngModelChange_9_listener($event) {
      const data_r8 = \u0275\u0275restoreView(_r7).$implicit;
      \u0275\u0275twoWayBindingSet(data_r8.activeStatus, $event) || (data_r8.activeStatus = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275text(10, " Status ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "mat-dialog-actions", 36)(12, "button", 37);
    \u0275\u0275text(13, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 38);
    \u0275\u0275text(15, "Update");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const data_r8 = ctx.$implicit;
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", data_r8.streamName);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", data_r8.activeStatus);
    \u0275\u0275property("checked", data_r8.activeStatus === 1);
    \u0275\u0275advance(5);
    \u0275\u0275property("mat-dialog-close", data_r8);
  }
}
var _FeeGroupComponent = class _FeeGroupComponent {
  constructor(fb, dialog) {
    this.fb = fb;
    this.dialog = dialog;
    this.dataSource = new MatTableDataSource([]);
    this.displayedColumns = ["feeGroup", "status", "actions"];
    this._feeGroupService = inject(FeeMasterService);
    this.feeGroupList = [];
  }
  // expenseName: string = '';
  ngOnInit() {
    this.feeGroupForm = this.fb.group({
      streamId: [0],
      streamName: [null, [Validators.required, Validators.minLength(2)]],
      activeStatus: [false]
    });
    this.GetFeeGroupList();
  }
  GetFeeGroupList() {
    this._feeGroupService.listFeeGroup().subscribe({
      next: (res) => {
        if (res.success) {
          this.dataSource.data = Array.isArray(res.data) ? res.data : [res.data];
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
      },
      error: (err) => {
        console.log("error to fetch expense list", err);
      }
    });
  }
  addFeeGroup() {
    debugger;
    if (this.feeGroupForm.valid) {
      const formValue = this.feeGroupForm.value;
      formValue.activeStatus = formValue.activeStatus ? 1 : 0;
      this._feeGroupService.addFeeGroup(formValue).subscribe({
        next: (res) => {
          if (res.success) {
            alert(res.message);
            this.GetFeeGroupList();
          } else {
            alert(res.message);
          }
        },
        error: (err) => {
          console.log("add expense error", err);
          alert("Something went wrong.");
        }
      });
    }
  }
  // listing
  openEditDialog(feeGroup) {
    const dialogRef = this.dialog.open(this.editDialog, {
      width: "400px",
      data: __spreadValues({}, feeGroup)
    });
    debugger;
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        debugger;
        console.log("Dialog result:", result);
        result.activeStatus = result.activeStatus ? 1 : 0;
        this._feeGroupService.updateFeeGroup(result).subscribe({
          next: (res) => {
            if (res.success) {
              alert(res.message);
              this.GetFeeGroupList();
            }
          },
          error: (err) => {
            console.error("Error updating session:", err);
            alert("Failed to update session");
          }
        });
      }
    });
  }
  applyFilter(event) {
    const filterValue = event.target.value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  /** Checkbox Selection Logic */
  toggleSelection(row) {
    if (this.feeGroupList.includes(row)) {
      this.feeGroupList = this.feeGroupList.filter((r) => r !== row);
    } else {
      this.feeGroupList.push(row);
    }
  }
  isAllSelected() {
    return this.feeGroupList.length === this.dataSource.data.length;
  }
  isPartialSelected() {
    return this.feeGroupList.length > 0 && !this.isAllSelected();
  }
  masterToggle() {
    if (this.isAllSelected()) {
      this.feeGroupList = [];
    } else {
      this.feeGroupList = [...this.dataSource.data];
    }
  }
  DeleteExpense(feeGroup) {
    debugger;
    const id = feeGroup.streamId;
    if (id > 0) {
      this._feeGroupService.deleteFeeGroup(id).subscribe({
        next: (res) => {
          if (res.success) {
            alert(res.message);
            this.GetFeeGroupList();
          }
        },
        error: (err) => {
          console.log("error,", err);
          alert("something went wrong");
        }
      });
    }
  }
};
_FeeGroupComponent.\u0275fac = function FeeGroupComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FeeGroupComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(MatDialog));
};
_FeeGroupComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FeeGroupComponent, selectors: [["app-fee-group"]], viewQuery: function FeeGroupComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(MatPaginator, 5);
    \u0275\u0275viewQuery(MatSort, 5);
    \u0275\u0275viewQuery(_c0, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.paginator = _t.first);
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.sort = _t.first);
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.editDialog = _t.first);
  }
}, decls: 42, vars: 8, consts: [["editDialog", ""], ["editClassForm", "ngForm"], [1, "col-sm-12"], [3, "ngSubmit", "formGroup"], [1, "fee-group-form"], [1, "fee-group-form__grid"], [1, "w-100"], ["matInput", "", "formControlName", "streamName", "placeholder", "Please enter fee group name"], ["color", "primary", "formControlName", "activeStatus"], [1, "fee-group-form__actions"], ["mat-flat-button", "", "color", "primary", "type", "submit"], ["appearance", "outline"], ["matInput", "", "placeholder", "Filter class", 3, "keyup"], [1, "fee-group-table__wrap"], ["mat-table", "", "matSort", "", 1, "mat-elevation-z8", "fee-group-table", 3, "dataSource"], ["matColumnDef", "feeGroup"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "status"], ["matColumnDef", "actions"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSize", "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-cell", ""], ["mat-icon-button", "", "color", "primary", 3, "click"], ["mat-icon-button", "", "color", "primary"], [3, "click"], ["mat-header-row", ""], ["mat-row", ""], ["mat-dialog-title", ""], ["appearance", "fill", 2, "width", "100%"], ["matInput", "", "name", "streamName", "required", "", "minlength", "1", 3, "ngModelChange", "ngModel"], ["name", "activeStatus", 3, "ngModelChange", "ngModel", "checked"], ["align", "end"], ["mat-button", "", "mat-dialog-close", ""], ["mat-raised-button", "", "color", "primary", 3, "mat-dialog-close"]], template: function FeeGroupComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "mat-card")(2, "mat-card-header")(3, "mat-card-title");
    \u0275\u0275text(4, "Add Fee Group");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "form", 3);
    \u0275\u0275listener("ngSubmit", function FeeGroupComponent_Template_form_ngSubmit_5_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.addFeeGroup());
    });
    \u0275\u0275elementStart(6, "mat-card-content")(7, "div", 4)(8, "div", 5)(9, "mat-form-field", 6)(10, "mat-label");
    \u0275\u0275text(11, "Fee Group");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 7);
    \u0275\u0275conditionalCreate(13, FeeGroupComponent_Conditional_13_Template, 2, 0, "mat-error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "mat-slide-toggle", 8);
    \u0275\u0275text(15, " Active ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 9)(17, "button", 10);
    \u0275\u0275text(18, "Save");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(19, "div", 2)(20, "mat-card")(21, "mat-card-content")(22, "mat-form-field", 11)(23, "mat-label");
    \u0275\u0275text(24, "Search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "input", 12);
    \u0275\u0275listener("keyup", function FeeGroupComponent_Template_input_keyup_25_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.applyFilter($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 13)(27, "table", 14);
    \u0275\u0275elementContainerStart(28, 15);
    \u0275\u0275template(29, FeeGroupComponent_th_29_Template, 2, 0, "th", 16)(30, FeeGroupComponent_td_30_Template, 2, 1, "td", 17);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(31, 18);
    \u0275\u0275template(32, FeeGroupComponent_th_32_Template, 2, 0, "th", 16)(33, FeeGroupComponent_td_33_Template, 2, 1, "td", 17);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(34, 19);
    \u0275\u0275template(35, FeeGroupComponent_th_35_Template, 2, 0, "th", 20)(36, FeeGroupComponent_td_36_Template, 7, 0, "td", 17);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(37, FeeGroupComponent_tr_37_Template, 1, 0, "tr", 21)(38, FeeGroupComponent_tr_38_Template, 1, 0, "tr", 22);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(39, "mat-paginator", 23);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(40, FeeGroupComponent_ng_template_40_Template, 16, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    let tmp_2_0;
    \u0275\u0275advance(5);
    \u0275\u0275property("formGroup", ctx.feeGroupForm);
    \u0275\u0275advance(8);
    \u0275\u0275conditional(((tmp_2_0 = ctx.feeGroupForm.get("streamName")) == null ? null : tmp_2_0.hasError("required")) && ((tmp_2_0 = ctx.feeGroupForm.get("streamName")) == null ? null : tmp_2_0.touched) ? 13 : -1);
    \u0275\u0275advance(14);
    \u0275\u0275property("dataSource", ctx.dataSource);
    \u0275\u0275advance(10);
    \u0275\u0275property("matHeaderRowDef", ctx.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("pageSize", 5)("pageSizeOptions", \u0275\u0275pureFunction0(7, _c1));
  }
}, dependencies: [
  MatCard,
  MaterialModule,
  MatButton,
  MatIconButton,
  MatCardContent,
  MatCardHeader,
  MatCardTitle,
  MatDialogClose,
  MatDialogTitle,
  MatDialogActions,
  MatDialogContent,
  MatFormField,
  MatLabel,
  MatError,
  MatIcon,
  MatInput,
  MatPaginator,
  MatSlideToggle,
  MatSort,
  MatSortHeader,
  MatTable,
  MatHeaderCellDef,
  MatHeaderRowDef,
  MatColumnDef,
  MatCellDef,
  MatRowDef,
  MatHeaderCell,
  MatCell,
  MatHeaderRow,
  MatRow,
  FormsModule,
  \u0275NgNoValidate,
  DefaultValueAccessor,
  NgControlStatus,
  NgControlStatusGroup,
  RequiredValidator,
  MinLengthValidator,
  NgModel,
  NgForm,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatOptionModule,
  MatSelectModule,
  TranslateModule,
  ReactiveFormsModule,
  FormGroupDirective,
  FormControlName
], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.fee-group-form[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 12px;\n}\n.fee-group-form__grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 12px;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  align-items: center;\n}\n.fee-group-form__actions[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n.w-100[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.fee-group-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.fee-group-table__wrap[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow-x: auto;\n}\n@media (max-width: 600px) {\n  .fee-group-form__grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    align-items: start;\n  }\n}\n/*# sourceMappingURL=fee-group.component.css.map */"] });
var FeeGroupComponent = _FeeGroupComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FeeGroupComponent, [{
    type: Component,
    args: [{ selector: "app-fee-group", imports: [
      MatCard,
      MaterialModule,
      FormsModule,
      MatButtonModule,
      MatCardModule,
      MatFormFieldModule,
      MatIconModule,
      MatInputModule,
      MatOptionModule,
      MatSelectModule,
      TranslateModule,
      ReactiveFormsModule
    ], template: `<div class="col-sm-12">\r
    <mat-card>\r
        <mat-card-header>\r
            <mat-card-title>Add Fee Group</mat-card-title>\r
        </mat-card-header>\r
        <form [formGroup]="feeGroupForm" (ngSubmit)="addFeeGroup()">\r
            <mat-card-content>\r
                <div class="fee-group-form">\r
                    <div class="fee-group-form__grid">\r
                        <mat-form-field class="w-100">\r
                            <mat-label>Fee Group</mat-label>\r
                            <input matInput formControlName="streamName" placeholder="Please enter fee group name" />\r
                            @if (feeGroupForm.get('streamName')?.hasError('required') &&\r
                            feeGroupForm.get('streamName')?.touched) {\r
                            <mat-error>Fee group is required</mat-error>\r
                            }\r
                        </mat-form-field>\r
\r
                        <mat-slide-toggle color="primary" formControlName="activeStatus">\r
                            Active\r
                        </mat-slide-toggle>\r
                    </div>\r
\r
                    <div class="fee-group-form__actions">\r
                        <button mat-flat-button color="primary" type="submit">Save</button>\r
                    </div>\r
                </div>\r
            </mat-card-content>\r
        </form>\r
    </mat-card>\r
</div>\r
\r
<div class="col-sm-12">\r
    <mat-card>\r
        <mat-card-content>\r
            <mat-form-field appearance="outline">\r
                <mat-label>Search</mat-label>\r
                <input matInput (keyup)="applyFilter($event)" placeholder="Filter class">\r
            </mat-form-field>\r
            <div class="fee-group-table__wrap">\r
                <table mat-table [dataSource]="dataSource" matSort class="mat-elevation-z8 fee-group-table">\r
                    <ng-container matColumnDef="feeGroup">\r
                        <th mat-header-cell *matHeaderCellDef mat-sort-header>Expense</th>\r
                        <td mat-cell *matCellDef="let element">{{ element.streamName }}</td>\r
                    </ng-container>\r
                    <ng-container matColumnDef="status">\r
                        <th mat-header-cell *matHeaderCellDef mat-sort-header>Status</th>\r
                        <td mat-cell *matCellDef="let element">\r
                            {{ element.activeStatus ==1?"Active":"Inactive"}}\r
                        </td>\r
                    </ng-container>\r
                    <ng-container matColumnDef="actions">\r
                        <th mat-header-cell *matHeaderCellDef>Actions</th>\r
                        <td mat-cell *matCellDef="let row">\r
                            <button mat-icon-button color="primary" (click)="openEditDialog(row)">\r
                                <mat-icon>drive_file_rename_outline</mat-icon>\r
                            </button>\r
                            <button mat-icon-button color="primary">\r
                                <mat-icon (click)="DeleteExpense(row)" >delete</mat-icon>\r
                            </button>\r
                        </td>\r
                    </ng-container>\r
                    <!-- Header & Rows -->\r
                    <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>\r
                    <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>\r
                </table>\r
            </div>\r
            <!-- Paginator -->\r
            <mat-paginator [pageSize]="5" [pageSizeOptions]="[5, 10, 25]" showFirstLastButtons></mat-paginator>\r
\r
        </mat-card-content>\r
    </mat-card>\r
</div>\r
\r
\r
<!-- Edit Expense Popup Template -->\r
<!-- ============================= -->\r
<ng-template #editDialog let-data>\r
    <h2 mat-dialog-title>Edit Expense</h2>\r
    <mat-dialog-content>\r
        <form #editClassForm="ngForm" class="w-100">\r
            <mat-form-field appearance="fill" style="width:100%">\r
                <mat-label>Fee Group</mat-label>\r
                <input matInput [(ngModel)]="data.streamName" name="streamName" required minlength="1" />\r
            </mat-form-field>\r
            <mat-slide-toggle [(ngModel)]="data.activeStatus" name="activeStatus" [checked]="data.activeStatus === 1">\r
                Status\r
            </mat-slide-toggle>\r
        </form>\r
    </mat-dialog-content>\r
\r
    <mat-dialog-actions align="end">\r
        <button mat-button mat-dialog-close>Cancel</button>\r
        <button mat-raised-button color="primary" [mat-dialog-close]="data">Update</button>\r
    </mat-dialog-actions>\r
</ng-template>`, styles: ["/* src/app/pages/admin/fee-group/fee-group.component.scss */\n:host {\n  display: block;\n}\n.fee-group-form {\n  display: grid;\n  gap: 12px;\n}\n.fee-group-form__grid {\n  display: grid;\n  gap: 12px;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  align-items: center;\n}\n.fee-group-form__actions {\n  margin-top: 8px;\n}\n.w-100 {\n  width: 100%;\n}\n.fee-group-table {\n  width: 100%;\n}\n.fee-group-table__wrap {\n  width: 100%;\n  overflow-x: auto;\n}\n@media (max-width: 600px) {\n  .fee-group-form__grid {\n    grid-template-columns: 1fr;\n    align-items: start;\n  }\n}\n/*# sourceMappingURL=fee-group.component.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: MatDialog }], { paginator: [{
    type: ViewChild,
    args: [MatPaginator]
  }], sort: [{
    type: ViewChild,
    args: [MatSort]
  }], editDialog: [{
    type: ViewChild,
    args: ["editDialog"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FeeGroupComponent, { className: "FeeGroupComponent", filePath: "src/app/pages/admin/fee-group/fee-group.component.ts", lineNumber: 38 });
})();

// src/app/pages/admin/fee-head/fee-head.component.ts
var _c02 = ["editDialog"];
var _c12 = () => [5, 10, 25];
var _forTrack0 = ($index, $item) => $item.streamId;
function FeeHeadComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Fee head name is required");
    \u0275\u0275elementEnd();
  }
}
function FeeHeadComponent_For_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const feeGrp_r2 = ctx.$implicit;
    \u0275\u0275property("value", feeGrp_r2.streamId);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", feeGrp_r2.streamName, " ");
  }
}
function FeeHeadComponent_th_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 26);
    \u0275\u0275text(1, "Fee Head");
    \u0275\u0275elementEnd();
  }
}
function FeeHeadComponent_td_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r3.feeHeadName);
  }
}
function FeeHeadComponent_th_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 26);
    \u0275\u0275text(1, "Fee For");
    \u0275\u0275elementEnd();
  }
}
function FeeHeadComponent_td_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r4.streamName);
  }
}
function FeeHeadComponent_th_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 28);
    \u0275\u0275text(1, "Actions");
    \u0275\u0275elementEnd();
  }
}
function FeeHeadComponent_td_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 27)(1, "button", 29);
    \u0275\u0275listener("click", function FeeHeadComponent_td_40_Template_button_click_1_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.openEditDialog(row_r6));
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "drive_file_rename_outline");
    \u0275\u0275elementEnd()()();
  }
}
function FeeHeadComponent_tr_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 30);
  }
}
function FeeHeadComponent_tr_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 31);
  }
}
function FeeHeadComponent_ng_template_44_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const feeGrp_r10 = ctx.$implicit;
    \u0275\u0275property("value", feeGrp_r10.streamId);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", feeGrp_r10.streamName, " ");
  }
}
function FeeHeadComponent_ng_template_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "h2", 32);
    \u0275\u0275text(1, "Edit Expense");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "mat-dialog-content")(3, "form", 6, 1)(5, "mat-form-field", 33)(6, "mat-label");
    \u0275\u0275text(7, "Fee Head Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "input", 34);
    \u0275\u0275twoWayListener("ngModelChange", function FeeHeadComponent_ng_template_44_Template_input_ngModelChange_8_listener($event) {
      const data_r9 = \u0275\u0275restoreView(_r8).$implicit;
      \u0275\u0275twoWayBindingSet(data_r9.feeHeadName, $event) || (data_r9.feeHeadName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "mat-form-field", 8)(10, "mat-label");
    \u0275\u0275text(11, "Select Session");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-select", 35);
    \u0275\u0275twoWayListener("ngModelChange", function FeeHeadComponent_ng_template_44_Template_mat_select_ngModelChange_12_listener($event) {
      const data_r9 = \u0275\u0275restoreView(_r8).$implicit;
      \u0275\u0275twoWayBindingSet(data_r9.streamId, $event) || (data_r9.streamId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(13, FeeHeadComponent_ng_template_44_For_14_Template, 2, 2, "mat-option", 10, _forTrack0);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(15, "mat-dialog-actions", 36)(16, "button", 37);
    \u0275\u0275text(17, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 38);
    \u0275\u0275text(19, "Update");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const data_r9 = ctx.$implicit;
    const ctx_r6 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", data_r9.feeHeadName);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", data_r9.streamId);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r6.feeGroupList);
    \u0275\u0275advance(5);
    \u0275\u0275property("mat-dialog-close", data_r9);
  }
}
var _FeeHeadComponent = class _FeeHeadComponent {
  constructor(fb, dialog) {
    this.fb = fb;
    this.dialog = dialog;
    this.dataSource = new MatTableDataSource([]);
    this.displayedColumns = ["headName", "feeFor", "actions"];
    this._feeHeadService = inject(FeeMasterService);
    this.feeHeadList = [];
  }
  ngOnInit() {
    this.feeHeadForm = this.fb.group({
      feeHeadId: [0],
      feeHeadName: [null, [Validators.required, Validators.minLength(2)]],
      stream: [0]
    });
    this.GetFeeHeadList();
    this.getFeeGroupLlist();
  }
  getFeeGroupLlist() {
    this._feeHeadService.listFeeGroup().subscribe({
      next: (res) => {
        if (res.success) {
          this.feeGroupList = Array.isArray(res.data) ? res.data : [res.data];
        }
      }
    });
  }
  GetFeeHeadList() {
    this._feeHeadService.listFeeHead().subscribe({
      next: (res) => {
        if (res.success) {
          this.dataSource.data = Array.isArray(res.data) ? res.data : [res.data];
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
      },
      error: (err) => {
        console.log("error to fetch expense list", err);
      }
    });
  }
  addFeeHead() {
    debugger;
    if (this.feeHeadForm.valid) {
      const formValue = this.feeHeadForm.value;
      this._feeHeadService.addFeeHead(formValue).subscribe({
        next: (res) => {
          if (res.success) {
            alert(res.message);
            this.GetFeeHeadList();
          } else {
            alert(res.message);
          }
        },
        error: (err) => {
          console.log("add expense error", err);
          alert("Something went wrong.");
        }
      });
    }
  }
  // listing
  openEditDialog(feeHead) {
    const dialogRef = this.dialog.open(this.editDialog, {
      width: "400px",
      data: __spreadValues({}, feeHead)
    });
    debugger;
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        debugger;
        console.log("Dialog result:", result);
        const feeHeadNew = {
          feeHeadId: result.feeHeadId,
          feeHeadName: result.feeHeadName,
          stream: result.streamId
          // ensure property name matches your API
        };
        this._feeHeadService.updateFeeHead(feeHeadNew).subscribe({
          next: (res) => {
            if (res.success) {
              this.GetFeeHeadList();
              alert(res.message);
            }
          },
          error: (err) => {
            console.error("Error updating session:", err);
            alert("Failed to update session");
          }
        });
      }
    });
  }
  applyFilter(event) {
    const filterValue = event.target.value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  /** Checkbox Selection Logic */
  toggleSelection(row) {
    if (this.feeHeadList.includes(row)) {
      this.feeHeadList = this.feeHeadList.filter((r) => r !== row);
    } else {
      this.feeHeadList.push(row);
    }
  }
  isAllSelected() {
    return this.feeHeadList.length === this.dataSource.data.length;
  }
  isPartialSelected() {
    return this.feeHeadList.length > 0 && !this.isAllSelected();
  }
  masterToggle() {
    if (this.isAllSelected()) {
      this.feeHeadList = [];
    } else {
      this.feeHeadList = [...this.dataSource.data];
    }
  }
};
_FeeHeadComponent.\u0275fac = function FeeHeadComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FeeHeadComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(MatDialog));
};
_FeeHeadComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FeeHeadComponent, selectors: [["app-fee-head"]], viewQuery: function FeeHeadComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(MatPaginator, 5);
    \u0275\u0275viewQuery(MatSort, 5);
    \u0275\u0275viewQuery(_c02, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.paginator = _t.first);
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.sort = _t.first);
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.editDialog = _t.first);
  }
}, decls: 46, vars: 8, consts: [["editDialog", ""], ["editClassForm", "ngForm"], [1, "col-sm-12"], [3, "ngSubmit", "formGroup"], [1, "fee-head-form"], [1, "fee-head-form__grid"], [1, "w-100"], ["matInput", "", "formControlName", "feeHeadName", "placeholder", "Please enter fee head name"], ["appearance", "fill", 1, "w-100"], ["formControlName", "stream"], [3, "value"], [1, "fee-head-form__actions"], ["mat-flat-button", "", "color", "primary", "type", "submit"], ["appearance", "outline"], ["matInput", "", "placeholder", "Filter fee head", 3, "keyup"], [1, "fee-head-table__wrap"], ["mat-table", "", "matSort", "", 1, "mat-elevation-z8", "fee-head-table", 3, "dataSource"], ["matColumnDef", "headName"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "feeFor"], ["matColumnDef", "actions"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSize", "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-cell", ""], ["mat-icon-button", "", "color", "primary", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], ["mat-dialog-title", ""], ["appearance", "fill", 2, "width", "100%"], ["matInput", "", "name", "feeHeadName", "required", "", "minlength", "1", 3, "ngModelChange", "ngModel"], ["name", "stream", "required", "", 3, "ngModelChange", "ngModel"], ["align", "end"], ["mat-button", "", "mat-dialog-close", ""], ["mat-raised-button", "", "color", "primary", 3, "mat-dialog-close"]], template: function FeeHeadComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "mat-card")(2, "mat-card-header")(3, "mat-card-title");
    \u0275\u0275text(4, "Add Fee Head");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "form", 3);
    \u0275\u0275listener("ngSubmit", function FeeHeadComponent_Template_form_ngSubmit_5_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.addFeeHead());
    });
    \u0275\u0275elementStart(6, "mat-card-content")(7, "div", 4)(8, "div", 5)(9, "mat-form-field", 6)(10, "mat-label");
    \u0275\u0275text(11, "Fee Head Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 7);
    \u0275\u0275conditionalCreate(13, FeeHeadComponent_Conditional_13_Template, 2, 0, "mat-error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "mat-form-field", 8)(15, "mat-label");
    \u0275\u0275text(16, "Fee Group / Fee For");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "mat-select", 9);
    \u0275\u0275repeaterCreate(18, FeeHeadComponent_For_19_Template, 2, 2, "mat-option", 10, _forTrack0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 11)(21, "button", 12);
    \u0275\u0275text(22, "Save");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(23, "div", 2)(24, "mat-card")(25, "mat-card-content")(26, "mat-form-field", 13)(27, "mat-label");
    \u0275\u0275text(28, "Search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "input", 14);
    \u0275\u0275listener("keyup", function FeeHeadComponent_Template_input_keyup_29_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.applyFilter($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 15)(31, "table", 16);
    \u0275\u0275elementContainerStart(32, 17);
    \u0275\u0275template(33, FeeHeadComponent_th_33_Template, 2, 0, "th", 18)(34, FeeHeadComponent_td_34_Template, 2, 1, "td", 19);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(35, 20);
    \u0275\u0275template(36, FeeHeadComponent_th_36_Template, 2, 0, "th", 18)(37, FeeHeadComponent_td_37_Template, 2, 1, "td", 19);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(38, 21);
    \u0275\u0275template(39, FeeHeadComponent_th_39_Template, 2, 0, "th", 22)(40, FeeHeadComponent_td_40_Template, 4, 0, "td", 19);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(41, FeeHeadComponent_tr_41_Template, 1, 0, "tr", 23)(42, FeeHeadComponent_tr_42_Template, 1, 0, "tr", 24);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(43, "mat-paginator", 25);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(44, FeeHeadComponent_ng_template_44_Template, 20, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    let tmp_2_0;
    \u0275\u0275advance(5);
    \u0275\u0275property("formGroup", ctx.feeHeadForm);
    \u0275\u0275advance(8);
    \u0275\u0275conditional(((tmp_2_0 = ctx.feeHeadForm.get("feeHeadName")) == null ? null : tmp_2_0.hasError("required")) && ((tmp_2_0 = ctx.feeHeadForm.get("feeHeadName")) == null ? null : tmp_2_0.touched) ? 13 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx.feeGroupList);
    \u0275\u0275advance(13);
    \u0275\u0275property("dataSource", ctx.dataSource);
    \u0275\u0275advance(10);
    \u0275\u0275property("matHeaderRowDef", ctx.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("pageSize", 5)("pageSizeOptions", \u0275\u0275pureFunction0(7, _c12));
  }
}, dependencies: [
  MatCard,
  MaterialModule,
  MatOption,
  MatButton,
  MatIconButton,
  MatCardContent,
  MatCardHeader,
  MatCardTitle,
  MatDialogClose,
  MatDialogTitle,
  MatDialogActions,
  MatDialogContent,
  MatFormField,
  MatLabel,
  MatError,
  MatIcon,
  MatInput,
  MatPaginator,
  MatSelect,
  MatSort,
  MatSortHeader,
  MatTable,
  MatHeaderCellDef,
  MatHeaderRowDef,
  MatColumnDef,
  MatCellDef,
  MatRowDef,
  MatHeaderCell,
  MatCell,
  MatHeaderRow,
  MatRow,
  FormsModule,
  \u0275NgNoValidate,
  DefaultValueAccessor,
  NgControlStatus,
  NgControlStatusGroup,
  RequiredValidator,
  MinLengthValidator,
  NgModel,
  NgForm,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatOptionModule,
  MatSelectModule,
  TranslateModule,
  ReactiveFormsModule,
  FormGroupDirective,
  FormControlName
], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.fee-head-form[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 12px;\n}\n.fee-head-form__grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 12px;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  align-items: start;\n}\n.fee-head-form__actions[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n.w-100[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.fee-head-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.fee-head-table__wrap[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow-x: auto;\n}\n@media (max-width: 600px) {\n  .fee-head-form__grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=fee-head.component.css.map */"] });
var FeeHeadComponent = _FeeHeadComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FeeHeadComponent, [{
    type: Component,
    args: [{ selector: "app-fee-head", imports: [
      MatCard,
      MaterialModule,
      FormsModule,
      MatButtonModule,
      MatCardModule,
      MatFormFieldModule,
      MatIconModule,
      MatInputModule,
      MatOptionModule,
      MatSelectModule,
      TranslateModule,
      ReactiveFormsModule
    ], template: `<div class="col-sm-12">\r
    <mat-card>\r
        <mat-card-header>\r
            <mat-card-title>Add Fee Head</mat-card-title>\r
        </mat-card-header>\r
        <form [formGroup]="feeHeadForm" (ngSubmit)="addFeeHead()">\r
            <mat-card-content>\r
                <div class="fee-head-form">\r
                    <div class="fee-head-form__grid">\r
                        <mat-form-field class="w-100">\r
                            <mat-label>Fee Head Name</mat-label>\r
                            <input\r
                                matInput\r
                                formControlName="feeHeadName"\r
                                placeholder="Please enter fee head name"\r
                            />\r
                            @if (feeHeadForm.get('feeHeadName')?.hasError('required') &&\r
                            feeHeadForm.get('feeHeadName')?.touched) {\r
                            <mat-error>Fee head name is required</mat-error>\r
                            }\r
                        </mat-form-field>\r
\r
                        <mat-form-field appearance="fill" class="w-100">\r
                            <mat-label>Fee Group / Fee For</mat-label>\r
                            <mat-select formControlName="stream">\r
                                @for (feeGrp of feeGroupList; track feeGrp.streamId) {\r
                                <mat-option [value]="feeGrp.streamId">\r
                                    {{ feeGrp.streamName }}\r
                                </mat-option>\r
                                }\r
                            </mat-select>\r
                        </mat-form-field>\r
                    </div>\r
\r
                    <div class="fee-head-form__actions">\r
                        <button mat-flat-button color="primary" type="submit">Save</button>\r
                    </div>\r
                </div>\r
            </mat-card-content>\r
        </form>\r
    </mat-card>\r
</div>\r
\r
<div class="col-sm-12">\r
    <mat-card>\r
        <mat-card-content>\r
            <mat-form-field appearance="outline">\r
                <mat-label>Search</mat-label>\r
                <input matInput (keyup)="applyFilter($event)" placeholder="Filter fee head">\r
            </mat-form-field>\r
            <div class="fee-head-table__wrap">\r
                <table mat-table [dataSource]="dataSource" matSort class="mat-elevation-z8 fee-head-table">\r
                    <ng-container matColumnDef="headName">\r
                        <th mat-header-cell *matHeaderCellDef mat-sort-header>Fee Head</th>\r
                        <td mat-cell *matCellDef="let element">{{ element.feeHeadName }}</td>\r
                    </ng-container>\r
\r
                    <ng-container matColumnDef="feeFor">\r
                        <th mat-header-cell *matHeaderCellDef mat-sort-header>Fee For</th>\r
                        <td mat-cell *matCellDef="let element">{{ element.streamName }}</td>\r
                    </ng-container>\r
\r
                    <ng-container matColumnDef="actions">\r
                        <th mat-header-cell *matHeaderCellDef>Actions</th>\r
                        <td mat-cell *matCellDef="let row">\r
                            <button mat-icon-button color="primary" (click)="openEditDialog(row)">\r
                                <mat-icon>drive_file_rename_outline</mat-icon>\r
                            </button>\r
                        </td>\r
                    </ng-container>\r
                    <!-- Header & Rows -->\r
                    <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>\r
                    <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>\r
                </table>\r
            </div>\r
            <!-- Paginator -->\r
            <mat-paginator [pageSize]="5" [pageSizeOptions]="[5, 10, 25]" showFirstLastButtons></mat-paginator>\r
\r
        </mat-card-content>\r
    </mat-card>\r
</div>\r
\r
\r
<!-- Edit Expense Popup Template -->\r
<!-- ============================= -->\r
<ng-template #editDialog let-data>\r
    <h2 mat-dialog-title>Edit Expense</h2>\r
    <mat-dialog-content>\r
        <form #editClassForm="ngForm" class="w-100">\r
            <mat-form-field appearance="fill" style="width:100%">\r
                <mat-label>Fee Head Name</mat-label>\r
                <input matInput [(ngModel)]="data.feeHeadName" name="feeHeadName" required minlength="1" />\r
            </mat-form-field>\r
            <mat-form-field appearance="fill" class="w-100">\r
                <mat-label>Select Session</mat-label>\r
                <mat-select [(ngModel)]="data.streamId" name="stream" required>\r
                    @for (feeGrp of feeGroupList; track feeGrp.streamId) {\r
                    <mat-option [value]="feeGrp.streamId">\r
                        {{ feeGrp.streamName }}\r
                    </mat-option>\r
                    }\r
                </mat-select>\r
            </mat-form-field>\r
        </form>\r
    </mat-dialog-content>\r
\r
    <mat-dialog-actions align="end">\r
        <button mat-button mat-dialog-close>Cancel</button>\r
        <button mat-raised-button color="primary" [mat-dialog-close]="data">Update</button>\r
    </mat-dialog-actions>\r
</ng-template>`, styles: ["/* src/app/pages/admin/fee-head/fee-head.component.scss */\n:host {\n  display: block;\n}\n.fee-head-form {\n  display: grid;\n  gap: 12px;\n}\n.fee-head-form__grid {\n  display: grid;\n  gap: 12px;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  align-items: start;\n}\n.fee-head-form__actions {\n  margin-top: 8px;\n}\n.w-100 {\n  width: 100%;\n}\n.fee-head-table {\n  width: 100%;\n}\n.fee-head-table__wrap {\n  width: 100%;\n  overflow-x: auto;\n}\n@media (max-width: 600px) {\n  .fee-head-form__grid {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=fee-head.component.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: MatDialog }], { paginator: [{
    type: ViewChild,
    args: [MatPaginator]
  }], sort: [{
    type: ViewChild,
    args: [MatSort]
  }], editDialog: [{
    type: ViewChild,
    args: ["editDialog"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FeeHeadComponent, { className: "FeeHeadComponent", filePath: "src/app/pages/admin/fee-head/fee-head.component.ts", lineNumber: 38 });
})();

// src/app/services/session.service.ts
var _SessionService = class _SessionService {
  constructor() {
    this.http = inject(HttpClient);
    this.endpoints = apiEndpoint;
  }
  //add session
  addSession(session) {
    return this.http.post(this.endpoints.session.add, session);
  }
  updateSession(session) {
    return this.http.post(this.endpoints.session.update, session);
  }
  deleteSession(id) {
    return this.http.delete(this.endpoints.session.delete + `?id=${id}`);
  }
  //get session list
  getSessionList() {
    return this.http.get(this.endpoints.session.list);
  }
};
_SessionService.\u0275fac = function SessionService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SessionService)();
};
_SessionService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SessionService, factory: _SessionService.\u0275fac, providedIn: "root" });
var SessionService = _SessionService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SessionService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/services/college.service.ts
var _CollegeService = class _CollegeService {
  constructor() {
    this.http = inject(HttpClient);
    this.endPoints = apiEndpoint;
  }
  getCollegeList() {
    return this.http.get(this.endPoints.college.list);
  }
  getClassListBySessionAndCollege(sessionId, collegeId) {
    return this.http.post(`${this.endPoints.college.ListBySessionAndCollege}?SessionId=${sessionId}&CollegeId=${collegeId}`, {});
  }
  addClass(college) {
    return this.http.post(this.endPoints.college.add, college);
  }
  updateClass(college) {
    return this.http.post(this.endPoints.college.update, college);
  }
  deleteClass(collegeId) {
    return this.http.delete(`${this.endPoints.college.delete}?collegeId=${collegeId}`);
  }
};
_CollegeService.\u0275fac = function CollegeService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CollegeService)();
};
_CollegeService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CollegeService, factory: _CollegeService.\u0275fac, providedIn: "root" });
var CollegeService = _CollegeService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CollegeService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/pages/admin/fee-installment/fee-installment.component.ts
var _c03 = ["editDialog"];
var _c13 = () => [5, 10, 25];
var _forTrack02 = ($index, $item) => $item.sessionId;
var _forTrack1 = ($index, $item) => $item.collegeId;
function FeeInstallmentComponent_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const session_r2 = ctx.$implicit;
    \u0275\u0275property("value", session_r2.sessionId);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", session_r2.sessionName, " ");
  }
}
function FeeInstallmentComponent_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const school_r3 = ctx.$implicit;
    \u0275\u0275property("value", school_r3.collegeId);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", school_r3.collegeAbreviation, " ");
  }
}
function FeeInstallmentComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Installment name is required");
    \u0275\u0275elementEnd();
  }
}
function FeeInstallmentComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Installment date is required");
    \u0275\u0275elementEnd();
  }
}
function FeeInstallmentComponent_th_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 32);
    \u0275\u0275text(1, "Session");
    \u0275\u0275elementEnd();
  }
}
function FeeInstallmentComponent_td_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r4.sessionId);
  }
}
function FeeInstallmentComponent_th_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 32);
    \u0275\u0275text(1, "School");
    \u0275\u0275elementEnd();
  }
}
function FeeInstallmentComponent_td_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r5.collegeId);
  }
}
function FeeInstallmentComponent_th_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 32);
    \u0275\u0275text(1, "Installment");
    \u0275\u0275elementEnd();
  }
}
function FeeInstallmentComponent_td_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r6.installmentName);
  }
}
function FeeInstallmentComponent_th_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 32);
    \u0275\u0275text(1, "Installment Date");
    \u0275\u0275elementEnd();
  }
}
function FeeInstallmentComponent_td_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r7.installMentDate);
  }
}
function FeeInstallmentComponent_th_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 34);
    \u0275\u0275text(1, "Actions");
    \u0275\u0275elementEnd();
  }
}
function FeeInstallmentComponent_td_60_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 33)(1, "button", 35);
    \u0275\u0275listener("click", function FeeInstallmentComponent_td_60_Template_button_click_1_listener() {
      const row_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r9 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r9.openEditDialog(row_r9));
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "drive_file_rename_outline");
    \u0275\u0275elementEnd()()();
  }
}
function FeeInstallmentComponent_tr_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 36);
  }
}
function FeeInstallmentComponent_tr_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 37);
  }
}
function FeeInstallmentComponent_ng_template_64_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const feeGrp_r13 = ctx.$implicit;
    \u0275\u0275property("value", feeGrp_r13.sessionId);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", feeGrp_r13.sessionName, " ");
  }
}
function FeeInstallmentComponent_ng_template_64_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const feeGrp_r14 = ctx.$implicit;
    \u0275\u0275property("value", feeGrp_r14.collegeId);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", feeGrp_r14.collegeAbreviation, " ");
  }
}
function FeeInstallmentComponent_ng_template_64_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "h2", 38);
    \u0275\u0275text(1, "Edit Fee Installment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "mat-dialog-content")(3, "form", 11, 2)(5, "mat-form-field", 7)(6, "mat-label");
    \u0275\u0275text(7, "Select Session");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "mat-select", 39);
    \u0275\u0275twoWayListener("ngModelChange", function FeeInstallmentComponent_ng_template_64_Template_mat_select_ngModelChange_8_listener($event) {
      const data_r12 = \u0275\u0275restoreView(_r11).$implicit;
      \u0275\u0275twoWayBindingSet(data_r12.sessionId, $event) || (data_r12.sessionId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(9, FeeInstallmentComponent_ng_template_64_For_10_Template, 2, 2, "mat-option", 9, _forTrack02);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "mat-form-field", 7)(12, "mat-label");
    \u0275\u0275text(13, "Select Session");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "mat-select", 40);
    \u0275\u0275twoWayListener("ngModelChange", function FeeInstallmentComponent_ng_template_64_Template_mat_select_ngModelChange_14_listener($event) {
      const data_r12 = \u0275\u0275restoreView(_r11).$implicit;
      \u0275\u0275twoWayBindingSet(data_r12.collegeId, $event) || (data_r12.collegeId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(15, FeeInstallmentComponent_ng_template_64_For_16_Template, 2, 2, "mat-option", 9, _forTrack1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "mat-form-field", 41)(18, "mat-label");
    \u0275\u0275text(19, "Fee installMent Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "input", 42);
    \u0275\u0275twoWayListener("ngModelChange", function FeeInstallmentComponent_ng_template_64_Template_input_ngModelChange_20_listener($event) {
      const data_r12 = \u0275\u0275restoreView(_r11).$implicit;
      \u0275\u0275twoWayBindingSet(data_r12.installmentName, $event) || (data_r12.installmentName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "mat-form-field", 41)(22, "mat-label");
    \u0275\u0275text(23, "Fee installMent Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "input", 43);
    \u0275\u0275twoWayListener("ngModelChange", function FeeInstallmentComponent_ng_template_64_Template_input_ngModelChange_24_listener($event) {
      const data_r12 = \u0275\u0275restoreView(_r11).$implicit;
      \u0275\u0275twoWayBindingSet(data_r12.installMentDate, $event) || (data_r12.installMentDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(25, "mat-dialog-actions", 44)(26, "button", 45);
    \u0275\u0275text(27, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "button", 46);
    \u0275\u0275text(29, "Update");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const data_r12 = ctx.$implicit;
    const ctx_r9 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", data_r12.sessionId);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r9.sessions);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", data_r12.collegeId);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r9.schools);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", data_r12.installmentName);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", data_r12.installMentDate);
    \u0275\u0275advance(4);
    \u0275\u0275property("mat-dialog-close", data_r12);
  }
}
var _FeeInstallmentComponent = class _FeeInstallmentComponent {
  constructor(fb, dialog) {
    this.fb = fb;
    this.dialog = dialog;
    this.dataSource = new MatTableDataSource([]);
    this.displayedColumns = ["session", "school", "installment", "installmentDate", "actions"];
    this._feeMstService = inject(FeeMasterService);
    this.sessionService = inject(SessionService);
    this.collegeService = inject(CollegeService);
    this.feeHeadList = [];
  }
  ngOnInit() {
    this.feeInstallmentForm = this.fb.group({
      installmentId: [0],
      sessionId: [0],
      collegeId: [0],
      installmentName: [null],
      installMentDate: [null]
    });
    this.loadSession();
    this.loadCollege();
  }
  loadSession() {
    this.sessionService.getSessionList().subscribe((res) => {
      this.sessions = Array.isArray(res.data) ? res.data : [res.data];
    });
  }
  loadCollege() {
    this.collegeService.getCollegeList().subscribe((res) => {
      this.schools = Array.isArray(res.data) ? res.data : [res.data];
    });
  }
  GetFeeInsallmentList() {
    debugger;
    const CollegeId = this.feeInstallmentForm.get("collegeId")?.value;
    const sessionId = this.feeInstallmentForm.get("sessionId")?.value;
    if (CollegeId > 0 && sessionId > 0) {
      this._feeMstService.listFeeInstallment(CollegeId, sessionId).subscribe({
        next: (res) => {
          if (res.success) {
            this.dataSource.data = Array.isArray(res.data) ? res.data : [res.data];
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
          }
        },
        error: (err) => {
          console.log("error to fetch expense list", err);
        }
      });
    }
  }
  addFeeInstallment() {
    debugger;
    if (this.feeInstallmentForm.valid) {
      const formValue = this.feeInstallmentForm.value;
      this._feeMstService.addFeeInstallment(formValue).subscribe({
        next: (res) => {
          if (res.success) {
            alert(res.message);
            this.GetFeeInsallmentList();
          } else {
            alert(res.message);
          }
        },
        error: (err) => {
          console.log("add expense error", err);
          alert("Something went wrong.");
        }
      });
    }
  }
  // listing
  openEditDialog(feeInstallment) {
    const dialogRef = this.dialog.open(this.editDialog, {
      width: "400px",
      data: __spreadValues({}, feeInstallment)
    });
    debugger;
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        debugger;
        console.log("Dialog result:", result);
        this._feeMstService.updateFeeInstallment(result).subscribe({
          next: (res) => {
            if (res.success) {
              this.GetFeeInsallmentList();
              alert(res.message);
            }
          },
          error: (err) => {
            console.error("Error updating session:", err);
            alert("Failed to update session");
          }
        });
      }
    });
  }
  applyFilter(event) {
    const filterValue = event.target.value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  /** Checkbox Selection Logic */
  toggleSelection(row) {
    if (this.feeHeadList.includes(row)) {
      this.feeHeadList = this.feeHeadList.filter((r) => r !== row);
    } else {
      this.feeHeadList.push(row);
    }
  }
  isAllSelected() {
    return this.feeHeadList.length === this.dataSource.data.length;
  }
  isPartialSelected() {
    return this.feeHeadList.length > 0 && !this.isAllSelected();
  }
  masterToggle() {
    if (this.isAllSelected()) {
      this.feeHeadList = [];
    } else {
      this.feeHeadList = [...this.dataSource.data];
    }
  }
};
_FeeInstallmentComponent.\u0275fac = function FeeInstallmentComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FeeInstallmentComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(MatDialog));
};
_FeeInstallmentComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FeeInstallmentComponent, selectors: [["app-fee-installment"]], viewQuery: function FeeInstallmentComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(MatPaginator, 5);
    \u0275\u0275viewQuery(MatSort, 5);
    \u0275\u0275viewQuery(_c03, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.paginator = _t.first);
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.sort = _t.first);
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.editDialog = _t.first);
  }
}, decls: 66, vars: 11, consts: [["picker2", ""], ["editDialog", ""], ["editClassForm", "ngForm"], [1, "col-sm-12"], [3, "ngSubmit", "formGroup"], [1, "fee-installment-form"], [1, "fee-installment-form__grid"], ["appearance", "fill", 1, "w-100"], ["formControlName", "sessionId", 3, "selectionChange"], [3, "value"], ["formControlName", "collegeId", 3, "selectionChange"], [1, "w-100"], ["matInput", "", "formControlName", "installmentName", "placeholder", "Please enter installment name"], ["matInput", "", "formControlName", "installMentDate", "placeholder", "Please enter installment date", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], [1, "fee-installment-form__actions"], ["mat-flat-button", "", "color", "primary", "type", "submit"], ["appearance", "outline"], ["matInput", "", "placeholder", "Filter fee head", 3, "keyup"], [1, "fee-installment-table__wrap"], ["mat-table", "", "matSort", "", 1, "mat-elevation-z8", "fee-installment-table", 3, "dataSource"], ["matColumnDef", "session"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "school"], ["matColumnDef", "installment"], ["matColumnDef", "installmentDate"], ["matColumnDef", "actions"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSize", "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-cell", ""], ["mat-icon-button", "", "color", "primary", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], ["mat-dialog-title", ""], ["name", "sessionId", "required", "", 3, "ngModelChange", "ngModel"], ["name", "collegeId", "required", "", 3, "ngModelChange", "ngModel"], ["appearance", "fill", 2, "width", "100%"], ["matInput", "", "name", "installmentName", "required", "", "minlength", "1", 3, "ngModelChange", "ngModel"], ["matInput", "", "name", "installMentDate", "required", "", "minlength", "1", 3, "ngModelChange", "ngModel"], ["align", "end"], ["mat-button", "", "mat-dialog-close", ""], ["mat-raised-button", "", "color", "primary", 3, "mat-dialog-close"]], template: function FeeInstallmentComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "mat-card")(2, "mat-card-header")(3, "mat-card-title");
    \u0275\u0275text(4, "Add Fee Installment");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "form", 4);
    \u0275\u0275listener("ngSubmit", function FeeInstallmentComponent_Template_form_ngSubmit_5_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.addFeeInstallment());
    });
    \u0275\u0275elementStart(6, "mat-card-content")(7, "div", 5)(8, "div", 6)(9, "mat-form-field", 7)(10, "mat-label");
    \u0275\u0275text(11, "Select Session");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-select", 8);
    \u0275\u0275listener("selectionChange", function FeeInstallmentComponent_Template_mat_select_selectionChange_12_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.GetFeeInsallmentList());
    });
    \u0275\u0275repeaterCreate(13, FeeInstallmentComponent_For_14_Template, 2, 2, "mat-option", 9, _forTrack02);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "mat-form-field", 7)(16, "mat-label");
    \u0275\u0275text(17, "Select School");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "mat-select", 10);
    \u0275\u0275listener("selectionChange", function FeeInstallmentComponent_Template_mat_select_selectionChange_18_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.GetFeeInsallmentList());
    });
    \u0275\u0275repeaterCreate(19, FeeInstallmentComponent_For_20_Template, 2, 2, "mat-option", 9, _forTrack1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "mat-form-field", 11)(22, "mat-label");
    \u0275\u0275text(23, "Installment");
    \u0275\u0275elementEnd();
    \u0275\u0275element(24, "input", 12);
    \u0275\u0275conditionalCreate(25, FeeInstallmentComponent_Conditional_25_Template, 2, 0, "mat-error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "mat-form-field", 11)(27, "mat-label");
    \u0275\u0275text(28, "Installment Date");
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "input", 13)(30, "mat-datepicker-toggle", 14)(31, "mat-datepicker", null, 0);
    \u0275\u0275conditionalCreate(33, FeeInstallmentComponent_Conditional_33_Template, 2, 0, "mat-error");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 15)(35, "button", 16);
    \u0275\u0275text(36, "Save");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(37, "div", 3)(38, "mat-card")(39, "mat-card-content")(40, "mat-form-field", 17)(41, "mat-label");
    \u0275\u0275text(42, "Search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "input", 18);
    \u0275\u0275listener("keyup", function FeeInstallmentComponent_Template_input_keyup_43_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.applyFilter($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div", 19)(45, "table", 20);
    \u0275\u0275elementContainerStart(46, 21);
    \u0275\u0275template(47, FeeInstallmentComponent_th_47_Template, 2, 0, "th", 22)(48, FeeInstallmentComponent_td_48_Template, 2, 1, "td", 23);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(49, 24);
    \u0275\u0275template(50, FeeInstallmentComponent_th_50_Template, 2, 0, "th", 22)(51, FeeInstallmentComponent_td_51_Template, 2, 1, "td", 23);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(52, 25);
    \u0275\u0275template(53, FeeInstallmentComponent_th_53_Template, 2, 0, "th", 22)(54, FeeInstallmentComponent_td_54_Template, 2, 1, "td", 23);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(55, 26);
    \u0275\u0275template(56, FeeInstallmentComponent_th_56_Template, 2, 0, "th", 22)(57, FeeInstallmentComponent_td_57_Template, 2, 1, "td", 23);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(58, 27);
    \u0275\u0275template(59, FeeInstallmentComponent_th_59_Template, 2, 0, "th", 28)(60, FeeInstallmentComponent_td_60_Template, 4, 0, "td", 23);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(61, FeeInstallmentComponent_tr_61_Template, 1, 0, "tr", 29)(62, FeeInstallmentComponent_tr_62_Template, 1, 0, "tr", 30);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(63, "mat-paginator", 31);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(64, FeeInstallmentComponent_ng_template_64_Template, 30, 5, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    let tmp_5_0;
    let tmp_8_0;
    const picker2_r15 = \u0275\u0275reference(32);
    \u0275\u0275advance(5);
    \u0275\u0275property("formGroup", ctx.feeInstallmentForm);
    \u0275\u0275advance(8);
    \u0275\u0275repeater(ctx.sessions);
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx.schools);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(((tmp_5_0 = ctx.feeInstallmentForm.get("installmentName")) == null ? null : tmp_5_0.hasError("required")) && ((tmp_5_0 = ctx.feeInstallmentForm.get("installmentName")) == null ? null : tmp_5_0.touched) ? 25 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("matDatepicker", picker2_r15);
    \u0275\u0275advance();
    \u0275\u0275property("for", picker2_r15);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(((tmp_8_0 = ctx.feeInstallmentForm.get("installMentDate")) == null ? null : tmp_8_0.hasError("required")) && ((tmp_8_0 = ctx.feeInstallmentForm.get("installMentDate")) == null ? null : tmp_8_0.touched) ? 33 : -1);
    \u0275\u0275advance(12);
    \u0275\u0275property("dataSource", ctx.dataSource);
    \u0275\u0275advance(16);
    \u0275\u0275property("matHeaderRowDef", ctx.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("pageSize", 5)("pageSizeOptions", \u0275\u0275pureFunction0(10, _c13));
  }
}, dependencies: [
  MatCard,
  MaterialModule,
  MatOption,
  MatButton,
  MatIconButton,
  MatCardContent,
  MatCardHeader,
  MatCardTitle,
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerToggle,
  MatDialogClose,
  MatDialogTitle,
  MatDialogActions,
  MatDialogContent,
  MatFormField,
  MatLabel,
  MatError,
  MatSuffix,
  MatIcon,
  MatInput,
  MatPaginator,
  MatSelect,
  MatSort,
  MatSortHeader,
  MatTable,
  MatHeaderCellDef,
  MatHeaderRowDef,
  MatColumnDef,
  MatCellDef,
  MatRowDef,
  MatHeaderCell,
  MatCell,
  MatHeaderRow,
  MatRow,
  FormsModule,
  \u0275NgNoValidate,
  DefaultValueAccessor,
  NgControlStatus,
  NgControlStatusGroup,
  RequiredValidator,
  MinLengthValidator,
  NgModel,
  NgForm,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatOptionModule,
  MatSelectModule,
  TranslateModule,
  ReactiveFormsModule,
  FormGroupDirective,
  FormControlName
], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.fee-installment-form[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 12px;\n}\n.fee-installment-form__grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 12px;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  align-items: start;\n}\n.fee-installment-form__actions[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.w-100[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.fee-installment-table__wrap[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow-x: auto;\n}\n.fee-installment-table[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 760px;\n}\n@media (max-width: 600px) {\n  .fee-installment-form__grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=fee-installment.component.css.map */"] });
var FeeInstallmentComponent = _FeeInstallmentComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FeeInstallmentComponent, [{
    type: Component,
    args: [{ selector: "app-fee-installment", imports: [
      MatCard,
      MaterialModule,
      FormsModule,
      MatButtonModule,
      MatCardModule,
      MatFormFieldModule,
      MatIconModule,
      MatInputModule,
      MatOptionModule,
      MatSelectModule,
      TranslateModule,
      ReactiveFormsModule
    ], template: `<div class="col-sm-12">\r
    <mat-card>\r
        <mat-card-header>\r
            <mat-card-title>Add Fee Installment</mat-card-title>\r
        </mat-card-header>\r
        <form [formGroup]="feeInstallmentForm" (ngSubmit)="addFeeInstallment()">\r
            <mat-card-content>\r
                <div class="fee-installment-form">\r
                    <div class="fee-installment-form__grid">\r
                        <mat-form-field appearance="fill" class="w-100">\r
                            <mat-label>Select Session</mat-label>\r
                            <mat-select formControlName="sessionId" (selectionChange)="GetFeeInsallmentList()">\r
                                @for (session of sessions; track session.sessionId) {\r
                                <mat-option [value]="session.sessionId">\r
                                    {{ session.sessionName }}\r
                                </mat-option>\r
                                }\r
                            </mat-select>\r
                        </mat-form-field>\r
\r
                        <mat-form-field appearance="fill" class="w-100">\r
                            <mat-label>Select School</mat-label>\r
                            <mat-select formControlName="collegeId" (selectionChange)="GetFeeInsallmentList()">\r
                                @for (school of schools; track school.collegeId) {\r
                                <mat-option [value]="school.collegeId">\r
                                    {{ school.collegeAbreviation }}\r
                                </mat-option>\r
                                }\r
                            </mat-select>\r
                        </mat-form-field>\r
\r
                        <mat-form-field class="w-100">\r
                            <mat-label>Installment</mat-label>\r
                            <input matInput formControlName="installmentName" placeholder="Please enter installment name" />\r
                            @if (feeInstallmentForm.get('installmentName')?.hasError('required') &&\r
                            feeInstallmentForm.get('installmentName')?.touched) {\r
                            <mat-error>Installment name is required</mat-error>\r
                            }\r
                        </mat-form-field>\r
\r
                        <mat-form-field class="w-100">\r
                            <mat-label>Installment Date</mat-label>\r
                            <input\r
                                matInput\r
                                formControlName="installMentDate"\r
                                placeholder="Please enter installment date"\r
                                [matDatepicker]="picker2"\r
                            />\r
                            <mat-datepicker-toggle matSuffix [for]="picker2" />\r
                            <mat-datepicker #picker2 />\r
                            @if (feeInstallmentForm.get('installMentDate')?.hasError('required') &&\r
                            feeInstallmentForm.get('installMentDate')?.touched) {\r
                            <mat-error>Installment date is required</mat-error>\r
                            }\r
                        </mat-form-field>\r
                    </div>\r
\r
                    <div class="fee-installment-form__actions">\r
                        <button mat-flat-button color="primary" type="submit">Save</button>\r
                    </div>\r
                </div>\r
            </mat-card-content>\r
        </form>\r
    </mat-card>\r
</div>\r
\r
<div class="col-sm-12">\r
    <mat-card>\r
        <mat-card-content>\r
            <mat-form-field appearance="outline">\r
                <mat-label>Search</mat-label>\r
                <input matInput (keyup)="applyFilter($event)" placeholder="Filter fee head">\r
            </mat-form-field>\r
            <div class="fee-installment-table__wrap">\r
                <table mat-table [dataSource]="dataSource" matSort class="mat-elevation-z8 fee-installment-table">\r
                    <ng-container matColumnDef="session">\r
                        <th mat-header-cell *matHeaderCellDef mat-sort-header>Session</th>\r
                        <td mat-cell *matCellDef="let element">{{ element.sessionId }}</td>\r
                    </ng-container>\r
\r
                    <ng-container matColumnDef="school">\r
                        <th mat-header-cell *matHeaderCellDef mat-sort-header>School</th>\r
                        <td mat-cell *matCellDef="let element">{{ element.collegeId }}</td>\r
                    </ng-container>\r
\r
                    <ng-container matColumnDef="installment">\r
                        <th mat-header-cell *matHeaderCellDef mat-sort-header>Installment</th>\r
                        <td mat-cell *matCellDef="let element">{{ element.installmentName }}</td>\r
                    </ng-container>\r
                    <ng-container matColumnDef="installmentDate">\r
                        <th mat-header-cell *matHeaderCellDef mat-sort-header>Installment Date</th>\r
                        <td mat-cell *matCellDef="let element">{{ element.installMentDate }}</td>\r
                    </ng-container>\r
\r
                    <ng-container matColumnDef="actions">\r
                        <th mat-header-cell *matHeaderCellDef>Actions</th>\r
                        <td mat-cell *matCellDef="let row">\r
                            <button mat-icon-button color="primary" (click)="openEditDialog(row)">\r
                                <mat-icon>drive_file_rename_outline</mat-icon>\r
                            </button>\r
                        </td>\r
                    </ng-container>\r
                    <!-- Header & Rows -->\r
                    <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>\r
                    <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>\r
                </table>\r
            </div>\r
            <!-- Paginator -->\r
            <mat-paginator [pageSize]="5" [pageSizeOptions]="[5, 10, 25]" showFirstLastButtons></mat-paginator>\r
\r
        </mat-card-content>\r
    </mat-card>\r
</div>\r
\r
\r
<!-- Edit Expense Popup Template -->\r
<!-- ============================= -->\r
<ng-template #editDialog let-data>\r
    <h2 mat-dialog-title>Edit Fee Installment</h2>\r
    <mat-dialog-content>\r
        <form #editClassForm="ngForm" class="w-100">\r
           \r
            <mat-form-field appearance="fill" class="w-100">\r
                <mat-label>Select Session</mat-label>\r
                <mat-select [(ngModel)]="data.sessionId" name="sessionId" required>\r
                    @for (feeGrp of sessions; track feeGrp.sessionId) {\r
                    <mat-option [value]="feeGrp.sessionId">\r
                        {{ feeGrp.sessionName }}\r
                    </mat-option>\r
                    }\r
                </mat-select>\r
            </mat-form-field>\r
             <mat-form-field appearance="fill" class="w-100">\r
                <mat-label>Select Session</mat-label>\r
                <mat-select [(ngModel)]="data.collegeId" name="collegeId" required>\r
                    @for (feeGrp of schools; track feeGrp.collegeId) {\r
                    <mat-option [value]="feeGrp.collegeId">\r
                        {{ feeGrp.collegeAbreviation }}\r
                    </mat-option>\r
                    }\r
                </mat-select>\r
            </mat-form-field>\r
\r
             <mat-form-field appearance="fill" style="width:100%">\r
                <mat-label>Fee installMent Name</mat-label>\r
                <input matInput [(ngModel)]="data.installmentName" name="installmentName" required minlength="1" />\r
            </mat-form-field>\r
 <mat-form-field appearance="fill" style="width:100%">\r
                <mat-label>Fee installMent Date</mat-label>\r
                <input matInput [(ngModel)]="data.installMentDate" name="installMentDate" required minlength="1" />\r
            </mat-form-field>\r
\r
        </form>\r
    </mat-dialog-content>\r
\r
    <mat-dialog-actions align="end">\r
        <button mat-button mat-dialog-close>Cancel</button>\r
        <button mat-raised-button color="primary" [mat-dialog-close]="data">Update</button>\r
    </mat-dialog-actions>\r
</ng-template>`, styles: ["/* src/app/pages/admin/fee-installment/fee-installment.component.scss */\n:host {\n  display: block;\n}\n.fee-installment-form {\n  display: grid;\n  gap: 12px;\n}\n.fee-installment-form__grid {\n  display: grid;\n  gap: 12px;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  align-items: start;\n}\n.fee-installment-form__actions {\n  margin-top: 8px;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.w-100 {\n  width: 100%;\n}\n.fee-installment-table__wrap {\n  width: 100%;\n  overflow-x: auto;\n}\n.fee-installment-table {\n  width: 100%;\n  min-width: 760px;\n}\n@media (max-width: 600px) {\n  .fee-installment-form__grid {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=fee-installment.component.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: MatDialog }], { paginator: [{
    type: ViewChild,
    args: [MatPaginator]
  }], sort: [{
    type: ViewChild,
    args: [MatSort]
  }], editDialog: [{
    type: ViewChild,
    args: ["editDialog"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FeeInstallmentComponent, { className: "FeeInstallmentComponent", filePath: "src/app/pages/admin/fee-installment/fee-installment.component.ts", lineNumber: 42 });
})();

// src/app/pages/admin/allocate-fee/allocate-fee.component.ts
var _AllocateFeeComponent = class _AllocateFeeComponent {
};
_AllocateFeeComponent.\u0275fac = function AllocateFeeComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AllocateFeeComponent)();
};
_AllocateFeeComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AllocateFeeComponent, selectors: [["app-allocate-fee"]], decls: 2, vars: 0, template: function AllocateFeeComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "p");
    \u0275\u0275text(1, "allocate-fee works!");
    \u0275\u0275domElementEnd();
  }
}, encapsulation: 2 });
var AllocateFeeComponent = _AllocateFeeComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AllocateFeeComponent, [{
    type: Component,
    args: [{ selector: "app-allocate-fee", imports: [], template: "<p>allocate-fee works!</p>\r\n" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AllocateFeeComponent, { className: "AllocateFeeComponent", filePath: "src/app/pages/admin/allocate-fee/allocate-fee.component.ts", lineNumber: 9 });
})();

export {
  MaterialModule,
  apiEndpoint,
  CollegeService,
  SessionService,
  FeeGroupComponent,
  FeeHeadComponent,
  FeeInstallmentComponent,
  AllocateFeeComponent
};
//# sourceMappingURL=chunk-5CMCR7FN.js.map
