import {
  AllocateFeeComponent,
  CollegeService,
  FeeGroupComponent,
  FeeHeadComponent,
  FeeInstallmentComponent,
  MaterialModule,
  SessionService,
  apiEndpoint
} from "./chunk-5CMCR7FN.js";
import "./chunk-DL7BPOVA.js";
import "./chunk-WMVVWLC2.js";
import "./chunk-YS74DO2Z.js";
import {
  MatProgressSpinner,
  MatSlideToggle
} from "./chunk-7QHBP55O.js";
import "./chunk-2RI7FG4F.js";
import "./chunk-YI5VGUAX.js";
import {
  MatColumnResizeCommonModule
} from "./chunk-MJPWWFO7.js";
import "./chunk-X7DLGQL6.js";
import {
  MatSort,
  MatSortHeader,
  MatSortModule
} from "./chunk-UYJNLNSV.js";
import {
  MatCell,
  MatCellDef,
  MatCheckbox,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatNoDataRow,
  MatRow,
  MatRowDef,
  MatTable,
  MatTableDataSource,
  MatTableModule
} from "./chunk-SWW7YBYM.js";
import "./chunk-RTBK2CJR.js";
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogModule,
  MatDialogTitle
} from "./chunk-KXOHAYUN.js";
import "./chunk-DLD7NDZL.js";
import {
  MatTab,
  MatTabGroup,
  MatTabsModule
} from "./chunk-SYOIFQFY.js";
import {
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerModule,
  MatDatepickerToggle
} from "./chunk-7USXQSSE.js";
import "./chunk-PLIWSWLX.js";
import {
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardModule,
  MatCardSubtitle,
  MatCardTitle
} from "./chunk-VYFYOWDW.js";
import "./chunk-6GHIWQHO.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-A73OTLOU.js";
import "./chunk-V5CFSWHT.js";
import {
  PageHeaderComponent
} from "./chunk-NJPKBYXE.js";
import {
  DatePipe,
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
  MatHint,
  MatIcon,
  MatIconButton,
  MatIconModule,
  MatLabel,
  MatOption,
  MatOptionModule,
  MatPaginator,
  MatPaginatorModule,
  MatPrefix,
  MatSelect,
  MatSelectModule,
  MatSuffix,
  MatTooltip,
  MaxLengthValidator,
  MinLengthValidator,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NumberValueAccessor,
  ReactiveFormsModule,
  RequiredValidator,
  TranslateModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-VC5UOWO3.js";
import "./chunk-R3YVZPGI.js";
import {
  Component,
  Injectable,
  ViewChild,
  __spreadValues,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
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

// src/app/pages/admin/classmaster/classmaster.component.ts
var _c0 = ["editDialog"];
var _c1 = () => [5, 10, 25];
var _forTrack0 = ($index, $item) => $item.sessionId;
var _forTrack1 = ($index, $item) => $item.collegeId;
function ClassmasterComponent_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 8);
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
function ClassmasterComponent_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const college_r3 = ctx.$implicit;
    \u0275\u0275property("value", college_r3.collegeId);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", college_r3.collegeAbreviation, " ");
  }
}
function ClassmasterComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Class Name is required");
    \u0275\u0275elementEnd();
  }
}
function ClassmasterComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Class Name must be at least 3 characters long");
    \u0275\u0275elementEnd();
  }
}
function ClassmasterComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Class Name cannot exceed 50 characters");
    \u0275\u0275elementEnd();
  }
}
function ClassmasterComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Sequence Number is required");
    \u0275\u0275elementEnd();
  }
}
function ClassmasterComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Sequence value should be greater than 0");
    \u0275\u0275elementEnd();
  }
}
function ClassmasterComponent_th_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 29);
    \u0275\u0275text(1, "Class Name");
    \u0275\u0275elementEnd();
  }
}
function ClassmasterComponent_td_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r4.courseName);
  }
}
function ClassmasterComponent_th_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 29);
    \u0275\u0275text(1, "Sequence Number");
    \u0275\u0275elementEnd();
  }
}
function ClassmasterComponent_td_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r5.seqNumber);
  }
}
function ClassmasterComponent_th_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 31);
    \u0275\u0275text(1, "Actions");
    \u0275\u0275elementEnd();
  }
}
function ClassmasterComponent_td_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 30)(1, "button", 32);
    \u0275\u0275listener("click", function ClassmasterComponent_td_56_Template_button_click_1_listener() {
      const row_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.openEditDialog(row_r7));
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "drive_file_rename_outline");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 32);
    \u0275\u0275listener("click", function ClassmasterComponent_td_56_Template_button_click_4_listener() {
      const row_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.classDelete(row_r7));
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "delete");
    \u0275\u0275elementEnd()()();
  }
}
function ClassmasterComponent_tr_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 33);
  }
}
function ClassmasterComponent_tr_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 34);
  }
}
function ClassmasterComponent_ng_template_60_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const session_r11 = ctx.$implicit;
    \u0275\u0275property("value", session_r11.sessionId);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", session_r11.sessionName, " ");
  }
}
function ClassmasterComponent_ng_template_60_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const college_r12 = ctx.$implicit;
    \u0275\u0275property("value", college_r12.collegeId);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", college_r12.collegeAbreviation, " ");
  }
}
function ClassmasterComponent_ng_template_60_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "h2", 35);
    \u0275\u0275text(1, "Edit Class");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "mat-dialog-content")(3, "form", 10, 1)(5, "mat-form-field", 36)(6, "mat-label");
    \u0275\u0275text(7, "Select Session");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "mat-select", 37);
    \u0275\u0275twoWayListener("ngModelChange", function ClassmasterComponent_ng_template_60_Template_mat_select_ngModelChange_8_listener($event) {
      const data_r10 = \u0275\u0275restoreView(_r9).$implicit;
      \u0275\u0275twoWayBindingSet(data_r10.sessionId, $event) || (data_r10.sessionId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(9, ClassmasterComponent_ng_template_60_For_10_Template, 2, 2, "mat-option", 8, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "mat-form-field", 36)(12, "mat-label");
    \u0275\u0275text(13, "Select School");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "mat-select", 38);
    \u0275\u0275twoWayListener("ngModelChange", function ClassmasterComponent_ng_template_60_Template_mat_select_ngModelChange_14_listener($event) {
      const data_r10 = \u0275\u0275restoreView(_r9).$implicit;
      \u0275\u0275twoWayBindingSet(data_r10.collegeId, $event) || (data_r10.collegeId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(15, ClassmasterComponent_ng_template_60_For_16_Template, 2, 2, "mat-option", 8, _forTrack1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "mat-form-field", 36)(18, "mat-label");
    \u0275\u0275text(19, "Class Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "input", 39);
    \u0275\u0275twoWayListener("ngModelChange", function ClassmasterComponent_ng_template_60_Template_input_ngModelChange_20_listener($event) {
      const data_r10 = \u0275\u0275restoreView(_r9).$implicit;
      \u0275\u0275twoWayBindingSet(data_r10.courseName, $event) || (data_r10.courseName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "mat-form-field", 36)(22, "mat-label");
    \u0275\u0275text(23, "Sequence Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "input", 40);
    \u0275\u0275twoWayListener("ngModelChange", function ClassmasterComponent_ng_template_60_Template_input_ngModelChange_24_listener($event) {
      const data_r10 = \u0275\u0275restoreView(_r9).$implicit;
      \u0275\u0275twoWayBindingSet(data_r10.seqNumber, $event) || (data_r10.seqNumber = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(25, "mat-dialog-actions", 41)(26, "button", 42);
    \u0275\u0275text(27, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "button", 43);
    \u0275\u0275text(29, "Update");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const data_r10 = ctx.$implicit;
    const ctx_r7 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", data_r10.sessionId);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r7.sessions);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", data_r10.collegeId);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r7.colleges);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", data_r10.courseName);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", data_r10.seqNumber);
    \u0275\u0275advance(4);
    \u0275\u0275property("mat-dialog-close", data_r10);
  }
}
var _ClassmasterComponent = class _ClassmasterComponent {
  constructor(fb, dialog) {
    this.fb = fb;
    this.dialog = dialog;
    this.sessionService = inject(SessionService);
    this.collegeService = inject(CollegeService);
    this.dataSource = new MatTableDataSource([]);
    this.displayedColumns = ["className", "seqNumber", "actions"];
  }
  ngOnInit() {
    debugger;
    this.classForm = this.fb.group({
      courseId: [0],
      courseName: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      sessionId: [null, Validators.required],
      seqNumber: [0, [Validators.required, Validators.min(1)]],
      collegeId: [null, Validators.required]
    });
    debugger;
    this.loadSessions();
    this.loadSchool();
  }
  loadSessions() {
    this.sessionService.getSessionList().subscribe({
      next: (res) => {
        if (res.success) {
          this.sessions = Array.isArray(res.data) ? res.data : [res.data];
        }
      },
      error: (err) => {
        console.log("Error fetching sections:", err);
      }
    });
  }
  loadSchool() {
    this.collegeService.getCollegeList().subscribe({
      next: (res) => {
        if (res.success) {
          this.colleges = Array.isArray(res.data) ? res.data : [res.data];
        }
      },
      error: (err) => {
        console.log("Error fetching sections:", err);
      }
    });
  }
  addClass() {
    if (this.classForm.valid) {
      this.collegeService.addClass(this.classForm.value).subscribe({
        next: (res) => {
          if (res.success) {
            alert(res.message);
            this.classForm.reset();
          } else {
            alert("Failed to add class");
          }
        },
        error: (err) => {
          console.log("Error adding class:", err);
          alert("An error occurred while adding the class");
        }
      });
    } else {
      this.classForm.markAllAsTouched();
    }
  }
  onCancel() {
    this.classForm.reset();
  }
  getSchoolListById() {
    debugger;
    const sessionId = this.classForm.get("sessionId")?.value;
    const colleidId = this.classForm.get("collegeId")?.value;
    if (!sessionId || !colleidId) {
      return;
    }
    this.collegeService.getClassListBySessionAndCollege(sessionId, colleidId).subscribe({
      next: (res) => {
        debugger;
        if (res.success && res.data) {
          this.dataSource.data = Array.isArray(res.data) ? res.data : [res.data];
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        } else {
          debugger;
          alert(res.message);
        }
      },
      error: (err) => {
        debugger;
        console.log("error");
      }
    });
  }
  openEditDialog(classmaster) {
    const dialogRef = this.dialog.open(this.editDialog, {
      width: "400px",
      data: __spreadValues({}, classmaster)
    });
    debugger;
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        debugger;
        console.log("Dialog result:", result);
        this.collegeService.updateClass(result).subscribe({
          next: (res) => {
            if (res.success) {
              alert(res.message);
              this.getSchoolListById();
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
  classDelete(session) {
    debugger;
    alert("Delete session:");
  }
};
_ClassmasterComponent.\u0275fac = function ClassmasterComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ClassmasterComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(MatDialog));
};
_ClassmasterComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClassmasterComponent, selectors: [["app-classmaster"]], viewQuery: function ClassmasterComponent_Query(rf, ctx) {
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
}, decls: 62, vars: 12, consts: [["editDialog", ""], ["editClassForm", "ngForm"], [1, "col-sm-12"], [3, "ngSubmit", "formGroup"], [1, "classmaster-form"], [1, "classmaster-form__grid"], ["appearance", "outline", 1, "w-100"], ["formControlName", "sessionId", 3, "selectionChange"], [3, "value"], ["formControlName", "collegeId", 3, "selectionChange"], [1, "w-100"], ["matInput", "", "formControlName", "courseName", "placeholder", "Enter class name"], ["matInput", "", "type", "number", "formControlName", "seqNumber", "placeholder", "Enter sequence no."], [1, "classmaster-form__actions"], ["mat-flat-button", "", "color", "primary", "type", "submit"], ["mat-button", "", "type", "button", 3, "click"], ["appearance", "outline"], ["matInput", "", "placeholder", "Filter class", 3, "keyup"], [1, "classmaster-table__wrap"], ["mat-table", "", "matSort", "", 1, "mat-elevation-z8", "classmaster-table", 3, "dataSource"], ["matColumnDef", "className"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "seqNumber"], ["matColumnDef", "actions"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSize", "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-cell", ""], ["mat-icon-button", "", "color", "primary", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], ["mat-dialog-title", ""], ["appearance", "fill", 2, "width", "100%"], ["name", "sessionId", "required", "", 3, "ngModelChange", "ngModel"], ["name", "collegeId", "required", "", 3, "ngModelChange", "ngModel"], ["matInput", "", "name", "courseName", "required", "", "minlength", "3", "maxlength", "50", 3, "ngModelChange", "ngModel"], ["matInput", "", "type", "number", "name", "seqNumber", "required", "", "min", "1", 3, "ngModelChange", "ngModel"], ["align", "end"], ["mat-button", "", "mat-dialog-close", ""], ["mat-raised-button", "", "color", "primary", 3, "mat-dialog-close"]], template: function ClassmasterComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "mat-card")(2, "mat-card-header")(3, "mat-card-title");
    \u0275\u0275text(4, "Add Class");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "form", 3);
    \u0275\u0275listener("ngSubmit", function ClassmasterComponent_Template_form_ngSubmit_5_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.addClass());
    });
    \u0275\u0275elementStart(6, "mat-card-content")(7, "div", 4)(8, "div", 5)(9, "mat-form-field", 6)(10, "mat-label");
    \u0275\u0275text(11, "Select Session");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-select", 7);
    \u0275\u0275listener("selectionChange", function ClassmasterComponent_Template_mat_select_selectionChange_12_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.getSchoolListById());
    });
    \u0275\u0275repeaterCreate(13, ClassmasterComponent_For_14_Template, 2, 2, "mat-option", 8, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "mat-form-field", 6)(16, "mat-label");
    \u0275\u0275text(17, "Select School");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "mat-select", 9);
    \u0275\u0275listener("selectionChange", function ClassmasterComponent_Template_mat_select_selectionChange_18_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.getSchoolListById());
    });
    \u0275\u0275repeaterCreate(19, ClassmasterComponent_For_20_Template, 2, 2, "mat-option", 8, _forTrack1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "mat-form-field", 10)(22, "mat-label");
    \u0275\u0275text(23, "Class Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(24, "input", 11);
    \u0275\u0275conditionalCreate(25, ClassmasterComponent_Conditional_25_Template, 2, 0, "mat-error");
    \u0275\u0275conditionalCreate(26, ClassmasterComponent_Conditional_26_Template, 2, 0, "mat-error");
    \u0275\u0275conditionalCreate(27, ClassmasterComponent_Conditional_27_Template, 2, 0, "mat-error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "mat-form-field", 10)(29, "mat-label");
    \u0275\u0275text(30, "Sequence No.");
    \u0275\u0275elementEnd();
    \u0275\u0275element(31, "input", 12);
    \u0275\u0275conditionalCreate(32, ClassmasterComponent_Conditional_32_Template, 2, 0, "mat-error");
    \u0275\u0275conditionalCreate(33, ClassmasterComponent_Conditional_33_Template, 2, 0, "mat-error");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 13)(35, "button", 14);
    \u0275\u0275text(36, "Save");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "button", 15);
    \u0275\u0275listener("click", function ClassmasterComponent_Template_button_click_37_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onCancel());
    });
    \u0275\u0275text(38, "Cancel");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(39, "div", 2)(40, "mat-card")(41, "mat-card-content")(42, "mat-form-field", 16)(43, "mat-label");
    \u0275\u0275text(44, "Search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "input", 17);
    \u0275\u0275listener("keyup", function ClassmasterComponent_Template_input_keyup_45_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.applyFilter($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div", 18)(47, "table", 19);
    \u0275\u0275elementContainerStart(48, 20);
    \u0275\u0275template(49, ClassmasterComponent_th_49_Template, 2, 0, "th", 21)(50, ClassmasterComponent_td_50_Template, 2, 1, "td", 22);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(51, 23);
    \u0275\u0275template(52, ClassmasterComponent_th_52_Template, 2, 0, "th", 21)(53, ClassmasterComponent_td_53_Template, 2, 1, "td", 22);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(54, 24);
    \u0275\u0275template(55, ClassmasterComponent_th_55_Template, 2, 0, "th", 25)(56, ClassmasterComponent_td_56_Template, 7, 0, "td", 22);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(57, ClassmasterComponent_tr_57_Template, 1, 0, "tr", 26)(58, ClassmasterComponent_tr_58_Template, 1, 0, "tr", 27);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(59, "mat-paginator", 28);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(60, ClassmasterComponent_ng_template_60_Template, 30, 5, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    \u0275\u0275advance(5);
    \u0275\u0275property("formGroup", ctx.classForm);
    \u0275\u0275advance(8);
    \u0275\u0275repeater(ctx.sessions);
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx.colleges);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(((tmp_4_0 = ctx.classForm.get("courseName")) == null ? null : tmp_4_0.hasError("required")) && ((tmp_4_0 = ctx.classForm.get("courseName")) == null ? null : tmp_4_0.touched) ? 25 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_5_0 = ctx.classForm.get("courseName")) == null ? null : tmp_5_0.hasError("minlength")) && ((tmp_5_0 = ctx.classForm.get("courseName")) == null ? null : tmp_5_0.touched) ? 26 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_6_0 = ctx.classForm.get("courseName")) == null ? null : tmp_6_0.hasError("maxlength")) && ((tmp_6_0 = ctx.classForm.get("courseName")) == null ? null : tmp_6_0.touched) ? 27 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(((tmp_7_0 = ctx.classForm.get("seqNumber")) == null ? null : tmp_7_0.hasError("required")) && ((tmp_7_0 = ctx.classForm.get("seqNumber")) == null ? null : tmp_7_0.touched) ? 32 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_8_0 = ctx.classForm.get("seqNumber")) == null ? null : tmp_8_0.hasError("min")) && ((tmp_8_0 = ctx.classForm.get("seqNumber")) == null ? null : tmp_8_0.touched) ? 33 : -1);
    \u0275\u0275advance(14);
    \u0275\u0275property("dataSource", ctx.dataSource);
    \u0275\u0275advance(10);
    \u0275\u0275property("matHeaderRowDef", ctx.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("pageSize", 5)("pageSizeOptions", \u0275\u0275pureFunction0(11, _c1));
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
  NumberValueAccessor,
  NgControlStatus,
  NgControlStatusGroup,
  RequiredValidator,
  MinLengthValidator,
  MaxLengthValidator,
  MinValidator,
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
], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.classmaster-form[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 12px;\n}\n.classmaster-form__grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 12px;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  align-items: start;\n}\n.classmaster-form__actions[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.w-100[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.classmaster-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.classmaster-table__wrap[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow-x: auto;\n}\n/*# sourceMappingURL=classmaster.component.css.map */"] });
var ClassmasterComponent = _ClassmasterComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClassmasterComponent, [{
    type: Component,
    args: [{ selector: "app-classmaster", standalone: true, imports: [
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
            <mat-card-title>Add Class</mat-card-title>\r
        </mat-card-header>\r
\r
        <form [formGroup]="classForm" (ngSubmit)="addClass()">\r
            <mat-card-content>\r
                <div class="classmaster-form">\r
                    <div class="classmaster-form__grid">\r
                        <mat-form-field appearance="outline" class="w-100">\r
                            <mat-label>Select Session</mat-label>\r
                            <mat-select formControlName="sessionId" (selectionChange)="getSchoolListById()">\r
                                @for (session of sessions; track session.sessionId) {\r
                                <mat-option [value]="session.sessionId">\r
                                    {{ session.sessionName }}\r
                                </mat-option>\r
                                }\r
                            </mat-select>\r
                        </mat-form-field>\r
\r
                        <mat-form-field appearance="outline" class="w-100">\r
                            <mat-label>Select School</mat-label>\r
                            <mat-select formControlName="collegeId" (selectionChange)="getSchoolListById()">\r
                                @for (college of colleges; track college.collegeId) {\r
                                <mat-option [value]="college.collegeId">\r
                                    {{ college.collegeAbreviation}}\r
                                </mat-option>\r
                                }\r
                            </mat-select>\r
                        </mat-form-field>\r
\r
                        <mat-form-field class="w-100">\r
                            <mat-label>Class Name</mat-label>\r
                            <input matInput formControlName="courseName" placeholder="Enter class name" />\r
\r
                            @if (classForm.get('courseName')?.hasError('required') && classForm.get('courseName')?.touched) {\r
                            <mat-error>Class Name is required</mat-error>\r
                            }\r
                            @if (classForm.get('courseName')?.hasError('minlength') && classForm.get('courseName')?.touched) {\r
                            <mat-error>Class Name must be at least 3 characters long</mat-error>\r
                            }\r
                            @if (classForm.get('courseName')?.hasError('maxlength') && classForm.get('courseName')?.touched) {\r
                            <mat-error>Class Name cannot exceed 50 characters</mat-error>\r
                            }\r
                        </mat-form-field>\r
\r
                        <mat-form-field class="w-100">\r
                            <mat-label>Sequence No.</mat-label>\r
                            <input matInput type="number" formControlName="seqNumber" placeholder="Enter sequence no." />\r
                            @if(classForm.get('seqNumber')?.hasError('required') && classForm.get('seqNumber')?.touched){\r
                            <mat-error>Sequence Number is required</mat-error>\r
                            }\r
                            @if(classForm.get('seqNumber')?.hasError('min') && classForm.get('seqNumber')?.touched){\r
                            <mat-error>Sequence value should be greater than 0</mat-error>\r
                            }\r
                        </mat-form-field>\r
                    </div>\r
\r
                    <div class="classmaster-form__actions">\r
                        <button mat-flat-button color="primary" type="submit">Save</button>\r
                        <button mat-button type="button" (click)="onCancel()">Cancel</button>\r
                    </div>\r
                </div>\r
            </mat-card-content>\r
        </form>\r
    </mat-card>\r
</div>\r
\r
\r
\r
<div class="col-sm-12">\r
    <mat-card>\r
        <mat-card-content>\r
            <mat-form-field appearance="outline">\r
                <mat-label>Search</mat-label>\r
                <input matInput (keyup)="applyFilter($event)" placeholder="Filter class">\r
            </mat-form-field>\r
            <div class="classmaster-table__wrap">\r
                <table mat-table [dataSource]="dataSource" matSort class="mat-elevation-z8 classmaster-table">\r
                    <ng-container matColumnDef="className">\r
                        <th mat-header-cell *matHeaderCellDef mat-sort-header>Class Name</th>\r
                        <td mat-cell *matCellDef="let element">{{ element.courseName }}</td>\r
                    </ng-container>\r
                    <ng-container matColumnDef="seqNumber">\r
                        <th mat-header-cell *matHeaderCellDef mat-sort-header>Sequence Number</th>\r
                        <td mat-cell *matCellDef="let element">{{ element.seqNumber }}</td>\r
                    </ng-container>\r
                    <ng-container matColumnDef="actions">\r
                        <th mat-header-cell *matHeaderCellDef>Actions</th>\r
                        <td mat-cell *matCellDef="let row">\r
                            <button mat-icon-button color="primary" (click)="openEditDialog(row)">\r
                                <mat-icon>drive_file_rename_outline</mat-icon>\r
                            </button>\r
                            <button mat-icon-button color="primary" (click)="classDelete(row)">\r
                                <mat-icon>delete</mat-icon>\r
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
<!-- ============================= -->\r
<!-- Edit Class Popup Template -->\r
<!-- ============================= -->\r
<ng-template #editDialog let-data>\r
  <h2 mat-dialog-title>Edit Class</h2>\r
\r
  <mat-dialog-content>\r
    <form #editClassForm="ngForm" class="w-100">\r
    <mat-form-field appearance="fill" style="width:100%">\r
        <mat-label>Select Session</mat-label>\r
        <mat-select [(ngModel)]="data.sessionId" name="sessionId" required>\r
          @for (session of sessions; track session.sessionId) {\r
          <mat-option [value]="session.sessionId">\r
            {{ session.sessionName }}\r
          </mat-option>\r
          }\r
        </mat-select>\r
      </mat-form-field>\r
\r
   <mat-form-field appearance="fill" style="width:100%">\r
        <mat-label>Select School</mat-label>\r
        <mat-select [(ngModel)]="data.collegeId" name="collegeId" required>\r
          @for (college of colleges; track college.collegeId) {\r
          <mat-option [value]="college.collegeId">\r
            {{ college.collegeAbreviation }}\r
          </mat-option>\r
          }\r
        </mat-select>\r
      </mat-form-field>\r
\r
     <mat-form-field appearance="fill" style="width:100%">\r
        <mat-label>Class Name</mat-label>\r
        <input matInput [(ngModel)]="data.courseName" name="courseName" required minlength="3" maxlength="50" />\r
      </mat-form-field>\r
\r
  <mat-form-field appearance="fill" style="width:100%">\r
        <mat-label>Sequence Number</mat-label>\r
        <input matInput type="number" [(ngModel)]="data.seqNumber" name="seqNumber" required min="1" />\r
      </mat-form-field>\r
\r
    </form>\r
  </mat-dialog-content>\r
\r
  <mat-dialog-actions align="end">\r
    <button mat-button mat-dialog-close>Cancel</button>\r
    <button mat-raised-button color="primary" [mat-dialog-close]="data">Update</button>\r
  </mat-dialog-actions>\r
</ng-template>\r
`, styles: ["/* src/app/pages/admin/classmaster/classmaster.component.scss */\n:host {\n  display: block;\n}\n.classmaster-form {\n  display: grid;\n  gap: 12px;\n}\n.classmaster-form__grid {\n  display: grid;\n  gap: 12px;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  align-items: start;\n}\n.classmaster-form__actions {\n  margin-top: 8px;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.w-100 {\n  width: 100%;\n}\n.classmaster-table {\n  width: 100%;\n}\n.classmaster-table__wrap {\n  width: 100%;\n  overflow-x: auto;\n}\n/*# sourceMappingURL=classmaster.component.css.map */\n"] }]
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClassmasterComponent, { className: "ClassmasterComponent", filePath: "src/app/pages/admin/classmaster/classmaster.component.ts", lineNumber: 42 });
})();

// src/app/services/designation.service.ts
var _DesignationService = class _DesignationService {
  constructor() {
    this.http = inject(HttpClient);
    this.endPoints = apiEndpoint;
  }
  // 🔹 Add designation
  addDesignation(designation) {
    const body = { id: 0, designation };
    return this.http.post(this.endPoints.designation.add, body);
  }
  /*   addDesignation(designation: string) {
      return this.http.post(this.addDesignationUrl, { designation });
    } */
  getDesignationList() {
    return this.http.get(this.endPoints.designation.list);
  }
  updateDesignation(designation) {
    return this.http.post(this.endPoints.designation.update, designation);
  }
  deleteDesignation(id) {
    const url = `${this.endPoints.designation.delete}/${id}`;
    return this.http.delete(url);
  }
};
_DesignationService.\u0275fac = function DesignationService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DesignationService)();
};
_DesignationService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DesignationService, factory: _DesignationService.\u0275fac, providedIn: "root" });
var DesignationService = _DesignationService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DesignationService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/pages/admin/designationmaster/designationmaster.component.ts
var _c02 = ["editDialog"];
var _c12 = () => [5, 10, 25, 50];
function DesignationmasterComponent_th_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "th", 28)(1, "mat-checkbox", 29);
    \u0275\u0275listener("change", function DesignationmasterComponent_th_38_Template_mat_checkbox_change_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView($event ? ctx_r2.masterToggle() : null);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r2.isAllSelected())("indeterminate", ctx_r2.isPartialSelected());
  }
}
function DesignationmasterComponent_td_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 30)(1, "mat-checkbox", 31);
    \u0275\u0275listener("click", function DesignationmasterComponent_td_39_Template_mat_checkbox_click_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      return \u0275\u0275resetView($event.stopPropagation());
    })("change", function DesignationmasterComponent_td_39_Template_mat_checkbox_change_1_listener($event) {
      const row_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView($event ? ctx_r2.toggleSelection(row_r5) : null);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r2.selection.includes(row_r5));
  }
}
function DesignationmasterComponent_th_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 32);
    \u0275\u0275text(1, "Designation");
    \u0275\u0275elementEnd();
  }
}
function DesignationmasterComponent_td_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(d_r6.designation);
  }
}
function DesignationmasterComponent_th_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 33);
    \u0275\u0275text(1, "Actions");
    \u0275\u0275elementEnd();
  }
}
function DesignationmasterComponent_td_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 30)(1, "button", 34);
    \u0275\u0275listener("click", function DesignationmasterComponent_td_45_Template_button_click_1_listener() {
      const row_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openEditDialog(row_r8));
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "edit");
    \u0275\u0275elementEnd()()();
  }
}
function DesignationmasterComponent_tr_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 35);
  }
}
function DesignationmasterComponent_tr_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 36);
  }
}
function DesignationmasterComponent_ng_template_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 37)(1, "td", 38);
    \u0275\u0275text(2, " No designations found. Add one above or adjust your search. ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", ctx_r2.displayedColumns.length);
  }
}
function DesignationmasterComponent_ng_template_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "h2", 39);
    \u0275\u0275text(1, "Edit designation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "mat-dialog-content", 40)(3, "mat-form-field", 41)(4, "mat-label");
    \u0275\u0275text(5, "Designation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 42);
    \u0275\u0275twoWayListener("ngModelChange", function DesignationmasterComponent_ng_template_50_Template_input_ngModelChange_6_listener($event) {
      const data_r10 = \u0275\u0275restoreView(_r9).$implicit;
      \u0275\u0275twoWayBindingSet(data_r10.designation, $event) || (data_r10.designation = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "mat-dialog-actions", 6)(8, "button", 43);
    \u0275\u0275text(9, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 44);
    \u0275\u0275text(11, " Update ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const data_r10 = ctx.$implicit;
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", data_r10.designation);
    \u0275\u0275advance(4);
    \u0275\u0275property("mat-dialog-close", data_r10)("disabled", !(data_r10.designation == null ? null : data_r10.designation.trim()));
  }
}
var _DesignationmasterComponent = class _DesignationmasterComponent {
  constructor(dialog) {
    this.dialog = dialog;
    this.designationService = inject(DesignationService);
    this.dataSource = new MatTableDataSource([]);
    this.displayedColumns = ["select", "designation", "actions"];
    this.selection = [];
    this.designationName = "";
  }
  ngOnInit() {
    this.getDesignationList();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  clearForm() {
    this.designationName = "";
  }
  addDesignation() {
    const name = this.designationName.trim();
    if (!name) {
      alert("Please enter a designation name.");
      return;
    }
    this.designationService.addDesignation(name).subscribe({
      next: (res) => {
        if (res.success) {
          alert(res.message);
          this.getDesignationList();
          this.designationName = "";
        }
      },
      error: (err) => {
        alert(err?.message ?? "Something went wrong.");
        console.error("Error adding designation", err);
      }
    });
  }
  getDesignationList() {
    this.designationService.getDesignationList().subscribe({
      next: (res) => {
        if (res.success && res.data != null) {
          const rows = Array.isArray(res.data) ? res.data : [res.data];
          this.dataSource.data = rows;
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
      },
      error: (err) => {
        console.error("Error fetching designations:", err);
      }
    });
  }
  applyFilter(event) {
    const filterValue = event.target.value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  toggleSelection(row) {
    if (this.selection.includes(row)) {
      this.selection = this.selection.filter((r) => r !== row);
    } else {
      this.selection.push(row);
    }
  }
  isAllSelected() {
    return this.selection.length > 0 && this.selection.length === this.dataSource.data.length;
  }
  isPartialSelected() {
    return this.selection.length > 0 && !this.isAllSelected();
  }
  masterToggle() {
    if (this.isAllSelected()) {
      this.selection = [];
    } else {
      this.selection = [...this.dataSource.data];
    }
  }
  openEditDialog(row) {
    const dialogRef = this.dialog.open(this.editDialog, {
      width: "min(480px, 92vw)",
      maxWidth: "95vw",
      data: __spreadValues({}, row)
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result?.designation?.trim()) {
        this.designationService.updateDesignation(result).subscribe({
          next: (res) => {
            if (res.success) {
              alert(res.message ?? "Designation updated successfully");
              this.getDesignationList();
            }
          },
          error: (err) => {
            console.error("Error updating designation:", err);
            alert("Failed to update designation");
          }
        });
      }
    });
  }
};
_DesignationmasterComponent.\u0275fac = function DesignationmasterComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DesignationmasterComponent)(\u0275\u0275directiveInject(MatDialog));
};
_DesignationmasterComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DesignationmasterComponent, selectors: [["app-designationmaster"]], viewQuery: function DesignationmasterComponent_Query(rf, ctx) {
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
}, decls: 52, vars: 8, consts: [["editDialog", ""], [1, "designation-page"], ["aria-label", "Add designation", 1, "designation-page__card", "designation-page__card--form"], [1, "designation-form"], ["appearance", "outline", 1, "designation-form__field"], ["matInput", "", "name", "designationName", "placeholder", "e.g. Principal, Teacher, Clerk", "maxlength", "100", 3, "ngModelChange", "ngModel"], ["align", "end"], [1, "designation-form__actions"], ["mat-flat-button", "", "color", "primary", "type", "button", 3, "click"], ["mat-stroked-button", "", "type", "button", 3, "click"], ["aria-label", "Designation list", 1, "designation-page__card", "designation-page__card--list"], [1, "designation-toolbar"], ["appearance", "outline", 1, "designation-toolbar__search"], ["matPrefix", ""], ["matInput", "", "placeholder", "Filter by name", 3, "keyup"], [1, "designation-table__wrap"], ["mat-table", "", "matSort", "", 1, "designation-table", "mat-elevation-z0", 3, "dataSource"], ["matColumnDef", "select"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "designation"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["matColumnDef", "actions"], ["mat-header-cell", "", "class", "designation-table__actions-col", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["matNoDataRow", ""], ["showFirstLastButtons", "", 3, "pageSize", "pageSizeOptions"], ["mat-header-cell", ""], [3, "change", "checked", "indeterminate"], ["mat-cell", ""], [3, "click", "change", "checked"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-header-cell", "", 1, "designation-table__actions-col"], ["mat-icon-button", "", "color", "primary", "type", "button", "matTooltip", "Edit", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], [1, "mat-row"], [1, "mat-cell", "designation-table__empty"], ["mat-dialog-title", ""], [1, "designation-dialog__content"], ["appearance", "outline", 1, "designation-dialog__field"], ["matInput", "", "name", "designation", "required", "", "minlength", "1", "maxlength", "100", 3, "ngModelChange", "ngModel"], ["mat-button", "", "mat-dialog-close", "", "type", "button"], ["mat-flat-button", "", "color", "primary", "type", "button", 3, "mat-dialog-close", "disabled"]], template: function DesignationmasterComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "page-header");
    \u0275\u0275elementStart(1, "section", 1)(2, "mat-card", 2)(3, "mat-card-header")(4, "mat-card-title");
    \u0275\u0275text(5, "Add designation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "mat-card-subtitle");
    \u0275\u0275text(7, "Create a new designation name for staff or roles");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "mat-card-content")(9, "div", 3)(10, "mat-form-field", 4)(11, "mat-label");
    \u0275\u0275text(12, "Designation name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 5);
    \u0275\u0275twoWayListener("ngModelChange", function DesignationmasterComponent_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.designationName, $event) || (ctx.designationName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "mat-hint", 6);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 7)(17, "button", 8);
    \u0275\u0275listener("click", function DesignationmasterComponent_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.addDesignation());
    });
    \u0275\u0275text(18, "Save");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 9);
    \u0275\u0275listener("click", function DesignationmasterComponent_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.clearForm());
    });
    \u0275\u0275text(20, "Clear");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(21, "mat-card", 10)(22, "mat-card-header")(23, "mat-card-title");
    \u0275\u0275text(24, "Designations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "mat-card-subtitle");
    \u0275\u0275text(26, "Search, sort, and edit existing designations");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "mat-card-content")(28, "div", 11)(29, "mat-form-field", 12)(30, "mat-label");
    \u0275\u0275text(31, "Search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "mat-icon", 13);
    \u0275\u0275text(33, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "input", 14);
    \u0275\u0275listener("keyup", function DesignationmasterComponent_Template_input_keyup_34_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.applyFilter($event));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(35, "div", 15)(36, "table", 16);
    \u0275\u0275elementContainerStart(37, 17);
    \u0275\u0275template(38, DesignationmasterComponent_th_38_Template, 2, 2, "th", 18)(39, DesignationmasterComponent_td_39_Template, 2, 1, "td", 19);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(40, 20);
    \u0275\u0275template(41, DesignationmasterComponent_th_41_Template, 2, 0, "th", 21)(42, DesignationmasterComponent_td_42_Template, 2, 1, "td", 19);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(43, 22);
    \u0275\u0275template(44, DesignationmasterComponent_th_44_Template, 2, 0, "th", 23)(45, DesignationmasterComponent_td_45_Template, 4, 0, "td", 19);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(46, DesignationmasterComponent_tr_46_Template, 1, 0, "tr", 24)(47, DesignationmasterComponent_tr_47_Template, 1, 0, "tr", 25)(48, DesignationmasterComponent_ng_template_48_Template, 3, 1, "ng-template", 26);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(49, "mat-paginator", 27);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(50, DesignationmasterComponent_ng_template_50_Template, 12, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    \u0275\u0275advance(13);
    \u0275\u0275twoWayProperty("ngModel", ctx.designationName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx.designationName.length, "/100");
    \u0275\u0275advance(21);
    \u0275\u0275property("dataSource", ctx.dataSource);
    \u0275\u0275advance(10);
    \u0275\u0275property("matHeaderRowDef", ctx.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx.displayedColumns);
    \u0275\u0275advance(2);
    \u0275\u0275property("pageSize", 10)("pageSizeOptions", \u0275\u0275pureFunction0(7, _c12));
  }
}, dependencies: [
  FormsModule,
  DefaultValueAccessor,
  NgControlStatus,
  RequiredValidator,
  MinLengthValidator,
  MaxLengthValidator,
  NgModel,
  MatCardModule,
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle,
  MaterialModule,
  MatButton,
  MatIconButton,
  MatCheckbox,
  MatDialogClose,
  MatDialogTitle,
  MatDialogActions,
  MatDialogContent,
  MatFormField,
  MatLabel,
  MatHint,
  MatPrefix,
  MatIcon,
  MatInput,
  MatPaginator,
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
  MatNoDataRow,
  MatTooltip,
  PageHeaderComponent,
  MatTableModule,
  MatSortModule,
  MatPaginatorModule,
  MatDialogModule
], styles: ["\n\n.designation-page[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 20px;\n  max-width: 100%;\n  margin: 0;\n  padding: 0 12px 24px;\n}\n.designation-page__card[_ngcontent-%COMP%] {\n  width: 100%;\n}\n@media (min-width: 1000px) {\n  .designation-page[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(340px, 420px) 1fr;\n    align-items: start;\n  }\n  .designation-page__card--form[_ngcontent-%COMP%] {\n    position: sticky;\n    top: 12px;\n  }\n}\n.designation-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.designation-form__field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.designation-form__actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n  align-items: center;\n}\n.designation-toolbar[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.designation-toolbar__search[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 420px;\n}\n.designation-table__wrap[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow-x: auto;\n  border-radius: 8px;\n  border: 1px solid var(--mat-sys-outline-variant, rgba(0, 0, 0, 0.12));\n}\n.designation-table[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 480px;\n}\n.designation-table__actions-col[_ngcontent-%COMP%] {\n  width: 96px;\n  text-align: center;\n}\n.designation-table__empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 24px 16px !important;\n  color: var(--mat-sys-on-surface-variant, rgba(0, 0, 0, 0.6));\n}\n.designation-dialog__content[_ngcontent-%COMP%] {\n  padding-top: 8px;\n  min-width: min(100%, 320px);\n}\n.designation-dialog__field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=designationmaster.component.css.map */"] });
var DesignationmasterComponent = _DesignationmasterComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DesignationmasterComponent, [{
    type: Component,
    args: [{ selector: "app-designationmaster", imports: [
      FormsModule,
      MatCardModule,
      MaterialModule,
      PageHeaderComponent,
      MatTableModule,
      MatSortModule,
      MatPaginatorModule,
      MatCheckbox,
      MatIcon,
      MatDialogModule
    ], template: '<page-header />\r\n\r\n<section class="designation-page">\r\n  <mat-card class="designation-page__card designation-page__card--form" aria-label="Add designation">\r\n    <mat-card-header>\r\n      <mat-card-title>Add designation</mat-card-title>\r\n      <mat-card-subtitle>Create a new designation name for staff or roles</mat-card-subtitle>\r\n    </mat-card-header>\r\n    <mat-card-content>\r\n      <div class="designation-form">\r\n        <mat-form-field appearance="outline" class="designation-form__field">\r\n          <mat-label>Designation name</mat-label>\r\n          <input\r\n            matInput\r\n            [(ngModel)]="designationName"\r\n            name="designationName"\r\n            placeholder="e.g. Principal, Teacher, Clerk"\r\n            maxlength="100"\r\n          />\r\n          <mat-hint align="end">{{ designationName.length }}/100</mat-hint>\r\n        </mat-form-field>\r\n        <div class="designation-form__actions">\r\n          <button mat-flat-button color="primary" type="button" (click)="addDesignation()">Save</button>\r\n          <button mat-stroked-button type="button" (click)="clearForm()">Clear</button>\r\n        </div>\r\n      </div>\r\n    </mat-card-content>\r\n  </mat-card>\r\n\r\n  <mat-card class="designation-page__card designation-page__card--list" aria-label="Designation list">\r\n    <mat-card-header>\r\n      <mat-card-title>Designations</mat-card-title>\r\n      <mat-card-subtitle>Search, sort, and edit existing designations</mat-card-subtitle>\r\n    </mat-card-header>\r\n    <mat-card-content>\r\n      <div class="designation-toolbar">\r\n        <mat-form-field appearance="outline" class="designation-toolbar__search">\r\n          <mat-label>Search</mat-label>\r\n          <mat-icon matPrefix>search</mat-icon>\r\n          <input matInput (keyup)="applyFilter($event)" placeholder="Filter by name" />\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div class="designation-table__wrap">\r\n        <table mat-table [dataSource]="dataSource" matSort class="designation-table mat-elevation-z0">\r\n          <ng-container matColumnDef="select">\r\n            <th mat-header-cell *matHeaderCellDef>\r\n              <mat-checkbox\r\n                (change)="$event ? masterToggle() : null"\r\n                [checked]="isAllSelected()"\r\n                [indeterminate]="isPartialSelected()"\r\n              >\r\n              </mat-checkbox>\r\n            </th>\r\n            <td mat-cell *matCellDef="let row">\r\n              <mat-checkbox\r\n                (click)="$event.stopPropagation()"\r\n                (change)="$event ? toggleSelection(row) : null"\r\n                [checked]="selection.includes(row)"\r\n              >\r\n              </mat-checkbox>\r\n            </td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef="designation">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>Designation</th>\r\n            <td mat-cell *matCellDef="let d">{{ d.designation }}</td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef="actions">\r\n            <th mat-header-cell *matHeaderCellDef class="designation-table__actions-col">Actions</th>\r\n            <td mat-cell *matCellDef="let row">\r\n              <button\r\n                mat-icon-button\r\n                color="primary"\r\n                type="button"\r\n                (click)="openEditDialog(row)"\r\n                matTooltip="Edit"\r\n              >\r\n                <mat-icon>edit</mat-icon>\r\n              </button>\r\n            </td>\r\n          </ng-container>\r\n\r\n          <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>\r\n          <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>\r\n\r\n          <ng-template matNoDataRow>\r\n            <tr class="mat-row">\r\n              <td class="mat-cell designation-table__empty" [attr.colspan]="displayedColumns.length">\r\n                No designations found. Add one above or adjust your search.\r\n              </td>\r\n            </tr>\r\n          </ng-template>\r\n        </table>\r\n      </div>\r\n\r\n      <mat-paginator\r\n        [pageSize]="10"\r\n        [pageSizeOptions]="[5, 10, 25, 50]"\r\n        showFirstLastButtons\r\n      ></mat-paginator>\r\n    </mat-card-content>\r\n  </mat-card>\r\n</section>\r\n\r\n<ng-template #editDialog let-data>\r\n  <h2 mat-dialog-title>Edit designation</h2>\r\n  <mat-dialog-content class="designation-dialog__content">\r\n    <mat-form-field appearance="outline" class="designation-dialog__field">\r\n      <mat-label>Designation</mat-label>\r\n      <input matInput [(ngModel)]="data.designation" name="designation" required minlength="1" maxlength="100" />\r\n    </mat-form-field>\r\n  </mat-dialog-content>\r\n  <mat-dialog-actions align="end">\r\n    <button mat-button mat-dialog-close type="button">Cancel</button>\r\n    <button mat-flat-button color="primary" [mat-dialog-close]="data" type="button" [disabled]="!data.designation?.trim()">\r\n      Update\r\n    </button>\r\n  </mat-dialog-actions>\r\n</ng-template>\r\n', styles: ["/* src/app/pages/admin/designationmaster/designationmaster.component.scss */\n.designation-page {\n  display: grid;\n  gap: 20px;\n  max-width: 100%;\n  margin: 0;\n  padding: 0 12px 24px;\n}\n.designation-page__card {\n  width: 100%;\n}\n@media (min-width: 1000px) {\n  .designation-page {\n    grid-template-columns: minmax(340px, 420px) 1fr;\n    align-items: start;\n  }\n  .designation-page__card--form {\n    position: sticky;\n    top: 12px;\n  }\n}\n.designation-form {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.designation-form__field {\n  width: 100%;\n}\n.designation-form__actions {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n  align-items: center;\n}\n.designation-toolbar {\n  margin-bottom: 12px;\n}\n.designation-toolbar__search {\n  width: 100%;\n  max-width: 420px;\n}\n.designation-table__wrap {\n  width: 100%;\n  overflow-x: auto;\n  border-radius: 8px;\n  border: 1px solid var(--mat-sys-outline-variant, rgba(0, 0, 0, 0.12));\n}\n.designation-table {\n  width: 100%;\n  min-width: 480px;\n}\n.designation-table__actions-col {\n  width: 96px;\n  text-align: center;\n}\n.designation-table__empty {\n  text-align: center;\n  padding: 24px 16px !important;\n  color: var(--mat-sys-on-surface-variant, rgba(0, 0, 0, 0.6));\n}\n.designation-dialog__content {\n  padding-top: 8px;\n  min-width: min(100%, 320px);\n}\n.designation-dialog__field {\n  width: 100%;\n}\n/*# sourceMappingURL=designationmaster.component.css.map */\n"] }]
  }], () => [{ type: MatDialog }], { paginator: [{
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DesignationmasterComponent, { className: "DesignationmasterComponent", filePath: "src/app/pages/admin/designationmaster/designationmaster.component.ts", lineNumber: 32 });
})();

// src/app/pages/admin/session/session.component.ts
var _c03 = ["editDialog"];
var _c13 = () => [5, 10, 25];
function SessionComponent_th_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "th", 32)(1, "mat-checkbox", 33);
    \u0275\u0275listener("change", function SessionComponent_th_47_Template_mat_checkbox_change_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView($event ? ctx_r3.masterToggle() : null);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r3.isAllSelected())("indeterminate", ctx_r3.isPartialSelected());
  }
}
function SessionComponent_td_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 34)(1, "mat-checkbox", 35);
    \u0275\u0275listener("click", function SessionComponent_td_48_Template_mat_checkbox_click_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      return \u0275\u0275resetView($event.stopPropagation());
    })("change", function SessionComponent_td_48_Template_mat_checkbox_change_1_listener($event) {
      const row_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView($event ? ctx_r3.toggleSelection(row_r6) : null);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r6 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r3.selection.includes(row_r6));
  }
}
function SessionComponent_th_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 36);
    \u0275\u0275text(1, "Session Name");
    \u0275\u0275elementEnd();
  }
}
function SessionComponent_td_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r7.sessionName);
  }
}
function SessionComponent_th_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 36);
    \u0275\u0275text(1, "Session Description");
    \u0275\u0275elementEnd();
  }
}
function SessionComponent_td_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r8.description);
  }
}
function SessionComponent_th_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 36);
    \u0275\u0275text(1, "Year From");
    \u0275\u0275elementEnd();
  }
}
function SessionComponent_td_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r9 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r9.yearFrom);
  }
}
function SessionComponent_th_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 36);
    \u0275\u0275text(1, "Year To");
    \u0275\u0275elementEnd();
  }
}
function SessionComponent_td_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r10 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r10.yearTo);
  }
}
function SessionComponent_th_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 32);
    \u0275\u0275text(1, "Actions");
    \u0275\u0275elementEnd();
  }
}
function SessionComponent_td_63_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 34)(1, "button", 37);
    \u0275\u0275listener("click", function SessionComponent_td_63_Template_button_click_1_listener() {
      const row_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.openEditDialog(row_r12));
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "drive_file_rename_outline");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 37);
    \u0275\u0275listener("click", function SessionComponent_td_63_Template_button_click_4_listener() {
      const row_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.sessionDelete(row_r12));
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "delete");
    \u0275\u0275elementEnd()()();
  }
}
function SessionComponent_tr_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 38);
  }
}
function SessionComponent_tr_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 39);
  }
}
function SessionComponent_ng_template_67_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "h2", 40);
    \u0275\u0275text(1, "Edit Session");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "mat-dialog-content")(3, "mat-form-field", 41)(4, "mat-label");
    \u0275\u0275text(5, "Session Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 42);
    \u0275\u0275twoWayListener("ngModelChange", function SessionComponent_ng_template_67_Template_input_ngModelChange_6_listener($event) {
      const data_r14 = \u0275\u0275restoreView(_r13).$implicit;
      \u0275\u0275twoWayBindingSet(data_r14.sessionName, $event) || (data_r14.sessionName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "mat-form-field", 41)(8, "mat-label");
    \u0275\u0275text(9, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "input", 42);
    \u0275\u0275twoWayListener("ngModelChange", function SessionComponent_ng_template_67_Template_input_ngModelChange_10_listener($event) {
      const data_r14 = \u0275\u0275restoreView(_r13).$implicit;
      \u0275\u0275twoWayBindingSet(data_r14.description, $event) || (data_r14.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "mat-form-field", 41)(12, "mat-label");
    \u0275\u0275text(13, "From Year");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "input", 42);
    \u0275\u0275twoWayListener("ngModelChange", function SessionComponent_ng_template_67_Template_input_ngModelChange_14_listener($event) {
      const data_r14 = \u0275\u0275restoreView(_r13).$implicit;
      \u0275\u0275twoWayBindingSet(data_r14.yearFrom, $event) || (data_r14.yearFrom = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "mat-form-field", 41)(16, "mat-label");
    \u0275\u0275text(17, "To Year");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "input", 42);
    \u0275\u0275twoWayListener("ngModelChange", function SessionComponent_ng_template_67_Template_input_ngModelChange_18_listener($event) {
      const data_r14 = \u0275\u0275restoreView(_r13).$implicit;
      \u0275\u0275twoWayBindingSet(data_r14.yearTo, $event) || (data_r14.yearTo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "mat-dialog-actions", 43)(20, "button", 44);
    \u0275\u0275text(21, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "button", 45);
    \u0275\u0275text(23, " Update ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const data_r14 = ctx.$implicit;
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", data_r14.sessionName);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", data_r14.description);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", data_r14.yearFrom);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", data_r14.yearTo);
    \u0275\u0275advance(4);
    \u0275\u0275property("mat-dialog-close", data_r14);
  }
}
var _SessionComponent = class _SessionComponent {
  constructor(dialog) {
    this.dialog = dialog;
    this.datepipe = inject(DatePipe);
    this._sessionservice = inject(SessionService);
    this.dataSource = new MatTableDataSource([]);
    this.displayedColumns = ["select", "Name", "Description", "yearFrom", "yearTo", "actions"];
    this.selection = [];
    this.sessionName = "";
    this.description = "";
    this.yearFrom = null;
    this.yearTo = null;
  }
  ngOnInit() {
    this.getsessionList();
  }
  addSession(form) {
    debugger;
    if (form.invalid) {
      alert("Please fill all required fields");
      return;
    }
    debugger;
    const newSession = {
      sessionId: 0,
      // Assuming 0 for new session, backend should assign the actual ID
      sessionName: this.sessionName,
      description: this.description,
      yearFrom: this.datepipe.transform(this.yearFrom, "dd/MM/yyyy") || "",
      yearTo: this.datepipe.transform(this.yearTo, "dd/MM/yyyy") || ""
    };
    debugger;
    this._sessionservice.addSession(newSession).subscribe({
      next: (res) => {
        debugger;
        if (res.success) {
          alert("Session added successfully");
          this.getsessionList();
          form.resetForm();
        }
      },
      error: (err) => {
        console.error("Error adding session:", err);
        alert("Failed to add session");
      }
    });
  }
  getsessionList() {
    this._sessionservice.getSessionList().subscribe((response) => {
      console.log("Session list fetched successfully:", response);
      if (response.success && response.data) {
        this.dataSource.data = response.data;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    }, (error) => {
      console.error("Error fetching session list:", error);
    });
  }
  openEditDialog(session) {
    const dialogRef = this.dialog.open(this.editDialog, {
      width: "400px",
      data: __spreadValues({}, session)
    });
    debugger;
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        debugger;
        console.log("Dialog result:", result);
        this._sessionservice.updateSession(result).subscribe({
          next: (res) => {
            if (res.success) {
              alert("Session updated successfully");
              this.getsessionList();
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
  sessionDelete(session) {
    console.log("Delete session:", session);
  }
  /** Checkbox Selection Logic */
  toggleSelection(row) {
    if (this.selection.includes(row)) {
      this.selection = this.selection.filter((r) => r !== row);
    } else {
      this.selection.push(row);
    }
  }
  isAllSelected() {
    return this.selection.length === this.dataSource.data.length;
  }
  isPartialSelected() {
    return this.selection.length > 0 && !this.isAllSelected();
  }
  masterToggle() {
    if (this.isAllSelected()) {
      this.selection = [];
    } else {
      this.selection = [...this.dataSource.data];
    }
  }
};
_SessionComponent.\u0275fac = function SessionComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SessionComponent)(\u0275\u0275directiveInject(MatDialog));
};
_SessionComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SessionComponent, selectors: [["app-session"]], viewQuery: function SessionComponent_Query(rf, ctx) {
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
}, features: [\u0275\u0275ProvidersFeature([DatePipe])], decls: 69, vars: 14, consts: [["sessionForm", "ngForm"], ["picker1", ""], ["picker2", ""], ["editDialog", ""], [1, "col-sm-12"], [3, "ngSubmit"], [1, "form-field-full"], [1, "row"], [1, "col-sm-3"], ["matInput", "", "name", "sessionName", "placeholder", "Session Name", "required", "", 3, "ngModelChange", "ngModel"], ["matInput", "", "name", "description", "placeholder", "Description", "required", "", 3, "ngModelChange", "ngModel"], ["matInput", "", "name", "yearFrom", "placeholder", "from year", 3, "ngModelChange", "ngModel", "matDatepicker"], ["matSuffix", "", 3, "for"], ["matInput", "", "name", "yearTo", "placeholder", "to year", 3, "ngModelChange", "ngModel", "matDatepicker"], [1, "m-t-8"], ["mat-flat-button", ""], ["mat-button", "", "type", "button", 1, "m-x-8"], ["appearance", "outline"], ["matInput", "", "placeholder", "Filter sessions", 3, "keyup"], ["mat-table", "", "matSort", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "select"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "Name"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["matColumnDef", "Description"], ["matColumnDef", "yearFrom"], ["matColumnDef", "yearTo"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSize", "pageSizeOptions"], ["mat-header-cell", ""], [3, "change", "checked", "indeterminate"], ["mat-cell", ""], [3, "click", "change", "checked"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-icon-button", "", "color", "primary", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], ["mat-dialog-title", ""], ["appearance", "fill", 2, "width", "100%"], ["matInput", "", 3, "ngModelChange", "ngModel"], ["align", "end"], ["mat-button", "", "mat-dialog-close", ""], ["mat-raised-button", "", "color", "primary", 3, "mat-dialog-close"]], template: function SessionComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "page-header");
    \u0275\u0275elementStart(1, "div", 4)(2, "mat-card")(3, "mat-card-header")(4, "mat-card-title");
    \u0275\u0275text(5, "Add Session");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "form", 5, 0);
    \u0275\u0275listener("ngSubmit", function SessionComponent_Template_form_ngSubmit_6_listener() {
      \u0275\u0275restoreView(_r1);
      const sessionForm_r2 = \u0275\u0275reference(7);
      return \u0275\u0275resetView(ctx.addSession(sessionForm_r2));
    });
    \u0275\u0275elementStart(8, "mat-card-content")(9, "div", 6)(10, "div", 7)(11, "div", 8)(12, "mat-form-field")(13, "mat-label");
    \u0275\u0275text(14, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 9);
    \u0275\u0275twoWayListener("ngModelChange", function SessionComponent_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.sessionName, $event) || (ctx.sessionName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 8)(17, "mat-form-field")(18, "mat-label");
    \u0275\u0275text(19, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "input", 10);
    \u0275\u0275twoWayListener("ngModelChange", function SessionComponent_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.description, $event) || (ctx.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 8)(22, "mat-form-field")(23, "input", 11);
    \u0275\u0275twoWayListener("ngModelChange", function SessionComponent_Template_input_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.yearFrom, $event) || (ctx.yearFrom = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(24, "mat-datepicker-toggle", 12)(25, "mat-datepicker", null, 1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 8)(28, "mat-form-field")(29, "input", 13);
    \u0275\u0275twoWayListener("ngModelChange", function SessionComponent_Template_input_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.yearTo, $event) || (ctx.yearTo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(30, "mat-datepicker-toggle", 12)(31, "mat-datepicker", null, 2);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "div", 14)(34, "button", 15);
    \u0275\u0275text(35, "Save");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "button", 16);
    \u0275\u0275text(37, "Cancel");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(38, "div", 4)(39, "mat-card")(40, "mat-card-content")(41, "mat-form-field", 17)(42, "mat-label");
    \u0275\u0275text(43, "Search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "input", 18);
    \u0275\u0275listener("keyup", function SessionComponent_Template_input_keyup_44_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.applyFilter($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "table", 19);
    \u0275\u0275elementContainerStart(46, 20);
    \u0275\u0275template(47, SessionComponent_th_47_Template, 2, 2, "th", 21)(48, SessionComponent_td_48_Template, 2, 1, "td", 22);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(49, 23);
    \u0275\u0275template(50, SessionComponent_th_50_Template, 2, 0, "th", 24)(51, SessionComponent_td_51_Template, 2, 1, "td", 22);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(52, 25);
    \u0275\u0275template(53, SessionComponent_th_53_Template, 2, 0, "th", 24)(54, SessionComponent_td_54_Template, 2, 1, "td", 22);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(55, 26);
    \u0275\u0275template(56, SessionComponent_th_56_Template, 2, 0, "th", 24)(57, SessionComponent_td_57_Template, 2, 1, "td", 22);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(58, 27);
    \u0275\u0275template(59, SessionComponent_th_59_Template, 2, 0, "th", 24)(60, SessionComponent_td_60_Template, 2, 1, "td", 22);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(61, 28);
    \u0275\u0275template(62, SessionComponent_th_62_Template, 2, 0, "th", 21)(63, SessionComponent_td_63_Template, 7, 0, "td", 22);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(64, SessionComponent_tr_64_Template, 1, 0, "tr", 29)(65, SessionComponent_tr_65_Template, 1, 0, "tr", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275element(66, "mat-paginator", 31);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(67, SessionComponent_ng_template_67_Template, 24, 5, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const picker1_r15 = \u0275\u0275reference(26);
    const picker2_r16 = \u0275\u0275reference(32);
    \u0275\u0275advance(15);
    \u0275\u0275twoWayProperty("ngModel", ctx.sessionName);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx.description);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx.yearFrom);
    \u0275\u0275property("matDatepicker", picker1_r15);
    \u0275\u0275advance();
    \u0275\u0275property("for", picker1_r15);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx.yearTo);
    \u0275\u0275property("matDatepicker", picker2_r16);
    \u0275\u0275advance();
    \u0275\u0275property("for", picker2_r16);
    \u0275\u0275advance(15);
    \u0275\u0275property("dataSource", ctx.dataSource);
    \u0275\u0275advance(19);
    \u0275\u0275property("matHeaderRowDef", ctx.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("pageSize", 5)("pageSizeOptions", \u0275\u0275pureFunction0(13, _c13));
  }
}, dependencies: [
  PageHeaderComponent,
  MatCard,
  MaterialModule,
  MatButton,
  MatIconButton,
  MatCardContent,
  MatCardHeader,
  MatCardTitle,
  MatCheckbox,
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerToggle,
  MatDialogClose,
  MatDialogTitle,
  MatDialogActions,
  MatDialogContent,
  MatFormField,
  MatLabel,
  MatSuffix,
  MatIcon,
  MatInput,
  MatPaginator,
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
  NgModel,
  NgForm,
  MatButtonModule,
  MatCardModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatOptionModule,
  MatSelectModule,
  TranslateModule
], styles: ["\n\n.button-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  margin-top: 16px;\n}\n/*# sourceMappingURL=session.component.css.map */"] });
var SessionComponent = _SessionComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SessionComponent, [{
    type: Component,
    args: [{ selector: "app-session", imports: [
      PageHeaderComponent,
      MatCard,
      MaterialModule,
      FormsModule,
      MatButtonModule,
      MatCardModule,
      MatDatepickerModule,
      MatFormFieldModule,
      MatIconModule,
      MatInputModule,
      MatOptionModule,
      MatSelectModule,
      TranslateModule
    ], providers: [DatePipe], template: '<page-header />\r\n<div class="col-sm-12">\r\n    <mat-card>\r\n        <mat-card-header>\r\n            <mat-card-title>Add Session</mat-card-title>\r\n        </mat-card-header>\r\n        <form #sessionForm="ngForm" (ngSubmit)="addSession(sessionForm)">\r\n            <mat-card-content>\r\n                <div class="form-field-full">\r\n                    <div class="row">\r\n                        <div class="col-sm-3">\r\n                            <mat-form-field>\r\n                                <mat-label>Name</mat-label>\r\n                                <input matInput [(ngModel)]="sessionName" name="sessionName" placeholder="Session Name"\r\n                                    required>\r\n                            </mat-form-field>\r\n                        </div>\r\n                        <div class="col-sm-3">\r\n                            <mat-form-field>\r\n                                <mat-label>Description</mat-label>\r\n                                <input matInput [(ngModel)]="description" name="description" placeholder="Description"\r\n                                    required>\r\n                            </mat-form-field>\r\n                        </div>\r\n                        <div class="col-sm-3">\r\n                            <mat-form-field>\r\n                                <input matInput [(ngModel)]="yearFrom" [matDatepicker]="picker1" name="yearFrom"\r\n                                    placeholder="from year">\r\n                                <mat-datepicker-toggle matSuffix [for]="picker1" />\r\n                                <mat-datepicker #picker1 />\r\n                            </mat-form-field>\r\n                        </div>\r\n                        <div class="col-sm-3">\r\n                            <mat-form-field>\r\n                                <input matInput [(ngModel)]="yearTo" name="yearTo" [matDatepicker]="picker2"\r\n                                    placeholder="to year">\r\n                                <mat-datepicker-toggle matSuffix [for]="picker2" />\r\n                                <mat-datepicker #picker2 />\r\n                            </mat-form-field>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class="m-t-8">\r\n                        <button mat-flat-button>Save</button>\r\n                        <button mat-button class="m-x-8" type="button">Cancel</button>\r\n                    </div>\r\n                </div>\r\n            </mat-card-content>\r\n        </form>\r\n    </mat-card>\r\n</div>\r\n\r\n\r\n<div class="col-sm-12">\r\n    <mat-card>\r\n        <mat-card-content>\r\n            <mat-form-field appearance="outline">\r\n                <mat-label>Search</mat-label>\r\n                <input matInput (keyup)="applyFilter($event)" placeholder="Filter sessions">\r\n            </mat-form-field>\r\n            <table mat-table [dataSource]="dataSource" matSort class="mat-elevation-z8">\r\n                <ng-container matColumnDef="select">\r\n                    <th mat-header-cell *matHeaderCellDef>\r\n                        <mat-checkbox (change)="$event ? masterToggle() : null" [checked]="isAllSelected()"\r\n                            [indeterminate]="isPartialSelected()">\r\n                        </mat-checkbox>\r\n                    </th>\r\n                    <td mat-cell *matCellDef="let row">\r\n                        <mat-checkbox (click)="$event.stopPropagation()" (change)="$event ? toggleSelection(row) : null"\r\n                            [checked]="selection.includes(row)">\r\n                        </mat-checkbox>\r\n                    </td>\r\n                </ng-container>\r\n                <ng-container matColumnDef="Name">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header>Session Name</th>\r\n                    <td mat-cell *matCellDef="let element">{{ element.sessionName }}</td>\r\n                </ng-container>\r\n                <ng-container matColumnDef="Description">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header>Session Description</th>\r\n                    <td mat-cell *matCellDef="let element">{{ element.description }}</td>\r\n                </ng-container>\r\n                <ng-container matColumnDef="yearFrom">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header>Year From</th>\r\n                    <td mat-cell *matCellDef="let element">{{ element.yearFrom }}</td>\r\n                </ng-container>\r\n                <ng-container matColumnDef="yearTo">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header>Year To</th>\r\n                    <td mat-cell *matCellDef="let element">{{ element.yearTo }}</td>\r\n                </ng-container>\r\n                <ng-container matColumnDef="actions">\r\n                    <th mat-header-cell *matHeaderCellDef>Actions</th>\r\n                    <td mat-cell *matCellDef="let row">\r\n                        <button mat-icon-button color="primary" (click)="openEditDialog(row)">\r\n                            <mat-icon>drive_file_rename_outline</mat-icon>\r\n                        </button>\r\n                        <button mat-icon-button color="primary" (click)="sessionDelete(row)">\r\n                            <mat-icon>delete</mat-icon>\r\n                        </button>\r\n                    </td>\r\n                </ng-container>\r\n                <!-- Header & Rows -->\r\n                <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>\r\n                <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>\r\n            </table>\r\n            <!-- Paginator -->\r\n            <mat-paginator [pageSize]="5" [pageSizeOptions]="[5, 10, 25]" showFirstLastButtons></mat-paginator>\r\n\r\n        </mat-card-content>\r\n    </mat-card>\r\n</div>\r\n\r\n<!-- Edit Dialog -->\r\n<ng-template #editDialog let-data>\r\n    <h2 mat-dialog-title>Edit Session</h2>\r\n    <mat-dialog-content>\r\n        <mat-form-field appearance="fill" style="width:100%">\r\n            <mat-label>Session Name</mat-label>\r\n            <input matInput [(ngModel)]="data.sessionName" />\r\n        </mat-form-field>\r\n\r\n        <mat-form-field appearance="fill" style="width:100%">\r\n            <mat-label>Description</mat-label>\r\n            <input matInput [(ngModel)]="data.description" />\r\n        </mat-form-field>\r\n\r\n        <mat-form-field appearance="fill" style="width:100%">\r\n            <mat-label>From Year</mat-label>\r\n            <input matInput [(ngModel)]="data.yearFrom" />\r\n        </mat-form-field>\r\n\r\n        <mat-form-field appearance="fill" style="width:100%">\r\n            <mat-label>To Year</mat-label>\r\n            <input matInput [(ngModel)]="data.yearTo" />\r\n        </mat-form-field>\r\n    </mat-dialog-content>\r\n\r\n    <mat-dialog-actions align="end">\r\n        <button mat-button mat-dialog-close>Cancel</button>\r\n        <button mat-raised-button color="primary" [mat-dialog-close]="data">\r\n            Update\r\n        </button>\r\n    </mat-dialog-actions>\r\n</ng-template>', styles: ["/* src/app/pages/admin/session/session.component.scss */\n.button-row {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  margin-top: 16px;\n}\n/*# sourceMappingURL=session.component.css.map */\n"] }]
  }], () => [{ type: MatDialog }], { paginator: [{
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SessionComponent, { className: "SessionComponent", filePath: "src/app/pages/admin/session/session.component.ts", lineNumber: 41 });
})();

// src/app/pages/admin/country/country.component.ts
var _CountryComponent = class _CountryComponent {
};
_CountryComponent.\u0275fac = function CountryComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CountryComponent)();
};
_CountryComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CountryComponent, selectors: [["app-country"]], decls: 2, vars: 0, template: function CountryComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "p");
    \u0275\u0275text(1, "country works!");
    \u0275\u0275domElementEnd();
  }
}, encapsulation: 2 });
var CountryComponent = _CountryComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CountryComponent, [{
    type: Component,
    args: [{ selector: "app-country", imports: [], template: "<p>country works!</p>\r\n" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CountryComponent, { className: "CountryComponent", filePath: "src/app/pages/admin/country/country.component.ts", lineNumber: 9 });
})();

// src/app/services/section.service.ts
var _SectionService = class _SectionService {
  constructor() {
    this.http = inject(HttpClient);
    this.endPoints = apiEndpoint;
  }
  getSectionList() {
    return this.http.get(this.endPoints.section.list);
  }
  addSection(sectionName) {
    const body = { sectionId: 0, sectionName };
    return this.http.post(this.endPoints.section.add, body);
  }
  updateSection(SectionBody) {
    return this.http.post(this.endPoints.section.update, SectionBody);
  }
  assignSection(body) {
    return this.http.post(this.endPoints.section.assignSection, body);
  }
};
_SectionService.\u0275fac = function SectionService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SectionService)();
};
_SectionService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SectionService, factory: _SectionService.\u0275fac, providedIn: "root" });
var SectionService = _SectionService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SectionService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/pages/admin/section/section.component.ts
var _c04 = ["editDialog"];
var _c14 = () => [5, 10, 25];
function SectionComponent_th_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 19);
    \u0275\u0275text(1, "Section Name");
    \u0275\u0275elementEnd();
  }
}
function SectionComponent_td_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(d_r2.sectionName);
  }
}
function SectionComponent_th_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 21);
    \u0275\u0275text(1, "Actions");
    \u0275\u0275elementEnd();
  }
}
function SectionComponent_td_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 20)(1, "button", 22);
    \u0275\u0275listener("click", function SectionComponent_td_29_Template_button_click_1_listener() {
      const row_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.openEditDialog(row_r4));
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "drive_file_rename_outline");
    \u0275\u0275elementEnd()()();
  }
}
function SectionComponent_tr_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 23);
  }
}
function SectionComponent_tr_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 24);
  }
}
function SectionComponent_ng_template_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "h2", 25);
    \u0275\u0275text(1, "Edit Section");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "mat-dialog-content")(3, "mat-form-field", 26)(4, "mat-label");
    \u0275\u0275text(5, "Section Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 27);
    \u0275\u0275twoWayListener("ngModelChange", function SectionComponent_ng_template_33_Template_input_ngModelChange_6_listener($event) {
      const data_r7 = \u0275\u0275restoreView(_r6).$implicit;
      \u0275\u0275twoWayBindingSet(data_r7.sectionName, $event) || (data_r7.sectionName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "mat-dialog-actions", 28)(8, "button", 29);
    \u0275\u0275text(9, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 30);
    \u0275\u0275text(11, "Update");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const data_r7 = ctx.$implicit;
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", data_r7.sectionName);
    \u0275\u0275advance(4);
    \u0275\u0275property("mat-dialog-close", data_r7);
  }
}
var _SectionComponent = class _SectionComponent {
  constructor(dialog) {
    this.dialog = dialog;
    this.sectionService = inject(SectionService);
    this.displayedColumns = ["sectionName", "actions"];
    this.dataSource = new MatTableDataSource([]);
    this.sectionName = "";
  }
  ngOnInit() {
    this.getSectionList();
  }
  // for common table code 
  applyFilter(event) {
    const filterValue = event.target.value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  openEditDialog(section) {
    const dialogRef = this.dialog.open(this.editDialog, {
      width: "400px",
      data: __spreadValues({}, section)
      // Pass a copy of the section data
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        debugger;
        this.sectionService.updateSection(result).subscribe({
          next: (res) => {
            alert("Section updated successfully");
            this.getSectionList();
          }
        });
      }
    });
  }
  addSection() {
    const name = this.sectionName.trim();
    if (!name) {
      alert("Please enter section name.");
      return;
    }
    debugger;
    this.sectionService.addSection(name).subscribe({
      next: (res) => {
        debugger;
        if (res.success) {
          alert(res.message);
          this.getSectionList();
          this.sectionName = "";
        }
      }
    });
  }
  getSectionList() {
    debugger;
    this.sectionService.getSectionList().subscribe({
      next: (res) => {
        debugger;
        if (res.success) {
          this.dataSource.data = Array.isArray(res.data) ? res.data : [res.data];
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
      },
      error: (err) => {
        debugger;
        console.error("Error fetching sections:", err);
      }
    });
  }
};
_SectionComponent.\u0275fac = function SectionComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SectionComponent)(\u0275\u0275directiveInject(MatDialog));
};
_SectionComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SectionComponent, selectors: [["app-section"]], viewQuery: function SectionComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(MatPaginator, 5);
    \u0275\u0275viewQuery(MatSort, 5);
    \u0275\u0275viewQuery(_c04, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.paginator = _t.first);
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.sort = _t.first);
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.editDialog = _t.first);
  }
}, decls: 35, vars: 7, consts: [["editDialog", ""], [1, "col-sm-12"], [2, "width", "100%"], ["matInput", "", "placeholder", "Enter section name", 3, "ngModelChange", "ngModel"], [1, "section-form__actions"], ["mat-flat-button", "", 3, "click"], ["mat-button", "", "type", "button", 1, "m-x-8"], ["appearance", "outline"], ["matInput", "", "placeholder", "Filter designations", 3, "keyup"], [1, "section-table__wrap"], ["mat-table", "", "matSort", "", 1, "mat-elevation-z8", "section-table", 3, "dataSource"], ["matColumnDef", "sectionName"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "actions"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSize", "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-cell", ""], ["mat-icon-button", "", "color", "primary", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], ["mat-dialog-title", ""], ["appearance", "fill", 2, "width", "100%"], ["matInput", "", 3, "ngModelChange", "ngModel"], ["align", "end"], ["mat-button", "", "mat-dialog-close", ""], ["mat-raised-button", "", "color", "primary", 3, "mat-dialog-close"]], template: function SectionComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "mat-card")(2, "mat-card-header")(3, "mat-card-title");
    \u0275\u0275text(4, "Section Master");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "mat-card-content")(6, "mat-form-field", 2)(7, "mat-label");
    \u0275\u0275text(8, "Section Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 3);
    \u0275\u0275twoWayListener("ngModelChange", function SectionComponent_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.sectionName, $event) || (ctx.sectionName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 4)(11, "button", 5);
    \u0275\u0275listener("click", function SectionComponent_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.addSection());
    });
    \u0275\u0275text(12, "Save");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 6);
    \u0275\u0275text(14, "Cancel");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(15, "div", 1)(16, "mat-card")(17, "mat-card-content")(18, "mat-form-field", 7)(19, "mat-label");
    \u0275\u0275text(20, "Search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "input", 8);
    \u0275\u0275listener("keyup", function SectionComponent_Template_input_keyup_21_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.applyFilter($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 9)(23, "table", 10);
    \u0275\u0275elementContainerStart(24, 11);
    \u0275\u0275template(25, SectionComponent_th_25_Template, 2, 0, "th", 12)(26, SectionComponent_td_26_Template, 2, 1, "td", 13);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(27, 14);
    \u0275\u0275template(28, SectionComponent_th_28_Template, 2, 0, "th", 15)(29, SectionComponent_td_29_Template, 4, 0, "td", 13);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(30, SectionComponent_tr_30_Template, 1, 0, "tr", 16)(31, SectionComponent_tr_31_Template, 1, 0, "tr", 17);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(32, "mat-paginator", 18);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(33, SectionComponent_ng_template_33_Template, 12, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx.sectionName);
    \u0275\u0275advance(14);
    \u0275\u0275property("dataSource", ctx.dataSource);
    \u0275\u0275advance(7);
    \u0275\u0275property("matHeaderRowDef", ctx.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("pageSize", 5)("pageSizeOptions", \u0275\u0275pureFunction0(6, _c14));
  }
}, dependencies: [
  FormsModule,
  DefaultValueAccessor,
  NgControlStatus,
  NgModel,
  MatCardModule,
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardTitle,
  MatInputModule,
  MatInput,
  MatFormField,
  MatLabel,
  MatTableModule,
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
  MatSortModule,
  MatSort,
  MatSortHeader,
  MatPaginatorModule,
  MatPaginator,
  MatIcon,
  MatDialogModule,
  MatDialogClose,
  MatDialogTitle,
  MatDialogActions,
  MatDialogContent
], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.section-form__actions[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.section-table__wrap[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow-x: auto;\n}\n.section-table[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 560px;\n}\n/*# sourceMappingURL=section.component.css.map */"] });
var SectionComponent = _SectionComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SectionComponent, [{
    type: Component,
    args: [{ selector: "app-section", imports: [
      FormsModule,
      MatCardModule,
      MatInputModule,
      MatTableModule,
      MatSortModule,
      MatPaginatorModule,
      MatIcon,
      MatDialogModule
    ], template: '<div class="col-sm-12">\r\n  <mat-card>\r\n    <mat-card-header>\r\n      <mat-card-title>Section Master</mat-card-title>\r\n    </mat-card-header>\r\n    <mat-card-content>\r\n      <mat-form-field style="width: 100%;">\r\n        <mat-label>Section Name</mat-label>\r\n        <input matInput [(ngModel)]="sectionName" placeholder="Enter section name" />\r\n      </mat-form-field>\r\n      <div class="section-form__actions">\r\n        <button mat-flat-button (click)="addSection()">Save</button>\r\n        <button mat-button class="m-x-8" type="button">Cancel</button>\r\n      </div>\r\n    </mat-card-content>\r\n  </mat-card>\r\n</div>\r\n\r\n\r\n\r\n<div class="col-sm-12">\r\n  <mat-card>\r\n    <mat-card-content>\r\n      <mat-form-field appearance="outline">\r\n        <mat-label>Search</mat-label>\r\n        <input matInput (keyup)="applyFilter($event)" placeholder="Filter designations">\r\n      </mat-form-field>\r\n      <div class="section-table__wrap">\r\n      <table mat-table [dataSource]="dataSource" matSort class="mat-elevation-z8 section-table">\r\n\r\n        <!-- sectionName Column -->\r\n        <ng-container matColumnDef="sectionName">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header>Section Name</th>\r\n          <td mat-cell *matCellDef="let d">{{ d.sectionName }}</td>\r\n        </ng-container>\r\n\r\n        <!-- Actions Column -->\r\n        <ng-container matColumnDef="actions">\r\n          <th mat-header-cell *matHeaderCellDef>Actions</th>\r\n          <td mat-cell *matCellDef="let row">\r\n            <button mat-icon-button color="primary" (click)="openEditDialog(row)">\r\n              <mat-icon>drive_file_rename_outline</mat-icon>\r\n            </button>\r\n            \r\n          </td>\r\n        </ng-container>\r\n\r\n        <!-- Header & Rows -->\r\n        <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>\r\n        <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>\r\n\r\n      </table>\r\n      </div>\r\n      <!-- Paginator -->\r\n      <mat-paginator [pageSize]="5" [pageSizeOptions]="[5, 10, 25]" showFirstLastButtons></mat-paginator>\r\n    </mat-card-content>\r\n  </mat-card>\r\n</div>\r\n\r\n<!-- \u2728 EDIT POPUP (ng-template) -->\r\n<ng-template #editDialog let-data>\r\n  <h2 mat-dialog-title>Edit Section</h2>\r\n  <mat-dialog-content>\r\n    <mat-form-field appearance="fill" style="width:100%">\r\n      <mat-label>Section Name</mat-label>\r\n      <input matInput [(ngModel)]="data.sectionName">\r\n    </mat-form-field>\r\n  </mat-dialog-content>\r\n  <mat-dialog-actions align="end">\r\n    <button mat-button mat-dialog-close>Cancel</button>\r\n    <button mat-raised-button color="primary" [mat-dialog-close]="data">Update</button>\r\n  </mat-dialog-actions>\r\n</ng-template>\r\n', styles: ["/* src/app/pages/admin/section/section.component.scss */\n:host {\n  display: block;\n}\n.section-form__actions {\n  margin-top: 8px;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.section-table__wrap {\n  width: 100%;\n  overflow-x: auto;\n}\n.section-table {\n  width: 100%;\n  min-width: 560px;\n}\n/*# sourceMappingURL=section.component.css.map */\n"] }]
  }], () => [{ type: MatDialog }], { paginator: [{
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SectionComponent, { className: "SectionComponent", filePath: "src/app/pages/admin/section/section.component.ts", lineNumber: 30 });
})();

// src/app/pages/admin/college/college.component.ts
var _c05 = ["editDialog"];
var _c15 = ["addDialog"];
var _c2 = ["detailsDialog"];
var _c3 = () => [5, 10, 25];
function CollegeComponent_th_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 23);
    \u0275\u0275text(1, "College Abbreviation");
    \u0275\u0275elementEnd();
  }
}
function CollegeComponent_td_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r2.collegeAbreviation);
  }
}
function CollegeComponent_th_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 23);
    \u0275\u0275text(1, "College Name");
    \u0275\u0275elementEnd();
  }
}
function CollegeComponent_td_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r3.collegeName);
  }
}
function CollegeComponent_th_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 23);
    \u0275\u0275text(1, "College Address");
    \u0275\u0275elementEnd();
  }
}
function CollegeComponent_td_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r4.collegeAddress);
  }
}
function CollegeComponent_th_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 25);
    \u0275\u0275text(1, "Actions");
    \u0275\u0275elementEnd();
  }
}
function CollegeComponent_td_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 24)(1, "button", 26);
    \u0275\u0275listener("click", function CollegeComponent_td_24_Template_button_click_1_listener($event) {
      const row_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r6 = \u0275\u0275nextContext();
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r6.openEditDialog(row_r6));
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "drive_file_rename_outline");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 27)(5, "mat-icon");
    \u0275\u0275text(6, "delete");
    \u0275\u0275elementEnd()()();
  }
}
function CollegeComponent_tr_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 28);
  }
}
function CollegeComponent_tr_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 29);
    \u0275\u0275listener("click", function CollegeComponent_tr_26_Template_tr_click_0_listener() {
      const row_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.openDetails(row_r9));
    });
    \u0275\u0275elementEnd();
  }
}
function CollegeComponent_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "h2", 30);
    \u0275\u0275text(1, "Add School");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "mat-dialog-content")(3, "div", 31)(4, "mat-form-field", 32)(5, "mat-label");
    \u0275\u0275text(6, "College Abbreviation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 33);
    \u0275\u0275twoWayListener("ngModelChange", function CollegeComponent_ng_template_28_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r6 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r6.newSchool.collegeAbreviation, $event) || (ctx_r6.newSchool.collegeAbreviation = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "mat-form-field", 32)(9, "mat-label");
    \u0275\u0275text(10, "College Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 33);
    \u0275\u0275twoWayListener("ngModelChange", function CollegeComponent_ng_template_28_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r6 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r6.newSchool.collegeName, $event) || (ctx_r6.newSchool.collegeName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "mat-form-field", 32)(13, "mat-label");
    \u0275\u0275text(14, "College Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 33);
    \u0275\u0275twoWayListener("ngModelChange", function CollegeComponent_ng_template_28_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r6 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r6.newSchool.collegeAddress, $event) || (ctx_r6.newSchool.collegeAddress = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "mat-form-field", 32)(17, "mat-label");
    \u0275\u0275text(18, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "input", 33);
    \u0275\u0275twoWayListener("ngModelChange", function CollegeComponent_ng_template_28_Template_input_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r6 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r6.newSchool.email, $event) || (ctx_r6.newSchool.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "mat-form-field", 32)(21, "mat-label");
    \u0275\u0275text(22, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "input", 33);
    \u0275\u0275twoWayListener("ngModelChange", function CollegeComponent_ng_template_28_Template_input_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r6 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r6.newSchool.phone, $event) || (ctx_r6.newSchool.phone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "mat-form-field", 32)(25, "mat-label");
    \u0275\u0275text(26, "Website");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "input", 33);
    \u0275\u0275twoWayListener("ngModelChange", function CollegeComponent_ng_template_28_Template_input_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r6 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r6.newSchool.webSite, $event) || (ctx_r6.newSchool.webSite = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "mat-form-field", 32)(29, "mat-label");
    \u0275\u0275text(30, "Affiliation No");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "input", 33);
    \u0275\u0275twoWayListener("ngModelChange", function CollegeComponent_ng_template_28_Template_input_ngModelChange_31_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r6 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r6.newSchool.affilicationNo, $event) || (ctx_r6.newSchool.affilicationNo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "mat-form-field", 32)(33, "mat-label");
    \u0275\u0275text(34, "Board");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "input", 33);
    \u0275\u0275twoWayListener("ngModelChange", function CollegeComponent_ng_template_28_Template_input_ngModelChange_35_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r6 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r6.newSchool.board, $event) || (ctx_r6.newSchool.board = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(36, "mat-dialog-actions", 34)(37, "button", 35);
    \u0275\u0275text(38, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "button", 8);
    \u0275\u0275listener("click", function CollegeComponent_ng_template_28_Template_button_click_39_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.addSchool());
    });
    \u0275\u0275text(40, "Save");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r6 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r6.newSchool.collegeAbreviation);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r6.newSchool.collegeName);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r6.newSchool.collegeAddress);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r6.newSchool.email);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r6.newSchool.phone);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r6.newSchool.webSite);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r6.newSchool.affilicationNo);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r6.newSchool.board);
  }
}
function CollegeComponent_ng_template_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "h2", 30);
    \u0275\u0275text(1, "Edit College");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "mat-dialog-content")(3, "mat-form-field", 36)(4, "mat-label");
    \u0275\u0275text(5, "College Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 33);
    \u0275\u0275twoWayListener("ngModelChange", function CollegeComponent_ng_template_30_Template_input_ngModelChange_6_listener($event) {
      const data_r12 = \u0275\u0275restoreView(_r11).$implicit;
      \u0275\u0275twoWayBindingSet(data_r12.collegeName, $event) || (data_r12.collegeName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "mat-form-field", 36)(8, "mat-label");
    \u0275\u0275text(9, "College Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "input", 33);
    \u0275\u0275twoWayListener("ngModelChange", function CollegeComponent_ng_template_30_Template_input_ngModelChange_10_listener($event) {
      const data_r12 = \u0275\u0275restoreView(_r11).$implicit;
      \u0275\u0275twoWayBindingSet(data_r12.collegeAddress, $event) || (data_r12.collegeAddress = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "mat-form-field", 36)(12, "mat-label");
    \u0275\u0275text(13, "email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "input", 33);
    \u0275\u0275twoWayListener("ngModelChange", function CollegeComponent_ng_template_30_Template_input_ngModelChange_14_listener($event) {
      const data_r12 = \u0275\u0275restoreView(_r11).$implicit;
      \u0275\u0275twoWayBindingSet(data_r12.email, $event) || (data_r12.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "mat-form-field", 36)(16, "mat-label");
    \u0275\u0275text(17, "phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "input", 33);
    \u0275\u0275twoWayListener("ngModelChange", function CollegeComponent_ng_template_30_Template_input_ngModelChange_18_listener($event) {
      const data_r12 = \u0275\u0275restoreView(_r11).$implicit;
      \u0275\u0275twoWayBindingSet(data_r12.phone, $event) || (data_r12.phone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "mat-dialog-actions", 34)(20, "button", 37);
    \u0275\u0275text(21, "Cancel");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const data_r12 = ctx.$implicit;
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", data_r12.collegeName);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", data_r12.collegeAddress);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", data_r12.email);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", data_r12.phone);
  }
}
function CollegeComponent_ng_template_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2", 30);
    \u0275\u0275text(1, "College details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "mat-dialog-content")(3, "div", 38)(4, "div")(5, "strong");
    \u0275\u0275text(6, "Abbreviation:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div")(9, "strong");
    \u0275\u0275text(10, "Name:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div")(13, "strong");
    \u0275\u0275text(14, "Address:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div")(17, "strong");
    \u0275\u0275text(18, "Email:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div")(21, "strong");
    \u0275\u0275text(22, "Phone:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div")(25, "strong");
    \u0275\u0275text(26, "Website:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div")(29, "strong");
    \u0275\u0275text(30, "Affiliation No:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div")(33, "strong");
    \u0275\u0275text(34, "Board:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "mat-dialog-actions", 34)(37, "button", 35);
    \u0275\u0275text(38, "Close");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const data_r13 = ctx.$implicit;
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", data_r13.collegeAbreviation);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", data_r13.collegeName);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", data_r13.collegeAddress);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", data_r13.email);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", data_r13.phone);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", data_r13.webSite);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", data_r13.affilicationNo);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", data_r13.board);
  }
}
var _CollegeComponent = class _CollegeComponent {
  constructor(dialog) {
    this.dialog = dialog;
    this.collegeService = inject(CollegeService);
    this.displayedColumns = [
      "collegeAbreviation",
      "collegeName",
      "collegeAddress",
      "actions"
    ];
    this.dataSource = new MatTableDataSource([]);
    this.newSchool = {};
  }
  ngOnInit() {
    this.getCollegeList();
  }
  // for common table code 
  applyFilter(event) {
    const filterValue = event.target.value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  openAddDialog() {
    this.newSchool = {
      collegeId: 0,
      collegeAbreviation: "",
      collegeName: "",
      collegeAddress: "",
      email: "",
      phone: "",
      fax: "",
      webSite: "",
      affilicationNo: "",
      board: "",
      collegeLogo: "",
      schoolCode: "",
      dioceseCode: "",
      portalURL: null
    };
    this.dialog.open(this.addDialog, {
      width: "min(900px, 96vw)",
      maxWidth: "96vw"
    });
  }
  addSchool() {
    const body = this.newSchool;
    if (!body.collegeName?.trim() || !body.collegeAbreviation?.trim()) {
      alert("Please enter at least College Name and College Abbreviation.");
      return;
    }
    this.collegeService.addClass(body).subscribe({
      next: (res) => {
        if (res.success) {
          alert(res.message);
          this.getCollegeList();
          this.dialog.closeAll();
        } else {
          alert(res.message);
        }
      },
      error: (err) => {
        console.error("Error adding school", err);
        alert("Failed to add school");
      }
    });
  }
  openDetails(college) {
    this.dialog.open(this.detailsDialog, {
      width: "min(900px, 96vw)",
      maxWidth: "96vw",
      data: __spreadValues({}, college)
    });
  }
  openEditDialog(college) {
    const dialogRef = this.dialog.open(this.editDialog, {
      width: "400px",
      data: __spreadValues({}, college)
      // Pass a copy of the section data
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        debugger;
      }
    });
  }
  getCollegeList() {
    debugger;
    this.collegeService.getCollegeList().subscribe({
      next: (res) => {
        debugger;
        if (res.success) {
          debugger;
          this.dataSource.data = Array.isArray(res.data) ? res.data : [res.data];
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
      },
      error: (err) => {
        debugger;
        console.log("Error fetching sections:", err);
      }
    });
  }
};
_CollegeComponent.\u0275fac = function CollegeComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CollegeComponent)(\u0275\u0275directiveInject(MatDialog));
};
_CollegeComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CollegeComponent, selectors: [["app-college"]], viewQuery: function CollegeComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(MatPaginator, 5);
    \u0275\u0275viewQuery(MatSort, 5);
    \u0275\u0275viewQuery(_c05, 5);
    \u0275\u0275viewQuery(_c15, 5);
    \u0275\u0275viewQuery(_c2, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.paginator = _t.first);
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.sort = _t.first);
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.editDialog = _t.first);
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.addDialog = _t.first);
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.detailsDialog = _t.first);
  }
}, decls: 34, vars: 7, consts: [["addDialog", ""], ["editDialog", ""], ["detailsDialog", ""], [1, "college-page"], [1, "college-page__card"], [1, "college-page__content"], [1, "college-page__header"], [1, "college-toolbar"], ["mat-flat-button", "", "color", "primary", "type", "button", 3, "click"], ["appearance", "outline", 1, "college-page__search"], ["matInput", "", "placeholder", "Filter colleges", 3, "keyup"], [1, "college-page__scroll"], ["mat-table", "", "matSort", "", 1, "mat-elevation-z8", "college-table", 3, "dataSource"], ["matColumnDef", "collegeAbreviation"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "collegeName"], ["matColumnDef", "collegeAddress"], ["matColumnDef", "actions"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", "class", "college-row", 3, "click", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 1, "college-page__paginator", 3, "pageSize", "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-cell", ""], ["mat-icon-button", "", "color", "primary", 3, "click"], ["mat-icon-button", "", "color", "primary", "type", "button"], ["mat-header-row", ""], ["mat-row", "", 1, "college-row", 3, "click"], ["mat-dialog-title", ""], [1, "college-dialog-grid"], ["appearance", "outline"], ["matInput", "", 3, "ngModelChange", "ngModel"], ["align", "end"], ["mat-button", "", "mat-dialog-close", "", "type", "button"], ["appearance", "fill", 2, "width", "100%"], ["mat-button", "", "mat-dialog-close", ""], [1, "college-details"]], template: function CollegeComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "mat-card", 4)(2, "mat-card-content", 5)(3, "div", 6)(4, "div", 7)(5, "button", 8);
    \u0275\u0275listener("click", function CollegeComponent_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openAddDialog());
    });
    \u0275\u0275text(6, " Add School ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "mat-form-field", 9)(8, "mat-label");
    \u0275\u0275text(9, "Search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "input", 10);
    \u0275\u0275listener("keyup", function CollegeComponent_Template_input_keyup_10_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.applyFilter($event));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 11)(12, "table", 12);
    \u0275\u0275elementContainerStart(13, 13);
    \u0275\u0275template(14, CollegeComponent_th_14_Template, 2, 0, "th", 14)(15, CollegeComponent_td_15_Template, 2, 1, "td", 15);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(16, 16);
    \u0275\u0275template(17, CollegeComponent_th_17_Template, 2, 0, "th", 14)(18, CollegeComponent_td_18_Template, 2, 1, "td", 15);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(19, 17);
    \u0275\u0275template(20, CollegeComponent_th_20_Template, 2, 0, "th", 14)(21, CollegeComponent_td_21_Template, 2, 1, "td", 15);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(22, 18);
    \u0275\u0275template(23, CollegeComponent_th_23_Template, 2, 0, "th", 19)(24, CollegeComponent_td_24_Template, 7, 0, "td", 15);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(25, CollegeComponent_tr_25_Template, 1, 0, "tr", 20)(26, CollegeComponent_tr_26_Template, 1, 0, "tr", 21);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(27, "mat-paginator", 22);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(28, CollegeComponent_ng_template_28_Template, 41, 8, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(30, CollegeComponent_ng_template_30_Template, 22, 4, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(32, CollegeComponent_ng_template_32_Template, 39, 8, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    \u0275\u0275advance(12);
    \u0275\u0275property("dataSource", ctx.dataSource);
    \u0275\u0275advance(13);
    \u0275\u0275property("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("pageSize", 5)("pageSizeOptions", \u0275\u0275pureFunction0(6, _c3));
  }
}, dependencies: [
  FormsModule,
  DefaultValueAccessor,
  NgControlStatus,
  NgModel,
  MatCardModule,
  MatCard,
  MatCardContent,
  MatButtonModule,
  MatButton,
  MatIconButton,
  MatFormFieldModule,
  MatFormField,
  MatLabel,
  MatInputModule,
  MatInput,
  MatTableModule,
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
  MatSortModule,
  MatSort,
  MatSortHeader,
  MatPaginatorModule,
  MatPaginator,
  MatIcon,
  MatDialogModule,
  MatDialogClose,
  MatDialogTitle,
  MatDialogActions,
  MatDialogContent
], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.college-page[_ngcontent-%COMP%] {\n  padding: 0 4px 8px;\n}\n.college-page__card[_ngcontent-%COMP%] {\n  overflow: visible;\n}\n.college-page__content[_ngcontent-%COMP%] {\n  padding-bottom: 8px !important;\n}\n.college-page__header[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n}\n.college-page__search[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 420px;\n}\n.college-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  margin-bottom: 12px;\n}\n.college-page__scroll[_ngcontent-%COMP%] {\n  overflow: visible;\n  border-radius: 8px;\n  border: 1px solid var(--mat-sys-outline-variant, rgba(0, 0, 0, 0.12));\n}\n.college-table[_ngcontent-%COMP%] {\n  width: 100%;\n  table-layout: fixed;\n}\n.college-table[_ngcontent-%COMP%]   .mat-column-collegeAbreviation[_ngcontent-%COMP%] {\n  width: 14%;\n}\n.college-table[_ngcontent-%COMP%]   .mat-column-collegeName[_ngcontent-%COMP%] {\n  width: 28%;\n}\n.college-table[_ngcontent-%COMP%]   .mat-column-collegeAddress[_ngcontent-%COMP%] {\n  width: 48%;\n}\n.college-table[_ngcontent-%COMP%]   .mat-column-actions[_ngcontent-%COMP%] {\n  width: 10%;\n  text-align: right;\n}\n.college-table[_ngcontent-%COMP%]   .mat-mdc-header-cell[_ngcontent-%COMP%], \n.college-table[_ngcontent-%COMP%]   .mat-mdc-cell[_ngcontent-%COMP%], \n.college-table[_ngcontent-%COMP%]   .mat-mdc-footer-cell[_ngcontent-%COMP%] {\n  white-space: normal;\n  word-break: break-word;\n  vertical-align: top;\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n.college-row[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.college-details[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 8px;\n}\n.college-page__paginator[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  margin-top: 8px;\n}\n.college-dialog-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 12px;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n}\n.button-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  margin-top: 16px;\n}\n/*# sourceMappingURL=college.component.css.map */"] });
var CollegeComponent = _CollegeComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CollegeComponent, [{
    type: Component,
    args: [{ selector: "app-college", imports: [
      FormsModule,
      MatCardModule,
      MatButtonModule,
      MatFormFieldModule,
      MatInputModule,
      MatTableModule,
      MatSortModule,
      MatPaginatorModule,
      MatIcon,
      MatDialogModule
    ], template: '<div class="college-page">\r\n  <mat-card class="college-page__card">\r\n    <mat-card-content class="college-page__content">\r\n      <div class="college-page__header">\r\n        <div class="college-toolbar">\r\n          <button mat-flat-button color="primary" type="button" (click)="openAddDialog()">\r\n            Add School\r\n          </button>\r\n        </div>\r\n        <mat-form-field appearance="outline" class="college-page__search">\r\n          <mat-label>Search</mat-label>\r\n          <input matInput (keyup)="applyFilter($event)" placeholder="Filter colleges" />\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div class="college-page__scroll">\r\n        <table mat-table [dataSource]="dataSource" matSort class="mat-elevation-z8 college-table">\r\n          <ng-container matColumnDef="collegeAbreviation">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>College Abbreviation</th>\r\n            <td mat-cell *matCellDef="let element">{{ element.collegeAbreviation }}</td>\r\n          </ng-container>\r\n          <ng-container matColumnDef="collegeName">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>College Name</th>\r\n            <td mat-cell *matCellDef="let element">{{ element.collegeName }}</td>\r\n          </ng-container>\r\n          <ng-container matColumnDef="collegeAddress">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>College Address</th>\r\n            <td mat-cell *matCellDef="let element">{{ element.collegeAddress }}</td>\r\n          </ng-container>\r\n          <ng-container matColumnDef="actions">\r\n            <th mat-header-cell *matHeaderCellDef>Actions</th>\r\n            <td mat-cell *matCellDef="let row">\r\n              <button mat-icon-button color="primary" (click)="$event.stopPropagation(); openEditDialog(row)">\r\n                <mat-icon>drive_file_rename_outline</mat-icon>\r\n              </button>\r\n              <button mat-icon-button color="primary" type="button">\r\n                <mat-icon>delete</mat-icon>\r\n              </button>\r\n            </td>\r\n          </ng-container>\r\n          <tr mat-header-row *matHeaderRowDef="displayedColumns; sticky: true"></tr>\r\n          <tr\r\n            mat-row\r\n            *matRowDef="let row; columns: displayedColumns"\r\n            class="college-row"\r\n            (click)="openDetails(row)"\r\n          ></tr>\r\n        </table>\r\n      </div>\r\n\r\n      <mat-paginator\r\n        class="college-page__paginator"\r\n        [pageSize]="5"\r\n        [pageSizeOptions]="[5, 10, 25]"\r\n        showFirstLastButtons\r\n      ></mat-paginator>\r\n    </mat-card-content>\r\n  </mat-card>\r\n</div>\r\n\r\n<!-- Add School Dialog -->\r\n<ng-template #addDialog>\r\n  <h2 mat-dialog-title>Add School</h2>\r\n  <mat-dialog-content>\r\n    <div class="college-dialog-grid">\r\n      <mat-form-field appearance="outline">\r\n        <mat-label>College Abbreviation</mat-label>\r\n        <input matInput [(ngModel)]="newSchool.collegeAbreviation" />\r\n      </mat-form-field>\r\n      <mat-form-field appearance="outline">\r\n        <mat-label>College Name</mat-label>\r\n        <input matInput [(ngModel)]="newSchool.collegeName" />\r\n      </mat-form-field>\r\n      <mat-form-field appearance="outline">\r\n        <mat-label>College Address</mat-label>\r\n        <input matInput [(ngModel)]="newSchool.collegeAddress" />\r\n      </mat-form-field>\r\n      <mat-form-field appearance="outline">\r\n        <mat-label>Email</mat-label>\r\n        <input matInput [(ngModel)]="newSchool.email" />\r\n      </mat-form-field>\r\n      <mat-form-field appearance="outline">\r\n        <mat-label>Phone</mat-label>\r\n        <input matInput [(ngModel)]="newSchool.phone" />\r\n      </mat-form-field>\r\n      <mat-form-field appearance="outline">\r\n        <mat-label>Website</mat-label>\r\n        <input matInput [(ngModel)]="newSchool.webSite" />\r\n      </mat-form-field>\r\n      <mat-form-field appearance="outline">\r\n        <mat-label>Affiliation No</mat-label>\r\n        <input matInput [(ngModel)]="newSchool.affilicationNo" />\r\n      </mat-form-field>\r\n      <mat-form-field appearance="outline">\r\n        <mat-label>Board</mat-label>\r\n        <input matInput [(ngModel)]="newSchool.board" />\r\n      </mat-form-field>\r\n    </div>\r\n  </mat-dialog-content>\r\n  <mat-dialog-actions align="end">\r\n    <button mat-button mat-dialog-close type="button">Cancel</button>\r\n    <button mat-flat-button color="primary" type="button" (click)="addSchool()">Save</button>\r\n  </mat-dialog-actions>\r\n</ng-template>\r\n\r\n<!-- Edit Dialog -->\r\n<ng-template #editDialog let-data>\r\n  <h2 mat-dialog-title>Edit College</h2>\r\n  <mat-dialog-content>\r\n    <mat-form-field appearance="fill" style="width:100%">\r\n      <mat-label>College Name</mat-label>\r\n      <input matInput [(ngModel)]="data.collegeName" />\r\n    </mat-form-field>\r\n\r\n    <mat-form-field appearance="fill" style="width:100%">\r\n      <mat-label>College Address</mat-label>\r\n      <input matInput [(ngModel)]="data.collegeAddress" />\r\n    </mat-form-field>\r\n\r\n    <mat-form-field appearance="fill" style="width:100%">\r\n      <mat-label>email</mat-label>\r\n      <input matInput [(ngModel)]="data.email" />\r\n    </mat-form-field>\r\n\r\n    <mat-form-field appearance="fill" style="width:100%">\r\n      <mat-label>phone</mat-label>\r\n      <input matInput [(ngModel)]="data.phone" />\r\n    </mat-form-field>\r\n  </mat-dialog-content>\r\n\r\n  <mat-dialog-actions align="end">\r\n    <button mat-button mat-dialog-close>Cancel</button>\r\n  </mat-dialog-actions>\r\n</ng-template>\r\n\r\n<!-- College Details Dialog -->\r\n<ng-template #detailsDialog let-data>\r\n  <h2 mat-dialog-title>College details</h2>\r\n  <mat-dialog-content>\r\n    <div class="college-details">\r\n      <div><strong>Abbreviation:</strong> {{ data.collegeAbreviation }}</div>\r\n      <div><strong>Name:</strong> {{ data.collegeName }}</div>\r\n      <div><strong>Address:</strong> {{ data.collegeAddress }}</div>\r\n      <div><strong>Email:</strong> {{ data.email }}</div>\r\n      <div><strong>Phone:</strong> {{ data.phone }}</div>\r\n      <div><strong>Website:</strong> {{ data.webSite }}</div>\r\n      <div><strong>Affiliation No:</strong> {{ data.affilicationNo }}</div>\r\n      <div><strong>Board:</strong> {{ data.board }}</div>\r\n    </div>\r\n  </mat-dialog-content>\r\n  <mat-dialog-actions align="end">\r\n    <button mat-button mat-dialog-close type="button">Close</button>\r\n  </mat-dialog-actions>\r\n</ng-template>\r\n', styles: ["/* src/app/pages/admin/college/college.component.scss */\n:host {\n  display: block;\n}\n.college-page {\n  padding: 0 4px 8px;\n}\n.college-page__card {\n  overflow: visible;\n}\n.college-page__content {\n  padding-bottom: 8px !important;\n}\n.college-page__header {\n  flex: 0 0 auto;\n}\n.college-page__search {\n  width: 100%;\n  max-width: 420px;\n}\n.college-toolbar {\n  display: flex;\n  justify-content: flex-end;\n  margin-bottom: 12px;\n}\n.college-page__scroll {\n  overflow: visible;\n  border-radius: 8px;\n  border: 1px solid var(--mat-sys-outline-variant, rgba(0, 0, 0, 0.12));\n}\n.college-table {\n  width: 100%;\n  table-layout: fixed;\n}\n.college-table .mat-column-collegeAbreviation {\n  width: 14%;\n}\n.college-table .mat-column-collegeName {\n  width: 28%;\n}\n.college-table .mat-column-collegeAddress {\n  width: 48%;\n}\n.college-table .mat-column-actions {\n  width: 10%;\n  text-align: right;\n}\n.college-table .mat-mdc-header-cell,\n.college-table .mat-mdc-cell,\n.college-table .mat-mdc-footer-cell {\n  white-space: normal;\n  word-break: break-word;\n  vertical-align: top;\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n.college-row {\n  cursor: pointer;\n}\n.college-details {\n  display: grid;\n  gap: 8px;\n}\n.college-page__paginator {\n  flex: 0 0 auto;\n  margin-top: 8px;\n}\n.college-dialog-grid {\n  display: grid;\n  gap: 12px;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n}\n.button-row {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  margin-top: 16px;\n}\n/*# sourceMappingURL=college.component.css.map */\n"] }]
  }], () => [{ type: MatDialog }], { paginator: [{
    type: ViewChild,
    args: [MatPaginator]
  }], sort: [{
    type: ViewChild,
    args: [MatSort]
  }], editDialog: [{
    type: ViewChild,
    args: ["editDialog"]
  }], addDialog: [{
    type: ViewChild,
    args: ["addDialog"]
  }], detailsDialog: [{
    type: ViewChild,
    args: ["detailsDialog"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CollegeComponent, { className: "CollegeComponent", filePath: "src/app/pages/admin/college/college.component.ts", lineNumber: 32 });
})();

// src/app/pages/admin/assign-section/assign-section.component.ts
var _forTrack02 = ($index, $item) => $item.sessionId;
var _forTrack12 = ($index, $item) => $item.collegeId;
var _forTrack2 = ($index, $item) => $item.courseId;
var _forTrack3 = ($index, $item) => $item.sectionId;
function AssignSectionComponent_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const session_r1 = ctx.$implicit;
    \u0275\u0275property("value", session_r1.sessionId);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", session_r1.sessionName, " ");
  }
}
function AssignSectionComponent_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const school_r2 = ctx.$implicit;
    \u0275\u0275property("value", school_r2.collegeId);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", school_r2.collegeAbreviation, " ");
  }
}
function AssignSectionComponent_For_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const class_r3 = ctx.$implicit;
    \u0275\u0275property("value", class_r3.courseId);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", class_r3.courseName, " ");
  }
}
function AssignSectionComponent_For_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const section_r4 = ctx.$implicit;
    \u0275\u0275property("value", section_r4.sectionId);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", section_r4.sectionName, " ");
  }
}
var _AssignSectionComponent = class _AssignSectionComponent {
  constructor(fb, dialog) {
    this.fb = fb;
    this.dialog = dialog;
    this.sessionService = inject(SessionService);
    this.sectionService = inject(SectionService);
    this.collegeService = inject(CollegeService);
  }
  ngOnInit() {
    debugger;
    this.assignSectionForm = this.fb.group({
      sessionId: [null, [Validators.required, Validators.min(1)]],
      collegeId: [null, [Validators.required, Validators.min(1)]],
      courseId: [null, [Validators.required, Validators.min(1)]],
      sectionId: [null, [Validators.required, Validators.min(1)]]
    });
    debugger;
    this.loadSession();
    this.loadCollege();
    this.loadSection();
  }
  loadSection() {
    debugger;
    this.sectionService.getSectionList().subscribe((res) => {
      this.sections = Array.isArray(res.data) ? res.data : [res.data];
    });
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
  getSchoolListById() {
    const sessionIdControl = this.assignSectionForm.get("sessionId");
    const collegeIdControl = this.assignSectionForm.get("collegeId");
    const sessionId = sessionIdControl?.value;
    const collegeId = collegeIdControl?.value;
    if (sessionId == null || collegeId == null) {
      return;
    }
    this.collegeService.getClassListBySessionAndCollege(sessionId, collegeId).subscribe({
      next: (res) => {
        debugger;
        if (res.success && res.data) {
          this.classs = Array.isArray(res.data) ? res.data : [res.data];
        } else {
          debugger;
          alert(res.message);
        }
      },
      error: (err) => {
        debugger;
        console.log("error");
      }
    });
  }
  submitForm() {
    debugger;
    if (this.assignSectionForm.valid) {
      const courseId = this.assignSectionForm.get("courseId")?.value;
      const sectionId = this.assignSectionForm.get("sectionId")?.value;
      const body = [
        {
          courseId: 1,
          sectionId: 1
        }
      ];
      this.sectionService.assignSection(body).subscribe({
        next: (res) => {
          if (res.success && res.data) {
            alert(res.message);
          }
        }
      });
    }
  }
  onCancel() {
    this.assignSectionForm.reset();
  }
};
_AssignSectionComponent.\u0275fac = function AssignSectionComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AssignSectionComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(MatDialog));
};
_AssignSectionComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AssignSectionComponent, selectors: [["app-assign-section"]], decls: 38, vars: 1, consts: [[1, "col-sm-12"], [3, "ngSubmit", "formGroup"], [1, "assign-section-form"], [1, "assign-section-form__grid"], ["appearance", "outline", 1, "w-100"], ["formControlName", "sessionId", 3, "selectionChange"], [3, "value"], ["formControlName", "collegeId", 3, "selectionChange"], ["formControlName", "courseId"], ["formControlName", "sectionId"], [1, "assign-section-form__actions"], ["mat-flat-button", "", "color", "primary", "type", "submit"], ["mat-button", "", "type", "button", 3, "click"]], template: function AssignSectionComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "mat-card")(2, "mat-card-header")(3, "mat-card-title");
    \u0275\u0275text(4, "Assign Section");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "form", 1);
    \u0275\u0275listener("ngSubmit", function AssignSectionComponent_Template_form_ngSubmit_5_listener() {
      return ctx.submitForm();
    });
    \u0275\u0275elementStart(6, "mat-card-content")(7, "div", 2)(8, "div", 3)(9, "mat-form-field", 4)(10, "mat-label");
    \u0275\u0275text(11, "Select Session");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-select", 5);
    \u0275\u0275listener("selectionChange", function AssignSectionComponent_Template_mat_select_selectionChange_12_listener() {
      return ctx.getSchoolListById();
    });
    \u0275\u0275repeaterCreate(13, AssignSectionComponent_For_14_Template, 2, 2, "mat-option", 6, _forTrack02);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "mat-form-field", 4)(16, "mat-label");
    \u0275\u0275text(17, "Select School");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "mat-select", 7);
    \u0275\u0275listener("selectionChange", function AssignSectionComponent_Template_mat_select_selectionChange_18_listener() {
      return ctx.getSchoolListById();
    });
    \u0275\u0275repeaterCreate(19, AssignSectionComponent_For_20_Template, 2, 2, "mat-option", 6, _forTrack12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "mat-form-field", 4)(22, "mat-label");
    \u0275\u0275text(23, "Select Class");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "mat-select", 8);
    \u0275\u0275repeaterCreate(25, AssignSectionComponent_For_26_Template, 2, 2, "mat-option", 6, _forTrack2);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "mat-form-field", 4)(28, "mat-label");
    \u0275\u0275text(29, "Select Sections");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "mat-select", 9);
    \u0275\u0275repeaterCreate(31, AssignSectionComponent_For_32_Template, 2, 2, "mat-option", 6, _forTrack3);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "div", 10)(34, "button", 11);
    \u0275\u0275text(35, "Save");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "button", 12);
    \u0275\u0275listener("click", function AssignSectionComponent_Template_button_click_36_listener() {
      return ctx.onCancel();
    });
    \u0275\u0275text(37, "Cancel");
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275property("formGroup", ctx.assignSectionForm);
    \u0275\u0275advance(8);
    \u0275\u0275repeater(ctx.sessions);
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx.schools);
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx.classs);
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx.sections);
  }
}, dependencies: [
  MatCardTitle,
  MaterialModule,
  MatOption,
  MatButton,
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatFormField,
  MatLabel,
  MatSelect,
  MatCardModule,
  ReactiveFormsModule,
  \u0275NgNoValidate,
  NgControlStatus,
  NgControlStatusGroup,
  FormGroupDirective,
  FormControlName,
  MatColumnResizeCommonModule
], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.assign-section-form[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 12px;\n}\n.assign-section-form__grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 12px;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  align-items: start;\n}\n.assign-section-form__actions[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.w-100[_ngcontent-%COMP%] {\n  width: 100%;\n}\n@media (max-width: 600px) {\n  .assign-section-form__grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=assign-section.component.css.map */"] });
var AssignSectionComponent = _AssignSectionComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssignSectionComponent, [{
    type: Component,
    args: [{ selector: "app-assign-section", imports: [
      MatCardTitle,
      MaterialModule,
      MatCardModule,
      ReactiveFormsModule,
      MatColumnResizeCommonModule
    ], template: '<div class="col-sm-12">\r\n    <mat-card>\r\n        <mat-card-header>\r\n            <mat-card-title>Assign Section</mat-card-title>\r\n        </mat-card-header>\r\n        <form [formGroup]="assignSectionForm" (ngSubmit)="submitForm()">\r\n            <mat-card-content>\r\n                <div class="assign-section-form">\r\n                    <div class="assign-section-form__grid">\r\n                        <mat-form-field appearance="outline" class="w-100">\r\n                            <mat-label>Select Session</mat-label>\r\n                            <mat-select formControlName="sessionId" (selectionChange)="getSchoolListById()">\r\n                                @for (session of sessions; track session.sessionId) {\r\n                                <mat-option [value]="session.sessionId">\r\n                                    {{ session.sessionName }}\r\n                                </mat-option>\r\n                                }\r\n                            </mat-select>\r\n                        </mat-form-field>\r\n\r\n                        <mat-form-field appearance="outline" class="w-100">\r\n                            <mat-label>Select School</mat-label>\r\n                            <mat-select formControlName="collegeId" (selectionChange)="getSchoolListById()">\r\n                                @for (school of schools; track school.collegeId) {\r\n                                <mat-option [value]="school.collegeId">\r\n                                    {{ school.collegeAbreviation }}\r\n                                </mat-option>\r\n                                }\r\n                            </mat-select>\r\n                        </mat-form-field>\r\n\r\n                        <mat-form-field appearance="outline" class="w-100">\r\n                            <mat-label>Select Class</mat-label>\r\n                            <mat-select formControlName="courseId">\r\n                                @for (class of classs; track class.courseId) {\r\n                                <mat-option [value]="class.courseId">\r\n                                    {{ class.courseName }}\r\n                                </mat-option>\r\n                                }\r\n                            </mat-select>\r\n                        </mat-form-field>\r\n\r\n                        <mat-form-field appearance="outline" class="w-100">\r\n                            <mat-label>Select Sections</mat-label>\r\n                            <mat-select formControlName="sectionId">\r\n                                @for (section of sections; track section.sectionId) {\r\n                                <mat-option [value]="section.sectionId">\r\n                                    {{ section.sectionName }}\r\n                                </mat-option>\r\n                                }\r\n                            </mat-select>\r\n                        </mat-form-field>\r\n                    </div>\r\n\r\n                    <div class="assign-section-form__actions">\r\n                        <button mat-flat-button color="primary" type="submit">Save</button>\r\n                        <button mat-button type="button" (click)="onCancel()">Cancel</button>\r\n                    </div>\r\n                </div>\r\n            </mat-card-content>\r\n        </form>\r\n    </mat-card>\r\n</div>\r\n', styles: ["/* src/app/pages/admin/assign-section/assign-section.component.scss */\n:host {\n  display: block;\n}\n.assign-section-form {\n  display: grid;\n  gap: 12px;\n}\n.assign-section-form__grid {\n  display: grid;\n  gap: 12px;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  align-items: start;\n}\n.assign-section-form__actions {\n  margin-top: 8px;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.w-100 {\n  width: 100%;\n}\n@media (max-width: 600px) {\n  .assign-section-form__grid {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=assign-section.component.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: MatDialog }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AssignSectionComponent, { className: "AssignSectionComponent", filePath: "src/app/pages/admin/assign-section/assign-section.component.ts", lineNumber: 28 });
})();

// src/app/pages/admin/assign-class-teacher/assign-class-teacher.component.ts
var _forTrack03 = ($index, $item) => $item.sessionId;
var _forTrack13 = ($index, $item) => $item.collegeId;
var _forTrack22 = ($index, $item) => $item.courseId;
var _forTrack32 = ($index, $item) => $item.sectionId;
function AssignClassTeacherComponent_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const session_r1 = ctx.$implicit;
    \u0275\u0275property("value", session_r1.sessionId);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", session_r1.sessionName, " ");
  }
}
function AssignClassTeacherComponent_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const school_r2 = ctx.$implicit;
    \u0275\u0275property("value", school_r2.collegeId);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", school_r2.collegeAbreviation, " ");
  }
}
function AssignClassTeacherComponent_For_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const class_r3 = ctx.$implicit;
    \u0275\u0275property("value", class_r3.courseId);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", class_r3.courseName, " ");
  }
}
function AssignClassTeacherComponent_For_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const section_r4 = ctx.$implicit;
    \u0275\u0275property("value", section_r4.sectionId);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", section_r4.sectionName, " ");
  }
}
var _AssignClassTeacherComponent = class _AssignClassTeacherComponent {
  constructor(fb, dialog) {
    this.fb = fb;
    this.dialog = dialog;
    this.sessionService = inject(SessionService);
    this.sectionService = inject(SectionService);
    this.collegeService = inject(CollegeService);
  }
  ngOnInit() {
    debugger;
    debugger;
    this.loadSession();
    this.loadCollege();
    this.loadSection();
  }
  loadSection() {
    debugger;
    this.sectionService.getSectionList().subscribe((res) => {
      this.sections = Array.isArray(res.data) ? res.data : [res.data];
    });
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
  getSchoolListById() {
    const sessionIdControl = this.assignSectionForm.get("sessionId");
    const collegeIdControl = this.assignSectionForm.get("collegeId");
    const sessionId = sessionIdControl?.value;
    const collegeId = collegeIdControl?.value;
    if (sessionId == null || collegeId == null) {
      return;
    }
    this.collegeService.getClassListBySessionAndCollege(sessionId, collegeId).subscribe({
      next: (res) => {
        debugger;
        if (res.success && res.data) {
          this.classs = Array.isArray(res.data) ? res.data : [res.data];
        } else {
          debugger;
          alert(res.message);
        }
      },
      error: (err) => {
        debugger;
        console.log("error");
      }
    });
  }
};
_AssignClassTeacherComponent.\u0275fac = function AssignClassTeacherComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AssignClassTeacherComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(MatDialog));
};
_AssignClassTeacherComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AssignClassTeacherComponent, selectors: [["app-assign-class-teacher"]], decls: 38, vars: 1, consts: [[1, "col-sm-12"], [3, "formGroup"], [1, "assign-class-teacher-form"], [1, "assign-class-teacher-form__grid"], ["appearance", "outline", 1, "w-100"], ["formControlName", "sessionId", 3, "selectionChange"], [3, "value"], ["formControlName", "collegeId", 3, "selectionChange"], ["formControlName", "courseId"], ["formControlName", "sectionId"], [1, "assign-class-teacher-form__actions"], ["mat-flat-button", "", "color", "primary", "type", "submit"], ["mat-button", "", "type", "button"]], template: function AssignClassTeacherComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "mat-card")(2, "mat-card-header")(3, "mat-card-title");
    \u0275\u0275text(4, "Assign Class Teacher");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "form", 1)(6, "mat-card-content")(7, "div", 2)(8, "div", 3)(9, "mat-form-field", 4)(10, "mat-label");
    \u0275\u0275text(11, "Select Session");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-select", 5);
    \u0275\u0275listener("selectionChange", function AssignClassTeacherComponent_Template_mat_select_selectionChange_12_listener() {
      return ctx.getSchoolListById();
    });
    \u0275\u0275repeaterCreate(13, AssignClassTeacherComponent_For_14_Template, 2, 2, "mat-option", 6, _forTrack03);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "mat-form-field", 4)(16, "mat-label");
    \u0275\u0275text(17, "Select School");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "mat-select", 7);
    \u0275\u0275listener("selectionChange", function AssignClassTeacherComponent_Template_mat_select_selectionChange_18_listener() {
      return ctx.getSchoolListById();
    });
    \u0275\u0275repeaterCreate(19, AssignClassTeacherComponent_For_20_Template, 2, 2, "mat-option", 6, _forTrack13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "mat-form-field", 4)(22, "mat-label");
    \u0275\u0275text(23, "Select Class");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "mat-select", 8);
    \u0275\u0275repeaterCreate(25, AssignClassTeacherComponent_For_26_Template, 2, 2, "mat-option", 6, _forTrack22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "mat-form-field", 4)(28, "mat-label");
    \u0275\u0275text(29, "Select Sections");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "mat-select", 9);
    \u0275\u0275repeaterCreate(31, AssignClassTeacherComponent_For_32_Template, 2, 2, "mat-option", 6, _forTrack32);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "div", 10)(34, "button", 11);
    \u0275\u0275text(35, "Save");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "button", 12);
    \u0275\u0275text(37, "Cancel");
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275property("formGroup", ctx.assignSectionForm);
    \u0275\u0275advance(8);
    \u0275\u0275repeater(ctx.sessions);
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx.schools);
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx.classs);
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx.sections);
  }
}, dependencies: [
  MatCardTitle,
  MaterialModule,
  MatOption,
  MatButton,
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatFormField,
  MatLabel,
  MatSelect,
  MatCardModule,
  ReactiveFormsModule,
  \u0275NgNoValidate,
  NgControlStatus,
  NgControlStatusGroup,
  FormGroupDirective,
  FormControlName,
  MatColumnResizeCommonModule
], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.assign-class-teacher-form[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 12px;\n}\n.assign-class-teacher-form__grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 12px;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  align-items: start;\n}\n.assign-class-teacher-form__actions[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.w-100[_ngcontent-%COMP%] {\n  width: 100%;\n}\n@media (max-width: 600px) {\n  .assign-class-teacher-form__grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=assign-class-teacher.component.css.map */"] });
var AssignClassTeacherComponent = _AssignClassTeacherComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssignClassTeacherComponent, [{
    type: Component,
    args: [{ selector: "app-assign-class-teacher", imports: [
      MatCardTitle,
      MaterialModule,
      MatCardModule,
      ReactiveFormsModule,
      MatColumnResizeCommonModule
    ], template: '<div class="col-sm-12">\r\n    <mat-card>\r\n        <mat-card-header>\r\n            <mat-card-title>Assign Class Teacher</mat-card-title>\r\n        </mat-card-header>\r\n        <form [formGroup]="assignSectionForm">\r\n            <mat-card-content>\r\n                <div class="assign-class-teacher-form">\r\n                    <div class="assign-class-teacher-form__grid">\r\n                        <mat-form-field appearance="outline" class="w-100">\r\n                            <mat-label>Select Session</mat-label>\r\n                            <mat-select formControlName="sessionId" (selectionChange)="getSchoolListById()">\r\n                                @for (session of sessions; track session.sessionId) {\r\n                                <mat-option [value]="session.sessionId">\r\n                                    {{ session.sessionName }}\r\n                                </mat-option>\r\n                                }\r\n                            </mat-select>\r\n                        </mat-form-field>\r\n\r\n                        <mat-form-field appearance="outline" class="w-100">\r\n                            <mat-label>Select School</mat-label>\r\n                            <mat-select formControlName="collegeId" (selectionChange)="getSchoolListById()">\r\n                                @for (school of schools; track school.collegeId) {\r\n                                <mat-option [value]="school.collegeId">\r\n                                    {{ school.collegeAbreviation }}\r\n                                </mat-option>\r\n                                }\r\n                            </mat-select>\r\n                        </mat-form-field>\r\n\r\n                        <mat-form-field appearance="outline" class="w-100">\r\n                            <mat-label>Select Class</mat-label>\r\n                            <mat-select formControlName="courseId">\r\n                                @for (class of classs; track class.courseId) {\r\n                                <mat-option [value]="class.courseId">\r\n                                    {{ class.courseName }}\r\n                                </mat-option>\r\n                                }\r\n                            </mat-select>\r\n                        </mat-form-field>\r\n\r\n                        <mat-form-field appearance="outline" class="w-100">\r\n                            <mat-label>Select Sections</mat-label>\r\n                            <mat-select formControlName="sectionId">\r\n                                @for (section of sections; track section.sectionId) {\r\n                                <mat-option [value]="section.sectionId">\r\n                                    {{ section.sectionName }}\r\n                                </mat-option>\r\n                                }\r\n                            </mat-select>\r\n                        </mat-form-field>\r\n                    </div>\r\n\r\n                    <div class="assign-class-teacher-form__actions">\r\n                        <button mat-flat-button color="primary" type="submit">Save</button>\r\n                        <button mat-button type="button">Cancel</button>\r\n                    </div>\r\n                </div>\r\n            </mat-card-content>\r\n        </form>\r\n    </mat-card>\r\n</div>\r\n', styles: ["/* src/app/pages/admin/assign-class-teacher/assign-class-teacher.component.scss */\n:host {\n  display: block;\n}\n.assign-class-teacher-form {\n  display: grid;\n  gap: 12px;\n}\n.assign-class-teacher-form__grid {\n  display: grid;\n  gap: 12px;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  align-items: start;\n}\n.assign-class-teacher-form__actions {\n  margin-top: 8px;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.w-100 {\n  width: 100%;\n}\n@media (max-width: 600px) {\n  .assign-class-teacher-form__grid {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=assign-class-teacher.component.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: MatDialog }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AssignClassTeacherComponent, { className: "AssignClassTeacherComponent", filePath: "src/app/pages/admin/assign-class-teacher/assign-class-teacher.component.ts", lineNumber: 27 });
})();

// src/app/pages/admin/college-section/college-section.component.ts
var _CollegeSectionComponent = class _CollegeSectionComponent {
};
_CollegeSectionComponent.\u0275fac = function CollegeSectionComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CollegeSectionComponent)();
};
_CollegeSectionComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CollegeSectionComponent, selectors: [["app-college-section"]], decls: 14, vars: 0, consts: [["mat-stretch-tabs", "", "dynamicHeight", ""], ["label", "Class"], ["label", "Section"], ["label", "Assign Section"], ["label", "Assign Teacher"]], template: function CollegeSectionComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-card")(1, "mat-card-header")(2, "mat-card-title");
    \u0275\u0275text(3, "Class & Section");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "mat-card-content")(5, "mat-tab-group", 0)(6, "mat-tab", 1);
    \u0275\u0275element(7, "app-classmaster");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "mat-tab", 2);
    \u0275\u0275element(9, "app-section");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "mat-tab", 3);
    \u0275\u0275element(11, "app-assign-section");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-tab", 4);
    \u0275\u0275element(13, "app-assign-class-teacher");
    \u0275\u0275elementEnd()()()();
  }
}, dependencies: [
  MatTabsModule,
  MatTab,
  MatTabGroup,
  MatCardModule,
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardTitle,
  SectionComponent,
  ClassmasterComponent,
  AssignSectionComponent,
  AssignClassTeacherComponent
], styles: ["\n\n  .mat-mdc-tab-label-container {\n  background-color: #f8f9fa;\n}\n  .mat-mdc-tab-labels .mat-mdc-tab-label-active {\n  color: #1976d2 !important;\n  font-weight: 600;\n  border-bottom: 3px solid #1976d2;\n}\n/*# sourceMappingURL=college-section.component.css.map */"] });
var CollegeSectionComponent = _CollegeSectionComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CollegeSectionComponent, [{
    type: Component,
    args: [{ selector: "app-college-section", imports: [
      MatTabsModule,
      MatCardModule,
      SectionComponent,
      ClassmasterComponent,
      AssignSectionComponent,
      AssignClassTeacherComponent
    ], template: '<mat-card>\r\n  <mat-card-header>\r\n    <mat-card-title>Class & Section</mat-card-title>\r\n  </mat-card-header>\r\n\r\n  <mat-card-content>\r\n    <mat-tab-group mat-stretch-tabs dynamicHeight>\r\n      <mat-tab label="Class">\r\n        <app-classmaster></app-classmaster>\r\n      </mat-tab>\r\n\r\n      <mat-tab label="Section">\r\n        <app-section></app-section>\r\n      </mat-tab>\r\n      <mat-tab label="Assign Section">\r\n        <app-assign-section></app-assign-section>\r\n      </mat-tab>\r\n      <mat-tab label="Assign Teacher">\r\n        <app-assign-class-teacher></app-assign-class-teacher>\r\n      </mat-tab>\r\n\r\n      <!-- <mat-tab label="College">\r\n        <app-college></app-college>\r\n      </mat-tab>\r\n\r\n      <mat-tab label="Designation">\r\n        <app-designation></app-designation>\r\n      </mat-tab> -->\r\n    </mat-tab-group>\r\n  </mat-card-content>\r\n</mat-card>', styles: ["/* src/app/pages/admin/college-section/college-section.component.scss */\n::ng-deep .mat-mdc-tab-label-container {\n  background-color: #f8f9fa;\n}\n::ng-deep .mat-mdc-tab-labels .mat-mdc-tab-label-active {\n  color: #1976d2 !important;\n  font-weight: 600;\n  border-bottom: 3px solid #1976d2;\n}\n/*# sourceMappingURL=college-section.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CollegeSectionComponent, { className: "CollegeSectionComponent", filePath: "src/app/pages/admin/college-section/college-section.component.ts", lineNumber: 22 });
})();

// src/app/services/smsapi.service.ts
var _SmsapiService = class _SmsapiService {
  constructor() {
    this.http = inject(HttpClient);
    this.endpoint = apiEndpoint;
  }
  GetSmsListByCollegeId(collegeid) {
    return this.http.get(this.endpoint.SMSAPI.listByCollegeId + collegeid);
  }
  addSMSAPI(body) {
    return this.http.post(this.endpoint.SMSAPI.add, body);
  }
  updateSMSAPI(body) {
    return this.http.post(this.endpoint.SMSAPI.update, body);
  }
  deleteSMSAPI(id) {
    return this.http.post(`${this.endpoint.SMSAPI.delete}`, id);
  }
};
_SmsapiService.\u0275fac = function SmsapiService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SmsapiService)();
};
_SmsapiService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SmsapiService, factory: _SmsapiService.\u0275fac, providedIn: "root" });
var SmsapiService = _SmsapiService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SmsapiService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/pages/admin/smsapi/smsapi.component.ts
var _c06 = ["editDialog"];
var _c16 = () => [5, 10, 25];
var _forTrack04 = ($index, $item) => $item.collegeId;
function SmsapiComponent_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const school_r2 = ctx.$implicit;
    \u0275\u0275property("value", school_r2.collegeId);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", school_r2.collegeAbreviation, " ");
  }
}
function SmsapiComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Sender is required");
    \u0275\u0275elementEnd();
  }
}
function SmsapiComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "User name is required");
    \u0275\u0275elementEnd();
  }
}
function SmsapiComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Password is required");
    \u0275\u0275elementEnd();
  }
}
function SmsapiComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Provider is required");
    \u0275\u0275elementEnd();
  }
}
function SmsapiComponent_th_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "th", 35)(1, "mat-checkbox", 36);
    \u0275\u0275listener("change", function SmsapiComponent_th_52_Template_mat_checkbox_change_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView($event ? ctx_r3.masterToggle() : null);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r3.isAllSelected())("indeterminate", ctx_r3.isPartialSelected());
  }
}
function SmsapiComponent_td_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 37)(1, "mat-checkbox", 38);
    \u0275\u0275listener("click", function SmsapiComponent_td_53_Template_mat_checkbox_click_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      return \u0275\u0275resetView($event.stopPropagation());
    })("change", function SmsapiComponent_td_53_Template_mat_checkbox_change_1_listener($event) {
      const row_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView($event ? ctx_r3.toggleSelection(row_r6) : null);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r6 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r3.smsapiList.includes(row_r6));
  }
}
function SmsapiComponent_th_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 39);
    \u0275\u0275text(1, "School Name");
    \u0275\u0275elementEnd();
  }
}
function SmsapiComponent_td_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r7.collegeId);
  }
}
function SmsapiComponent_th_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 39);
    \u0275\u0275text(1, "Sender");
    \u0275\u0275elementEnd();
  }
}
function SmsapiComponent_td_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r8.apI_SenderId);
  }
}
function SmsapiComponent_th_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 39);
    \u0275\u0275text(1, "User Name");
    \u0275\u0275elementEnd();
  }
}
function SmsapiComponent_td_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r9 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r9.api_UserName);
  }
}
function SmsapiComponent_th_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 39);
    \u0275\u0275text(1, "Password");
    \u0275\u0275elementEnd();
  }
}
function SmsapiComponent_td_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r10 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r10.api_Password);
  }
}
function SmsapiComponent_th_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 39);
    \u0275\u0275text(1, "Status");
    \u0275\u0275elementEnd();
  }
}
function SmsapiComponent_td_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r11 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r11.apI_Status);
  }
}
function SmsapiComponent_th_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 35);
    \u0275\u0275text(1, "Actions");
    \u0275\u0275elementEnd();
  }
}
function SmsapiComponent_td_71_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 37)(1, "button", 40);
    \u0275\u0275listener("click", function SmsapiComponent_td_71_Template_button_click_1_listener() {
      const row_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.openEditDialog(row_r13));
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "drive_file_rename_outline");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 40);
    \u0275\u0275listener("click", function SmsapiComponent_td_71_Template_button_click_4_listener() {
      const row_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.SMSAPIDelete(row_r13));
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "delete");
    \u0275\u0275elementEnd()()();
  }
}
function SmsapiComponent_tr_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 41);
  }
}
function SmsapiComponent_tr_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 42);
  }
}
function SmsapiComponent_ng_template_75_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const school_r16 = ctx.$implicit;
    \u0275\u0275property("value", school_r16.collegeId);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", school_r16.collegeAbreviation, " ");
  }
}
function SmsapiComponent_ng_template_75_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "h2", 43);
    \u0275\u0275text(1, "Edit SMS API");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "mat-dialog-content")(3, "form", 9, 1)(5, "mat-form-field", 44)(6, "mat-label");
    \u0275\u0275text(7, "Select Session");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "mat-select", 45);
    \u0275\u0275twoWayListener("ngModelChange", function SmsapiComponent_ng_template_75_Template_mat_select_ngModelChange_8_listener($event) {
      const data_r15 = \u0275\u0275restoreView(_r14).$implicit;
      \u0275\u0275twoWayBindingSet(data_r15.collegeId, $event) || (data_r15.collegeId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(9, SmsapiComponent_ng_template_75_For_10_Template, 2, 2, "mat-option", 8, _forTrack04);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "mat-form-field", 44)(12, "mat-label");
    \u0275\u0275text(13, "Sender");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "input", 46);
    \u0275\u0275twoWayListener("ngModelChange", function SmsapiComponent_ng_template_75_Template_input_ngModelChange_14_listener($event) {
      const data_r15 = \u0275\u0275restoreView(_r14).$implicit;
      \u0275\u0275twoWayBindingSet(data_r15.apI_SenderId, $event) || (data_r15.apI_SenderId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "mat-form-field", 44)(16, "mat-label");
    \u0275\u0275text(17, "User Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "input", 47);
    \u0275\u0275twoWayListener("ngModelChange", function SmsapiComponent_ng_template_75_Template_input_ngModelChange_18_listener($event) {
      const data_r15 = \u0275\u0275restoreView(_r14).$implicit;
      \u0275\u0275twoWayBindingSet(data_r15.api_UserName, $event) || (data_r15.api_UserName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "mat-form-field", 44)(20, "mat-label");
    \u0275\u0275text(21, "Password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "input", 48);
    \u0275\u0275twoWayListener("ngModelChange", function SmsapiComponent_ng_template_75_Template_input_ngModelChange_22_listener($event) {
      const data_r15 = \u0275\u0275restoreView(_r14).$implicit;
      \u0275\u0275twoWayBindingSet(data_r15.api_Password, $event) || (data_r15.api_Password = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "mat-form-field", 44)(24, "mat-label");
    \u0275\u0275text(25, "Provider");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "input", 49);
    \u0275\u0275twoWayListener("ngModelChange", function SmsapiComponent_ng_template_75_Template_input_ngModelChange_26_listener($event) {
      const data_r15 = \u0275\u0275restoreView(_r14).$implicit;
      \u0275\u0275twoWayBindingSet(data_r15.apI_Provider, $event) || (data_r15.apI_Provider = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "mat-slide-toggle", 50);
    \u0275\u0275twoWayListener("ngModelChange", function SmsapiComponent_ng_template_75_Template_mat_slide_toggle_ngModelChange_27_listener($event) {
      const data_r15 = \u0275\u0275restoreView(_r14).$implicit;
      \u0275\u0275twoWayBindingSet(data_r15.apI_Status, $event) || (data_r15.apI_Status = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275text(28, "API Status ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "mat-dialog-actions", 51)(30, "button", 52);
    \u0275\u0275text(31, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "button", 53);
    \u0275\u0275text(33, "Update");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const data_r15 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", data_r15.collegeId);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.schoolList);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", data_r15.apI_SenderId);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", data_r15.api_UserName);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", data_r15.api_Password);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", data_r15.apI_Provider);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", data_r15.apI_Status);
    \u0275\u0275property("checked", data_r15.apI_Status === 1);
    \u0275\u0275advance(5);
    \u0275\u0275property("mat-dialog-close", data_r15);
  }
}
var _SmsapiComponent = class _SmsapiComponent {
  constructor(fb, dialog) {
    this.fb = fb;
    this.dialog = dialog;
    this._smsAPIService = inject(SmsapiService);
    this._colloegeService = inject(CollegeService);
    this.dataSource = new MatTableDataSource([]);
    this.displayedColumns = ["select", "school", "sender", "usename", "password", "status", "actions"];
    this.smsapiList = [];
    this.schoolList = [];
  }
  ngOnInit() {
    this.smsForm = this.fb.group({
      collegeId: [null, [Validators.required, Validators.min(1)]],
      apI_SenderId: [null, [Validators.required]],
      api_UserName: [null, [Validators.required, Validators.minLength(3)]],
      api_Password: [null, [Validators.required, Validators.minLength(6)]],
      apI_Status: [false],
      apI_Provider: [null, [Validators.required, Validators.minLength(1)]]
    });
    this.loadCollege();
  }
  loadCollege() {
    this._colloegeService.getCollegeList().subscribe((res) => {
      this.schoolList = Array.isArray(res.data) ? res.data : [res.data];
    });
  }
  getSMSApiList() {
    const collegeId = this.smsForm.get("collegeId")?.value;
    if (!collegeId) {
      return;
    }
    this._smsAPIService.GetSmsListByCollegeId(collegeId).subscribe({
      next: (res) => {
        if (res.success) {
          this.dataSource.data = Array.isArray(res.data) ? res.data : [res.data];
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
      }
    });
  }
  addSMSAPI() {
    debugger;
    if (this.smsForm.valid) {
      const formValue = __spreadValues({}, this.smsForm.value);
      formValue.apI_Status = formValue.apI_Status ? 1 : 0;
      this._smsAPIService.addSMSAPI(formValue).subscribe({
        next: (res) => {
          if (res.success) {
            alert(res.message);
            this.getSMSApiList();
          } else {
            alert(res.message);
          }
        },
        error: (err) => {
          console.log("error", err);
          alert("An error occurred while adding the class");
        }
      });
    } else {
      console.log("Form is invalid:", this.smsForm);
      this.smsForm.markAllAsTouched();
    }
  }
  // listing
  openEditDialog(smsapi) {
    const dialogRef = this.dialog.open(this.editDialog, {
      width: "400px",
      data: __spreadValues({}, smsapi)
    });
    debugger;
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        debugger;
        console.log("Dialog result:", result);
        result.apI_Status = result.apI_Status ? 1 : 0;
        this._smsAPIService.updateSMSAPI(result).subscribe({
          next: (res) => {
            if (res.success) {
              alert(res.message);
              this.getSMSApiList();
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
    if (this.smsapiList.includes(row)) {
      this.smsapiList = this.smsapiList.filter((r) => r !== row);
    } else {
      this.smsapiList.push(row);
    }
  }
  isAllSelected() {
    return this.smsapiList.length === this.dataSource.data.length;
  }
  isPartialSelected() {
    return this.smsapiList.length > 0 && !this.isAllSelected();
  }
  masterToggle() {
    if (this.isAllSelected()) {
      this.smsapiList = [];
    } else {
      this.smsapiList = [...this.dataSource.data];
    }
  }
  SMSAPIDelete(smsAPI) {
    debugger;
    const id = smsAPI.id;
    this._smsAPIService.deleteSMSAPI(id).subscribe({
      next: (res) => {
        if (res.success) {
          alert(res.message);
          this.getSMSApiList();
        } else {
          alert(res.message);
        }
      },
      error: (err) => {
        console.log("error", err);
        alert("Something went wrong!");
      }
    });
  }
};
_SmsapiComponent.\u0275fac = function SmsapiComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SmsapiComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(MatDialog));
};
_SmsapiComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SmsapiComponent, selectors: [["app-smsapi"]], viewQuery: function SmsapiComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(MatPaginator, 5);
    \u0275\u0275viewQuery(MatSort, 5);
    \u0275\u0275viewQuery(_c06, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.paginator = _t.first);
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.sort = _t.first);
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.editDialog = _t.first);
  }
}, decls: 77, vars: 11, consts: [["editDialog", ""], ["editClassForm", "ngForm"], [1, "col-sm-12"], [3, "ngSubmit", "formGroup"], [1, "smsapi-form"], [1, "smsapi-form__grid"], ["appearance", "outline", 1, "w-100"], ["formControlName", "collegeId", 3, "selectionChange"], [3, "value"], [1, "w-100"], ["matInput", "", "formControlName", "apI_SenderId", "placeholder", "Please enter sender"], ["matInput", "", "formControlName", "api_UserName", "placeholder", "Enter user name"], ["matInput", "", "formControlName", "api_Password", "placeholder", "Please enter password"], [1, "smsapi-form__grid", "smsapi-form__grid--full"], ["matInput", "", "formControlName", "apI_Provider", "placeholder", "Please enter SMS API provider details"], ["color", "primary", "formControlName", "apI_Status"], [1, "smsapi-form__actions"], ["mat-flat-button", "", "color", "primary", "type", "submit"], ["appearance", "outline"], ["matInput", "", "placeholder", "Filter class", 3, "keyup"], [1, "smsapi-table__wrap"], ["mat-table", "", "matSort", "", 1, "mat-elevation-z8", "smsapi-table", 3, "dataSource"], ["matColumnDef", "select"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "school"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["matColumnDef", "sender"], ["matColumnDef", "usename"], ["matColumnDef", "password"], ["matColumnDef", "status"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSize", "pageSizeOptions"], ["mat-header-cell", ""], [3, "change", "checked", "indeterminate"], ["mat-cell", ""], [3, "click", "change", "checked"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-icon-button", "", "color", "primary", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], ["mat-dialog-title", ""], ["appearance", "fill", 2, "width", "100%"], ["name", "collegeId", "required", "", 3, "ngModelChange", "ngModel"], ["matInput", "", "name", "apI_SenderId", "required", "", "min", "1", 3, "ngModelChange", "ngModel"], ["matInput", "", "name", "api_UserName", "required", "", "minlength", "3", "maxlength", "50", 3, "ngModelChange", "ngModel"], ["matInput", "", "name", "api_Password", "required", "", "minlength", "3", "maxlength", "50", 3, "ngModelChange", "ngModel"], ["matInput", "", "name", "apI_Provider", "required", "", "minlength", "3", "maxlength", "50", 3, "ngModelChange", "ngModel"], ["name", "apI_Status", 3, "ngModelChange", "ngModel", "checked"], ["align", "end"], ["mat-button", "", "mat-dialog-close", ""], ["mat-raised-button", "", "color", "primary", 3, "mat-dialog-close"]], template: function SmsapiComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "mat-card")(2, "mat-card-header")(3, "mat-card-title");
    \u0275\u0275text(4, "Add SMS API");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "form", 3);
    \u0275\u0275listener("ngSubmit", function SmsapiComponent_Template_form_ngSubmit_5_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.addSMSAPI());
    });
    \u0275\u0275elementStart(6, "mat-card-content")(7, "div", 4)(8, "div", 5)(9, "mat-form-field", 6)(10, "mat-label");
    \u0275\u0275text(11, "Select School");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-select", 7);
    \u0275\u0275listener("selectionChange", function SmsapiComponent_Template_mat_select_selectionChange_12_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.getSMSApiList());
    });
    \u0275\u0275repeaterCreate(13, SmsapiComponent_For_14_Template, 2, 2, "mat-option", 8, _forTrack04);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "mat-form-field", 9)(16, "mat-label");
    \u0275\u0275text(17, "Sender");
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "input", 10);
    \u0275\u0275conditionalCreate(19, SmsapiComponent_Conditional_19_Template, 2, 0, "mat-error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "mat-form-field", 9)(21, "mat-label");
    \u0275\u0275text(22, "User Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "input", 11);
    \u0275\u0275conditionalCreate(24, SmsapiComponent_Conditional_24_Template, 2, 0, "mat-error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "mat-form-field", 9)(26, "mat-label");
    \u0275\u0275text(27, "Password");
    \u0275\u0275elementEnd();
    \u0275\u0275element(28, "input", 12);
    \u0275\u0275conditionalCreate(29, SmsapiComponent_Conditional_29_Template, 2, 0, "mat-error");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 13)(31, "mat-form-field", 9)(32, "mat-label");
    \u0275\u0275text(33, "SMS API Provider");
    \u0275\u0275elementEnd();
    \u0275\u0275element(34, "textarea", 14);
    \u0275\u0275conditionalCreate(35, SmsapiComponent_Conditional_35_Template, 2, 0, "mat-error");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 13)(37, "mat-slide-toggle", 15);
    \u0275\u0275text(38, " Active ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 16)(40, "button", 17);
    \u0275\u0275text(41, "Save");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(42, "div", 2)(43, "mat-card")(44, "mat-card-content")(45, "mat-form-field", 18)(46, "mat-label");
    \u0275\u0275text(47, "Search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "input", 19);
    \u0275\u0275listener("keyup", function SmsapiComponent_Template_input_keyup_48_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.applyFilter($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "div", 20)(50, "table", 21);
    \u0275\u0275elementContainerStart(51, 22);
    \u0275\u0275template(52, SmsapiComponent_th_52_Template, 2, 2, "th", 23)(53, SmsapiComponent_td_53_Template, 2, 1, "td", 24);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(54, 25);
    \u0275\u0275template(55, SmsapiComponent_th_55_Template, 2, 0, "th", 26)(56, SmsapiComponent_td_56_Template, 2, 1, "td", 24);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(57, 27);
    \u0275\u0275template(58, SmsapiComponent_th_58_Template, 2, 0, "th", 26)(59, SmsapiComponent_td_59_Template, 2, 1, "td", 24);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(60, 28);
    \u0275\u0275template(61, SmsapiComponent_th_61_Template, 2, 0, "th", 26)(62, SmsapiComponent_td_62_Template, 2, 1, "td", 24);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(63, 29);
    \u0275\u0275template(64, SmsapiComponent_th_64_Template, 2, 0, "th", 26)(65, SmsapiComponent_td_65_Template, 2, 1, "td", 24);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(66, 30);
    \u0275\u0275template(67, SmsapiComponent_th_67_Template, 2, 0, "th", 26)(68, SmsapiComponent_td_68_Template, 2, 1, "td", 24);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(69, 31);
    \u0275\u0275template(70, SmsapiComponent_th_70_Template, 2, 0, "th", 23)(71, SmsapiComponent_td_71_Template, 7, 0, "td", 24);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(72, SmsapiComponent_tr_72_Template, 1, 0, "tr", 32)(73, SmsapiComponent_tr_73_Template, 1, 0, "tr", 33);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(74, "mat-paginator", 34);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(75, SmsapiComponent_ng_template_75_Template, 34, 8, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    \u0275\u0275advance(5);
    \u0275\u0275property("formGroup", ctx.smsForm);
    \u0275\u0275advance(8);
    \u0275\u0275repeater(ctx.schoolList);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(((tmp_3_0 = ctx.smsForm.get("apI_SenderId")) == null ? null : tmp_3_0.hasError("required")) && ((tmp_3_0 = ctx.smsForm.get("apI_SenderId")) == null ? null : tmp_3_0.touched) ? 19 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(((tmp_4_0 = ctx.smsForm.get("api_UserName")) == null ? null : tmp_4_0.hasError("required")) && ((tmp_4_0 = ctx.smsForm.get("api_UserName")) == null ? null : tmp_4_0.touched) ? 24 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(((tmp_5_0 = ctx.smsForm.get("api_Password")) == null ? null : tmp_5_0.hasError("required")) && ((tmp_5_0 = ctx.smsForm.get("api_Password")) == null ? null : tmp_5_0.touched) ? 29 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(((tmp_6_0 = ctx.smsForm.get("apI_Provider")) == null ? null : tmp_6_0.hasError("required")) && ((tmp_6_0 = ctx.smsForm.get("apI_Provider")) == null ? null : tmp_6_0.touched) ? 35 : -1);
    \u0275\u0275advance(15);
    \u0275\u0275property("dataSource", ctx.dataSource);
    \u0275\u0275advance(22);
    \u0275\u0275property("matHeaderRowDef", ctx.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("pageSize", 5)("pageSizeOptions", \u0275\u0275pureFunction0(10, _c16));
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
  MatCheckbox,
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
  MaxLengthValidator,
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
], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.smsapi-form[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 12px;\n}\n.smsapi-form__grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 12px;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  align-items: start;\n}\n.smsapi-form__grid--full[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr;\n}\n.smsapi-form__actions[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  display: flex;\n  justify-content: center;\n}\n.w-100[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.smsapi-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.smsapi-table__wrap[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow-x: auto;\n}\ntextarea[matInput][_ngcontent-%COMP%] {\n  min-height: 96px;\n  resize: vertical;\n}\n/*# sourceMappingURL=smsapi.component.css.map */"] });
var SmsapiComponent = _SmsapiComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SmsapiComponent, [{
    type: Component,
    args: [{ selector: "app-smsapi", imports: [
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
            <mat-card-title>Add SMS API</mat-card-title>\r
        </mat-card-header>\r
\r
        <form [formGroup]="smsForm" (ngSubmit)="addSMSAPI()">\r
            <mat-card-content>\r
                <div class="smsapi-form">\r
                    <div class="smsapi-form__grid">\r
                        <mat-form-field appearance="outline" class="w-100">\r
                            <mat-label>Select School</mat-label>\r
                            <mat-select formControlName="collegeId" (selectionChange)="getSMSApiList()">\r
                                @for (school of schoolList; track school.collegeId) {\r
                                <mat-option [value]="school.collegeId">\r
                                    {{ school.collegeAbreviation}}\r
                                </mat-option>\r
                                }\r
                            </mat-select>\r
                        </mat-form-field>\r
\r
                        <mat-form-field class="w-100">\r
                            <mat-label>Sender</mat-label>\r
                            <input matInput formControlName="apI_SenderId" placeholder="Please enter sender" />\r
                            @if (smsForm.get('apI_SenderId')?.hasError('required') && smsForm.get('apI_SenderId')?.touched) {\r
                            <mat-error>Sender is required</mat-error>\r
                            }\r
                        </mat-form-field>\r
\r
                        <mat-form-field class="w-100">\r
                            <mat-label>User Name</mat-label>\r
                            <input matInput formControlName="api_UserName" placeholder="Enter user name" />\r
                            @if(smsForm.get('api_UserName')?.hasError('required')&& smsForm.get('api_UserName')?.touched){\r
                            <mat-error>User name is required</mat-error>\r
                            }\r
                        </mat-form-field>\r
\r
                        <mat-form-field class="w-100">\r
                            <mat-label>Password</mat-label>\r
                            <input matInput formControlName="api_Password" placeholder="Please enter password" />\r
                            @if (smsForm.get('api_Password')?.hasError('required') && smsForm.get('api_Password')?.touched) {\r
                            <mat-error>Password is required</mat-error>\r
                            }\r
                        </mat-form-field>\r
                    </div>\r
\r
                    <div class="smsapi-form__grid smsapi-form__grid--full">\r
                        <mat-form-field class="w-100">\r
                            <mat-label>SMS API Provider</mat-label>\r
                            <textarea matInput formControlName="apI_Provider"\r
                                placeholder="Please enter SMS API provider details"></textarea>\r
                            @if (smsForm.get('apI_Provider')?.hasError('required') && smsForm.get('apI_Provider')?.touched) {\r
                            <mat-error>Provider is required</mat-error>\r
                            }\r
                        </mat-form-field>\r
                    </div>\r
\r
                    <div class="smsapi-form__grid smsapi-form__grid--full">\r
                        <mat-slide-toggle color="primary" formControlName="apI_Status">\r
                            Active\r
                        </mat-slide-toggle>\r
                    </div>\r
\r
                    <div class="smsapi-form__actions">\r
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
            <div class="smsapi-table__wrap">\r
                <table mat-table [dataSource]="dataSource" matSort class="mat-elevation-z8 smsapi-table">\r
                    <ng-container matColumnDef="select">\r
                        <th mat-header-cell *matHeaderCellDef>\r
                            <mat-checkbox (change)="$event ? masterToggle() : null" [checked]="isAllSelected()"\r
                                [indeterminate]="isPartialSelected()">\r
                            </mat-checkbox>\r
                        </th>\r
                        <td mat-cell *matCellDef="let row">\r
                            <mat-checkbox (click)="$event.stopPropagation()" (change)="$event ? toggleSelection(row) : null"\r
                                [checked]="smsapiList.includes(row)">\r
                            </mat-checkbox>\r
                        </td>\r
                    </ng-container>\r
                    <ng-container matColumnDef="school">\r
                        <th mat-header-cell *matHeaderCellDef mat-sort-header>School Name</th>\r
                        <td mat-cell *matCellDef="let element">{{ element.collegeId }}</td>\r
                    </ng-container>\r
                    <ng-container matColumnDef="sender">\r
                        <th mat-header-cell *matHeaderCellDef mat-sort-header>Sender</th>\r
                        <td mat-cell *matCellDef="let element">{{ element.apI_SenderId }}</td>\r
                    </ng-container>\r
\r
                    <ng-container matColumnDef="usename">\r
                        <th mat-header-cell *matHeaderCellDef mat-sort-header>User Name</th>\r
                        <td mat-cell *matCellDef="let element">{{ element.api_UserName }}</td>\r
                    </ng-container>\r
\r
                    <ng-container matColumnDef="password">\r
                        <th mat-header-cell *matHeaderCellDef mat-sort-header>Password</th>\r
                        <td mat-cell *matCellDef="let element">{{ element.api_Password }}</td>\r
                    </ng-container>\r
\r
                    <ng-container matColumnDef="status">\r
                        <th mat-header-cell *matHeaderCellDef mat-sort-header>Status</th>\r
                        <td mat-cell *matCellDef="let element">{{ element.apI_Status }}</td>\r
                    </ng-container>\r
\r
                    <ng-container matColumnDef="actions">\r
                        <th mat-header-cell *matHeaderCellDef>Actions</th>\r
                        <td mat-cell *matCellDef="let row">\r
                            <button mat-icon-button color="primary" (click)="openEditDialog(row)">\r
                                <mat-icon>drive_file_rename_outline</mat-icon>\r
                            </button>\r
                            <button mat-icon-button color="primary" (click)="SMSAPIDelete(row)">\r
                                <mat-icon>delete</mat-icon>\r
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
<!-- Edit Class Popup Template -->\r
<!-- ============================= -->\r
<ng-template #editDialog let-data>\r
    <h2 mat-dialog-title>Edit SMS API</h2>\r
    <mat-dialog-content>\r
        <form #editClassForm="ngForm" class="w-100">\r
            <mat-form-field appearance="fill" style="width:100%">\r
                <mat-label>Select Session</mat-label>\r
                <mat-select [(ngModel)]="data.collegeId" name="collegeId" required>\r
                    @for (school of schoolList; track school.collegeId) {\r
                    <mat-option [value]="school.collegeId">\r
                        {{ school.collegeAbreviation }}\r
                    </mat-option>\r
                    }\r
                </mat-select>\r
            </mat-form-field>\r
            <mat-form-field appearance="fill" style="width:100%">\r
                <mat-label>Sender</mat-label>\r
                <input matInput [(ngModel)]="data.apI_SenderId" name="apI_SenderId" required min="1" />\r
            </mat-form-field>\r
\r
            <mat-form-field appearance="fill" style="width:100%">\r
                <mat-label>User Name</mat-label>\r
                <input matInput [(ngModel)]="data.api_UserName" name="api_UserName" required minlength="3"\r
                    maxlength="50" />\r
            </mat-form-field>\r
            <mat-form-field appearance="fill" style="width:100%">\r
                <mat-label>Password</mat-label>\r
                <input matInput [(ngModel)]="data.api_Password" name="api_Password" required minlength="3"\r
                    maxlength="50" />\r
            </mat-form-field>\r
            <mat-form-field appearance="fill" style="width:100%">\r
                <mat-label>Provider</mat-label>\r
                <input matInput [(ngModel)]="data.apI_Provider" name="apI_Provider" required minlength="3"\r
                    maxlength="50" />\r
            </mat-form-field>\r
                <mat-slide-toggle [(ngModel)]="data.apI_Status"  name="apI_Status" [checked]="data.apI_Status === 1">API Status\r
     </mat-slide-toggle>\r
        </form>\r
    </mat-dialog-content>\r
\r
    <mat-dialog-actions align="end">\r
        <button mat-button mat-dialog-close>Cancel</button>\r
        <button mat-raised-button color="primary" [mat-dialog-close]="data">Update</button>\r
    </mat-dialog-actions>\r
</ng-template>`, styles: ["/* src/app/pages/admin/smsapi/smsapi.component.scss */\n:host {\n  display: block;\n}\n.smsapi-form {\n  display: grid;\n  gap: 12px;\n}\n.smsapi-form__grid {\n  display: grid;\n  gap: 12px;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  align-items: start;\n}\n.smsapi-form__grid--full {\n  grid-template-columns: 1fr;\n}\n.smsapi-form__actions {\n  margin-top: 12px;\n  display: flex;\n  justify-content: center;\n}\n.w-100 {\n  width: 100%;\n}\n.smsapi-table {\n  width: 100%;\n}\n.smsapi-table__wrap {\n  width: 100%;\n  overflow-x: auto;\n}\ntextarea[matInput] {\n  min-height: 96px;\n  resize: vertical;\n}\n/*# sourceMappingURL=smsapi.component.css.map */\n"] }]
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SmsapiComponent, { className: "SmsapiComponent", filePath: "src/app/pages/admin/smsapi/smsapi.component.ts", lineNumber: 41 });
})();

// src/app/services/expense.service.ts
var _ExpenseService = class _ExpenseService {
  constructor() {
    this.http = inject(HttpClient);
    this.endpoint = apiEndpoint;
  }
  addExpense(body) {
    return this.http.post(this.endpoint.expensehead.add, body);
  }
  updateExpense(body) {
    return this.http.post(this.endpoint.expensehead.update, body);
  }
  deleteExpense(Id) {
    return this.http.post(this.endpoint.expensehead.delete + Id, null);
  }
  listExpense() {
    return this.http.get(this.endpoint.expensehead.list);
  }
};
_ExpenseService.\u0275fac = function ExpenseService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExpenseService)();
};
_ExpenseService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ExpenseService, factory: _ExpenseService.\u0275fac, providedIn: "root" });
var ExpenseService = _ExpenseService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExpenseService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/pages/admin/expense/expense.component.ts
var _c07 = ["editDialog"];
var _c17 = () => [5, 10, 25];
function ExpenseComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Expense is required");
    \u0275\u0275elementEnd();
  }
}
function ExpenseComponent_th_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 25);
    \u0275\u0275text(1, "Expense");
    \u0275\u0275elementEnd();
  }
}
function ExpenseComponent_td_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r2.expenseHead);
  }
}
function ExpenseComponent_th_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 25);
    \u0275\u0275text(1, "Status");
    \u0275\u0275elementEnd();
  }
}
function ExpenseComponent_td_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", element_r3.activeStatus == 1 ? "Active" : "Inactive", " ");
  }
}
function ExpenseComponent_th_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 27);
    \u0275\u0275text(1, "Actions");
    \u0275\u0275elementEnd();
  }
}
function ExpenseComponent_td_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 26)(1, "button", 28);
    \u0275\u0275listener("click", function ExpenseComponent_td_37_Template_button_click_1_listener() {
      const row_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.openEditDialog(row_r5));
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "drive_file_rename_outline");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 29)(5, "mat-icon", 30);
    \u0275\u0275listener("click", function ExpenseComponent_td_37_Template_mat_icon_click_5_listener() {
      const row_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.DeleteExpense(row_r5));
    });
    \u0275\u0275text(6, "delete");
    \u0275\u0275elementEnd()()();
  }
}
function ExpenseComponent_tr_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 31);
  }
}
function ExpenseComponent_tr_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 32);
  }
}
function ExpenseComponent_ng_template_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "h2", 33);
    \u0275\u0275text(1, "Edit Expense");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "mat-dialog-content")(3, "form", 7, 1)(5, "mat-form-field", 34)(6, "mat-label");
    \u0275\u0275text(7, "Expense");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "input", 35);
    \u0275\u0275twoWayListener("ngModelChange", function ExpenseComponent_ng_template_41_Template_input_ngModelChange_8_listener($event) {
      const data_r8 = \u0275\u0275restoreView(_r7).$implicit;
      \u0275\u0275twoWayBindingSet(data_r8.expenseHead, $event) || (data_r8.expenseHead = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "mat-slide-toggle", 36);
    \u0275\u0275twoWayListener("ngModelChange", function ExpenseComponent_ng_template_41_Template_mat_slide_toggle_ngModelChange_9_listener($event) {
      const data_r8 = \u0275\u0275restoreView(_r7).$implicit;
      \u0275\u0275twoWayBindingSet(data_r8.activeStatus, $event) || (data_r8.activeStatus = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275text(10, " Status ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "mat-dialog-actions", 37)(12, "button", 38);
    \u0275\u0275text(13, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 39);
    \u0275\u0275text(15, "Update");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const data_r8 = ctx.$implicit;
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", data_r8.expenseHead);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", data_r8.activeStatus);
    \u0275\u0275property("checked", data_r8.activeStatus === 1);
    \u0275\u0275advance(5);
    \u0275\u0275property("mat-dialog-close", data_r8);
  }
}
var _ExpenseComponent = class _ExpenseComponent {
  constructor(fb, dialog) {
    this.fb = fb;
    this.dialog = dialog;
    this.dataSource = new MatTableDataSource([]);
    this.displayedColumns = ["expense", "status", "actions"];
    this._expenseService = inject(ExpenseService);
    this.expenseList = [];
    this.expenseName = "";
  }
  ngOnInit() {
    this.expenseForm = this.fb.group({
      id: [0],
      expenseHead: [null, [Validators.required, Validators.minLength(2)]],
      activeStatus: [false]
    });
    this.GetExpenseList();
  }
  GetExpenseList() {
    this._expenseService.listExpense().subscribe({
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
  addExpense() {
    debugger;
    if (this.expenseForm.valid) {
      const formValue = this.expenseForm.value;
      formValue.activeStatus = formValue.activeStatus ? 1 : 0;
      this._expenseService.addExpense(formValue).subscribe({
        next: (res) => {
          if (res.success) {
            alert(res.message);
            this.GetExpenseList();
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
  openEditDialog(expense) {
    const dialogRef = this.dialog.open(this.editDialog, {
      width: "400px",
      data: __spreadValues({}, expense)
    });
    debugger;
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        debugger;
        console.log("Dialog result:", result);
        result.activeStatus = result.activeStatus ? 1 : 0;
        this._expenseService.updateExpense(result).subscribe({
          next: (res) => {
            if (res.success) {
              alert(res.message);
              this.GetExpenseList();
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
    if (this.expenseList.includes(row)) {
      this.expenseList = this.expenseList.filter((r) => r !== row);
    } else {
      this.expenseList.push(row);
    }
  }
  isAllSelected() {
    return this.expenseList.length === this.dataSource.data.length;
  }
  isPartialSelected() {
    return this.expenseList.length > 0 && !this.isAllSelected();
  }
  masterToggle() {
    if (this.isAllSelected()) {
      this.expenseList = [];
    } else {
      this.expenseList = [...this.dataSource.data];
    }
  }
  DeleteExpense(expense) {
    debugger;
    const id = expense.id;
    if (id > 0) {
      this._expenseService.deleteExpense(id).subscribe({
        next: (res) => {
          if (res.success) {
            alert(res.message);
            this.GetExpenseList();
          }
        }
      });
    }
  }
};
_ExpenseComponent.\u0275fac = function ExpenseComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExpenseComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(MatDialog));
};
_ExpenseComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExpenseComponent, selectors: [["app-expense"]], viewQuery: function ExpenseComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(MatPaginator, 5);
    \u0275\u0275viewQuery(MatSort, 5);
    \u0275\u0275viewQuery(_c07, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.paginator = _t.first);
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.sort = _t.first);
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.editDialog = _t.first);
  }
}, decls: 43, vars: 8, consts: [["editDialog", ""], ["editClassForm", "ngForm"], [1, "col-sm-12"], [3, "ngSubmit", "formGroup"], [1, "form-field-full"], [1, "row"], [1, "col-sm-3"], [1, "w-100"], ["matInput", "", "formControlName", "expenseHead", "placeholder", "Please Enter Expense head"], [1, "col-sm-3", "d-flex", "align-items-center"], ["color", "primary", "formControlName", "activeStatus"], [1, "m-t-8"], ["mat-flat-button", "", "color", "primary", "type", "submit"], ["appearance", "outline"], ["matInput", "", "placeholder", "Filter class", 3, "keyup"], ["mat-table", "", "matSort", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "expense"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "status"], ["matColumnDef", "actions"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSize", "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-cell", ""], ["mat-icon-button", "", "color", "primary", 3, "click"], ["mat-icon-button", "", "color", "primary"], [3, "click"], ["mat-header-row", ""], ["mat-row", ""], ["mat-dialog-title", ""], ["appearance", "fill", 2, "width", "100%"], ["matInput", "", "name", "expenseHead", "required", "", "min", "1", 3, "ngModelChange", "ngModel"], ["name", "activeStatus", 3, "ngModelChange", "ngModel", "checked"], ["align", "end"], ["mat-button", "", "mat-dialog-close", ""], ["mat-raised-button", "", "color", "primary", 3, "mat-dialog-close"]], template: function ExpenseComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "mat-card")(2, "mat-card-header")(3, "mat-card-title");
    \u0275\u0275text(4, "Add Expense");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "form", 3);
    \u0275\u0275listener("ngSubmit", function ExpenseComponent_Template_form_ngSubmit_5_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.addExpense());
    });
    \u0275\u0275elementStart(6, "mat-card-content")(7, "div", 4)(8, "div", 5)(9, "div", 6)(10, "mat-form-field", 7)(11, "mat-label");
    \u0275\u0275text(12, "Expense");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "input", 8);
    \u0275\u0275conditionalCreate(14, ExpenseComponent_Conditional_14_Template, 2, 0, "mat-error");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 9)(16, "mat-slide-toggle", 10);
    \u0275\u0275text(17, " Active ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 11)(19, "button", 12);
    \u0275\u0275text(20, "Save");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(21, "div", 2)(22, "mat-card")(23, "mat-card-content")(24, "mat-form-field", 13)(25, "mat-label");
    \u0275\u0275text(26, "Search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "input", 14);
    \u0275\u0275listener("keyup", function ExpenseComponent_Template_input_keyup_27_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.applyFilter($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "table", 15);
    \u0275\u0275elementContainerStart(29, 16);
    \u0275\u0275template(30, ExpenseComponent_th_30_Template, 2, 0, "th", 17)(31, ExpenseComponent_td_31_Template, 2, 1, "td", 18);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(32, 19);
    \u0275\u0275template(33, ExpenseComponent_th_33_Template, 2, 0, "th", 17)(34, ExpenseComponent_td_34_Template, 2, 1, "td", 18);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(35, 20);
    \u0275\u0275template(36, ExpenseComponent_th_36_Template, 2, 0, "th", 21)(37, ExpenseComponent_td_37_Template, 7, 0, "td", 18);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(38, ExpenseComponent_tr_38_Template, 1, 0, "tr", 22)(39, ExpenseComponent_tr_39_Template, 1, 0, "tr", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275element(40, "mat-paginator", 24);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(41, ExpenseComponent_ng_template_41_Template, 16, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    let tmp_2_0;
    \u0275\u0275advance(5);
    \u0275\u0275property("formGroup", ctx.expenseForm);
    \u0275\u0275advance(9);
    \u0275\u0275conditional(((tmp_2_0 = ctx.expenseForm.get("expenseHead")) == null ? null : tmp_2_0.hasError("required")) && ((tmp_2_0 = ctx.expenseForm.get("expenseHead")) == null ? null : tmp_2_0.touched) ? 14 : -1);
    \u0275\u0275advance(14);
    \u0275\u0275property("dataSource", ctx.dataSource);
    \u0275\u0275advance(10);
    \u0275\u0275property("matHeaderRowDef", ctx.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("pageSize", 5)("pageSizeOptions", \u0275\u0275pureFunction0(7, _c17));
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
], encapsulation: 2 });
var ExpenseComponent = _ExpenseComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExpenseComponent, [{
    type: Component,
    args: [{ selector: "app-expense", imports: [
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
            <mat-card-title>Add Expense</mat-card-title>\r
        </mat-card-header>\r
        <form [formGroup]="expenseForm" (ngSubmit)="addExpense()">\r
            <mat-card-content>\r
                <div class="form-field-full">\r
                    <div class="row">\r
\r
                        <div class="col-sm-3">\r
                            <mat-form-field class="w-100">\r
                                <mat-label>Expense</mat-label>\r
                                <input matInput formControlName="expenseHead" placeholder="Please Enter Expense head" />\r
                                @if (expenseForm.get('expenseHead')?.hasError('required') &&\r
                                expenseForm.get('expenseHead')?.touched) {\r
                                <mat-error>Expense is required</mat-error>\r
                                }\r
                            </mat-form-field>\r
                        </div>\r
                        <div class="col-sm-3 d-flex align-items-center">\r
                            <mat-slide-toggle color="primary" formControlName="activeStatus">\r
                                Active\r
                            </mat-slide-toggle>\r
                        </div>\r
                    </div>\r
                    <div class="m-t-8">\r
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
            <table mat-table [dataSource]="dataSource" matSort class="mat-elevation-z8">\r
                <ng-container matColumnDef="expense">\r
                    <th mat-header-cell *matHeaderCellDef mat-sort-header>Expense</th>\r
                    <td mat-cell *matCellDef="let element">{{ element.expenseHead }}</td>\r
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
                <mat-label>Expense</mat-label>\r
                <input matInput [(ngModel)]="data.expenseHead" name="expenseHead" required min="1" />\r
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
</ng-template>` }]
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExpenseComponent, { className: "ExpenseComponent", filePath: "src/app/pages/admin/expense/expense.component.ts", lineNumber: 39 });
})();

// src/app/pages/admin/fee-master/fee-master.component.ts
var _FeeMasterComponent = class _FeeMasterComponent {
};
_FeeMasterComponent.\u0275fac = function FeeMasterComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FeeMasterComponent)();
};
_FeeMasterComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FeeMasterComponent, selectors: [["app-fee-master"]], decls: 14, vars: 0, consts: [["mat-stretch-tabs", "", "dynamicHeight", ""], ["label", "Fee Group"], ["label", "Fee Head"], ["label", "Fee Installment"], ["label", "Allocate Fee to Class"]], template: function FeeMasterComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-card")(1, "mat-card-header")(2, "mat-card-title");
    \u0275\u0275text(3, "Class & Section");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "mat-card-content")(5, "mat-tab-group", 0)(6, "mat-tab", 1);
    \u0275\u0275element(7, "app-fee-group");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "mat-tab", 2);
    \u0275\u0275element(9, "app-fee-head");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "mat-tab", 3);
    \u0275\u0275element(11, "app-fee-installment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-tab", 4);
    \u0275\u0275element(13, "app-allocate-fee");
    \u0275\u0275elementEnd()()()();
  }
}, dependencies: [
  MatCard,
  MatCardTitle,
  MatCardHeader,
  MatTabGroup,
  MatCardContent,
  MatTab,
  FeeGroupComponent,
  FeeHeadComponent,
  FeeInstallmentComponent,
  AllocateFeeComponent
], encapsulation: 2 });
var FeeMasterComponent = _FeeMasterComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FeeMasterComponent, [{
    type: Component,
    args: [{ selector: "app-fee-master", imports: [
      MatCard,
      MatCardTitle,
      MatCardHeader,
      MatTabGroup,
      MatCardContent,
      MatTab,
      FeeGroupComponent,
      FeeHeadComponent,
      FeeInstallmentComponent,
      AllocateFeeComponent
    ], template: '<mat-card>\r\n  <mat-card-header>\r\n    <mat-card-title>Class & Section</mat-card-title>\r\n  </mat-card-header>\r\n\r\n  <mat-card-content>\r\n    <mat-tab-group mat-stretch-tabs dynamicHeight>\r\n      <mat-tab label="Fee Group">\r\n        <app-fee-group></app-fee-group>\r\n      </mat-tab>\r\n\r\n      <mat-tab label="Fee Head">\r\n        <app-fee-head></app-fee-head>\r\n      </mat-tab>\r\n      <mat-tab label="Fee Installment">\r\n        <app-fee-installment></app-fee-installment>\r\n      </mat-tab>\r\n      <mat-tab label="Allocate Fee to Class">\r\n        <app-allocate-fee></app-allocate-fee>\r\n      </mat-tab>\r\n\r\n      <!-- <mat-tab label="College">\r\n        <app-college></app-college>\r\n      </mat-tab>\r\n\r\n      <mat-tab label="Designation">\r\n        <app-designation></app-designation>\r\n      </mat-tab> -->\r\n    </mat-tab-group>\r\n  </mat-card-content>\r\n</mat-card>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FeeMasterComponent, { className: "FeeMasterComponent", filePath: "src/app/pages/admin/fee-master/fee-master.component.ts", lineNumber: 20 });
})();

// src/app/services/house.service.ts
var _HouseService = class _HouseService {
  constructor() {
    this.http = inject(HttpClient);
    this.endpoint = apiEndpoint;
  }
  list() {
    return this.http.get(this.endpoint.house.list);
  }
  add(body) {
    return this.http.post(this.endpoint.house.add, body);
  }
  update(body) {
    debugger;
    return this.http.post(this.endpoint.house.update, body);
  }
};
_HouseService.\u0275fac = function HouseService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _HouseService)();
};
_HouseService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _HouseService, factory: _HouseService.\u0275fac, providedIn: "root" });
var HouseService = _HouseService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HouseService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/pages/admin/house/house.component.ts
var _c08 = ["editDialog"];
var _c18 = () => [5, 10, 25];
function HouseComponent_th_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "th", 21)(1, "mat-checkbox", 22);
    \u0275\u0275listener("change", function HouseComponent_th_23_Template_mat_checkbox_change_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView($event ? ctx_r2.masterToggle() : null);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r2.isAllSelected())("indeterminate", ctx_r2.isPartialSelected());
  }
}
function HouseComponent_td_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 23)(1, "mat-checkbox", 24);
    \u0275\u0275listener("click", function HouseComponent_td_24_Template_mat_checkbox_click_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      return \u0275\u0275resetView($event.stopPropagation());
    })("change", function HouseComponent_td_24_Template_mat_checkbox_change_1_listener($event) {
      const row_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView($event ? ctx_r2.toggleSelection(row_r5) : null);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r2.selection.includes(row_r5));
  }
}
function HouseComponent_th_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 25);
    \u0275\u0275text(1, "House");
    \u0275\u0275elementEnd();
  }
}
function HouseComponent_td_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(d_r6.houseName);
  }
}
function HouseComponent_th_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 21);
    \u0275\u0275text(1, "Actions");
    \u0275\u0275elementEnd();
  }
}
function HouseComponent_td_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 23)(1, "button", 26);
    \u0275\u0275listener("click", function HouseComponent_td_30_Template_button_click_1_listener() {
      const row_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openEditDialog(row_r8));
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "drive_file_rename_outline");
    \u0275\u0275elementEnd()()();
  }
}
function HouseComponent_tr_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 27);
  }
}
function HouseComponent_tr_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 28);
  }
}
function HouseComponent_ng_template_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "h2", 29);
    \u0275\u0275text(1, "Edit House");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "mat-dialog-content")(3, "mat-form-field", 30)(4, "mat-label");
    \u0275\u0275text(5, "House");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 31);
    \u0275\u0275twoWayListener("ngModelChange", function HouseComponent_ng_template_34_Template_input_ngModelChange_6_listener($event) {
      const data_r10 = \u0275\u0275restoreView(_r9).$implicit;
      \u0275\u0275twoWayBindingSet(data_r10.houseName, $event) || (data_r10.houseName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "mat-dialog-actions", 32)(8, "button", 33);
    \u0275\u0275text(9, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 34);
    \u0275\u0275text(11, "Update");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const data_r10 = ctx.$implicit;
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", data_r10.houseName);
    \u0275\u0275advance(4);
    \u0275\u0275property("mat-dialog-close", data_r10);
  }
}
var _HouseComponent = class _HouseComponent {
  constructor(dialog) {
    this.dialog = dialog;
    this._houseService = inject(HouseService);
    this.dataSource = new MatTableDataSource([]);
    this.selection = [];
    this.displayedColumns = ["select", "houseName", "actions"];
    this.houseName = "";
  }
  ngOnInit() {
    this.getHouseList();
  }
  addHouse() {
    const name = this.houseName.trim();
    if (!name) {
      alert("Please enter house name.");
      return;
    }
    const newHouse = {
      houseId: 0,
      houseName: this.houseName
    };
    debugger;
    this._houseService.add(newHouse).subscribe({
      next: (res) => {
        debugger;
        if (res.success) {
          alert(res.message);
          this.getHouseList();
          this.houseName = "";
        }
      }
    });
  }
  getHouseList() {
    debugger;
    this._houseService.list().subscribe({
      next: (res) => {
        debugger;
        if (res.success) {
          this.dataSource.data = Array.isArray(res.data) ? res.data : [res.data];
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
      },
      error: (err) => {
        debugger;
        console.error("Error fetching sections:", err);
      }
    });
  }
  // for common table code 
  applyFilter(event) {
    const filterValue = event.target.value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  /** Checkbox Selection Logic */
  toggleSelection(row) {
    if (this.selection.includes(row)) {
      this.selection = this.selection.filter((r) => r !== row);
    } else {
      this.selection.push(row);
    }
  }
  isAllSelected() {
    return this.selection.length === this.dataSource.data.length;
  }
  isPartialSelected() {
    return this.selection.length > 0 && !this.isAllSelected();
  }
  masterToggle() {
    if (this.isAllSelected()) {
      this.selection = [];
    } else {
      this.selection = [...this.dataSource.data];
    }
  }
  // end here
  openEditDialog(house) {
    const dialogRef = this.dialog.open(this.editDialog, {
      width: "400px",
      data: __spreadValues({}, house)
      // Pass a copy of the section data
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        debugger;
        this._houseService.update(result).subscribe({
          next: (res) => {
            alert(res.message);
            this.getHouseList();
          }
        });
      }
    });
  }
};
_HouseComponent.\u0275fac = function HouseComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _HouseComponent)(\u0275\u0275directiveInject(MatDialog));
};
_HouseComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HouseComponent, selectors: [["app-house"]], viewQuery: function HouseComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(MatPaginator, 5);
    \u0275\u0275viewQuery(MatSort, 5);
    \u0275\u0275viewQuery(_c08, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.paginator = _t.first);
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.sort = _t.first);
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.editDialog = _t.first);
  }
}, decls: 36, vars: 7, consts: [["editDialog", ""], [1, "col-sm-12"], [1, "form-field-full"], [1, "row"], [1, "col-sm-4"], [1, "w-100"], ["matInput", "", "placeholder", "Enter house name", "required", "", 3, "ngModelChange", "ngModel"], [1, "m-t-4"], ["mat-flat-button", "", "color", "primary", "type", "submit", 3, "click"], ["appearance", "outline"], ["matInput", "", "placeholder", "Filter designations", 3, "keyup"], ["mat-table", "", "matSort", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "select"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "houseName"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSize", "pageSizeOptions"], ["mat-header-cell", ""], [3, "change", "checked", "indeterminate"], ["mat-cell", ""], [3, "click", "change", "checked"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-icon-button", "", "color", "primary", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], ["mat-dialog-title", ""], ["appearance", "fill", 2, "width", "100%"], ["matInput", "", 3, "ngModelChange", "ngModel"], ["align", "end"], ["mat-button", "", "mat-dialog-close", ""], ["mat-raised-button", "", "color", "primary", 3, "mat-dialog-close"]], template: function HouseComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "mat-card")(2, "mat-card-header")(3, "mat-card-title");
    \u0275\u0275text(4, "Add House");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "mat-card-content")(6, "div", 2)(7, "div", 3)(8, "div", 4)(9, "mat-form-field", 5)(10, "input", 6);
    \u0275\u0275twoWayListener("ngModelChange", function HouseComponent_Template_input_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.houseName, $event) || (ctx.houseName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 7)(12, "button", 8);
    \u0275\u0275listener("click", function HouseComponent_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.addHouse());
    });
    \u0275\u0275text(13, "Save");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(14, "div", 1)(15, "mat-card")(16, "mat-card-content")(17, "mat-form-field", 9)(18, "mat-label");
    \u0275\u0275text(19, "Search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "input", 10);
    \u0275\u0275listener("keyup", function HouseComponent_Template_input_keyup_20_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.applyFilter($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "table", 11);
    \u0275\u0275elementContainerStart(22, 12);
    \u0275\u0275template(23, HouseComponent_th_23_Template, 2, 2, "th", 13)(24, HouseComponent_td_24_Template, 2, 1, "td", 14);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(25, 15);
    \u0275\u0275template(26, HouseComponent_th_26_Template, 2, 0, "th", 16)(27, HouseComponent_td_27_Template, 2, 1, "td", 14);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(28, 17);
    \u0275\u0275template(29, HouseComponent_th_29_Template, 2, 0, "th", 13)(30, HouseComponent_td_30_Template, 4, 0, "td", 14);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(31, HouseComponent_tr_31_Template, 1, 0, "tr", 18)(32, HouseComponent_tr_32_Template, 1, 0, "tr", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275element(33, "mat-paginator", 20);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(34, HouseComponent_ng_template_34_Template, 12, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx.houseName);
    \u0275\u0275advance(11);
    \u0275\u0275property("dataSource", ctx.dataSource);
    \u0275\u0275advance(10);
    \u0275\u0275property("matHeaderRowDef", ctx.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("pageSize", 5)("pageSizeOptions", \u0275\u0275pureFunction0(6, _c18));
  }
}, dependencies: [
  MatCard,
  MaterialModule,
  MatButton,
  MatIconButton,
  MatCardContent,
  MatCardHeader,
  MatCardTitle,
  MatCheckbox,
  MatDialogClose,
  MatDialogTitle,
  MatDialogActions,
  MatDialogContent,
  MatFormField,
  MatLabel,
  MatIcon,
  MatInput,
  MatPaginator,
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
  DefaultValueAccessor,
  NgControlStatus,
  RequiredValidator,
  NgModel,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatOptionModule,
  MatSelectModule,
  TranslateModule
], encapsulation: 2 });
var HouseComponent = _HouseComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HouseComponent, [{
    type: Component,
    args: [{ selector: "app-house", imports: [
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
      TranslateModule
    ], template: '<div class="col-sm-12">\r\n    <mat-card>\r\n        <mat-card-header>\r\n            <mat-card-title>Add House</mat-card-title>\r\n        </mat-card-header>\r\n\r\n        <mat-card-content>\r\n            <div class="form-field-full">\r\n                <div class="row">\r\n                    <div class="col-sm-4">\r\n                        <mat-form-field class="w-100">\r\n                            <!-- <mat-label>House</mat-label> -->\r\n                            <input  matInput [(ngModel)]="houseName" placeholder="Enter house name"  required=""/>\r\n                        </mat-form-field>\r\n                    </div>\r\n                     <div class="m-t-4">\r\n                    <button mat-flat-button color="primary" type="submit" (click)="addHouse()">Save</button>\r\n                </div>\r\n                </div>\r\n               \r\n            </div>\r\n        </mat-card-content>\r\n    </mat-card>\r\n</div>\r\n\r\n\r\n<div class="col-sm-12">\r\n    <mat-card>\r\n        <mat-card-content>\r\n            <mat-form-field appearance="outline">\r\n                <mat-label>Search</mat-label>\r\n                <input matInput (keyup)="applyFilter($event)" placeholder="Filter designations">\r\n            </mat-form-field>\r\n            <table mat-table [dataSource]="dataSource" matSort class="mat-elevation-z8">\r\n\r\n                <!-- ID Column -->\r\n                <!-- Checkbox Column -->\r\n                <ng-container matColumnDef="select">\r\n                    <th mat-header-cell *matHeaderCellDef>\r\n                        <mat-checkbox (change)="$event ? masterToggle() : null" [checked]="isAllSelected()"\r\n                            [indeterminate]="isPartialSelected()">\r\n                        </mat-checkbox>\r\n                    </th>\r\n                    <td mat-cell *matCellDef="let row">\r\n                        <mat-checkbox (click)="$event.stopPropagation()" (change)="$event ? toggleSelection(row) : null"\r\n                            [checked]="selection.includes(row)">\r\n                        </mat-checkbox>\r\n                    </td>\r\n                </ng-container>\r\n\r\n                <!-- sectionName Column -->\r\n                <ng-container matColumnDef="houseName">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header>House</th>\r\n                    <td mat-cell *matCellDef="let d">{{ d.houseName }}</td>\r\n                </ng-container>\r\n\r\n                <!-- Actions Column -->\r\n                <ng-container matColumnDef="actions">\r\n                    <th mat-header-cell *matHeaderCellDef>Actions</th>\r\n                    <td mat-cell *matCellDef="let row">\r\n                        <button mat-icon-button color="primary" (click)="openEditDialog(row)">\r\n                            <mat-icon>drive_file_rename_outline</mat-icon>\r\n                        </button>\r\n\r\n                    </td>\r\n                </ng-container>\r\n\r\n                <!-- Header & Rows -->\r\n                <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>\r\n                <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>\r\n\r\n            </table>\r\n            <!-- Paginator -->\r\n            <mat-paginator [pageSize]="5" [pageSizeOptions]="[5, 10, 25]" showFirstLastButtons></mat-paginator>\r\n        </mat-card-content>\r\n    </mat-card>\r\n</div>\r\n\r\n<!-- \u2728 EDIT POPUP (ng-template) -->\r\n<ng-template #editDialog let-data>\r\n  <h2 mat-dialog-title>Edit House</h2>\r\n  <mat-dialog-content>\r\n    <mat-form-field appearance="fill" style="width:100%">\r\n      <mat-label>House</mat-label>\r\n      <input matInput [(ngModel)]="data.houseName">\r\n    </mat-form-field>\r\n  </mat-dialog-content>\r\n  <mat-dialog-actions align="end">\r\n    <button mat-button mat-dialog-close>Cancel</button>\r\n    <button mat-raised-button color="primary" [mat-dialog-close]="data">Update</button>\r\n  </mat-dialog-actions>\r\n</ng-template>\r\n' }]
  }], () => [{ type: MatDialog }], { paginator: [{
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HouseComponent, { className: "HouseComponent", filePath: "src/app/pages/admin/house/house.component.ts", lineNumber: 38 });
})();

// src/app/services/salutation.service.ts
var _SalutationService = class _SalutationService {
  constructor() {
    this.http = inject(HttpClient);
    this.endpoint = apiEndpoint;
  }
  list() {
    return this.http.get(this.endpoint.salutation.list);
  }
  add(body) {
    return this.http.post(this.endpoint.salutation.add, body);
  }
  update(body) {
    debugger;
    return this.http.post(this.endpoint.salutation.update, body);
  }
};
_SalutationService.\u0275fac = function SalutationService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SalutationService)();
};
_SalutationService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SalutationService, factory: _SalutationService.\u0275fac, providedIn: "root" });
var SalutationService = _SalutationService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SalutationService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/pages/admin/salutation/salutation.component.ts
var _c09 = ["editDialog"];
var _c19 = () => [5, 10, 25];
function SalutationComponent_th_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 20);
    \u0275\u0275text(1, "Salutation");
    \u0275\u0275elementEnd();
  }
}
function SalutationComponent_td_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(d_r2.salutation);
  }
}
function SalutationComponent_th_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 22);
    \u0275\u0275text(1, "Actions");
    \u0275\u0275elementEnd();
  }
}
function SalutationComponent_td_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 21)(1, "button", 23);
    \u0275\u0275listener("click", function SalutationComponent_td_27_Template_button_click_1_listener() {
      const row_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.openEditDialog(row_r4));
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "drive_file_rename_outline");
    \u0275\u0275elementEnd()()();
  }
}
function SalutationComponent_tr_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 24);
  }
}
function SalutationComponent_tr_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 25);
  }
}
function SalutationComponent_ng_template_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "h2", 26);
    \u0275\u0275text(1, "Edit Salutation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "mat-dialog-content")(3, "mat-form-field", 27)(4, "mat-label");
    \u0275\u0275text(5, "Salutation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 28);
    \u0275\u0275twoWayListener("ngModelChange", function SalutationComponent_ng_template_31_Template_input_ngModelChange_6_listener($event) {
      const data_r7 = \u0275\u0275restoreView(_r6).$implicit;
      \u0275\u0275twoWayBindingSet(data_r7.salutation, $event) || (data_r7.salutation = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "mat-dialog-actions", 29)(8, "button", 30);
    \u0275\u0275text(9, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 31);
    \u0275\u0275text(11, "Update");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const data_r7 = ctx.$implicit;
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", data_r7.salutation);
    \u0275\u0275advance(4);
    \u0275\u0275property("mat-dialog-close", data_r7);
  }
}
var _SalutationComponent = class _SalutationComponent {
  constructor(dialog) {
    this.dialog = dialog;
    this._salutationService = inject(SalutationService);
    this.dataSource = new MatTableDataSource([]);
    this.selection = [];
    this.displayedColumns = ["salutationName", "actions"];
    this.salutationName = "";
  }
  ngOnInit() {
    this.getsalutationList();
  }
  addSalutation() {
    const name = this.salutationName.trim();
    if (!name) {
      alert("Please enter house name.");
      return;
    }
    const newSalutution = {
      salutationId: 0,
      salutation: this.salutationName
    };
    debugger;
    this._salutationService.add(newSalutution).subscribe({
      next: (res) => {
        debugger;
        if (res.success) {
          alert(res.message);
          this.getsalutationList();
          this.salutationName = "";
        }
      }
    });
  }
  getsalutationList() {
    debugger;
    this._salutationService.list().subscribe({
      next: (res) => {
        debugger;
        if (res.success) {
          this.dataSource.data = Array.isArray(res.data) ? res.data : [res.data];
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
      },
      error: (err) => {
        debugger;
        console.error("Error fetching sections:", err);
      }
    });
  }
  // for common table code 
  applyFilter(event) {
    const filterValue = event.target.value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  /** Checkbox Selection Logic */
  toggleSelection(row) {
    if (this.selection.includes(row)) {
      this.selection = this.selection.filter((r) => r !== row);
    } else {
      this.selection.push(row);
    }
  }
  isAllSelected() {
    return this.selection.length === this.dataSource.data.length;
  }
  isPartialSelected() {
    return this.selection.length > 0 && !this.isAllSelected();
  }
  masterToggle() {
    if (this.isAllSelected()) {
      this.selection = [];
    } else {
      this.selection = [...this.dataSource.data];
    }
  }
  // end here
  openEditDialog(house) {
    const dialogRef = this.dialog.open(this.editDialog, {
      width: "400px",
      data: __spreadValues({}, house)
      // Pass a copy of the section data
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        debugger;
        this._salutationService.update(result).subscribe({
          next: (res) => {
            alert(res.message);
            this.getsalutationList();
          }
        });
      }
    });
  }
};
_SalutationComponent.\u0275fac = function SalutationComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SalutationComponent)(\u0275\u0275directiveInject(MatDialog));
};
_SalutationComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SalutationComponent, selectors: [["app-salutation"]], viewQuery: function SalutationComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(MatPaginator, 5);
    \u0275\u0275viewQuery(MatSort, 5);
    \u0275\u0275viewQuery(_c09, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.paginator = _t.first);
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.sort = _t.first);
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.editDialog = _t.first);
  }
}, decls: 33, vars: 7, consts: [["editDialog", ""], [1, "col-sm-12"], [1, "form-field-full"], [1, "row"], [1, "col-sm-4"], [1, "salutation-input"], ["matInput", "", "placeholder", "Enter Salutation name", "required", "", 3, "ngModelChange", "ngModel"], [1, "m-t-4"], ["mat-flat-button", "", "color", "primary", "type", "submit", 3, "click"], ["appearance", "outline"], ["matInput", "", "placeholder", "Filter designations", 3, "keyup"], ["mat-table", "", "matSort", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "salutationName"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "actions"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSize", "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-cell", ""], ["mat-icon-button", "", "color", "primary", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], ["mat-dialog-title", ""], ["appearance", "fill", 2, "width", "100%"], ["matInput", "", 3, "ngModelChange", "ngModel"], ["align", "end"], ["mat-button", "", "mat-dialog-close", ""], ["mat-raised-button", "", "color", "primary", 3, "mat-dialog-close"]], template: function SalutationComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "mat-card")(2, "mat-card-header")(3, "mat-card-title");
    \u0275\u0275text(4, "Add SalutationName");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "mat-card-content")(6, "div", 2)(7, "div", 3)(8, "div", 4)(9, "mat-form-field", 5)(10, "input", 6);
    \u0275\u0275twoWayListener("ngModelChange", function SalutationComponent_Template_input_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.salutationName, $event) || (ctx.salutationName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 7)(12, "button", 8);
    \u0275\u0275listener("click", function SalutationComponent_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.addSalutation());
    });
    \u0275\u0275text(13, "Save");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(14, "div", 1)(15, "mat-card")(16, "mat-card-content")(17, "mat-form-field", 9)(18, "mat-label");
    \u0275\u0275text(19, "Search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "input", 10);
    \u0275\u0275listener("keyup", function SalutationComponent_Template_input_keyup_20_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.applyFilter($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "table", 11);
    \u0275\u0275elementContainerStart(22, 12);
    \u0275\u0275template(23, SalutationComponent_th_23_Template, 2, 0, "th", 13)(24, SalutationComponent_td_24_Template, 2, 1, "td", 14);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(25, 15);
    \u0275\u0275template(26, SalutationComponent_th_26_Template, 2, 0, "th", 16)(27, SalutationComponent_td_27_Template, 4, 0, "td", 14);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(28, SalutationComponent_tr_28_Template, 1, 0, "tr", 17)(29, SalutationComponent_tr_29_Template, 1, 0, "tr", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275element(30, "mat-paginator", 19);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(31, SalutationComponent_ng_template_31_Template, 12, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx.salutationName);
    \u0275\u0275advance(11);
    \u0275\u0275property("dataSource", ctx.dataSource);
    \u0275\u0275advance(7);
    \u0275\u0275property("matHeaderRowDef", ctx.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("pageSize", 5)("pageSizeOptions", \u0275\u0275pureFunction0(6, _c19));
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
  MatIcon,
  MatInput,
  MatPaginator,
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
  DefaultValueAccessor,
  NgControlStatus,
  RequiredValidator,
  NgModel,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatOptionModule,
  MatSelectModule,
  TranslateModule
], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.salutation-input[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 320px;\n}\n@media (max-width: 600px) {\n  .salutation-input[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n}\n/*# sourceMappingURL=salutation.component.css.map */"] });
var SalutationComponent = _SalutationComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SalutationComponent, [{
    type: Component,
    args: [{ selector: "app-salutation", imports: [
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
      TranslateModule
    ], template: '<div class="col-sm-12">\r\n    <mat-card>\r\n        <mat-card-header>\r\n            <mat-card-title>Add SalutationName</mat-card-title>\r\n        </mat-card-header>\r\n\r\n        <mat-card-content>\r\n            <div class="form-field-full">\r\n                <div class="row">\r\n                    <div class="col-sm-4">\r\n                        <mat-form-field class="salutation-input">\r\n                            <!-- <mat-label>House</mat-label> -->\r\n                            <input  matInput [(ngModel)]="salutationName" placeholder="Enter Salutation name"  required=""/>\r\n                        </mat-form-field>\r\n                    </div>\r\n                     <div class="m-t-4">\r\n                    <button mat-flat-button color="primary" type="submit" (click)="addSalutation()">Save</button>\r\n                </div>\r\n                </div>\r\n               \r\n            </div>\r\n        </mat-card-content>\r\n    </mat-card>\r\n</div>\r\n\r\n\r\n<div class="col-sm-12">\r\n    <mat-card>\r\n        <mat-card-content>\r\n            <mat-form-field appearance="outline">\r\n                <mat-label>Search</mat-label>\r\n                <input matInput (keyup)="applyFilter($event)" placeholder="Filter designations">\r\n            </mat-form-field>\r\n            <table mat-table [dataSource]="dataSource" matSort class="mat-elevation-z8">\r\n\r\n                <!-- ID Column -->\r\n\r\n                <!-- sectionName Column -->\r\n                <ng-container matColumnDef="salutationName">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header>Salutation</th>\r\n                    <td mat-cell *matCellDef="let d">{{ d.salutation }}</td>\r\n                </ng-container>\r\n\r\n                <!-- Actions Column -->\r\n                <ng-container matColumnDef="actions">\r\n                    <th mat-header-cell *matHeaderCellDef>Actions</th>\r\n                    <td mat-cell *matCellDef="let row">\r\n                        <button mat-icon-button color="primary" (click)="openEditDialog(row)">\r\n                            <mat-icon>drive_file_rename_outline</mat-icon>\r\n                        </button>\r\n\r\n                    </td>\r\n                </ng-container>\r\n\r\n                <!-- Header & Rows -->\r\n                <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>\r\n                <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>\r\n\r\n            </table>\r\n            <!-- Paginator -->\r\n            <mat-paginator [pageSize]="5" [pageSizeOptions]="[5, 10, 25]" showFirstLastButtons></mat-paginator>\r\n        </mat-card-content>\r\n    </mat-card>\r\n</div>\r\n\r\n<!-- \u2728 EDIT POPUP (ng-template) -->\r\n<ng-template #editDialog let-data>\r\n  <h2 mat-dialog-title>Edit Salutation</h2>\r\n  <mat-dialog-content>\r\n    <mat-form-field appearance="fill" style="width:100%">\r\n      <mat-label>Salutation</mat-label>\r\n      <input matInput [(ngModel)]="data.salutation">\r\n    </mat-form-field>\r\n  </mat-dialog-content>\r\n  <mat-dialog-actions align="end">\r\n    <button mat-button mat-dialog-close>Cancel</button>\r\n    <button mat-raised-button color="primary" [mat-dialog-close]="data">Update</button>\r\n  </mat-dialog-actions>\r\n</ng-template>\r\n', styles: ["/* src/app/pages/admin/salutation/salutation.component.scss */\n:host {\n  display: block;\n}\n.salutation-input {\n  width: 100%;\n  max-width: 320px;\n}\n@media (max-width: 600px) {\n  .salutation-input {\n    max-width: 100%;\n  }\n}\n/*# sourceMappingURL=salutation.component.css.map */\n"] }]
  }], () => [{ type: MatDialog }], { paginator: [{
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SalutationComponent, { className: "SalutationComponent", filePath: "src/app/pages/admin/salutation/salutation.component.ts", lineNumber: 38 });
})();

// src/app/services/category.service.ts
var _CategoryService = class _CategoryService {
  constructor() {
    this.http = inject(HttpClient);
    this.endpoint = apiEndpoint;
  }
  list() {
    return this.http.get(this.endpoint.category.list);
  }
  add(body) {
    return this.http.post(this.endpoint.category.add, body);
  }
  update(body) {
    debugger;
    return this.http.post(this.endpoint.category.update, body);
  }
};
_CategoryService.\u0275fac = function CategoryService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CategoryService)();
};
_CategoryService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CategoryService, factory: _CategoryService.\u0275fac, providedIn: "root" });
var CategoryService = _CategoryService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CategoryService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/pages/admin/category/category.component.ts
var _c010 = ["editDialog"];
var _c110 = () => [5, 10, 25];
function CategoryComponent_th_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "th", 21)(1, "mat-checkbox", 22);
    \u0275\u0275listener("change", function CategoryComponent_th_23_Template_mat_checkbox_change_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView($event ? ctx_r2.masterToggle() : null);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r2.isAllSelected())("indeterminate", ctx_r2.isPartialSelected());
  }
}
function CategoryComponent_td_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 23)(1, "mat-checkbox", 24);
    \u0275\u0275listener("click", function CategoryComponent_td_24_Template_mat_checkbox_click_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      return \u0275\u0275resetView($event.stopPropagation());
    })("change", function CategoryComponent_td_24_Template_mat_checkbox_change_1_listener($event) {
      const row_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView($event ? ctx_r2.toggleSelection(row_r5) : null);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r2.selection.includes(row_r5));
  }
}
function CategoryComponent_th_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 25);
    \u0275\u0275text(1, "Category");
    \u0275\u0275elementEnd();
  }
}
function CategoryComponent_td_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(d_r6.categoryName);
  }
}
function CategoryComponent_th_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 21);
    \u0275\u0275text(1, "Actions");
    \u0275\u0275elementEnd();
  }
}
function CategoryComponent_td_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 23)(1, "button", 26);
    \u0275\u0275listener("click", function CategoryComponent_td_30_Template_button_click_1_listener() {
      const row_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openEditDialog(row_r8));
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "drive_file_rename_outline");
    \u0275\u0275elementEnd()()();
  }
}
function CategoryComponent_tr_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 27);
  }
}
function CategoryComponent_tr_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 28);
  }
}
function CategoryComponent_ng_template_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "h2", 29);
    \u0275\u0275text(1, "Edit Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "mat-dialog-content")(3, "mat-form-field", 30)(4, "mat-label");
    \u0275\u0275text(5, "Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 31);
    \u0275\u0275twoWayListener("ngModelChange", function CategoryComponent_ng_template_34_Template_input_ngModelChange_6_listener($event) {
      const data_r10 = \u0275\u0275restoreView(_r9).$implicit;
      \u0275\u0275twoWayBindingSet(data_r10.categoryName, $event) || (data_r10.categoryName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "mat-dialog-actions", 32)(8, "button", 33);
    \u0275\u0275text(9, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 34);
    \u0275\u0275text(11, "Update");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const data_r10 = ctx.$implicit;
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", data_r10.categoryName);
    \u0275\u0275advance(4);
    \u0275\u0275property("mat-dialog-close", data_r10);
  }
}
var _CategoryComponent = class _CategoryComponent {
  constructor(dialog) {
    this.dialog = dialog;
    this._categoryService = inject(CategoryService);
    this.dataSource = new MatTableDataSource([]);
    this.selection = [];
    this.displayedColumns = ["select", "categoryName", "actions"];
    this.CategoryName = "";
  }
  ngOnInit() {
    this.getCategoryList();
  }
  addCategory() {
    const name = this.CategoryName.trim();
    if (!name) {
      alert("Please enter category name.");
      return;
    }
    const newSalutution = {
      categoryId: 0,
      categoryName: this.CategoryName
    };
    debugger;
    this._categoryService.add(newSalutution).subscribe({
      next: (res) => {
        debugger;
        if (res.success) {
          alert(res.message);
          this.getCategoryList();
          this.CategoryName = "";
        }
      }
    });
  }
  getCategoryList() {
    debugger;
    this._categoryService.list().subscribe({
      next: (res) => {
        debugger;
        if (res.success) {
          this.dataSource.data = Array.isArray(res.data) ? res.data : [res.data];
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
      },
      error: (err) => {
        debugger;
        console.error("Error fetching sections:", err);
      }
    });
  }
  // for common table code 
  applyFilter(event) {
    const filterValue = event.target.value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  /** Checkbox Selection Logic */
  toggleSelection(row) {
    if (this.selection.includes(row)) {
      this.selection = this.selection.filter((r) => r !== row);
    } else {
      this.selection.push(row);
    }
  }
  isAllSelected() {
    return this.selection.length === this.dataSource.data.length;
  }
  isPartialSelected() {
    return this.selection.length > 0 && !this.isAllSelected();
  }
  masterToggle() {
    if (this.isAllSelected()) {
      this.selection = [];
    } else {
      this.selection = [...this.dataSource.data];
    }
  }
  // end here
  openEditDialog(category) {
    const dialogRef = this.dialog.open(this.editDialog, {
      width: "400px",
      data: __spreadValues({}, category)
      // Pass a copy of the section data
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        debugger;
        this._categoryService.update(result).subscribe({
          next: (res) => {
            alert(res.message);
            this.getCategoryList();
          }
        });
      }
    });
  }
};
_CategoryComponent.\u0275fac = function CategoryComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CategoryComponent)(\u0275\u0275directiveInject(MatDialog));
};
_CategoryComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CategoryComponent, selectors: [["app-category"]], viewQuery: function CategoryComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(MatPaginator, 5);
    \u0275\u0275viewQuery(MatSort, 5);
    \u0275\u0275viewQuery(_c010, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.paginator = _t.first);
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.sort = _t.first);
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.editDialog = _t.first);
  }
}, decls: 36, vars: 7, consts: [["editDialog", ""], [1, "col-sm-12"], [1, "form-field-full"], [1, "row"], [1, "col-sm-4"], [1, "w-100"], ["matInput", "", "placeholder", "Enter Category name", "required", "", 3, "ngModelChange", "ngModel"], [1, "m-t-4"], ["mat-flat-button", "", "color", "primary", "type", "submit", 3, "click"], ["appearance", "outline"], ["matInput", "", "placeholder", "Filter designations", 3, "keyup"], ["mat-table", "", "matSort", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "select"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "categoryName"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSize", "pageSizeOptions"], ["mat-header-cell", ""], [3, "change", "checked", "indeterminate"], ["mat-cell", ""], [3, "click", "change", "checked"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-icon-button", "", "color", "primary", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], ["mat-dialog-title", ""], ["appearance", "fill", 2, "width", "100%"], ["matInput", "", 3, "ngModelChange", "ngModel"], ["align", "end"], ["mat-button", "", "mat-dialog-close", ""], ["mat-raised-button", "", "color", "primary", 3, "mat-dialog-close"]], template: function CategoryComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "mat-card")(2, "mat-card-header")(3, "mat-card-title");
    \u0275\u0275text(4, "Add Category");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "mat-card-content")(6, "div", 2)(7, "div", 3)(8, "div", 4)(9, "mat-form-field", 5)(10, "input", 6);
    \u0275\u0275twoWayListener("ngModelChange", function CategoryComponent_Template_input_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.CategoryName, $event) || (ctx.CategoryName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 7)(12, "button", 8);
    \u0275\u0275listener("click", function CategoryComponent_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.addCategory());
    });
    \u0275\u0275text(13, "Save");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(14, "div", 1)(15, "mat-card")(16, "mat-card-content")(17, "mat-form-field", 9)(18, "mat-label");
    \u0275\u0275text(19, "Search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "input", 10);
    \u0275\u0275listener("keyup", function CategoryComponent_Template_input_keyup_20_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.applyFilter($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "table", 11);
    \u0275\u0275elementContainerStart(22, 12);
    \u0275\u0275template(23, CategoryComponent_th_23_Template, 2, 2, "th", 13)(24, CategoryComponent_td_24_Template, 2, 1, "td", 14);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(25, 15);
    \u0275\u0275template(26, CategoryComponent_th_26_Template, 2, 0, "th", 16)(27, CategoryComponent_td_27_Template, 2, 1, "td", 14);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(28, 17);
    \u0275\u0275template(29, CategoryComponent_th_29_Template, 2, 0, "th", 13)(30, CategoryComponent_td_30_Template, 4, 0, "td", 14);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(31, CategoryComponent_tr_31_Template, 1, 0, "tr", 18)(32, CategoryComponent_tr_32_Template, 1, 0, "tr", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275element(33, "mat-paginator", 20);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(34, CategoryComponent_ng_template_34_Template, 12, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx.CategoryName);
    \u0275\u0275advance(11);
    \u0275\u0275property("dataSource", ctx.dataSource);
    \u0275\u0275advance(10);
    \u0275\u0275property("matHeaderRowDef", ctx.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("pageSize", 5)("pageSizeOptions", \u0275\u0275pureFunction0(6, _c110));
  }
}, dependencies: [
  MatCard,
  MaterialModule,
  MatButton,
  MatIconButton,
  MatCardContent,
  MatCardHeader,
  MatCardTitle,
  MatCheckbox,
  MatDialogClose,
  MatDialogTitle,
  MatDialogActions,
  MatDialogContent,
  MatFormField,
  MatLabel,
  MatIcon,
  MatInput,
  MatPaginator,
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
  DefaultValueAccessor,
  NgControlStatus,
  RequiredValidator,
  NgModel,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatOptionModule,
  MatSelectModule,
  TranslateModule
], encapsulation: 2 });
var CategoryComponent = _CategoryComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CategoryComponent, [{
    type: Component,
    args: [{ selector: "app-category", imports: [
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
      TranslateModule
    ], template: '<div class="col-sm-12">\r\n    <mat-card>\r\n        <mat-card-header>\r\n            <mat-card-title>Add Category</mat-card-title>\r\n        </mat-card-header>\r\n\r\n        <mat-card-content>\r\n            <div class="form-field-full">\r\n                <div class="row">\r\n                    <div class="col-sm-4">\r\n                        <mat-form-field class="w-100">\r\n                            <!-- <mat-label>House</mat-label> -->\r\n                            <input  matInput [(ngModel)]="CategoryName" placeholder="Enter Category name"  required=""/>\r\n                        </mat-form-field>\r\n                    </div>\r\n                     <div class="m-t-4">\r\n                    <button mat-flat-button color="primary" type="submit" (click)="addCategory()">Save</button>\r\n                </div>\r\n                </div>\r\n               \r\n            </div>\r\n        </mat-card-content>\r\n    </mat-card>\r\n</div>\r\n\r\n\r\n<div class="col-sm-12">\r\n    <mat-card>\r\n        <mat-card-content>\r\n            <mat-form-field appearance="outline">\r\n                <mat-label>Search</mat-label>\r\n                <input matInput (keyup)="applyFilter($event)" placeholder="Filter designations">\r\n            </mat-form-field>\r\n            <table mat-table [dataSource]="dataSource" matSort class="mat-elevation-z8">\r\n\r\n                <!-- ID Column -->\r\n                <!-- Checkbox Column -->\r\n                <ng-container matColumnDef="select">\r\n                    <th mat-header-cell *matHeaderCellDef>\r\n                        <mat-checkbox (change)="$event ? masterToggle() : null" [checked]="isAllSelected()"\r\n                            [indeterminate]="isPartialSelected()">\r\n                        </mat-checkbox>\r\n                    </th>\r\n                    <td mat-cell *matCellDef="let row">\r\n                        <mat-checkbox (click)="$event.stopPropagation()" (change)="$event ? toggleSelection(row) : null"\r\n                            [checked]="selection.includes(row)">\r\n                        </mat-checkbox>\r\n                    </td>\r\n                </ng-container>\r\n\r\n                <!-- sectionName Column -->\r\n                <ng-container matColumnDef="categoryName">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header>Category</th>\r\n                    <td mat-cell *matCellDef="let d">{{ d.categoryName }}</td>\r\n                </ng-container>\r\n\r\n                <!-- Actions Column -->\r\n                <ng-container matColumnDef="actions">\r\n                    <th mat-header-cell *matHeaderCellDef>Actions</th>\r\n                    <td mat-cell *matCellDef="let row">\r\n                        <button mat-icon-button color="primary" (click)="openEditDialog(row)">\r\n                            <mat-icon>drive_file_rename_outline</mat-icon>\r\n                        </button>\r\n\r\n                    </td>\r\n                </ng-container>\r\n\r\n                <!-- Header & Rows -->\r\n                <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>\r\n                <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>\r\n\r\n            </table>\r\n            <!-- Paginator -->\r\n            <mat-paginator [pageSize]="5" [pageSizeOptions]="[5, 10, 25]" showFirstLastButtons></mat-paginator>\r\n        </mat-card-content>\r\n    </mat-card>\r\n</div>\r\n\r\n<!-- \u2728 EDIT POPUP (ng-template) -->\r\n<ng-template #editDialog let-data>\r\n  <h2 mat-dialog-title>Edit Category</h2>\r\n  <mat-dialog-content>\r\n    <mat-form-field appearance="fill" style="width:100%">\r\n      <mat-label>Category</mat-label>\r\n      <input matInput [(ngModel)]="data.categoryName">\r\n    </mat-form-field>\r\n  </mat-dialog-content>\r\n  <mat-dialog-actions align="end">\r\n    <button mat-button mat-dialog-close>Cancel</button>\r\n    <button mat-raised-button color="primary" [mat-dialog-close]="data">Update</button>\r\n  </mat-dialog-actions>\r\n</ng-template>\r\n' }]
  }], () => [{ type: MatDialog }], { paginator: [{
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CategoryComponent, { className: "CategoryComponent", filePath: "src/app/pages/admin/category/category.component.ts", lineNumber: 38 });
})();

// src/app/pages/admin/add-school/add-school.component.ts
var _AddSchoolComponent = class _AddSchoolComponent {
  constructor(fb) {
    this.fb = fb;
  }
  ngOnInit() {
    this.collegeForm = this.fb.group({
      collegeId: [0],
      collegeAbreviation: ["", [Validators.required, Validators.maxLength(10)]],
      collegeName: ["", [Validators.required, Validators.maxLength(100)]],
      collegeAddress: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      phone: ["", [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      fax: [""],
      webSite: [""],
      affilicationNo: [""],
      board: [""],
      collegeLogo: [""],
      schoolCode: [""],
      dioceseCode: [""],
      portalURL: [""]
    });
  }
  onSubmit() {
    if (this.collegeForm.valid) {
      console.log("Form Submitted:", this.collegeForm.value);
    } else {
      this.collegeForm.markAllAsTouched();
    }
  }
  onCancel() {
    this.collegeForm.reset();
  }
};
_AddSchoolComponent.\u0275fac = function AddSchoolComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AddSchoolComponent)(\u0275\u0275directiveInject(FormBuilder));
};
_AddSchoolComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AddSchoolComponent, selectors: [["app-add-school"]], decls: 24, vars: 1, consts: [[1, "col-sm-12"], [3, "ngSubmit", "formGroup"], [1, "form-field-full"], [1, "row"], [1, "col-sm-3"], [1, "w-100"], ["matInput", "", "formControlName", "courseName", "placeholder", "Enter Class Name"], ["matInput", "", "type", "number", "formControlName", "seqNumber", "placeholder", "Enter Sequence No."], [1, "m-t-8"], ["mat-flat-button", "", "color", "primary", "type", "submit"], ["mat-button", "", "type", "button", 1, "m-x-8", 3, "click"]], template: function AddSchoolComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "mat-card")(2, "mat-card-header")(3, "mat-card-title");
    \u0275\u0275text(4, "Add Class");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "form", 1);
    \u0275\u0275listener("ngSubmit", function AddSchoolComponent_Template_form_ngSubmit_5_listener() {
      return ctx.onSubmit();
    });
    \u0275\u0275elementStart(6, "mat-card-content")(7, "div", 2)(8, "div", 3)(9, "div", 4)(10, "mat-form-field", 5)(11, "mat-label");
    \u0275\u0275text(12, "Class Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "input", 6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 4)(15, "mat-form-field", 5)(16, "mat-label");
    \u0275\u0275text(17, "Sequence No.");
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "input", 7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 8)(20, "button", 9);
    \u0275\u0275text(21, "Save");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "button", 10);
    \u0275\u0275listener("click", function AddSchoolComponent_Template_button_click_22_listener() {
      return ctx.onCancel();
    });
    \u0275\u0275text(23, "Cancel");
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275property("formGroup", ctx.collegeForm);
  }
}, dependencies: [
  MatCard,
  MaterialModule,
  MatButton,
  MatCardContent,
  MatCardHeader,
  MatCardTitle,
  MatFormField,
  MatLabel,
  MatInput,
  FormsModule,
  \u0275NgNoValidate,
  DefaultValueAccessor,
  NumberValueAccessor,
  NgControlStatus,
  NgControlStatusGroup,
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
], encapsulation: 2 });
var AddSchoolComponent = _AddSchoolComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AddSchoolComponent, [{
    type: Component,
    args: [{ selector: "app-add-school", imports: [
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
    ], template: '<div class="col-sm-12">\r\n    <mat-card>\r\n        <mat-card-header>\r\n            <mat-card-title>Add Class</mat-card-title>\r\n        </mat-card-header>\r\n\r\n        <form [formGroup]="collegeForm" (ngSubmit)="onSubmit()">\r\n            <mat-card-content>\r\n                <div class="form-field-full">\r\n                    <div class="row">\r\n                        <div class="col-sm-3">\r\n                            <mat-form-field class="w-100">\r\n                                <mat-label>Class Name</mat-label>\r\n                                <input matInput formControlName="courseName" placeholder="Enter Class Name" />\r\n                            </mat-form-field>\r\n                        </div>\r\n                        <div class="col-sm-3">\r\n                            <mat-form-field class="w-100">\r\n                                <mat-label>Sequence No.</mat-label>\r\n                                <input matInput type="number"  formControlName="seqNumber" placeholder="Enter Sequence No." />\r\n                            </mat-form-field>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class="m-t-8">\r\n                        <button mat-flat-button color="primary" type="submit">Save</button>\r\n                        <button mat-button class="m-x-8" type="button" (click)="onCancel()">Cancel</button>\r\n                    </div>\r\n                </div>\r\n            </mat-card-content>\r\n        </form>\r\n    </mat-card>\r\n</div>\r\n\r\n\r\n\r\n\r\n' }]
  }], () => [{ type: FormBuilder }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AddSchoolComponent, { className: "AddSchoolComponent", filePath: "src/app/pages/admin/add-school/add-school.component.ts", lineNumber: 33 });
})();

// src/app/services/subjectmaster.service.ts
var _SubjectmasterService = class _SubjectmasterService {
  constructor() {
    this.http = inject(HttpClient);
    this.endpoint = apiEndpoint;
  }
  // subject -- START --
  subjectTypeList() {
    return this.http.get(this.endpoint.subject.subjectType);
  }
  addSubject(body) {
    return this.http.post(this.endpoint.subject.add, body);
  }
  updateSubject(body) {
    return this.http.post(this.endpoint.subject.update, body);
  }
  listSubject(subhecttype) {
    return this.http.get(this.endpoint.subject.list + subhecttype);
  }
  //assign subject
  assignSubject(body) {
    return this.http.post(this.endpoint.assignSubject.add, body);
  }
  deleteAssignSubject(assingSubjectId) {
    return this.http.get(this.endpoint.assignSubject.delete + assingSubjectId);
  }
  listAssignSubject(sectionId) {
    return this.http.get(this.endpoint.assignSubject.list + sectionId);
  }
};
_SubjectmasterService.\u0275fac = function SubjectmasterService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SubjectmasterService)();
};
_SubjectmasterService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SubjectmasterService, factory: _SubjectmasterService.\u0275fac, providedIn: "root" });
var SubjectmasterService = _SubjectmasterService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SubjectmasterService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/pages/admin/addsubject/addsubject.component.ts
var _c011 = ["editDialog"];
var _c111 = () => [5, 10, 25];
var _forTrack05 = ($index, $item) => $item.type;
function AddsubjectComponent_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const subType_r2 = ctx.$implicit;
    \u0275\u0275property("value", subType_r2.type);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", subType_r2.detail, " ");
  }
}
function AddsubjectComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Subject Code is required");
    \u0275\u0275elementEnd();
  }
}
function AddsubjectComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "CSubject Code must be at least 3 characters long");
    \u0275\u0275elementEnd();
  }
}
function AddsubjectComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Subject Code cannot exceed 50 characters");
    \u0275\u0275elementEnd();
  }
}
function AddsubjectComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Subject Name is required");
    \u0275\u0275elementEnd();
  }
}
function AddsubjectComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Subject Name must be at least 3 characters long");
    \u0275\u0275elementEnd();
  }
}
function AddsubjectComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Subject Name cannot exceed 50 characters");
    \u0275\u0275elementEnd();
  }
}
function AddsubjectComponent_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Sequence Number is required");
    \u0275\u0275elementEnd();
  }
}
function AddsubjectComponent_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Squence value should have greater than 0");
    \u0275\u0275elementEnd();
  }
}
function AddsubjectComponent_Conditional_51_th_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 32);
    \u0275\u0275text(1, "Subject Code");
    \u0275\u0275elementEnd();
  }
}
function AddsubjectComponent_Conditional_51_td_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r3.subjectCode);
  }
}
function AddsubjectComponent_Conditional_51_th_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 32);
    \u0275\u0275text(1, "Subject Name");
    \u0275\u0275elementEnd();
  }
}
function AddsubjectComponent_Conditional_51_td_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r4.subjectName);
  }
}
function AddsubjectComponent_Conditional_51_th_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 32);
    \u0275\u0275text(1, "Type");
    \u0275\u0275elementEnd();
  }
}
function AddsubjectComponent_Conditional_51_td_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r5.subjectType);
  }
}
function AddsubjectComponent_Conditional_51_th_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 32);
    \u0275\u0275text(1, "Sequence");
    \u0275\u0275elementEnd();
  }
}
function AddsubjectComponent_Conditional_51_td_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r6.subjectSeq);
  }
}
function AddsubjectComponent_Conditional_51_th_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 34);
    \u0275\u0275text(1, "Actions");
    \u0275\u0275elementEnd();
  }
}
function AddsubjectComponent_Conditional_51_td_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 33)(1, "button", 35);
    \u0275\u0275listener("click", function AddsubjectComponent_Conditional_51_td_15_Template_button_click_1_listener() {
      const element_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r8 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r8.openEditDialog(element_r8));
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "drive_file_rename_outline");
    \u0275\u0275elementEnd()()();
  }
}
function AddsubjectComponent_Conditional_51_tr_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 36);
  }
}
function AddsubjectComponent_Conditional_51_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 37);
  }
}
function AddsubjectComponent_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 20);
    \u0275\u0275elementContainerStart(1, 21);
    \u0275\u0275template(2, AddsubjectComponent_Conditional_51_th_2_Template, 2, 0, "th", 22)(3, AddsubjectComponent_Conditional_51_td_3_Template, 2, 1, "td", 23);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(4, 24);
    \u0275\u0275template(5, AddsubjectComponent_Conditional_51_th_5_Template, 2, 0, "th", 22)(6, AddsubjectComponent_Conditional_51_td_6_Template, 2, 1, "td", 23);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(7, 25);
    \u0275\u0275template(8, AddsubjectComponent_Conditional_51_th_8_Template, 2, 0, "th", 22)(9, AddsubjectComponent_Conditional_51_td_9_Template, 2, 1, "td", 23);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(10, 26);
    \u0275\u0275template(11, AddsubjectComponent_Conditional_51_th_11_Template, 2, 0, "th", 22)(12, AddsubjectComponent_Conditional_51_td_12_Template, 2, 1, "td", 23);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(13, 27);
    \u0275\u0275template(14, AddsubjectComponent_Conditional_51_th_14_Template, 2, 0, "th", 28)(15, AddsubjectComponent_Conditional_51_td_15_Template, 4, 0, "td", 23);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(16, AddsubjectComponent_Conditional_51_tr_16_Template, 1, 0, "tr", 29)(17, AddsubjectComponent_Conditional_51_tr_17_Template, 1, 0, "tr", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "mat-paginator", 31);
  }
  if (rf & 2) {
    const ctx_r8 = \u0275\u0275nextContext();
    \u0275\u0275property("dataSource", ctx_r8.dataSource);
    \u0275\u0275advance(16);
    \u0275\u0275property("matHeaderRowDef", ctx_r8.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx_r8.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("pageSize", 5)("pageSizeOptions", \u0275\u0275pureFunction0(5, _c111));
  }
}
function AddsubjectComponent_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 19);
    \u0275\u0275text(1, "No subjects added yet.");
    \u0275\u0275elementEnd();
  }
}
function AddsubjectComponent_ng_template_53_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const subType_r11 = ctx.$implicit;
    \u0275\u0275property("value", subType_r11.type);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", subType_r11.detail, " ");
  }
}
function AddsubjectComponent_ng_template_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "h2", 38);
    \u0275\u0275text(1, "Edit Subject");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "mat-dialog-content")(3, "form", 39)(4, "mat-form-field", 40)(5, "mat-label");
    \u0275\u0275text(6, "Subject Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "input", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "mat-form-field", 40)(9, "mat-label");
    \u0275\u0275text(10, "Subject Code");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "input", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-form-field", 40)(13, "mat-label");
    \u0275\u0275text(14, "Subject Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "mat-select", 43);
    \u0275\u0275repeaterCreate(16, AddsubjectComponent_ng_template_53_For_17_Template, 2, 2, "mat-option", 8, _forTrack05);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "mat-form-field", 40)(19, "mat-label");
    \u0275\u0275text(20, "Sequence No.");
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "input", 44);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "mat-dialog-actions", 45)(23, "button", 46);
    \u0275\u0275listener("click", function AddsubjectComponent_ng_template_53_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r8 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r8.closeDialog());
    });
    \u0275\u0275text(24, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "button", 47);
    \u0275\u0275listener("click", function AddsubjectComponent_ng_template_53_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r8 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r8.updateSubject());
    });
    \u0275\u0275text(26, "Update");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r8 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r8.editForm);
    \u0275\u0275advance(13);
    \u0275\u0275repeater(ctx_r8.subjectTypeList);
  }
}
var _AddsubjectComponent = class _AddsubjectComponent {
  constructor(fb, dialog) {
    this.fb = fb;
    this.dialog = dialog;
    this._subjectService = inject(SubjectmasterService);
    this.dataSource = new MatTableDataSource([]);
    this.displayedColumns = ["subjectCode", "subjectName", "subjectType", "subjectSeq", "actions"];
  }
  ngOnInit() {
    debugger;
    this.subjectForm = this.fb.group({
      subjectId: [0],
      subjectName: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      subjectCode: [null, Validators.required],
      subjectType: [0, [Validators.required]],
      subjectSeq: [null, Validators.required]
    });
    this.loadSubjectTypeList();
  }
  loadSubjectTypeList() {
    this._subjectService.subjectTypeList().subscribe({
      next: (res) => {
        this.subjectTypeList = Array.isArray(res.data) ? res.data : [res.data];
      },
      error: (err) => {
        alert("something went wrong");
        console.log("subject type list error", err);
      }
    });
  }
  addSubject() {
    if (this.subjectForm.valid) {
      this._subjectService.addSubject(this.subjectForm.value).subscribe({
        next: (res) => {
          if (res.success) {
            alert(res.message);
            this.subjectForm.reset();
          } else {
            alert("Failed to add class");
          }
        },
        error: (err) => {
          console.log("Error adding class:", err);
          alert("An error occurred while adding the class");
        }
      });
    } else {
      this.subjectForm.markAllAsTouched();
    }
  }
  onCancel() {
    this.subjectForm.reset();
  }
  getSubjectList() {
    debugger;
    const subjectType = this.subjectForm.get("subjectType")?.value;
    if (!subjectType) {
      return;
    }
    this._subjectService.listSubject(subjectType).subscribe({
      next: (res) => {
        debugger;
        if (res.success && res.data) {
          this.dataSource.data = Array.isArray(res.data) ? res.data : [res.data];
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        } else {
          debugger;
          alert(res.message);
        }
      },
      error: (err) => {
        debugger;
        console.log("error");
      }
    });
  }
  applyFilter(event) {
    const filterValue = event.target.value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  /** Checkbox Selection Logic */
  toggleSelection(row) {
    if (this.subjectList.includes(row)) {
      this.subjectList = this.subjectList.filter((r) => r !== row);
    } else {
      this.subjectList.push(row);
    }
  }
  isAllSelected() {
    return this.subjectList.length === this.dataSource.data.length;
  }
  isPartialSelected() {
    return this.subjectList.length > 0 && !this.isAllSelected();
  }
  masterToggle() {
    if (this.isAllSelected()) {
      this.subjectList = [];
    } else {
      this.subjectList = [...this.dataSource.data];
    }
  }
  openEditDialog(subject) {
    debugger;
    this.editForm = this.fb.group({
      subjectId: [subject.subjectId],
      subjectName: [subject.subjectName, [Validators.required]],
      subjectCode: [subject.subjectCode, [Validators.required]],
      subjectType: [subject.subjectType, [Validators.required]],
      subjectSeq: [subject.subjectSeq, [Validators.required, Validators.min(1)]]
    });
    this.dialogRef = this.dialog.open(this.editDialog, {
      width: "500px",
      disableClose: true
    });
  }
  /** ✅ Close Popup */
  closeDialog() {
    if (this.dialogRef) {
      this.dialogRef.close();
    }
  }
  updateSubject() {
    if (this.editForm.valid) {
      this._subjectService.updateSubject(this.editForm.value).subscribe({
        next: (res) => {
          if (res.success) {
            alert("Subject updated successfully!");
            this.dialogRef.close();
            this.getSubjectList();
          } else {
            alert("Failed to update subject");
          }
        },
        error: (err) => {
          console.error("Error updating subject:", err);
          alert("Error while updating");
        }
      });
    } else {
      this.editForm.markAllAsTouched();
    }
  }
};
_AddsubjectComponent.\u0275fac = function AddsubjectComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AddsubjectComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(MatDialog));
};
_AddsubjectComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AddsubjectComponent, selectors: [["app-addsubject"]], viewQuery: function AddsubjectComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(MatPaginator, 5);
    \u0275\u0275viewQuery(MatSort, 5);
    \u0275\u0275viewQuery(_c011, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.paginator = _t.first);
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.sort = _t.first);
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.editDialog = _t.first);
  }
}, decls: 55, vars: 10, consts: [["editDialog", ""], [1, "col-sm-12"], [3, "ngSubmit", "formGroup"], [1, "form-field-full"], [1, "row"], [1, "col-sm-3"], ["appearance", "fill", 1, "w-100"], ["formControlName", "subjectType", 3, "selectionChange"], [3, "value"], [1, "w-100"], ["matInput", "", "formControlName", "subjectCode", "placeholder", "Enter Subject Code"], ["matInput", "", "formControlName", "subjectName", "placeholder", "Enter Subject Name"], ["matInput", "", "type", "number", "formControlName", "subjectSeq", "placeholder", "Enter Sequence No."], [1, "m-t-8"], ["mat-flat-button", "", "color", "primary", "type", "submit"], ["mat-button", "", "type", "button", 1, "m-x-8", 3, "click"], [1, "col-sm-12", "mt-3"], ["appearance", "fill"], ["matInput", "", "placeholder", "Search subjects", 3, "keyup"], [1, "text-center", "text-muted", "mt-2"], ["mat-table", "", "matSort", "", 1, "mat-elevation-z8", "w-100", 3, "dataSource"], ["matColumnDef", "subjectCode"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "subjectName"], ["matColumnDef", "subjectType"], ["matColumnDef", "subjectSeq"], ["matColumnDef", "actions"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSize", "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-cell", ""], ["mat-icon-button", "", "color", "primary", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], ["mat-dialog-title", ""], [1, "w-100", 3, "formGroup"], ["appearance", "fill", 2, "width", "100%"], ["matInput", "", "formControlName", "subjectName"], ["matInput", "", "formControlName", "subjectCode"], ["formControlName", "subjectType"], ["matInput", "", "type", "number", "formControlName", "subjectSeq"], ["align", "end"], ["mat-button", "", 3, "click"], ["mat-flat-button", "", "color", "primary", 3, "click"]], template: function AddsubjectComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "mat-card")(2, "mat-card-header")(3, "mat-card-title");
    \u0275\u0275text(4, "Add Subject");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "form", 2);
    \u0275\u0275listener("ngSubmit", function AddsubjectComponent_Template_form_ngSubmit_5_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.addSubject());
    });
    \u0275\u0275elementStart(6, "mat-card-content")(7, "div", 3)(8, "div", 4)(9, "div", 5)(10, "mat-form-field", 6)(11, "mat-label");
    \u0275\u0275text(12, "Select Subject Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "mat-select", 7);
    \u0275\u0275listener("selectionChange", function AddsubjectComponent_Template_mat_select_selectionChange_13_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.getSubjectList());
    });
    \u0275\u0275repeaterCreate(14, AddsubjectComponent_For_15_Template, 2, 2, "mat-option", 8, _forTrack05);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 5)(17, "mat-form-field", 9)(18, "mat-label");
    \u0275\u0275text(19, "Subject Code");
    \u0275\u0275elementEnd();
    \u0275\u0275element(20, "input", 10);
    \u0275\u0275conditionalCreate(21, AddsubjectComponent_Conditional_21_Template, 2, 0, "mat-error");
    \u0275\u0275conditionalCreate(22, AddsubjectComponent_Conditional_22_Template, 2, 0, "mat-error");
    \u0275\u0275conditionalCreate(23, AddsubjectComponent_Conditional_23_Template, 2, 0, "mat-error");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 5)(25, "mat-form-field", 9)(26, "mat-label");
    \u0275\u0275text(27, "Subject Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(28, "input", 11);
    \u0275\u0275conditionalCreate(29, AddsubjectComponent_Conditional_29_Template, 2, 0, "mat-error");
    \u0275\u0275conditionalCreate(30, AddsubjectComponent_Conditional_30_Template, 2, 0, "mat-error");
    \u0275\u0275conditionalCreate(31, AddsubjectComponent_Conditional_31_Template, 2, 0, "mat-error");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 5)(33, "mat-form-field", 9)(34, "mat-label");
    \u0275\u0275text(35, "Sequence No.");
    \u0275\u0275elementEnd();
    \u0275\u0275element(36, "input", 12);
    \u0275\u0275conditionalCreate(37, AddsubjectComponent_Conditional_37_Template, 2, 0, "mat-error");
    \u0275\u0275conditionalCreate(38, AddsubjectComponent_Conditional_38_Template, 2, 0, "mat-error");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(39, "div", 13)(40, "button", 14);
    \u0275\u0275text(41, "Save");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "button", 15);
    \u0275\u0275listener("click", function AddsubjectComponent_Template_button_click_42_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onCancel());
    });
    \u0275\u0275text(43, "Cancel");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(44, "div", 16)(45, "mat-card")(46, "mat-card-content")(47, "mat-form-field", 17)(48, "mat-label");
    \u0275\u0275text(49, "Search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "input", 18);
    \u0275\u0275listener("keyup", function AddsubjectComponent_Template_input_keyup_50_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.applyFilter($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(51, AddsubjectComponent_Conditional_51_Template, 19, 6)(52, AddsubjectComponent_Conditional_52_Template, 2, 0, "p", 19);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(53, AddsubjectComponent_ng_template_53_Template, 27, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    let tmp_9_0;
    let tmp_10_0;
    \u0275\u0275advance(5);
    \u0275\u0275property("formGroup", ctx.subjectForm);
    \u0275\u0275advance(9);
    \u0275\u0275repeater(ctx.subjectTypeList);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(((tmp_3_0 = ctx.subjectForm.get("subjectCode")) == null ? null : tmp_3_0.hasError("required")) && ((tmp_3_0 = ctx.subjectForm.get("subjectCode")) == null ? null : tmp_3_0.touched) ? 21 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_4_0 = ctx.subjectForm.get("subjectCode")) == null ? null : tmp_4_0.hasError("minlength")) && ((tmp_4_0 = ctx.subjectForm.get("subjectCode")) == null ? null : tmp_4_0.touched) ? 22 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_5_0 = ctx.subjectForm.get("subjectCode")) == null ? null : tmp_5_0.hasError("maxlength")) && ((tmp_5_0 = ctx.subjectForm.get("subjectCode")) == null ? null : tmp_5_0.touched) ? 23 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(((tmp_6_0 = ctx.subjectForm.get("subjectName")) == null ? null : tmp_6_0.hasError("required")) && ((tmp_6_0 = ctx.subjectForm.get("subjectName")) == null ? null : tmp_6_0.touched) ? 29 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_7_0 = ctx.subjectForm.get("subjectName")) == null ? null : tmp_7_0.hasError("minlength")) && ((tmp_7_0 = ctx.subjectForm.get("subjectName")) == null ? null : tmp_7_0.touched) ? 30 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_8_0 = ctx.subjectForm.get("subjectName")) == null ? null : tmp_8_0.hasError("maxlength")) && ((tmp_8_0 = ctx.subjectForm.get("subjectName")) == null ? null : tmp_8_0.touched) ? 31 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(((tmp_9_0 = ctx.subjectForm.get("subjectSeq")) == null ? null : tmp_9_0.hasError("required")) && ((tmp_9_0 = ctx.subjectForm.get("subjectSeq")) == null ? null : tmp_9_0.touched) ? 37 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_10_0 = ctx.subjectForm.get("subjectSeq")) == null ? null : tmp_10_0.hasError("min")) && ((tmp_10_0 = ctx.subjectForm.get("subjectSeq")) == null ? null : tmp_10_0.touched) ? 38 : -1);
    \u0275\u0275advance(13);
    \u0275\u0275conditional(ctx.dataSource.data.length > 0 ? 51 : 52);
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
  NumberValueAccessor,
  NgControlStatus,
  NgControlStatusGroup,
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
], encapsulation: 2 });
var AddsubjectComponent = _AddsubjectComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AddsubjectComponent, [{
    type: Component,
    args: [{ selector: "app-addsubject", imports: [
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
            <mat-card-title>Add Subject</mat-card-title>\r
        </mat-card-header>\r
\r
        <form [formGroup]="subjectForm" (ngSubmit)="addSubject()">\r
            <mat-card-content>\r
                <div class="form-field-full">\r
                    <div class="row">\r
                        <div class="col-sm-3">\r
                            <mat-form-field appearance="fill" class="w-100">\r
                                <mat-label>Select Subject Type</mat-label>\r
                                <mat-select formControlName="subjectType" (selectionChange)="getSubjectList()">\r
                                    @for (subType of subjectTypeList; track subType.type) {\r
                                    <mat-option [value]="subType.type">\r
                                        {{ subType.detail }}\r
                                    </mat-option>\r
                                    }\r
                                </mat-select>\r
                            </mat-form-field>\r
                        </div>\r
                        <div class="col-sm-3">\r
                            <mat-form-field class="w-100">\r
                                <mat-label>Subject Code</mat-label>\r
                                <input matInput formControlName="subjectCode" placeholder="Enter Subject Code" />\r
\r
                                @if (subjectForm.get('subjectCode')?.hasError('required') &&\r
                                subjectForm.get('subjectCode')?.touched) {\r
                                <mat-error>Subject Code is required</mat-error>\r
                                }\r
                                @if (subjectForm.get('subjectCode')?.hasError('minlength') &&\r
                                subjectForm.get('subjectCode')?.touched) {\r
                                <mat-error>CSubject Code must be at least 3 characters long</mat-error>\r
                                }\r
                                @if (subjectForm.get('subjectCode')?.hasError('maxlength') &&\r
                                subjectForm.get('subjectCode')?.touched) {\r
                                <mat-error>Subject Code cannot exceed 50 characters</mat-error>\r
                                }\r
                            </mat-form-field>\r
                        </div>\r
                        <div class="col-sm-3">\r
                            <mat-form-field class="w-100">\r
                                <mat-label>Subject Name</mat-label>\r
                                <input matInput formControlName="subjectName" placeholder="Enter Subject Name" />\r
                                @if (subjectForm.get('subjectName')?.hasError('required') &&\r
                                subjectForm.get('subjectName')?.touched) {\r
                                <mat-error>Subject Name is required</mat-error>\r
                                }\r
                                @if (subjectForm.get('subjectName')?.hasError('minlength') &&\r
                                subjectForm.get('subjectName')?.touched) {\r
                                <mat-error>Subject Name must be at least 3 characters long</mat-error>\r
                                }\r
                                @if (subjectForm.get('subjectName')?.hasError('maxlength') &&\r
                                subjectForm.get('subjectName')?.touched) {\r
                                <mat-error>Subject Name cannot exceed 50 characters</mat-error>\r
                                }\r
                            </mat-form-field>\r
                        </div>\r
                        <div class="col-sm-3">\r
                            <mat-form-field class="w-100">\r
                                <mat-label>Sequence No.</mat-label>\r
                                <input matInput type="number" formControlName="subjectSeq"\r
                                    placeholder="Enter Sequence No." />\r
                                @if(subjectForm.get('subjectSeq')?.hasError('required')&&\r
                                subjectForm.get('subjectSeq')?.touched){\r
                                <mat-error> Sequence Number is required</mat-error>\r
                                }\r
                                @if(subjectForm.get('subjectSeq')?.hasError('min') &&\r
                                subjectForm.get('subjectSeq')?.touched){\r
                                <mat-error>Squence value should have greater than 0</mat-error>\r
                                }\r
                            </mat-form-field>\r
                        </div>\r
                    </div>\r
\r
                    <div class="m-t-8">\r
                        <button mat-flat-button color="primary" type="submit">Save</button>\r
                        <button mat-button class="m-x-8" type="button" (click)="onCancel()">Cancel</button>\r
                    </div>\r
                </div>\r
            </mat-card-content>\r
        </form>\r
    </mat-card>\r
</div>\r
\r
\r
\r
<div class="col-sm-12 mt-3">\r
    <mat-card>\r
        <mat-card-content>\r
\r
            <mat-form-field appearance="fill">\r
                <mat-label>Search</mat-label>\r
                <input matInput (keyup)="applyFilter($event)" placeholder="Search subjects" />\r
            </mat-form-field>\r
\r
            @if (dataSource.data.length > 0) {\r
            <table mat-table [dataSource]="dataSource" matSort class="mat-elevation-z8 w-100">\r
\r
                <ng-container matColumnDef="subjectCode">\r
                    <th mat-header-cell *matHeaderCellDef mat-sort-header>Subject Code</th>\r
                    <td mat-cell *matCellDef="let element">{{ element.subjectCode }}</td>\r
                </ng-container>\r
\r
                <ng-container matColumnDef="subjectName">\r
                    <th mat-header-cell *matHeaderCellDef mat-sort-header>Subject Name</th>\r
                    <td mat-cell *matCellDef="let element">{{ element.subjectName }}</td>\r
                </ng-container>\r
\r
                <ng-container matColumnDef="subjectType">\r
                    <th mat-header-cell *matHeaderCellDef mat-sort-header>Type</th>\r
                    <td mat-cell *matCellDef="let element">{{ element.subjectType }}</td>\r
                </ng-container>\r
\r
                <ng-container matColumnDef="subjectSeq">\r
                    <th mat-header-cell *matHeaderCellDef mat-sort-header>Sequence</th>\r
                    <td mat-cell *matCellDef="let element">{{ element.subjectSeq }}</td>\r
                </ng-container>\r
\r
                <ng-container matColumnDef="actions">\r
                    <th mat-header-cell *matHeaderCellDef>Actions</th>\r
                    <td mat-cell *matCellDef="let element"><button mat-icon-button color="primary" (click)="openEditDialog(element)">\r
                            <mat-icon>drive_file_rename_outline</mat-icon>\r
                        </button>\r
                    </td>\r
                </ng-container>\r
\r
                <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>\r
                <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>\r
            </table>\r
\r
            <mat-paginator [pageSize]="5" [pageSizeOptions]="[5, 10, 25]" showFirstLastButtons></mat-paginator>\r
            } @else {\r
            <p class="text-center text-muted mt-2">No subjects added yet.</p>\r
            }\r
\r
        </mat-card-content>\r
    </mat-card>\r
</div>\r
\r
\r
<!-- \u2705 Edit Popup Template -->\r
<ng-template #editDialog>\r
    <h2 mat-dialog-title>Edit Subject</h2>\r
    <mat-dialog-content>\r
        <form [formGroup]="editForm" class="w-100">\r
            <mat-form-field appearance="fill" style="width:100%">\r
                <mat-label>Subject Name</mat-label>\r
                <input matInput formControlName="subjectName" />\r
            </mat-form-field>\r
\r
            <mat-form-field appearance="fill" style="width:100%">\r
                <mat-label>Subject Code</mat-label>\r
                <input matInput formControlName="subjectCode" />\r
            </mat-form-field>\r
\r
            <mat-form-field appearance="fill" style="width:100%">\r
                <mat-label>Subject Type</mat-label>\r
                <mat-select formControlName="subjectType">\r
                    @for (subType of subjectTypeList; track subType.type) {\r
                    <mat-option [value]="subType.type">\r
                        {{ subType.detail }}\r
                    </mat-option>\r
                    }\r
                </mat-select>\r
            </mat-form-field>\r
            <mat-form-field appearance="fill" style="width:100%">\r
                <mat-label>Sequence No.</mat-label>\r
                <input matInput type="number" formControlName="subjectSeq" />\r
            </mat-form-field>\r
        </form>\r
    </mat-dialog-content>\r
\r
    <mat-dialog-actions align="end">\r
        <button mat-button (click)="closeDialog()">Cancel</button>\r
        <button mat-flat-button color="primary" (click)="updateSubject()">Update</button>\r
    </mat-dialog-actions>\r
</ng-template>` }]
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AddsubjectComponent, { className: "AddsubjectComponent", filePath: "src/app/pages/admin/addsubject/addsubject.component.ts", lineNumber: 38 });
})();

// src/app/pages/admin/assignsubject/assignsubject.component.ts
var _c012 = ["editDialog"];
var _c112 = () => [5, 10, 25];
var _forTrack06 = ($index, $item) => $item.sessionId;
var _forTrack14 = ($index, $item) => $item.collegeId;
var _forTrack23 = ($index, $item) => $item.sectionId;
var _forTrack33 = ($index, $item) => $item.type;
var _forTrack4 = ($index, $item) => $item.subjectId;
function AssignsubjectComponent_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const session_r1 = ctx.$implicit;
    \u0275\u0275property("value", session_r1.sessionId);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", session_r1.sessionName, " ");
  }
}
function AssignsubjectComponent_For_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const college_r2 = ctx.$implicit;
    \u0275\u0275property("value", college_r2.collegeId);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", college_r2.collegeAbreviation, " ");
  }
}
function AssignsubjectComponent_For_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const class_r3 = ctx.$implicit;
    \u0275\u0275property("value", class_r3.courseId);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", class_r3.courseName, " ");
  }
}
function AssignsubjectComponent_For_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const college_r4 = ctx.$implicit;
    \u0275\u0275property("value", college_r4.sectionId);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", college_r4.sectionName, " ");
  }
}
function AssignsubjectComponent_For_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const subType_r5 = ctx.$implicit;
    \u0275\u0275property("value", subType_r5.type);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", subType_r5.detail, " ");
  }
}
function AssignsubjectComponent_For_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const subject_r6 = ctx.$implicit;
    \u0275\u0275property("value", subject_r6.subjectId);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", subject_r6.subjectName, " ");
  }
}
function AssignsubjectComponent_Conditional_63_th_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 31);
    \u0275\u0275text(1, "Subject Code");
    \u0275\u0275elementEnd();
  }
}
function AssignsubjectComponent_Conditional_63_td_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r7.subjectCode);
  }
}
function AssignsubjectComponent_Conditional_63_th_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 31);
    \u0275\u0275text(1, "Subject Name");
    \u0275\u0275elementEnd();
  }
}
function AssignsubjectComponent_Conditional_63_td_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r8.subjectName);
  }
}
function AssignsubjectComponent_Conditional_63_th_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 31);
    \u0275\u0275text(1, "Type");
    \u0275\u0275elementEnd();
  }
}
function AssignsubjectComponent_Conditional_63_td_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r9 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r9.subjectType);
  }
}
function AssignsubjectComponent_Conditional_63_th_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 33);
    \u0275\u0275text(1, "Actions");
    \u0275\u0275elementEnd();
  }
}
function AssignsubjectComponent_Conditional_63_td_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 32)(1, "button", 34);
    \u0275\u0275listener("click", function AssignsubjectComponent_Conditional_63_td_12_Template_button_click_1_listener() {
      const element_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r11 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r11.deleteAssignSub(element_r11));
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "delete");
    \u0275\u0275elementEnd()()();
  }
}
function AssignsubjectComponent_Conditional_63_tr_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 35);
  }
}
function AssignsubjectComponent_Conditional_63_tr_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 36);
  }
}
function AssignsubjectComponent_Conditional_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 20);
    \u0275\u0275elementContainerStart(1, 21);
    \u0275\u0275template(2, AssignsubjectComponent_Conditional_63_th_2_Template, 2, 0, "th", 22)(3, AssignsubjectComponent_Conditional_63_td_3_Template, 2, 1, "td", 23);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(4, 24);
    \u0275\u0275template(5, AssignsubjectComponent_Conditional_63_th_5_Template, 2, 0, "th", 22)(6, AssignsubjectComponent_Conditional_63_td_6_Template, 2, 1, "td", 23);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(7, 25);
    \u0275\u0275template(8, AssignsubjectComponent_Conditional_63_th_8_Template, 2, 0, "th", 22)(9, AssignsubjectComponent_Conditional_63_td_9_Template, 2, 1, "td", 23);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(10, 26);
    \u0275\u0275template(11, AssignsubjectComponent_Conditional_63_th_11_Template, 2, 0, "th", 27)(12, AssignsubjectComponent_Conditional_63_td_12_Template, 4, 0, "td", 23);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(13, AssignsubjectComponent_Conditional_63_tr_13_Template, 1, 0, "tr", 28)(14, AssignsubjectComponent_Conditional_63_tr_14_Template, 1, 0, "tr", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "mat-paginator", 30);
  }
  if (rf & 2) {
    const ctx_r11 = \u0275\u0275nextContext();
    \u0275\u0275property("dataSource", ctx_r11.dataSource);
    \u0275\u0275advance(13);
    \u0275\u0275property("matHeaderRowDef", ctx_r11.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx_r11.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("pageSize", 5)("pageSizeOptions", \u0275\u0275pureFunction0(5, _c112));
  }
}
function AssignsubjectComponent_Conditional_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 19);
    \u0275\u0275text(1, "No reocrd found.");
    \u0275\u0275elementEnd();
  }
}
var _AssignsubjectComponent = class _AssignsubjectComponent {
  constructor(fb, dialog) {
    this.fb = fb;
    this.dialog = dialog;
    this.classList = [];
    this.sectionList = [];
    this.sessionService = inject(SessionService);
    this.collegeService = inject(CollegeService);
    this.sectionService = inject(SectionService);
    this._subjectService = inject(SubjectmasterService);
    this.dataSource = new MatTableDataSource([]);
    this.displayedColumns = ["subjectCode", "subjectName", "subjectType", "actions"];
    this.assignSubjectList = [];
  }
  ngOnInit() {
    this.assignSubjectForm = this.fb.group({
      sessionId: [null, Validators.required],
      collegeId: [null, Validators.required],
      courseId: [null, Validators.required],
      classSectionId: [null, Validators.required],
      subjectId: [[], Validators.required],
      subjectType: [null, Validators.required]
    });
    this.loadSchool();
    this.loadSessions();
    this.loadSectionList();
    this.loadSubjectTypeList();
  }
  loadSubjectTypeList() {
    this._subjectService.subjectTypeList().subscribe({
      next: (res) => {
        this.subjectTypeList = Array.isArray(res.data) ? res.data : [res.data];
      },
      error: (err) => {
        alert("something went wrong");
        console.log("subject type list error", err);
      }
    });
  }
  loadSessions() {
    this.sessionService.getSessionList().subscribe({
      next: (res) => {
        if (res.success) {
          this.sessions = Array.isArray(res.data) ? res.data : [res.data];
        }
      },
      error: (err) => {
        console.log("Error fetching sections:", err);
      }
    });
  }
  loadSchool() {
    this.collegeService.getCollegeList().subscribe({
      next: (res) => {
        if (res.success) {
          this.colleges = Array.isArray(res.data) ? res.data : [res.data];
        }
      },
      error: (err) => {
        console.log("Error fetching sections:", err);
      }
    });
  }
  loadClassList() {
    debugger;
    const sessionId = this.assignSubjectForm.get("sessionId")?.value;
    const colleidId = this.assignSubjectForm.get("collegeId")?.value;
    if (!sessionId || !colleidId) {
      return;
    }
    this.collegeService.getClassListBySessionAndCollege(sessionId, colleidId).subscribe({
      next: (res) => {
        debugger;
        if (res.success && res.data) {
          this.classList = Array.isArray(res.data) ? res.data : [res.data];
        } else {
          debugger;
          alert(res.message);
        }
      },
      error: (err) => {
        debugger;
        console.log("error");
      }
    });
  }
  loadSectionList() {
    debugger;
    this.sectionService.getSectionList().subscribe({
      next: (res) => {
        debugger;
        if (res.success) {
          this.sectionList = Array.isArray(res.data) ? res.data : [res.data];
        }
      },
      error: (err) => {
        debugger;
        console.error("Error fetching sections:", err);
      }
    });
  }
  getSubjectList() {
    debugger;
    const subjectType = this.assignSubjectForm.get("subjectType")?.value;
    if (!subjectType) {
      return;
    }
    this._subjectService.listSubject(subjectType).subscribe({
      next: (res) => {
        debugger;
        if (res.success && res.data) {
          this.subjectList = Array.isArray(res.data) ? res.data : [res.data];
        } else {
          debugger;
          alert(res.message);
        }
      },
      error: (err) => {
        debugger;
        console.log("error");
      }
    });
  }
  addSubject() {
    debugger;
    if (!this.assignSubjectForm.valid) {
      return;
    }
    const assignSubject = {
      classSectionId: this.assignSubjectForm.get("classSectionId")?.value,
      subjectId: this.assignSubjectForm.get("subjectId")?.value
    };
    this._subjectService.assignSubject(assignSubject).subscribe({
      next: (res) => {
        if (res.success) {
          alert(res.message);
          this.assignSubjectForm.reset();
        } else {
          alert(res.message);
        }
      },
      error: (err) => {
        console.log("assign subject error", err);
      }
    });
  }
  getAssignSubjectList() {
    debugger;
    const sectionId = this.assignSubjectForm.get("classSectionId")?.value;
    if (!sectionId) {
      return;
    }
    this._subjectService.listAssignSubject(sectionId).subscribe({
      next: (res) => {
        if (res.success) {
          this.dataSource.data = Array.isArray(res.data) ? res.data : [res.data];
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
      }
    });
  }
  applyFilter(event) {
    const filterValue = event.target.value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  /** Checkbox Selection Logic */
  toggleSelection(row) {
    if (this.subjectList.includes(row)) {
      this.subjectList = this.subjectList.filter((r) => r !== row);
    } else {
      this.subjectList.push(row);
    }
  }
  isAllSelected() {
    return this.assignSubjectList.length === this.dataSource.data.length;
  }
  isPartialSelected() {
    return this.assignSubjectList.length > 0 && !this.isAllSelected();
  }
  masterToggle() {
    if (this.isAllSelected()) {
      this.assignSubjectList = [];
    } else {
      this.assignSubjectList = [...this.dataSource.data];
    }
  }
  deleteAssignSub(body) {
    debugger;
    const classSectionSubjectId = body.classSectionSubjectId;
    if (!classSectionSubjectId) {
      return;
    }
    this._subjectService.deleteAssignSubject(classSectionSubjectId).subscribe({
      next: (res) => {
        if (res.success) {
          alert(res.message);
          this.getAssignSubjectList();
        } else {
          alert(res.message);
        }
      },
      error: (err) => {
        console.log("delete error ", err);
      }
    });
  }
  onCancel() {
    this.assignSubjectForm.reset();
  }
};
_AssignsubjectComponent.\u0275fac = function AssignsubjectComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AssignsubjectComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(MatDialog));
};
_AssignsubjectComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AssignsubjectComponent, selectors: [["app-assignsubject"]], viewQuery: function AssignsubjectComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(MatPaginator, 5);
    \u0275\u0275viewQuery(MatSort, 5);
    \u0275\u0275viewQuery(_c012, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.paginator = _t.first);
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.sort = _t.first);
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.editDialog = _t.first);
  }
}, decls: 65, vars: 2, consts: [[1, "col-sm-12"], [3, "ngSubmit", "formGroup"], [1, "form-field-full"], [1, "row"], [1, "col-sm-3"], ["appearance", "fill", 1, "w-100"], ["formControlName", "sessionId", 3, "selectionChange"], [3, "value"], ["formControlName", "collegeId", 3, "selectionChange"], ["formControlName", "courseId"], ["formControlName", "classSectionId", 3, "selectionChange"], ["formControlName", "subjectType", 3, "selectionChange"], ["formControlName", "subjectId", "multiple", ""], [1, "m-t-8"], ["mat-flat-button", "", "color", "primary", "type", "submit"], ["mat-button", "", "type", "button", 1, "m-x-8", 3, "click"], [1, "col-sm-12", "mt-3"], ["appearance", "fill"], ["matInput", "", "placeholder", "Search subjects", 3, "keyup"], [1, "text-center", "text-muted", "mt-2"], ["mat-table", "", "matSort", "", 1, "mat-elevation-z8", "w-100", 3, "dataSource"], ["matColumnDef", "subjectCode"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "subjectName"], ["matColumnDef", "subjectType"], ["matColumnDef", "actions"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSize", "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-cell", ""], ["mat-icon-button", "", "color", "primary", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function AssignsubjectComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "mat-card")(2, "mat-card-header")(3, "mat-card-title");
    \u0275\u0275text(4, "Assign Subject");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "form", 1);
    \u0275\u0275listener("ngSubmit", function AssignsubjectComponent_Template_form_ngSubmit_5_listener() {
      return ctx.addSubject();
    });
    \u0275\u0275elementStart(6, "mat-card-content")(7, "div", 2)(8, "div", 3)(9, "div", 4)(10, "mat-form-field", 5)(11, "mat-label");
    \u0275\u0275text(12, "Select Session");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "mat-select", 6);
    \u0275\u0275listener("selectionChange", function AssignsubjectComponent_Template_mat_select_selectionChange_13_listener() {
      return ctx.loadClassList();
    });
    \u0275\u0275repeaterCreate(14, AssignsubjectComponent_For_15_Template, 2, 2, "mat-option", 7, _forTrack06);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 4)(17, "mat-form-field", 5)(18, "mat-label");
    \u0275\u0275text(19, "Select School");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "mat-select", 8);
    \u0275\u0275listener("selectionChange", function AssignsubjectComponent_Template_mat_select_selectionChange_20_listener() {
      return ctx.loadClassList();
    });
    \u0275\u0275repeaterCreate(21, AssignsubjectComponent_For_22_Template, 2, 2, "mat-option", 7, _forTrack14);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 4)(24, "mat-form-field", 5)(25, "mat-label");
    \u0275\u0275text(26, "Select Class");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "mat-select", 9);
    \u0275\u0275repeaterCreate(28, AssignsubjectComponent_For_29_Template, 2, 2, "mat-option", 7, _forTrack14);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "div", 4)(31, "mat-form-field", 5)(32, "mat-label");
    \u0275\u0275text(33, "Select Section");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "mat-select", 10);
    \u0275\u0275listener("selectionChange", function AssignsubjectComponent_Template_mat_select_selectionChange_34_listener() {
      return ctx.getAssignSubjectList();
    });
    \u0275\u0275repeaterCreate(35, AssignsubjectComponent_For_36_Template, 2, 2, "mat-option", 7, _forTrack23);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "div", 4)(38, "mat-form-field", 5)(39, "mat-label");
    \u0275\u0275text(40, "Select Subject Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "mat-select", 11);
    \u0275\u0275listener("selectionChange", function AssignsubjectComponent_Template_mat_select_selectionChange_41_listener() {
      return ctx.getSubjectList();
    });
    \u0275\u0275repeaterCreate(42, AssignsubjectComponent_For_43_Template, 2, 2, "mat-option", 7, _forTrack33);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(44, "div", 4)(45, "mat-form-field", 5)(46, "mat-label");
    \u0275\u0275text(47, "Select Subject");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "mat-select", 12);
    \u0275\u0275repeaterCreate(49, AssignsubjectComponent_For_50_Template, 2, 2, "mat-option", 7, _forTrack4);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(51, "div", 13)(52, "button", 14);
    \u0275\u0275text(53, "Save");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "button", 15);
    \u0275\u0275listener("click", function AssignsubjectComponent_Template_button_click_54_listener() {
      return ctx.onCancel();
    });
    \u0275\u0275text(55, "Cancel");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(56, "div", 16)(57, "mat-card")(58, "mat-card-content")(59, "mat-form-field", 17)(60, "mat-label");
    \u0275\u0275text(61, "Search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "input", 18);
    \u0275\u0275listener("keyup", function AssignsubjectComponent_Template_input_keyup_62_listener($event) {
      return ctx.applyFilter($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(63, AssignsubjectComponent_Conditional_63_Template, 16, 6)(64, AssignsubjectComponent_Conditional_64_Template, 2, 0, "p", 19);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275property("formGroup", ctx.assignSubjectForm);
    \u0275\u0275advance(9);
    \u0275\u0275repeater(ctx.sessions);
    \u0275\u0275advance(7);
    \u0275\u0275repeater(ctx.colleges);
    \u0275\u0275advance(7);
    \u0275\u0275repeater(ctx.classList);
    \u0275\u0275advance(7);
    \u0275\u0275repeater(ctx.sectionList);
    \u0275\u0275advance(7);
    \u0275\u0275repeater(ctx.subjectTypeList);
    \u0275\u0275advance(7);
    \u0275\u0275repeater(ctx.subjectList);
    \u0275\u0275advance(14);
    \u0275\u0275conditional(ctx.dataSource.data.length > 0 ? 63 : 64);
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
  MatFormField,
  MatLabel,
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
  NgControlStatus,
  NgControlStatusGroup,
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
], encapsulation: 2 });
var AssignsubjectComponent = _AssignsubjectComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssignsubjectComponent, [{
    type: Component,
    args: [{ selector: "app-assignsubject", imports: [
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
    ], template: '<div class="col-sm-12">\r\n    <mat-card>\r\n        <mat-card-header>\r\n            <mat-card-title>Assign Subject</mat-card-title>\r\n        </mat-card-header>\r\n\r\n        <form [formGroup]="assignSubjectForm" (ngSubmit)="addSubject()">\r\n            <mat-card-content>\r\n                <div class="form-field-full">\r\n                    <div class="row">\r\n                        <div class="col-sm-3">\r\n                            <mat-form-field appearance="fill" class="w-100">\r\n                                <mat-label>Select Session</mat-label>\r\n                                <!-- <mat-select formControlName="subjectType" (selectionChange)="getSubjectList()"> -->\r\n                                <mat-select formControlName="sessionId" (selectionChange)="loadClassList()">\r\n                                    @for (session of sessions; track session.sessionId) {\r\n                                    <mat-option [value]="session.sessionId">\r\n                                        {{ session.sessionName }}\r\n                                    </mat-option>\r\n                                    }\r\n                                </mat-select>\r\n                            </mat-form-field>\r\n                        </div>\r\n                        <div class="col-sm-3">\r\n                            <mat-form-field appearance="fill" class="w-100">\r\n                                <mat-label>Select School</mat-label>\r\n                                <mat-select formControlName="collegeId" (selectionChange)="loadClassList()">\r\n                                    @for (college of colleges; track college.collegeId) {\r\n                                    <mat-option [value]="college.collegeId">\r\n                                        {{ college.collegeAbreviation }}\r\n                                    </mat-option>\r\n                                    }\r\n                                </mat-select>\r\n                            </mat-form-field>\r\n                        </div>\r\n                        <div class="col-sm-3">\r\n                            <mat-form-field appearance="fill" class="w-100">\r\n                                <mat-label>Select Class</mat-label>\r\n                                <mat-select formControlName="courseId">\r\n                                    @for (class of classList; track class.collegeId) {\r\n                                    <mat-option [value]="class.courseId">\r\n                                        {{ class.courseName }}\r\n                                    </mat-option>\r\n                                    }\r\n                                </mat-select>\r\n                            </mat-form-field>\r\n                        </div>\r\n                          <div class="col-sm-3">\r\n                            <mat-form-field appearance="fill" class="w-100">\r\n                                <mat-label>Select Section</mat-label>\r\n                                <mat-select formControlName="classSectionId" (selectionChange)="getAssignSubjectList()">\r\n                                    @for (college of sectionList; track college.sectionId) {\r\n                                    <mat-option [value]="college.sectionId">\r\n                                        {{ college.sectionName }}\r\n                                    </mat-option>\r\n                                    }\r\n                                </mat-select>\r\n                            </mat-form-field>\r\n                        </div>\r\n                         <div class="col-sm-3">\r\n                            <mat-form-field appearance="fill" class="w-100">\r\n                                <mat-label>Select Subject Type</mat-label>\r\n                                <mat-select formControlName="subjectType" (selectionChange)="getSubjectList()" >\r\n                                    @for (subType of subjectTypeList; track subType.type) {\r\n                                    <mat-option [value]="subType.type">\r\n                                        {{ subType.detail }}\r\n                                    </mat-option>\r\n                                    }\r\n                                </mat-select>\r\n                            </mat-form-field>\r\n                        </div>\r\n                        <div class="col-sm-3">\r\n                            <mat-form-field appearance="fill" class="w-100">\r\n                                <mat-label>Select Subject</mat-label>\r\n                                <mat-select formControlName="subjectId" multiple>\r\n                                    @for (subject of subjectList; track subject.subjectId) {\r\n                                    <mat-option [value]="subject.subjectId">\r\n                                        {{ subject.subjectName }}\r\n                                    </mat-option>\r\n                                    }\r\n                                </mat-select>\r\n                            </mat-form-field>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class="m-t-8">\r\n                        <button mat-flat-button color="primary" type="submit">Save</button>\r\n                        <button mat-button class="m-x-8" type="button" (click)="onCancel()">Cancel</button>\r\n                    </div>\r\n                </div>\r\n            </mat-card-content>\r\n        </form>\r\n    </mat-card>\r\n</div>\r\n\r\n\r\n\r\n<div class="col-sm-12 mt-3">\r\n    <mat-card>\r\n        <mat-card-content>\r\n\r\n            <mat-form-field appearance="fill">\r\n                <mat-label>Search</mat-label>\r\n                <input matInput (keyup)="applyFilter($event)" placeholder="Search subjects" />\r\n            </mat-form-field>\r\n\r\n            @if (dataSource.data.length > 0) {\r\n            <table mat-table [dataSource]="dataSource" matSort class="mat-elevation-z8 w-100">\r\n\r\n                <ng-container matColumnDef="subjectCode">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header>Subject Code</th>\r\n                    <td mat-cell *matCellDef="let element">{{ element.subjectCode }}</td>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef="subjectName">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header>Subject Name</th>\r\n                    <td mat-cell *matCellDef="let element">{{ element.subjectName }}</td>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef="subjectType">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header>Type</th>\r\n                    <td mat-cell *matCellDef="let element">{{ element.subjectType }}</td>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef="actions">\r\n                    <th mat-header-cell *matHeaderCellDef>Actions</th>\r\n                    <td mat-cell *matCellDef="let element">\r\n                        <button mat-icon-button color="primary" (click)="deleteAssignSub(element)">\r\n                            <mat-icon>delete</mat-icon>\r\n                        </button>\r\n                    </td>\r\n                </ng-container>\r\n\r\n                <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>\r\n                <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>\r\n            </table>\r\n\r\n            <mat-paginator [pageSize]="5" [pageSizeOptions]="[5, 10, 25]" showFirstLastButtons></mat-paginator>\r\n            } @else {\r\n            <p class="text-center text-muted mt-2">No reocrd found.</p>\r\n            }\r\n\r\n        </mat-card-content>\r\n    </mat-card>\r\n</div>' }]
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AssignsubjectComponent, { className: "AssignsubjectComponent", filePath: "src/app/pages/admin/assignsubject/assignsubject.component.ts", lineNumber: 45 });
})();

// src/app/pages/admin/subjectmaster/subjectmaster.component.ts
var _SubjectmasterComponent = class _SubjectmasterComponent {
};
_SubjectmasterComponent.\u0275fac = function SubjectmasterComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SubjectmasterComponent)();
};
_SubjectmasterComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SubjectmasterComponent, selectors: [["app-subjectmaster"]], decls: 7, vars: 0, consts: [["mat-stretch-tabs", "", "dynamicHeight", ""], ["label", "Add Subject"], ["label", "Assign Subject"]], template: function SubjectmasterComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-card")(1, "mat-card-content")(2, "mat-tab-group", 0)(3, "mat-tab", 1);
    \u0275\u0275element(4, "app-addsubject");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "mat-tab", 2);
    \u0275\u0275element(6, "app-assignsubject");
    \u0275\u0275elementEnd()()()();
  }
}, dependencies: [MatCard, MatCardContent, MatTabGroup, MatTab, AddsubjectComponent, AssignsubjectComponent], encapsulation: 2 });
var SubjectmasterComponent = _SubjectmasterComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SubjectmasterComponent, [{
    type: Component,
    args: [{ selector: "app-subjectmaster", imports: [MatCardHeader, MatCard, MatCardTitle, MatCardContent, MatTabGroup, MatTab, AddsubjectComponent, AssignsubjectComponent], template: '<mat-card>\r\n\r\n\r\n  <mat-card-content>\r\n    <mat-tab-group mat-stretch-tabs dynamicHeight>\r\n      <mat-tab label="Add Subject">\r\n        <app-addsubject></app-addsubject>\r\n      </mat-tab>\r\n\r\n      <mat-tab label="Assign Subject">\r\n        <app-assignsubject></app-assignsubject>\r\n      </mat-tab>\r\n    \r\n    </mat-tab-group>\r\n  </mat-card-content>\r\n</mat-card>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SubjectmasterComponent, { className: "SubjectmasterComponent", filePath: "src/app/pages/admin/subjectmaster/subjectmaster.component.ts", lineNumber: 13 });
})();

// src/app/pages/fillteCompnent/filterstudent/filterstudent.component.ts
var _forTrack07 = ($index, $item) => $item.sessionId;
var _forTrack15 = ($index, $item) => $item.collegeId;
var _forTrack24 = ($index, $item) => $item.courseId;
var _forTrack34 = ($index, $item) => $item.sectionId;
function FilterstudentComponent_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const session_r1 = ctx.$implicit;
    \u0275\u0275property("value", session_r1.sessionId);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", session_r1.sessionName, " ");
  }
}
function FilterstudentComponent_For_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const school_r2 = ctx.$implicit;
    \u0275\u0275property("value", school_r2.collegeId);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", school_r2.collegeAbreviation, " ");
  }
}
function FilterstudentComponent_For_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const class_r3 = ctx.$implicit;
    \u0275\u0275property("value", class_r3.courseId);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", class_r3.courseName, " ");
  }
}
function FilterstudentComponent_For_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const section_r4 = ctx.$implicit;
    \u0275\u0275property("value", section_r4.sectionId);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", section_r4.sectionName, " ");
  }
}
var _FilterstudentComponent = class _FilterstudentComponent {
  constructor(fb, dialog) {
    this.fb = fb;
    this.dialog = dialog;
    this.sessionService = inject(SessionService);
    this.sectionService = inject(SectionService);
    this.collegeService = inject(CollegeService);
  }
  ngOnInit() {
    debugger;
    this.assignSectionForm = this.fb.group({
      sessionId: [null, [Validators.required, Validators.min(1)]],
      collegeId: [null, [Validators.required, Validators.min(1)]],
      courseId: [null, [Validators.required, Validators.min(1)]],
      sectionId: [null, [Validators.required, Validators.min(1)]]
    });
    debugger;
    this.loadSession();
    this.loadCollege();
    this.loadSection();
  }
  loadSection() {
    debugger;
    this.sectionService.getSectionList().subscribe((res) => {
      this.sections = Array.isArray(res.data) ? res.data : [res.data];
    });
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
  getSchoolListById() {
    const sessionIdControl = this.assignSectionForm.get("sessionId");
    const collegeIdControl = this.assignSectionForm.get("collegeId");
    const sessionId = sessionIdControl?.value;
    const collegeId = collegeIdControl?.value;
    if (sessionId == null || collegeId == null) {
      return;
    }
    this.collegeService.getClassListBySessionAndCollege(sessionId, collegeId).subscribe({
      next: (res) => {
        debugger;
        if (res.success && res.data) {
          this.classs = Array.isArray(res.data) ? res.data : [res.data];
        } else {
          debugger;
          alert(res.message);
        }
      },
      error: (err) => {
        debugger;
        console.log("error");
      }
    });
  }
  submitForm() {
    debugger;
    if (this.assignSectionForm.valid) {
      const courseId = this.assignSectionForm.get("courseId")?.value;
      const sectionId = this.assignSectionForm.get("sectionId")?.value;
      const body = [
        {
          courseId: 1,
          sectionId: 1
        }
      ];
      this.sectionService.assignSection(body).subscribe({
        next: (res) => {
          if (res.success && res.data) {
            alert(res.message);
          }
        }
      });
    }
  }
  onCancel() {
    this.assignSectionForm.reset();
  }
};
_FilterstudentComponent.\u0275fac = function FilterstudentComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FilterstudentComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(MatDialog));
};
_FilterstudentComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FilterstudentComponent, selectors: [["app-filterstudent"]], decls: 44, vars: 1, consts: [[1, "col-sm-12"], [3, "ngSubmit", "formGroup"], [1, "form-field-full"], [1, "row"], [1, "col-sm-3"], ["appearance", "outline", 1, "w-100"], ["formControlName", "sessionId", 3, "selectionChange"], [3, "value"], ["formControlName", "collegeId", 3, "selectionChange"], ["formControlName", "courseId"], ["formControlName", "sectionId"], [1, "m-t-8"], ["mat-flat-button", "", "color", "primary", "type", "submit"], ["mat-button", "", "type", "button", 1, "m-x-8", 3, "click"]], template: function FilterstudentComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "mat-card")(2, "mat-card-header")(3, "mat-card-title");
    \u0275\u0275text(4, "Assign Section");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "form", 1);
    \u0275\u0275listener("ngSubmit", function FilterstudentComponent_Template_form_ngSubmit_5_listener() {
      return ctx.submitForm();
    });
    \u0275\u0275elementStart(6, "mat-card-content")(7, "div", 2)(8, "div", 3)(9, "div", 4)(10, "mat-form-field", 5)(11, "mat-label");
    \u0275\u0275text(12, "Select Session");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "mat-select", 6);
    \u0275\u0275listener("selectionChange", function FilterstudentComponent_Template_mat_select_selectionChange_13_listener() {
      return ctx.getSchoolListById();
    });
    \u0275\u0275repeaterCreate(14, FilterstudentComponent_For_15_Template, 2, 2, "mat-option", 7, _forTrack07);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 4)(17, "mat-form-field", 5)(18, "mat-label");
    \u0275\u0275text(19, "Select School");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "mat-select", 8);
    \u0275\u0275listener("selectionChange", function FilterstudentComponent_Template_mat_select_selectionChange_20_listener() {
      return ctx.getSchoolListById();
    });
    \u0275\u0275repeaterCreate(21, FilterstudentComponent_For_22_Template, 2, 2, "mat-option", 7, _forTrack15);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 4)(24, "mat-form-field", 5)(25, "mat-label");
    \u0275\u0275text(26, "Select Class");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "mat-select", 9);
    \u0275\u0275repeaterCreate(28, FilterstudentComponent_For_29_Template, 2, 2, "mat-option", 7, _forTrack24);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "div", 4)(31, "mat-form-field", 5)(32, "mat-label");
    \u0275\u0275text(33, "Select Sections");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "mat-select", 10);
    \u0275\u0275repeaterCreate(35, FilterstudentComponent_For_36_Template, 2, 2, "mat-option", 7, _forTrack34);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(37, "div", 11)(38, "button", 12);
    \u0275\u0275text(39, "Save");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "button", 13);
    \u0275\u0275listener("click", function FilterstudentComponent_Template_button_click_40_listener() {
      return ctx.onCancel();
    });
    \u0275\u0275text(41, "Cancel");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(42, "p");
    \u0275\u0275text(43, "filterstudent works!");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275property("formGroup", ctx.assignSectionForm);
    \u0275\u0275advance(9);
    \u0275\u0275repeater(ctx.sessions);
    \u0275\u0275advance(7);
    \u0275\u0275repeater(ctx.schools);
    \u0275\u0275advance(7);
    \u0275\u0275repeater(ctx.classs);
    \u0275\u0275advance(7);
    \u0275\u0275repeater(ctx.sections);
  }
}, dependencies: [
  MatCardTitle,
  MaterialModule,
  MatOption,
  MatButton,
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatFormField,
  MatLabel,
  MatSelect,
  MatCardModule,
  ReactiveFormsModule,
  \u0275NgNoValidate,
  NgControlStatus,
  NgControlStatusGroup,
  FormGroupDirective,
  FormControlName,
  MatColumnResizeCommonModule
], encapsulation: 2 });
var FilterstudentComponent = _FilterstudentComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FilterstudentComponent, [{
    type: Component,
    args: [{ selector: "app-filterstudent", imports: [
      MatCardTitle,
      MaterialModule,
      MatCardModule,
      ReactiveFormsModule,
      MatColumnResizeCommonModule
    ], template: '<div class="col-sm-12">\r\n    <mat-card>\r\n        <mat-card-header>\r\n            <mat-card-title>Assign Section</mat-card-title>\r\n        </mat-card-header>\r\n    <form [formGroup]="assignSectionForm" (ngSubmit)="submitForm()">\r\n        <mat-card-content>\r\n            <div class="form-field-full">\r\n                <div class="row">\r\n                    <div class="col-sm-3">\r\n                        <mat-form-field appearance="outline" class="w-100">\r\n                                <mat-label>Select Session</mat-label>\r\n                                <mat-select formControlName="sessionId" (selectionChange)="getSchoolListById()">\r\n                                    @for (session of sessions; track session.sessionId) {\r\n                                    <mat-option [value]="session.sessionId">\r\n                                        {{ session.sessionName }}\r\n                                    </mat-option>\r\n                                    }\r\n                                </mat-select>\r\n                            </mat-form-field>\r\n                    </div>\r\n                    <div class="col-sm-3">\r\n                        <mat-form-field appearance="outline" class="w-100">\r\n                                <mat-label>Select School</mat-label>\r\n                                <mat-select formControlName="collegeId" (selectionChange)="getSchoolListById()">\r\n                                    @for (school of schools; track school.collegeId) {\r\n                                    <mat-option [value]="school.collegeId">\r\n                                        {{ school.collegeAbreviation }}\r\n                                    </mat-option>\r\n                                    }\r\n                                </mat-select>\r\n                            </mat-form-field>\r\n                    </div>\r\n                    <div class="col-sm-3">\r\n                        <mat-form-field appearance="outline" class="w-100">\r\n                                <mat-label>Select Class</mat-label>\r\n                                <mat-select formControlName="courseId" >\r\n                                    @for (class of classs; track class.courseId) {\r\n                                    <mat-option [value]="class.courseId">\r\n                                        {{ class.courseName }}\r\n                                    </mat-option>\r\n                                    }\r\n                                </mat-select>\r\n                            </mat-form-field>\r\n                    </div>\r\n                      <div class="col-sm-3">\r\n                        <mat-form-field appearance="outline" class="w-100">\r\n                                <mat-label>Select Sections</mat-label>\r\n                                <mat-select formControlName="sectionId" >\r\n                                    @for (section of sections; track section.sectionId) {\r\n                                    <mat-option [value]="section.sectionId">\r\n                                        {{ section.sectionName }}\r\n                                    </mat-option>\r\n                                    }\r\n                                </mat-select>\r\n                            </mat-form-field>\r\n                    </div>\r\n                </div>\r\n                 <div class="m-t-8">\r\n                        <button mat-flat-button color="primary" type="submit">Save</button>\r\n                        <button mat-button class="m-x-8" type="button" (click)="onCancel()">Cancel</button>\r\n                    </div>\r\n            </div>\r\n        </mat-card-content>\r\n\r\n    </form>\r\n        </mat-card>\r\n</div><p>filterstudent works!</p>\r\n' }]
  }], () => [{ type: FormBuilder }, { type: MatDialog }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FilterstudentComponent, { className: "FilterstudentComponent", filePath: "src/app/pages/filltecompnent/filterstudent/filterstudent.component.ts", lineNumber: 29 });
})();

// src/app/services/student.service.ts
var _StudentService = class _StudentService {
  constructor() {
    this.http = inject(HttpClient);
    this.endPoints = apiEndpoint;
  }
  /** GET student list. Adjust URL in `apiendpoint.ts` if your API path differs. */
  listStudents() {
    return this.http.get(this.endPoints.student.list);
  }
};
_StudentService.\u0275fac = function StudentService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _StudentService)();
};
_StudentService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _StudentService, factory: _StudentService.\u0275fac, providedIn: "root" });
var StudentService = _StudentService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StudentService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/pages/student/studentlist/studentlist.component.ts
var _c013 = () => [5, 10, 25, 50];
function StudentlistComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "mat-progress-spinner", 24);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Loading students\u2026");
    \u0275\u0275elementEnd()();
  }
}
function StudentlistComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.loadError);
  }
}
function StudentlistComponent_th_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 25);
    \u0275\u0275text(1, "Admission no.");
    \u0275\u0275elementEnd();
  }
}
function StudentlistComponent_td_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r2.admissionNo ?? "\u2014");
  }
}
function StudentlistComponent_th_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 25);
    \u0275\u0275text(1, "Name");
    \u0275\u0275elementEnd();
  }
}
function StudentlistComponent_td_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.displayStudentName(row_r3));
  }
}
function StudentlistComponent_th_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 25);
    \u0275\u0275text(1, "Class");
    \u0275\u0275elementEnd();
  }
}
function StudentlistComponent_td_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.className ?? "\u2014");
  }
}
function StudentlistComponent_th_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 25);
    \u0275\u0275text(1, "Section");
    \u0275\u0275elementEnd();
  }
}
function StudentlistComponent_td_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r5.sectionName ?? "\u2014");
  }
}
function StudentlistComponent_th_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 25);
    \u0275\u0275text(1, "Roll no.");
    \u0275\u0275elementEnd();
  }
}
function StudentlistComponent_td_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r6.rollNo ?? "\u2014");
  }
}
function StudentlistComponent_th_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 25);
    \u0275\u0275text(1, "Phone");
    \u0275\u0275elementEnd();
  }
}
function StudentlistComponent_td_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r7.phone ?? "\u2014");
  }
}
function StudentlistComponent_th_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 27);
    \u0275\u0275text(1, "Actions");
    \u0275\u0275elementEnd();
  }
}
function StudentlistComponent_td_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 26)(1, "button", 28)(2, "mat-icon");
    \u0275\u0275text(3, "visibility");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r8 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", "View " + ctx_r0.displayStudentName(row_r8));
  }
}
function StudentlistComponent_tr_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 29);
  }
}
function StudentlistComponent_tr_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 30);
  }
}
var _StudentlistComponent = class _StudentlistComponent {
  constructor() {
    this.studentService = inject(StudentService);
    this.dataSource = new MatTableDataSource([]);
    this.displayedColumns = [
      "admissionNo",
      "studentName",
      "className",
      "sectionName",
      "rollNo",
      "phone",
      "actions"
    ];
    this.loading = false;
    this.loadError = null;
  }
  ngOnInit() {
    this.loadStudents();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  loadStudents() {
    this.loading = true;
    this.loadError = null;
    this.studentService.listStudents().subscribe({
      next: (res) => {
        this.loading = false;
        if (res.success && res.data != null) {
          const rows = Array.isArray(res.data) ? res.data : [res.data];
          this.dataSource.data = rows;
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        } else {
          this.dataSource.data = [];
          this.loadError = res.message || "No students returned.";
        }
      },
      error: () => {
        this.loading = false;
        this.dataSource.data = [];
        this.loadError = "Could not load students. Check the API URL in apiendpoint.ts and your network.";
      }
    });
  }
  applyFilter(event) {
    const value = event.target.value;
    this.dataSource.filter = value.trim().toLowerCase();
  }
  displayStudentName(row) {
    const direct = row.studentName?.trim();
    if (direct) {
      return direct;
    }
    const combined = [row.firstName, row.lastName].filter(Boolean).join(" ").trim();
    return combined || "\u2014";
  }
};
_StudentlistComponent.\u0275fac = function StudentlistComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _StudentlistComponent)();
};
_StudentlistComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StudentlistComponent, selectors: [["app-studentlist"]], viewQuery: function StudentlistComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(MatPaginator, 5);
    \u0275\u0275viewQuery(MatSort, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.paginator = _t.first);
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.sort = _t.first);
  }
}, decls: 45, vars: 9, consts: [[1, "student-list-page"], [1, "student-list-page__filter"], [1, "student-list-page__card"], [1, "student-list-page__toolbar"], ["appearance", "outline", 1, "student-list-page__search"], ["matInput", "", "placeholder", "Filter by name, admission no., class\u2026", 3, "keyup"], ["mat-stroked-button", "", "type", "button", "color", "primary", 3, "click", "disabled"], [1, "student-list-page__loading"], ["role", "alert", 1, "student-list-page__error"], [1, "student-list-page__table-wrap"], ["mat-table", "", "matSort", "", 1, "student-list-table", "mat-elevation-z0", 3, "dataSource"], ["matColumnDef", "admissionNo"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "studentName"], ["matColumnDef", "className"], ["matColumnDef", "sectionName"], ["matColumnDef", "rollNo"], ["matColumnDef", "phone"], ["matColumnDef", "actions"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSize", "pageSizeOptions"], ["diameter", "40", "mode", "indeterminate"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-cell", ""], ["mat-icon-button", "", "type", "button"], ["mat-header-row", ""], ["mat-row", ""]], template: function StudentlistComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 0)(1, "div", 1);
    \u0275\u0275element(2, "app-filterstudent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-card", 2)(4, "mat-card-header")(5, "mat-card-title");
    \u0275\u0275text(6, "Student list");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "mat-card-subtitle");
    \u0275\u0275text(8, "Search and browse enrolled students");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "mat-card-content")(10, "div", 3)(11, "mat-form-field", 4)(12, "mat-label");
    \u0275\u0275text(13, "Search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "input", 5);
    \u0275\u0275listener("keyup", function StudentlistComponent_Template_input_keyup_14_listener($event) {
      return ctx.applyFilter($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "button", 6);
    \u0275\u0275listener("click", function StudentlistComponent_Template_button_click_15_listener() {
      return ctx.loadStudents();
    });
    \u0275\u0275text(16, " Refresh ");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(17, StudentlistComponent_Conditional_17_Template, 4, 0, "div", 7);
    \u0275\u0275conditionalCreate(18, StudentlistComponent_Conditional_18_Template, 2, 1, "p", 8);
    \u0275\u0275elementStart(19, "div", 9)(20, "table", 10);
    \u0275\u0275elementContainerStart(21, 11);
    \u0275\u0275template(22, StudentlistComponent_th_22_Template, 2, 0, "th", 12)(23, StudentlistComponent_td_23_Template, 2, 1, "td", 13);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(24, 14);
    \u0275\u0275template(25, StudentlistComponent_th_25_Template, 2, 0, "th", 12)(26, StudentlistComponent_td_26_Template, 2, 1, "td", 13);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(27, 15);
    \u0275\u0275template(28, StudentlistComponent_th_28_Template, 2, 0, "th", 12)(29, StudentlistComponent_td_29_Template, 2, 1, "td", 13);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(30, 16);
    \u0275\u0275template(31, StudentlistComponent_th_31_Template, 2, 0, "th", 12)(32, StudentlistComponent_td_32_Template, 2, 1, "td", 13);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(33, 17);
    \u0275\u0275template(34, StudentlistComponent_th_34_Template, 2, 0, "th", 12)(35, StudentlistComponent_td_35_Template, 2, 1, "td", 13);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(36, 18);
    \u0275\u0275template(37, StudentlistComponent_th_37_Template, 2, 0, "th", 12)(38, StudentlistComponent_td_38_Template, 2, 1, "td", 13);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(39, 19);
    \u0275\u0275template(40, StudentlistComponent_th_40_Template, 2, 0, "th", 20)(41, StudentlistComponent_td_41_Template, 4, 1, "td", 13);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(42, StudentlistComponent_tr_42_Template, 1, 0, "tr", 21)(43, StudentlistComponent_tr_43_Template, 1, 0, "tr", 22);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(44, "mat-paginator", 23);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(15);
    \u0275\u0275property("disabled", ctx.loading);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.loading ? 17 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.loadError && !ctx.loading ? 18 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("dataSource", ctx.dataSource);
    \u0275\u0275advance(22);
    \u0275\u0275property("matHeaderRowDef", ctx.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("pageSize", 10)("pageSizeOptions", \u0275\u0275pureFunction0(8, _c013));
  }
}, dependencies: [
  FilterstudentComponent,
  MatCardModule,
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle,
  MaterialModule,
  MatButton,
  MatIconButton,
  MatFormField,
  MatLabel,
  MatIcon,
  MatInput,
  MatPaginator,
  MatProgressSpinner,
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
  MatTableModule,
  MatSortModule,
  MatPaginatorModule
], styles: ["\n\n.student-list-page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  max-width: 1400px;\n  margin: 0 auto;\n  padding: 0 8px 16px;\n}\n.student-list-page__filter[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.student-list-page__card[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.student-list-page__toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: flex-start;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.student-list-page__search[_ngcontent-%COMP%] {\n  flex: 1 1 240px;\n  min-width: 0;\n}\n.student-list-page__loading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px 0;\n}\n.student-list-page__error[_ngcontent-%COMP%] {\n  margin: 0 0 12px;\n  color: var(--mat-sys-error, #b3261e);\n}\n.student-list-page__table-wrap[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow-x: auto;\n}\n.student-list-table[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 720px;\n}\n@media (max-width: 600px) {\n  .student-list-page__toolbar[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n}\n/*# sourceMappingURL=studentlist.component.css.map */"] });
var StudentlistComponent = _StudentlistComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StudentlistComponent, [{
    type: Component,
    args: [{ selector: "app-studentlist", imports: [
      FilterstudentComponent,
      MatCardModule,
      MaterialModule,
      MatTableModule,
      MatSortModule,
      MatPaginatorModule
    ], template: `<section class="student-list-page">\r
  <div class="student-list-page__filter">\r
    <app-filterstudent></app-filterstudent>\r
  </div>\r
\r
  <mat-card class="student-list-page__card">\r
    <mat-card-header>\r
      <mat-card-title>Student list</mat-card-title>\r
      <mat-card-subtitle>Search and browse enrolled students</mat-card-subtitle>\r
    </mat-card-header>\r
    <mat-card-content>\r
      <div class="student-list-page__toolbar">\r
        <mat-form-field appearance="outline" class="student-list-page__search">\r
          <mat-label>Search</mat-label>\r
          <input\r
            matInput\r
            (keyup)="applyFilter($event)"\r
            placeholder="Filter by name, admission no., class\u2026"\r
          />\r
        </mat-form-field>\r
        <button\r
          mat-stroked-button\r
          type="button"\r
          color="primary"\r
          (click)="loadStudents()"\r
          [disabled]="loading"\r
        >\r
          Refresh\r
        </button>\r
      </div>\r
\r
      @if (loading) {\r
        <div class="student-list-page__loading">\r
          <mat-progress-spinner diameter="40" mode="indeterminate"></mat-progress-spinner>\r
          <span>Loading students\u2026</span>\r
        </div>\r
      }\r
\r
      @if (loadError && !loading) {\r
        <p class="student-list-page__error" role="alert">{{ loadError }}</p>\r
      }\r
\r
      <div class="student-list-page__table-wrap">\r
        <table mat-table [dataSource]="dataSource" matSort class="student-list-table mat-elevation-z0">\r
          <ng-container matColumnDef="admissionNo">\r
            <th mat-header-cell *matHeaderCellDef mat-sort-header>Admission no.</th>\r
            <td mat-cell *matCellDef="let row">{{ row.admissionNo ?? '\u2014' }}</td>\r
          </ng-container>\r
\r
          <ng-container matColumnDef="studentName">\r
            <th mat-header-cell *matHeaderCellDef mat-sort-header>Name</th>\r
            <td mat-cell *matCellDef="let row">{{ displayStudentName(row) }}</td>\r
          </ng-container>\r
\r
          <ng-container matColumnDef="className">\r
            <th mat-header-cell *matHeaderCellDef mat-sort-header>Class</th>\r
            <td mat-cell *matCellDef="let row">{{ row.className ?? '\u2014' }}</td>\r
          </ng-container>\r
\r
          <ng-container matColumnDef="sectionName">\r
            <th mat-header-cell *matHeaderCellDef mat-sort-header>Section</th>\r
            <td mat-cell *matCellDef="let row">{{ row.sectionName ?? '\u2014' }}</td>\r
          </ng-container>\r
\r
          <ng-container matColumnDef="rollNo">\r
            <th mat-header-cell *matHeaderCellDef mat-sort-header>Roll no.</th>\r
            <td mat-cell *matCellDef="let row">{{ row.rollNo ?? '\u2014' }}</td>\r
          </ng-container>\r
\r
          <ng-container matColumnDef="phone">\r
            <th mat-header-cell *matHeaderCellDef mat-sort-header>Phone</th>\r
            <td mat-cell *matCellDef="let row">{{ row.phone ?? '\u2014' }}</td>\r
          </ng-container>\r
\r
          <ng-container matColumnDef="actions">\r
            <th mat-header-cell *matHeaderCellDef>Actions</th>\r
            <td mat-cell *matCellDef="let row">\r
              <button mat-icon-button type="button" [attr.aria-label]="'View ' + displayStudentName(row)">\r
                <mat-icon>visibility</mat-icon>\r
              </button>\r
            </td>\r
          </ng-container>\r
\r
          <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>\r
          <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>\r
        </table>\r
      </div>\r
\r
      <mat-paginator\r
        [pageSize]="10"\r
        [pageSizeOptions]="[5, 10, 25, 50]"\r
        showFirstLastButtons\r
      ></mat-paginator>\r
    </mat-card-content>\r
  </mat-card>\r
</section>\r
`, styles: ["/* src/app/pages/student/studentlist/studentlist.component.scss */\n.student-list-page {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  max-width: 1400px;\n  margin: 0 auto;\n  padding: 0 8px 16px;\n}\n.student-list-page__filter {\n  width: 100%;\n}\n.student-list-page__card {\n  width: 100%;\n}\n.student-list-page__toolbar {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: flex-start;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.student-list-page__search {\n  flex: 1 1 240px;\n  min-width: 0;\n}\n.student-list-page__loading {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px 0;\n}\n.student-list-page__error {\n  margin: 0 0 12px;\n  color: var(--mat-sys-error, #b3261e);\n}\n.student-list-page__table-wrap {\n  width: 100%;\n  overflow-x: auto;\n}\n.student-list-table {\n  width: 100%;\n  min-width: 720px;\n}\n@media (max-width: 600px) {\n  .student-list-page__toolbar {\n    flex-direction: column;\n    align-items: stretch;\n  }\n}\n/*# sourceMappingURL=studentlist.component.css.map */\n"] }]
  }], null, { paginator: [{
    type: ViewChild,
    args: [MatPaginator]
  }], sort: [{
    type: ViewChild,
    args: [MatSort]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StudentlistComponent, { className: "StudentlistComponent", filePath: "src/app/pages/student/studentlist/studentlist.component.ts", lineNumber: 24 });
})();

// src/app/pages/admin/admin.routes.ts
var routes = [
  { path: "country", component: CountryComponent },
  { path: "classmaster", component: ClassmasterComponent },
  { path: "designationmaster", component: DesignationmasterComponent },
  { path: "session", component: SessionComponent },
  { path: "section", component: SectionComponent },
  { path: "college", component: CollegeComponent },
  { path: "classSection", component: CollegeSectionComponent },
  { path: "assignSection", component: AssignSectionComponent },
  { path: "assignClassTeacher", component: AssignClassTeacherComponent },
  { path: "SMS", component: SmsapiComponent },
  { path: "expense", component: ExpenseComponent },
  { path: "FeeMaster", component: FeeMasterComponent },
  { path: "FeeGroup", component: FeeGroupComponent },
  { path: "FeeHead", component: FeeHeadComponent },
  { path: "feeInstallment", component: FeeInstallmentComponent },
  { path: "allocateFee", component: AllocateFeeComponent },
  { path: "house", component: HouseComponent },
  { path: "salutation", component: SalutationComponent },
  { path: "category", component: CategoryComponent },
  { path: "addSchool", component: AddSchoolComponent },
  { path: "addSubject", component: AddsubjectComponent },
  { path: "assignSubject", component: AssignsubjectComponent },
  { path: "subjectMaster", component: SubjectmasterComponent },
  { path: "studentlist", component: StudentlistComponent }
];
export {
  routes
};
//# sourceMappingURL=chunk-JACJH7B6.js.map
