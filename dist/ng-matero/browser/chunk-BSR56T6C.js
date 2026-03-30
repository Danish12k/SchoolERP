import {
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardModule,
  MatCardTitle
} from "./chunk-VYFYOWDW.js";
import {
  M3_COLORS,
  MAT_ICONS,
  PageHeaderComponent
} from "./chunk-NJPKBYXE.js";
import {
  KeyValuePipe,
  MatIcon,
  MatIconModule
} from "./chunk-VC5UOWO3.js";
import "./chunk-R3YVZPGI.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinterpolate1,
  ɵɵinterpolate2,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-KH435EP6.js";

// src/app/routes/design/colors/colors.component.ts
function DesignColorsComponent_For_2_For_5_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div")(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElement(3, "span", 4);
    \u0275\u0275domElementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const hue_r1 = \u0275\u0275nextContext().$implicit;
    const color_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classMap(\u0275\u0275interpolate1("d-flex p-8 bg-", color_r2.key + "-" + hue_r1.key));
    \u0275\u0275classProp("text-light", hue_r1.key <= 60)("text-dark", hue_r1.key > 60);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(hue_r1.key);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(hue_r1.value);
  }
}
function DesignColorsComponent_For_2_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, DesignColorsComponent_For_2_For_5_Conditional_0_Template, 6, 9, "div", 3);
  }
  if (rf & 2) {
    const hue_r1 = ctx.$implicit;
    \u0275\u0275conditional(hue_r1.key > 0 && hue_r1.key < 100 ? 0 : -1);
  }
}
function DesignColorsComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 1)(1, "div", 2)(2, "div");
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
    \u0275\u0275repeaterCreate(4, DesignColorsComponent_For_2_For_5_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(6, "keyvalue");
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const color_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275classMap(\u0275\u0275interpolate2("p-8 text-capitalize text-", color_r2.key, "-95 bg-", color_r2.key, "-10"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(color_r2.key);
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pipeBind2(6, 5, color_r2.value, ctx_r2.keyAscOrder));
  }
}
var _DesignColorsComponent = class _DesignColorsComponent {
  constructor() {
    this.colors = [];
  }
  valueAscOrder(a, b) {
    return a.value.localeCompare(b.value);
  }
  keyAscOrder(a, b) {
    return a.key - b.key;
  }
  ngOnInit() {
    const colors = M3_COLORS;
    for (const key of Object.keys(colors)) {
      this.colors.push({
        key,
        value: colors[key]
      });
    }
  }
  trackByColor(index, color) {
    return color.key;
  }
};
_DesignColorsComponent.\u0275fac = function DesignColorsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DesignColorsComponent)();
};
_DesignColorsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DesignColorsComponent, selectors: [["app-design-colors"]], decls: 3, vars: 0, consts: [[1, "row"], [1, "col-sm-6", "col-md-3", "col-xl-2"], [1, "b-1", "m-b-16", "r-16", "overflow-hidden"], [3, "class", "text-light", "text-dark"], [1, "flex-fill"]], template: function DesignColorsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 0);
    \u0275\u0275repeaterCreate(1, DesignColorsComponent_For_2_Template, 7, 8, "div", 1, ctx.trackByColor, true);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx.colors);
  }
}, dependencies: [KeyValuePipe], encapsulation: 2 });
var DesignColorsComponent = _DesignColorsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DesignColorsComponent, [{
    type: Component,
    args: [{ selector: "app-design-colors", imports: [KeyValuePipe, PageHeaderComponent], template: `<div class="row">\r
  @for (color of colors; track trackByColor($index, color)) {\r
    <div class="col-sm-6 col-md-3 col-xl-2">\r
      <div class="b-1 m-b-16 r-16 overflow-hidden">\r
        <div class="p-8 text-capitalize text-{{color.key}}-95 bg-{{color.key}}-10">{{color.key}}</div>\r
\r
        @for (hue of color.value | keyvalue: keyAscOrder; track hue) {\r
          @if (hue.key > 0 && hue.key < 100) {\r
            <div class="d-flex p-8 bg-{{color.key + '-' + hue.key}}"\r
                [class.text-light]="hue.key <= 60"\r
                [class.text-dark]="hue.key > 60">\r
              <span>{{hue.key}}</span>\r
              <span class="flex-fill"></span>\r
              <span>{{hue.value}}</span>\r
            </div>\r
          }\r
        }\r
      </div>\r
    </div>\r
  }\r
</div>\r
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DesignColorsComponent, { className: "DesignColorsComponent", filePath: "src/app/routes/design/colors/colors.component.ts", lineNumber: 12 });
})();

// src/app/routes/design/icons/icons.component.ts
function DesignIconsComponent_For_2_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "mat-icon");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 5);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const icon_r1 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(icon_r1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(icon_r1);
  }
}
function DesignIconsComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-card")(1, "mat-card-header")(2, "mat-card-title", 1);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "mat-card-content")(5, "div", 2);
    \u0275\u0275repeaterCreate(6, DesignIconsComponent_For_2_For_7_Template, 6, 2, "div", 3, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const group_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(group_r2.key);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(group_r2.value);
  }
}
var _DesignIconsComponent = class _DesignIconsComponent {
  ngOnInit() {
    this.icons = MAT_ICONS;
  }
  trackByIcon(index, icon) {
    return icon.key;
  }
};
_DesignIconsComponent.\u0275fac = function DesignIconsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DesignIconsComponent)();
};
_DesignIconsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DesignIconsComponent, selectors: [["app-design-icons"]], decls: 4, vars: 2, consts: [[1, "bg-magenta-40"], [1, "text-capitalize", "m-b-16", "text-gray-500"], [1, "row"], [1, "col-4", "col-sm-3", "col-md-2", "col-xl-1"], [1, "text-center", "m-t-12", "m-b-24"], [1, "f-s-12"]], template: function DesignIconsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "page-header", 0);
    \u0275\u0275repeaterCreate(1, DesignIconsComponent_For_2_Template, 8, 1, "mat-card", null, ctx.trackByIcon, true);
    \u0275\u0275pipe(3, "keyvalue");
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pipeBind1(3, 0, ctx.icons));
  }
}, dependencies: [MatCardModule, MatCard, MatCardContent, MatCardHeader, MatCardTitle, MatIconModule, MatIcon, PageHeaderComponent, KeyValuePipe], encapsulation: 2 });
var DesignIconsComponent = _DesignIconsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DesignIconsComponent, [{
    type: Component,
    args: [{ selector: "app-design-icons", imports: [KeyValuePipe, MatCardModule, MatIconModule, PageHeaderComponent], template: '<page-header class="bg-magenta-40" />\r\n\r\n@for (group of icons | keyvalue; track trackByIcon($index, group)) {\r\n  <mat-card>\r\n    <mat-card-header>\r\n      <mat-card-title class="text-capitalize m-b-16 text-gray-500">{{group.key}}</mat-card-title>\r\n    </mat-card-header>\r\n    <mat-card-content>\r\n      <div class="row">\r\n        @for (icon of group.value; track icon) {\r\n          <div class="col-4 col-sm-3 col-md-2 col-xl-1">\r\n            <div class="text-center m-t-12 m-b-24">\r\n              <mat-icon>{{icon}}</mat-icon>\r\n              <p class="f-s-12">{{icon}}</p>\r\n            </div>\r\n          </div>\r\n        }\r\n      </div>\r\n    </mat-card-content>\r\n  </mat-card>\r\n}\r\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DesignIconsComponent, { className: "DesignIconsComponent", filePath: "src/app/routes/design/icons/icons.component.ts", lineNumber: 14 });
})();

// src/app/routes/design/design.routes.ts
var routes = [
  { path: "colors", component: DesignColorsComponent },
  { path: "icons", component: DesignIconsComponent }
];
export {
  routes
};
//# sourceMappingURL=chunk-BSR56T6C.js.map
