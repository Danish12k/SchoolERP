import {
  FormlyForm,
  FormlyModule,
  MtxOption,
  MtxSelect,
  MtxSelectModule,
  MtxSelectTagTemplate
} from "./chunk-X3OJG3WO.js";
import {
  require_moment
} from "./chunk-YI5VGUAX.js";
import {
  DatetimeAdapter,
  MTX_DATETIME_FORMATS
} from "./chunk-RTBK2CJR.js";
import {
  MatDialog,
  MatDialogContent,
  MatDialogModule
} from "./chunk-KXOHAYUN.js";
import "./chunk-DLD7NDZL.js";
import {
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerModule,
  MatDatepickerToggle
} from "./chunk-7USXQSSE.js";
import {
  MatDivider,
  MatDividerModule
} from "./chunk-PLIWSWLX.js";
import {
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardModule,
  MatCardTitle
} from "./chunk-VYFYOWDW.js";
import "./chunk-6GHIWQHO.js";
import {
  MAT_INPUT_VALUE_ACCESSOR,
  MatInput,
  MatInputModule
} from "./chunk-A73OTLOU.js";
import {
  DateAdapter
} from "./chunk-V5CFSWHT.js";
import {
  PageHeaderComponent,
  ToastrService
} from "./chunk-NJPKBYXE.js";
import {
  A11yModule,
  AsyncPipe,
  CdkMonitorFocus,
  CdkPortalOutlet,
  CdkTrapFocus,
  CommonModule,
  ComponentPortal,
  DOWN_ARROW,
  DefaultValueAccessor,
  Directionality,
  END,
  ENTER,
  ESCAPE,
  FormBuilder,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  HOME,
  HttpClient,
  JsonPipe,
  LEFT_ARROW,
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
  MatSelect,
  MatSelectModule,
  MatSuffix,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NumberValueAccessor,
  Overlay,
  OverlayConfig,
  OverlayModule,
  PAGE_DOWN,
  PAGE_UP,
  PortalModule,
  RIGHT_ARROW,
  ReactiveFormsModule,
  RequiredValidator,
  SPACE,
  TemplatePortal,
  TranslateModule,
  TranslatePipe,
  TranslateService,
  UP_ARROW,
  Validators,
  _getFocusedElementPierceShadowDom,
  coerceNumberProperty,
  coerceStringArray,
  hasModifierKey,
  normalizePassiveListenerOptions,
  ɵNgNoValidate
} from "./chunk-VC5UOWO3.js";
import "./chunk-R3YVZPGI.js";
import {
  ANIMATION_MODULE_TYPE,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  DOCUMENT,
  Directive,
  ElementRef,
  EventEmitter,
  HostAttributeToken,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NgModule,
  NgZone,
  Output,
  Renderer2,
  Subject,
  Subscription,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
  __toESM,
  afterNextRender,
  booleanAttribute,
  delay,
  filter,
  forwardRef,
  inject,
  map,
  merge,
  numberAttribute,
  of,
  setClassMetadata,
  take,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵdomTemplate,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleMap,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-KH435EP6.js";

// node_modules/@ng-matero/extensions/fesm2022/mtxDatetimepicker.mjs
var _c0 = ["mtx-calendar-body", ""];
function _forTrack0($index, $item) {
  return this._trackRow($item);
}
var _forTrack1 = ($index, $item) => $item.id;
function MtxCalendarBody_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "tr", 0)(1, "td", 2);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("padding-top", ctx_r0._cellPadding)("padding-bottom", ctx_r0._cellPadding);
    \u0275\u0275attribute("colspan", ctx_r0.numCols);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.label, " ");
  }
}
function MtxCalendarBody_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "th", 5);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const row_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("padding-top", ctx_r0._cellPadding)("padding-bottom", ctx_r0._cellPadding);
    \u0275\u0275attribute("aria-label", row_r2[0].ariaLabel);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r2[0].displayValue, " ");
  }
}
function MtxCalendarBody_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "td", 2);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("padding-top", ctx_r0._cellPadding)("padding-bottom", ctx_r0._cellPadding);
    \u0275\u0275attribute("colspan", ctx_r0._firstRowOffset);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0._firstRowOffset >= ctx_r0.labelMinRequiredCells ? ctx_r0.label : "", " ");
  }
}
function MtxCalendarBody_For_2_For_4_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "td", 7)(1, "button", 8);
    \u0275\u0275domListener("click", function MtxCalendarBody_For_2_For_4_Conditional_0_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const item_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0._cellClicked(item_r4));
    });
    \u0275\u0275domElementStart(2, "span", 9);
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    const item_r4 = ctx_r4.$implicit;
    const \u0275$index_18_r6 = ctx_r4.$index;
    const \u0275$index_7_r7 = \u0275\u0275nextContext().$index;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("width", ctx_r0._cellWidth)("padding-top", ctx_r0._cellPadding)("padding-bottom", ctx_r0._cellPadding);
    \u0275\u0275attribute("data-mat-row", \u0275$index_7_r7)("data-mat-col", \u0275$index_18_r6);
    \u0275\u0275advance();
    \u0275\u0275classProp("mtx-calendar-body-disabled", !item_r4.enabled)("mtx-calendar-body-active", ctx_r0._isActiveCell(\u0275$index_7_r7, \u0275$index_18_r6));
    \u0275\u0275domProperty("tabIndex", ctx_r0._isActiveCell(\u0275$index_7_r7, \u0275$index_18_r6) ? 0 : -1);
    \u0275\u0275attribute("aria-label", item_r4.ariaLabel)("aria-disabled", !item_r4.enabled || null);
    \u0275\u0275advance();
    \u0275\u0275classProp("mtx-calendar-body-selected", ctx_r0.selectedValue === item_r4.value)("mtx-calendar-body-today", ctx_r0.todayValue === item_r4.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r4.displayValue, " ");
  }
}
function MtxCalendarBody_For_2_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, MtxCalendarBody_For_2_For_4_Conditional_0_Template, 4, 20, "td", 6);
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275conditional(!item_r4.isWeekNumber ? 0 : -1);
  }
}
function MtxCalendarBody_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "tr", 1);
    \u0275\u0275conditionalCreate(1, MtxCalendarBody_For_2_Conditional_1_Template, 2, 6, "th", 3);
    \u0275\u0275conditionalCreate(2, MtxCalendarBody_For_2_Conditional_2_Template, 2, 6, "td", 4);
    \u0275\u0275repeaterCreate(3, MtxCalendarBody_For_2_For_4_Template, 1, 1, null, null, _forTrack1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const row_r2 = ctx.$implicit;
    const \u0275$index_7_r7 = ctx.$index;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r2[0].isWeekNumber ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(\u0275$index_7_r7 === 0 && ctx_r0._firstRowOffset ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(row_r2);
  }
}
function MtxMonthView_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "th");
  }
}
function MtxMonthView_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r1 = ctx.$implicit;
    \u0275\u0275attribute("aria-label", day_r1.long);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(day_r1.narrow);
  }
}
var _forTrack2 = ($index, $item) => $item.value;
function MtxClock_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 7);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("font-size", item_r1.fontSize)("left", item_r1.left + "%")("top", item_r1.top + "%");
    \u0275\u0275classProp("mtx-clock-cell-disabled", !item_r1.enabled)("mtx-clock-cell-selected", ctx_r1._selectedHour === item_r1.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r1.displayValue);
  }
}
function MtxClock_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 7);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("left", item_r3.left + "%")("top", item_r3.top + "%");
    \u0275\u0275classProp("mtx-clock-cell-disabled", !item_r3.enabled)("mtx-clock-cell-selected", ctx_r1._selectedMinute === item_r3.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r3.displayValue);
  }
}
var _c1 = ["hourInput"];
var _c2 = ["minuteInput"];
function MtxTimeView_Conditional_0_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "button", 10);
    \u0275\u0275listener("keydown", function MtxTimeView_Conditional_0_Conditional_8_Template_button_keydown_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      return \u0275\u0275resetView($event.stopPropagation());
    })("click", function MtxTimeView_Conditional_0_Conditional_8_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.ampmChange.emit("AM"));
    });
    \u0275\u0275text(2, "AM");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 11);
    \u0275\u0275listener("keydown", function MtxTimeView_Conditional_0_Conditional_8_Template_button_keydown_3_listener($event) {
      \u0275\u0275restoreView(_r3);
      return \u0275\u0275resetView($event.stopPropagation());
    })("click", function MtxTimeView_Conditional_0_Conditional_8_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.ampmChange.emit("PM"));
    });
    \u0275\u0275text(4, "PM");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("mtx-time-ampm-active", ctx_r1.AMPM === "AM");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("mtx-time-ampm-active", ctx_r1.AMPM === "PM");
  }
}
function MtxTimeView_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 5)(2, "input", 6, 0);
    \u0275\u0275listener("timeValueChanged", function MtxTimeView_Conditional_0_Template_input_timeValueChanged_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1._handleHourInputChange($event));
    })("focus", function MtxTimeView_Conditional_0_Template_input_focus_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1._handleFocus("hour"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 7);
    \u0275\u0275text(5, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 8, 1);
    \u0275\u0275listener("timeValueChanged", function MtxTimeView_Conditional_0_Template_input_timeValueChanged_6_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1._handleMinuteInputChange($event));
    })("focus", function MtxTimeView_Conditional_0_Template_input_focus_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1._handleFocus("minute"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, MtxTimeView_Conditional_0_Conditional_8_Template, 5, 4, "div", 9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const hourInput_r4 = \u0275\u0275reference(3);
    const minuteInput_r5 = \u0275\u0275reference(7);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275classProp("mtx-time-input-active", ctx_r1.clockView === "hour")("mtx-time-input-warning", !hourInput_r4.valid);
    \u0275\u0275property("timeMin", ctx_r1.twelvehour ? 1 : 0)("timeMax", ctx_r1.twelvehour ? 12 : 23)("timeValue", ctx_r1.hour);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("mtx-time-input-active", ctx_r1.clockView === "minute")("mtx-time-input-warning", !minuteInput_r5.valid);
    \u0275\u0275property("timeMin", 0)("timeMax", 59)("timeValue", ctx_r1.minute)("timeInterval", ctx_r1.interval);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.twelvehour ? 8 : -1);
  }
}
function MtxTimeView_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "button", 12);
    \u0275\u0275listener("click", function MtxTimeView_Conditional_2_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1._handleCancel());
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 13);
    \u0275\u0275listener("click", function MtxTimeView_Conditional_2_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1._handleOk());
    });
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1._datetimepickerIntl.cancelLabel, " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", (ctx_r1._minuteInputDirective == null ? null : ctx_r1._minuteInputDirective.invalid) || (ctx_r1._hourInputDirective == null ? null : ctx_r1._hourInputDirective.invalid));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1._datetimepickerIntl.okLabel, " ");
  }
}
function MtxCalendar_Conditional_1_ng_template_0_Template(rf, ctx) {
}
function MtxCalendar_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MtxCalendar_Conditional_1_ng_template_0_Template, 0, 0, "ng-template", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("cdkPortalOutlet", ctx_r0._calendarHeaderPortal);
  }
}
function MtxCalendar_Conditional_2_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 12);
    \u0275\u0275element(1, "path", 13);
    \u0275\u0275elementEnd();
  }
}
function MtxCalendar_Conditional_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11);
    \u0275\u0275listener("click", function MtxCalendar_Conditional_2_Conditional_0_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0._yearClicked());
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, MtxCalendar_Conditional_2_Conditional_0_Conditional_3_Template, 2, 0, ":svg:svg", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r0.currentView === "year" || ctx_r0.currentView === "multi-year");
    \u0275\u0275attribute("aria-label", ctx_r0._yearButtonLabel);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0._yearButtonText);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.multiYearSelector || ctx_r0.type === "year" ? 3 : -1);
  }
}
function MtxCalendar_Conditional_2_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 16);
    \u0275\u0275listener("click", function MtxCalendar_Conditional_2_Conditional_1_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0._dateClicked());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", ctx_r0.currentView === "month")("not-clickable", ctx_r0.type === "month");
    \u0275\u0275attribute("aria-label", ctx_r0._dateButtonLabel);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0._dateButtonText);
  }
}
function MtxCalendar_Conditional_2_Conditional_1_Conditional_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 22)(1, "button", 23);
    \u0275\u0275listener("click", function MtxCalendar_Conditional_2_Conditional_1_Conditional_2_Conditional_8_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0._ampmClicked("AM"));
    });
    \u0275\u0275text(2, "AM");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 24);
    \u0275\u0275listener("click", function MtxCalendar_Conditional_2_Conditional_1_Conditional_2_Conditional_8_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0._ampmClicked("PM"));
    });
    \u0275\u0275text(4, "PM");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r0._AMPM === "AM");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r0._AMPM === "PM");
  }
}
function MtxCalendar_Conditional_2_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 17)(1, "span", 18)(2, "button", 19);
    \u0275\u0275listener("click", function MtxCalendar_Conditional_2_Conditional_1_Conditional_2_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0._hoursClicked());
    });
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 20);
    \u0275\u0275text(5, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 21);
    \u0275\u0275listener("click", function MtxCalendar_Conditional_2_Conditional_1_Conditional_2_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0._minutesClicked());
    });
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(8, MtxCalendar_Conditional_2_Conditional_1_Conditional_2_Conditional_8_Template, 5, 4, "span", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", ctx_r0.currentView === "clock");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r0._clockView === "hour");
    \u0275\u0275attribute("aria-label", ctx_r0._hourButtonLabel);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0._hoursButtonText);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx_r0._clockView === "minute");
    \u0275\u0275attribute("aria-label", ctx_r0._minuteButtonLabel);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0._minutesButtonText);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.twelvehour ? 8 : -1);
  }
}
function MtxCalendar_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275conditionalCreate(1, MtxCalendar_Conditional_2_Conditional_1_Conditional_1_Template, 2, 6, "button", 14);
    \u0275\u0275conditionalCreate(2, MtxCalendar_Conditional_2_Conditional_1_Conditional_2_Template, 9, 11, "span", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.type !== "time" ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.type.endsWith("time") ? 2 : -1);
  }
}
function MtxCalendar_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, MtxCalendar_Conditional_2_Conditional_0_Template, 4, 5, "button", 9);
    \u0275\u0275conditionalCreate(1, MtxCalendar_Conditional_2_Conditional_1_Template, 3, 2, "div", 10);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r0.type !== "time" ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.type !== "year" ? 1 : -1);
  }
}
function MtxCalendar_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "button", 25);
    \u0275\u0275listener("click", function MtxCalendar_Conditional_4_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0._previousClicked());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 26);
    \u0275\u0275element(3, "path", 27);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "div", 28)(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 29);
    \u0275\u0275listener("click", function MtxCalendar_Conditional_4_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0._nextClicked());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(8, "svg", 26);
    \u0275\u0275element(9, "path", 30);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("disabled", !ctx_r0._previousEnabled());
    \u0275\u0275attribute("aria-disabled", !ctx_r0._previousEnabled())("aria-label", ctx_r0._prevButtonLabel);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0._yearPeriodText);
    \u0275\u0275advance();
    \u0275\u0275classProp("disabled", !ctx_r0._nextEnabled());
    \u0275\u0275attribute("aria-disabled", !ctx_r0._nextEnabled())("aria-label", ctx_r0._nextButtonLabel);
  }
}
function MtxCalendar_Case_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mtx-month-view", 31);
    \u0275\u0275listener("_userSelection", function MtxCalendar_Case_6_Template_mtx_month_view__userSelection_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0._userSelected());
    })("selectedChange", function MtxCalendar_Case_6_Template_mtx_month_view_selectedChange_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0._dateSelected($event));
    });
    \u0275\u0275twoWayListener("activeDateChange", function MtxCalendar_Case_6_Template_mtx_month_view_activeDateChange_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0._activeDate, $event) || (ctx_r0._activeDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275twoWayProperty("activeDate", ctx_r0._activeDate);
    \u0275\u0275property("dateFilter", ctx_r0._dateFilterForViews)("selected", ctx_r0.selected)("showWeekNumbers", ctx_r0.showWeekNumbers)("type", ctx_r0.type);
  }
}
function MtxCalendar_Case_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mtx-year-view", 32);
    \u0275\u0275listener("_userSelection", function MtxCalendar_Case_7_Template_mtx_year_view__userSelection_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0._userSelected());
    })("selectedChange", function MtxCalendar_Case_7_Template_mtx_year_view_selectedChange_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0._monthSelected($event));
    });
    \u0275\u0275twoWayListener("activeDateChange", function MtxCalendar_Case_7_Template_mtx_year_view_activeDateChange_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0._activeDate, $event) || (ctx_r0._activeDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275twoWayProperty("activeDate", ctx_r0._activeDate);
    \u0275\u0275property("dateFilter", ctx_r0._dateFilterForViews)("selected", ctx_r0.selected)("type", ctx_r0.type);
  }
}
function MtxCalendar_Case_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mtx-multi-year-view", 33);
    \u0275\u0275listener("_userSelection", function MtxCalendar_Case_8_Template_mtx_multi_year_view__userSelection_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0._userSelected());
    })("selectedChange", function MtxCalendar_Case_8_Template_mtx_multi_year_view_selectedChange_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0._yearSelected($event));
    });
    \u0275\u0275twoWayListener("activeDateChange", function MtxCalendar_Case_8_Template_mtx_multi_year_view_activeDateChange_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0._activeDate, $event) || (ctx_r0._activeDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275twoWayProperty("activeDate", ctx_r0._activeDate);
    \u0275\u0275property("dateFilter", ctx_r0._dateFilterForViews)("maxDate", ctx_r0.maxDate)("minDate", ctx_r0.minDate)("selected", ctx_r0.selected)("type", ctx_r0.type);
  }
}
function MtxCalendar_Case_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mtx-time-view", 34);
    \u0275\u0275listener("_userSelection", function MtxCalendar_Case_9_Template_mtx_time_view__userSelection_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0._userSelected());
    })("activeDateChange", function MtxCalendar_Case_9_Template_mtx_time_view_activeDateChange_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0._onActiveDateChange($event));
    })("selectedChange", function MtxCalendar_Case_9_Template_mtx_time_view_selectedChange_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0._timeSelected($event));
    })("ampmChange", function MtxCalendar_Case_9_Template_mtx_time_view_ampmChange_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0._ampmClicked($event));
    })("clockViewChange", function MtxCalendar_Case_9_Template_mtx_time_view_clockViewChange_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0._clockView = $event);
    });
    \u0275\u0275twoWayListener("selectedChange", function MtxCalendar_Case_9_Template_mtx_time_view_selectedChange_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0._activeDate, $event) || (ctx_r0._activeDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("AMPM", ctx_r0._AMPM)("clockView", ctx_r0._clockView)("twelvehour", ctx_r0.twelvehour)("dateFilter", ctx_r0.dateFilter)("interval", ctx_r0.timeInterval)("maxDate", ctx_r0.maxDate)("minDate", ctx_r0.minDate);
    \u0275\u0275twoWayProperty("selected", ctx_r0._activeDate);
    \u0275\u0275property("actionsPortal", ctx_r0.actionsPortal)("autoFocus", ctx_r0.timeInputAutoFocus)("timeInput", ctx_r0.timeInput)("preventSameDateTimeSelection", ctx_r0.preventSameDateTimeSelection);
  }
}
function MtxDatetimepickerContent_ng_template_2_Template(rf, ctx) {
}
var _c3 = ["button"];
var _c4 = [[["", "mtxDatetimepickerToggleIcon", ""]]];
var _c5 = ["[mtxDatetimepickerToggleIcon]"];
function MtxDatetimepickerToggle_Conditional_2_Case_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 2);
    \u0275\u0275element(1, "path", 3);
    \u0275\u0275elementEnd();
  }
}
function MtxDatetimepickerToggle_Conditional_2_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 2);
    \u0275\u0275element(1, "path", 4);
    \u0275\u0275elementEnd();
  }
}
function MtxDatetimepickerToggle_Conditional_2_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 2);
    \u0275\u0275element(1, "path", 5)(2, "path", 6);
    \u0275\u0275elementEnd();
  }
}
function MtxDatetimepickerToggle_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, MtxDatetimepickerToggle_Conditional_2_Case_0_Template, 2, 0, ":svg:svg", 2)(1, MtxDatetimepickerToggle_Conditional_2_Case_1_Template, 2, 0, ":svg:svg", 2)(2, MtxDatetimepickerToggle_Conditional_2_Case_2_Template, 3, 0, ":svg:svg", 2);
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional((tmp_2_0 = ctx_r0.datetimepicker.type) === "time" ? 0 : tmp_2_0 === "datetime" ? 1 : 2);
  }
}
var _c6 = ["*"];
function MtxDatetimepickerActions_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 0);
    \u0275\u0275projection(1);
    \u0275\u0275domElementEnd();
  }
}
function createMissingDateImplError(provider) {
  return Error(`MtxDatetimepicker: No provider found for ${provider}. You must add one of the following to your app config: provideNativeDatetimeAdapter, provideDateFnsDatetimeAdapter,provideLuxonDatetimeAdapter, provideMomentDatetimeAdapter, or provide a custom implementation.`);
}
var MtxDatetimepickerFilterType;
(function(MtxDatetimepickerFilterType2) {
  MtxDatetimepickerFilterType2[MtxDatetimepickerFilterType2["DATE"] = 0] = "DATE";
  MtxDatetimepickerFilterType2[MtxDatetimepickerFilterType2["HOUR"] = 1] = "HOUR";
  MtxDatetimepickerFilterType2[MtxDatetimepickerFilterType2["MINUTE"] = 2] = "MINUTE";
})(MtxDatetimepickerFilterType || (MtxDatetimepickerFilterType = {}));
var _MtxDatetimepickerIntl = class _MtxDatetimepickerIntl {
  constructor() {
    this.changes = new Subject();
    this.calendarLabel = "Calendar";
    this.openCalendarLabel = "Open calendar";
    this.closeCalendarLabel = "Close calendar";
    this.prevMonthLabel = "Previous month";
    this.nextMonthLabel = "Next month";
    this.prevYearLabel = "Previous year";
    this.nextYearLabel = "Next year";
    this.prevMultiYearLabel = "Previous 24 years";
    this.nextMultiYearLabel = "Next 24 years";
    this.switchToMonthViewLabel = "Choose date";
    this.switchToYearViewLabel = "Choose month";
    this.switchToMultiYearViewLabel = "Choose month and year";
    this.startDateLabel = "Start date";
    this.endDateLabel = "End date";
    this.switchToClockHourViewLabel = "Choose hour";
    this.switchToClockMinuteViewLabel = "Choose minute";
    this.okLabel = "OK";
    this.cancelLabel = "Cancel";
  }
  /** A label for the week numbers (used by screen readers). */
  weekNumberLabel(number) {
    return `Week ${number}`;
  }
  /** Formats a range of years (used for visuals). */
  formatYearRange(start, end) {
    return `${start} \u2013 ${end}`;
  }
  /** Formats a label for a range of years (used by screen readers). */
  formatYearRangeLabel(start, end) {
    return `${start} to ${end}`;
  }
};
_MtxDatetimepickerIntl.\u0275fac = function MtxDatetimepickerIntl_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MtxDatetimepickerIntl)();
};
_MtxDatetimepickerIntl.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _MtxDatetimepickerIntl,
  factory: _MtxDatetimepickerIntl.\u0275fac,
  providedIn: "root"
});
var MtxDatetimepickerIntl = _MtxDatetimepickerIntl;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MtxDatetimepickerIntl, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var uniqueIdCounter$1 = 0;
var MtxCalendarCell = class {
  constructor(value, displayValue, ariaLabel, enabled, isWeekNumber) {
    this.value = value;
    this.displayValue = displayValue;
    this.ariaLabel = ariaLabel;
    this.enabled = enabled;
    this.isWeekNumber = isWeekNumber;
    this.id = uniqueIdCounter$1++;
  }
};
var _MtxCalendarBody = class _MtxCalendarBody {
  constructor() {
    this._elementRef = inject(ElementRef);
    this._ngZone = inject(NgZone);
    this._injector = inject(Injector);
    this.cellAspectRatio = 1;
    this.numCols = 7;
    this.allowDisabledSelection = false;
    this.activeCell = 0;
    this.selectedValueChange = new EventEmitter();
    this._trackRow = (row) => row;
  }
  _cellClicked(cell) {
    if (!this.allowDisabledSelection && !cell.enabled) {
      return;
    }
    this.selectedValueChange.emit(cell.value);
  }
  _emitActiveDateChange(cell, event) {
    if (cell.enabled) {
    }
  }
  _isActiveCell(rowIndex, colIndex) {
    let cellNumber = rowIndex * this.numCols + colIndex;
    if (rowIndex) {
      cellNumber -= this._firstRowOffset;
    }
    return cellNumber === this.activeCell;
  }
  ngOnChanges(changes) {
    const columnChanges = changes["numCols"];
    const {
      rows,
      numCols
    } = this;
    if (changes["rows"] || columnChanges) {
      this._firstRowOffset = rows && rows.length && rows[0].length ? numCols - rows[0].length : 0;
    }
    if (changes["cellAspectRatio"] || columnChanges || !this._cellPadding) {
      this._cellPadding = `${50 * this.cellAspectRatio / numCols}%`;
    }
    if (columnChanges || !this._cellWidth) {
      this._cellWidth = `${100 / numCols}%`;
    }
  }
  _focusActiveCell(movePreview = true) {
    afterNextRender(() => {
      setTimeout(() => {
        const activeCell = this._elementRef.nativeElement.querySelector(".mtx-calendar-body-active");
        if (activeCell) {
          activeCell.focus();
        }
      });
    }, {
      injector: this._injector
    });
  }
};
_MtxCalendarBody.\u0275fac = function MtxCalendarBody_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MtxCalendarBody)();
};
_MtxCalendarBody.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _MtxCalendarBody,
  selectors: [["", "mtx-calendar-body", ""]],
  hostAttrs: ["role", "grid", "aria-readonly", "true", 1, "mtx-calendar-body"],
  inputs: {
    label: "label",
    rows: "rows",
    cellAspectRatio: "cellAspectRatio",
    todayValue: "todayValue",
    selectedValue: "selectedValue",
    labelMinRequiredCells: "labelMinRequiredCells",
    numCols: "numCols",
    allowDisabledSelection: "allowDisabledSelection",
    activeCell: "activeCell"
  },
  outputs: {
    selectedValueChange: "selectedValueChange"
  },
  exportAs: ["mtxCalendarBody"],
  features: [\u0275\u0275NgOnChangesFeature],
  attrs: _c0,
  decls: 3,
  vars: 1,
  consts: [["aria-hidden", "true"], ["role", "row"], [1, "mtx-calendar-body-label"], [1, "mtx-calendar-body-week-number", 3, "paddingTop", "paddingBottom"], [1, "mtx-calendar-body-label", 3, "paddingTop", "paddingBottom"], [1, "mtx-calendar-body-week-number"], ["role", "gridcell", 1, "mtx-calendar-body-cell-container", 3, "width", "paddingTop", "paddingBottom"], ["role", "gridcell", 1, "mtx-calendar-body-cell-container"], ["type", "button", 1, "mtx-calendar-body-cell", 3, "click", "tabindex"], [1, "mtx-calendar-body-cell-content", "mat-focus-indicator"]],
  template: function MtxCalendarBody_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, MtxCalendarBody_Conditional_0_Template, 3, 6, "tr", 0);
      \u0275\u0275repeaterCreate(1, MtxCalendarBody_For_2_Template, 5, 2, "tr", 1, _forTrack0, true);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx._firstRowOffset < ctx.labelMinRequiredCells ? 0 : -1);
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.rows);
    }
  },
  styles: [".mtx-calendar-body{min-width:224px}.mtx-calendar-body-today:not(.mtx-calendar-body-selected){border-color:var(--mtx-datetimepicker-calendar-date-today-outline-color, var(--mat-sys-primary))}.mtx-calendar-body-label{height:0;line-height:0;text-align:left;padding-left:4.7142857143%;padding-right:4.7142857143%;font-size:var(--mtx-datetimepicker-calendar-body-label-text-size, var(--mat-sys-title-small-size));font-weight:var(--mtx-datetimepicker-calendar-body-label-text-weight, var(--mat-sys-title-small-weight));color:var(--mtx-datetimepicker-calendar-body-label-text-color, var(--mat-sys-on-surface))}[dir=rtl] .mtx-calendar-body-label{text-align:right}.mtx-calendar-body-week-number{height:0;line-height:0;font-weight:400;color:var(--mtx-datetimepicker-calendar-body-week-number-text-color, var(--mat-sys-secondary))}.mtx-calendar-body-cell-container{position:relative;height:0;line-height:0}.mtx-calendar-body-cell{position:absolute;top:0;left:0;width:100%;height:100%;background:none;text-align:center;margin:0;font-family:var(--mtx-datetimepicker-calendar-text-font, var(--mat-sys-body-medium-font));font-size:var(--mtx-datetimepicker-calendar-text-size, var(--mat-sys-body-medium-size));-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent}.mtx-calendar-body-cell::-moz-focus-inner{border:0}.mtx-calendar-body-disabled{cursor:default;pointer-events:none}.mtx-calendar-body-disabled>.mtx-calendar-body-cell-content:not(.mtx-calendar-body-selected){color:var(--mtx-datetimepicker-calendar-date-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mtx-calendar-body-disabled>.mtx-calendar-body-today:not(.mtx-calendar-body-selected){border-color:var(--mtx-datetimepicker-calendar-date-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}@media (forced-colors: active){.mtx-calendar-body-disabled{opacity:.5}}.mtx-calendar-body-cell-content{top:5%;left:5%;z-index:1;display:flex;align-items:center;justify-content:center;box-sizing:border-box;width:90%;height:90%;line-height:1;border:1px;border-style:solid;border-radius:999px;color:var(--mtx-datetimepicker-calendar-date-text-color, var(--mat-sys-on-surface));border-color:var(--mtx-datetimepicker-calendar-date-outline-color, transparent)}.mtx-calendar-body-cell-content.mat-focus-indicator{position:absolute}@media (forced-colors: active){.mtx-calendar-body-cell-content{border:none}}.cdk-keyboard-focused .mtx-calendar-body-active>.mtx-calendar-body-cell-content:not(.mtx-calendar-body-selected),.cdk-program-focused .mtx-calendar-body-active>.mtx-calendar-body-cell-content:not(.mtx-calendar-body-selected){background-color:var(--mtx-datetimepicker-calendar-date-focus-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent))}@media (hover: hover){.mtx-calendar-body-cell:not(.mtx-calendar-body-disabled):hover>.mtx-calendar-body-cell-content:not(.mtx-calendar-body-selected){background-color:var(--mtx-datetimepicker-calendar-date-hover-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent))}}.mtx-calendar-body-selected{background-color:var(--mtx-datetimepicker-calendar-date-selected-state-background-color, var(--mat-sys-primary));color:var(--mtx-datetimepicker-calendar-date-selected-state-text-color, var(--mat-sys-on-primary))}.mtx-calendar-body-disabled>.mtx-calendar-body-selected{background-color:var(--mtx-datetimepicker-calendar-date-selected-disabled-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mtx-calendar-body-selected.mtx-calendar-body-today{box-shadow:inset 0 0 0 1px var(--mtx-datetimepicker-calendar-date-today-selected-state-outline-color, var(--mat-sys-primary))}\n"],
  encapsulation: 2,
  changeDetection: 0
});
var MtxCalendarBody = _MtxCalendarBody;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MtxCalendarBody, [{
    type: Component,
    args: [{
      selector: "[mtx-calendar-body]",
      host: {
        "class": "mtx-calendar-body",
        "role": "grid",
        "aria-readonly": "true"
      },
      exportAs: "mtxCalendarBody",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: '<!--\n  If there\'s not enough space in the first row, create a separate label row. We mark this row as\n  aria-hidden because we don\'t want it to be read out as one of the weeks in the month.\n-->\n@if (_firstRowOffset < labelMinRequiredCells) {\n  <tr aria-hidden="true">\n    <td\n      class="mtx-calendar-body-label"\n      [attr.colspan]="numCols"\n      [style.paddingTop]="_cellPadding"\n      [style.paddingBottom]="_cellPadding"\n    >\n      {{ label }}\n    </td>\n  </tr>\n}\n\n<!-- Create the first row separately so we can include a special spacer cell. -->\n@for (row of rows; track _trackRow(row); let rowIndex = $index) {\n  <tr role="row">\n    @if (row[0].isWeekNumber) {\n      <th\n        class="mtx-calendar-body-week-number"\n        [style.paddingTop]="_cellPadding"\n        [style.paddingBottom]="_cellPadding"\n        [attr.aria-label]="row[0].ariaLabel"\n      >\n        {{ row[0].displayValue }}\n      </th>\n    }\n\n    <!--\n      This cell is purely decorative, but we can\'t put `aria-hidden` or `role="presentation"` on it,\n      because it throws off the week days for the rest of the row on NVDA. The aspect ratio of the\n      table cells is maintained by setting the top and bottom padding as a percentage of the width\n      (a variant of the trick described here: https://www.w3schools.com/howto/howto_css_aspect_ratio.asp).\n    -->\n    @if (rowIndex === 0 && _firstRowOffset) {\n      <td\n        class="mtx-calendar-body-label"\n        [attr.colspan]="_firstRowOffset"\n        [style.paddingTop]="_cellPadding"\n        [style.paddingBottom]="_cellPadding"\n      >\n        {{ _firstRowOffset >= labelMinRequiredCells ? label : \'\' }}\n      </td>\n    }\n    <!--\n      Each gridcell in the calendar contains a button, which signals to assistive technology that the\n      cell is interactable, as well as the selection state via `aria-pressed`. See #23476 for\n      background.\n    -->\n    @for (item of row; track item.id; let colIndex = $index) {\n      @if (!item.isWeekNumber) {\n        <td\n          role="gridcell"\n          class="mtx-calendar-body-cell-container"\n          [style.width]="_cellWidth"\n          [style.paddingTop]="_cellPadding"\n          [style.paddingBottom]="_cellPadding"\n          [attr.data-mat-row]="rowIndex"\n          [attr.data-mat-col]="colIndex"\n        >\n          <button\n            type="button"\n            class="mtx-calendar-body-cell"\n            [tabindex]="_isActiveCell(rowIndex, colIndex) ? 0 : -1"\n            [class.mtx-calendar-body-disabled]="!item.enabled"\n            [class.mtx-calendar-body-active]="_isActiveCell(rowIndex, colIndex)"\n            [attr.aria-label]="item.ariaLabel"\n            [attr.aria-disabled]="!item.enabled || null"\n            (click)="_cellClicked(item)"\n          >\n            <span\n              class="mtx-calendar-body-cell-content mat-focus-indicator"\n              [class.mtx-calendar-body-selected]="selectedValue === item.value"\n              [class.mtx-calendar-body-today]="todayValue === item.value"\n            >\n              {{ item.displayValue }}\n            </span>\n          </button>\n        </td>\n      }\n    }\n  </tr>\n}\n',
      styles: [".mtx-calendar-body{min-width:224px}.mtx-calendar-body-today:not(.mtx-calendar-body-selected){border-color:var(--mtx-datetimepicker-calendar-date-today-outline-color, var(--mat-sys-primary))}.mtx-calendar-body-label{height:0;line-height:0;text-align:left;padding-left:4.7142857143%;padding-right:4.7142857143%;font-size:var(--mtx-datetimepicker-calendar-body-label-text-size, var(--mat-sys-title-small-size));font-weight:var(--mtx-datetimepicker-calendar-body-label-text-weight, var(--mat-sys-title-small-weight));color:var(--mtx-datetimepicker-calendar-body-label-text-color, var(--mat-sys-on-surface))}[dir=rtl] .mtx-calendar-body-label{text-align:right}.mtx-calendar-body-week-number{height:0;line-height:0;font-weight:400;color:var(--mtx-datetimepicker-calendar-body-week-number-text-color, var(--mat-sys-secondary))}.mtx-calendar-body-cell-container{position:relative;height:0;line-height:0}.mtx-calendar-body-cell{position:absolute;top:0;left:0;width:100%;height:100%;background:none;text-align:center;margin:0;font-family:var(--mtx-datetimepicker-calendar-text-font, var(--mat-sys-body-medium-font));font-size:var(--mtx-datetimepicker-calendar-text-size, var(--mat-sys-body-medium-size));-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent}.mtx-calendar-body-cell::-moz-focus-inner{border:0}.mtx-calendar-body-disabled{cursor:default;pointer-events:none}.mtx-calendar-body-disabled>.mtx-calendar-body-cell-content:not(.mtx-calendar-body-selected){color:var(--mtx-datetimepicker-calendar-date-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mtx-calendar-body-disabled>.mtx-calendar-body-today:not(.mtx-calendar-body-selected){border-color:var(--mtx-datetimepicker-calendar-date-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}@media (forced-colors: active){.mtx-calendar-body-disabled{opacity:.5}}.mtx-calendar-body-cell-content{top:5%;left:5%;z-index:1;display:flex;align-items:center;justify-content:center;box-sizing:border-box;width:90%;height:90%;line-height:1;border:1px;border-style:solid;border-radius:999px;color:var(--mtx-datetimepicker-calendar-date-text-color, var(--mat-sys-on-surface));border-color:var(--mtx-datetimepicker-calendar-date-outline-color, transparent)}.mtx-calendar-body-cell-content.mat-focus-indicator{position:absolute}@media (forced-colors: active){.mtx-calendar-body-cell-content{border:none}}.cdk-keyboard-focused .mtx-calendar-body-active>.mtx-calendar-body-cell-content:not(.mtx-calendar-body-selected),.cdk-program-focused .mtx-calendar-body-active>.mtx-calendar-body-cell-content:not(.mtx-calendar-body-selected){background-color:var(--mtx-datetimepicker-calendar-date-focus-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent))}@media (hover: hover){.mtx-calendar-body-cell:not(.mtx-calendar-body-disabled):hover>.mtx-calendar-body-cell-content:not(.mtx-calendar-body-selected){background-color:var(--mtx-datetimepicker-calendar-date-hover-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent))}}.mtx-calendar-body-selected{background-color:var(--mtx-datetimepicker-calendar-date-selected-state-background-color, var(--mat-sys-primary));color:var(--mtx-datetimepicker-calendar-date-selected-state-text-color, var(--mat-sys-on-primary))}.mtx-calendar-body-disabled>.mtx-calendar-body-selected{background-color:var(--mtx-datetimepicker-calendar-date-selected-disabled-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mtx-calendar-body-selected.mtx-calendar-body-today{box-shadow:inset 0 0 0 1px var(--mtx-datetimepicker-calendar-date-today-selected-state-outline-color, var(--mat-sys-primary))}\n"]
    }]
  }], null, {
    label: [{
      type: Input
    }],
    rows: [{
      type: Input
    }],
    cellAspectRatio: [{
      type: Input
    }],
    todayValue: [{
      type: Input
    }],
    selectedValue: [{
      type: Input
    }],
    labelMinRequiredCells: [{
      type: Input
    }],
    numCols: [{
      type: Input
    }],
    allowDisabledSelection: [{
      type: Input
    }],
    activeCell: [{
      type: Input
    }],
    selectedValueChange: [{
      type: Output
    }]
  });
})();
var DAYS_PER_WEEK = 7;
var uniqueIdCounter = 0;
var _MtxMonthView = class _MtxMonthView {
  constructor() {
    this._adapter = inject(DatetimeAdapter, {
      optional: true
    });
    this._dir = inject(Directionality, {
      optional: true
    });
    this._dateFormats = inject(MTX_DATETIME_FORMATS, {
      optional: true
    });
    this._intl = inject(MtxDatetimepickerIntl);
    this.type = "date";
    this.showWeekNumbers = false;
    this.selectedChange = new EventEmitter();
    this._userSelection = new EventEmitter();
    this.activeDateChange = new EventEmitter();
    this._weekdays = [];
    this._selected = null;
    if (!this._adapter) {
      throw createMissingDateImplError("DatetimeAdapter");
    }
    if (!this._dateFormats) {
      throw createMissingDateImplError("MTX_DATETIME_FORMATS");
    }
    this._activeDate = this._adapter.today();
  }
  /**
   * The date to display in this month view (everything other than the month and year is ignored).
   */
  get activeDate() {
    return this._activeDate;
  }
  set activeDate(value) {
    const oldActiveDate = this._activeDate;
    this._activeDate = value || this._adapter.today();
    if (oldActiveDate && this._activeDate && !this._adapter.sameMonthAndYear(oldActiveDate, this._activeDate)) {
      this._init();
    }
  }
  /** The currently selected date. */
  get selected() {
    return this._selected;
  }
  set selected(value) {
    this._selected = value;
    this._selectedDate = this._getDateInCurrentMonth(this.selected);
  }
  ngAfterContentInit() {
    this._init();
  }
  /** Handles when a new date is selected. */
  _dateSelected(date) {
    const dateObject = this._adapter.createDatetime(this._adapter.getYear(this.activeDate), this._adapter.getMonth(this.activeDate), date, this._adapter.getHour(this.activeDate), this._adapter.getMinute(this.activeDate));
    this.selectedChange.emit(dateObject);
    this._activeDate = dateObject;
    if (this.type === "date") {
      this._userSelection.emit();
    }
  }
  /** Initializes this month view. */
  _init() {
    this._selectedDate = this._getDateInCurrentMonth(this.selected);
    this._todayDate = this._getDateInCurrentMonth(this._adapter.today());
    const firstOfMonth = this._adapter.createDatetime(this._adapter.getYear(this.activeDate), this._adapter.getMonth(this.activeDate), 1, this._adapter.getHour(this.activeDate), this._adapter.getMinute(this.activeDate));
    this._firstWeekOffset = (DAYS_PER_WEEK + this._adapter.getDayOfWeek(firstOfMonth) - this._adapter.getFirstDayOfWeek()) % DAYS_PER_WEEK;
    this._initWeekdays();
    this._createWeekCells();
  }
  /** Initializes the weekdays. */
  _initWeekdays() {
    const firstDayOfWeek = this._adapter.getFirstDayOfWeek();
    const narrowWeekdays = this._adapter.getDayOfWeekNames("narrow");
    const longWeekdays = this._adapter.getDayOfWeekNames("long");
    const weekdays = longWeekdays.map((long, i) => {
      return {
        long,
        narrow: narrowWeekdays[i],
        id: uniqueIdCounter++
      };
    });
    this._weekdays = weekdays.slice(firstDayOfWeek).concat(weekdays.slice(0, firstDayOfWeek));
  }
  /** Creates MdCalendarCells for the dates in this month. */
  _createWeekCells() {
    const daysInMonth = this._adapter.getNumDaysInMonth(this.activeDate);
    const dateNames = this._adapter.getDateNames();
    this._weeks = [[]];
    for (let i = 0, cell = this._firstWeekOffset; i < daysInMonth; i++, cell++) {
      if (cell === DAYS_PER_WEEK) {
        this._weeks.push([]);
        cell = 0;
      }
      const date = this._adapter.createDatetime(this._adapter.getYear(this.activeDate), this._adapter.getMonth(this.activeDate), i + 1, this._adapter.getHour(this.activeDate), this._adapter.getMinute(this.activeDate));
      if (this.showWeekNumbers && (cell === 0 || i === 0)) {
        const firstDayOfWeek = this._adapter.getFirstDayOfWeek();
        const weekNumber = this._adapter.getWeek(date, firstDayOfWeek);
        const ariaLabel2 = this._intl.weekNumberLabel(weekNumber);
        this._weeks[this._weeks.length - 1].push(new MtxCalendarCell(weekNumber, `${weekNumber}`, ariaLabel2, false, true));
      }
      const enabled = !this.dateFilter || this.dateFilter(date);
      const ariaLabel = this._adapter.format(date, this._dateFormats.display.dateA11yLabel);
      this._weeks[this._weeks.length - 1].push(new MtxCalendarCell(i + 1, dateNames[i], ariaLabel, enabled));
    }
  }
  /**
   * Gets the date in this month that the given Date falls on.
   * Returns null if the given Date is in another month.
   */
  _getDateInCurrentMonth(date) {
    return date && this._adapter.sameMonthAndYear(date, this.activeDate) ? this._adapter.getDate(date) : null;
  }
  /** Handles keydown events on the calendar body when calendar is in month view. */
  _handleCalendarBodyKeydown(event) {
    const oldActiveDate = this._activeDate;
    const isRtl = this._isRtl();
    switch (event.keyCode) {
      case LEFT_ARROW:
        this.activeDate = this._adapter.addCalendarDays(this._activeDate, isRtl ? 1 : -1);
        break;
      case RIGHT_ARROW:
        this.activeDate = this._adapter.addCalendarDays(this._activeDate, isRtl ? -1 : 1);
        break;
      case UP_ARROW:
        this.activeDate = this._adapter.addCalendarDays(this._activeDate, -7);
        break;
      case DOWN_ARROW:
        this.activeDate = this._adapter.addCalendarDays(this._activeDate, 7);
        break;
      case HOME:
        this.activeDate = this._adapter.addCalendarDays(this._activeDate, 1 - this._adapter.getDate(this._activeDate));
        break;
      case END:
        this.activeDate = this._adapter.addCalendarDays(this._activeDate, this._adapter.getNumDaysInMonth(this._activeDate) - this._adapter.getDate(this._activeDate));
        break;
      case PAGE_UP:
        this.activeDate = event.altKey ? this._adapter.addCalendarYears(this._activeDate, -1) : this._adapter.addCalendarMonths(this._activeDate, -1);
        break;
      case PAGE_DOWN:
        this.activeDate = event.altKey ? this._adapter.addCalendarYears(this._activeDate, 1) : this._adapter.addCalendarMonths(this._activeDate, 1);
        break;
      case ENTER:
      case SPACE:
        if (!this.dateFilter || this.dateFilter(this._activeDate)) {
          this._dateSelected(this._adapter.getDate(this._activeDate));
          event.preventDefault();
        }
        return;
      default:
        return;
    }
    if (this._adapter.compareDate(oldActiveDate, this.activeDate)) {
      this.activeDateChange.emit(this.activeDate);
    }
    this._focusActiveCell();
    event.preventDefault();
  }
  /** Focuses the active cell after the microtask queue is empty. */
  _focusActiveCell(movePreview) {
    this._mtxCalendarBody._focusActiveCell(movePreview);
  }
  /** Determines whether the user has the RTL layout direction. */
  _isRtl() {
    return this._dir && this._dir.value === "rtl";
  }
};
_MtxMonthView.\u0275fac = function MtxMonthView_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MtxMonthView)();
};
_MtxMonthView.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _MtxMonthView,
  selectors: [["mtx-month-view"]],
  viewQuery: function MtxMonthView_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(MtxCalendarBody, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._mtxCalendarBody = _t.first);
    }
  },
  inputs: {
    type: "type",
    dateFilter: "dateFilter",
    showWeekNumbers: [2, "showWeekNumbers", "showWeekNumbers", booleanAttribute],
    activeDate: "activeDate",
    selected: "selected"
  },
  outputs: {
    selectedChange: "selectedChange",
    _userSelection: "_userSelection",
    activeDateChange: "activeDateChange"
  },
  exportAs: ["mtxMonthView"],
  decls: 7,
  vars: 6,
  consts: [["role", "grid", 1, "mtx-calendar-table"], [1, "mtx-calendar-table-header"], ["mtx-calendar-body", "", 3, "selectedValueChange", "keydown", "rows", "numCols", "todayValue", "activeCell", "selectedValue"]],
  template: function MtxMonthView_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "table", 0)(1, "thead", 1)(2, "tr");
      \u0275\u0275conditionalCreate(3, MtxMonthView_Conditional_3_Template, 1, 0, "th");
      \u0275\u0275repeaterCreate(4, MtxMonthView_For_5_Template, 2, 2, "th", null, _forTrack1);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "tbody", 2);
      \u0275\u0275listener("selectedValueChange", function MtxMonthView_Template_tbody_selectedValueChange_6_listener($event) {
        return ctx._dateSelected($event);
      })("keydown", function MtxMonthView_Template_tbody_keydown_6_listener($event) {
        return ctx._handleCalendarBodyKeydown($event);
      });
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.showWeekNumbers ? 3 : -1);
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx._weekdays);
      \u0275\u0275advance(2);
      \u0275\u0275property("rows", ctx._weeks)("numCols", ctx.showWeekNumbers ? 8 : 7)("todayValue", ctx._todayDate)("activeCell", ctx._adapter.getDate(ctx.activeDate) - 1)("selectedValue", ctx._selectedDate);
    }
  },
  dependencies: [MtxCalendarBody],
  encapsulation: 2,
  changeDetection: 0
});
var MtxMonthView = _MtxMonthView;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MtxMonthView, [{
    type: Component,
    args: [{
      selector: "mtx-month-view",
      exportAs: "mtxMonthView",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      imports: [MtxCalendarBody],
      template: '<!-- eslint-disable @angular-eslint/template/interactive-supports-focus -->\n<table class="mtx-calendar-table" role="grid">\n  <thead class="mtx-calendar-table-header">\n    <tr>\n      @if (showWeekNumbers) {\n        <th></th>\n      }\n      @for (day of _weekdays; track day.id) {\n        <th [attr.aria-label]="day.long">{{ day.narrow }}</th>\n      }\n    </tr>\n  </thead>\n  <tbody\n    mtx-calendar-body\n    [rows]="_weeks"\n    [numCols]="showWeekNumbers ? 8 : 7"\n    [todayValue]="_todayDate!"\n    [activeCell]="_adapter.getDate(activeDate) - 1"\n    [selectedValue]="_selectedDate!"\n    (selectedValueChange)="_dateSelected($event)"\n    (keydown)="_handleCalendarBodyKeydown($event)"\n  ></tbody>\n</table>\n'
    }]
  }], () => [], {
    type: [{
      type: Input
    }],
    dateFilter: [{
      type: Input
    }],
    showWeekNumbers: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    selectedChange: [{
      type: Output
    }],
    _userSelection: [{
      type: Output
    }],
    activeDateChange: [{
      type: Output
    }],
    _mtxCalendarBody: [{
      type: ViewChild,
      args: [MtxCalendarBody]
    }],
    activeDate: [{
      type: Input
    }],
    selected: [{
      type: Input
    }]
  });
})();
var yearsPerPage = 24;
var yearsPerRow = 4;
var _MtxMultiYearView = class _MtxMultiYearView {
  constructor() {
    this._adapter = inject(DatetimeAdapter, {
      optional: true
    });
    this._dir = inject(Directionality, {
      optional: true
    });
    this._dateFormats = inject(MTX_DATETIME_FORMATS, {
      optional: true
    });
    this.type = "date";
    this.selectedChange = new EventEmitter();
    this._userSelection = new EventEmitter();
    this.activeDateChange = new EventEmitter();
    this._selected = null;
    if (!this._adapter) {
      throw createMissingDateImplError("DatetimeAdapter");
    }
    if (!this._dateFormats) {
      throw createMissingDateImplError("MTX_DATETIME_FORMATS");
    }
    this._activeDate = this._adapter.today();
  }
  /** The date to display in this multi year view */
  get activeDate() {
    return this._activeDate;
  }
  set activeDate(value) {
    const oldActiveDate = this._activeDate;
    this._activeDate = value || this._adapter.today();
    if (oldActiveDate && this._activeDate && !isSameMultiYearView(this._adapter, oldActiveDate, this._activeDate, this.minDate, this.maxDate)) {
      this._init();
    }
  }
  /** The currently selected date. */
  get selected() {
    return this._selected;
  }
  set selected(value) {
    this._selected = value;
    this._selectedYear = this._selected && this._adapter.getYear(this._selected);
  }
  /** The minimum selectable date. */
  get minDate() {
    return this._minDate;
  }
  set minDate(value) {
    this._minDate = this._getValidDateOrNull(this._adapter.deserialize(value));
  }
  /** The maximum selectable date. */
  get maxDate() {
    return this._maxDate;
  }
  set maxDate(value) {
    this._maxDate = this._getValidDateOrNull(this._adapter.deserialize(value));
  }
  ngAfterContentInit() {
    this._init();
  }
  /** Handles when a new year is selected. */
  _yearSelected(year) {
    const month = this._adapter.getMonth(this.activeDate);
    const normalizedDate = this._adapter.createDatetime(year, month, 1, 0, 0);
    const dateObject = this._adapter.createDatetime(year, month, Math.min(this._adapter.getDate(this.activeDate), this._adapter.getNumDaysInMonth(normalizedDate)), this._adapter.getHour(this.activeDate), this._adapter.getMinute(this.activeDate));
    this.selectedChange.emit(dateObject);
    this._activeDate = dateObject;
    if (this.type === "year") {
      this._userSelection.emit();
    }
  }
  _getActiveCell() {
    return getActiveOffset(this._adapter, this.activeDate, this.minDate, this.maxDate);
  }
  /** Initializes this year view. */
  _init() {
    this._todayYear = this._adapter.getYear(this._adapter.today());
    this._yearLabel = this._adapter.getYearName(this.activeDate);
    const activeYear = this._adapter.getYear(this.activeDate);
    const minYearOfPage = activeYear - getActiveOffset(this._adapter, this.activeDate, this.minDate, this.maxDate);
    this._years = [];
    for (let i = 0, row = []; i < yearsPerPage; i++) {
      row.push(minYearOfPage + i);
      if (row.length === yearsPerRow) {
        this._years.push(row.map((year) => this._createCellForYear(year)));
        row = [];
      }
    }
  }
  /** Creates an MtxCalendarCell for the given year. */
  _createCellForYear(year) {
    const yearName = this._adapter.getYearName(this._adapter.createDate(year, 0, 1));
    return new MtxCalendarCell(year, yearName, yearName, this._shouldEnableYear(year));
  }
  /** Whether the given year is enabled. */
  _shouldEnableYear(year) {
    if (year === void 0 || year === null || this.maxDate && year > this._adapter.getYear(this.maxDate) || this.minDate && year < this._adapter.getYear(this.minDate)) {
      return false;
    }
    if (!this.dateFilter) {
      return true;
    }
    const firstOfYear = this._adapter.createDate(year, 0, 1);
    for (let date = firstOfYear; this._adapter.getYear(date) === year; date = this._adapter.addCalendarDays(date, 1)) {
      if (this.dateFilter(date)) {
        return true;
      }
    }
    return false;
  }
  /**
   * @param obj The object to check.
   * @returns The given object if it is both a date instance and valid, otherwise null.
   */
  _getValidDateOrNull(obj) {
    return this._adapter.isDateInstance(obj) && this._adapter.isValid(obj) ? obj : null;
  }
  /** Handles keydown events on the calendar body when calendar is in multi-year view. */
  _handleCalendarBodyKeydown(event) {
    const oldActiveDate = this._activeDate;
    const isRtl = this._isRtl();
    switch (event.keyCode) {
      case LEFT_ARROW:
        this.activeDate = this._adapter.addCalendarYears(this._activeDate, isRtl ? 1 : -1);
        break;
      case RIGHT_ARROW:
        this.activeDate = this._adapter.addCalendarYears(this._activeDate, isRtl ? -1 : 1);
        break;
      case UP_ARROW:
        this.activeDate = this._adapter.addCalendarYears(this._activeDate, -yearsPerRow);
        break;
      case DOWN_ARROW:
        this.activeDate = this._adapter.addCalendarYears(this._activeDate, yearsPerRow);
        break;
      case HOME:
        this.activeDate = this._adapter.addCalendarYears(this._activeDate, -getActiveOffset(this._adapter, this._activeDate, this.minDate, this.maxDate));
        break;
      case END:
        this.activeDate = this._adapter.addCalendarYears(this._activeDate, yearsPerPage - getActiveOffset(this._adapter, this._activeDate, this.minDate, this.maxDate) - 1);
        break;
      case PAGE_UP:
        this.activeDate = this._adapter.addCalendarYears(this._activeDate, event.altKey ? -yearsPerPage * 10 : -yearsPerPage);
        break;
      case PAGE_DOWN:
        this.activeDate = this._adapter.addCalendarYears(this._activeDate, event.altKey ? yearsPerPage * 10 : yearsPerPage);
        break;
      case ENTER:
      case SPACE:
        this._yearSelected(this._adapter.getYear(this._activeDate));
        break;
      default:
        return;
    }
    if (this._adapter.compareDate(oldActiveDate, this.activeDate)) {
      this.activeDateChange.emit(this.activeDate);
    }
    this._focusActiveCell();
    event.preventDefault();
  }
  /** Focuses the active cell after the microtask queue is empty. */
  _focusActiveCell() {
    this._mtxCalendarBody._focusActiveCell();
  }
  /** Determines whether the user has the RTL layout direction. */
  _isRtl() {
    return this._dir && this._dir.value === "rtl";
  }
};
_MtxMultiYearView.\u0275fac = function MtxMultiYearView_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MtxMultiYearView)();
};
_MtxMultiYearView.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _MtxMultiYearView,
  selectors: [["mtx-multi-year-view"]],
  viewQuery: function MtxMultiYearView_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(MtxCalendarBody, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._mtxCalendarBody = _t.first);
    }
  },
  inputs: {
    type: "type",
    dateFilter: "dateFilter",
    activeDate: "activeDate",
    selected: "selected",
    minDate: "minDate",
    maxDate: "maxDate"
  },
  outputs: {
    selectedChange: "selectedChange",
    _userSelection: "_userSelection",
    activeDateChange: "activeDateChange"
  },
  exportAs: ["mtxMultiYearView"],
  decls: 3,
  vars: 7,
  consts: [["role", "grid", 1, "mtx-calendar-table"], [1, "mtx-calendar-table-header"], ["mtx-calendar-body", "", 3, "selectedValueChange", "keydown", "rows", "todayValue", "numCols", "cellAspectRatio", "activeCell", "allowDisabledSelection", "selectedValue"]],
  template: function MtxMultiYearView_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "table", 0);
      \u0275\u0275element(1, "thead", 1);
      \u0275\u0275elementStart(2, "tbody", 2);
      \u0275\u0275listener("selectedValueChange", function MtxMultiYearView_Template_tbody_selectedValueChange_2_listener($event) {
        return ctx._yearSelected($event);
      })("keydown", function MtxMultiYearView_Template_tbody_keydown_2_listener($event) {
        return ctx._handleCalendarBodyKeydown($event);
      });
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("rows", ctx._years)("todayValue", ctx._todayYear)("numCols", 4)("cellAspectRatio", 4 / 7)("activeCell", ctx._getActiveCell())("allowDisabledSelection", true)("selectedValue", ctx._selectedYear);
    }
  },
  dependencies: [MtxCalendarBody],
  encapsulation: 2,
  changeDetection: 0
});
var MtxMultiYearView = _MtxMultiYearView;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MtxMultiYearView, [{
    type: Component,
    args: [{
      selector: "mtx-multi-year-view",
      exportAs: "mtxMultiYearView",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      imports: [MtxCalendarBody],
      template: '<!-- eslint-disable @angular-eslint/template/interactive-supports-focus -->\n<table class="mtx-calendar-table" role="grid">\n  <thead class="mtx-calendar-table-header"></thead>\n  <tbody mtx-calendar-body\n         [rows]="_years"\n         [todayValue]="_todayYear"\n         [numCols]="4"\n         [cellAspectRatio]="4 / 7"\n         [activeCell]="_getActiveCell()"\n         [allowDisabledSelection]="true"\n         [selectedValue]="_selectedYear!"\n         (selectedValueChange)="_yearSelected($event)"\n         (keydown)="_handleCalendarBodyKeydown($event)"></tbody>\n</table>\n'
    }]
  }], () => [], {
    type: [{
      type: Input
    }],
    dateFilter: [{
      type: Input
    }],
    selectedChange: [{
      type: Output
    }],
    _userSelection: [{
      type: Output
    }],
    activeDateChange: [{
      type: Output
    }],
    _mtxCalendarBody: [{
      type: ViewChild,
      args: [MtxCalendarBody]
    }],
    activeDate: [{
      type: Input
    }],
    selected: [{
      type: Input
    }],
    minDate: [{
      type: Input
    }],
    maxDate: [{
      type: Input
    }]
  });
})();
function isSameMultiYearView(dateAdapter, date1, date2, minDate, maxDate) {
  const year1 = dateAdapter.getYear(date1);
  const year2 = dateAdapter.getYear(date2);
  const startingYear = getStartingYear(dateAdapter, minDate, maxDate);
  return Math.floor((year1 - startingYear) / yearsPerPage) === Math.floor((year2 - startingYear) / yearsPerPage);
}
function getActiveOffset(dateAdapter, activeDate, minDate, maxDate) {
  const activeYear = dateAdapter.getYear(activeDate);
  return euclideanModulo(activeYear - getStartingYear(dateAdapter, minDate, maxDate), yearsPerPage);
}
function getStartingYear(dateAdapter, minDate, maxDate) {
  let startingYear = 0;
  if (maxDate) {
    const maxYear = dateAdapter.getYear(maxDate);
    startingYear = maxYear - yearsPerPage + 1;
  } else if (minDate) {
    startingYear = dateAdapter.getYear(minDate);
  }
  return startingYear;
}
function euclideanModulo(a, b) {
  return (a % b + b) % b;
}
var activeEventOptions = normalizePassiveListenerOptions({
  passive: false
});
var CLOCK_RADIUS = 50;
var CLOCK_INNER_RADIUS = 27.5;
var CLOCK_OUTER_RADIUS = 41.25;
var CLOCK_TICK_RADIUS = 7.0833;
var _MtxClock = class _MtxClock {
  constructor() {
    this._elementRef = inject(ElementRef);
    this._adapter = inject(DatetimeAdapter);
    this._changeDetectorRef = inject(ChangeDetectorRef);
    this._document = inject(DOCUMENT);
    this.interval = 1;
    this.actionButtons = false;
    this.twelvehour = false;
    this.AMPM = "AM";
    this.selectedChange = new EventEmitter();
    this.activeDateChange = new EventEmitter();
    this._userSelection = new EventEmitter();
    this._hourView = true;
    this._hours = [];
    this._minutes = [];
    this._timeChanged = false;
    this._pointerDown = (event) => {
      this._timeChanged = false;
      this.setTime(event);
      this._bindGlobalEvents(event);
    };
    this._pointerMove = (event) => {
      if (event.cancelable) {
        event.preventDefault();
      }
      this.setTime(event);
    };
    this._pointerUp = (event) => {
      if (event.cancelable) {
        event.preventDefault();
      }
      this._removeGlobalEvents();
      if (this._timeChanged) {
        this.selectedChange.emit(this.activeDate);
        if (this.actionButtons || !this._hourView) {
          this._userSelection.emit();
        }
      }
    };
  }
  /**
   * The date to display in this clock view.
   */
  get activeDate() {
    return this._activeDate;
  }
  set activeDate(value) {
    const oldActiveDate = this._activeDate;
    this._activeDate = this._adapter.clampDate(value, this.minDate, this.maxDate);
    if (!this._adapter.sameMinute(oldActiveDate, this._activeDate)) {
      this._init();
    }
  }
  /** The currently selected date. */
  get selected() {
    return this._selected;
  }
  set selected(value) {
    this._selected = this._adapter.getValidDateOrNull(this._adapter.deserialize(value));
    if (this._selected) {
      this.activeDate = this._selected;
    }
  }
  /** The minimum selectable date. */
  get minDate() {
    return this._minDate;
  }
  set minDate(value) {
    this._minDate = this._adapter.getValidDateOrNull(this._adapter.deserialize(value));
  }
  /** The maximum selectable date. */
  get maxDate() {
    return this._maxDate;
  }
  set maxDate(value) {
    this._maxDate = this._adapter.getValidDateOrNull(this._adapter.deserialize(value));
  }
  /** Whether the clock should be started in hour or minute view. */
  set startView(value) {
    this._hourView = value !== "minute";
  }
  get _hand() {
    const hour = this._adapter.getHour(this.activeDate);
    this._selectedHour = hour;
    this._selectedMinute = this._adapter.getMinute(this.activeDate);
    let deg = 0;
    let radius = CLOCK_OUTER_RADIUS;
    if (this._hourView) {
      const outer = this._selectedHour > 0 && this._selectedHour < 13;
      radius = outer ? CLOCK_OUTER_RADIUS : CLOCK_INNER_RADIUS;
      if (this.twelvehour) {
        radius = CLOCK_OUTER_RADIUS;
      }
      deg = Math.round(this._selectedHour * (360 / (24 / 2)));
    } else {
      deg = Math.round(this._selectedMinute * (360 / 60));
    }
    return {
      height: `${radius}%`,
      marginTop: `${50 - radius}%`,
      transform: `rotate(${deg}deg)`
    };
  }
  ngAfterContentInit() {
    this.activeDate = this._activeDate || this._adapter.today();
    this._init();
  }
  ngOnDestroy() {
    this._removeGlobalEvents();
  }
  ngOnChanges() {
    this._init();
  }
  /** Binds our global move and end events. */
  _bindGlobalEvents(triggerEvent) {
    const document2 = this._document;
    const isTouch = isTouchEvent(triggerEvent);
    const moveEventName = isTouch ? "touchmove" : "mousemove";
    const endEventName = isTouch ? "touchend" : "mouseup";
    document2.addEventListener(moveEventName, this._pointerMove, activeEventOptions);
    document2.addEventListener(endEventName, this._pointerUp, activeEventOptions);
    if (isTouch) {
      document2.addEventListener("touchcancel", this._pointerUp, activeEventOptions);
    }
  }
  /** Removes any global event listeners that we may have added. */
  _removeGlobalEvents() {
    const document2 = this._document;
    document2.removeEventListener("mousemove", this._pointerMove, activeEventOptions);
    document2.removeEventListener("mouseup", this._pointerUp, activeEventOptions);
    document2.removeEventListener("touchmove", this._pointerMove, activeEventOptions);
    document2.removeEventListener("touchend", this._pointerUp, activeEventOptions);
    document2.removeEventListener("touchcancel", this._pointerUp, activeEventOptions);
  }
  /** Initializes this clock view. */
  _init() {
    this._hours.length = 0;
    this._minutes.length = 0;
    const hourNames = this._adapter.getHourNames();
    const minuteNames = this._adapter.getMinuteNames();
    if (this.twelvehour) {
      const hours = [];
      for (let i = 0; i < hourNames.length; i++) {
        const radian = i / 6 * Math.PI;
        const radius = CLOCK_OUTER_RADIUS;
        const hour = i;
        const date = this._adapter.createDatetime(this._adapter.getYear(this.activeDate), this._adapter.getMonth(this.activeDate), this._adapter.getDate(this.activeDate), hour, 0);
        const enabled = (!this.minDate || this._adapter.compareDatetime(date, this.minDate, false) >= 0) && (!this.maxDate || this._adapter.compareDatetime(date, this.maxDate, false) <= 0) && (!this.dateFilter || this.dateFilter(date, MtxDatetimepickerFilterType.HOUR));
        hours.push({
          value: i,
          displayValue: i % 12 === 0 ? "12" : hourNames[i % 12],
          enabled,
          top: CLOCK_RADIUS - Math.cos(radian) * radius - CLOCK_TICK_RADIUS,
          left: CLOCK_RADIUS + Math.sin(radian) * radius - CLOCK_TICK_RADIUS
        });
      }
      if (this.AMPM === "AM") {
        this._hours = hours.filter((x) => x.value < 12);
      } else {
        this._hours = hours.filter((x) => x.value >= 12);
      }
    } else {
      for (let i = 0; i < hourNames.length; i++) {
        const radian = i / 6 * Math.PI;
        const outer = i > 0 && i < 13;
        const radius = outer ? CLOCK_OUTER_RADIUS : CLOCK_INNER_RADIUS;
        const date = this._adapter.createDatetime(this._adapter.getYear(this.activeDate), this._adapter.getMonth(this.activeDate), this._adapter.getDate(this.activeDate), i, 0);
        const enabled = (!this.minDate || this._adapter.compareDatetime(date, this.minDate, false) >= 0) && (!this.maxDate || this._adapter.compareDatetime(date, this.maxDate, false) <= 0) && (!this.dateFilter || this.dateFilter(date, MtxDatetimepickerFilterType.HOUR));
        this._hours.push({
          value: i,
          displayValue: i === 0 ? "00" : hourNames[i],
          enabled,
          top: CLOCK_RADIUS - Math.cos(radian) * radius - CLOCK_TICK_RADIUS,
          left: CLOCK_RADIUS + Math.sin(radian) * radius - CLOCK_TICK_RADIUS,
          fontSize: i > 0 && i < 13 ? "" : "80%"
        });
      }
    }
    for (let i = 0; i < minuteNames.length; i += 5) {
      const radian = i / 30 * Math.PI;
      const date = this._adapter.createDatetime(this._adapter.getYear(this.activeDate), this._adapter.getMonth(this.activeDate), this._adapter.getDate(this.activeDate), this._adapter.getHour(this.activeDate), i);
      const enabled = (!this.minDate || this._adapter.compareDatetime(date, this.minDate) >= 0) && (!this.maxDate || this._adapter.compareDatetime(date, this.maxDate) <= 0) && (!this.dateFilter || this.dateFilter(date, MtxDatetimepickerFilterType.MINUTE));
      this._minutes.push({
        value: i,
        displayValue: i === 0 ? "00" : minuteNames[i],
        enabled,
        top: CLOCK_RADIUS - Math.cos(radian) * CLOCK_OUTER_RADIUS - CLOCK_TICK_RADIUS,
        left: CLOCK_RADIUS + Math.sin(radian) * CLOCK_OUTER_RADIUS - CLOCK_TICK_RADIUS
      });
    }
  }
  /**
   * Set Time
   * @param event
   */
  setTime(event) {
    const trigger = this._elementRef.nativeElement;
    const triggerRect = trigger.getBoundingClientRect();
    const width = trigger.offsetWidth;
    const height = trigger.offsetHeight;
    const {
      pageX,
      pageY
    } = getPointerPositionOnPage(event);
    const x = width / 2 - (pageX - triggerRect.left - window.pageXOffset);
    const y = height / 2 - (pageY - triggerRect.top - window.pageYOffset);
    let radian = Math.atan2(-x, y);
    const unit = Math.PI / (this._hourView ? 6 : this.interval ? 30 / this.interval : 30);
    const z = Math.sqrt(x * x + y * y);
    const outer = this._hourView && z > (width * (CLOCK_OUTER_RADIUS / 100) + width * (CLOCK_INNER_RADIUS / 100)) / 2;
    if (radian < 0) {
      radian = Math.PI * 2 + radian;
    }
    let value = Math.round(radian / unit);
    let date;
    if (this._hourView) {
      if (this.twelvehour) {
        if (this.AMPM === "AM") {
          value = value === 0 ? 12 : value;
        } else {
          value = value === 12 ? 0 : value + 12;
        }
      } else {
        if (value === 12) {
          value = 0;
        }
        value = outer ? value === 0 ? 12 : value : value === 0 ? 0 : value + 12;
      }
      date = this._adapter.createDatetime(this._adapter.getYear(this.activeDate), this._adapter.getMonth(this.activeDate), this._adapter.getDate(this.activeDate), value, this._adapter.getMinute(this.activeDate));
    } else {
      if (this.interval) {
        value *= this.interval;
      }
      if (value === 60) {
        value = 0;
      }
      date = this._adapter.createDatetime(this._adapter.getYear(this.activeDate), this._adapter.getMonth(this.activeDate), this._adapter.getDate(this.activeDate), this._adapter.getHour(this.activeDate), value);
    }
    if (this.dateFilter && !this.dateFilter(date, this._hourView ? MtxDatetimepickerFilterType.HOUR : MtxDatetimepickerFilterType.MINUTE)) {
      return;
    }
    this._timeChanged = true;
    this.activeDate = date;
    this._changeDetectorRef.markForCheck();
    this.activeDateChange.emit(this.activeDate);
  }
};
_MtxClock.\u0275fac = function MtxClock_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MtxClock)();
};
_MtxClock.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _MtxClock,
  selectors: [["mtx-clock"]],
  hostAttrs: ["role", "clock", 1, "mtx-clock"],
  hostBindings: function MtxClock_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("mousedown", function MtxClock_mousedown_HostBindingHandler($event) {
        return ctx._pointerDown($event);
      })("touchstart", function MtxClock_touchstart_HostBindingHandler($event) {
        return ctx._pointerDown($event);
      });
    }
  },
  inputs: {
    dateFilter: "dateFilter",
    interval: "interval",
    actionButtons: "actionButtons",
    twelvehour: [2, "twelvehour", "twelvehour", booleanAttribute],
    AMPM: "AMPM",
    activeDate: "activeDate",
    selected: "selected",
    minDate: "minDate",
    maxDate: "maxDate",
    startView: "startView"
  },
  outputs: {
    selectedChange: "selectedChange",
    activeDateChange: "activeDateChange",
    _userSelection: "_userSelection"
  },
  exportAs: ["mtxClock"],
  features: [\u0275\u0275NgOnChangesFeature],
  decls: 9,
  vars: 6,
  consts: [[1, "mtx-clock-wrapper"], [1, "mtx-clock-center"], [1, "mtx-clock-hand"], [1, "mtx-clock-hours"], [1, "mtx-clock-cell", 3, "mtx-clock-cell-disabled", "mtx-clock-cell-selected", "fontSize", "left", "top"], [1, "mtx-clock-minutes"], [1, "mtx-clock-cell", 3, "mtx-clock-cell-disabled", "mtx-clock-cell-selected", "left", "top"], [1, "mtx-clock-cell"]],
  template: function MtxClock_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0);
      \u0275\u0275domElement(1, "div", 1)(2, "div", 2);
      \u0275\u0275domElementStart(3, "div", 3);
      \u0275\u0275repeaterCreate(4, MtxClock_For_5_Template, 2, 11, "div", 4, _forTrack2);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(6, "div", 5);
      \u0275\u0275repeaterCreate(7, MtxClock_For_8_Template, 2, 9, "div", 6, _forTrack2);
      \u0275\u0275domElementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275styleMap(ctx._hand);
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx._hourView);
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx._hours);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", !ctx._hourView);
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx._minutes);
    }
  },
  styles: ['.mtx-clock{position:relative;display:block;min-width:224px;margin:12px;box-sizing:border-box;-webkit-user-select:none;user-select:none;touch-action:none;font-size:var(--mtx-datetimepicker-clock-text-size, var(--mat-sys-title-small-size))}.mtx-clock-wrapper{position:relative;width:100%;height:0;padding-top:100%;border-radius:50%;background-color:var(--mtx-datetimepicker-clock-dial-background-color, var(--mat-sys-surface-container-highest))}.mtx-clock-center{position:absolute;top:50%;left:50%;width:3%;height:3%;margin:-1.5%;border-radius:50%;background-color:var(--mtx-datetimepicker-clock-hand-background-color, var(--mat-sys-primary))}.mtx-clock-hand{position:absolute;inset:0;width:2px;margin:0 auto;transform-origin:bottom;background-color:var(--mtx-datetimepicker-clock-hand-background-color, var(--mat-sys-primary))}.mtx-clock-hand:before{content:"";position:absolute;top:-4px;left:-3px;width:8px;height:8px;border-radius:50%;background-color:var(--mtx-datetimepicker-clock-hand-background-color, var(--mat-sys-primary))}.mtx-clock-hours,.mtx-clock-minutes{position:absolute;top:0;left:0;width:100%;height:100%;opacity:0;visibility:hidden;transition:.35s;transform:scale(1.2)}.mtx-clock-hours.active,.mtx-clock-minutes.active{opacity:1;visibility:visible;transform:scale(1)}.mtx-clock-minutes{transform:scale(.8)}.mtx-clock-cell{position:absolute;display:flex;width:14.1666%;height:14.1666%;justify-content:center;box-sizing:border-box;border-radius:50%;align-items:center;cursor:pointer;color:var(--mtx-datetimepicker-clock-cell-text-color, var(--mat-sys-on-surface))}.mtx-clock-cell.mtx-clock-cell-selected{color:#fff;background-color:var(--mtx-datetimepicker-clock-hand-background-color, var(--mat-sys-primary))}.mtx-clock-cell:not(.mtx-clock-cell-selected,.mtx-clock-cell-disabled):hover{background-color:var(--mtx-datetimepicker-clock-cell-hover-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent))}.mtx-clock-cell.mtx-clock-cell-disabled{pointer-events:none;color:var(--mtx-datetimepicker-clock-cell-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}\n'],
  encapsulation: 2,
  changeDetection: 0
});
var MtxClock = _MtxClock;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MtxClock, [{
    type: Component,
    args: [{
      selector: "mtx-clock",
      host: {
        "role": "clock",
        "class": "mtx-clock",
        "(mousedown)": "_pointerDown($event)",
        "(touchstart)": "_pointerDown($event)"
      },
      exportAs: "mtxClock",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<div class="mtx-clock-wrapper">
  <div class="mtx-clock-center"></div>
  <div class="mtx-clock-hand" [style]="_hand"></div>
  <div class="mtx-clock-hours" [class.active]="_hourView">
    @for (item of _hours; track item.value) {
      <div
        class="mtx-clock-cell"
        [class.mtx-clock-cell-disabled]="!item.enabled"
        [class.mtx-clock-cell-selected]="_selectedHour === item.value"
        [style.fontSize]="item.fontSize"
        [style.left]="item.left+'%'"
        [style.top]="item.top+'%'">{{ item.displayValue }}</div>
    }
  </div>
  <div class="mtx-clock-minutes" [class.active]="!_hourView">
    @for (item of _minutes; track item.value) {
      <div
        class="mtx-clock-cell"
        [class.mtx-clock-cell-disabled]="!item.enabled"
        [class.mtx-clock-cell-selected]="_selectedMinute === item.value"
        [style.left]="item.left+'%'"
        [style.top]="item.top+'%'">{{ item.displayValue }}</div>
    }
  </div>
</div>
`,
      styles: ['.mtx-clock{position:relative;display:block;min-width:224px;margin:12px;box-sizing:border-box;-webkit-user-select:none;user-select:none;touch-action:none;font-size:var(--mtx-datetimepicker-clock-text-size, var(--mat-sys-title-small-size))}.mtx-clock-wrapper{position:relative;width:100%;height:0;padding-top:100%;border-radius:50%;background-color:var(--mtx-datetimepicker-clock-dial-background-color, var(--mat-sys-surface-container-highest))}.mtx-clock-center{position:absolute;top:50%;left:50%;width:3%;height:3%;margin:-1.5%;border-radius:50%;background-color:var(--mtx-datetimepicker-clock-hand-background-color, var(--mat-sys-primary))}.mtx-clock-hand{position:absolute;inset:0;width:2px;margin:0 auto;transform-origin:bottom;background-color:var(--mtx-datetimepicker-clock-hand-background-color, var(--mat-sys-primary))}.mtx-clock-hand:before{content:"";position:absolute;top:-4px;left:-3px;width:8px;height:8px;border-radius:50%;background-color:var(--mtx-datetimepicker-clock-hand-background-color, var(--mat-sys-primary))}.mtx-clock-hours,.mtx-clock-minutes{position:absolute;top:0;left:0;width:100%;height:100%;opacity:0;visibility:hidden;transition:.35s;transform:scale(1.2)}.mtx-clock-hours.active,.mtx-clock-minutes.active{opacity:1;visibility:visible;transform:scale(1)}.mtx-clock-minutes{transform:scale(.8)}.mtx-clock-cell{position:absolute;display:flex;width:14.1666%;height:14.1666%;justify-content:center;box-sizing:border-box;border-radius:50%;align-items:center;cursor:pointer;color:var(--mtx-datetimepicker-clock-cell-text-color, var(--mat-sys-on-surface))}.mtx-clock-cell.mtx-clock-cell-selected{color:#fff;background-color:var(--mtx-datetimepicker-clock-hand-background-color, var(--mat-sys-primary))}.mtx-clock-cell:not(.mtx-clock-cell-selected,.mtx-clock-cell-disabled):hover{background-color:var(--mtx-datetimepicker-clock-cell-hover-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent))}.mtx-clock-cell.mtx-clock-cell-disabled{pointer-events:none;color:var(--mtx-datetimepicker-clock-cell-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}\n']
    }]
  }], null, {
    dateFilter: [{
      type: Input
    }],
    interval: [{
      type: Input
    }],
    actionButtons: [{
      type: Input
    }],
    twelvehour: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    AMPM: [{
      type: Input
    }],
    selectedChange: [{
      type: Output
    }],
    activeDateChange: [{
      type: Output
    }],
    _userSelection: [{
      type: Output
    }],
    activeDate: [{
      type: Input
    }],
    selected: [{
      type: Input
    }],
    minDate: [{
      type: Input
    }],
    maxDate: [{
      type: Input
    }],
    startView: [{
      type: Input
    }]
  });
})();
function isTouchEvent(event) {
  return event.type[0] === "t";
}
function getPointerPositionOnPage(event) {
  let point;
  if (isTouchEvent(event)) {
    point = event.touches[0] || event.changedTouches[0];
  } else {
    point = event;
  }
  return point;
}
function pad(num, size) {
  num = String(num);
  while (num.length < size) num = "0" + num;
  return num;
}
var _MtxTimeInput = class _MtxTimeInput {
  set timeInterval(value) {
    this._interval = coerceNumberProperty(value);
  }
  set timeMin(value) {
    this._min = coerceNumberProperty(value);
  }
  set timeMax(value) {
    this._max = coerceNumberProperty(value);
  }
  set timeValue(value) {
    this._value = coerceNumberProperty(value);
    if (!this.hasFocus) {
      this.writeValue(this._value);
    }
    this.writePlaceholder(this._value);
  }
  constructor() {
    this.element = inject(ElementRef);
    this.cdr = inject(ChangeDetectorRef);
    this._interval = 1;
    this._min = 0;
    this._max = Infinity;
    this.timeValueChanged = new EventEmitter();
    this.keyDownListener = this.keyDownHandler.bind(this);
    this.keyPressListener = this.keyPressHandler.bind(this);
    this.inputEventListener = this.inputChangedHandler.bind(this);
    this.inputElement.addEventListener("keydown", this.keyDownListener, {
      passive: true
    });
    this.inputElement.addEventListener("keypress", this.keyPressListener);
    this.inputElement.addEventListener("input", this.inputEventListener, {
      passive: true
    });
  }
  get hasFocus() {
    return this.element.nativeElement && this.element?.nativeElement === document?.activeElement;
  }
  get inputElement() {
    return this.element.nativeElement;
  }
  // We look here at the placeholder value, because we write '' into the value on focus
  // placeholder should always be up to date with "currentValue"
  get valid() {
    if (this._value) {
      const currentValue = String(this.inputElement.value);
      if (currentValue.length) {
        return this._value == this.inputElement.value;
      } else {
        return this._value == this.inputElement.placeholder;
      }
    }
    return true;
  }
  get invalid() {
    return !this.valid;
  }
  blur() {
    this.writeValue(this._value);
    this.writePlaceholder(this._value);
  }
  focus() {
    this.writeValue("");
  }
  /**
   * Write value to inputElement
   * @param value NumberInput
   */
  writeValue(value) {
    if (value !== "") {
      this.inputElement.value = pad(value, 2);
    } else {
      this.inputElement.value = "";
    }
    this.cdr.markForCheck();
  }
  /**
   * Writes value to placeholder
   * @param value NumberInput
   */
  writePlaceholder(value) {
    this.inputElement.placeholder = pad(value, 2);
    this.cdr.markForCheck();
  }
  keyDownHandler(event) {
    if (String(this.inputElement.value).length > 0) {
      let value = null;
      if (event.keyCode === UP_ARROW) {
        value = coerceNumberProperty(this._value);
        value += this._interval;
        event.stopPropagation();
      } else if (event.keyCode === DOWN_ARROW) {
        value = coerceNumberProperty(this._value);
        value -= this._interval;
        event.stopPropagation();
      }
      if (typeof value === "number") {
        this.writeValue(value);
        this.writePlaceholder(value);
        this.clampInputValue();
        this.timeValueChanged.emit(this._value);
      }
    }
  }
  /**
   * Prevent non number inputs in the inputElement with the exception of Enter/BackSpace
   * @param event KeyboardEvent
   */
  keyPressHandler(event) {
    const key = event?.key ?? null;
    if (isNaN(Number(key)) && key !== "Enter") {
      event.preventDefault();
    }
  }
  inputChangedHandler() {
    this.clampInputValue();
    this.timeValueChanged.emit(this._value);
  }
  clampInputValue() {
    if (this.inputElement?.value === "") {
      return;
    }
    const value = coerceNumberProperty(this.inputElement?.value ?? null);
    if (value || this._min === 0 && value === 0) {
      const clampedValue = Math.min(Math.max(value, this._min), this._max);
      if (clampedValue !== value) {
        this.writeValue(clampedValue);
        this.writePlaceholder(clampedValue);
      }
      this._value = clampedValue;
    }
  }
  /**
   * Remove event listeners on destruction
   */
  ngOnDestroy() {
    this.inputElement.removeEventListener("keydown", this.keyDownListener);
    this.inputElement.removeEventListener("keypress", this.keyPressListener);
    this.inputElement.removeEventListener("input", this.inputEventListener);
  }
};
_MtxTimeInput.\u0275fac = function MtxTimeInput_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MtxTimeInput)();
};
_MtxTimeInput.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _MtxTimeInput,
  selectors: [["input", 8, "mtx-time-input"]],
  hostBindings: function MtxTimeInput_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("blur", function MtxTimeInput_blur_HostBindingHandler($event) {
        return ctx.blur($event);
      })("focus", function MtxTimeInput_focus_HostBindingHandler($event) {
        return ctx.focus($event);
      });
    }
  },
  inputs: {
    timeInterval: "timeInterval",
    timeMin: "timeMin",
    timeMax: "timeMax",
    timeValue: "timeValue"
  },
  outputs: {
    timeValueChanged: "timeValueChanged"
  },
  exportAs: ["mtxTimeInput"]
});
var MtxTimeInput = _MtxTimeInput;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MtxTimeInput, [{
    type: Directive,
    args: [{
      selector: "input.mtx-time-input",
      host: {
        "(blur)": "blur($event)",
        "(focus)": "focus($event)"
      },
      exportAs: "mtxTimeInput"
    }]
  }], () => [], {
    timeInterval: [{
      type: Input,
      args: ["timeInterval"]
    }],
    timeMin: [{
      type: Input,
      args: ["timeMin"]
    }],
    timeMax: [{
      type: Input,
      args: ["timeMax"]
    }],
    timeValue: [{
      type: Input,
      args: ["timeValue"]
    }],
    timeValueChanged: [{
      type: Output
    }]
  });
})();
var _MtxTimeView = class _MtxTimeView {
  set hourInputDirective(input) {
    this._hourInputDirective = input;
    this._changeDetectorRef.detectChanges();
  }
  set minuteInputDirective(input) {
    this._minuteInputDirective = input;
    this._changeDetectorRef.detectChanges();
  }
  /** The date to display in this clock view. */
  get activeDate() {
    return this._activeDate;
  }
  set activeDate(value) {
    this._activeDate = this._adapter.clampDate(value, this.minDate, this.maxDate);
  }
  /** The currently selected date. */
  get selected() {
    return this._selected;
  }
  set selected(value) {
    this._selected = this._adapter.getValidDateOrNull(this._adapter.deserialize(value));
    if (this._selected) {
      this.activeDate = this._selected;
    }
  }
  /** The minimum selectable date. */
  get minDate() {
    return this._minDate;
  }
  set minDate(value) {
    this._minDate = this._adapter.getValidDateOrNull(this._adapter.deserialize(value));
  }
  /** The maximum selectable date. */
  get maxDate() {
    return this._maxDate;
  }
  set maxDate(value) {
    this._maxDate = this._adapter.getValidDateOrNull(this._adapter.deserialize(value));
  }
  /** Whether the clock should be started in hour or minute view. */
  get clockView() {
    return this._clockView;
  }
  set clockView(value) {
    this._clockView = value;
  }
  get isHourView() {
    return this._clockView === "hour";
  }
  get isMinuteView() {
    return this._clockView === "hour";
  }
  get hour() {
    if (!this.activeDate) {
      if (this.twelvehour) {
        return "12";
      } else {
        return "00";
      }
    }
    const hour = Number(this._adapter.getHour(this.activeDate));
    if (!this.twelvehour) {
      return this.prefixWithZero(hour);
    }
    if (hour === 0) {
      return "12";
    } else {
      return this.prefixWithZero(hour > 12 ? hour - 12 : hour);
    }
  }
  get minute() {
    if (this.activeDate) {
      return this.prefixWithZero(this._adapter.getMinute(this.activeDate));
    }
    return "00";
  }
  prefixWithZero(value) {
    if (value < 10) {
      return "0" + String(value);
    }
    return String(value);
  }
  constructor() {
    this._adapter = inject(DatetimeAdapter);
    this._changeDetectorRef = inject(ChangeDetectorRef);
    this._elementRef = inject(ElementRef);
    this._datetimepickerIntl = inject(MtxDatetimepickerIntl);
    this.selectedChange = new EventEmitter();
    this.activeDateChange = new EventEmitter();
    this._userSelection = new EventEmitter();
    this.ampmChange = new EventEmitter();
    this.clockViewChange = new EventEmitter();
    this.timeInput = false;
    this.interval = 1;
    this.actionsPortal = null;
    this.preventSameDateTimeSelection = false;
    this.autoFocus = true;
    this.twelvehour = false;
    this.AMPM = "AM";
    this._clockView = "hour";
    this.datetimepickerIntlChangesSubscription = this._datetimepickerIntl.changes.subscribe(() => {
      this._changeDetectorRef.detectChanges();
    });
  }
  ngOnChanges(changes) {
    if (changes.clockView) {
      if (changes.clockView.currentValue !== changes.clockView.previousValue && this.autoFocus) {
        this._focusInputElement();
      }
    }
  }
  ngOnDestroy() {
    if (this.datetimepickerIntlChangesSubscription) {
      this.datetimepickerIntlChangesSubscription.unsubscribe();
    }
  }
  /** Handles keydown events on the calendar body when calendar is in clock view. */
  _handleCalendarBodyKeydown(event) {
    const oldActiveDate = this._activeDate;
    switch (event.keyCode) {
      case UP_ARROW:
        this.selected = this._clockView === "hour" ? this._adapter.addCalendarHours(this._activeDate, 1) : this._adapter.addCalendarMinutes(this._activeDate, this.interval);
        break;
      case DOWN_ARROW:
        this.selected = this._clockView === "hour" ? this._adapter.addCalendarHours(this._activeDate, -1) : this._adapter.addCalendarMinutes(this._activeDate, -this.interval);
        break;
      case ENTER:
      case SPACE:
        if (this.timeInput && event.keyCode == SPACE) {
          return;
        }
        if (this.clockView == "hour") {
          this._timeSelected(this._activeDate);
          this._focusInputElement();
        } else {
          this._userSelection.emit();
        }
        return;
      default:
        return;
    }
    this.selectedChange.emit(this.selected);
    event.preventDefault();
  }
  _focusInputElement() {
    if (this.clockView === "hour") {
      this.hourInputElement?.nativeElement.focus();
    } else {
      this.minuteInputElement?.nativeElement.focus();
    }
  }
  _handleHourInputChange(value) {
    const hour = coerceNumberProperty(value);
    if (hour || hour === 0) {
      const newValue = this._adapter.createDatetime(this._adapter.getYear(this.activeDate), this._adapter.getMonth(this.activeDate), this._adapter.getDate(this.activeDate), this._updateHourForAmPm(hour), this._adapter.getMinute(this.activeDate));
      this._activeDate = this._adapter.clampDate(newValue, this.minDate, this.maxDate);
      this.activeDateChange.emit(this.activeDate);
      if (this.actionsPortal) {
        this.selectedChange.emit(this.activeDate);
      }
      if (this.hourInputDirective) {
        this.hourInputDirective.timeValue = this.hour;
      }
    }
  }
  _updateHourForAmPm(value) {
    if (!this.twelvehour) {
      return value;
    }
    if (this.AMPM === "AM") {
      if (value === 0 || value === 12) {
        return 0;
      }
      return value;
    } else {
      if (value === 0 || value === 12) {
        return 12;
      }
      return value + 12;
    }
  }
  _handleMinuteInputChange(value) {
    const minute = coerceNumberProperty(value);
    if (minute || minute === 0) {
      const newValue = this._adapter.createDatetime(this._adapter.getYear(this.activeDate), this._adapter.getMonth(this.activeDate), this._adapter.getDate(this.activeDate), this._adapter.getHour(this.activeDate), minute);
      this._activeDate = this._adapter.clampDate(newValue, this.minDate, this.maxDate);
      this.activeDateChange.emit(this.activeDate);
      if (this.actionsPortal) {
        this.selectedChange.emit(this.activeDate);
      }
      if (this._minuteInputDirective) {
        this._minuteInputDirective.timeValue = this.minute;
      }
    }
  }
  _handleFocus(clockView) {
    this.clockView = clockView;
    this.clockViewChange.emit(clockView);
  }
  _dialTimeSelected(date) {
    if (this.clockView === "hour") {
      this.clockView = "minute";
      this._activeDate = date;
    }
    if (!this._adapter.sameDatetime(date, this.selected) || !this.preventSameDateTimeSelection) {
      this.selectedChange.emit(date);
    }
  }
  _timeSelected(date) {
    if (this.timeInput) {
      if (this.clockView === "hour") {
        this.clockView = "minute";
      }
      this._activeDate = this.selected = date;
    } else {
      this._dialTimeSelected(date);
    }
    this.clockViewChange.emit(this.clockView);
  }
  _onActiveDateChange(date) {
    this.hourInputElement?.nativeElement.blur();
    this.minuteInputElement?.nativeElement.blur();
    this._activeDate = date;
    this.activeDateChange.emit(date);
  }
  _handleSelection() {
    if (this.timeInput) {
      if (this.actionsPortal && this._selected) {
        this.selectedChange.emit(this._selected);
      }
    } else {
      this._userSelection.emit();
    }
  }
  _handleOk() {
    if (this._selected) {
      this.selectedChange.emit(this._selected);
    }
    this._userSelection.emit();
  }
  _handleCancel() {
    this._userSelection.emit();
  }
  /** Focuses the active cell after the microtask queue is empty. */
  _focusActiveCell() {
    if (this.timeInput) {
      if (this.autoFocus) {
        this._focusInputElement();
      }
    } else {
      this._elementRef.nativeElement.focus();
    }
  }
};
_MtxTimeView.\u0275fac = function MtxTimeView_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MtxTimeView)();
};
_MtxTimeView.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _MtxTimeView,
  selectors: [["mtx-time-view"]],
  viewQuery: function MtxTimeView_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c1, 5, ElementRef);
      \u0275\u0275viewQuery(_c1, 5, MtxTimeInput);
      \u0275\u0275viewQuery(_c2, 5, ElementRef);
      \u0275\u0275viewQuery(_c2, 5, MtxTimeInput);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.hourInputElement = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.hourInputDirective = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.minuteInputElement = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.minuteInputDirective = _t.first);
    }
  },
  hostAttrs: ["tabindex", "0", 1, "mtx-time-view"],
  hostBindings: function MtxTimeView_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("keydown", function MtxTimeView_keydown_HostBindingHandler($event) {
        return ctx._handleCalendarBodyKeydown($event);
      });
    }
  },
  inputs: {
    dateFilter: "dateFilter",
    timeInput: [2, "timeInput", "timeInput", booleanAttribute],
    interval: "interval",
    actionsPortal: "actionsPortal",
    preventSameDateTimeSelection: [2, "preventSameDateTimeSelection", "preventSameDateTimeSelection", booleanAttribute],
    autoFocus: [2, "autoFocus", "autoFocus", booleanAttribute],
    twelvehour: [2, "twelvehour", "twelvehour", booleanAttribute],
    AMPM: "AMPM",
    activeDate: "activeDate",
    selected: "selected",
    minDate: "minDate",
    maxDate: "maxDate",
    clockView: "clockView"
  },
  outputs: {
    selectedChange: "selectedChange",
    activeDateChange: "activeDateChange",
    _userSelection: "_userSelection",
    ampmChange: "ampmChange",
    clockViewChange: "clockViewChange"
  },
  exportAs: ["mtxTime"],
  features: [\u0275\u0275NgOnChangesFeature],
  decls: 3,
  vars: 11,
  consts: [["hourInput", "mtxTimeInput"], ["minuteInput", "mtxTimeInput"], [1, "mtx-time-input-wrapper"], [3, "selectedChange", "activeDateChange", "_userSelection", "AMPM", "dateFilter", "actionButtons", "interval", "maxDate", "minDate", "selected", "startView", "twelvehour"], [1, "mtx-time-button-wrapper"], [1, "mtx-time-input-inner"], ["type", "text", "inputmode", "numeric", "maxlength", "2", 1, "mtx-time-input", 3, "timeValueChanged", "focus", "timeMin", "timeMax", "timeValue"], [1, "mtx-time-seperator"], ["type", "text", "inputmode", "numeric", "maxlength", "2", 1, "mtx-time-input", 3, "timeValueChanged", "focus", "timeMin", "timeMax", "timeValue", "timeInterval"], [1, "mtx-time-ampm"], ["mat-button", "", "type", "button", "aria-label", "AM", 1, "mtx-time-am", 3, "keydown", "click"], ["mat-button", "", "type", "button", "aria-label", "PM", 1, "mtx-time-pm", 3, "keydown", "click"], ["mat-button", "", "type", "button", 1, "mtx-time-cancel-button", 3, "click"], ["mat-button", "", "type", "button", 1, "mtx-time-ok-button", 3, "click", "disabled"]],
  template: function MtxTimeView_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, MtxTimeView_Conditional_0_Template, 9, 16, "div", 2);
      \u0275\u0275elementStart(1, "mtx-clock", 3);
      \u0275\u0275listener("selectedChange", function MtxTimeView_Template_mtx_clock_selectedChange_1_listener($event) {
        return ctx._timeSelected($event);
      })("activeDateChange", function MtxTimeView_Template_mtx_clock_activeDateChange_1_listener($event) {
        return ctx._onActiveDateChange($event);
      })("_userSelection", function MtxTimeView_Template_mtx_clock__userSelection_1_listener() {
        return ctx._handleSelection();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(2, MtxTimeView_Conditional_2_Template, 5, 3, "div", 4);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.timeInput ? 0 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("AMPM", ctx.AMPM)("dateFilter", ctx.dateFilter)("actionButtons", !!ctx.actionsPortal)("interval", ctx.interval)("maxDate", ctx.maxDate)("minDate", ctx.minDate)("selected", ctx.selected)("startView", ctx.clockView)("twelvehour", ctx.twelvehour);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.timeInput && !ctx.actionsPortal ? 2 : -1);
    }
  },
  dependencies: [MatButton, MtxClock, MtxTimeInput],
  styles: [".mtx-time-view{display:block;outline:none;-webkit-user-select:none;user-select:none}.mtx-time-input-wrapper{padding:8px 0;text-align:center}.mtx-time-input-inner{display:inline-flex;height:56px}.mtx-time-input{box-sizing:border-box;width:72px;height:100%;padding:0;font-size:36px;text-align:center;border:2px solid transparent;appearance:none;outline:none;border-radius:var(--mtx-datetimepicker-selector-container-shape, var(--mat-sys-corner-small));background-color:var(--mtx-datetimepicker-time-input-background-color, var(--mat-sys-surface-container-highest));color:var(--mtx-datetimepicker-time-input-text-color, var(--mat-sys-on-surface))}.mtx-time-input.mtx-time-input-active{background-color:var(--mtx-datetimepicker-time-input-active-state-background-color, var(--mat-sys-primary-container));color:var(--mtx-datetimepicker-time-input-active-state-text-color, var(--mat-sys-on-primary-container))}.mtx-time-input.mtx-time-input-active:focus{border-color:var(--mtx-datetimepicker-time-input-focus-state-outline-color, var(--mat-sys-primary));background-color:var(--mtx-datetimepicker-time-input-focus-state-background-color, var(--mat-sys-primary-container))}.mtx-time-input.mtx-time-input-active:focus::placeholder{color:var(--mtx-datetimepicker-time-input-focus-state-placeholder-text-color, var(--mat-sys-on-primary-container))}.mtx-time-input.mtx-time-input-warning{border-color:var(--mtx-datetimepicker-time-input-warn-state-outline-color, var(--mat-sys-error))}.mtx-time-seperator{display:inline-flex;justify-content:center;align-items:center;width:24px;font-size:36px}.mtx-time-ampm{display:inline-flex;flex-direction:column;margin-left:12px}[dir=rtl] .mtx-time-ampm{margin-left:auto;margin-right:12px}.mtx-time-ampm .mtx-time-am,.mtx-time-ampm .mtx-time-pm{--mat-button-text-label-text-weight: 400;--mat-button-text-label-text-color: var(--mtx-datetimepicker-time-ampm-text-color, var(--mat-sys-on-surface));--mat-button-text-container-shape: var(--mtx-datetimepicker-selector-container-shape, var(--mat-sys-corner-small));flex:1;width:40px;min-width:auto;border-width:1px;border-style:solid;border-color:var(--mtx-datetimepicker-time-ampm-outline-color, var(--mat-sys-outline))}.mtx-time-ampm .mtx-time-am.mtx-time-ampm-active,.mtx-time-ampm .mtx-time-pm.mtx-time-ampm-active{--mat-button-text-label-text-weight: 500;--mat-button-text-label-text-color: var(--mtx-datetimepicker-time-ampm-selected-state-text-color, var(--mat-sys-on-tertiary-container));background-color:var(--mtx-datetimepicker-time-ampm-selected-state-background-color, var(--mat-sys-tertiary-container))}.mtx-time-ampm .mtx-time-am .mat-mdc-button-touch-target,.mtx-time-ampm .mtx-time-pm .mat-mdc-button-touch-target{height:100%}.mtx-time-ampm .mtx-time-am{border-bottom-left-radius:0;border-bottom-right-radius:0}.mtx-time-ampm .mtx-time-pm{border-top-left-radius:0;border-top-right-radius:0;border-top-width:0}.mtx-time-button-wrapper{display:flex;justify-content:flex-end;padding-top:8px}.mtx-time-button-wrapper .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mtx-time-button-wrapper .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}\n"],
  encapsulation: 2,
  changeDetection: 0
});
var MtxTimeView = _MtxTimeView;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MtxTimeView, [{
    type: Component,
    args: [{
      selector: "mtx-time-view",
      exportAs: "mtxTime",
      host: {
        "class": "mtx-time-view",
        "tabindex": "0",
        "(keydown)": "_handleCalendarBodyKeydown($event)"
      },
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      imports: [MatButton, MtxClock, MtxTimeInput],
      template: `@if (timeInput) {
  <div class="mtx-time-input-wrapper">
    <div class="mtx-time-input-inner">
      <input class="mtx-time-input"
        [class.mtx-time-input-active]="clockView === 'hour'"
        [class.mtx-time-input-warning]="!hourInput.valid"
        #hourInput="mtxTimeInput"
        type="text"
        inputmode="numeric"
        maxlength="2"
        [timeMin]="twelvehour ? 1 : 0"
        [timeMax]="twelvehour ? 12 : 23"
        [timeValue]="hour"
        (timeValueChanged)="_handleHourInputChange($event)"
        (focus)="_handleFocus('hour')" />

      <div class="mtx-time-seperator">:</div>

      <input class="mtx-time-input"
        [class.mtx-time-input-active]="clockView === 'minute'"
        [class.mtx-time-input-warning]="!minuteInput.valid"
        #minuteInput="mtxTimeInput"
        type="text"
        inputmode="numeric"
        maxlength="2"
        [timeMin]="0"
        [timeMax]="59"
        [timeValue]="minute"
        (timeValueChanged)="_handleMinuteInputChange($event)"
        [timeInterval]="interval"
        (focus)="_handleFocus('minute')" />

      @if (twelvehour) {
        <div class="mtx-time-ampm">
          <button mat-button type="button" class="mtx-time-am"
            [class.mtx-time-ampm-active]="AMPM === 'AM'" aria-label="AM"
            (keydown)="$event.stopPropagation()"
            (click)="ampmChange.emit('AM')">AM</button>
          <button mat-button type="button" class="mtx-time-pm"
            [class.mtx-time-ampm-active]="AMPM === 'PM'" aria-label="PM"
            (keydown)="$event.stopPropagation()"
            (click)="ampmChange.emit('PM')">PM</button>
        </div>
      }
    </div>
  </div>
}

<mtx-clock
  (selectedChange)="_timeSelected($event)"
  (activeDateChange)="_onActiveDateChange($event)"
  (_userSelection)="_handleSelection()"
  [AMPM]="AMPM"
  [dateFilter]="dateFilter"
  [actionButtons]="!!actionsPortal"
  [interval]="interval"
  [maxDate]="maxDate"
  [minDate]="minDate"
  [selected]="selected"
  [startView]="clockView"
  [twelvehour]="twelvehour">
</mtx-clock>

@if (timeInput && !actionsPortal) {
  <div class="mtx-time-button-wrapper">
    <button class="mtx-time-cancel-button" mat-button type="button" (click)="_handleCancel()">
      {{ _datetimepickerIntl.cancelLabel }}
    </button>
    <button class="mtx-time-ok-button" mat-button type="button" (click)="_handleOk()"
      [disabled]="_minuteInputDirective?.invalid || _hourInputDirective?.invalid">
      {{ _datetimepickerIntl.okLabel }}
    </button>
  </div>
}
`,
      styles: [".mtx-time-view{display:block;outline:none;-webkit-user-select:none;user-select:none}.mtx-time-input-wrapper{padding:8px 0;text-align:center}.mtx-time-input-inner{display:inline-flex;height:56px}.mtx-time-input{box-sizing:border-box;width:72px;height:100%;padding:0;font-size:36px;text-align:center;border:2px solid transparent;appearance:none;outline:none;border-radius:var(--mtx-datetimepicker-selector-container-shape, var(--mat-sys-corner-small));background-color:var(--mtx-datetimepicker-time-input-background-color, var(--mat-sys-surface-container-highest));color:var(--mtx-datetimepicker-time-input-text-color, var(--mat-sys-on-surface))}.mtx-time-input.mtx-time-input-active{background-color:var(--mtx-datetimepicker-time-input-active-state-background-color, var(--mat-sys-primary-container));color:var(--mtx-datetimepicker-time-input-active-state-text-color, var(--mat-sys-on-primary-container))}.mtx-time-input.mtx-time-input-active:focus{border-color:var(--mtx-datetimepicker-time-input-focus-state-outline-color, var(--mat-sys-primary));background-color:var(--mtx-datetimepicker-time-input-focus-state-background-color, var(--mat-sys-primary-container))}.mtx-time-input.mtx-time-input-active:focus::placeholder{color:var(--mtx-datetimepicker-time-input-focus-state-placeholder-text-color, var(--mat-sys-on-primary-container))}.mtx-time-input.mtx-time-input-warning{border-color:var(--mtx-datetimepicker-time-input-warn-state-outline-color, var(--mat-sys-error))}.mtx-time-seperator{display:inline-flex;justify-content:center;align-items:center;width:24px;font-size:36px}.mtx-time-ampm{display:inline-flex;flex-direction:column;margin-left:12px}[dir=rtl] .mtx-time-ampm{margin-left:auto;margin-right:12px}.mtx-time-ampm .mtx-time-am,.mtx-time-ampm .mtx-time-pm{--mat-button-text-label-text-weight: 400;--mat-button-text-label-text-color: var(--mtx-datetimepicker-time-ampm-text-color, var(--mat-sys-on-surface));--mat-button-text-container-shape: var(--mtx-datetimepicker-selector-container-shape, var(--mat-sys-corner-small));flex:1;width:40px;min-width:auto;border-width:1px;border-style:solid;border-color:var(--mtx-datetimepicker-time-ampm-outline-color, var(--mat-sys-outline))}.mtx-time-ampm .mtx-time-am.mtx-time-ampm-active,.mtx-time-ampm .mtx-time-pm.mtx-time-ampm-active{--mat-button-text-label-text-weight: 500;--mat-button-text-label-text-color: var(--mtx-datetimepicker-time-ampm-selected-state-text-color, var(--mat-sys-on-tertiary-container));background-color:var(--mtx-datetimepicker-time-ampm-selected-state-background-color, var(--mat-sys-tertiary-container))}.mtx-time-ampm .mtx-time-am .mat-mdc-button-touch-target,.mtx-time-ampm .mtx-time-pm .mat-mdc-button-touch-target{height:100%}.mtx-time-ampm .mtx-time-am{border-bottom-left-radius:0;border-bottom-right-radius:0}.mtx-time-ampm .mtx-time-pm{border-top-left-radius:0;border-top-right-radius:0;border-top-width:0}.mtx-time-button-wrapper{display:flex;justify-content:flex-end;padding-top:8px}.mtx-time-button-wrapper .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mtx-time-button-wrapper .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}\n"]
    }]
  }], () => [], {
    selectedChange: [{
      type: Output
    }],
    activeDateChange: [{
      type: Output
    }],
    _userSelection: [{
      type: Output
    }],
    ampmChange: [{
      type: Output
    }],
    clockViewChange: [{
      type: Output
    }],
    dateFilter: [{
      type: Input
    }],
    timeInput: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    interval: [{
      type: Input
    }],
    actionsPortal: [{
      type: Input
    }],
    preventSameDateTimeSelection: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    autoFocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    hourInputElement: [{
      type: ViewChild,
      args: ["hourInput", {
        read: ElementRef
      }]
    }],
    hourInputDirective: [{
      type: ViewChild,
      args: ["hourInput", {
        read: MtxTimeInput
      }]
    }],
    minuteInputElement: [{
      type: ViewChild,
      args: ["minuteInput", {
        read: ElementRef
      }]
    }],
    minuteInputDirective: [{
      type: ViewChild,
      args: ["minuteInput", {
        read: MtxTimeInput
      }]
    }],
    twelvehour: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    AMPM: [{
      type: Input
    }],
    activeDate: [{
      type: Input
    }],
    selected: [{
      type: Input
    }],
    minDate: [{
      type: Input
    }],
    maxDate: [{
      type: Input
    }],
    clockView: [{
      type: Input
    }]
  });
})();
var _MtxYearView = class _MtxYearView {
  constructor() {
    this._adapter = inject(DatetimeAdapter, {
      optional: true
    });
    this._dir = inject(Directionality, {
      optional: true
    });
    this._dateFormats = inject(MTX_DATETIME_FORMATS, {
      optional: true
    });
    this.type = "date";
    this.selectedChange = new EventEmitter();
    this._userSelection = new EventEmitter();
    this.activeDateChange = new EventEmitter();
    this._selected = null;
    if (!this._adapter) {
      throw createMissingDateImplError("DatetimeAdapter");
    }
    if (!this._dateFormats) {
      throw createMissingDateImplError("MTX_DATETIME_FORMATS");
    }
    this._activeDate = this._adapter.today();
  }
  /** The date to display in this year view (everything other than the year is ignored). */
  get activeDate() {
    return this._activeDate;
  }
  set activeDate(value) {
    const oldActiveDate = this._activeDate;
    this._activeDate = value || this._adapter.today();
    if (oldActiveDate && this._activeDate && !this._adapter.sameYear(oldActiveDate, this._activeDate)) {
      this._init();
    }
  }
  /** The currently selected date. */
  get selected() {
    return this._selected;
  }
  set selected(value) {
    this._selected = value;
    this._selectedMonth = this._getMonthInCurrentYear(this.selected);
  }
  ngAfterContentInit() {
    this._init();
  }
  /** Handles when a new month is selected. */
  _monthSelected(month) {
    const normalizedDate = this._adapter.createDatetime(this._adapter.getYear(this.activeDate), month, 1, 0, 0);
    const dateObject = this._adapter.createDatetime(this._adapter.getYear(this.activeDate), month, Math.min(this._adapter.getDate(this.activeDate), this._adapter.getNumDaysInMonth(normalizedDate)), this._adapter.getHour(this.activeDate), this._adapter.getMinute(this.activeDate));
    this.selectedChange.emit(dateObject);
    this._activeDate = dateObject;
    if (this.type === "month") {
      this._userSelection.emit();
    }
  }
  /** Initializes this month view. */
  _init() {
    this._selectedMonth = this._getMonthInCurrentYear(this.selected);
    this._todayMonth = this._getMonthInCurrentYear(this._adapter.today());
    this._yearLabel = this._adapter.getYearName(this.activeDate);
    const monthNames = this._adapter.getMonthNames("short");
    this._months = [[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11]].map((row) => row.map((month) => this._createCellForMonth(month, monthNames[month])));
  }
  /**
   * Gets the month in this year that the given Date falls on.
   * Returns null if the given Date is in another year.
   */
  _getMonthInCurrentYear(date) {
    return date && this._adapter.sameYear(date, this.activeDate) ? this._adapter.getMonth(date) : null;
  }
  /** Creates an MdCalendarCell for the given month. */
  _createCellForMonth(month, monthName) {
    const ariaLabel = this._adapter.format(this._adapter.createDatetime(this._adapter.getYear(this.activeDate), month, 1, this._adapter.getHour(this.activeDate), this._adapter.getMinute(this.activeDate)), this._dateFormats.display.monthYearA11yLabel);
    return new MtxCalendarCell(month, monthName.toLocaleUpperCase(), ariaLabel, this._isMonthEnabled(month));
  }
  /** Whether the given month is enabled. */
  _isMonthEnabled(month) {
    if (!this.dateFilter) {
      return true;
    }
    const firstOfMonth = this._adapter.createDatetime(this._adapter.getYear(this.activeDate), month, 1, this._adapter.getHour(this.activeDate), this._adapter.getMinute(this.activeDate));
    for (let date = firstOfMonth; this._adapter.getMonth(date) === month; date = this._adapter.addCalendarDays(date, 1)) {
      if (this.dateFilter(date)) {
        return true;
      }
    }
    return false;
  }
  /** Handles keydown events on the calendar body when calendar is in year view. */
  _handleCalendarBodyKeydown(event) {
    const oldActiveDate = this._activeDate;
    const isRtl = this._isRtl();
    switch (event.keyCode) {
      case LEFT_ARROW:
        this.activeDate = this._adapter.addCalendarMonths(this._activeDate, isRtl ? 1 : -1);
        break;
      case RIGHT_ARROW:
        this.activeDate = this._adapter.addCalendarMonths(this._activeDate, isRtl ? -1 : 1);
        break;
      case UP_ARROW:
        this.activeDate = this._adapter.addCalendarMonths(this._activeDate, -4);
        break;
      case DOWN_ARROW:
        this.activeDate = this._adapter.addCalendarMonths(this._activeDate, 4);
        break;
      case HOME:
        this.activeDate = this._adapter.addCalendarMonths(this._activeDate, -this._adapter.getMonth(this._activeDate));
        break;
      case END:
        this.activeDate = this._adapter.addCalendarMonths(this._activeDate, 11 - this._adapter.getMonth(this._activeDate));
        break;
      case PAGE_UP:
        this.activeDate = this._adapter.addCalendarYears(this._activeDate, event.altKey ? -10 : -1);
        break;
      case PAGE_DOWN:
        this.activeDate = this._adapter.addCalendarYears(this._activeDate, event.altKey ? 10 : 1);
        break;
      case ENTER:
      case SPACE:
        this._monthSelected(this._adapter.getMonth(this._activeDate));
        break;
      default:
        return;
    }
    if (this._adapter.compareDate(oldActiveDate, this.activeDate)) {
      this.activeDateChange.emit(this.activeDate);
    }
    this._focusActiveCell();
    event.preventDefault();
  }
  /** Focuses the active cell after the microtask queue is empty. */
  _focusActiveCell() {
    this._mtxCalendarBody._focusActiveCell();
  }
  /** Determines whether the user has the RTL layout direction. */
  _isRtl() {
    return this._dir && this._dir.value === "rtl";
  }
};
_MtxYearView.\u0275fac = function MtxYearView_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MtxYearView)();
};
_MtxYearView.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _MtxYearView,
  selectors: [["mtx-year-view"]],
  viewQuery: function MtxYearView_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(MtxCalendarBody, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._mtxCalendarBody = _t.first);
    }
  },
  inputs: {
    type: "type",
    dateFilter: "dateFilter",
    activeDate: "activeDate",
    selected: "selected"
  },
  outputs: {
    selectedChange: "selectedChange",
    _userSelection: "_userSelection",
    activeDateChange: "activeDateChange"
  },
  exportAs: ["mtxYearView"],
  decls: 3,
  vars: 9,
  consts: [["role", "grid", 1, "mtx-calendar-table"], [1, "mtx-calendar-table-header"], ["mtx-calendar-body", "", 3, "selectedValueChange", "keydown", "label", "rows", "todayValue", "labelMinRequiredCells", "numCols", "cellAspectRatio", "activeCell", "selectedValue", "allowDisabledSelection"]],
  template: function MtxYearView_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "table", 0);
      \u0275\u0275element(1, "thead", 1);
      \u0275\u0275elementStart(2, "tbody", 2);
      \u0275\u0275listener("selectedValueChange", function MtxYearView_Template_tbody_selectedValueChange_2_listener($event) {
        return ctx._monthSelected($event);
      })("keydown", function MtxYearView_Template_tbody_keydown_2_listener($event) {
        return ctx._handleCalendarBodyKeydown($event);
      });
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("label", ctx._yearLabel)("rows", ctx._months)("todayValue", ctx._todayMonth)("labelMinRequiredCells", 2)("numCols", 4)("cellAspectRatio", 4 / 7)("activeCell", ctx._adapter.getMonth(ctx.activeDate))("selectedValue", ctx._selectedMonth)("allowDisabledSelection", true);
    }
  },
  dependencies: [MtxCalendarBody],
  encapsulation: 2,
  changeDetection: 0
});
var MtxYearView = _MtxYearView;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MtxYearView, [{
    type: Component,
    args: [{
      selector: "mtx-year-view",
      exportAs: "mtxYearView",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      imports: [MtxCalendarBody],
      template: '<!-- eslint-disable @angular-eslint/template/interactive-supports-focus -->\n<table class="mtx-calendar-table" role="grid">\n  <thead class="mtx-calendar-table-header"></thead>\n  <tbody mtx-calendar-body\n         [label]="_yearLabel"\n         [rows]="_months"\n         [todayValue]="_todayMonth!"\n         [labelMinRequiredCells]="2"\n         [numCols]="4"\n         [cellAspectRatio]="4 / 7"\n         [activeCell]="_adapter.getMonth(activeDate)"\n         [selectedValue]="_selectedMonth!"\n         (selectedValueChange)="_monthSelected($event)"\n         [allowDisabledSelection]="true"\n         (keydown)="_handleCalendarBodyKeydown($event)"></tbody>\n</table>\n'
    }]
  }], () => [], {
    type: [{
      type: Input
    }],
    dateFilter: [{
      type: Input
    }],
    selectedChange: [{
      type: Output
    }],
    _userSelection: [{
      type: Output
    }],
    activeDateChange: [{
      type: Output
    }],
    _mtxCalendarBody: [{
      type: ViewChild,
      args: [MtxCalendarBody]
    }],
    activeDate: [{
      type: Input
    }],
    selected: [{
      type: Input
    }]
  });
})();
var _MtxCalendar = class _MtxCalendar {
  constructor() {
    this._intl = inject(MtxDatetimepickerIntl);
    this._changeDetectorRef = inject(ChangeDetectorRef);
    this._ngZone = inject(NgZone);
    this._adapter = inject(DatetimeAdapter, {
      optional: true
    });
    this._dateFormats = inject(MTX_DATETIME_FORMATS, {
      optional: true
    });
    this.multiYearSelector = false;
    this.twelvehour = false;
    this.showWeekNumbers = false;
    this.startView = "month";
    this.timeInterval = 1;
    this.preventSameDateTimeSelection = false;
    this.actionsPortal = null;
    this.selectedChange = new EventEmitter();
    this.viewChanged = new EventEmitter();
    this._userSelection = new EventEmitter();
    this._clockView = "hour";
    this._moveFocusOnNextTick = false;
    this._type = "date";
    this.timeInput = false;
    this.timeInputAutoFocus = true;
    this._dateFilterForViews = (date) => {
      return !!date && (!this.dateFilter || this.dateFilter(date, MtxDatetimepickerFilterType.DATE)) && (!this.minDate || this._adapter.compareDate(date, this.minDate) >= 0) && (!this.maxDate || this._adapter.compareDate(date, this.maxDate) <= 0);
    };
    const _intl = this._intl;
    if (!this._adapter) {
      throw createMissingDateImplError("DatetimeAdapter");
    }
    if (!this._dateFormats) {
      throw createMissingDateImplError("MTX_DATETIME_FORMATS");
    }
    this._intlChanges = _intl.changes.subscribe(() => {
      this._changeDetectorRef.markForCheck();
    });
  }
  /** The display type of datetimepicker. */
  get type() {
    return this._type;
  }
  set type(value) {
    this._type = value || "date";
    if (this.type === "year") {
      this.multiYearSelector = true;
    }
  }
  /** A date representing the period (month or year) to start the calendar in. */
  get startAt() {
    return this._startAt;
  }
  set startAt(value) {
    this._startAt = this._adapter.getValidDateOrNull(value);
  }
  /** The currently selected date. */
  get selected() {
    return this._selected;
  }
  set selected(value) {
    this._selected = this._adapter.getValidDateOrNull(value);
  }
  /** The minimum selectable date. */
  get minDate() {
    return this._minDate;
  }
  set minDate(value) {
    this._minDate = this._adapter.getValidDateOrNull(value);
  }
  /** The maximum selectable date. */
  get maxDate() {
    return this._maxDate;
  }
  set maxDate(value) {
    this._maxDate = this._adapter.getValidDateOrNull(value);
  }
  /**
   * The current active date. This determines which time period is shown and which date is
   * highlighted when using keyboard navigation.
   */
  get _activeDate() {
    return this._clampedActiveDate;
  }
  set _activeDate(value) {
    this._clampedActiveDate = this._adapter.clampDate(value, this.minDate, this.maxDate);
    this._selectAMPM(this._clampedActiveDate);
    this._changeDetectorRef.markForCheck();
  }
  /** Whether the calendar is in month view. */
  get currentView() {
    return this._currentView;
  }
  set currentView(value) {
    const viewChangedResult = this._currentView !== value ? value : null;
    this._currentView = value;
    this._moveFocusOnNextTick = true;
    this._changeDetectorRef.markForCheck();
    if (viewChangedResult) {
      this.viewChanged.emit(viewChangedResult);
    }
  }
  get _yearPeriodText() {
    if (this.currentView === "multi-year") {
      const activeYear = this._adapter.getYear(this._activeDate);
      const minYearOfPage = activeYear - getActiveOffset(this._adapter, this._activeDate, this.minDate, this.maxDate);
      const maxYearOfPage = minYearOfPage + yearsPerPage - 1;
      const minYearName = this._adapter.getYearName(this._adapter.createDate(minYearOfPage, 0, 1));
      const maxYearName = this._adapter.getYearName(this._adapter.createDate(maxYearOfPage, 0, 1));
      return this._intl.formatYearRange(minYearName, maxYearName);
    }
    return this.currentView === "month" ? this._adapter.getMonthNames("long")[this._adapter.getMonth(this._activeDate)] : this._adapter.getYearName(this._activeDate);
  }
  get _yearButtonText() {
    return this._adapter.getYearName(this._activeDate);
  }
  get _yearButtonLabel() {
    return this.multiYearSelector ? this._intl.switchToMultiYearViewLabel : this._intl.switchToYearViewLabel;
  }
  get _dateButtonText() {
    switch (this.type) {
      case "month":
        return this._adapter.getMonthNames("long")[this._adapter.getMonth(this._activeDate)];
      default:
        return this._adapter.format(this._activeDate, this._dateFormats.display.popupHeaderDateLabel);
    }
  }
  get _dateButtonLabel() {
    return this._intl.switchToMonthViewLabel;
  }
  get _hoursButtonText() {
    let hour = this._adapter.getHour(this._activeDate);
    if (this.twelvehour) {
      if (hour === 0) {
        hour = 24;
      }
      hour = hour > 12 ? hour - 12 : hour;
    }
    return this._2digit(hour);
  }
  get _hourButtonLabel() {
    return this._intl.switchToClockHourViewLabel;
  }
  get _minutesButtonText() {
    return this._2digit(this._adapter.getMinute(this._activeDate));
  }
  get _minuteButtonLabel() {
    return this._intl.switchToClockMinuteViewLabel;
  }
  get _prevButtonLabel() {
    switch (this._currentView) {
      case "month":
        return this._intl.prevMonthLabel;
      case "year":
        return this._intl.prevYearLabel;
      case "multi-year":
        return this._intl.prevMultiYearLabel;
      default:
        return "";
    }
  }
  get _nextButtonLabel() {
    switch (this._currentView) {
      case "month":
        return this._intl.nextMonthLabel;
      case "year":
        return this._intl.nextYearLabel;
      case "multi-year":
        return this._intl.nextMultiYearLabel;
      default:
        return "";
    }
  }
  _userSelected() {
    this._userSelection.emit();
  }
  ngAfterContentInit() {
    if (this.headerComponent) {
      this._calendarHeaderPortal = new ComponentPortal(this.headerComponent);
    }
    this._activeDate = this.startAt || this._adapter.today();
    this._selectAMPM(this._activeDate);
    if (this.type === "year") {
      this._currentView = "multi-year";
    } else if (this.type === "month") {
      this._currentView = "year";
    } else if (this.type === "time") {
      this._currentView = "clock";
    } else {
      this._currentView = this.startView;
    }
  }
  ngAfterViewChecked() {
    if (this._moveFocusOnNextTick) {
      this._moveFocusOnNextTick = false;
      this.focusActiveCell();
    }
  }
  ngOnDestroy() {
    this._intlChanges.unsubscribe();
  }
  /** Handles date selection in the month view. */
  _dateSelected(date) {
    if (this.type === "date") {
      this._onActiveDateChange(date);
      if (!this._adapter.sameDate(date, this.selected) || !this.preventSameDateTimeSelection) {
        this.selectedChange.emit(date);
      }
    } else {
      this.selectedChange.emit(date);
      this._activeDate = date;
      this.currentView = "clock";
    }
  }
  /** Handles month selection in the year view. */
  _monthSelected(month) {
    if (this.type === "month") {
      if (!this._adapter.sameMonthAndYear(month, this.selected) || !this.preventSameDateTimeSelection) {
        this.selectedChange.emit(this._adapter.getFirstDateOfMonth(month));
      }
    } else {
      this._activeDate = month;
      this.currentView = "month";
      this._clockView = "hour";
    }
  }
  /** Handles year selection in the multi year view. */
  _yearSelected(year) {
    if (this.type === "year") {
      if (!this._adapter.sameYear(year, this.selected) || !this.preventSameDateTimeSelection) {
        const normalizedDate = this._adapter.createDatetime(this._adapter.getYear(year), 0, 1, 0, 0);
        this.selectedChange.emit(normalizedDate);
      }
    } else {
      this._activeDate = year;
      this.currentView = "year";
    }
  }
  _timeSelected(date) {
    this._activeDate = date;
    if (!this._adapter.sameDatetime(date, this.selected) || !this.preventSameDateTimeSelection) {
      this.selectedChange.emit(date);
    }
  }
  _onActiveDateChange(date) {
    this._activeDate = date;
  }
  _selectAMPM(date) {
    const hour = this._adapter.getHour(date);
    if (hour > 11) {
      this._AMPM = "PM";
    } else {
      this._AMPM = "AM";
    }
    if (this.actionsPortal && this.currentView === "clock" && this._selected && !this._adapter.sameHour(date, this._selected)) {
      this.selectedChange.emit(date);
    }
  }
  _ampmClicked(source) {
    this._currentView = "clock";
    if (source === this._AMPM) {
      return;
    }
    const currentHour = this._adapter.getHour(this._activeDate);
    let newHourValue;
    if (source === "AM") {
      newHourValue = currentHour >= 12 ? this._adapter.getHour(this._activeDate) - 12 : 12;
    } else {
      newHourValue = (currentHour + 12) % 24;
    }
    const newActiveDate = this._adapter.clampDate(this._adapter.createDatetime(this._adapter.getYear(this._activeDate), this._adapter.getMonth(this._activeDate), this._adapter.getDate(this._activeDate), newHourValue, this._adapter.getMinute(this._activeDate)), this.minDate, this.maxDate);
    if (this._adapter.getHour(newActiveDate) === newHourValue) {
      this._activeDate = newActiveDate;
      this._AMPM = source;
    }
  }
  _yearClicked() {
    if (this.type === "year" || this.multiYearSelector) {
      this.currentView = "multi-year";
      return;
    }
    this.currentView = "year";
  }
  _dateClicked() {
    if (this.type !== "month") {
      this.currentView = "month";
    }
  }
  _hoursClicked() {
    this.currentView = "clock";
    this._clockView = "hour";
  }
  _minutesClicked() {
    this.currentView = "clock";
    this._clockView = "minute";
  }
  /** Handles user clicks on the previous button. */
  _previousClicked() {
    this._activeDate = this.currentView === "month" ? this._adapter.addCalendarMonths(this._activeDate, -1) : this._adapter.addCalendarYears(this._activeDate, this.currentView === "year" ? -1 : -yearsPerPage);
  }
  /** Handles user clicks on the next button. */
  _nextClicked() {
    this._activeDate = this.currentView === "month" ? this._adapter.addCalendarMonths(this._activeDate, 1) : this._adapter.addCalendarYears(this._activeDate, this.currentView === "year" ? 1 : yearsPerPage);
  }
  /** Whether the previous period button is enabled. */
  _previousEnabled() {
    if (!this.minDate) {
      return true;
    }
    return !this.minDate || !this._isSameView(this._activeDate, this.minDate);
  }
  /** Whether the next period button is enabled. */
  _nextEnabled() {
    return !this.maxDate || !this._isSameView(this._activeDate, this.maxDate);
  }
  /** Whether the two dates represent the same view in the current view mode (month or year). */
  _isSameView(date1, date2) {
    if (this.currentView === "month") {
      return this._adapter.getYear(date1) === this._adapter.getYear(date2) && this._adapter.getMonth(date1) === this._adapter.getMonth(date2);
    }
    if (this.currentView === "year") {
      return this._adapter.getYear(date1) === this._adapter.getYear(date2);
    }
    return isSameMultiYearView(this._adapter, date1, date2, this.minDate, this.maxDate);
  }
  _2digit(n) {
    return ("00" + n).slice(-2);
  }
  /** Returns the component instance that corresponds to the current calendar view. */
  _getCurrentViewComponent() {
    return this.monthView || this.yearView || this.multiYearView || this.timeView;
  }
  /** Focuses the active date. */
  focusActiveCell() {
    this._getCurrentViewComponent()._focusActiveCell(false);
  }
};
_MtxCalendar.\u0275fac = function MtxCalendar_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MtxCalendar)();
};
_MtxCalendar.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _MtxCalendar,
  selectors: [["mtx-calendar"]],
  viewQuery: function MtxCalendar_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(MtxMonthView, 5);
      \u0275\u0275viewQuery(MtxYearView, 5);
      \u0275\u0275viewQuery(MtxMultiYearView, 5);
      \u0275\u0275viewQuery(MtxTimeView, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.monthView = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.yearView = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.multiYearView = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.timeView = _t.first);
    }
  },
  hostAttrs: [1, "mtx-calendar"],
  hostVars: 2,
  hostBindings: function MtxCalendar_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("mtx-calendar-with-time-input", ctx.timeInput);
    }
  },
  inputs: {
    multiYearSelector: [2, "multiYearSelector", "multiYearSelector", booleanAttribute],
    twelvehour: [2, "twelvehour", "twelvehour", booleanAttribute],
    showWeekNumbers: [2, "showWeekNumbers", "showWeekNumbers", booleanAttribute],
    startView: "startView",
    timeInterval: "timeInterval",
    dateFilter: "dateFilter",
    preventSameDateTimeSelection: [2, "preventSameDateTimeSelection", "preventSameDateTimeSelection", booleanAttribute],
    headerComponent: "headerComponent",
    actionsPortal: "actionsPortal",
    type: "type",
    startAt: "startAt",
    timeInput: [2, "timeInput", "timeInput", booleanAttribute],
    timeInputAutoFocus: [2, "timeInputAutoFocus", "timeInputAutoFocus", booleanAttribute],
    selected: "selected",
    minDate: "minDate",
    maxDate: "maxDate"
  },
  outputs: {
    selectedChange: "selectedChange",
    viewChanged: "viewChanged",
    _userSelection: "_userSelection"
  },
  exportAs: ["mtxCalendar"],
  decls: 10,
  vars: 3,
  consts: [[1, "mtx-calendar-header"], [3, "cdkPortalOutlet"], [1, "mtx-calendar-content"], [1, "mtx-calendar-controls"], ["cdkMonitorSubtreeFocus", "", "tabindex", "-1", 1, "mtx-calendar-view"], [3, "activeDate", "dateFilter", "selected", "showWeekNumbers", "type"], [3, "activeDate", "dateFilter", "selected", "type"], [3, "activeDate", "dateFilter", "maxDate", "minDate", "selected", "type"], [3, "AMPM", "clockView", "twelvehour", "dateFilter", "interval", "maxDate", "minDate", "selected", "actionsPortal", "autoFocus", "timeInput", "preventSameDateTimeSelection"], ["mat-button", "", "type", "button", 1, "mtx-calendar-header-year", 3, "active"], [1, "mtx-calendar-header-date-time"], ["mat-button", "", "type", "button", 1, "mtx-calendar-header-year", 3, "click"], ["matButtonIcon", "", "iconPositionEnd", "", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "currentColor", 1, "mtx-calendar-header-year-dropdown"], ["d", "M7,10L12,15L17,10H7Z"], ["mat-button", "", "type", "button", 1, "mtx-calendar-header-date", 3, "active", "not-clickable"], [1, "mtx-calendar-header-time", 3, "active"], ["mat-button", "", "type", "button", 1, "mtx-calendar-header-date", 3, "click"], [1, "mtx-calendar-header-time"], [1, "mtx-calendar-header-hour-minute-container"], ["mat-button", "", "type", "button", 1, "mtx-calendar-header-hours", 3, "click"], [1, "mtx-calendar-header-hour-minute-separator"], ["mat-button", "", "type", "button", 1, "mtx-calendar-header-minutes", 3, "click"], [1, "mtx-calendar-header-ampm-container"], ["mat-button", "", "type", "button", "aria-label", "AM", 1, "mtx-calendar-header-ampm", 3, "click"], ["mat-button", "", "type", "button", "aria-label", "PM", 1, "mtx-calendar-header-ampm", 3, "click"], ["mat-icon-button", "", "type", "button", 1, "mtx-calendar-previous-button", 3, "click"], ["width", "24", "height", "24", "viewBox", "0 0 24 24"], ["d", "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"], [1, "mtx-calendar-period-button"], ["mat-icon-button", "", "type", "button", 1, "mtx-calendar-next-button", 3, "click"], ["d", "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"], [3, "_userSelection", "selectedChange", "activeDateChange", "activeDate", "dateFilter", "selected", "showWeekNumbers", "type"], [3, "_userSelection", "selectedChange", "activeDateChange", "activeDate", "dateFilter", "selected", "type"], [3, "_userSelection", "selectedChange", "activeDateChange", "activeDate", "dateFilter", "maxDate", "minDate", "selected", "type"], [3, "_userSelection", "activeDateChange", "selectedChange", "ampmChange", "clockViewChange", "AMPM", "clockView", "twelvehour", "dateFilter", "interval", "maxDate", "minDate", "selected", "actionsPortal", "autoFocus", "timeInput", "preventSameDateTimeSelection"]],
  template: function MtxCalendar_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275conditionalCreate(1, MtxCalendar_Conditional_1_Template, 1, 1, null, 1)(2, MtxCalendar_Conditional_2_Template, 2, 2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 2);
      \u0275\u0275conditionalCreate(4, MtxCalendar_Conditional_4_Template, 10, 9, "div", 3);
      \u0275\u0275elementStart(5, "div", 4);
      \u0275\u0275conditionalCreate(6, MtxCalendar_Case_6_Template, 1, 5, "mtx-month-view", 5)(7, MtxCalendar_Case_7_Template, 1, 4, "mtx-year-view", 6)(8, MtxCalendar_Case_8_Template, 1, 6, "mtx-multi-year-view", 7)(9, MtxCalendar_Case_9_Template, 1, 12, "mtx-time-view", 8);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      let tmp_2_0;
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx._calendarHeaderPortal ? 1 : 2);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.currentView === "month" || ctx.currentView === "year" || ctx.currentView === "multi-year" ? 4 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional((tmp_2_0 = ctx.currentView) === "month" ? 6 : tmp_2_0 === "year" ? 7 : tmp_2_0 === "multi-year" ? 8 : 9);
    }
  },
  dependencies: [CdkPortalOutlet, CdkMonitorFocus, MatButton, MatIconButton, MtxMonthView, MtxYearView, MtxMultiYearView, MtxTimeView],
  styles: ['.mtx-calendar{display:block;outline:none;font-family:var(--mtx-datetimepicker-calendar-text-font, var(--mat-sys-body-medium-font));font-size:var(--mtx-datetimepicker-calendar-text-size, var(--mat-sys-body-medium-size))}.mtx-calendar-header{--mat-button-text-container-shape: var(--mtx-datetimepicker-selector-container-shape, var(--mat-sys-corner-small));box-sizing:border-box;padding:8px;border-bottom:1px solid var(--mtx-datetimepicker-calendar-header-divider-color, var(--mat-sys-outline-variant));border-top-left-radius:var(--mtx-datetimepicker-container-shape, var(--mat-sys-corner-large));border-top-right-radius:var(--mtx-datetimepicker-container-shape, var(--mat-sys-corner-large));background-color:var(--mtx-datetimepicker-calendar-header-background-color, transparent);color:var(--mtx-datetimepicker-calendar-header-text-color, var(--mat-sys-on-surface-variant))}.mtx-calendar-header .mtx-calendar-header-year,.mtx-calendar-header .mtx-calendar-header-date,.mtx-calendar-header .mtx-calendar-header-hours,.mtx-calendar-header .mtx-calendar-header-minutes,.mtx-calendar-header .mtx-calendar-header-ampm{height:auto;min-width:auto;padding:0 4px;text-align:inherit;line-height:inherit;color:inherit;font-size:inherit;font-weight:inherit;letter-spacing:normal;white-space:normal;overflow-wrap:anywhere}.mtx-calendar-header .mtx-calendar-header-year .mat-mdc-button-touch-target,.mtx-calendar-header .mtx-calendar-header-date .mat-mdc-button-touch-target,.mtx-calendar-header .mtx-calendar-header-hours .mat-mdc-button-touch-target,.mtx-calendar-header .mtx-calendar-header-minutes .mat-mdc-button-touch-target,.mtx-calendar-header .mtx-calendar-header-ampm .mat-mdc-button-touch-target{height:100%}.mtx-calendar-header .mtx-calendar-header-year{line-height:24px}.mtx-calendar-header-date-time{font-size:24px;line-height:36px}.mtx-calendar-header-year:not(.active),.mtx-calendar-header-date:not(.active),.mtx-calendar-header-hours:not(.active),.mtx-calendar-header-minutes:not(.active),.mtx-calendar-header-ampm:not(.active){opacity:.6}.mtx-calendar-header-year.not-clickable,.mtx-calendar-header-date.not-clickable,.mtx-calendar-header-hours.not-clickable,.mtx-calendar-header-minutes.not-clickable,.mtx-calendar-header-ampm.not-clickable{cursor:initial}.mtx-calendar-header-time{display:inline-flex}.mtx-calendar-header-time:not(.active){opacity:.6}.mtx-calendar-header-time:not(.active) .mtx-calendar-header-hours,.mtx-calendar-header-time:not(.active) .mtx-calendar-header-minutes,.mtx-calendar-header-time:not(.active) .mtx-calendar-header-ampm{opacity:1}.mtx-calendar-header-hour-minute-separator{display:inline-block;width:8px;text-align:center}.mtx-calendar-header-ampm-container{display:inline-flex;flex-direction:column;line-height:18px;font-size:12px}[mode=landscape] .mtx-calendar{display:flex}[mode=landscape] .mtx-calendar .mtx-calendar-header{width:144px;min-width:144px;padding:16px 8px;border-bottom-width:0;border-radius:var(--mtx-datetimepicker-container-shape, var(--mat-sys-corner-large)) 0 0 var(--mtx-datetimepicker-container-shape, var(--mat-sys-corner-large));border-right:1px solid var(--mtx-datetimepicker-calendar-header-divider-color, var(--mat-sys-outline-variant))}[dir=rtl] [mode=landscape] .mtx-calendar .mtx-calendar-header{border-radius:0 var(--mtx-datetimepicker-container-shape, var(--mat-sys-corner-large)) var(--mtx-datetimepicker-container-shape, var(--mat-sys-corner-large)) 0;border-right-width:0;border-left:1px solid var(--mtx-datetimepicker-calendar-header-divider-color, var(--mat-sys-outline-variant))}[mode=landscape] .mtx-calendar .mtx-calendar-header-year+.mtx-calendar-header-date-time,[mode=landscape] .mtx-calendar .mtx-calendar-header-date+.mtx-calendar-header-time{margin-top:4px}[mode=landscape] .mtx-calendar .mtx-calendar-header-date-time{font-size:28px}[mode=landscape] .mtx-calendar .mtx-calendar-header-time{display:flex;flex-direction:column}[mode=landscape] .mtx-calendar .mtx-calendar-header-time .mtx-calendar-header-hours,[mode=landscape] .mtx-calendar .mtx-calendar-header-time .mtx-calendar-header-minutes,[mode=landscape] .mtx-calendar .mtx-calendar-header-time .mtx-calendar-header-ampm{width:40px;text-align:center}[mode=landscape] .mtx-calendar .mtx-calendar-header-ampm-container{flex-direction:row;font-size:20px}[mode=landscape] .mtx-calendar .mtx-calendar-header-ampm{padding:4px}[mode=landscape] .mtx-calendar .mtx-calendar-header-ampm+.mtx-calendar-header-ampm{margin:0 8px}[mode=landscape] .mtx-datetimepicker-content-container-with-actions .mtx-calendar .mtx-calendar-header{border-bottom-left-radius:0;border-bottom-right-radius:0}[mode=landscape] .mtx-datetimepicker-actions:before{position:absolute;top:0;left:0;box-sizing:border-box;width:144px;height:100%;content:"";border-right:1px solid var(--mtx-datetimepicker-calendar-header-divider-color, var(--mat-sys-outline-variant));background-color:var(--mtx-datetimepicker-calendar-header-background-color, transparent);border-bottom-left-radius:var(--mtx-datetimepicker-container-shape, var(--mat-sys-corner-large))}[dir=rtl] [mode=landscape] .mtx-datetimepicker-actions:before{left:auto;right:0;border-right-width:0;border-left:1px solid var(--mtx-datetimepicker-calendar-header-divider-color, var(--mat-sys-outline-variant));border-bottom-left-radius:0;border-bottom-right-radius:var(--mtx-datetimepicker-container-shape, var(--mat-sys-corner-large))}@media all and (orientation: landscape){[mode=auto] .mtx-calendar{display:flex}[mode=auto] .mtx-calendar .mtx-calendar-header{width:144px;min-width:144px;padding:16px 8px;border-bottom-width:0;border-radius:var(--mtx-datetimepicker-container-shape, var(--mat-sys-corner-large)) 0 0 var(--mtx-datetimepicker-container-shape, var(--mat-sys-corner-large));border-right:1px solid var(--mtx-datetimepicker-calendar-header-divider-color, var(--mat-sys-outline-variant))}[dir=rtl] [mode=auto] .mtx-calendar .mtx-calendar-header{border-radius:0 var(--mtx-datetimepicker-container-shape, var(--mat-sys-corner-large)) var(--mtx-datetimepicker-container-shape, var(--mat-sys-corner-large)) 0;border-right-width:0;border-left:1px solid var(--mtx-datetimepicker-calendar-header-divider-color, var(--mat-sys-outline-variant))}[mode=auto] .mtx-calendar .mtx-calendar-header-year+.mtx-calendar-header-date-time,[mode=auto] .mtx-calendar .mtx-calendar-header-date+.mtx-calendar-header-time{margin-top:4px}[mode=auto] .mtx-calendar .mtx-calendar-header-date-time{font-size:28px}[mode=auto] .mtx-calendar .mtx-calendar-header-time{display:flex;flex-direction:column}[mode=auto] .mtx-calendar .mtx-calendar-header-time .mtx-calendar-header-hours,[mode=auto] .mtx-calendar .mtx-calendar-header-time .mtx-calendar-header-minutes,[mode=auto] .mtx-calendar .mtx-calendar-header-time .mtx-calendar-header-ampm{width:40px;text-align:center}[mode=auto] .mtx-calendar .mtx-calendar-header-ampm-container{flex-direction:row;font-size:20px}[mode=auto] .mtx-calendar .mtx-calendar-header-ampm{padding:4px}[mode=auto] .mtx-calendar .mtx-calendar-header-ampm+.mtx-calendar-header-ampm{margin:0 8px}[mode=auto] .mtx-datetimepicker-content-container-with-actions .mtx-calendar .mtx-calendar-header{border-bottom-left-radius:0;border-bottom-right-radius:0}[mode=auto] .mtx-datetimepicker-actions:before{position:absolute;top:0;left:0;box-sizing:border-box;width:144px;height:100%;content:"";border-right:1px solid var(--mtx-datetimepicker-calendar-header-divider-color, var(--mat-sys-outline-variant));background-color:var(--mtx-datetimepicker-calendar-header-background-color, transparent);border-bottom-left-radius:var(--mtx-datetimepicker-container-shape, var(--mat-sys-corner-large))}[dir=rtl] [mode=auto] .mtx-datetimepicker-actions:before{left:auto;right:0;border-right-width:0;border-left:1px solid var(--mtx-datetimepicker-calendar-header-divider-color, var(--mat-sys-outline-variant));border-bottom-left-radius:0;border-bottom-right-radius:var(--mtx-datetimepicker-container-shape, var(--mat-sys-corner-large))}}.mtx-calendar-content{width:100%;padding:8px;outline:none;box-sizing:border-box;overflow:hidden}.mtx-calendar-controls{display:flex;align-items:center;justify-content:space-between;margin:0 calc(4.7142857143% - 16px)}.mtx-calendar-controls .mat-icon-button:hover .mat-button-focus-overlay{opacity:.04}.mtx-calendar-period-button{display:inline-block;height:40px;line-height:40px;outline:none;border:0;background:transparent;box-sizing:border-box;font-size:var(--mtx-datetimepicker-calendar-period-button-text-size, var(--mat-sys-title-small-size));font-weight:var(--mtx-datetimepicker-calendar-period-button-text-weight, var(--mat-sys-title-small-weight))}.mtx-calendar-previous-button.disabled,.mtx-calendar-next-button.disabled{pointer-events:none;color:var(--mtx-datetimepicker-calendar-date-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mtx-calendar-previous-button svg,.mtx-calendar-next-button svg{fill:currentColor;vertical-align:top}[dir=rtl] .mtx-calendar-previous-button svg,[dir=rtl] .mtx-calendar-next-button svg{transform:rotate(180deg)}.mtx-calendar-table{border-spacing:0;border-collapse:collapse;width:100%}.mtx-calendar-table-header th{text-align:center;padding:8px 0;color:var(--mtx-datetimepicker-calendar-table-header-text-color, var(--mat-sys-on-surface));font-size:var(--mtx-datetimepicker-calendar-table-header-text-size);font-weight:var(--mtx-datetimepicker-calendar-table-header-text-weight)}\n'],
  encapsulation: 2,
  changeDetection: 0
});
var MtxCalendar = _MtxCalendar;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MtxCalendar, [{
    type: Component,
    args: [{
      selector: "mtx-calendar",
      host: {
        "class": "mtx-calendar",
        "[class.mtx-calendar-with-time-input]": "timeInput"
      },
      exportAs: "mtxCalendar",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      imports: [CdkPortalOutlet, CdkMonitorFocus, MatButton, MatIconButton, MtxMonthView, MtxYearView, MtxMultiYearView, MtxTimeView],
      template: `<div class="mtx-calendar-header">
  @if (_calendarHeaderPortal) {
    <ng-template [cdkPortalOutlet]="_calendarHeaderPortal"></ng-template>
  } @else {
    @if (type !== 'time') {
      <button
        mat-button type="button" class="mtx-calendar-header-year"
        [class.active]="currentView === 'year' || currentView === 'multi-year'"
        [attr.aria-label]="_yearButtonLabel"
        (click)="_yearClicked()">
        <span>{{ _yearButtonText }}</span>
        @if (multiYearSelector || type === 'year') {
          <svg
            class="mtx-calendar-header-year-dropdown" matButtonIcon iconPositionEnd
            width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M7,10L12,15L17,10H7Z" />
          </svg>
        }
      </button>
    }
    @if (type !== 'year') {
      <div class="mtx-calendar-header-date-time">
        @if (type !== 'time') {
          <button
            mat-button type="button" class="mtx-calendar-header-date"
            [class.active]="currentView === 'month'"
            [class.not-clickable]="type === 'month'"
            [attr.aria-label]="_dateButtonLabel"
            (click)="_dateClicked()">{{ _dateButtonText }}</button>
        }
        @if (type.endsWith('time')) {
          <span class="mtx-calendar-header-time" [class.active]="currentView === 'clock'">
            <span class="mtx-calendar-header-hour-minute-container">
              <button mat-button type="button" class="mtx-calendar-header-hours"
                [class.active]="_clockView === 'hour'"
                [attr.aria-label]="_hourButtonLabel"
                (click)="_hoursClicked()">{{ _hoursButtonText }}</button>
              <span class="mtx-calendar-header-hour-minute-separator">:</span>
              <button mat-button type="button" class="mtx-calendar-header-minutes"
                [class.active]="_clockView === 'minute'"
                [attr.aria-label]="_minuteButtonLabel"
                (click)="_minutesClicked()">{{ _minutesButtonText }}</button>
            </span>
            @if (twelvehour) {
              <span class="mtx-calendar-header-ampm-container">
                <button mat-button type="button" class="mtx-calendar-header-ampm"
                  [class.active]="_AMPM === 'AM'" aria-label="AM"
                  (click)="_ampmClicked('AM')">AM</button>
                <button mat-button type="button" class="mtx-calendar-header-ampm"
                  [class.active]="_AMPM === 'PM'" aria-label="PM"
                  (click)="_ampmClicked('PM')">PM</button>
              </span>
            }
          </span>
        }
      </div>
    }
  }
</div>

<div class="mtx-calendar-content">
  @if (currentView === 'month' || currentView === 'year' || currentView === 'multi-year') {
    <div class="mtx-calendar-controls">
      <button mat-icon-button type="button"
        class="mtx-calendar-previous-button"
        [class.disabled]="!_previousEnabled()"
        [attr.aria-disabled]="!_previousEnabled()"
        [attr.aria-label]="_prevButtonLabel"
        (click)="_previousClicked()">
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
        </svg>
      </button>
      <div class="mtx-calendar-period-button">
        <strong>{{ _yearPeriodText }}</strong>
      </div>
      <button mat-icon-button type="button"
        class="mtx-calendar-next-button"
        [class.disabled]="!_nextEnabled()"
        [attr.aria-disabled]="!_nextEnabled()"
        [attr.aria-label]="_nextButtonLabel"
        (click)="_nextClicked()">
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
        </svg>
      </button>
    </div>
  }

  <div class="mtx-calendar-view" cdkMonitorSubtreeFocus tabindex="-1">
    @switch (currentView) {
      @case ('month') {
        <mtx-month-view
          (_userSelection)="_userSelected()"
          (selectedChange)="_dateSelected($event)"
          [(activeDate)]="_activeDate"
          [dateFilter]="_dateFilterForViews"
          [selected]="selected"
          [showWeekNumbers]="showWeekNumbers"
          [type]="type">
        </mtx-month-view>
      }
      @case ('year') {
        <mtx-year-view
          (_userSelection)="_userSelected()"
          (selectedChange)="_monthSelected($event)"
          [(activeDate)]="_activeDate"
          [dateFilter]="_dateFilterForViews"
          [selected]="selected"
          [type]="type">
        </mtx-year-view>
      }
      @case ('multi-year') {
        <mtx-multi-year-view
          (_userSelection)="_userSelected()"
          (selectedChange)="_yearSelected($event)"
          [(activeDate)]="_activeDate"
          [dateFilter]="_dateFilterForViews"
          [maxDate]="maxDate"
          [minDate]="minDate"
          [selected]="selected"
          [type]="type">
        </mtx-multi-year-view>
      }
      @default {
        <mtx-time-view
          (_userSelection)="_userSelected()"
          (activeDateChange)="_onActiveDateChange($event)"
          (selectedChange)="_timeSelected($event)"
          [AMPM]="_AMPM"
          (ampmChange)="_ampmClicked($event)"
          [clockView]="_clockView"
          (clockViewChange)="_clockView = $event"
          [twelvehour]="twelvehour"
          [dateFilter]="dateFilter"
          [interval]="timeInterval"
          [maxDate]="maxDate"
          [minDate]="minDate"
          [(selected)]="_activeDate"
          [actionsPortal]="actionsPortal"
          [autoFocus]="timeInputAutoFocus"
          [timeInput]="timeInput"
          [preventSameDateTimeSelection]="preventSameDateTimeSelection">
        </mtx-time-view>
      }
    }
  </div>
</div>
`,
      styles: ['.mtx-calendar{display:block;outline:none;font-family:var(--mtx-datetimepicker-calendar-text-font, var(--mat-sys-body-medium-font));font-size:var(--mtx-datetimepicker-calendar-text-size, var(--mat-sys-body-medium-size))}.mtx-calendar-header{--mat-button-text-container-shape: var(--mtx-datetimepicker-selector-container-shape, var(--mat-sys-corner-small));box-sizing:border-box;padding:8px;border-bottom:1px solid var(--mtx-datetimepicker-calendar-header-divider-color, var(--mat-sys-outline-variant));border-top-left-radius:var(--mtx-datetimepicker-container-shape, var(--mat-sys-corner-large));border-top-right-radius:var(--mtx-datetimepicker-container-shape, var(--mat-sys-corner-large));background-color:var(--mtx-datetimepicker-calendar-header-background-color, transparent);color:var(--mtx-datetimepicker-calendar-header-text-color, var(--mat-sys-on-surface-variant))}.mtx-calendar-header .mtx-calendar-header-year,.mtx-calendar-header .mtx-calendar-header-date,.mtx-calendar-header .mtx-calendar-header-hours,.mtx-calendar-header .mtx-calendar-header-minutes,.mtx-calendar-header .mtx-calendar-header-ampm{height:auto;min-width:auto;padding:0 4px;text-align:inherit;line-height:inherit;color:inherit;font-size:inherit;font-weight:inherit;letter-spacing:normal;white-space:normal;overflow-wrap:anywhere}.mtx-calendar-header .mtx-calendar-header-year .mat-mdc-button-touch-target,.mtx-calendar-header .mtx-calendar-header-date .mat-mdc-button-touch-target,.mtx-calendar-header .mtx-calendar-header-hours .mat-mdc-button-touch-target,.mtx-calendar-header .mtx-calendar-header-minutes .mat-mdc-button-touch-target,.mtx-calendar-header .mtx-calendar-header-ampm .mat-mdc-button-touch-target{height:100%}.mtx-calendar-header .mtx-calendar-header-year{line-height:24px}.mtx-calendar-header-date-time{font-size:24px;line-height:36px}.mtx-calendar-header-year:not(.active),.mtx-calendar-header-date:not(.active),.mtx-calendar-header-hours:not(.active),.mtx-calendar-header-minutes:not(.active),.mtx-calendar-header-ampm:not(.active){opacity:.6}.mtx-calendar-header-year.not-clickable,.mtx-calendar-header-date.not-clickable,.mtx-calendar-header-hours.not-clickable,.mtx-calendar-header-minutes.not-clickable,.mtx-calendar-header-ampm.not-clickable{cursor:initial}.mtx-calendar-header-time{display:inline-flex}.mtx-calendar-header-time:not(.active){opacity:.6}.mtx-calendar-header-time:not(.active) .mtx-calendar-header-hours,.mtx-calendar-header-time:not(.active) .mtx-calendar-header-minutes,.mtx-calendar-header-time:not(.active) .mtx-calendar-header-ampm{opacity:1}.mtx-calendar-header-hour-minute-separator{display:inline-block;width:8px;text-align:center}.mtx-calendar-header-ampm-container{display:inline-flex;flex-direction:column;line-height:18px;font-size:12px}[mode=landscape] .mtx-calendar{display:flex}[mode=landscape] .mtx-calendar .mtx-calendar-header{width:144px;min-width:144px;padding:16px 8px;border-bottom-width:0;border-radius:var(--mtx-datetimepicker-container-shape, var(--mat-sys-corner-large)) 0 0 var(--mtx-datetimepicker-container-shape, var(--mat-sys-corner-large));border-right:1px solid var(--mtx-datetimepicker-calendar-header-divider-color, var(--mat-sys-outline-variant))}[dir=rtl] [mode=landscape] .mtx-calendar .mtx-calendar-header{border-radius:0 var(--mtx-datetimepicker-container-shape, var(--mat-sys-corner-large)) var(--mtx-datetimepicker-container-shape, var(--mat-sys-corner-large)) 0;border-right-width:0;border-left:1px solid var(--mtx-datetimepicker-calendar-header-divider-color, var(--mat-sys-outline-variant))}[mode=landscape] .mtx-calendar .mtx-calendar-header-year+.mtx-calendar-header-date-time,[mode=landscape] .mtx-calendar .mtx-calendar-header-date+.mtx-calendar-header-time{margin-top:4px}[mode=landscape] .mtx-calendar .mtx-calendar-header-date-time{font-size:28px}[mode=landscape] .mtx-calendar .mtx-calendar-header-time{display:flex;flex-direction:column}[mode=landscape] .mtx-calendar .mtx-calendar-header-time .mtx-calendar-header-hours,[mode=landscape] .mtx-calendar .mtx-calendar-header-time .mtx-calendar-header-minutes,[mode=landscape] .mtx-calendar .mtx-calendar-header-time .mtx-calendar-header-ampm{width:40px;text-align:center}[mode=landscape] .mtx-calendar .mtx-calendar-header-ampm-container{flex-direction:row;font-size:20px}[mode=landscape] .mtx-calendar .mtx-calendar-header-ampm{padding:4px}[mode=landscape] .mtx-calendar .mtx-calendar-header-ampm+.mtx-calendar-header-ampm{margin:0 8px}[mode=landscape] .mtx-datetimepicker-content-container-with-actions .mtx-calendar .mtx-calendar-header{border-bottom-left-radius:0;border-bottom-right-radius:0}[mode=landscape] .mtx-datetimepicker-actions:before{position:absolute;top:0;left:0;box-sizing:border-box;width:144px;height:100%;content:"";border-right:1px solid var(--mtx-datetimepicker-calendar-header-divider-color, var(--mat-sys-outline-variant));background-color:var(--mtx-datetimepicker-calendar-header-background-color, transparent);border-bottom-left-radius:var(--mtx-datetimepicker-container-shape, var(--mat-sys-corner-large))}[dir=rtl] [mode=landscape] .mtx-datetimepicker-actions:before{left:auto;right:0;border-right-width:0;border-left:1px solid var(--mtx-datetimepicker-calendar-header-divider-color, var(--mat-sys-outline-variant));border-bottom-left-radius:0;border-bottom-right-radius:var(--mtx-datetimepicker-container-shape, var(--mat-sys-corner-large))}@media all and (orientation: landscape){[mode=auto] .mtx-calendar{display:flex}[mode=auto] .mtx-calendar .mtx-calendar-header{width:144px;min-width:144px;padding:16px 8px;border-bottom-width:0;border-radius:var(--mtx-datetimepicker-container-shape, var(--mat-sys-corner-large)) 0 0 var(--mtx-datetimepicker-container-shape, var(--mat-sys-corner-large));border-right:1px solid var(--mtx-datetimepicker-calendar-header-divider-color, var(--mat-sys-outline-variant))}[dir=rtl] [mode=auto] .mtx-calendar .mtx-calendar-header{border-radius:0 var(--mtx-datetimepicker-container-shape, var(--mat-sys-corner-large)) var(--mtx-datetimepicker-container-shape, var(--mat-sys-corner-large)) 0;border-right-width:0;border-left:1px solid var(--mtx-datetimepicker-calendar-header-divider-color, var(--mat-sys-outline-variant))}[mode=auto] .mtx-calendar .mtx-calendar-header-year+.mtx-calendar-header-date-time,[mode=auto] .mtx-calendar .mtx-calendar-header-date+.mtx-calendar-header-time{margin-top:4px}[mode=auto] .mtx-calendar .mtx-calendar-header-date-time{font-size:28px}[mode=auto] .mtx-calendar .mtx-calendar-header-time{display:flex;flex-direction:column}[mode=auto] .mtx-calendar .mtx-calendar-header-time .mtx-calendar-header-hours,[mode=auto] .mtx-calendar .mtx-calendar-header-time .mtx-calendar-header-minutes,[mode=auto] .mtx-calendar .mtx-calendar-header-time .mtx-calendar-header-ampm{width:40px;text-align:center}[mode=auto] .mtx-calendar .mtx-calendar-header-ampm-container{flex-direction:row;font-size:20px}[mode=auto] .mtx-calendar .mtx-calendar-header-ampm{padding:4px}[mode=auto] .mtx-calendar .mtx-calendar-header-ampm+.mtx-calendar-header-ampm{margin:0 8px}[mode=auto] .mtx-datetimepicker-content-container-with-actions .mtx-calendar .mtx-calendar-header{border-bottom-left-radius:0;border-bottom-right-radius:0}[mode=auto] .mtx-datetimepicker-actions:before{position:absolute;top:0;left:0;box-sizing:border-box;width:144px;height:100%;content:"";border-right:1px solid var(--mtx-datetimepicker-calendar-header-divider-color, var(--mat-sys-outline-variant));background-color:var(--mtx-datetimepicker-calendar-header-background-color, transparent);border-bottom-left-radius:var(--mtx-datetimepicker-container-shape, var(--mat-sys-corner-large))}[dir=rtl] [mode=auto] .mtx-datetimepicker-actions:before{left:auto;right:0;border-right-width:0;border-left:1px solid var(--mtx-datetimepicker-calendar-header-divider-color, var(--mat-sys-outline-variant));border-bottom-left-radius:0;border-bottom-right-radius:var(--mtx-datetimepicker-container-shape, var(--mat-sys-corner-large))}}.mtx-calendar-content{width:100%;padding:8px;outline:none;box-sizing:border-box;overflow:hidden}.mtx-calendar-controls{display:flex;align-items:center;justify-content:space-between;margin:0 calc(4.7142857143% - 16px)}.mtx-calendar-controls .mat-icon-button:hover .mat-button-focus-overlay{opacity:.04}.mtx-calendar-period-button{display:inline-block;height:40px;line-height:40px;outline:none;border:0;background:transparent;box-sizing:border-box;font-size:var(--mtx-datetimepicker-calendar-period-button-text-size, var(--mat-sys-title-small-size));font-weight:var(--mtx-datetimepicker-calendar-period-button-text-weight, var(--mat-sys-title-small-weight))}.mtx-calendar-previous-button.disabled,.mtx-calendar-next-button.disabled{pointer-events:none;color:var(--mtx-datetimepicker-calendar-date-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mtx-calendar-previous-button svg,.mtx-calendar-next-button svg{fill:currentColor;vertical-align:top}[dir=rtl] .mtx-calendar-previous-button svg,[dir=rtl] .mtx-calendar-next-button svg{transform:rotate(180deg)}.mtx-calendar-table{border-spacing:0;border-collapse:collapse;width:100%}.mtx-calendar-table-header th{text-align:center;padding:8px 0;color:var(--mtx-datetimepicker-calendar-table-header-text-color, var(--mat-sys-on-surface));font-size:var(--mtx-datetimepicker-calendar-table-header-text-size);font-weight:var(--mtx-datetimepicker-calendar-table-header-text-weight)}\n']
    }]
  }], () => [], {
    multiYearSelector: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    twelvehour: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showWeekNumbers: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    startView: [{
      type: Input
    }],
    timeInterval: [{
      type: Input
    }],
    dateFilter: [{
      type: Input
    }],
    preventSameDateTimeSelection: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    headerComponent: [{
      type: Input
    }],
    actionsPortal: [{
      type: Input
    }],
    selectedChange: [{
      type: Output
    }],
    viewChanged: [{
      type: Output
    }],
    _userSelection: [{
      type: Output
    }],
    monthView: [{
      type: ViewChild,
      args: [MtxMonthView]
    }],
    yearView: [{
      type: ViewChild,
      args: [MtxYearView]
    }],
    multiYearView: [{
      type: ViewChild,
      args: [MtxMultiYearView]
    }],
    timeView: [{
      type: ViewChild,
      args: [MtxTimeView]
    }],
    type: [{
      type: Input
    }],
    startAt: [{
      type: Input
    }],
    timeInput: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    timeInputAutoFocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    selected: [{
      type: Input
    }],
    minDate: [{
      type: Input
    }],
    maxDate: [{
      type: Input
    }]
  });
})();
var datetimepickerUid = 0;
var MTX_DATETIMEPICKER_SCROLL_STRATEGY = new InjectionToken("mtx-datetimepicker-scroll-strategy", {
  providedIn: "root",
  factory: () => {
    const overlay = inject(Overlay);
    return () => overlay.scrollStrategies.reposition();
  }
});
function MTX_DATETIMEPICKER_SCROLL_STRATEGY_FACTORY(overlay) {
  return () => overlay.scrollStrategies.reposition();
}
var MTX_DATETIMEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER = {
  provide: MTX_DATETIMEPICKER_SCROLL_STRATEGY,
  deps: [Overlay],
  useFactory: MTX_DATETIMEPICKER_SCROLL_STRATEGY_FACTORY
};
var MTX_DATETIMEPICKER_DEFAULT_OPTIONS = new InjectionToken("mtx-datetimepicker-default-options");
var _MtxDatetimepickerContent = class _MtxDatetimepickerContent {
  _viewChanged(view) {
    this.view = view;
  }
  constructor() {
    this._elementRef = inject(ElementRef);
    this._animationsDisabled = inject(ANIMATION_MODULE_TYPE, {
      optional: true
    }) === "NoopAnimations";
    this._changeDetectorRef = inject(ChangeDetectorRef);
    this._ngZone = inject(NgZone);
    this._animationDone = new Subject();
    this._isAnimating = false;
    this._dialogLabelId = null;
    this._actionsPortal = null;
    this.type = "datetime";
    this.view = "month";
    this._closeButtonText = "";
    this._closeButtonFocused = false;
    this._handleAnimationEvent = (event) => {
      const element = this._elementRef.nativeElement;
      if (event.target !== element || !event.animationName.startsWith("_mtx-datetimepicker-content")) {
        return;
      }
      clearTimeout(this._animationFallback);
      this._isAnimating = event.type === "animationstart";
      element.classList.toggle("mtx-datetimepicker-content-animating", this._isAnimating);
      if (!this._isAnimating) {
        this._animationDone.next();
      }
    };
    this._closeButtonText = inject(MtxDatetimepickerIntl).closeCalendarLabel;
    if (!this._animationsDisabled) {
      const element = this._elementRef.nativeElement;
      const renderer = inject(Renderer2);
      this._eventCleanups = this._ngZone.runOutsideAngular(() => [renderer.listen(element, "animationstart", this._handleAnimationEvent), renderer.listen(element, "animationend", this._handleAnimationEvent), renderer.listen(element, "animationcancel", this._handleAnimationEvent)]);
    }
  }
  ngAfterViewInit() {
    this._stateChanges = this.datetimepicker._disabledChange.subscribe(() => {
      this._changeDetectorRef.markForCheck();
    });
    this._calendar.focusActiveCell();
  }
  ngOnDestroy() {
    clearTimeout(this._animationFallback);
    this._eventCleanups?.forEach((cleanup) => cleanup());
    this._animationDone.complete();
  }
  _startExitAnimation() {
    this._elementRef.nativeElement.classList.add("mtx-datetimepicker-content-exit");
    if (this._animationsDisabled) {
      this._animationDone.next();
    } else {
      clearTimeout(this._animationFallback);
      this._animationFallback = setTimeout(() => {
        if (!this._isAnimating) {
          this._animationDone.next();
        }
      }, 200);
    }
  }
  _handleUserSelection() {
    if (!this._actionsPortal) {
      this.datetimepicker.close();
    }
  }
  /**
   * Assigns a new portal containing the datetimepicker actions.
   * @param portal Portal with the actions to be assigned.
   * @param forceRerender Whether a re-render of the portal should be triggered.
   */
  _assignActions(portal, forceRerender) {
    this._actionsPortal = portal;
    if (forceRerender) {
      this._changeDetectorRef.detectChanges();
    }
  }
};
_MtxDatetimepickerContent.\u0275fac = function MtxDatetimepickerContent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MtxDatetimepickerContent)();
};
_MtxDatetimepickerContent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _MtxDatetimepickerContent,
  selectors: [["mtx-datetimepicker-content"]],
  viewQuery: function MtxDatetimepickerContent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(MtxCalendar, 7);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._calendar = _t.first);
    }
  },
  hostAttrs: [1, "mtx-datetimepicker-content"],
  hostVars: 7,
  hostBindings: function MtxDatetimepickerContent_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("mode", ctx.datetimepicker.mode);
      \u0275\u0275classMap(ctx.color ? "mat-" + ctx.color : "");
      \u0275\u0275classProp("mtx-datetimepicker-content-touch", ctx.datetimepicker == null ? null : ctx.datetimepicker.touchUi)("mtx-datetimepicker-content-animations-enabled", !ctx._animationsDisabled);
    }
  },
  inputs: {
    color: "color"
  },
  decls: 5,
  vars: 34,
  consts: [["cdkTrapFocus", "", "role", "dialog", 1, "mtx-datetimepicker-content-container"], [3, "selectedChange", "viewChanged", "_userSelection", "id", "type", "startAt", "startView", "maxDate", "minDate", "dateFilter", "multiYearSelector", "preventSameDateTimeSelection", "headerComponent", "timeInterval", "twelvehour", "showWeekNumbers", "selected", "timeInput", "actionsPortal", "timeInputAutoFocus"], [3, "cdkPortalOutlet"], ["type", "button", "mat-raised-button", "", 1, "mtx-datetimepicker-close-button", 3, "focus", "blur", "click", "color"]],
  template: function MtxDatetimepickerContent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "mtx-calendar", 1);
      \u0275\u0275listener("selectedChange", function MtxDatetimepickerContent_Template_mtx_calendar_selectedChange_1_listener($event) {
        return ctx.datetimepicker._select($event);
      })("viewChanged", function MtxDatetimepickerContent_Template_mtx_calendar_viewChanged_1_listener($event) {
        return ctx.datetimepicker._viewChanged($event);
      })("viewChanged", function MtxDatetimepickerContent_Template_mtx_calendar_viewChanged_1_listener($event) {
        return ctx._viewChanged($event);
      })("_userSelection", function MtxDatetimepickerContent_Template_mtx_calendar__userSelection_1_listener() {
        return ctx._handleUserSelection();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(2, MtxDatetimepickerContent_ng_template_2_Template, 0, 0, "ng-template", 2);
      \u0275\u0275elementStart(3, "button", 3);
      \u0275\u0275listener("focus", function MtxDatetimepickerContent_Template_button_focus_3_listener() {
        return ctx._closeButtonFocused = true;
      })("blur", function MtxDatetimepickerContent_Template_button_blur_3_listener() {
        return ctx._closeButtonFocused = false;
      })("click", function MtxDatetimepickerContent_Template_button_click_3_listener() {
        return ctx.datetimepicker.close();
      });
      \u0275\u0275text(4);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275classProp("mtx-datetimepicker-content-container-with-custom-header", ctx.datetimepicker.calendarHeaderComponent)("mtx-datetimepicker-content-container-with-actions", ctx._actionsPortal)("mtx-datetimepicker-content-container-with-time-input", ctx.datetimepicker.timeInput);
      \u0275\u0275attribute("aria-modal", true)("aria-labelledby", ctx._dialogLabelId ?? void 0)("mode", ctx.datetimepicker.mode);
      \u0275\u0275advance();
      \u0275\u0275classMap(ctx.datetimepicker.panelClass);
      \u0275\u0275property("id", ctx.datetimepicker.id)("type", ctx.datetimepicker.type)("startAt", ctx.datetimepicker.startAt)("startView", ctx.datetimepicker.startView)("maxDate", ctx.datetimepicker._maxDate)("minDate", ctx.datetimepicker._minDate)("dateFilter", ctx.datetimepicker._dateFilter)("multiYearSelector", ctx.datetimepicker.multiYearSelector)("preventSameDateTimeSelection", ctx.datetimepicker.preventSameDateTimeSelection)("headerComponent", ctx.datetimepicker.calendarHeaderComponent)("timeInterval", ctx.datetimepicker.timeInterval)("twelvehour", ctx.datetimepicker.twelvehour)("showWeekNumbers", ctx.datetimepicker.showWeekNumbers)("selected", ctx.datetimepicker._selected)("timeInput", ctx.datetimepicker.timeInput)("actionsPortal", ctx._actionsPortal)("timeInputAutoFocus", ctx.datetimepicker.timeInputAutoFocus);
      \u0275\u0275attribute("mode", ctx.datetimepicker.mode);
      \u0275\u0275advance();
      \u0275\u0275property("cdkPortalOutlet", ctx._actionsPortal);
      \u0275\u0275advance();
      \u0275\u0275classProp("cdk-visually-hidden", !ctx._closeButtonFocused);
      \u0275\u0275property("color", ctx.color || "primary");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx._closeButtonText, " ");
    }
  },
  dependencies: [CdkTrapFocus, MtxCalendar, CdkPortalOutlet, MatButton],
  styles: ["@keyframes _mtx-datetimepicker-content-dropdown-enter{0%{opacity:0;transform:scaleY(.8)}to{opacity:1;transform:none}}@keyframes _mtx-datetimepicker-content-dialog-enter{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:none}}@keyframes _mtx-datetimepicker-content-exit{0%{opacity:1}to{opacity:0}}.mtx-datetimepicker-content{display:block;border-radius:var(--mtx-datetimepicker-container-shape, var(--mat-sys-corner-large));background-color:var(--mtx-datetimepicker-container-background-color, var(--mat-sys-surface-container-high));box-shadow:var(--mtx-datetimepicker-container-elevation-shadow, 0px 0px 0px 0px rgba(0, 0, 0, .2), 0px 0px 0px 0px rgba(0, 0, 0, .14), 0px 0px 0px 0px rgba(0, 0, 0, .12));color:var(--mtx-datetimepicker-container-text-color, var(--mat-sys-on-surface))}.mtx-datetimepicker-content.mtx-datetimepicker-content-animations-enabled{animation:_mtx-datetimepicker-content-dropdown-enter .12s cubic-bezier(0,0,.2,1)}.mtx-datetimepicker-content .mtx-calendar{width:296px;height:424px}.mtx-datetimepicker-content .mtx-calendar.mtx-calendar-with-time-input{height:494px}.mtx-datetimepicker-content .mtx-datetimepicker-content-container-with-actions .mtx-calendar.mtx-calendar-with-time-input{height:442px}.mtx-datetimepicker-content .mtx-datetimepicker-close-button{position:absolute;top:100%;left:0;margin-top:8px}.mtx-datetimepicker-content-animating .mtx-datetimepicker-content .mtx-datetimepicker-close-button{display:none}.mtx-datetimepicker-content-container{display:flex;flex-direction:column;justify-content:space-between}.mtx-datetimepicker-content[mode=landscape] .mtx-calendar{width:440px;height:328px}.mtx-datetimepicker-content[mode=landscape] .mtx-calendar.mtx-calendar-with-time-input{height:416px}.mtx-datetimepicker-content[mode=landscape] .mtx-datetimepicker-content-container-with-actions .mtx-calendar.mtx-calendar-with-time-input{height:356px}@media all and (orientation: landscape){.mtx-datetimepicker-content[mode=auto] .mtx-calendar{width:440px;height:328px}.mtx-datetimepicker-content[mode=auto] .mtx-calendar.mtx-calendar-with-time-input{height:416px}.mtx-datetimepicker-content[mode=auto] .mtx-datetimepicker-content-container-with-actions .mtx-calendar.mtx-calendar-with-time-input{height:356px}}.mtx-datetimepicker-content-touch{display:block;max-height:84vh;box-shadow:var(--mtx-datetimepicker-container-touch-elevation-shadow, 0px 0px 0px 0px rgba(0, 0, 0, .2), 0px 0px 0px 0px rgba(0, 0, 0, .14), 0px 0px 0px 0px rgba(0, 0, 0, .12));border-radius:var(--mtx-datetimepicker-container-touch-shape, var(--mat-sys-corner-extra-large));position:relative;overflow:visible}.mtx-datetimepicker-content-touch.mtx-datetimepicker-content-animations-enabled{animation:_mtx-datetimepicker-content-dialog-enter .15s cubic-bezier(0,0,.2,1)}.mtx-datetimepicker-content-touch .mtx-datetimepicker-content-container{min-height:300px;max-height:850px;min-width:250px;max-width:750px}.mtx-datetimepicker-content-touch .mtx-calendar{width:100%;height:auto}.mtx-datetimepicker-content-touch .mtx-clock{width:50vh;max-width:80%;margin:12px auto}.mtx-datetimepicker-content-exit.mtx-datetimepicker-content-animations-enabled{animation:_mtx-datetimepicker-content-exit .1s linear}@media all and (orientation: landscape){.mtx-datetimepicker-content-touch .mtx-datetimepicker-content-container[mode=auto],.mtx-datetimepicker-content-touch .mtx-datetimepicker-content-container[mode=landscape]{width:120vh;height:80vh}.mtx-datetimepicker-content-touch .mtx-datetimepicker-content-container[mode=auto] .mtx-calendar,.mtx-datetimepicker-content-touch .mtx-datetimepicker-content-container[mode=auto].mtx-datetimepicker-content-container-with-actions .mtx-calendar.mtx-calendar-with-time-input,.mtx-datetimepicker-content-touch .mtx-datetimepicker-content-container[mode=landscape] .mtx-calendar,.mtx-datetimepicker-content-touch .mtx-datetimepicker-content-container[mode=landscape].mtx-datetimepicker-content-container-with-actions .mtx-calendar.mtx-calendar-with-time-input{width:auto;height:100%}.mtx-datetimepicker-content-touch .mtx-datetimepicker-content-container[mode=portrait]{width:64vh;height:80vh}.mtx-datetimepicker-content-touch .mtx-datetimepicker-content-container[mode=portrait] .mtx-calendar{width:100%;height:auto}}@media all and (orientation: portrait){.mtx-datetimepicker-content-touch .mtx-datetimepicker-content-container[mode=auto],.mtx-datetimepicker-content-touch .mtx-datetimepicker-content-container[mode=portrait]{width:80vw;height:120vw}.mtx-datetimepicker-content-touch .mtx-datetimepicker-content-container[mode=auto] .mtx-calendar,.mtx-datetimepicker-content-touch .mtx-datetimepicker-content-container[mode=portrait] .mtx-calendar{width:100%;height:auto}.mtx-datetimepicker-content-touch .mtx-datetimepicker-content-container[mode=auto].mtx-datetimepicker-content-container-with-actions,.mtx-datetimepicker-content-touch .mtx-datetimepicker-content-container[mode=auto].mtx-datetimepicker-content-container-with-time-input,.mtx-datetimepicker-content-touch .mtx-datetimepicker-content-container[mode=portrait].mtx-datetimepicker-content-container-with-actions,.mtx-datetimepicker-content-touch .mtx-datetimepicker-content-container[mode=portrait].mtx-datetimepicker-content-container-with-time-input{height:124vw}.mtx-datetimepicker-content-touch .mtx-datetimepicker-content-container[mode=landscape]{width:90vw;height:64vw}.mtx-datetimepicker-content-touch .mtx-datetimepicker-content-container[mode=landscape] .mtx-calendar{width:auto;height:100%}}\n"],
  encapsulation: 2,
  changeDetection: 0
});
var MtxDatetimepickerContent = _MtxDatetimepickerContent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MtxDatetimepickerContent, [{
    type: Component,
    args: [{
      selector: "mtx-datetimepicker-content",
      host: {
        "class": "mtx-datetimepicker-content",
        "[class]": 'color ? "mat-" + color : ""',
        "[class.mtx-datetimepicker-content-touch]": "datetimepicker?.touchUi",
        "[class.mtx-datetimepicker-content-animations-enabled]": "!_animationsDisabled",
        "[attr.mode]": "datetimepicker.mode"
      },
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      imports: [CdkTrapFocus, MtxCalendar, CdkPortalOutlet, MatButton],
      template: `<div
  cdkTrapFocus
  role="dialog"
  [attr.aria-modal]="true"
  [attr.aria-labelledby]="_dialogLabelId ?? undefined"
  [attr.mode]="datetimepicker.mode"
  class="mtx-datetimepicker-content-container"
  [class.mtx-datetimepicker-content-container-with-custom-header]="datetimepicker.calendarHeaderComponent"
  [class.mtx-datetimepicker-content-container-with-actions]="_actionsPortal"
  [class.mtx-datetimepicker-content-container-with-time-input]="datetimepicker.timeInput"
>
  <mtx-calendar
    [id]="datetimepicker.id"
    [class]="datetimepicker.panelClass"
    [attr.mode]="datetimepicker.mode"
    [type]="datetimepicker.type"
    [startAt]="datetimepicker.startAt"
    [startView]="datetimepicker.startView"
    [maxDate]="datetimepicker._maxDate"
    [minDate]="datetimepicker._minDate"
    [dateFilter]="datetimepicker._dateFilter"
    [multiYearSelector]="datetimepicker.multiYearSelector"
    [preventSameDateTimeSelection]="datetimepicker.preventSameDateTimeSelection"
    [headerComponent]="datetimepicker.calendarHeaderComponent"
    [timeInterval]="datetimepicker.timeInterval"
    [twelvehour]="datetimepicker.twelvehour"
    [showWeekNumbers]="datetimepicker.showWeekNumbers"
    [selected]="datetimepicker._selected"
    [timeInput]="datetimepicker.timeInput"
    [actionsPortal]="_actionsPortal"
    [timeInputAutoFocus]="datetimepicker.timeInputAutoFocus"
    (selectedChange)="datetimepicker._select($event)"
    (viewChanged)="datetimepicker._viewChanged($event)"
    (viewChanged)="_viewChanged($event)"
    (_userSelection)="_handleUserSelection()"
  ></mtx-calendar>

  <ng-template [cdkPortalOutlet]="_actionsPortal"></ng-template>

  <!-- Invisible close button for screen reader users. -->
  <button
    type="button"
    mat-raised-button
    [color]="color || 'primary'"
    class="mtx-datetimepicker-close-button"
    [class.cdk-visually-hidden]="!_closeButtonFocused"
    (focus)="_closeButtonFocused = true"
    (blur)="_closeButtonFocused = false"
    (click)="datetimepicker.close()"
  >
    {{ _closeButtonText }}
  </button>
</div>
`,
      styles: ["@keyframes _mtx-datetimepicker-content-dropdown-enter{0%{opacity:0;transform:scaleY(.8)}to{opacity:1;transform:none}}@keyframes _mtx-datetimepicker-content-dialog-enter{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:none}}@keyframes _mtx-datetimepicker-content-exit{0%{opacity:1}to{opacity:0}}.mtx-datetimepicker-content{display:block;border-radius:var(--mtx-datetimepicker-container-shape, var(--mat-sys-corner-large));background-color:var(--mtx-datetimepicker-container-background-color, var(--mat-sys-surface-container-high));box-shadow:var(--mtx-datetimepicker-container-elevation-shadow, 0px 0px 0px 0px rgba(0, 0, 0, .2), 0px 0px 0px 0px rgba(0, 0, 0, .14), 0px 0px 0px 0px rgba(0, 0, 0, .12));color:var(--mtx-datetimepicker-container-text-color, var(--mat-sys-on-surface))}.mtx-datetimepicker-content.mtx-datetimepicker-content-animations-enabled{animation:_mtx-datetimepicker-content-dropdown-enter .12s cubic-bezier(0,0,.2,1)}.mtx-datetimepicker-content .mtx-calendar{width:296px;height:424px}.mtx-datetimepicker-content .mtx-calendar.mtx-calendar-with-time-input{height:494px}.mtx-datetimepicker-content .mtx-datetimepicker-content-container-with-actions .mtx-calendar.mtx-calendar-with-time-input{height:442px}.mtx-datetimepicker-content .mtx-datetimepicker-close-button{position:absolute;top:100%;left:0;margin-top:8px}.mtx-datetimepicker-content-animating .mtx-datetimepicker-content .mtx-datetimepicker-close-button{display:none}.mtx-datetimepicker-content-container{display:flex;flex-direction:column;justify-content:space-between}.mtx-datetimepicker-content[mode=landscape] .mtx-calendar{width:440px;height:328px}.mtx-datetimepicker-content[mode=landscape] .mtx-calendar.mtx-calendar-with-time-input{height:416px}.mtx-datetimepicker-content[mode=landscape] .mtx-datetimepicker-content-container-with-actions .mtx-calendar.mtx-calendar-with-time-input{height:356px}@media all and (orientation: landscape){.mtx-datetimepicker-content[mode=auto] .mtx-calendar{width:440px;height:328px}.mtx-datetimepicker-content[mode=auto] .mtx-calendar.mtx-calendar-with-time-input{height:416px}.mtx-datetimepicker-content[mode=auto] .mtx-datetimepicker-content-container-with-actions .mtx-calendar.mtx-calendar-with-time-input{height:356px}}.mtx-datetimepicker-content-touch{display:block;max-height:84vh;box-shadow:var(--mtx-datetimepicker-container-touch-elevation-shadow, 0px 0px 0px 0px rgba(0, 0, 0, .2), 0px 0px 0px 0px rgba(0, 0, 0, .14), 0px 0px 0px 0px rgba(0, 0, 0, .12));border-radius:var(--mtx-datetimepicker-container-touch-shape, var(--mat-sys-corner-extra-large));position:relative;overflow:visible}.mtx-datetimepicker-content-touch.mtx-datetimepicker-content-animations-enabled{animation:_mtx-datetimepicker-content-dialog-enter .15s cubic-bezier(0,0,.2,1)}.mtx-datetimepicker-content-touch .mtx-datetimepicker-content-container{min-height:300px;max-height:850px;min-width:250px;max-width:750px}.mtx-datetimepicker-content-touch .mtx-calendar{width:100%;height:auto}.mtx-datetimepicker-content-touch .mtx-clock{width:50vh;max-width:80%;margin:12px auto}.mtx-datetimepicker-content-exit.mtx-datetimepicker-content-animations-enabled{animation:_mtx-datetimepicker-content-exit .1s linear}@media all and (orientation: landscape){.mtx-datetimepicker-content-touch .mtx-datetimepicker-content-container[mode=auto],.mtx-datetimepicker-content-touch .mtx-datetimepicker-content-container[mode=landscape]{width:120vh;height:80vh}.mtx-datetimepicker-content-touch .mtx-datetimepicker-content-container[mode=auto] .mtx-calendar,.mtx-datetimepicker-content-touch .mtx-datetimepicker-content-container[mode=auto].mtx-datetimepicker-content-container-with-actions .mtx-calendar.mtx-calendar-with-time-input,.mtx-datetimepicker-content-touch .mtx-datetimepicker-content-container[mode=landscape] .mtx-calendar,.mtx-datetimepicker-content-touch .mtx-datetimepicker-content-container[mode=landscape].mtx-datetimepicker-content-container-with-actions .mtx-calendar.mtx-calendar-with-time-input{width:auto;height:100%}.mtx-datetimepicker-content-touch .mtx-datetimepicker-content-container[mode=portrait]{width:64vh;height:80vh}.mtx-datetimepicker-content-touch .mtx-datetimepicker-content-container[mode=portrait] .mtx-calendar{width:100%;height:auto}}@media all and (orientation: portrait){.mtx-datetimepicker-content-touch .mtx-datetimepicker-content-container[mode=auto],.mtx-datetimepicker-content-touch .mtx-datetimepicker-content-container[mode=portrait]{width:80vw;height:120vw}.mtx-datetimepicker-content-touch .mtx-datetimepicker-content-container[mode=auto] .mtx-calendar,.mtx-datetimepicker-content-touch .mtx-datetimepicker-content-container[mode=portrait] .mtx-calendar{width:100%;height:auto}.mtx-datetimepicker-content-touch .mtx-datetimepicker-content-container[mode=auto].mtx-datetimepicker-content-container-with-actions,.mtx-datetimepicker-content-touch .mtx-datetimepicker-content-container[mode=auto].mtx-datetimepicker-content-container-with-time-input,.mtx-datetimepicker-content-touch .mtx-datetimepicker-content-container[mode=portrait].mtx-datetimepicker-content-container-with-actions,.mtx-datetimepicker-content-touch .mtx-datetimepicker-content-container[mode=portrait].mtx-datetimepicker-content-container-with-time-input{height:124vw}.mtx-datetimepicker-content-touch .mtx-datetimepicker-content-container[mode=landscape]{width:90vw;height:64vw}.mtx-datetimepicker-content-touch .mtx-datetimepicker-content-container[mode=landscape] .mtx-calendar{width:auto;height:100%}}\n"]
    }]
  }], () => [], {
    _calendar: [{
      type: ViewChild,
      args: [MtxCalendar, {
        static: true
      }]
    }],
    color: [{
      type: Input
    }]
  });
})();
var _MtxDatetimepicker = class _MtxDatetimepicker {
  /** Classes to be passed to the date picker panel. */
  get panelClass() {
    return this._panelClass;
  }
  set panelClass(value) {
    this._panelClass = coerceStringArray(value);
  }
  /** Whether the calendar is open. */
  get opened() {
    return this._opened;
  }
  set opened(value) {
    value ? this.open() : this.close();
  }
  /** Color palette to use on the datetimepicker's calendar. */
  get color() {
    return this._color || (this.datetimepickerInput ? this.datetimepickerInput.getThemePalette() : void 0);
  }
  set color(value) {
    this._color = value;
  }
  constructor() {
    this._overlay = inject(Overlay);
    this._viewContainerRef = inject(ViewContainerRef);
    this._scrollStrategy = inject(MTX_DATETIMEPICKER_SCROLL_STRATEGY);
    this._dateAdapter = inject(DatetimeAdapter, {
      optional: true
    });
    this._dir = inject(Directionality, {
      optional: true
    });
    this._defaultOptions = inject(MTX_DATETIMEPICKER_DEFAULT_OPTIONS, {
      optional: true
    });
    this._document = inject(DOCUMENT);
    this._injector = inject(Injector);
    this.multiYearSelector = this._defaultOptions?.multiYearSelector ?? false;
    this.twelvehour = this._defaultOptions?.twelvehour ?? false;
    this.showWeekNumbers = this._defaultOptions?.showWeekNumbers ?? false;
    this.startView = this._defaultOptions?.startView ?? "month";
    this.mode = this._defaultOptions?.mode ?? "auto";
    this.timeInterval = this._defaultOptions?.timeInterval ?? 1;
    this.preventSameDateTimeSelection = false;
    this.calendarHeaderComponent = this._defaultOptions?.calendarHeaderComponent;
    this.selectedChanged = new EventEmitter();
    this.openedStream = new EventEmitter();
    this.closedStream = new EventEmitter();
    this.viewChanged = new EventEmitter();
    this._panelClass = coerceStringArray(this._defaultOptions?.panelClass);
    this._opened = false;
    this.id = `mtx-datetimepicker-${datetimepickerUid++}`;
    this._color = this._defaultOptions?.color;
    this._disabledChange = new Subject();
    this._validSelected = null;
    this._focusedElementBeforeOpen = null;
    this._backdropHarnessClass = `${this.id}-backdrop`;
    this._inputStateChanges = Subscription.EMPTY;
    this._actionsPortal = null;
    this.oldValue = null;
    this._type = this._defaultOptions?.type ?? "datetime";
    this.touchUi = this._defaultOptions?.touchUi ?? false;
    this.timeInput = this._defaultOptions?.timeInput ?? false;
    this.timeInputAutoFocus = this._defaultOptions?.timeInputAutoFocus ?? true;
    this.xPosition = "start";
    this.yPosition = "below";
    this.restoreFocus = true;
    if (!this._dateAdapter) {
      throw createMissingDateImplError("DateAdapter");
    }
  }
  /** The date to open the calendar to initially. */
  get startAt() {
    return this._startAt || (this.datetimepickerInput ? this.datetimepickerInput.value : null);
  }
  set startAt(date) {
    this._startAt = this._dateAdapter.getValidDateOrNull(date);
  }
  /** The display type of datetimepicker. */
  get type() {
    return this._type;
  }
  set type(value) {
    this._type = value || "datetime";
  }
  /** Whether the datetimepicker pop-up should be disabled. */
  get disabled() {
    return this._disabled === void 0 && this.datetimepickerInput ? this.datetimepickerInput.disabled : !!this._disabled;
  }
  set disabled(value) {
    if (value !== this._disabled) {
      this._disabled = value;
      this._disabledChange.next(value);
    }
  }
  /** The currently selected date. */
  get _selected() {
    return this._validSelected;
  }
  set _selected(value) {
    this._validSelected = value;
  }
  /** The minimum selectable date. */
  get _minDate() {
    return this.datetimepickerInput && this.datetimepickerInput.min;
  }
  /** The maximum selectable date. */
  get _maxDate() {
    return this.datetimepickerInput && this.datetimepickerInput.max;
  }
  get _dateFilter() {
    return this.datetimepickerInput && this.datetimepickerInput._dateFilter;
  }
  _viewChanged(view) {
    this.viewChanged.emit(view);
  }
  ngOnDestroy() {
    this._destroyOverlay();
    this.close();
    this._inputStateChanges.unsubscribe();
    this._disabledChange.complete();
  }
  /** Selects the given date */
  _select(date) {
    this.oldValue = this._selected;
    this._selected = date;
    if (!this._actionsPortal) {
      if (!this._dateAdapter.sameDatetime(this.oldValue, this._selected)) {
        this.selectedChanged.emit(date);
      }
    }
  }
  _selectManually() {
    if (!this._selected) {
      this._selected = this._dateAdapter.today();
      this.selectedChanged.emit(this._selected);
    } else {
      this.selectedChanged.emit(this._selected || this.oldValue);
    }
    this.close();
  }
  _clearSelected() {
    this.oldValue = null;
    this._selected = null;
    this.selectedChanged.emit();
    this.close();
  }
  /**
   * Register an input with this datetimepicker.
   * @param input The datetimepicker input to register with this datetimepicker.
   */
  _registerInput(input) {
    if (this.datetimepickerInput) {
      throw Error("A MtxDatetimepicker can only be associated with a single input.");
    }
    this.datetimepickerInput = input;
    this._inputStateChanges = this.datetimepickerInput._valueChange.subscribe((value) => this._selected = value);
  }
  /** Open the calendar. */
  open() {
    if (this._opened || this.disabled) {
      return;
    }
    if (!this.datetimepickerInput) {
      throw Error("Attempted to open an MtxDatetimepicker with no associated input.");
    }
    this._focusedElementBeforeOpen = _getFocusedElementPierceShadowDom();
    this._openOverlay();
    this._opened = true;
    this.openedStream.emit();
  }
  /** Close the calendar. */
  close() {
    if (!this._opened) {
      return;
    }
    const canRestoreFocus = this.restoreFocus && this._focusedElementBeforeOpen && typeof this._focusedElementBeforeOpen.focus === "function";
    const completeClose = () => {
      if (this._opened) {
        this._opened = false;
        this.closedStream.emit();
      }
    };
    if (this._componentRef) {
      const {
        instance,
        location
      } = this._componentRef;
      instance._animationDone.pipe(take(1)).subscribe(() => {
        const activeElement = this._document.activeElement;
        if (canRestoreFocus && (!activeElement || activeElement === this._document.activeElement || location.nativeElement.contains(activeElement))) {
          this._focusedElementBeforeOpen.focus();
        }
        this._focusedElementBeforeOpen = null;
        this._destroyOverlay();
      });
      instance._startExitAnimation();
    }
    if (canRestoreFocus) {
      setTimeout(completeClose);
    } else {
      completeClose();
    }
  }
  /**
   * Forwards relevant values from the datetimepicker to the
   * datetimepicker content inside the overlay.
   */
  _forwardContentValues(instance) {
    instance.datetimepicker = this;
    instance.color = this.color;
    instance._dialogLabelId = this.datetimepickerInput.getOverlayLabelId();
    instance.type = this.type;
    instance.view = this.startView;
    instance._assignActions(this._actionsPortal, false);
  }
  /** Opens the overlay with the calendar. */
  _openOverlay() {
    this._destroyOverlay();
    const isDialog = this.touchUi;
    const labelId = this.datetimepickerInput.getOverlayLabelId();
    const portal = new ComponentPortal(MtxDatetimepickerContent, this._viewContainerRef);
    const overlayRef = this._overlayRef = this._overlay.create(new OverlayConfig({
      positionStrategy: isDialog ? this._getDialogStrategy() : this._getDropdownStrategy(),
      hasBackdrop: true,
      backdropClass: [isDialog ? "cdk-overlay-dark-backdrop" : "mat-overlay-transparent-backdrop", this._backdropHarnessClass],
      direction: this._dir || void 0,
      scrollStrategy: isDialog ? this._overlay.scrollStrategies.block() : this._scrollStrategy(),
      panelClass: `mtx-datetimepicker-${isDialog ? "dialog" : "popup"}`
    }));
    const overlayElement = overlayRef.overlayElement;
    overlayElement.setAttribute("role", "dialog");
    if (labelId) {
      overlayElement.setAttribute("aria-labelledby", labelId);
    }
    if (isDialog) {
      overlayElement.setAttribute("aria-modal", "true");
    }
    this._getCloseStream(overlayRef).subscribe((event) => {
      if (event) {
        event.preventDefault();
      }
      this.close();
    });
    this._componentRef = overlayRef.attach(portal);
    this._forwardContentValues(this._componentRef.instance);
    if (!isDialog) {
      afterNextRender(() => {
        overlayRef.updatePosition();
      }, {
        injector: this._injector
      });
    }
  }
  /** Destroys the current overlay. */
  _destroyOverlay() {
    if (this._overlayRef) {
      this._overlayRef.dispose();
      this._overlayRef = this._componentRef = null;
    }
  }
  /** Gets a position strategy that will open the calendar as a dropdown. */
  _getDialogStrategy() {
    return this._overlay.position().global().centerHorizontally().centerVertically();
  }
  /** Gets a position strategy that will open the calendar as a dropdown. */
  _getDropdownStrategy() {
    const strategy = this._overlay.position().flexibleConnectedTo(this.datetimepickerInput.getConnectedOverlayOrigin()).withTransformOriginOn(".mtx-datetimepicker-content").withFlexibleDimensions(false).withViewportMargin(8).withLockedPosition();
    return this._setConnectedPositions(strategy);
  }
  /**
   * Sets the positions of the datetimepicker in dropdown mode based on the current configuration.
   */
  _setConnectedPositions(strategy) {
    const primaryX = this.xPosition === "end" ? "end" : "start";
    const secondaryX = primaryX === "start" ? "end" : "start";
    const primaryY = this.yPosition === "above" ? "bottom" : "top";
    const secondaryY = primaryY === "top" ? "bottom" : "top";
    return strategy.withPositions([{
      originX: primaryX,
      originY: secondaryY,
      overlayX: primaryX,
      overlayY: primaryY
    }, {
      originX: primaryX,
      originY: primaryY,
      overlayX: primaryX,
      overlayY: secondaryY
    }, {
      originX: secondaryX,
      originY: secondaryY,
      overlayX: secondaryX,
      overlayY: primaryY
    }, {
      originX: secondaryX,
      originY: primaryY,
      overlayX: secondaryX,
      overlayY: secondaryY
    }]);
  }
  /** Gets an observable that will emit when the overlay is supposed to be closed. */
  _getCloseStream(overlayRef) {
    return merge(overlayRef.backdropClick(), overlayRef.detachments(), overlayRef.keydownEvents().pipe(filter((event) => {
      return event.keyCode === ESCAPE && !hasModifierKey(event) || this.datetimepickerInput && hasModifierKey(event, "altKey") && event.keyCode === UP_ARROW;
    })));
  }
  /**
   * Registers a portal containing action buttons with the datetimepicker.
   * @param portal Portal to be registered.
   */
  registerActions(portal) {
    if (this._actionsPortal) {
      throw Error("A MtxDatetimepicker can only be associated with a single actions row.");
    }
    this._actionsPortal = portal;
    this._componentRef?.instance._assignActions(portal, true);
  }
  /**
   * Removes a portal containing action buttons from the datetimepicker.
   * @param portal Portal to be removed.
   */
  removeActions(portal) {
    if (portal === this._actionsPortal) {
      this._actionsPortal = null;
      this._componentRef?.instance._assignActions(null, true);
    }
  }
};
_MtxDatetimepicker.\u0275fac = function MtxDatetimepicker_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MtxDatetimepicker)();
};
_MtxDatetimepicker.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _MtxDatetimepicker,
  selectors: [["mtx-datetimepicker"]],
  inputs: {
    multiYearSelector: [2, "multiYearSelector", "multiYearSelector", booleanAttribute],
    twelvehour: [2, "twelvehour", "twelvehour", booleanAttribute],
    showWeekNumbers: [2, "showWeekNumbers", "showWeekNumbers", booleanAttribute],
    startView: "startView",
    mode: "mode",
    timeInterval: [2, "timeInterval", "timeInterval", numberAttribute],
    preventSameDateTimeSelection: [2, "preventSameDateTimeSelection", "preventSameDateTimeSelection", booleanAttribute],
    calendarHeaderComponent: "calendarHeaderComponent",
    panelClass: "panelClass",
    opened: [2, "opened", "opened", booleanAttribute],
    color: "color",
    startAt: "startAt",
    type: "type",
    touchUi: [2, "touchUi", "touchUi", booleanAttribute],
    timeInput: [2, "timeInput", "timeInput", booleanAttribute],
    timeInputAutoFocus: [2, "timeInputAutoFocus", "timeInputAutoFocus", booleanAttribute],
    disabled: [2, "disabled", "disabled", booleanAttribute],
    xPosition: "xPosition",
    yPosition: "yPosition",
    restoreFocus: [2, "restoreFocus", "restoreFocus", booleanAttribute]
  },
  outputs: {
    selectedChanged: "selectedChanged",
    openedStream: "opened",
    closedStream: "closed",
    viewChanged: "viewChanged"
  },
  exportAs: ["mtxDatetimepicker"],
  decls: 0,
  vars: 0,
  template: function MtxDatetimepicker_Template(rf, ctx) {
  },
  encapsulation: 2,
  changeDetection: 0
});
var MtxDatetimepicker = _MtxDatetimepicker;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MtxDatetimepicker, [{
    type: Component,
    args: [{
      selector: "mtx-datetimepicker",
      exportAs: "mtxDatetimepicker",
      template: "",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      preserveWhitespaces: false
    }]
  }], () => [], {
    multiYearSelector: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    twelvehour: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showWeekNumbers: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    startView: [{
      type: Input
    }],
    mode: [{
      type: Input
    }],
    timeInterval: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    preventSameDateTimeSelection: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    calendarHeaderComponent: [{
      type: Input
    }],
    selectedChanged: [{
      type: Output
    }],
    openedStream: [{
      type: Output,
      args: ["opened"]
    }],
    closedStream: [{
      type: Output,
      args: ["closed"]
    }],
    viewChanged: [{
      type: Output
    }],
    panelClass: [{
      type: Input
    }],
    opened: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    color: [{
      type: Input
    }],
    startAt: [{
      type: Input
    }],
    type: [{
      type: Input
    }],
    touchUi: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    timeInput: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    timeInputAutoFocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    xPosition: [{
      type: Input
    }],
    yPosition: [{
      type: Input
    }],
    restoreFocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var MAT_DATETIMEPICKER_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MtxDatetimepickerInput),
  multi: true
};
var MAT_DATETIMEPICKER_VALIDATORS = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MtxDatetimepickerInput),
  multi: true
};
var MtxDatetimepickerInputEvent = class {
  constructor(target, targetElement) {
    this.target = target;
    this.targetElement = targetElement;
    this.value = this.target.value;
  }
};
var _MtxDatetimepickerInput = class _MtxDatetimepickerInput {
  constructor() {
    this._elementRef = inject(ElementRef);
    this._dateAdapter = inject(DatetimeAdapter, {
      optional: true
    });
    this._dateFormats = inject(MTX_DATETIME_FORMATS, {
      optional: true
    });
    this._formField = inject(MatFormField, {
      optional: true
    });
    this.dateChange = new EventEmitter();
    this.dateInput = new EventEmitter();
    this._valueChange = new EventEmitter();
    this._disabledChange = new EventEmitter();
    this._datetimepickerSubscription = Subscription.EMPTY;
    this._localeSubscription = Subscription.EMPTY;
    this._lastValueValid = false;
    this._onTouched = () => {
    };
    this._cvaOnChange = () => {
    };
    this._validatorOnChange = () => {
    };
    this._parseValidator = () => {
      return this._lastValueValid ? null : {
        mtxDatetimepickerParse: {
          text: this._elementRef.nativeElement.value
        }
      };
    };
    this._minValidator = (control) => {
      const controlValue = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(control.value));
      return !this.min || !controlValue || this._dateAdapter.compareDatetime(this.min, controlValue) <= 0 ? null : {
        mtxDatetimepickerMin: {
          min: this.min,
          actual: controlValue
        }
      };
    };
    this._maxValidator = (control) => {
      const controlValue = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(control.value));
      return !this.max || !controlValue || this._dateAdapter.compareDatetime(this.max, controlValue) >= 0 ? null : {
        mtxDatetimepickerMax: {
          max: this.max,
          actual: controlValue
        }
      };
    };
    this._filterValidator = (control) => {
      const controlValue = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(control.value));
      return !this._dateFilter || !controlValue || this._dateFilter(controlValue, MtxDatetimepickerFilterType.DATE) ? null : {
        mtxDatetimepickerFilter: true
      };
    };
    this._validator = Validators.compose([this._parseValidator, this._minValidator, this._maxValidator, this._filterValidator]);
    const _dateAdapter = this._dateAdapter;
    if (!this._dateAdapter) {
      throw createMissingDateImplError("DatetimeAdapter");
    }
    if (!this._dateFormats) {
      throw createMissingDateImplError("MTX_DATETIME_FORMATS");
    }
    this._localeSubscription = _dateAdapter.localeChanges.subscribe(() => {
      this.value = this._dateAdapter.deserialize(this.value);
    });
  }
  /** The datetimepicker that this input is associated with. */
  set mtxDatetimepicker(value) {
    this.registerDatetimepicker(value);
  }
  set mtxDatetimepickerFilter(filter2) {
    this._dateFilter = filter2;
    this._validatorOnChange();
  }
  /** The value of the input. */
  get value() {
    return this._value;
  }
  set value(value) {
    value = this._dateAdapter.deserialize(value);
    this._lastValueValid = !value || this._dateAdapter.isValid(value);
    value = this._dateAdapter.getValidDateOrNull(value);
    const oldDate = this.value;
    this._value = value;
    this._formatValue(value);
    setTimeout(() => {
      if (!this._dateAdapter.sameDatetime(oldDate, value)) {
        this._valueChange.emit(value);
      }
    });
  }
  /** The minimum valid date. */
  get min() {
    return this._min;
  }
  set min(value) {
    this._min = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    this._validatorOnChange();
  }
  /** The maximum valid date. */
  get max() {
    return this._max;
  }
  set max(value) {
    this._max = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    this._validatorOnChange();
  }
  /** Whether the datetimepicker-input is disabled. */
  get disabled() {
    return !!this._disabled;
  }
  set disabled(value) {
    if (this._disabled !== value) {
      this._disabled = value;
      this._disabledChange.emit(value);
    }
  }
  ngAfterContentInit() {
    if (this._datetimepicker) {
      this._datetimepickerSubscription = this._datetimepicker.selectedChanged.subscribe((selected) => {
        this.value = selected;
        this._cvaOnChange(selected);
        this._onTouched();
        this.dateInput.emit(new MtxDatetimepickerInputEvent(this, this._elementRef.nativeElement));
        this.dateChange.emit(new MtxDatetimepickerInputEvent(this, this._elementRef.nativeElement));
      });
    }
  }
  ngOnDestroy() {
    this._datetimepickerSubscription.unsubscribe();
    this._localeSubscription.unsubscribe();
    this._valueChange.complete();
    this._disabledChange.complete();
  }
  registerOnValidatorChange(fn) {
    this._validatorOnChange = fn;
  }
  validate(c) {
    return this._validator ? this._validator(c) : null;
  }
  /**
   * Gets the element that the datetimepicker popup should be connected to.
   * @return The element to connect the popup to.
   */
  getConnectedOverlayOrigin() {
    return this._formField ? this._formField.getConnectedOverlayOrigin() : this._elementRef;
  }
  /** Gets the ID of an element that should be used a description for the calendar overlay. */
  getOverlayLabelId() {
    if (this._formField) {
      return this._formField.getLabelId();
    }
    return this._elementRef.nativeElement.getAttribute("aria-labelledby");
  }
  // Implemented as part of ControlValueAccessor
  writeValue(value) {
    this.value = value;
  }
  // Implemented as part of ControlValueAccessor
  registerOnChange(fn) {
    this._cvaOnChange = fn;
  }
  // Implemented as part of ControlValueAccessor
  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  // Implemented as part of ControlValueAccessor
  setDisabledState(disabled) {
    this.disabled = disabled;
  }
  _onKeydown(event) {
    if (event.altKey && event.keyCode === DOWN_ARROW) {
      this._datetimepicker.open();
      event.preventDefault();
    }
  }
  _onInput(value) {
    let date = this._dateAdapter.parse(value, this.getParseFormat());
    this._lastValueValid = !date || this._dateAdapter.isValid(date);
    date = this._dateAdapter.getValidDateOrNull(date);
    this._value = date;
    this._cvaOnChange(date);
    this._valueChange.emit(date);
    this.dateInput.emit(new MtxDatetimepickerInputEvent(this, this._elementRef.nativeElement));
  }
  _onChange() {
    this.dateChange.emit(new MtxDatetimepickerInputEvent(this, this._elementRef.nativeElement));
  }
  /** Handles blur events on the input. */
  _onBlur() {
    if (this.value) {
      this._formatValue(this.value);
    }
    this._onTouched();
  }
  registerDatetimepicker(value) {
    if (value) {
      this._datetimepicker = value;
      this._datetimepicker._registerInput(this);
    }
  }
  getDisplayFormat() {
    switch (this._datetimepicker.type) {
      case "date":
        return this._dateFormats.display.dateInput;
      case "datetime":
        return this._dateFormats.display.datetimeInput;
      case "time":
        return this._dateFormats.display.timeInput;
      case "month":
        return this._dateFormats.display.monthInput;
      case "year":
        return this._dateFormats.display.yearInput;
    }
  }
  getParseFormat() {
    let parseFormat;
    switch (this._datetimepicker.type) {
      case "date":
        parseFormat = this._dateFormats.parse.dateInput;
        break;
      case "datetime":
        parseFormat = this._dateFormats.parse.datetimeInput;
        break;
      case "time":
        parseFormat = this._dateFormats.parse.timeInput;
        break;
      case "month":
        parseFormat = this._dateFormats.parse.monthInput;
        break;
      case "year":
        parseFormat = this._dateFormats.parse.yearInput;
        break;
    }
    if (!parseFormat) {
      parseFormat = this._dateFormats.parse.dateInput;
    }
    return parseFormat;
  }
  /** Formats a value and sets it on the input element. */
  _formatValue(value) {
    this._elementRef.nativeElement.value = value ? this._dateAdapter.format(value, this.getDisplayFormat()) : "";
  }
  /** Returns the palette used by the input's form field, if any. */
  getThemePalette() {
    return this._formField ? this._formField.color : void 0;
  }
};
_MtxDatetimepickerInput.\u0275fac = function MtxDatetimepickerInput_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MtxDatetimepickerInput)();
};
_MtxDatetimepickerInput.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _MtxDatetimepickerInput,
  selectors: [["input", "mtxDatetimepicker", ""]],
  hostVars: 5,
  hostBindings: function MtxDatetimepickerInput_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("input", function MtxDatetimepickerInput_input_HostBindingHandler($event) {
        return ctx._onInput($event.target.value);
      })("change", function MtxDatetimepickerInput_change_HostBindingHandler() {
        return ctx._onChange();
      })("blur", function MtxDatetimepickerInput_blur_HostBindingHandler() {
        return ctx._onBlur();
      })("keydown", function MtxDatetimepickerInput_keydown_HostBindingHandler($event) {
        return ctx._onKeydown($event);
      });
    }
    if (rf & 2) {
      \u0275\u0275domProperty("disabled", ctx.disabled);
      \u0275\u0275attribute("aria-haspopup", true)("aria-owns", (ctx._datetimepicker == null ? null : ctx._datetimepicker.opened) && ctx._datetimepicker.id || null)("min", ctx.min ? ctx._dateAdapter.toIso8601(ctx.min) : null)("max", ctx.max ? ctx._dateAdapter.toIso8601(ctx.max) : null);
    }
  },
  inputs: {
    mtxDatetimepicker: "mtxDatetimepicker",
    mtxDatetimepickerFilter: "mtxDatetimepickerFilter",
    value: "value",
    min: "min",
    max: "max",
    disabled: [2, "disabled", "disabled", booleanAttribute]
  },
  outputs: {
    dateChange: "dateChange",
    dateInput: "dateInput"
  },
  exportAs: ["mtxDatetimepickerInput"],
  features: [\u0275\u0275ProvidersFeature([MAT_DATETIMEPICKER_VALUE_ACCESSOR, MAT_DATETIMEPICKER_VALIDATORS, {
    provide: MAT_INPUT_VALUE_ACCESSOR,
    useExisting: _MtxDatetimepickerInput
  }])]
});
var MtxDatetimepickerInput = _MtxDatetimepickerInput;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MtxDatetimepickerInput, [{
    type: Directive,
    args: [{
      selector: "input[mtxDatetimepicker]",
      providers: [MAT_DATETIMEPICKER_VALUE_ACCESSOR, MAT_DATETIMEPICKER_VALIDATORS, {
        provide: MAT_INPUT_VALUE_ACCESSOR,
        useExisting: MtxDatetimepickerInput
      }],
      host: {
        "[attr.aria-haspopup]": "true",
        "[attr.aria-owns]": "(_datetimepicker?.opened && _datetimepicker.id) || null",
        "[attr.min]": "min ? _dateAdapter.toIso8601(min) : null",
        "[attr.max]": "max ? _dateAdapter.toIso8601(max) : null",
        "[disabled]": "disabled",
        "(input)": "_onInput($event.target.value)",
        "(change)": "_onChange()",
        "(blur)": "_onBlur()",
        "(keydown)": "_onKeydown($event)"
      },
      exportAs: "mtxDatetimepickerInput"
    }]
  }], () => [], {
    dateChange: [{
      type: Output
    }],
    dateInput: [{
      type: Output
    }],
    mtxDatetimepicker: [{
      type: Input
    }],
    mtxDatetimepickerFilter: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    min: [{
      type: Input
    }],
    max: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var _MtxDatetimepickerToggleIcon = class _MtxDatetimepickerToggleIcon {
};
_MtxDatetimepickerToggleIcon.\u0275fac = function MtxDatetimepickerToggleIcon_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MtxDatetimepickerToggleIcon)();
};
_MtxDatetimepickerToggleIcon.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _MtxDatetimepickerToggleIcon,
  selectors: [["", "mtxDatetimepickerToggleIcon", ""]]
});
var MtxDatetimepickerToggleIcon = _MtxDatetimepickerToggleIcon;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MtxDatetimepickerToggleIcon, [{
    type: Directive,
    args: [{
      selector: "[mtxDatetimepickerToggleIcon]"
    }]
  }], null, null);
})();
var _MtxDatetimepickerToggle = class _MtxDatetimepickerToggle {
  /** Whether the toggle button is disabled. */
  get disabled() {
    return this._disabled === void 0 ? this.datetimepicker.disabled : !!this._disabled;
  }
  set disabled(value) {
    this._disabled = value;
  }
  constructor() {
    this._intl = inject(MtxDatetimepickerIntl);
    this._changeDetectorRef = inject(ChangeDetectorRef);
    this._stateChanges = Subscription.EMPTY;
    const defaultTabIndex = inject(new HostAttributeToken("tabindex"), {
      optional: true
    });
    const parsedTabIndex = Number(defaultTabIndex);
    this.tabIndex = parsedTabIndex || parsedTabIndex === 0 ? parsedTabIndex : null;
  }
  ngOnChanges(changes) {
    if (changes.datetimepicker) {
      this._watchStateChanges();
    }
  }
  ngOnDestroy() {
    this._stateChanges.unsubscribe();
  }
  ngAfterContentInit() {
    this._watchStateChanges();
  }
  _open(event) {
    if (this.datetimepicker && !this.disabled) {
      this.datetimepicker.open();
      event.stopPropagation();
    }
  }
  _watchStateChanges() {
    const datetimepickerDisabled = this.datetimepicker ? this.datetimepicker._disabledChange : of();
    const inputDisabled = this.datetimepicker && this.datetimepicker.datetimepickerInput ? this.datetimepicker.datetimepickerInput._disabledChange : of();
    const datetimepickerToggled = this.datetimepicker ? merge(this.datetimepicker.openedStream, this.datetimepicker.closedStream) : of();
    this._stateChanges.unsubscribe();
    this._stateChanges = merge(this._intl.changes, datetimepickerDisabled, inputDisabled, datetimepickerToggled).subscribe(() => this._changeDetectorRef.markForCheck());
  }
};
_MtxDatetimepickerToggle.\u0275fac = function MtxDatetimepickerToggle_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MtxDatetimepickerToggle)();
};
_MtxDatetimepickerToggle.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _MtxDatetimepickerToggle,
  selectors: [["mtx-datetimepicker-toggle"]],
  contentQueries: function MtxDatetimepickerToggle_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      \u0275\u0275contentQuery(dirIndex, MtxDatetimepickerToggleIcon, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._customIcon = _t.first);
    }
  },
  viewQuery: function MtxDatetimepickerToggle_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c3, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._button = _t.first);
    }
  },
  hostAttrs: [1, "mtx-datetimepicker-toggle"],
  hostVars: 8,
  hostBindings: function MtxDatetimepickerToggle_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function MtxDatetimepickerToggle_click_HostBindingHandler($event) {
        return ctx._open($event);
      });
    }
    if (rf & 2) {
      \u0275\u0275attribute("tabindex", null)("data-mtx-calendar", ctx.datetimepicker ? ctx.datetimepicker.id : null);
      \u0275\u0275classProp("mtx-datetimepicker-toggle-active", ctx.datetimepicker && ctx.datetimepicker.opened)("mat-accent", ctx.datetimepicker && ctx.datetimepicker.color === "accent")("mat-warn", ctx.datetimepicker && ctx.datetimepicker.color === "warn");
    }
  },
  inputs: {
    datetimepicker: [0, "for", "datetimepicker"],
    tabIndex: "tabIndex",
    ariaLabel: [0, "aria-label", "ariaLabel"],
    disabled: [2, "disabled", "disabled", booleanAttribute],
    disableRipple: [2, "disableRipple", "disableRipple", booleanAttribute]
  },
  exportAs: ["mtxDatetimepickerToggle"],
  features: [\u0275\u0275NgOnChangesFeature],
  ngContentSelectors: _c5,
  decls: 4,
  vars: 6,
  consts: [["button", ""], ["mat-icon-button", "", "type", "button", 3, "disabled", "disableRipple"], ["viewBox", "0 0 24 24", "width", "24px", "height", "24px", "fill", "currentColor", "focusable", "false", 1, "mtx-datetimepicker-toggle-default-icon"], ["d", "M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z"], ["d", "M15,13H16.5V15.82L18.94,17.23L18.19,18.53L15,16.69V13M19,8H5V19H9.67C9.24,18.09 9,17.07 9,16A7,7 0 0,1 16,9C17.07,9 18.09,9.24 19,9.67V8M5,21C3.89,21 3,20.1 3,19V5C3,3.89 3.89,3 5,3H6V1H8V3H16V1H18V3H19A2,2 0 0,1 21,5V11.1C22.24,12.36 23,14.09 23,16A7,7 0 0,1 16,23C14.09,23 12.36,22.24 11.1,21H5M16,11.15A4.85,4.85 0 0,0 11.15,16C11.15,18.68 13.32,20.85 16,20.85A4.85,4.85 0 0,0 20.85,16C20.85,13.32 18.68,11.15 16,11.15Z"], ["d", "M0 0h24v24H0z", "fill", "none"], ["d", "M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"]],
  template: function MtxDatetimepickerToggle_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef(_c4);
      \u0275\u0275elementStart(0, "button", 1, 0);
      \u0275\u0275conditionalCreate(2, MtxDatetimepickerToggle_Conditional_2_Template, 3, 1);
      \u0275\u0275projection(3);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("disabled", ctx.disabled)("disableRipple", ctx.disableRipple);
      \u0275\u0275attribute("aria-haspopup", ctx.datetimepicker ? "dialog" : null)("aria-label", ctx.ariaLabel || ctx._intl.openCalendarLabel)("tabindex", ctx.disabled ? -1 : ctx.tabIndex);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(!ctx._customIcon ? 2 : -1);
    }
  },
  dependencies: [MatIconButton],
  styles: [".mtx-datetimepicker-toggle{pointer-events:auto;color:var(--mtx-datetimepicker-toggle-icon-color, var(--mat-sys-on-surface-variant))}.mtx-datetimepicker-toggle-active{color:var(--mtx-datetimepicker-toggle-active-state-icon-color, var(--mat-sys-on-surface-variant))}@media (forced-colors: active){.mtx-datetimepicker-toggle-default-icon{color:CanvasText}}\n"],
  encapsulation: 2,
  changeDetection: 0
});
var MtxDatetimepickerToggle = _MtxDatetimepickerToggle;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MtxDatetimepickerToggle, [{
    type: Component,
    args: [{
      selector: "mtx-datetimepicker-toggle",
      host: {
        "class": "mtx-datetimepicker-toggle",
        "[attr.tabindex]": "null",
        "[class.mtx-datetimepicker-toggle-active]": "datetimepicker && datetimepicker.opened",
        "[class.mat-accent]": 'datetimepicker && datetimepicker.color === "accent"',
        "[class.mat-warn]": 'datetimepicker && datetimepicker.color === "warn"',
        // Used by the test harness to tie this toggle to its datetimepicker.
        "[attr.data-mtx-calendar]": "datetimepicker ? datetimepicker.id : null",
        // Bind the `click` on the host, rather than the inner `button`, so that we can call
        // `stopPropagation` on it without affecting the user's `click` handlers. We need to stop
        // it so that the input doesn't get focused automatically by the form field (See #21836).
        "(click)": "_open($event)"
      },
      exportAs: "mtxDatetimepickerToggle",
      encapsulation: ViewEncapsulation.None,
      preserveWhitespaces: false,
      changeDetection: ChangeDetectionStrategy.OnPush,
      imports: [MatIconButton],
      template: `<button #button
  mat-icon-button
  type="button"
  [attr.aria-haspopup]="datetimepicker ? 'dialog' : null"
  [attr.aria-label]="ariaLabel || _intl.openCalendarLabel"
  [attr.tabindex]="disabled ? -1 : tabIndex"
  [disabled]="disabled"
  [disableRipple]="disableRipple">

  @if (!_customIcon) {
    @switch (datetimepicker.type) {
      @case ('time') {
        <svg
          class="mtx-datetimepicker-toggle-default-icon"
          viewBox="0 0 24 24"
          width="24px"
          height="24px"
          fill="currentColor"
          focusable="false">
          <path d="M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z" />
        </svg>
      }
      @case ('datetime') {
        <svg
          class="mtx-datetimepicker-toggle-default-icon"
          viewBox="0 0 24 24"
          width="24px"
          height="24px"
          fill="currentColor"
          focusable="false">
          <path d="M15,13H16.5V15.82L18.94,17.23L18.19,18.53L15,16.69V13M19,8H5V19H9.67C9.24,18.09 9,17.07 9,16A7,7 0 0,1 16,9C17.07,9 18.09,9.24 19,9.67V8M5,21C3.89,21 3,20.1 3,19V5C3,3.89 3.89,3 5,3H6V1H8V3H16V1H18V3H19A2,2 0 0,1 21,5V11.1C22.24,12.36 23,14.09 23,16A7,7 0 0,1 16,23C14.09,23 12.36,22.24 11.1,21H5M16,11.15A4.85,4.85 0 0,0 11.15,16C11.15,18.68 13.32,20.85 16,20.85A4.85,4.85 0 0,0 20.85,16C20.85,13.32 18.68,11.15 16,11.15Z" />
        </svg>
      }
      @default {
        <svg
          class="mtx-datetimepicker-toggle-default-icon"
          viewBox="0 0 24 24"
          width="24px"
          height="24px"
          fill="currentColor"
          focusable="false">
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
        </svg>
      }
    }
  }

  <ng-content select="[mtxDatetimepickerToggleIcon]"></ng-content>
</button>
`,
      styles: [".mtx-datetimepicker-toggle{pointer-events:auto;color:var(--mtx-datetimepicker-toggle-icon-color, var(--mat-sys-on-surface-variant))}.mtx-datetimepicker-toggle-active{color:var(--mtx-datetimepicker-toggle-active-state-icon-color, var(--mat-sys-on-surface-variant))}@media (forced-colors: active){.mtx-datetimepicker-toggle-default-icon{color:CanvasText}}\n"]
    }]
  }], () => [], {
    datetimepicker: [{
      type: Input,
      args: ["for"]
    }],
    tabIndex: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disableRipple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    _customIcon: [{
      type: ContentChild,
      args: [MtxDatetimepickerToggleIcon]
    }],
    _button: [{
      type: ViewChild,
      args: ["button"]
    }]
  });
})();
var _MtxDatetimepickerApply = class _MtxDatetimepickerApply {
  constructor() {
    this._datetimepicker = inject(MtxDatetimepicker);
  }
};
_MtxDatetimepickerApply.\u0275fac = function MtxDatetimepickerApply_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MtxDatetimepickerApply)();
};
_MtxDatetimepickerApply.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _MtxDatetimepickerApply,
  selectors: [["", "mtxDatetimepickerApply", ""]],
  hostBindings: function MtxDatetimepickerApply_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function MtxDatetimepickerApply_click_HostBindingHandler() {
        return ctx._datetimepicker._selectManually();
      });
    }
  }
});
var MtxDatetimepickerApply = _MtxDatetimepickerApply;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MtxDatetimepickerApply, [{
    type: Directive,
    args: [{
      selector: "[mtxDatetimepickerApply]",
      host: {
        "(click)": "_datetimepicker._selectManually()"
      }
    }]
  }], null, null);
})();
var _MtxDatetimepickerCancel = class _MtxDatetimepickerCancel {
  constructor() {
    this._datetimepicker = inject(MtxDatetimepicker);
  }
};
_MtxDatetimepickerCancel.\u0275fac = function MtxDatetimepickerCancel_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MtxDatetimepickerCancel)();
};
_MtxDatetimepickerCancel.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _MtxDatetimepickerCancel,
  selectors: [["", "mtxDatetimepickerCancel", ""]],
  hostBindings: function MtxDatetimepickerCancel_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function MtxDatetimepickerCancel_click_HostBindingHandler() {
        return ctx._datetimepicker.close();
      });
    }
  }
});
var MtxDatetimepickerCancel = _MtxDatetimepickerCancel;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MtxDatetimepickerCancel, [{
    type: Directive,
    args: [{
      selector: "[mtxDatetimepickerCancel]",
      host: {
        "(click)": "_datetimepicker.close()"
      }
    }]
  }], null, null);
})();
var _MtxDatetimepickerClear = class _MtxDatetimepickerClear {
  constructor() {
    this._datetimepicker = inject(MtxDatetimepicker);
  }
};
_MtxDatetimepickerClear.\u0275fac = function MtxDatetimepickerClear_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MtxDatetimepickerClear)();
};
_MtxDatetimepickerClear.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _MtxDatetimepickerClear,
  selectors: [["", "mtxDatetimepickerClear", ""]],
  hostBindings: function MtxDatetimepickerClear_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function MtxDatetimepickerClear_click_HostBindingHandler() {
        return ctx._datetimepicker._clearSelected();
      });
    }
  }
});
var MtxDatetimepickerClear = _MtxDatetimepickerClear;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MtxDatetimepickerClear, [{
    type: Directive,
    args: [{
      selector: "[mtxDatetimepickerClear]",
      host: {
        "(click)": "_datetimepicker._clearSelected()"
      }
    }]
  }], null, null);
})();
var _MtxDatetimepickerActions = class _MtxDatetimepickerActions {
  constructor() {
    this._datetimepicker = inject(MtxDatetimepicker);
    this._viewContainerRef = inject(ViewContainerRef);
  }
  ngAfterViewInit() {
    this._portal = new TemplatePortal(this._template, this._viewContainerRef);
    this._datetimepicker.registerActions(this._portal);
  }
  ngOnDestroy() {
    this._datetimepicker.removeActions(this._portal);
    if (this._portal && this._portal.isAttached) {
      this._portal?.detach();
    }
  }
};
_MtxDatetimepickerActions.\u0275fac = function MtxDatetimepickerActions_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MtxDatetimepickerActions)();
};
_MtxDatetimepickerActions.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _MtxDatetimepickerActions,
  selectors: [["mtx-datetimepicker-actions"]],
  viewQuery: function MtxDatetimepickerActions_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(TemplateRef, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._template = _t.first);
    }
  },
  ngContentSelectors: _c6,
  decls: 1,
  vars: 0,
  consts: [[1, "mtx-datetimepicker-actions"]],
  template: function MtxDatetimepickerActions_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275domTemplate(0, MtxDatetimepickerActions_ng_template_0_Template, 2, 0, "ng-template");
    }
  },
  styles: [".mtx-datetimepicker-actions{position:relative;display:flex;justify-content:flex-end;align-items:center;padding:0 8px 8px}.mtx-datetimepicker-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mtx-datetimepicker-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}\n"],
  encapsulation: 2,
  changeDetection: 0
});
var MtxDatetimepickerActions = _MtxDatetimepickerActions;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MtxDatetimepickerActions, [{
    type: Component,
    args: [{
      selector: "mtx-datetimepicker-actions",
      template: `
    <ng-template>
      <div class="mtx-datetimepicker-actions">
        <ng-content></ng-content>
      </div>
    </ng-template>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      styles: [".mtx-datetimepicker-actions{position:relative;display:flex;justify-content:flex-end;align-items:center;padding:0 8px 8px}.mtx-datetimepicker-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mtx-datetimepicker-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}\n"]
    }]
  }], null, {
    _template: [{
      type: ViewChild,
      args: [TemplateRef]
    }]
  });
})();
var _MtxDatetimepickerModule = class _MtxDatetimepickerModule {
};
_MtxDatetimepickerModule.\u0275fac = function MtxDatetimepickerModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MtxDatetimepickerModule)();
};
_MtxDatetimepickerModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _MtxDatetimepickerModule,
  imports: [CommonModule, OverlayModule, A11yModule, PortalModule, MatButtonModule, MtxCalendar, MtxCalendarBody, MtxClock, MtxTimeView, MtxTimeInput, MtxDatetimepicker, MtxDatetimepickerToggle, MtxDatetimepickerToggleIcon, MtxDatetimepickerInput, MtxDatetimepickerContent, MtxMonthView, MtxYearView, MtxMultiYearView, MtxDatetimepickerApply, MtxDatetimepickerCancel, MtxDatetimepickerClear, MtxDatetimepickerActions],
  exports: [MtxCalendar, MtxCalendarBody, MtxClock, MtxTimeView, MtxDatetimepicker, MtxDatetimepickerToggle, MtxDatetimepickerToggleIcon, MtxDatetimepickerInput, MtxDatetimepickerContent, MtxMonthView, MtxYearView, MtxMultiYearView, MtxDatetimepickerApply, MtxDatetimepickerCancel, MtxDatetimepickerClear, MtxDatetimepickerActions]
});
_MtxDatetimepickerModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [MTX_DATETIMEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER],
  imports: [CommonModule, OverlayModule, A11yModule, PortalModule, MatButtonModule, MtxCalendar, MtxTimeView, MtxDatetimepickerToggle, MtxDatetimepickerContent]
});
var MtxDatetimepickerModule = _MtxDatetimepickerModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MtxDatetimepickerModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, OverlayModule, A11yModule, PortalModule, MatButtonModule, MtxCalendar, MtxCalendarBody, MtxClock, MtxTimeView, MtxTimeInput, MtxDatetimepicker, MtxDatetimepickerToggle, MtxDatetimepickerToggleIcon, MtxDatetimepickerInput, MtxDatetimepickerContent, MtxMonthView, MtxYearView, MtxMultiYearView, MtxDatetimepickerApply, MtxDatetimepickerCancel, MtxDatetimepickerClear, MtxDatetimepickerActions],
      exports: [MtxCalendar, MtxCalendarBody, MtxClock, MtxTimeView, MtxDatetimepicker, MtxDatetimepickerToggle, MtxDatetimepickerToggleIcon, MtxDatetimepickerInput, MtxDatetimepickerContent, MtxMonthView, MtxYearView, MtxMultiYearView, MtxDatetimepickerApply, MtxDatetimepickerCancel, MtxDatetimepickerClear, MtxDatetimepickerActions],
      providers: [MTX_DATETIMEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER]
    }]
  }], null, null);
})();

// src/app/routes/forms/datetime/datetime.component.ts
var _moment = __toESM(require_moment());
var import_moment = __toESM(require_moment());
function FormsDatetimeComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "required");
    \u0275\u0275elementEnd();
  }
}
function FormsDatetimeComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "min");
    \u0275\u0275elementEnd();
  }
}
function FormsDatetimeComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "max");
    \u0275\u0275elementEnd();
  }
}
function FormsDatetimeComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "required");
    \u0275\u0275elementEnd();
  }
}
function FormsDatetimeComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "min");
    \u0275\u0275elementEnd();
  }
}
function FormsDatetimeComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "max");
    \u0275\u0275elementEnd();
  }
}
function FormsDatetimeComponent_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "required");
    \u0275\u0275elementEnd();
  }
}
function FormsDatetimeComponent_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "min");
    \u0275\u0275elementEnd();
  }
}
function FormsDatetimeComponent_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "max");
    \u0275\u0275elementEnd();
  }
}
function FormsDatetimeComponent_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "required");
    \u0275\u0275elementEnd();
  }
}
function FormsDatetimeComponent_Conditional_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "required");
    \u0275\u0275elementEnd();
  }
}
function FormsDatetimeComponent_Conditional_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "required");
    \u0275\u0275elementEnd();
  }
}
function FormsDatetimeComponent_Conditional_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "min");
    \u0275\u0275elementEnd();
  }
}
function FormsDatetimeComponent_Conditional_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "max");
    \u0275\u0275elementEnd();
  }
}
function FormsDatetimeComponent_Conditional_79_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "required");
    \u0275\u0275elementEnd();
  }
}
function FormsDatetimeComponent_Conditional_87_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "required");
    \u0275\u0275elementEnd();
  }
}
function FormsDatetimeComponent_Conditional_95_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "required");
    \u0275\u0275elementEnd();
  }
}
function FormsDatetimeComponent_Conditional_103_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "required");
    \u0275\u0275elementEnd();
  }
}
function FormsDatetimeComponent_Conditional_104_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "min");
    \u0275\u0275elementEnd();
  }
}
function FormsDatetimeComponent_Conditional_105_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "max");
    \u0275\u0275elementEnd();
  }
}
function FormsDatetimeComponent_Conditional_113_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "required");
    \u0275\u0275elementEnd();
  }
}
function FormsDatetimeComponent_Conditional_114_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "filter");
    \u0275\u0275elementEnd();
  }
}
function FormsDatetimeComponent_Conditional_122_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "required");
    \u0275\u0275elementEnd();
  }
}
var moment = import_moment.default || _moment;
var _FormsDatetimeComponent = class _FormsDatetimeComponent {
  constructor() {
    this.fb = inject(FormBuilder);
    this.dateAdapter = inject(DateAdapter);
    this.translate = inject(TranslateService);
    this.type = "moment";
    this.translateSubscription = Subscription.EMPTY;
    this.today = moment.utc();
    this.tomorrow = moment.utc().date(moment.utc().date() + 1);
    this.min = this.today.clone().year(2018).month(10).date(3).hour(11).minute(10);
    this.max = this.min.clone().date(4).minute(45);
    this.start = this.today.clone().year(1930).month(9).date(28);
    this.filter = (date, type) => {
      if (date === null) {
        return true;
      }
      switch (type) {
        case MtxDatetimepickerFilterType.DATE:
          return date.year() % 2 === 0 && date.month() % 2 === 0 && date.date() % 2 === 0;
        case MtxDatetimepickerFilterType.HOUR:
          return date.hour() % 2 === 0;
        case MtxDatetimepickerFilterType.MINUTE:
          return date.minute() % 2 === 0;
      }
    };
    this.group = this.fb.group({
      dateTime: [/* @__PURE__ */ new Date("2017-11-09T12:10:00.000Z"), Validators.required],
      dateTimeManual: [/* @__PURE__ */ new Date("2017-11-09T12:10:00.000Z"), Validators.required],
      dateTimeYear: [/* @__PURE__ */ new Date("2017-11-09T12:10:00.000Z"), Validators.required],
      date: [null, Validators.required],
      time: [null, Validators.required],
      timeAMPM: [null, Validators.required],
      timeAMPMManual: [null, Validators.required],
      month: [null, Validators.required],
      year: [null, Validators.required],
      mintest: [this.today, Validators.required],
      filtertest: [this.today, Validators.required],
      touch: [null, Validators.required]
    });
  }
  ngOnInit() {
    this.translateSubscription = this.translate.onLangChange.subscribe((res) => {
      this.dateAdapter.setLocale(res.lang);
    });
  }
  ngOnDestroy() {
    this.translateSubscription.unsubscribe();
  }
};
_FormsDatetimeComponent.\u0275fac = function FormsDatetimeComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FormsDatetimeComponent)();
};
_FormsDatetimeComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormsDatetimeComponent, selectors: [["app-forms-datetime"]], decls: 123, vars: 74, consts: [["datetimePicker", ""], ["datetimePickerManual", ""], ["datetimeYearPicker", ""], ["timePicker", ""], ["timeAMPMPicker", ""], ["timeAMPMPickerManual", ""], ["datePicker", ""], ["monthPicker", ""], ["yearPicker", ""], ["minTestPicker", ""], ["filterTestPicker", ""], ["touch", ""], ["href", "https://ng-matero.github.io/extensions/components/datetimepicker", "target", "_blank"], ["href", "https://github.com/ng-matero/extensions", "target", "_blank"], [3, "formGroup"], ["matSuffix", "", 3, "for"], ["startView", "month", 3, "timeInterval"], ["autocomplete", "false", "formControlName", "dateTime", "matInput", "", "required", "", 3, "mtxDatetimepicker", "max", "min"], ["startView", "month", 3, "timeInterval", "timeInput"], ["autocomplete", "false", "formControlName", "dateTimeManual", "matInput", "", "required", "", 3, "mtxDatetimepicker", "max", "min"], ["startView", "month", 3, "multiYearSelector", "timeInterval"], ["autocomplete", "false", "formControlName", "dateTimeYear", "matInput", "", "required", "", 3, "mtxDatetimepicker", "max", "min"], ["type", "time", 3, "timeInterval"], ["formControlName", "time", "matInput", "", "required", "", 3, "mtxDatetimepicker"], ["type", "time", 3, "timeInterval", "twelvehour"], ["formControlName", "timeAMPM", "matInput", "", "required", "", 3, "mtxDatetimepicker"], ["startView", "month", 3, "timeInterval", "timeInput", "twelvehour"], ["autocomplete", "false", "formControlName", "timeAMPMManual", "matInput", "", "required", "", 3, "mtxDatetimepicker"], ["type", "date"], ["formControlName", "date", "matInput", "", "required", "", 3, "mtxDatetimepicker"], ["mode", "portrait", "type", "month"], ["formControlName", "month", "matInput", "", "required", "", 3, "mtxDatetimepicker"], ["type", "year"], ["formControlName", "year", "matInput", "", "required", "", 3, "mtxDatetimepicker"], ["formControlName", "mintest", "matInput", "", "required", "", 3, "mtxDatetimepicker", "max", "min"], ["mode", "landscape", 3, "timeInterval"], ["formControlName", "filtertest", "matInput", "", "required", "", 3, "mtxDatetimepickerFilter", "mtxDatetimepicker"], ["formControlName", "touch", "matInput", "", "required", "", 3, "mtxDatetimepicker", "min"], ["mode", "portrait", 3, "timeInterval", "touchUi"]], template: function FormsDatetimeComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "page-header");
    \u0275\u0275elementStart(1, "p");
    \u0275\u0275text(2, " The following examples use the ");
    \u0275\u0275elementStart(3, "a", 12)(4, "code");
    \u0275\u0275text(5, "datetimepicker");
    \u0275\u0275elementEnd()();
    \u0275\u0275text(6, " component of ");
    \u0275\u0275elementStart(7, "a", 13);
    \u0275\u0275text(8, "Material Extensions");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, ". ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "mat-card")(11, "mat-card-header")(12, "mat-card-title");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "mat-card-content")(15, "form", 14)(16, "mat-form-field")(17, "mat-label");
    \u0275\u0275text(18, "DateTime");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "mtx-datetimepicker-toggle", 15)(20, "mtx-datetimepicker", 16, 0)(22, "input", 17);
    \u0275\u0275conditionalCreate(23, FormsDatetimeComponent_Conditional_23_Template, 2, 0, "mat-error");
    \u0275\u0275conditionalCreate(24, FormsDatetimeComponent_Conditional_24_Template, 2, 0, "mat-error");
    \u0275\u0275conditionalCreate(25, FormsDatetimeComponent_Conditional_25_Template, 2, 0, "mat-error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "mat-form-field")(27, "mat-label");
    \u0275\u0275text(28, "DateTime with manual input");
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "mtx-datetimepicker-toggle", 15)(30, "mtx-datetimepicker", 18, 1)(32, "input", 19);
    \u0275\u0275conditionalCreate(33, FormsDatetimeComponent_Conditional_33_Template, 2, 0, "mat-error");
    \u0275\u0275conditionalCreate(34, FormsDatetimeComponent_Conditional_34_Template, 2, 0, "mat-error");
    \u0275\u0275conditionalCreate(35, FormsDatetimeComponent_Conditional_35_Template, 2, 0, "mat-error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "mat-form-field")(37, "mat-label");
    \u0275\u0275text(38, "DateTime Year selector");
    \u0275\u0275elementEnd();
    \u0275\u0275element(39, "mtx-datetimepicker-toggle", 15)(40, "mtx-datetimepicker", 20, 2)(42, "input", 21);
    \u0275\u0275conditionalCreate(43, FormsDatetimeComponent_Conditional_43_Template, 2, 0, "mat-error");
    \u0275\u0275conditionalCreate(44, FormsDatetimeComponent_Conditional_44_Template, 2, 0, "mat-error");
    \u0275\u0275conditionalCreate(45, FormsDatetimeComponent_Conditional_45_Template, 2, 0, "mat-error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "mat-form-field")(47, "mat-label");
    \u0275\u0275text(48, "Time");
    \u0275\u0275elementEnd();
    \u0275\u0275element(49, "mtx-datetimepicker-toggle", 15)(50, "mtx-datetimepicker", 22, 3)(52, "input", 23);
    \u0275\u0275conditionalCreate(53, FormsDatetimeComponent_Conditional_53_Template, 2, 0, "mat-error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "mat-form-field")(55, "mat-label");
    \u0275\u0275text(56, "Time AM/PM");
    \u0275\u0275elementEnd();
    \u0275\u0275element(57, "mtx-datetimepicker-toggle", 15)(58, "mtx-datetimepicker", 24, 4)(60, "input", 25);
    \u0275\u0275conditionalCreate(61, FormsDatetimeComponent_Conditional_61_Template, 2, 0, "mat-error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "mat-form-field")(63, "mat-label");
    \u0275\u0275text(64, "DateTime AM/PM with manual input");
    \u0275\u0275elementEnd();
    \u0275\u0275element(65, "mtx-datetimepicker-toggle", 15)(66, "mtx-datetimepicker", 26, 5)(68, "input", 27);
    \u0275\u0275conditionalCreate(69, FormsDatetimeComponent_Conditional_69_Template, 2, 0, "mat-error");
    \u0275\u0275conditionalCreate(70, FormsDatetimeComponent_Conditional_70_Template, 2, 0, "mat-error");
    \u0275\u0275conditionalCreate(71, FormsDatetimeComponent_Conditional_71_Template, 2, 0, "mat-error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "mat-form-field")(73, "mat-label");
    \u0275\u0275text(74, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275element(75, "mtx-datetimepicker-toggle", 15)(76, "mtx-datetimepicker", 28, 6)(78, "input", 29);
    \u0275\u0275conditionalCreate(79, FormsDatetimeComponent_Conditional_79_Template, 2, 0, "mat-error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "mat-form-field")(81, "mat-label");
    \u0275\u0275text(82, "Month");
    \u0275\u0275elementEnd();
    \u0275\u0275element(83, "mtx-datetimepicker-toggle", 15)(84, "mtx-datetimepicker", 30, 7)(86, "input", 31);
    \u0275\u0275conditionalCreate(87, FormsDatetimeComponent_Conditional_87_Template, 2, 0, "mat-error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "mat-form-field")(89, "mat-label");
    \u0275\u0275text(90, "Year");
    \u0275\u0275elementEnd();
    \u0275\u0275element(91, "mtx-datetimepicker-toggle", 15)(92, "mtx-datetimepicker", 32, 8)(94, "input", 33);
    \u0275\u0275conditionalCreate(95, FormsDatetimeComponent_Conditional_95_Template, 2, 0, "mat-error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(96, "mat-form-field")(97, "mat-label");
    \u0275\u0275text(98, "Min/Max Test");
    \u0275\u0275elementEnd();
    \u0275\u0275element(99, "input", 34)(100, "mtx-datetimepicker-toggle", 15)(101, "mtx-datetimepicker", 35, 9);
    \u0275\u0275conditionalCreate(103, FormsDatetimeComponent_Conditional_103_Template, 2, 0, "mat-error");
    \u0275\u0275conditionalCreate(104, FormsDatetimeComponent_Conditional_104_Template, 2, 0, "mat-error");
    \u0275\u0275conditionalCreate(105, FormsDatetimeComponent_Conditional_105_Template, 2, 0, "mat-error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(106, "mat-form-field")(107, "mat-label");
    \u0275\u0275text(108, "Filter Test");
    \u0275\u0275elementEnd();
    \u0275\u0275element(109, "input", 36)(110, "mtx-datetimepicker-toggle", 15)(111, "mtx-datetimepicker", 35, 10);
    \u0275\u0275conditionalCreate(113, FormsDatetimeComponent_Conditional_113_Template, 2, 0, "mat-error");
    \u0275\u0275conditionalCreate(114, FormsDatetimeComponent_Conditional_114_Template, 2, 0, "mat-error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(115, "mat-form-field")(116, "mat-label");
    \u0275\u0275text(117, "TouchUi");
    \u0275\u0275elementEnd();
    \u0275\u0275element(118, "input", 37)(119, "mtx-datetimepicker-toggle", 15)(120, "mtx-datetimepicker", 38, 11);
    \u0275\u0275conditionalCreate(122, FormsDatetimeComponent_Conditional_122_Template, 2, 0, "mat-error");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_19_0;
    let tmp_20_0;
    let tmp_21_0;
    let tmp_28_0;
    let tmp_29_0;
    let tmp_30_0;
    let tmp_37_0;
    let tmp_38_0;
    let tmp_39_0;
    let tmp_43_0;
    let tmp_48_0;
    let tmp_54_0;
    let tmp_55_0;
    let tmp_56_0;
    let tmp_59_0;
    let tmp_62_0;
    let tmp_65_0;
    let tmp_71_0;
    let tmp_72_0;
    let tmp_73_0;
    let tmp_78_0;
    let tmp_79_0;
    let tmp_85_0;
    const datetimePicker_r1 = \u0275\u0275reference(21);
    const datetimePickerManual_r2 = \u0275\u0275reference(31);
    const datetimeYearPicker_r3 = \u0275\u0275reference(41);
    const timePicker_r4 = \u0275\u0275reference(51);
    const timeAMPMPicker_r5 = \u0275\u0275reference(59);
    const timeAMPMPickerManual_r6 = \u0275\u0275reference(67);
    const datePicker_r7 = \u0275\u0275reference(77);
    const monthPicker_r8 = \u0275\u0275reference(85);
    const yearPicker_r9 = \u0275\u0275reference(93);
    const minTestPicker_r10 = \u0275\u0275reference(102);
    const filterTestPicker_r11 = \u0275\u0275reference(112);
    const touch_r12 = \u0275\u0275reference(121);
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate1("Date types with: ", ctx.type);
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx.group);
    \u0275\u0275advance(4);
    \u0275\u0275property("for", datetimePicker_r1);
    \u0275\u0275advance();
    \u0275\u0275property("timeInterval", 5);
    \u0275\u0275advance(2);
    \u0275\u0275property("mtxDatetimepicker", datetimePicker_r1)("max", ctx.tomorrow)("min", ctx.today);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_19_0 = ctx.group.get("dateTime")) == null ? null : tmp_19_0.errors == null ? null : tmp_19_0.errors.required) ? 23 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_20_0 = ctx.group.get("dateTime")) == null ? null : tmp_20_0.errors == null ? null : tmp_20_0.errors.mtxDatetimepickerMin) ? 24 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_21_0 = ctx.group.get("dateTime")) == null ? null : tmp_21_0.errors == null ? null : tmp_21_0.errors.mtxDatetimepickerMax) ? 25 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("for", datetimePickerManual_r2);
    \u0275\u0275advance();
    \u0275\u0275property("timeInterval", 5)("timeInput", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("mtxDatetimepicker", datetimePickerManual_r2)("max", ctx.tomorrow)("min", ctx.today);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_28_0 = ctx.group.get("dateTimeManual")) == null ? null : tmp_28_0.errors == null ? null : tmp_28_0.errors.required) ? 33 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_29_0 = ctx.group.get("dateTimeManual")) == null ? null : tmp_29_0.errors == null ? null : tmp_29_0.errors.mtxDatetimepickerMin) ? 34 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_30_0 = ctx.group.get("dateTimeManual")) == null ? null : tmp_30_0.errors == null ? null : tmp_30_0.errors.mtxDatetimepickerMax) ? 35 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("for", datetimeYearPicker_r3);
    \u0275\u0275advance();
    \u0275\u0275property("multiYearSelector", true)("timeInterval", 5);
    \u0275\u0275advance(2);
    \u0275\u0275property("mtxDatetimepicker", datetimeYearPicker_r3)("max", ctx.tomorrow)("min", ctx.today);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_37_0 = ctx.group.get("dateTimeYear")) == null ? null : tmp_37_0.errors == null ? null : tmp_37_0.errors.required) ? 43 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_38_0 = ctx.group.get("dateTimeYear")) == null ? null : tmp_38_0.errors == null ? null : tmp_38_0.errors.mtxDatetimepickerMin) ? 44 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_39_0 = ctx.group.get("dateTimeYear")) == null ? null : tmp_39_0.errors == null ? null : tmp_39_0.errors.mtxDatetimepickerMax) ? 45 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("for", timePicker_r4);
    \u0275\u0275advance();
    \u0275\u0275property("timeInterval", 5);
    \u0275\u0275advance(2);
    \u0275\u0275property("mtxDatetimepicker", timePicker_r4);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_43_0 = ctx.group.get("time")) == null ? null : tmp_43_0.errors == null ? null : tmp_43_0.errors.required) ? 53 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("for", timeAMPMPicker_r5);
    \u0275\u0275advance();
    \u0275\u0275property("timeInterval", 5)("twelvehour", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("mtxDatetimepicker", timeAMPMPicker_r5);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_48_0 = ctx.group.get("timeAMPM")) == null ? null : tmp_48_0.errors == null ? null : tmp_48_0.errors.required) ? 61 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("for", timeAMPMPickerManual_r6);
    \u0275\u0275advance();
    \u0275\u0275property("timeInterval", 5)("timeInput", true)("twelvehour", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("mtxDatetimepicker", timeAMPMPickerManual_r6);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_54_0 = ctx.group.get("timeAMPMManual")) == null ? null : tmp_54_0.errors == null ? null : tmp_54_0.errors.required) ? 69 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_55_0 = ctx.group.get("timeAMPMManual")) == null ? null : tmp_55_0.errors == null ? null : tmp_55_0.errors.mtxDatetimepickerMin) ? 70 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_56_0 = ctx.group.get("timeAMPMManual")) == null ? null : tmp_56_0.errors == null ? null : tmp_56_0.errors.mtxDatetimepickerMax) ? 71 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("for", datePicker_r7);
    \u0275\u0275advance(3);
    \u0275\u0275property("mtxDatetimepicker", datePicker_r7);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_59_0 = ctx.group.get("date")) == null ? null : tmp_59_0.errors == null ? null : tmp_59_0.errors.required) ? 79 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("for", monthPicker_r8);
    \u0275\u0275advance(3);
    \u0275\u0275property("mtxDatetimepicker", monthPicker_r8);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_62_0 = ctx.group.get("month")) == null ? null : tmp_62_0.errors == null ? null : tmp_62_0.errors.required) ? 87 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("for", yearPicker_r9);
    \u0275\u0275advance(3);
    \u0275\u0275property("mtxDatetimepicker", yearPicker_r9);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_65_0 = ctx.group.get("year")) == null ? null : tmp_65_0.errors == null ? null : tmp_65_0.errors.required) ? 95 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("mtxDatetimepicker", minTestPicker_r10)("max", ctx.max)("min", ctx.min);
    \u0275\u0275advance();
    \u0275\u0275property("for", minTestPicker_r10);
    \u0275\u0275advance();
    \u0275\u0275property("timeInterval", 5);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(((tmp_71_0 = ctx.group.get("mintest")) == null ? null : tmp_71_0.errors == null ? null : tmp_71_0.errors.required) ? 103 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_72_0 = ctx.group.get("mintest")) == null ? null : tmp_72_0.errors == null ? null : tmp_72_0.errors.mtxDatetimepickerMin) ? 104 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_73_0 = ctx.group.get("mintest")) == null ? null : tmp_73_0.errors == null ? null : tmp_73_0.errors.mtxDatetimepickerMax) ? 105 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("mtxDatetimepickerFilter", ctx.filter)("mtxDatetimepicker", filterTestPicker_r11);
    \u0275\u0275advance();
    \u0275\u0275property("for", filterTestPicker_r11);
    \u0275\u0275advance();
    \u0275\u0275property("timeInterval", 5);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(((tmp_78_0 = ctx.group.get("filtertest")) == null ? null : tmp_78_0.errors == null ? null : tmp_78_0.errors.required) ? 113 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_79_0 = ctx.group.get("filtertest")) == null ? null : tmp_79_0.errors == null ? null : tmp_79_0.errors.mtxDatetimepickerFilter) ? 114 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("mtxDatetimepicker", touch_r12)("min", ctx.min);
    \u0275\u0275advance();
    \u0275\u0275property("for", touch_r12);
    \u0275\u0275advance();
    \u0275\u0275property("timeInterval", 5)("touchUi", true);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(((tmp_85_0 = ctx.group.get("touch")) == null ? null : tmp_85_0.errors == null ? null : tmp_85_0.errors.required) ? 122 : -1);
  }
}, dependencies: [FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, ReactiveFormsModule, FormGroupDirective, FormControlName, MatCardModule, MatCard, MatCardContent, MatCardHeader, MatCardTitle, MatFormFieldModule, MatFormField, MatLabel, MatError, MatSuffix, MatInputModule, MatInput, MtxDatetimepickerModule, MtxDatetimepicker, MtxDatetimepickerToggle, MtxDatetimepickerInput, PageHeaderComponent], styles: ["\n\n.mat-form-field[_ngcontent-%COMP%] {\n  margin: 0 8px;\n}\n/*# sourceMappingURL=datetime.component.css.map */"] });
var FormsDatetimeComponent = _FormsDatetimeComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormsDatetimeComponent, [{
    type: Component,
    args: [{ selector: "app-forms-datetime", imports: [
      FormsModule,
      ReactiveFormsModule,
      MatCardModule,
      MatFormFieldModule,
      MatInputModule,
      MtxDatetimepickerModule,
      PageHeaderComponent
    ], template: `<page-header />\r
\r
<p>\r
  The following examples use the\r
  <a href="https://ng-matero.github.io/extensions/components/datetimepicker" target="_blank">\r
    <code>datetimepicker</code></a> component of\r
    <a href="https://github.com/ng-matero/extensions" target="_blank">Material Extensions</a>.\r
  </p>\r
\r
  <mat-card>\r
    <mat-card-header>\r
      <mat-card-title>Date types with: {{ type }}</mat-card-title>\r
    </mat-card-header>\r
\r
    <mat-card-content>\r
      <form [formGroup]="group">\r
        <mat-form-field>\r
          <mat-label>DateTime</mat-label>\r
          <mtx-datetimepicker-toggle [for]="datetimePicker" matSuffix />\r
          <mtx-datetimepicker #datetimePicker startView="month" [timeInterval]="5" />\r
          <input [mtxDatetimepicker]="datetimePicker" [max]="tomorrow" [min]="today"\r
            autocomplete="false" formControlName="dateTime" matInput required>\r
          @if (group.get('dateTime')?.errors?.required) {\r
            <mat-error>required</mat-error>\r
          }\r
          @if (group.get('dateTime')?.errors?.mtxDatetimepickerMin) {\r
            <mat-error>min</mat-error>\r
          }\r
          @if (group.get('dateTime')?.errors?.mtxDatetimepickerMax) {\r
            <mat-error>max</mat-error>\r
          }\r
        </mat-form-field>\r
\r
        <mat-form-field>\r
          <mat-label>DateTime with manual input</mat-label>\r
          <mtx-datetimepicker-toggle [for]="datetimePickerManual" matSuffix />\r
          <mtx-datetimepicker #datetimePickerManual startView="month" [timeInterval]="5"\r
            [timeInput]="true" />\r
          <input [mtxDatetimepicker]="datetimePickerManual" [max]="tomorrow" [min]="today"\r
            autocomplete="false" formControlName="dateTimeManual" matInput required>\r
          @if (group.get('dateTimeManual')?.errors?.required) {\r
            <mat-error>required</mat-error>\r
          }\r
          @if (group.get('dateTimeManual')?.errors?.mtxDatetimepickerMin) {\r
            <mat-error>min</mat-error>\r
          }\r
          @if (group.get('dateTimeManual')?.errors?.mtxDatetimepickerMax) {\r
            <mat-error>max</mat-error>\r
          }\r
        </mat-form-field>\r
\r
        <mat-form-field>\r
          <mat-label>DateTime Year selector</mat-label>\r
          <mtx-datetimepicker-toggle [for]="datetimeYearPicker" matSuffix />\r
          <mtx-datetimepicker #datetimeYearPicker [multiYearSelector]="true" startView="month"\r
            [timeInterval]="5" />\r
          <input [mtxDatetimepicker]="datetimeYearPicker" [max]="tomorrow" [min]="today"\r
            autocomplete="false" formControlName="dateTimeYear" matInput required>\r
          @if (group.get('dateTimeYear')?.errors?.required) {\r
            <mat-error>required</mat-error>\r
          }\r
          @if (group.get('dateTimeYear')?.errors?.mtxDatetimepickerMin) {\r
            <mat-error>min</mat-error>\r
          }\r
          @if (group.get('dateTimeYear')?.errors?.mtxDatetimepickerMax) {\r
            <mat-error>max</mat-error>\r
          }\r
        </mat-form-field>\r
\r
        <mat-form-field>\r
          <mat-label>Time</mat-label>\r
          <mtx-datetimepicker-toggle [for]="timePicker" matSuffix />\r
          <mtx-datetimepicker #timePicker [timeInterval]="5" type="time" />\r
          <input [mtxDatetimepicker]="timePicker" formControlName="time" matInput required>\r
          @if (group.get('time')?.errors?.required) {\r
            <mat-error>required</mat-error>\r
          }\r
        </mat-form-field>\r
\r
        <mat-form-field>\r
          <mat-label>Time AM/PM</mat-label>\r
          <mtx-datetimepicker-toggle [for]="timeAMPMPicker" matSuffix />\r
          <mtx-datetimepicker #timeAMPMPicker [timeInterval]="5" [twelvehour]="true" type="time" />\r
          <input [mtxDatetimepicker]="timeAMPMPicker" formControlName="timeAMPM" matInput required>\r
          @if (group.get('timeAMPM')?.errors?.required) {\r
            <mat-error>required</mat-error>\r
          }\r
        </mat-form-field>\r
\r
        <mat-form-field>\r
          <mat-label>DateTime AM/PM with manual input</mat-label>\r
          <mtx-datetimepicker-toggle [for]="timeAMPMPickerManual" matSuffix />\r
          <mtx-datetimepicker #timeAMPMPickerManual startView="month" [timeInterval]="5"\r
          [timeInput]="true" [twelvehour]="true" />\r
          <input [mtxDatetimepicker]="timeAMPMPickerManual"\r
            autocomplete="false" formControlName="timeAMPMManual" matInput required>\r
          @if (group.get('timeAMPMManual')?.errors?.required) {\r
            <mat-error>required</mat-error>\r
          }\r
          @if (group.get('timeAMPMManual')?.errors?.mtxDatetimepickerMin) {\r
            <mat-error>min</mat-error>\r
          }\r
          @if (group.get('timeAMPMManual')?.errors?.mtxDatetimepickerMax) {\r
            <mat-error>max</mat-error>\r
          }\r
        </mat-form-field>\r
\r
        <mat-form-field>\r
          <mat-label>Date</mat-label>\r
          <mtx-datetimepicker-toggle [for]="datePicker" matSuffix />\r
          <mtx-datetimepicker #datePicker type="date" />\r
          <input [mtxDatetimepicker]="datePicker" formControlName="date" matInput required>\r
          @if (group.get('date')?.errors?.required) {\r
            <mat-error>required</mat-error>\r
          }\r
        </mat-form-field>\r
\r
        <mat-form-field>\r
          <mat-label>Month</mat-label>\r
          <mtx-datetimepicker-toggle [for]="monthPicker" matSuffix />\r
          <mtx-datetimepicker #monthPicker mode="portrait" type="month" />\r
          <input [mtxDatetimepicker]="monthPicker" formControlName="month" matInput required>\r
          @if (group.get('month')?.errors?.required) {\r
            <mat-error>required</mat-error>\r
          }\r
        </mat-form-field>\r
\r
        <mat-form-field>\r
          <mat-label>Year</mat-label>\r
          <mtx-datetimepicker-toggle [for]="yearPicker" matSuffix />\r
          <mtx-datetimepicker #yearPicker type="year" />\r
          <input [mtxDatetimepicker]="yearPicker" formControlName="year" matInput required>\r
          @if (group.get('year')?.errors?.required) {\r
            <mat-error>required</mat-error>\r
          }\r
        </mat-form-field>\r
\r
        <mat-form-field>\r
          <mat-label>Min/Max Test</mat-label>\r
          <input [mtxDatetimepicker]="minTestPicker" [max]="max" [min]="min" formControlName="mintest"\r
            matInput required>\r
          <mtx-datetimepicker-toggle [for]="minTestPicker" matSuffix />\r
          <mtx-datetimepicker #minTestPicker mode="landscape" [timeInterval]="5" />\r
          @if (group.get('mintest')?.errors?.required) {\r
            <mat-error>required</mat-error>\r
          }\r
          @if (group.get('mintest')?.errors?.mtxDatetimepickerMin) {\r
            <mat-error>min</mat-error>\r
          }\r
          @if (group.get('mintest')?.errors?.mtxDatetimepickerMax) {\r
            <mat-error>max</mat-error>\r
          }\r
        </mat-form-field>\r
\r
        <mat-form-field>\r
          <mat-label>Filter Test</mat-label>\r
          <input [mtxDatetimepickerFilter]="filter" [mtxDatetimepicker]="filterTestPicker"\r
            formControlName="filtertest" matInput required>\r
          <mtx-datetimepicker-toggle [for]="filterTestPicker" matSuffix />\r
          <mtx-datetimepicker #filterTestPicker mode="landscape" [timeInterval]="5" />\r
          @if (group.get('filtertest')?.errors?.required) {\r
            <mat-error>required</mat-error>\r
          }\r
          @if (group.get('filtertest')?.errors?.mtxDatetimepickerFilter) {\r
            <mat-error>filter</mat-error>\r
          }\r
        </mat-form-field>\r
\r
        <mat-form-field>\r
          <mat-label>TouchUi</mat-label>\r
          <input [mtxDatetimepicker]="touch" [min]="min" formControlName="touch" matInput required>\r
          <mtx-datetimepicker-toggle [for]="touch" matSuffix />\r
          <mtx-datetimepicker #touch mode="portrait" [timeInterval]="5" [touchUi]="true" />\r
          @if (group.get('touch')?.errors?.required) {\r
            <mat-error>required</mat-error>\r
          }\r
        </mat-form-field>\r
      </form>\r
    </mat-card-content>\r
  </mat-card>\r
`, styles: ["/* src/app/routes/forms/datetime/datetime.component.scss */\n.mat-form-field {\n  margin: 0 8px;\n}\n/*# sourceMappingURL=datetime.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormsDatetimeComponent, { className: "FormsDatetimeComponent", filePath: "src/app/routes/forms/datetime/datetime.component.ts", lineNumber: 40 });
})();

// src/app/routes/forms/dynamic/dynamic.component.ts
var _FormsDynamicComponent = class _FormsDynamicComponent {
  constructor() {
    this.toast = inject(ToastrService);
    this.form = new FormGroup({});
    this.model = { email: "email@gmail.com" };
    this.fields = [
      {
        key: "text",
        type: "input",
        templateOptions: {
          label: "Text",
          placeholder: "Type here to see the other field become enabled...",
          required: true
        }
      },
      {
        key: "text2",
        type: "input",
        templateOptions: {
          label: "Hey!",
          placeholder: "This one is disabled if there is no text in the other input"
        },
        expressionProperties: {
          "templateOptions.disabled": "!model.text"
        }
      },
      {
        key: "email",
        type: "input",
        templateOptions: {
          label: "Email address",
          placeholder: "Enter email",
          required: true
        }
      }
    ];
    this.form2 = new FormGroup({});
    this.model2 = {};
    this.fields2 = [
      {
        fieldGroupClassName: "row",
        fieldGroup: [
          {
            className: "col-sm-6",
            type: "input",
            key: "firstName",
            templateOptions: {
              label: "First Name",
              required: true
            }
          },
          {
            className: "col-sm-6",
            type: "input",
            key: "lastName",
            templateOptions: {
              label: "Last Name",
              required: true
            },
            expressionProperties: {
              "templateOptions.disabled": "!model.firstName"
            }
          }
        ]
      },
      {
        fieldGroupClassName: "row",
        fieldGroup: [
          {
            className: "col-sm-6",
            type: "input",
            key: "street",
            templateOptions: {
              label: "Street"
            }
          },
          {
            className: "col-sm-3",
            type: "combobox",
            key: "cityId",
            templateOptions: {
              label: "City",
              options: [
                { id: 1, name: "\u5317\u4EAC" },
                { id: 2, name: "\u4E0A\u6D77" },
                { id: 3, name: "\u5E7F\u5DDE" },
                { id: 4, name: "\u6DF1\u5733" }
              ],
              labelProp: "name",
              valueProp: "id",
              required: true,
              description: "This is a custom field type."
            }
          },
          {
            className: "col-sm-3",
            type: "input",
            key: "zip",
            templateOptions: {
              type: "number",
              label: "Zip",
              max: 99999,
              min: 0,
              pattern: "\\d{5}"
            }
          }
        ]
      },
      {
        type: "textarea",
        key: "otherInput",
        templateOptions: {
          label: "Other Input"
        }
      },
      {
        type: "checkbox",
        key: "otherToo",
        templateOptions: {
          label: "Other Checkbox"
        },
        wrappers: ["div"]
      }
    ];
  }
  submit() {
    if (this.form.valid) {
      this.showToast(this.model);
    }
  }
  submit2() {
    if (this.form2.valid) {
      this.showToast(this.model2);
    }
  }
  showToast(obj) {
    this.toast.success(JSON.stringify(obj));
  }
};
_FormsDynamicComponent.\u0275fac = function FormsDynamicComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FormsDynamicComponent)();
};
_FormsDynamicComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormsDynamicComponent, selectors: [["app-forms-dynamic"]], decls: 31, vars: 8, consts: [["href", "https://github.com/ngx-formly/ngx-formly", "target", "_blank"], [3, "ngSubmit", "formGroup"], [3, "form", "fields", "model"], [1, "d-flex", "justify-content-end", "m-t-8"], ["mat-button", "", "type", "button", 1, "m-x-8"], ["mat-flat-button", ""], [3, "model", "fields", "form"], [1, "d-flex", "justify-content-center", "m-t-8"]], template: function FormsDynamicComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "page-header");
    \u0275\u0275elementStart(1, "p");
    \u0275\u0275text(2, " The dynamic forms are powered by ");
    \u0275\u0275elementStart(3, "a", 0)(4, "code");
    \u0275\u0275text(5, "ngx-formly");
    \u0275\u0275elementEnd()();
    \u0275\u0275text(6, ".\n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "mat-card")(8, "mat-card-header")(9, "mat-card-title");
    \u0275\u0275text(10, "Simple");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "mat-card-content")(12, "form", 1);
    \u0275\u0275listener("ngSubmit", function FormsDynamicComponent_Template_form_ngSubmit_12_listener() {
      return ctx.submit();
    });
    \u0275\u0275element(13, "formly-form", 2);
    \u0275\u0275elementStart(14, "div", 3)(15, "button", 4);
    \u0275\u0275text(16, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 5);
    \u0275\u0275text(18, "Submit");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(19, "mat-card")(20, "mat-card-header")(21, "mat-card-title");
    \u0275\u0275text(22, "Advanced Layout");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "mat-card-content")(24, "form", 1);
    \u0275\u0275listener("ngSubmit", function FormsDynamicComponent_Template_form_ngSubmit_24_listener() {
      return ctx.submit2();
    });
    \u0275\u0275element(25, "formly-form", 6);
    \u0275\u0275elementStart(26, "div", 7)(27, "button", 4);
    \u0275\u0275text(28, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "button", 5);
    \u0275\u0275text(30, "Submit");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(12);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance();
    \u0275\u0275property("form", ctx.form)("fields", ctx.fields)("model", ctx.model);
    \u0275\u0275advance(11);
    \u0275\u0275property("formGroup", ctx.form2);
    \u0275\u0275advance();
    \u0275\u0275property("model", ctx.model2)("fields", ctx.fields2)("form", ctx.form2);
  }
}, dependencies: [FormsModule, \u0275NgNoValidate, NgControlStatusGroup, ReactiveFormsModule, FormGroupDirective, MatButtonModule, MatButton, MatCardModule, MatCard, MatCardContent, MatCardHeader, MatCardTitle, FormlyModule, FormlyForm, PageHeaderComponent], encapsulation: 2 });
var FormsDynamicComponent = _FormsDynamicComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormsDynamicComponent, [{
    type: Component,
    args: [{ selector: "app-forms-dynamic", imports: [
      FormsModule,
      ReactiveFormsModule,
      MatButtonModule,
      MatCardModule,
      FormlyModule,
      PageHeaderComponent
    ], template: '<page-header />\r\n\r\n<p>\r\n  The dynamic forms are powered by\r\n  <a href="https://github.com/ngx-formly/ngx-formly" target="_blank">\r\n    <code>ngx-formly</code>\r\n  </a>.\r\n</p>\r\n\r\n<mat-card>\r\n  <mat-card-header>\r\n    <mat-card-title>Simple</mat-card-title>\r\n  </mat-card-header>\r\n\r\n  <mat-card-content>\r\n    <form [formGroup]="form" (ngSubmit)="submit()">\r\n      <formly-form [form]="form" [fields]="fields" [model]="model" />\r\n\r\n      <div class="d-flex justify-content-end m-t-8">\r\n        <button mat-button class="m-x-8" type="button">Cancel</button>\r\n        <button mat-flat-button>Submit</button>\r\n      </div>\r\n    </form>\r\n  </mat-card-content>\r\n</mat-card>\r\n\r\n<mat-card>\r\n  <mat-card-header>\r\n    <mat-card-title>Advanced Layout</mat-card-title>\r\n  </mat-card-header>\r\n\r\n  <mat-card-content>\r\n    <form [formGroup]="form2" (ngSubmit)="submit2()">\r\n      <formly-form [model]="model2" [fields]="fields2" [form]="form2" />\r\n\r\n      <div class="d-flex justify-content-center m-t-8">\r\n        <button mat-button class="m-x-8" type="button">Cancel</button>\r\n        <button mat-flat-button>Submit</button>\r\n      </div>\r\n    </form>\r\n  </mat-card-content>\r\n</mat-card>\r\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormsDynamicComponent, { className: "FormsDynamicComponent", filePath: "src/app/routes/forms/dynamic/dynamic.component.ts", lineNumber: 23 });
})();

// src/app/routes/forms/elements/elements.component.ts
function FormsElementsComponent_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "validation.required"));
  }
}
function FormsElementsComponent_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "validation.required"));
  }
}
function FormsElementsComponent_Conditional_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "validation.required"));
  }
}
function FormsElementsComponent_Conditional_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, ctx_r1.getErrorMessage(ctx_r1.reactiveForm1)));
  }
}
function FormsElementsComponent_Conditional_107_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "validation.required"));
  }
}
function FormsElementsComponent_Conditional_119_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "validation.required"));
  }
}
function FormsElementsComponent_Conditional_127_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "validation.required"));
  }
}
function FormsElementsComponent_Conditional_133_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, ctx_r1.getErrorMessage(ctx_r1.reactiveForm2)));
  }
}
var _FormsElementsComponent = class _FormsElementsComponent {
  constructor() {
    this.fb = inject(FormBuilder);
    this.dateAdapter = inject(DateAdapter);
    this.translate = inject(TranslateService);
    this.q = {
      username: "",
      email: "",
      gender: ""
    };
    this.reactiveForm1 = this.fb.nonNullable.group({
      username: ["", [Validators.required]],
      gender: ["", [Validators.required]],
      mobile: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      city: [""],
      address: [""],
      company: [""],
      tele: [""],
      website: [""],
      date: [""]
    });
    this.reactiveForm2 = this.fb.nonNullable.group({
      username: ["", [Validators.required]],
      gender: ["", [Validators.required]],
      mobile: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      city: [""],
      address: [""],
      company: [""],
      tele: [""],
      website: [""],
      date: [""]
    });
    this.translateSubscription = Subscription.EMPTY;
  }
  ngOnInit() {
    this.translateSubscription = this.translate.onLangChange.subscribe((res) => {
      this.dateAdapter.setLocale(res.lang);
    });
  }
  ngOnDestroy() {
    this.translateSubscription.unsubscribe();
  }
  getErrorMessage(form) {
    return form.get("email")?.hasError("required") ? "validation.required" : form.get("email")?.hasError("email") ? "validation.invalid_email" : "";
  }
};
_FormsElementsComponent.\u0275fac = function FormsElementsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FormsElementsComponent)();
};
_FormsElementsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormsElementsComponent, selectors: [["app-forms-elements"]], decls: 172, vars: 17, consts: [["picker", ""], ["picker2", ""], [1, "row"], [1, "col-sm-12"], ["appearance", "outline", 1, "m-r-8"], ["matInput", "", "name", "username", 3, "ngModelChange", "ngModel"], ["matInput", "", "name", "email", 3, "ngModelChange", "ngModel"], ["name", "gender", 3, "ngModelChange", "ngModel"], ["value", "1"], ["value", "2"], [1, "col-sm-4"], [1, "form-field-full", 3, "formGroup"], ["matInput", "", "placeholder", "Simple placeholder", "formControlName", "username", "required", ""], ["required", "", "formControlName", "gender", "required", ""], ["matInput", "", "placeholder", "Simple placeholder", "type", "number", "formControlName", "mobile", "required", ""], ["matSuffix", ""], ["matInput", "", "placeholder", "Simple placeholder", "formControlName", "email", "required", ""], ["matInput", "", "placeholder", "Simple placeholder", "formControlName", "city"], ["matInput", "", "placeholder", "Simple placeholder", "formControlName", "address"], ["matInput", "", "placeholder", "Simple placeholder", "formControlName", "company"], ["matInput", "", "placeholder", "Simple placeholder", "type", "number", "formControlName", "tele"], ["matInput", "", "placeholder", "Simple placeholder", "formControlName", "website"], ["matInput", "", "placeholder", "Choose a date", "formControlName", "date", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], [1, "m-t-8", "d-flex", "justify-content-end"], ["mat-button", "", "type", "button", 1, "m-x-8"], ["mat-flat-button", ""], [1, "col-sm-8"], [1, "col-sm-6"], [1, "m-t-8"]], template: function FormsElementsComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "page-header");
    \u0275\u0275elementStart(1, "div", 2)(2, "div", 3)(3, "mat-card")(4, "mat-card-header")(5, "mat-card-title");
    \u0275\u0275text(6, "Form Inline");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "mat-card-content")(8, "form")(9, "mat-form-field", 4)(10, "mat-label");
    \u0275\u0275text(11, "Username");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 5);
    \u0275\u0275twoWayListener("ngModelChange", function FormsElementsComponent_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.q.username, $event) || (ctx.q.username = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "mat-form-field", 4)(14, "mat-label");
    \u0275\u0275text(15, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "input", 6);
    \u0275\u0275twoWayListener("ngModelChange", function FormsElementsComponent_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.q.email, $event) || (ctx.q.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "mat-form-field", 4)(18, "mat-label");
    \u0275\u0275text(19, "Gender");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "mat-select", 7);
    \u0275\u0275twoWayListener("ngModelChange", function FormsElementsComponent_Template_mat_select_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.q.gender, $event) || (ctx.q.gender = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(21, "mat-option");
    \u0275\u0275text(22, "-- None --");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "mat-option", 8);
    \u0275\u0275text(24, "male");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "mat-option", 9);
    \u0275\u0275text(26, "female");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(27, "div", 10)(28, "mat-card")(29, "mat-card-header")(30, "mat-card-title");
    \u0275\u0275text(31, "Form Horizontal");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "mat-card-content")(33, "form", 11)(34, "mat-form-field")(35, "mat-label");
    \u0275\u0275text(36, "Username");
    \u0275\u0275elementEnd();
    \u0275\u0275element(37, "input", 12);
    \u0275\u0275conditionalCreate(38, FormsElementsComponent_Conditional_38_Template, 3, 3, "mat-error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "mat-form-field")(40, "mat-label");
    \u0275\u0275text(41, "Gender");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "mat-select", 13)(43, "mat-option");
    \u0275\u0275text(44, "-- None --");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "mat-option", 8);
    \u0275\u0275text(46, "male");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "mat-option", 9);
    \u0275\u0275text(48, "female");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(49, FormsElementsComponent_Conditional_49_Template, 3, 3, "mat-error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "mat-form-field")(51, "mat-label");
    \u0275\u0275text(52, "Mobile");
    \u0275\u0275elementEnd();
    \u0275\u0275element(53, "input", 14);
    \u0275\u0275elementStart(54, "mat-icon", 15);
    \u0275\u0275text(55, "smartphone");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(56, FormsElementsComponent_Conditional_56_Template, 3, 3, "mat-error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "mat-form-field")(58, "mat-label");
    \u0275\u0275text(59, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275element(60, "input", 16);
    \u0275\u0275conditionalCreate(61, FormsElementsComponent_Conditional_61_Template, 3, 3, "mat-error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "mat-form-field")(63, "mat-label");
    \u0275\u0275text(64, "City");
    \u0275\u0275elementEnd();
    \u0275\u0275element(65, "input", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "mat-form-field")(67, "mat-label");
    \u0275\u0275text(68, "Address");
    \u0275\u0275elementEnd();
    \u0275\u0275element(69, "input", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "mat-form-field")(71, "mat-label");
    \u0275\u0275text(72, "Company");
    \u0275\u0275elementEnd();
    \u0275\u0275element(73, "input", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "mat-form-field")(75, "mat-label");
    \u0275\u0275text(76, "Tele");
    \u0275\u0275elementEnd();
    \u0275\u0275element(77, "input", 20);
    \u0275\u0275elementStart(78, "mat-icon", 15);
    \u0275\u0275text(79, "phone");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(80, "mat-form-field")(81, "mat-label");
    \u0275\u0275text(82, "Website");
    \u0275\u0275elementEnd();
    \u0275\u0275element(83, "input", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "mat-form-field");
    \u0275\u0275element(85, "input", 22)(86, "mat-datepicker-toggle", 23)(87, "mat-datepicker", null, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(89, "div", 24)(90, "button", 25);
    \u0275\u0275text(91, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(92, "button", 26);
    \u0275\u0275text(93, "Save");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(94, "div", 27)(95, "mat-card")(96, "mat-card-header")(97, "mat-card-title");
    \u0275\u0275text(98, "Form Horizontal");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(99, "mat-card-content")(100, "form", 11)(101, "div", 2)(102, "div", 28)(103, "mat-form-field")(104, "mat-label");
    \u0275\u0275text(105, "Username");
    \u0275\u0275elementEnd();
    \u0275\u0275element(106, "input", 12);
    \u0275\u0275conditionalCreate(107, FormsElementsComponent_Conditional_107_Template, 3, 3, "mat-error");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(108, "div", 28)(109, "mat-form-field")(110, "mat-label");
    \u0275\u0275text(111, "Gender");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(112, "mat-select", 13)(113, "mat-option");
    \u0275\u0275text(114, "-- None --");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(115, "mat-option", 8);
    \u0275\u0275text(116, "male");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(117, "mat-option", 9);
    \u0275\u0275text(118, "female");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(119, FormsElementsComponent_Conditional_119_Template, 3, 3, "mat-error");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(120, "div", 28)(121, "mat-form-field")(122, "mat-label");
    \u0275\u0275text(123, "Mobile");
    \u0275\u0275elementEnd();
    \u0275\u0275element(124, "input", 14);
    \u0275\u0275elementStart(125, "mat-icon", 15);
    \u0275\u0275text(126, "smartphone");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(127, FormsElementsComponent_Conditional_127_Template, 3, 3, "mat-error");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(128, "div", 28)(129, "mat-form-field")(130, "mat-label");
    \u0275\u0275text(131, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275element(132, "input", 16);
    \u0275\u0275conditionalCreate(133, FormsElementsComponent_Conditional_133_Template, 3, 3, "mat-error");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(134, "div", 28)(135, "mat-form-field")(136, "mat-label");
    \u0275\u0275text(137, "City");
    \u0275\u0275elementEnd();
    \u0275\u0275element(138, "input", 17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(139, "div", 28)(140, "mat-form-field")(141, "mat-label");
    \u0275\u0275text(142, "Address");
    \u0275\u0275elementEnd();
    \u0275\u0275element(143, "input", 18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(144, "div", 28)(145, "mat-form-field")(146, "mat-label");
    \u0275\u0275text(147, "Company");
    \u0275\u0275elementEnd();
    \u0275\u0275element(148, "input", 19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(149, "div", 28)(150, "mat-form-field")(151, "mat-label");
    \u0275\u0275text(152, "Tele");
    \u0275\u0275elementEnd();
    \u0275\u0275element(153, "input", 20);
    \u0275\u0275elementStart(154, "mat-icon", 15);
    \u0275\u0275text(155, "phone");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(156, "div", 28)(157, "mat-form-field")(158, "mat-label");
    \u0275\u0275text(159, "Website");
    \u0275\u0275elementEnd();
    \u0275\u0275element(160, "input", 21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(161, "div", 28)(162, "mat-form-field");
    \u0275\u0275element(163, "input", 22)(164, "mat-datepicker-toggle", 23)(165, "mat-datepicker", null, 1);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(167, "div", 29)(168, "button", 26);
    \u0275\u0275text(169, "Save");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(170, "button", 25);
    \u0275\u0275text(171, "Cancel");
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    let tmp_9_0;
    let tmp_13_0;
    let tmp_14_0;
    let tmp_15_0;
    let tmp_16_0;
    const picker_r3 = \u0275\u0275reference(88);
    const picker2_r4 = \u0275\u0275reference(166);
    \u0275\u0275advance(12);
    \u0275\u0275twoWayProperty("ngModel", ctx.q.username);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx.q.email);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx.q.gender);
    \u0275\u0275advance(13);
    \u0275\u0275property("formGroup", ctx.reactiveForm1);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(((tmp_6_0 = ctx.reactiveForm1.get("username")) == null ? null : tmp_6_0.invalid) ? 38 : -1);
    \u0275\u0275advance(11);
    \u0275\u0275conditional(((tmp_7_0 = ctx.reactiveForm1.get("gender")) == null ? null : tmp_7_0.invalid) ? 49 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(((tmp_8_0 = ctx.reactiveForm1.get("mobile")) == null ? null : tmp_8_0.invalid) ? 56 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(((tmp_9_0 = ctx.reactiveForm1.get("email")) == null ? null : tmp_9_0.invalid) ? 61 : -1);
    \u0275\u0275advance(24);
    \u0275\u0275property("matDatepicker", picker_r3);
    \u0275\u0275advance();
    \u0275\u0275property("for", picker_r3);
    \u0275\u0275advance(14);
    \u0275\u0275property("formGroup", ctx.reactiveForm2);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(((tmp_13_0 = ctx.reactiveForm2.get("username")) == null ? null : tmp_13_0.invalid) ? 107 : -1);
    \u0275\u0275advance(12);
    \u0275\u0275conditional(((tmp_14_0 = ctx.reactiveForm2.get("gender")) == null ? null : tmp_14_0.invalid) ? 119 : -1);
    \u0275\u0275advance(8);
    \u0275\u0275conditional(((tmp_15_0 = ctx.reactiveForm2.get("mobile")) == null ? null : tmp_15_0.invalid) ? 127 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(((tmp_16_0 = ctx.reactiveForm2.get("email")) == null ? null : tmp_16_0.invalid) ? 133 : -1);
    \u0275\u0275advance(30);
    \u0275\u0275property("matDatepicker", picker2_r4);
    \u0275\u0275advance();
    \u0275\u0275property("for", picker2_r4);
  }
}, dependencies: [
  FormsModule,
  \u0275NgNoValidate,
  DefaultValueAccessor,
  NumberValueAccessor,
  NgControlStatus,
  NgControlStatusGroup,
  RequiredValidator,
  NgModel,
  NgForm,
  ReactiveFormsModule,
  FormGroupDirective,
  FormControlName,
  MatButtonModule,
  MatButton,
  MatCardModule,
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardTitle,
  MatDatepickerModule,
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerToggle,
  MatFormFieldModule,
  MatFormField,
  MatLabel,
  MatError,
  MatSuffix,
  MatIconModule,
  MatIcon,
  MatInputModule,
  MatInput,
  MatOptionModule,
  MatOption,
  MatSelectModule,
  MatSelect,
  TranslateModule,
  PageHeaderComponent,
  TranslatePipe
], encapsulation: 2 });
var FormsElementsComponent = _FormsElementsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormsElementsComponent, [{
    type: Component,
    args: [{ selector: "app-forms-elements", imports: [
      FormsModule,
      ReactiveFormsModule,
      MatButtonModule,
      MatCardModule,
      MatDatepickerModule,
      MatFormFieldModule,
      MatIconModule,
      MatInputModule,
      MatOptionModule,
      MatSelectModule,
      TranslateModule,
      PageHeaderComponent
    ], template: `<page-header />\r
\r
<div class="row">\r
  <div class="col-sm-12">\r
    <mat-card>\r
      <mat-card-header>\r
        <mat-card-title>Form Inline</mat-card-title>\r
      </mat-card-header>\r
\r
      <mat-card-content>\r
        <form>\r
          <mat-form-field class="m-r-8" appearance="outline">\r
            <mat-label>Username</mat-label>\r
            <input matInput [(ngModel)]="q.username" name="username">\r
          </mat-form-field>\r
\r
          <mat-form-field class="m-r-8" appearance="outline">\r
            <mat-label>Email</mat-label>\r
            <input matInput [(ngModel)]="q.email" name="email">\r
          </mat-form-field>\r
\r
          <mat-form-field class="m-r-8" appearance="outline">\r
            <mat-label>Gender</mat-label>\r
            <mat-select [(ngModel)]="q.gender" name="gender">\r
              <mat-option>-- None --</mat-option>\r
              <mat-option value="1">male</mat-option>\r
              <mat-option value="2">female</mat-option>\r
            </mat-select>\r
          </mat-form-field>\r
        </form>\r
      </mat-card-content>\r
    </mat-card>\r
  </div>\r
  <div class="col-sm-4">\r
    <mat-card>\r
      <mat-card-header>\r
        <mat-card-title>Form Horizontal</mat-card-title>\r
      </mat-card-header>\r
\r
      <mat-card-content>\r
        <form [formGroup]="reactiveForm1" class="form-field-full">\r
          <mat-form-field>\r
            <mat-label>Username</mat-label>\r
            <input matInput placeholder="Simple placeholder" formControlName="username" required>\r
            @if (reactiveForm1.get('username')?.invalid) {\r
              <mat-error>{{'validation.required' | translate}}</mat-error>\r
            }\r
          </mat-form-field>\r
\r
          <mat-form-field>\r
            <mat-label>Gender</mat-label>\r
            <mat-select required formControlName="gender" required>\r
              <mat-option>-- None --</mat-option>\r
              <mat-option value="1">male</mat-option>\r
              <mat-option value="2">female</mat-option>\r
            </mat-select>\r
            @if (reactiveForm1.get('gender')?.invalid) {\r
              <mat-error>{{'validation.required' | translate}}</mat-error>\r
            }\r
          </mat-form-field>\r
\r
          <mat-form-field>\r
            <mat-label>Mobile</mat-label>\r
            <input matInput placeholder="Simple placeholder" type="number" formControlName="mobile"\r
              required>\r
            <mat-icon matSuffix>smartphone</mat-icon>\r
            @if (reactiveForm1.get('mobile')?.invalid) {\r
              <mat-error>{{'validation.required' | translate}}</mat-error>\r
            }\r
          </mat-form-field>\r
\r
          <mat-form-field>\r
            <mat-label>Email</mat-label>\r
            <input matInput placeholder="Simple placeholder" formControlName="email" required>\r
            @if (reactiveForm1.get('email')?.invalid) {\r
              <mat-error>{{getErrorMessage(reactiveForm1) | translate}}</mat-error>\r
            }\r
          </mat-form-field>\r
\r
          <mat-form-field>\r
            <mat-label>City</mat-label>\r
            <input matInput placeholder="Simple placeholder" formControlName="city">\r
          </mat-form-field>\r
\r
          <mat-form-field>\r
            <mat-label>Address</mat-label>\r
            <input matInput placeholder="Simple placeholder" formControlName="address">\r
          </mat-form-field>\r
\r
          <mat-form-field>\r
            <mat-label>Company</mat-label>\r
            <input matInput placeholder="Simple placeholder" formControlName="company">\r
          </mat-form-field>\r
\r
          <mat-form-field>\r
            <mat-label>Tele</mat-label>\r
            <input matInput placeholder="Simple placeholder" type="number" formControlName="tele">\r
            <mat-icon matSuffix>phone</mat-icon>\r
          </mat-form-field>\r
\r
          <mat-form-field>\r
            <mat-label>Website</mat-label>\r
            <input matInput placeholder="Simple placeholder" formControlName="website">\r
          </mat-form-field>\r
\r
          <mat-form-field>\r
            <input matInput [matDatepicker]="picker" placeholder="Choose a date"\r
              formControlName="date">\r
            <mat-datepicker-toggle matSuffix [for]="picker" />\r
            <mat-datepicker #picker />\r
          </mat-form-field>\r
\r
          <div class="m-t-8 d-flex justify-content-end">\r
            <button mat-button class="m-x-8" type="button">Cancel</button>\r
            <button mat-flat-button>Save</button>\r
          </div>\r
        </form>\r
      </mat-card-content>\r
    </mat-card>\r
  </div>\r
  <div class="col-sm-8">\r
    <mat-card>\r
      <mat-card-header>\r
        <mat-card-title>Form Horizontal</mat-card-title>\r
      </mat-card-header>\r
\r
      <mat-card-content>\r
        <form [formGroup]="reactiveForm2" class="form-field-full">\r
\r
          <div class="row">\r
            <div class="col-sm-6">\r
              <mat-form-field>\r
                <mat-label>Username</mat-label>\r
                <input matInput placeholder="Simple placeholder" formControlName="username"\r
                  required>\r
                @if (reactiveForm2.get('username')?.invalid) {\r
                  <mat-error>{{'validation.required' | translate}}</mat-error>\r
                }\r
              </mat-form-field>\r
            </div>\r
\r
            <div class="col-sm-6">\r
              <mat-form-field>\r
                <mat-label>Gender</mat-label>\r
                <mat-select required formControlName="gender" required>\r
                  <mat-option>-- None --</mat-option>\r
                  <mat-option value="1">male</mat-option>\r
                  <mat-option value="2">female</mat-option>\r
                </mat-select>\r
                @if (reactiveForm2.get('gender')?.invalid) {\r
                  <mat-error>{{'validation.required' | translate}}</mat-error>\r
                }\r
              </mat-form-field>\r
            </div>\r
\r
            <div class="col-sm-6">\r
              <mat-form-field>\r
                <mat-label>Mobile</mat-label>\r
                <input matInput placeholder="Simple placeholder" type="number"\r
                  formControlName="mobile" required>\r
                <mat-icon matSuffix>smartphone</mat-icon>\r
                @if (reactiveForm2.get('mobile')?.invalid) {\r
                  <mat-error>{{'validation.required' | translate}}</mat-error>\r
                }\r
              </mat-form-field>\r
            </div>\r
\r
            <div class="col-sm-6">\r
              <mat-form-field>\r
                <mat-label>Email</mat-label>\r
                <input matInput placeholder="Simple placeholder" formControlName="email" required>\r
                @if (reactiveForm2.get('email')?.invalid) {\r
                  <mat-error>{{getErrorMessage(reactiveForm2) | translate}}</mat-error>\r
                }\r
              </mat-form-field>\r
            </div>\r
\r
            <div class="col-sm-6">\r
              <mat-form-field>\r
                <mat-label>City</mat-label>\r
                <input matInput placeholder="Simple placeholder" formControlName="city">\r
              </mat-form-field>\r
            </div>\r
\r
            <div class="col-sm-6">\r
              <mat-form-field>\r
                <mat-label>Address</mat-label>\r
                <input matInput placeholder="Simple placeholder" formControlName="address">\r
              </mat-form-field>\r
            </div>\r
\r
            <div class="col-sm-6">\r
              <mat-form-field>\r
                <mat-label>Company</mat-label>\r
                <input matInput placeholder="Simple placeholder" formControlName="company">\r
              </mat-form-field>\r
            </div>\r
\r
            <div class="col-sm-6">\r
              <mat-form-field>\r
                <mat-label>Tele</mat-label>\r
                <input matInput placeholder="Simple placeholder" type="number"\r
                  formControlName="tele">\r
                <mat-icon matSuffix>phone</mat-icon>\r
              </mat-form-field>\r
            </div>\r
\r
            <div class="col-sm-6">\r
              <mat-form-field>\r
                <mat-label>Website</mat-label>\r
                <input matInput placeholder="Simple placeholder" formControlName="website">\r
              </mat-form-field>\r
            </div>\r
\r
            <div class="col-sm-6">\r
              <mat-form-field>\r
                <input matInput [matDatepicker]="picker2" placeholder="Choose a date"\r
                  formControlName="date">\r
                <mat-datepicker-toggle matSuffix [for]="picker2" />\r
                <mat-datepicker #picker2 />\r
              </mat-form-field>\r
            </div>\r
          </div>\r
\r
          <div class="m-t-8">\r
            <button mat-flat-button>Save</button>\r
            <button mat-button class="m-x-8" type="button">Cancel</button>\r
          </div>\r
        </form>\r
      </mat-card-content>\r
    </mat-card>\r
  </div>\r
</div>\r
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormsElementsComponent, { className: "FormsElementsComponent", filePath: "src/app/routes/forms/elements/elements.component.ts", lineNumber: 41 });
})();

// src/app/routes/forms/data.service.ts
var _DataService = class _DataService {
  constructor() {
    this.http = inject(HttpClient);
  }
  getGithubAccounts(term) {
    if (term) {
      return this.http.get(`https://api.github.com/search/users?q=${term}`).pipe(map((rsp) => rsp.items));
    } else {
      return of([]);
    }
  }
  getAlbums() {
    return this.http.get("https://jsonplaceholder.typicode.com/albums");
  }
  getPhotos() {
    return this.http.get("https://jsonplaceholder.typicode.com/photos");
  }
  getPeople(term) {
    let items = getMockPeople();
    if (term) {
      items = items.filter((x) => x.name.toLocaleLowerCase().indexOf(term.toLocaleLowerCase()) > -1);
    }
    return of(items).pipe(delay(500));
  }
};
_DataService.\u0275fac = function DataService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DataService)();
};
_DataService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DataService, factory: _DataService.\u0275fac });
var DataService = _DataService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DataService, [{
    type: Injectable
  }], null, null);
})();
function getMockPeople() {
  return [
    {
      id: "5a15b13c36e7a7f00cf0d7cb",
      index: 2,
      isActive: true,
      picture: "http://placehold.it/32x32",
      age: 23,
      name: "Karyn Wright",
      gender: "female",
      company: "ZOLAR",
      email: "karynwright@zolar.com",
      phone: "+1 (851) 583-2547"
    },
    {
      id: "5a15b13c2340978ec3d2c0ea",
      index: 3,
      isActive: false,
      picture: "http://placehold.it/32x32",
      age: 35,
      name: "Rochelle Estes",
      disabled: true,
      gender: "female",
      company: "EXTRAWEAR",
      email: "rochelleestes@extrawear.com",
      phone: "+1 (849) 408-2029"
    },
    {
      id: "5a15b13c663ea0af9ad0dae8",
      index: 4,
      isActive: false,
      picture: "http://placehold.it/32x32",
      age: 25,
      name: "Mendoza Ruiz",
      gender: "male",
      company: "ZYTRAX",
      email: "mendozaruiz@zytrax.com",
      phone: "+1 (904) 536-2020"
    },
    {
      id: "5a15b13cc9eeb36511d65acf",
      index: 5,
      isActive: false,
      picture: "http://placehold.it/32x32",
      age: 39,
      name: "Rosales Russell",
      gender: "male",
      company: "ELEMANTRA",
      email: "rosalesrussell@elemantra.com",
      phone: "+1 (868) 473-3073"
    },
    {
      id: "5a15b13c728cd3f43cc0fe8a",
      index: 6,
      isActive: true,
      picture: "http://placehold.it/32x32",
      age: 32,
      name: "Marquez Nolan",
      gender: "male",
      company: "MIRACLIS",
      disabled: true,
      email: "marqueznolan@miraclis.com",
      phone: "+1 (853) 571-3921"
    },
    {
      id: "5a15b13ca51b0aaf8a99c05a",
      index: 7,
      isActive: false,
      picture: "http://placehold.it/32x32",
      age: 28,
      name: "Franklin James",
      gender: "male",
      company: "CAXT",
      email: "franklinjames@caxt.com",
      phone: "+1 (868) 539-2984"
    },
    {
      id: "5a15b13cc3b9381ffcb1d6f7",
      index: 8,
      isActive: false,
      picture: "http://placehold.it/32x32",
      age: 24,
      name: "Elsa Bradley",
      gender: "female",
      company: "MATRIXITY",
      email: "elsabradley@matrixity.com",
      phone: "+1 (994) 583-3850"
    },
    {
      id: "5a15b13ce58cb6ff62c65164",
      index: 9,
      isActive: true,
      picture: "http://placehold.it/32x32",
      age: 40,
      name: "Pearson Thompson",
      gender: "male",
      company: "EZENT",
      email: "pearsonthompson@ezent.com",
      phone: "+1 (917) 537-2178"
    },
    {
      id: "5a15b13c90b95eb68010c86e",
      index: 10,
      isActive: true,
      picture: "http://placehold.it/32x32",
      age: 32,
      name: "Ina Pugh",
      gender: "female",
      company: "MANTRIX",
      email: "inapugh@mantrix.com",
      phone: "+1 (917) 450-2372"
    },
    {
      id: "5a15b13c2b1746e12788711f",
      index: 11,
      isActive: true,
      picture: "http://placehold.it/32x32",
      age: 25,
      name: "Nguyen Elliott",
      gender: "male",
      company: "PORTALINE",
      email: "nguyenelliott@portaline.com",
      phone: "+1 (905) 491-3377"
    },
    {
      id: "5a15b13c605403381eec5019",
      index: 12,
      isActive: true,
      picture: "http://placehold.it/32x32",
      age: 31,
      name: "Mills Barnett",
      gender: "male",
      company: "FARMEX",
      email: "millsbarnett@farmex.com",
      phone: "+1 (882) 462-3986"
    },
    {
      id: "5a15b13c67e2e6d1a3cd6ca5",
      index: 13,
      isActive: true,
      picture: "http://placehold.it/32x32",
      age: 36,
      name: "Margaret Reynolds",
      gender: "female",
      company: "ROOFORIA",
      email: "margaretreynolds@rooforia.com",
      phone: "+1 (935) 435-2345"
    },
    {
      id: "5a15b13c947c836d177aa85c",
      index: 14,
      isActive: false,
      picture: "http://placehold.it/32x32",
      age: 29,
      name: "Yvette Navarro",
      gender: "female",
      company: "KINETICA",
      email: "yvettenavarro@kinetica.com",
      phone: "+1 (807) 485-3824"
    },
    {
      id: "5a15b13c5dbbe61245c1fb73",
      index: 15,
      isActive: false,
      picture: "http://placehold.it/32x32",
      age: 20,
      name: "Elisa Guzman",
      gender: "female",
      company: "KAGE",
      email: "elisaguzman@kage.com",
      phone: "+1 (868) 594-2919"
    },
    {
      id: "5a15b13c38fd49fefea8db80",
      index: 16,
      isActive: false,
      picture: "http://placehold.it/32x32",
      age: 33,
      name: "Jodie Bowman",
      gender: "female",
      company: "EMTRAC",
      email: "jodiebowman@emtrac.com",
      phone: "+1 (891) 565-2560"
    },
    {
      id: "5a15b13c9680913c470eb8fd",
      index: 17,
      isActive: false,
      picture: "http://placehold.it/32x32",
      age: 24,
      name: "Diann Booker",
      gender: "female",
      company: "LYRIA",
      email: "diannbooker@lyria.com",
      phone: "+1 (830) 555-3209"
    }
  ];
}

// src/app/routes/forms/select/edit/edit.component.ts
var _FormsSelectEditComponent = class _FormsSelectEditComponent {
  constructor() {
    this.defaultBindingsList = [
      { value: 1, label: "Vilnius" },
      { value: 2, label: "Kaunas" },
      { value: 3, label: "Pavilnys", disabled: true }
    ];
    this.selectedCity = null;
  }
};
_FormsSelectEditComponent.\u0275fac = function FormsSelectEditComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FormsSelectEditComponent)();
};
_FormsSelectEditComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormsSelectEditComponent, selectors: [["app-forms-select-edit"]], decls: 16, vars: 4, consts: [["mat-dialog-content", ""], [3, "ngModelChange", "items", "ngModel"], [1, "m-x-8"]], template: function FormsSelectEditComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "p");
    \u0275\u0275text(2, " By default dropdown panel is rendered as child element of ng-select, but you can append dropdown to any element using ");
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4, "appendTo");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, ". ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, " If you place ng-select inside container with fixed height and hidden overflow then dropdown will not be fully visible. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "mat-form-field")(9, "mat-label");
    \u0275\u0275text(10, "Without appendTo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "mtx-select", 1);
    \u0275\u0275twoWayListener("ngModelChange", function FormsSelectEditComponent_Template_mtx_select_ngModelChange_11_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.selectedCity, $event) || (ctx.selectedCity = $event);
      return $event;
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "mat-form-field", 2)(13, "mat-label");
    \u0275\u0275text(14, "With appendTo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "mtx-select", 1);
    \u0275\u0275twoWayListener("ngModelChange", function FormsSelectEditComponent_Template_mtx_select_ngModelChange_15_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.selectedCity, $event) || (ctx.selectedCity = $event);
      return $event;
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(11);
    \u0275\u0275property("items", ctx.defaultBindingsList);
    \u0275\u0275twoWayProperty("ngModel", ctx.selectedCity);
    \u0275\u0275advance(4);
    \u0275\u0275property("items", ctx.defaultBindingsList);
    \u0275\u0275twoWayProperty("ngModel", ctx.selectedCity);
  }
}, dependencies: [FormsModule, NgControlStatus, NgModel, MatDialogModule, MatDialogContent, MatFormFieldModule, MatFormField, MatLabel, MtxSelectModule, MtxSelect], encapsulation: 2 });
var FormsSelectEditComponent = _FormsSelectEditComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormsSelectEditComponent, [{
    type: Component,
    args: [{ selector: "app-forms-select-edit", imports: [FormsModule, MatDialogModule, MatFormFieldModule, MtxSelectModule], template: '<div mat-dialog-content>\r\n  <p>\r\n    By default dropdown panel is rendered as child element of ng-select, but you can append dropdown\r\n    to any element using <strong>appendTo</strong>.\r\n  </p>\r\n  <p>\r\n    If you place ng-select inside container with fixed height and hidden overflow then dropdown will\r\n    not be fully visible.\r\n  </p>\r\n\r\n  <mat-form-field>\r\n    <mat-label>Without appendTo</mat-label>\r\n    <mtx-select [items]="defaultBindingsList" [(ngModel)]="selectedCity" />\r\n  </mat-form-field>\r\n\r\n  <mat-form-field class="m-x-8">\r\n    <mat-label>With appendTo</mat-label>\r\n    <mtx-select [items]="defaultBindingsList" [(ngModel)]="selectedCity" />\r\n  </mat-form-field>\r\n</div>\r\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormsSelectEditComponent, { className: "FormsSelectEditComponent", filePath: "src/app/routes/forms/select/edit/edit.component.ts", lineNumber: 13 });
})();

// src/app/routes/forms/select/select.component.ts
var _c02 = () => [];
function FormsSelectComponent_For_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mtx-option", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const car_r1 = ctx.$implicit;
    \u0275\u0275property("value", car_r1.id)("disabled", car_r1.disabled);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(car_r1.name);
  }
}
function FormsSelectComponent_ng_template_98_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "b");
    \u0275\u0275text(1, "create new");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2);
  }
  if (rf & 2) {
    const search_r2 = ctx.searchTerm;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(": ", search_r2, " ");
  }
}
var _FormsSelectComponent = class _FormsSelectComponent {
  constructor() {
    this.dialog = inject(MatDialog);
    this.dataService = inject(DataService);
    this.people = [];
    this.selectedPersonId = "5a15b13c36e7a7f00cf0d7cb";
    this.selectedPersonId2 = "5a15b13c36e7a7f00cf0d7cb";
    this.selectedSimpleItem = "Two";
    this.simpleItems = [];
    this.disable = true;
    this.selectedCarId = 3;
    this.cars = [
      { id: 1, name: "Volvo" },
      { id: 2, name: "Saab", disabled: true },
      { id: 3, name: "Opel" },
      { id: 4, name: "Audi" }
    ];
    this.companies = [];
    this.loading = false;
    this.companiesNames = ["Mi\u0161kas", "\u017Dalias", "Flexigen"];
    this.selectedCompany = null;
    this.selectedCompanyCustom = null;
    this.selectedCompanyCustomPromise = null;
  }
  ngOnInit() {
    this.people$ = this.dataService.getPeople();
    this.dataService.getPeople().subscribe((items) => this.people = items);
    this.simpleItems = [true, "Two", 3];
    this.companiesNames.forEach((c, i) => {
      this.companies.push({ id: i, name: c });
    });
  }
  toggleDisabled() {
    const car = this.cars[1];
    car.disabled = !car.disabled;
  }
  addTag(name) {
    return { name, tag: true };
  }
  addTagPromise(name) {
    return new Promise((resolve) => {
      this.loading = true;
      setTimeout(() => {
        resolve({ id: 5, name, valid: true });
        this.loading = false;
      }, 1e3);
    });
  }
  openDialog() {
    this.dialog.open(FormsSelectEditComponent, {
      autoFocus: false
    });
  }
};
_FormsSelectComponent.\u0275fac = function FormsSelectComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FormsSelectComponent)();
};
_FormsSelectComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormsSelectComponent, selectors: [["app-forms-selects"]], features: [\u0275\u0275ProvidersFeature([DataService])], decls: 116, vars: 44, consts: [[1, "m-b-16"], ["href", "https://ng-matero.github.io/extensions/components/select", "target", "_blank"], ["href", "https://github.com/ng-matero/extensions", "target", "_blank"], [1, "row"], [1, "col-sm-6"], [1, "m-t-0"], [1, "w-full"], ["bindLabel", "name", "bindValue", "id", "autofocus", "", 3, "ngModelChange", "items", "ngModel"], [1, "m-y-16"], ["bindLabel", "name", "bindValue", "id", 3, "ngModelChange", "items", "ngModel"], [3, "ngModelChange", "items", "ngModel"], ["type", "button", "mat-flat-button", "", 1, "m-b-8", 3, "click"], [3, "ngModelChange", "ngModel"], [3, "value", "disabled"], [3, "value"], ["for", ""], [3, "ngModelChange", "items", "addTag", "ngModel"], ["bindLabel", "name", 3, "ngModelChange", "items", "addTag", "hideSelected", "multiple", "ngModel"], ["bindLabel", "name", 3, "ngModelChange", "items", "addTag", "multiple", "loading", "ngModel"], ["ng-tag-tmp", ""], [3, "items", "addTag", "multiple", "selectOnTab", "isOpen"], ["mat-flat-button", "", 3, "click"]], template: function FormsSelectComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "page-header");
    \u0275\u0275elementStart(1, "div", 0);
    \u0275\u0275text(2, " The following examples use the ");
    \u0275\u0275elementStart(3, "a", 1)(4, "code");
    \u0275\u0275text(5, "select");
    \u0275\u0275elementEnd()();
    \u0275\u0275text(6, " component of ");
    \u0275\u0275elementStart(7, "a", 2);
    \u0275\u0275text(8, "Material Extensions");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, ", it is a Material form field wrapper of ");
    \u0275\u0275elementStart(10, "code");
    \u0275\u0275text(11, "ng-select");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, ".\n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 3)(14, "div", 4)(15, "mat-card")(16, "mat-card-header")(17, "mat-card-title");
    \u0275\u0275text(18, "Data Source");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "mat-card-content")(20, "p", 5);
    \u0275\u0275text(21, " Most common case is showing data from backend API and with mtx-select this is extremely simple since you can bind directly to observable when using angular ");
    \u0275\u0275elementStart(22, "b");
    \u0275\u0275text(23, " | async");
    \u0275\u0275elementEnd();
    \u0275\u0275text(24, " pipe. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "mat-form-field", 6)(26, "mat-label");
    \u0275\u0275text(27, "select person");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "mtx-select", 7);
    \u0275\u0275pipe(29, "async");
    \u0275\u0275twoWayListener("ngModelChange", function FormsSelectComponent_Template_mtx_select_ngModelChange_28_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.selectedPersonId, $event) || (ctx.selectedPersonId = $event);
      return $event;
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275text(30);
    \u0275\u0275element(31, "mat-divider", 8);
    \u0275\u0275elementStart(32, "p");
    \u0275\u0275text(33, " You can also set array of objects as items input. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "mat-form-field", 6)(35, "mat-label");
    \u0275\u0275text(36, "select person");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "mtx-select", 9);
    \u0275\u0275twoWayListener("ngModelChange", function FormsSelectComponent_Template_mtx_select_ngModelChange_37_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.selectedPersonId2, $event) || (ctx.selectedPersonId2 = $event);
      return $event;
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275text(38);
    \u0275\u0275element(39, "mat-divider", 8);
    \u0275\u0275elementStart(40, "p");
    \u0275\u0275text(41, " While array of objects is the most common items source, you may want to set simple array of strings, numbers, booleans. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "mat-form-field", 6)(43, "mat-label");
    \u0275\u0275text(44, "select person");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "mtx-select", 10);
    \u0275\u0275twoWayListener("ngModelChange", function FormsSelectComponent_Template_mtx_select_ngModelChange_45_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.selectedSimpleItem, $event) || (ctx.selectedSimpleItem = $event);
      return $event;
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275text(46);
    \u0275\u0275pipe(47, "json");
    \u0275\u0275element(48, "mat-divider", 8);
    \u0275\u0275elementStart(49, "p");
    \u0275\u0275text(50, " If you have simple use case, you can omit items array and bind options directly in html using ");
    \u0275\u0275elementStart(51, "b");
    \u0275\u0275text(52, "ng-option");
    \u0275\u0275elementEnd();
    \u0275\u0275text(53, " component. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "button", 11);
    \u0275\u0275listener("click", function FormsSelectComponent_Template_button_click_54_listener() {
      return ctx.toggleDisabled();
    });
    \u0275\u0275text(55, " Toggle option[1] disabled ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "mat-form-field", 6)(57, "mat-label");
    \u0275\u0275text(58, "Select car");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "mtx-select", 12);
    \u0275\u0275twoWayListener("ngModelChange", function FormsSelectComponent_Template_mtx_select_ngModelChange_59_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.selectedCarId, $event) || (ctx.selectedCarId = $event);
      return $event;
    });
    \u0275\u0275repeaterCreate(60, FormsSelectComponent_For_61_Template, 2, 3, "mtx-option", 13, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementStart(62, "mtx-option", 14);
    \u0275\u0275text(63, "Custom");
    \u0275\u0275elementEnd()()();
    \u0275\u0275text(64);
    \u0275\u0275pipe(65, "json");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(66, "div", 4)(67, "mat-card")(68, "mat-card-header")(69, "mat-card-title");
    \u0275\u0275text(70, "Tags");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(71, "mat-card-content")(72, "label", 15);
    \u0275\u0275text(73, "Default tags");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "mat-form-field", 6)(75, "mat-label");
    \u0275\u0275text(76, "Select item");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "mtx-select", 16);
    \u0275\u0275twoWayListener("ngModelChange", function FormsSelectComponent_Template_mtx_select_ngModelChange_77_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.selectedCompany, $event) || (ctx.selectedCompany = $event);
      return $event;
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(78, "p");
    \u0275\u0275text(79);
    \u0275\u0275pipe(80, "json");
    \u0275\u0275elementEnd();
    \u0275\u0275element(81, "mat-divider", 8);
    \u0275\u0275elementStart(82, "label", 15);
    \u0275\u0275text(83, "Custom tags");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "mat-form-field", 6)(85, "mat-label");
    \u0275\u0275text(86, "Select item");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "mtx-select", 17);
    \u0275\u0275twoWayListener("ngModelChange", function FormsSelectComponent_Template_mtx_select_ngModelChange_87_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.selectedCompanyCustom, $event) || (ctx.selectedCompanyCustom = $event);
      return $event;
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(88, "p");
    \u0275\u0275text(89);
    \u0275\u0275pipe(90, "json");
    \u0275\u0275elementEnd();
    \u0275\u0275element(91, "mat-divider", 8);
    \u0275\u0275elementStart(92, "label", 15);
    \u0275\u0275text(93, "Server side tags");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(94, "mat-form-field", 6)(95, "mat-label");
    \u0275\u0275text(96, "Select item");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(97, "mtx-select", 18);
    \u0275\u0275twoWayListener("ngModelChange", function FormsSelectComponent_Template_mtx_select_ngModelChange_97_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.selectedCompanyCustomPromise, $event) || (ctx.selectedCompanyCustomPromise = $event);
      return $event;
    });
    \u0275\u0275template(98, FormsSelectComponent_ng_template_98_Template, 3, 1, "ng-template", 19);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(99, "mat-divider", 8);
    \u0275\u0275elementStart(100, "label", 15);
    \u0275\u0275text(101, "Tagging without dropdown. Press enter to add item");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(102, "mat-form-field", 6)(103, "mat-label");
    \u0275\u0275text(104, "Select item");
    \u0275\u0275elementEnd();
    \u0275\u0275element(105, "mtx-select", 20);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(106, "div", 4)(107, "mat-card")(108, "mat-card-header")(109, "mat-card-title");
    \u0275\u0275text(110, "Select in dialog");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(111, "mat-card-content")(112, "p");
    \u0275\u0275text(113, "Test ng-select in a dialog.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(114, "button", 21);
    \u0275\u0275listener("click", function FormsSelectComponent_Template_button_click_114_listener() {
      return ctx.openDialog();
    });
    \u0275\u0275text(115, "Open Dialog");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(28);
    \u0275\u0275property("items", \u0275\u0275pipeBind1(29, 32, ctx.people$));
    \u0275\u0275twoWayProperty("ngModel", ctx.selectedPersonId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Selected: ", ctx.selectedPersonId, " ");
    \u0275\u0275advance(7);
    \u0275\u0275property("items", ctx.people);
    \u0275\u0275twoWayProperty("ngModel", ctx.selectedPersonId2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Selected: ", ctx.selectedPersonId2, " ");
    \u0275\u0275advance(7);
    \u0275\u0275property("items", ctx.simpleItems);
    \u0275\u0275twoWayProperty("ngModel", ctx.selectedSimpleItem);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Selected: ", \u0275\u0275pipeBind1(47, 34, ctx.selectedSimpleItem), " ");
    \u0275\u0275advance(13);
    \u0275\u0275twoWayProperty("ngModel", ctx.selectedCarId);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx.cars);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", "custom");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Selected car ID: ", \u0275\u0275pipeBind1(65, 36, ctx.selectedCarId), " ");
    \u0275\u0275advance(13);
    \u0275\u0275property("items", \u0275\u0275pureFunction0(42, _c02))("addTag", true);
    \u0275\u0275twoWayProperty("ngModel", ctx.selectedCompany);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Selected value: ", \u0275\u0275pipeBind1(80, 38, ctx.selectedCompany), " ");
    \u0275\u0275advance(8);
    \u0275\u0275property("items", ctx.companies)("addTag", ctx.addTag)("hideSelected", true)("multiple", true);
    \u0275\u0275twoWayProperty("ngModel", ctx.selectedCompanyCustom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Selected value: ", \u0275\u0275pipeBind1(90, 40, ctx.selectedCompanyCustom), " ");
    \u0275\u0275advance(8);
    \u0275\u0275property("items", ctx.companies)("addTag", ctx.addTagPromise)("multiple", true)("loading", ctx.loading);
    \u0275\u0275twoWayProperty("ngModel", ctx.selectedCompanyCustomPromise);
    \u0275\u0275advance(8);
    \u0275\u0275property("items", \u0275\u0275pureFunction0(43, _c02))("addTag", true)("multiple", true)("selectOnTab", true)("isOpen", false);
  }
}, dependencies: [
  FormsModule,
  NgControlStatus,
  NgModel,
  MatButtonModule,
  MatButton,
  MatCardModule,
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardTitle,
  MatDialogModule,
  MatDividerModule,
  MatDivider,
  MatFormFieldModule,
  MatFormField,
  MatLabel,
  MtxSelectModule,
  MtxSelect,
  MtxOption,
  MtxSelectTagTemplate,
  PageHeaderComponent,
  AsyncPipe,
  JsonPipe
], encapsulation: 2 });
var FormsSelectComponent = _FormsSelectComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormsSelectComponent, [{
    type: Component,
    args: [{ selector: "app-forms-selects", providers: [DataService], imports: [
      AsyncPipe,
      JsonPipe,
      FormsModule,
      MatButtonModule,
      MatCardModule,
      MatDialogModule,
      MatDividerModule,
      MatFormFieldModule,
      MtxSelectModule,
      PageHeaderComponent
    ], template: `<page-header />\r
\r
<div class="m-b-16">\r
  The following examples use the\r
  <a href="https://ng-matero.github.io/extensions/components/select" target="_blank">\r
    <code>select</code></a> component of\r
  <a href="https://github.com/ng-matero/extensions" target="_blank">Material Extensions</a>,\r
  it is a Material form field wrapper of <code>ng-select</code>.\r
</div>\r
\r
<div class="row">\r
  <div class="col-sm-6">\r
    <mat-card>\r
      <mat-card-header>\r
        <mat-card-title>Data Source</mat-card-title>\r
      </mat-card-header>\r
\r
      <mat-card-content>\r
        <p class="m-t-0">\r
          Most common case is showing data from backend API and with mtx-select this is extremely\r
          simple since you can bind directly to observable when using angular <b> | async</b> pipe.\r
        </p>\r
        <mat-form-field class="w-full">\r
          <mat-label>select person</mat-label>\r
          <mtx-select [items]="(people$ | async)!" bindLabel="name" bindValue="id" autofocus\r
            [(ngModel)]="selectedPersonId" />\r
        </mat-form-field>\r
        Selected: {{selectedPersonId}}\r
        <mat-divider class="m-y-16" />\r
\r
        <p>\r
          You can also set array of objects as items input.\r
        </p>\r
        <mat-form-field class="w-full">\r
          <mat-label>select person</mat-label>\r
          <mtx-select [items]="people" bindLabel="name" bindValue="id"\r
            [(ngModel)]="selectedPersonId2" />\r
        </mat-form-field>\r
        Selected: {{selectedPersonId2}}\r
        <mat-divider class="m-y-16" />\r
\r
        <p>\r
          While array of objects is the most common items source, you may want to set simple array\r
          of strings, numbers, booleans.\r
        </p>\r
        <mat-form-field class="w-full">\r
          <mat-label>select person</mat-label>\r
          <mtx-select [items]="simpleItems" [(ngModel)]="selectedSimpleItem" />\r
        </mat-form-field>\r
        Selected: {{selectedSimpleItem | json}}\r
        <mat-divider class="m-y-16" />\r
\r
        <p>\r
          If you have simple use case, you can omit items array and bind options directly in html\r
          using <b>ng-option</b> component.\r
        </p>\r
        <button class="m-b-8" type="button" mat-flat-button (click)="toggleDisabled()">\r
          Toggle option[1] disabled\r
        </button>\r
\r
        <mat-form-field class="w-full">\r
          <mat-label>Select car</mat-label>\r
          <mtx-select [(ngModel)]="selectedCarId">\r
            @for (car of cars; track car) {\r
              <mtx-option [value]="car.id" [disabled]="car.disabled">{{car.name}}</mtx-option>\r
            }\r
            <mtx-option [value]="'custom'">Custom</mtx-option>\r
          </mtx-select>\r
        </mat-form-field>\r
\r
        Selected car ID: {{selectedCarId | json}}\r
      </mat-card-content>\r
    </mat-card>\r
  </div>\r
\r
  <div class="col-sm-6">\r
    <mat-card>\r
      <mat-card-header>\r
        <mat-card-title>Tags</mat-card-title>\r
      </mat-card-header>\r
\r
      <mat-card-content>\r
        <label for="">Default tags</label>\r
        <mat-form-field class="w-full">\r
          <mat-label>Select item</mat-label>\r
          <mtx-select [items]="[]" [addTag]="true" [(ngModel)]="selectedCompany" />\r
        </mat-form-field>\r
\r
        <p>\r
          Selected value: {{selectedCompany | json}}\r
        </p>\r
        <mat-divider class="m-y-16" />\r
\r
        <label for="">Custom tags</label>\r
        <mat-form-field class="w-full">\r
          <mat-label>Select item</mat-label>\r
          <mtx-select [items]="companies" [addTag]="addTag" [hideSelected]="true" [multiple]="true"\r
            bindLabel="name" [(ngModel)]="selectedCompanyCustom" />\r
        </mat-form-field>\r
\r
        <p>\r
          Selected value: {{selectedCompanyCustom | json}}\r
        </p>\r
\r
        <mat-divider class="m-y-16" />\r
\r
        <label for="">Server side tags</label>\r
        <mat-form-field class="w-full">\r
          <mat-label>Select item</mat-label>\r
          <mtx-select [items]="companies" [addTag]="addTagPromise" [multiple]="true"\r
            bindLabel="name" [loading]="loading"\r
            [(ngModel)]="selectedCompanyCustomPromise">\r
            <ng-template ng-tag-tmp let-search="searchTerm">\r
              <b>create new</b>: {{search}}\r
            </ng-template>\r
          </mtx-select>\r
        </mat-form-field>\r
\r
        <mat-divider class="m-y-16" />\r
\r
        <label for="">Tagging without dropdown. Press enter to add item</label>\r
        <mat-form-field class="w-full">\r
          <mat-label>Select item</mat-label>\r
          <mtx-select [items]="[]" [addTag]="true" [multiple]="true" [selectOnTab]="true"\r
            [isOpen]="false" />\r
        </mat-form-field>\r
\r
      </mat-card-content>\r
    </mat-card>\r
  </div>\r
\r
  <div class="col-sm-6">\r
    <mat-card>\r
      <mat-card-header>\r
        <mat-card-title>Select in dialog</mat-card-title>\r
      </mat-card-header>\r
\r
      <mat-card-content>\r
        <p>Test ng-select in a dialog.</p>\r
        <button mat-flat-button (click)="openDialog()">Open Dialog</button>\r
      </mat-card-content>\r
    </mat-card>\r
  </div>\r
</div>\r
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormsSelectComponent, { className: "FormsSelectComponent", filePath: "src/app/routes/forms/select/select.component.ts", lineNumber: 34 });
})();

// src/app/routes/forms/forms.routes.ts
var routes = [
  { path: "elements", component: FormsElementsComponent },
  { path: "dynamic", component: FormsDynamicComponent },
  { path: "select", component: FormsSelectComponent },
  { path: "datetime", component: FormsDatetimeComponent }
];
export {
  routes
};
//# sourceMappingURL=chunk-X6VVGJEF.js.map
