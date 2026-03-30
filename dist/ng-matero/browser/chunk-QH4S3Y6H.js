import {
  MatList,
  MatListItem,
  MatListModule,
  MatListSubheaderCssMatStyler,
  MatTab,
  MatTabGroup,
  MatTabsModule
} from "./chunk-SYOIFQFY.js";
import "./chunk-PLIWSWLX.js";
import {
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardModule,
  MatCardTitle
} from "./chunk-VYFYOWDW.js";
import {
  PageHeaderComponent,
  RouterLink
} from "./chunk-NJPKBYXE.js";
import "./chunk-VC5UOWO3.js";
import "./chunk-R3YVZPGI.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-KH435EP6.js";

// src/app/routes/utilities/css-grid/css-grid.component.ts
var _UtilitiesCssGridComponent = class _UtilitiesCssGridComponent {
};
_UtilitiesCssGridComponent.\u0275fac = function UtilitiesCssGridComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _UtilitiesCssGridComponent)();
};
_UtilitiesCssGridComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UtilitiesCssGridComponent, selectors: [["app-utilities-css-grid"]], decls: 70, vars: 0, consts: [["href", "https://github.com/angular/flex-layout/wiki/Responsive-API#responsive-features"], ["routerLink", "/forms/dynamic"], [1, "p-x-8", "text-center"], [1, "row"], [1, "col"], [1, "col-8"], [1, "col-4"], [1, "col-sm-8"], [1, "col-sm-4"], [1, "col-sm"], [1, "col-md-8"], [1, "col-6", "col-md-4"], [1, "col-6"]], template: function UtilitiesCssGridComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "page-header");
    \u0275\u0275elementStart(1, "p");
    \u0275\u0275text(2, " The CSS grid's breakpoints are the same as the default ");
    \u0275\u0275elementStart(3, "a", 0);
    \u0275\u0275text(4, " breakpoints for flex-layout");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, ". It's very useful for advanced layout with ngx-formly. You can check the dynamic form's ");
    \u0275\u0275elementStart(6, "a", 1);
    \u0275\u0275text(7, "advanced layout example");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, ".\n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "mat-card")(10, "mat-card-header")(11, "mat-card-title");
    \u0275\u0275text(12, "All breakpoints");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "mat-card-content")(14, "div", 2)(15, "div", 3)(16, "div", 4);
    \u0275\u0275text(17, ".col");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 4);
    \u0275\u0275text(19, ".col");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 4);
    \u0275\u0275text(21, ".col");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 4);
    \u0275\u0275text(23, ".col");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 3)(25, "div", 5);
    \u0275\u0275text(26, ".col-8");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 6);
    \u0275\u0275text(28, ".col-4");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(29, "mat-card")(30, "mat-card-header")(31, "mat-card-title");
    \u0275\u0275text(32, "Stacked to horizontal");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "mat-card-content")(34, "div", 2)(35, "div", 3)(36, "div", 7);
    \u0275\u0275text(37, ".col-sm-8");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 8);
    \u0275\u0275text(39, ".col-sm-4");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 3)(41, "div", 9);
    \u0275\u0275text(42, ".col-sm");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 9);
    \u0275\u0275text(44, ".col-sm");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "div", 9);
    \u0275\u0275text(46, ".col-sm");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(47, "mat-card")(48, "mat-card-header")(49, "mat-card-title");
    \u0275\u0275text(50, "Mix and match");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "mat-card-content")(52, "div", 2)(53, "div", 3)(54, "div", 10);
    \u0275\u0275text(55, ".col-md-8");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "div", 11);
    \u0275\u0275text(57, ".col-6 .col-md-4");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "div", 3)(59, "div", 11);
    \u0275\u0275text(60, ".col-6 .col-md-4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "div", 11);
    \u0275\u0275text(62, ".col-6 .col-md-4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "div", 11);
    \u0275\u0275text(64, ".col-6 .col-md-4");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(65, "div", 3)(66, "div", 12);
    \u0275\u0275text(67, ".col-6");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "div", 12);
    \u0275\u0275text(69, ".col-6");
    \u0275\u0275elementEnd()()()()();
  }
}, dependencies: [RouterLink, MatCardModule, MatCard, MatCardContent, MatCardHeader, MatCardTitle, PageHeaderComponent], styles: ["\n\n[class^=col][_ngcontent-%COMP%] {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n  background-color: #ffcdd2;\n  border: 1px solid #ef9a9a;\n}\n.row[_ngcontent-%COMP%]    + .row[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n/*# sourceMappingURL=css-grid.component.css.map */"] });
var UtilitiesCssGridComponent = _UtilitiesCssGridComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UtilitiesCssGridComponent, [{
    type: Component,
    args: [{ selector: "app-utilities-css-grid", imports: [RouterLink, MatCardModule, PageHeaderComponent], template: `<page-header />\r
\r
<p>\r
  The CSS grid's breakpoints are the same as the default\r
  <a href="https://github.com/angular/flex-layout/wiki/Responsive-API#responsive-features">\r
    breakpoints for flex-layout</a>.\r
  It's very useful for advanced layout with ngx-formly. You can check the dynamic form's\r
  <a routerLink="/forms/dynamic">advanced layout example</a>.\r
</p>\r
\r
<mat-card>\r
  <mat-card-header>\r
    <mat-card-title>All breakpoints</mat-card-title>\r
  </mat-card-header>\r
\r
  <mat-card-content>\r
    <div class="p-x-8 text-center">\r
      <div class="row">\r
        <div class="col">.col</div>\r
        <div class="col">.col</div>\r
        <div class="col">.col</div>\r
        <div class="col">.col</div>\r
      </div>\r
      <div class="row">\r
        <div class="col-8">.col-8</div>\r
        <div class="col-4">.col-4</div>\r
      </div>\r
    </div>\r
  </mat-card-content>\r
</mat-card>\r
\r
<mat-card>\r
  <mat-card-header>\r
    <mat-card-title>Stacked to horizontal</mat-card-title>\r
  </mat-card-header>\r
\r
  <mat-card-content>\r
    <div class="p-x-8 text-center">\r
      <div class="row">\r
        <div class="col-sm-8">.col-sm-8</div>\r
        <div class="col-sm-4">.col-sm-4</div>\r
      </div>\r
      <div class="row">\r
        <div class="col-sm">.col-sm</div>\r
        <div class="col-sm">.col-sm</div>\r
        <div class="col-sm">.col-sm</div>\r
      </div>\r
    </div>\r
  </mat-card-content>\r
</mat-card>\r
\r
<mat-card>\r
  <mat-card-header>\r
    <mat-card-title>Mix and match</mat-card-title>\r
  </mat-card-header>\r
\r
  <mat-card-content>\r
    <div class="p-x-8 text-center">\r
      <!-- Stack the columns on mobile by making one full-width and the other half-width -->\r
      <div class="row">\r
        <div class="col-md-8">.col-md-8</div>\r
        <div class="col-6 col-md-4">.col-6 .col-md-4</div>\r
      </div>\r
\r
      <!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->\r
      <div class="row">\r
        <div class="col-6 col-md-4">.col-6 .col-md-4</div>\r
        <div class="col-6 col-md-4">.col-6 .col-md-4</div>\r
        <div class="col-6 col-md-4">.col-6 .col-md-4</div>\r
      </div>\r
\r
      <!-- Columns are always 50% wide, on mobile and desktop -->\r
      <div class="row">\r
        <div class="col-6">.col-6</div>\r
        <div class="col-6">.col-6</div>\r
      </div>\r
    </div>\r
  </mat-card-content>\r
</mat-card>\r
`, styles: ["/* src/app/routes/utilities/css-grid/css-grid.component.scss */\n[class^=col] {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n  background-color: #ffcdd2;\n  border: 1px solid #ef9a9a;\n}\n.row + .row {\n  margin-top: 1rem;\n}\n/*# sourceMappingURL=css-grid.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UtilitiesCssGridComponent, { className: "UtilitiesCssGridComponent", filePath: "src/app/routes/utilities/css-grid/css-grid.component.ts", lineNumber: 13 });
})();

// src/app/routes/utilities/css-helpers/css-helpers.component.ts
var _c0 = () => ["white", "black", "light", "dark"];
var _c1 = () => ["static", "fixed", "absolute", "relative", "sticky"];
var _c2 = () => ["block", "inline-block", "inline", "flex", "inline-flex", "none"];
var _c3 = () => ["row", "row-reverse", "col", "col-reverse"];
var _c4 = () => ["grow-0", "grow-1"];
var _c5 = () => ["shrink-0", "shrink-1"];
var _c6 = () => ["wrap", "nowrap", "wrap-reverse"];
var _c7 = () => ["start", "end", "center", "between", "around"];
var _c8 = () => ["start", "end", "center", "between", "around", "stretch"];
var _c9 = () => ["start", "end", "center", "baseline", "stretch"];
var _c10 = () => ["auto", "start", "end", "center", "baseline", "stretch"];
var _c11 = () => [0, 4, 8, 16, 24, 32, 48, "auto"];
var _c12 = () => [4, 8, 16, 24, 32, 48];
var _c13 = () => [0, 4, 8, 16, 24, 32, 48];
var _c14 = () => [0, 1, 2, 3, 4, 5];
var _c15 = () => ["solid", "dashed", "dotted", "double", "hidden", "none"];
var _c16 = () => [0, 4, 8, 16, 24, 32, "full"];
var _c17 = () => [20, 25, 40, 50, 60, 75, 80, "full", "auto"];
var _c18 = () => [1, 2, 3, 4, 5, 6, 7, 8, 9];
var _c19 = () => [0, 10, 12, 14, 16, 18, 20];
var _c20 = () => ["top", "middle", "bottom"];
var _c21 = () => ["default", "pointer", "text", "move", "copy", "not-allowed"];
var _c22 = () => ["all", "auto", "none"];
var _c23 = () => ["auto", "hidden", "visible", "scroll"];
var _c24 = () => ["cover", "contain", "fill", "none", "scale-down"];
var _c25 = () => ["top", "bottom", "center", "left", "left-top", "left-right", "right", "right-top", "right-bottom"];
var _c26 = () => [18, 24, 36, 48];
function UtilitiesCssHelpersComponent_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-list-item")(1, "code");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const i_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(".[bg|border|text]-", i_r1, "-[", ctx_r1.colorHues, "]");
  }
}
function UtilitiesCssHelpersComponent_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-list-item")(1, "code");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(".[bg|border|text]-", c_r3);
  }
}
function UtilitiesCssHelpersComponent_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-list-item")(1, "code");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const i_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(".", i_r4);
  }
}
function UtilitiesCssHelpersComponent_For_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-list-item")(1, "code");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const i_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(".d-", i_r5);
  }
}
function UtilitiesCssHelpersComponent_For_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-list-item")(1, "code");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const i_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(".flex-", i_r6);
  }
}
function UtilitiesCssHelpersComponent_For_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-list-item")(1, "code");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const i_r7 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(".flex-", i_r7);
  }
}
function UtilitiesCssHelpersComponent_For_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-list-item")(1, "code");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const i_r8 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(".flex-", i_r8);
  }
}
function UtilitiesCssHelpersComponent_For_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-list-item")(1, "code");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const i_r9 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(".flex-", i_r9);
  }
}
function UtilitiesCssHelpersComponent_For_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-list-item")(1, "code");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const i_r10 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(".justify-content-", i_r10);
  }
}
function UtilitiesCssHelpersComponent_For_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-list-item")(1, "code");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const i_r11 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(".align-content-", i_r11);
  }
}
function UtilitiesCssHelpersComponent_For_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-list-item")(1, "code");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const i_r12 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(".align-items-", i_r12);
  }
}
function UtilitiesCssHelpersComponent_For_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-list-item")(1, "code");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const i_r13 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(".align-self-", i_r13);
  }
}
function UtilitiesCssHelpersComponent_For_81_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-list-item")(1, "code");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const i_r14 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(".m[-[t|b|r|l|x|y]]-", i_r14);
  }
}
function UtilitiesCssHelpersComponent_For_87_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-list-item")(1, "code");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const i_r15 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(".m[-[t|b|r|l|x|y]]--", i_r15);
  }
}
function UtilitiesCssHelpersComponent_For_93_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-list-item")(1, "code");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const i_r16 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(".p[-[t|b|r|l|x|y]]-", i_r16);
  }
}
function UtilitiesCssHelpersComponent_For_99_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-list-item")(1, "code");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const i_r17 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(".gap[-[t|b|r|l|x|y]]-", i_r17);
  }
}
function UtilitiesCssHelpersComponent_For_107_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-list-item")(1, "code");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const i_r18 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(".b[-[t|b|r|l|x|y]]-", i_r18);
  }
}
function UtilitiesCssHelpersComponent_For_113_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-list-item")(1, "code");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const i_r19 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(".border[-[t|b|r|l|x|y]]-", i_r19);
  }
}
function UtilitiesCssHelpersComponent_For_119_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-list-item")(1, "code");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const i_r20 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(".border[-[t|b|r|l|x|y]]-", i_r20);
  }
}
function UtilitiesCssHelpersComponent_For_125_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-list-item")(1, "code");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const i_r21 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(".r[-[t|b]-[r|l]]-", i_r21, ", r[-[t|b|l|r]]-", i_r21);
  }
}
function UtilitiesCssHelpersComponent_For_133_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-list-item")(1, "code");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const i_r22 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(".w-", i_r22);
  }
}
function UtilitiesCssHelpersComponent_For_139_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-list-item")(1, "code");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const i_r23 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(".h-", i_r23);
  }
}
function UtilitiesCssHelpersComponent_For_147_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-list-item")(1, "code");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const i_r24 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(".f-w-", i_r24 * 100);
  }
}
function UtilitiesCssHelpersComponent_For_153_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-list-item")(1, "code");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const i_r25 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(".f-s-", i_r25);
  }
}
function UtilitiesCssHelpersComponent_For_244_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-list-item")(1, "code");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const i_r26 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(".align-", i_r26);
  }
}
function UtilitiesCssHelpersComponent_For_250_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-list-item")(1, "code");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const i_r27 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(".cursor-", i_r27);
  }
}
function UtilitiesCssHelpersComponent_For_256_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-list-item")(1, "code");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const i_r28 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(".select-", i_r28);
  }
}
function UtilitiesCssHelpersComponent_For_272_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-list-item")(1, "code");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const i_r29 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(".overflow[-[x|y]]-", i_r29);
  }
}
function UtilitiesCssHelpersComponent_For_278_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-list-item")(1, "code");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const i_r30 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(".object-", i_r30);
  }
}
function UtilitiesCssHelpersComponent_For_284_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-list-item")(1, "code");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const i_r31 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(".object-", i_r31);
  }
}
function UtilitiesCssHelpersComponent_For_290_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-list-item")(1, "code");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const i_r32 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(".icon-", i_r32);
  }
}
var _UtilitiesCssHelpersComponent = class _UtilitiesCssHelpersComponent {
  constructor() {
    this.colorNames = "red|pink|purple|deep-purple|indigo|blue|light-blue|cyan|teal|green|light-green|lime|yellow|amber|orange|deep-orange|brown|gray|grey|blue-gray|blue-grey".split("|");
    this.colorHues = "10|20|25|30|35|40|50|60|70|80|90|95|98|99";
  }
};
_UtilitiesCssHelpersComponent.\u0275fac = function UtilitiesCssHelpersComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _UtilitiesCssHelpersComponent)();
};
_UtilitiesCssHelpersComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UtilitiesCssHelpersComponent, selectors: [["app-utilities-css-helpers"]], decls: 291, vars: 30, consts: [["mat-stretch-tabs", "false"], ["label", "Colors"], [1, "row", "no-gutters"], ["matSubheader", ""], ["label", "Layout"], [1, "col-sm-6", "col-md-3"], ["label", "Spacings"], ["label", "Border"], [1, "col-sm-12", "col-md-6"], ["label", "Size"], ["label", "Text"], ["label", "Misc"]], template: function UtilitiesCssHelpersComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "page-header");
    \u0275\u0275elementStart(1, "mat-card")(2, "mat-tab-group", 0)(3, "mat-tab", 1)(4, "div", 2)(5, "div")(6, "mat-list")(7, "h3", 3);
    \u0275\u0275text(8, "Background/Border/Text Color");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(9, UtilitiesCssHelpersComponent_For_10_Template, 3, 2, "mat-list-item", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275repeaterCreate(11, UtilitiesCssHelpersComponent_For_12_Template, 3, 1, "mat-list-item", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(13, "mat-tab", 4)(14, "div", 2)(15, "div", 5)(16, "mat-list")(17, "h3", 3);
    \u0275\u0275text(18, "Position");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(19, UtilitiesCssHelpersComponent_For_20_Template, 3, 1, "mat-list-item", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 5)(22, "mat-list")(23, "h3", 3);
    \u0275\u0275text(24, "Display");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(25, UtilitiesCssHelpersComponent_For_26_Template, 3, 1, "mat-list-item", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 5)(28, "mat-list")(29, "h3", 3);
    \u0275\u0275text(30, "Flexbox (Direction)");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(31, UtilitiesCssHelpersComponent_For_32_Template, 3, 1, "mat-list-item", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 5)(34, "mat-list")(35, "h3", 3);
    \u0275\u0275text(36, "Flexbox (Fill & Grow & shrink)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "mat-list-item")(38, "code");
    \u0275\u0275text(39, ".flex-fill");
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(40, UtilitiesCssHelpersComponent_For_41_Template, 3, 1, "mat-list-item", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275repeaterCreate(42, UtilitiesCssHelpersComponent_For_43_Template, 3, 1, "mat-list-item", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div", 5)(45, "mat-list")(46, "h3", 3);
    \u0275\u0275text(47, "Flexbox (Wrap)");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(48, UtilitiesCssHelpersComponent_For_49_Template, 3, 1, "mat-list-item", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "div", 5)(51, "mat-list")(52, "h3", 3);
    \u0275\u0275text(53, "Flexbox (Justify content)");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(54, UtilitiesCssHelpersComponent_For_55_Template, 3, 1, "mat-list-item", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "div", 5)(57, "mat-list")(58, "h3", 3);
    \u0275\u0275text(59, "Flexbox (Align content)");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(60, UtilitiesCssHelpersComponent_For_61_Template, 3, 1, "mat-list-item", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(62, "div", 5)(63, "mat-list")(64, "h3", 3);
    \u0275\u0275text(65, "Flexbox (Align items)");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(66, UtilitiesCssHelpersComponent_For_67_Template, 3, 1, "mat-list-item", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(68, "div", 5)(69, "mat-list")(70, "h3", 3);
    \u0275\u0275text(71, "Flexbox (Align self)");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(72, UtilitiesCssHelpersComponent_For_73_Template, 3, 1, "mat-list-item", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(74, "mat-tab", 6)(75, "div", 2)(76, "div", 5)(77, "mat-list")(78, "h3", 3);
    \u0275\u0275text(79, "Margin");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(80, UtilitiesCssHelpersComponent_For_81_Template, 3, 1, "mat-list-item", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(82, "div", 5)(83, "mat-list")(84, "h3", 3);
    \u0275\u0275text(85, "Negative Margin");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(86, UtilitiesCssHelpersComponent_For_87_Template, 3, 1, "mat-list-item", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(88, "div", 5)(89, "mat-list")(90, "h3", 3);
    \u0275\u0275text(91, "Padding");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(92, UtilitiesCssHelpersComponent_For_93_Template, 3, 1, "mat-list-item", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(94, "div", 5)(95, "mat-list")(96, "h3", 3);
    \u0275\u0275text(97, "Gap");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(98, UtilitiesCssHelpersComponent_For_99_Template, 3, 1, "mat-list-item", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(100, "mat-tab", 7)(101, "div", 2)(102, "div", 5)(103, "mat-list")(104, "h3", 3);
    \u0275\u0275text(105, "Border");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(106, UtilitiesCssHelpersComponent_For_107_Template, 3, 1, "mat-list-item", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(108, "div", 5)(109, "mat-list")(110, "h3", 3);
    \u0275\u0275text(111, "Border Width");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(112, UtilitiesCssHelpersComponent_For_113_Template, 3, 1, "mat-list-item", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(114, "div", 8)(115, "mat-list")(116, "h3", 3);
    \u0275\u0275text(117, "Border Style");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(118, UtilitiesCssHelpersComponent_For_119_Template, 3, 1, "mat-list-item", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(120, "div", 8)(121, "mat-list")(122, "h3", 3);
    \u0275\u0275text(123, "Border Radius");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(124, UtilitiesCssHelpersComponent_For_125_Template, 3, 2, "mat-list-item", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(126, "mat-tab", 9)(127, "div", 2)(128, "div", 5)(129, "mat-list")(130, "h3", 3);
    \u0275\u0275text(131, "Width (%)");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(132, UtilitiesCssHelpersComponent_For_133_Template, 3, 1, "mat-list-item", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(134, "div", 5)(135, "mat-list")(136, "h3", 3);
    \u0275\u0275text(137, "Height (%)");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(138, UtilitiesCssHelpersComponent_For_139_Template, 3, 1, "mat-list-item", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(140, "mat-tab", 10)(141, "div", 2)(142, "div", 5)(143, "mat-list")(144, "h3", 3);
    \u0275\u0275text(145, "Font Weight");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(146, UtilitiesCssHelpersComponent_For_147_Template, 3, 1, "mat-list-item", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(148, "div", 5)(149, "mat-list")(150, "h3", 3);
    \u0275\u0275text(151, "Font Size");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(152, UtilitiesCssHelpersComponent_For_153_Template, 3, 1, "mat-list-item", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(154, "div", 5)(155, "mat-list")(156, "h3", 3);
    \u0275\u0275text(157, "Font Style");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(158, "mat-list-item")(159, "code");
    \u0275\u0275text(160, ".font-italic");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(161, "mat-list-item")(162, "code");
    \u0275\u0275text(163, ".font-normal");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(164, "div", 5)(165, "mat-list")(166, "h3", 3);
    \u0275\u0275text(167, "Text Align");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(168, "mat-list-item")(169, "code");
    \u0275\u0275text(170, ".text-center");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(171, "mat-list-item")(172, "code");
    \u0275\u0275text(173, ".text-right");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(174, "mat-list-item")(175, "code");
    \u0275\u0275text(176, ".text-left");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(177, "div", 5)(178, "mat-list")(179, "h3", 3);
    \u0275\u0275text(180, "Text Decoration");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(181, "mat-list-item")(182, "code");
    \u0275\u0275text(183, ".text-none");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(184, "mat-list-item")(185, "code");
    \u0275\u0275text(186, ".text-underline");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(187, "mat-list-item")(188, "code");
    \u0275\u0275text(189, ".text-line-through");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(190, "div", 5)(191, "mat-list")(192, "h3", 3);
    \u0275\u0275text(193, "Text Transform");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(194, "mat-list-item")(195, "code");
    \u0275\u0275text(196, ".text-capitalize");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(197, "mat-list-item")(198, "code");
    \u0275\u0275text(199, ".text-uppercase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(200, "mat-list-item")(201, "code");
    \u0275\u0275text(202, ".text-lowercase");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(203, "div", 5)(204, "mat-list")(205, "h3", 3);
    \u0275\u0275text(206, "White Space");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(207, "mat-list-item")(208, "code");
    \u0275\u0275text(209, ".text-normal");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(210, "mat-list-item")(211, "code");
    \u0275\u0275text(212, ".text-nowrap");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(213, "div", 5)(214, "mat-list")(215, "h3", 3);
    \u0275\u0275text(216, "Word Wrap");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(217, "mat-list-item")(218, "code");
    \u0275\u0275text(219, ".text-break");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(220, "div", 5)(221, "mat-list")(222, "h3", 3);
    \u0275\u0275text(223, "Text Overflow");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(224, "mat-list-item")(225, "code");
    \u0275\u0275text(226, ".text-ellipsis");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(227, "div", 5)(228, "mat-list")(229, "h3", 3);
    \u0275\u0275text(230, "Color");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(231, "mat-list-item")(232, "code");
    \u0275\u0275text(233, ".text-reset");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(234, "mat-list-item")(235, "code");
    \u0275\u0275text(236, ".text-current");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(237, "mat-tab", 11)(238, "div", 2)(239, "div", 5)(240, "mat-list")(241, "h3", 3);
    \u0275\u0275text(242, "Vertical Align");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(243, UtilitiesCssHelpersComponent_For_244_Template, 3, 1, "mat-list-item", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(245, "div", 5)(246, "mat-list")(247, "h3", 3);
    \u0275\u0275text(248, "Cursor");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(249, UtilitiesCssHelpersComponent_For_250_Template, 3, 1, "mat-list-item", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(251, "div", 5)(252, "mat-list")(253, "h3", 3);
    \u0275\u0275text(254, "User Select");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(255, UtilitiesCssHelpersComponent_For_256_Template, 3, 1, "mat-list-item", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(257, "div", 5)(258, "mat-list")(259, "h3", 3);
    \u0275\u0275text(260, "Pointer Events");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(261, "mat-list-item")(262, "code");
    \u0275\u0275text(263, ".pointer-events-none");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(264, "mat-list-item")(265, "code");
    \u0275\u0275text(266, ".pointer-events-auto");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(267, "div", 5)(268, "mat-list")(269, "h3", 3);
    \u0275\u0275text(270, "Overflow");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(271, UtilitiesCssHelpersComponent_For_272_Template, 3, 1, "mat-list-item", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(273, "div", 5)(274, "mat-list")(275, "h3", 3);
    \u0275\u0275text(276, "Object Fit");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(277, UtilitiesCssHelpersComponent_For_278_Template, 3, 1, "mat-list-item", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(279, "div", 5)(280, "mat-list")(281, "h3", 3);
    \u0275\u0275text(282, "Object Position");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(283, UtilitiesCssHelpersComponent_For_284_Template, 3, 1, "mat-list-item", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(285, "div", 5)(286, "mat-list")(287, "h3", 3);
    \u0275\u0275text(288, "Icon Size");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(289, UtilitiesCssHelpersComponent_For_290_Template, 3, 1, "mat-list-item", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(9);
    \u0275\u0275repeater(ctx.colorNames);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
    \u0275\u0275advance(8);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(1, _c1));
    \u0275\u0275advance(6);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(2, _c2));
    \u0275\u0275advance(6);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(3, _c3));
    \u0275\u0275advance(9);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(4, _c4));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(5, _c5));
    \u0275\u0275advance(6);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(6, _c6));
    \u0275\u0275advance(6);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(7, _c7));
    \u0275\u0275advance(6);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(8, _c8));
    \u0275\u0275advance(6);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(9, _c9));
    \u0275\u0275advance(6);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(10, _c10));
    \u0275\u0275advance(8);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(11, _c11));
    \u0275\u0275advance(6);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(12, _c12));
    \u0275\u0275advance(6);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(13, _c13));
    \u0275\u0275advance(6);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(14, _c13));
    \u0275\u0275advance(8);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(15, _c14));
    \u0275\u0275advance(6);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(16, _c14));
    \u0275\u0275advance(6);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(17, _c15));
    \u0275\u0275advance(6);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(18, _c16));
    \u0275\u0275advance(8);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(19, _c17));
    \u0275\u0275advance(6);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(20, _c17));
    \u0275\u0275advance(8);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(21, _c18));
    \u0275\u0275advance(6);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(22, _c19));
    \u0275\u0275advance(91);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(23, _c20));
    \u0275\u0275advance(6);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(24, _c21));
    \u0275\u0275advance(6);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(25, _c22));
    \u0275\u0275advance(16);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(26, _c23));
    \u0275\u0275advance(6);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(27, _c24));
    \u0275\u0275advance(6);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(28, _c25));
    \u0275\u0275advance(6);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(29, _c26));
  }
}, dependencies: [MatCardModule, MatCard, MatListModule, MatList, MatListItem, MatListSubheaderCssMatStyler, MatTabsModule, MatTab, MatTabGroup, PageHeaderComponent], encapsulation: 2 });
var UtilitiesCssHelpersComponent = _UtilitiesCssHelpersComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UtilitiesCssHelpersComponent, [{
    type: Component,
    args: [{ selector: "app-utilities-css-helpers", imports: [MatCardModule, MatListModule, MatTabsModule, PageHeaderComponent], template: `<page-header />\r
\r
<mat-card>\r
  <mat-tab-group mat-stretch-tabs="false">\r
    <mat-tab label="Colors">\r
      <div class="row no-gutters">\r
        <div>\r
          <mat-list>\r
            <h3 matSubheader>Background/Border/Text Color</h3>\r
            @for (i of colorNames; track i) {\r
              <mat-list-item>\r
                <code>.[bg|border|text]-{{i}}-[{{colorHues}}]</code>\r
              </mat-list-item>\r
            }\r
            @for (c of ['white','black','light','dark']; track c) {\r
              <mat-list-item>\r
                <code>.[bg|border|text]-{{c}}</code>\r
              </mat-list-item>\r
            }\r
          </mat-list>\r
        </div>\r
      </div>\r
    </mat-tab>\r
\r
    <mat-tab label="Layout">\r
      <div class="row no-gutters">\r
        <div class="col-sm-6 col-md-3">\r
          <mat-list>\r
            <h3 matSubheader>Position</h3>\r
            @for (i of ['static','fixed','absolute','relative','sticky']; track i) {\r
              <mat-list-item>\r
                <code>.{{i}}</code>\r
              </mat-list-item>\r
            }\r
          </mat-list>\r
        </div>\r
        <div class="col-sm-6 col-md-3">\r
          <mat-list>\r
            <h3 matSubheader>Display</h3>\r
            @for (i of ['block','inline-block','inline',\r
              'flex','inline-flex','none']; track i) {\r
              <mat-list-item>\r
                <code>.d-{{i}}</code>\r
              </mat-list-item>\r
            }\r
          </mat-list>\r
        </div>\r
        <div class="col-sm-6 col-md-3">\r
          <mat-list>\r
            <h3 matSubheader>Flexbox (Direction)</h3>\r
            @for (i of ['row','row-reverse','col','col-reverse']; track i) {\r
              <mat-list-item>\r
                <code>.flex-{{i}}</code>\r
              </mat-list-item>\r
            }\r
          </mat-list>\r
        </div>\r
        <div class="col-sm-6 col-md-3">\r
          <mat-list>\r
            <h3 matSubheader>Flexbox (Fill & Grow & shrink)</h3>\r
            <mat-list-item>\r
              <code>.flex-fill</code>\r
            </mat-list-item>\r
            @for (i of ['grow-0','grow-1']; track i) {\r
              <mat-list-item>\r
                <code>.flex-{{i}}</code>\r
              </mat-list-item>\r
            }\r
            @for (i of ['shrink-0','shrink-1']; track i) {\r
              <mat-list-item>\r
                <code>.flex-{{i}}</code>\r
              </mat-list-item>\r
            }\r
          </mat-list>\r
        </div>\r
        <div class="col-sm-6 col-md-3">\r
          <mat-list>\r
            <h3 matSubheader>Flexbox (Wrap)</h3>\r
            @for (i of ['wrap','nowrap','wrap-reverse']; track i) {\r
              <mat-list-item>\r
                <code>.flex-{{i}}</code>\r
              </mat-list-item>\r
            }\r
          </mat-list>\r
        </div>\r
        <div class="col-sm-6 col-md-3">\r
          <mat-list>\r
            <h3 matSubheader>Flexbox (Justify content)</h3>\r
            @for (i of ['start','end','center','between','around']; track i) {\r
              <mat-list-item>\r
                <code>.justify-content-{{i}}</code>\r
              </mat-list-item>\r
            }\r
          </mat-list>\r
        </div>\r
        <div class="col-sm-6 col-md-3">\r
          <mat-list>\r
            <h3 matSubheader>Flexbox (Align content)</h3>\r
            @for (i of ['start','end','center','between','around','stretch']; track i) {\r
              <mat-list-item>\r
                <code>.align-content-{{i}}</code>\r
              </mat-list-item>\r
            }\r
          </mat-list>\r
        </div>\r
        <div class="col-sm-6 col-md-3">\r
          <mat-list>\r
            <h3 matSubheader>Flexbox (Align items)</h3>\r
            @for (i of ['start','end','center','baseline','stretch']; track i) {\r
              <mat-list-item>\r
                <code>.align-items-{{i}}</code>\r
              </mat-list-item>\r
            }\r
          </mat-list>\r
        </div>\r
        <div class="col-sm-6 col-md-3">\r
          <mat-list>\r
            <h3 matSubheader>Flexbox (Align self)</h3>\r
            @for (i of ['auto','start','end','center','baseline','stretch']; track i) {\r
              <mat-list-item>\r
                <code>.align-self-{{i}}</code>\r
              </mat-list-item>\r
            }\r
          </mat-list>\r
        </div>\r
      </div>\r
    </mat-tab>\r
\r
    <mat-tab label="Spacings">\r
      <div class="row no-gutters">\r
        <div class="col-sm-6 col-md-3">\r
          <mat-list>\r
            <h3 matSubheader>Margin</h3>\r
            @for (i of [0,4,8,16,24,32,48,'auto']; track i) {\r
              <mat-list-item>\r
                <code>.m[-[t|b|r|l|x|y]]-{{i}}</code>\r
              </mat-list-item>\r
            }\r
          </mat-list>\r
        </div>\r
        <div class="col-sm-6 col-md-3">\r
          <mat-list>\r
            <h3 matSubheader>Negative Margin</h3>\r
            @for (i of [4,8,16,24,32,48]; track i) {\r
              <mat-list-item>\r
                <code>.m[-[t|b|r|l|x|y]]--{{i}}</code>\r
              </mat-list-item>\r
            }\r
          </mat-list>\r
        </div>\r
        <div class="col-sm-6 col-md-3">\r
          <mat-list>\r
            <h3 matSubheader>Padding</h3>\r
            @for (i of [0,4,8,16,24,32,48]; track i) {\r
              <mat-list-item>\r
                <code>.p[-[t|b|r|l|x|y]]-{{i}}</code>\r
              </mat-list-item>\r
            }\r
          </mat-list>\r
        </div>\r
        <div class="col-sm-6 col-md-3">\r
          <mat-list>\r
            <h3 matSubheader>Gap</h3>\r
            @for (i of [0,4,8,16,24,32,48]; track i) {\r
              <mat-list-item>\r
                <code>.gap[-[t|b|r|l|x|y]]-{{i}}</code>\r
              </mat-list-item>\r
            }\r
          </mat-list>\r
        </div>\r
      </div>\r
    </mat-tab>\r
\r
    <mat-tab label="Border">\r
      <div class="row no-gutters">\r
        <div class="col-sm-6 col-md-3">\r
          <mat-list>\r
            <h3 matSubheader>Border</h3>\r
            @for (i of [0,1,2,3,4,5]; track i) {\r
              <mat-list-item>\r
                <code>.b[-[t|b|r|l|x|y]]-{{i}}</code>\r
              </mat-list-item>\r
            }\r
          </mat-list>\r
        </div>\r
        <div class="col-sm-6 col-md-3">\r
          <mat-list>\r
            <h3 matSubheader>Border Width</h3>\r
            @for (i of [0,1,2,3,4,5]; track i) {\r
              <mat-list-item>\r
                <code>.border[-[t|b|r|l|x|y]]-{{i}}</code>\r
              </mat-list-item>\r
            }\r
          </mat-list>\r
        </div>\r
        <div class="col-sm-12 col-md-6">\r
          <mat-list>\r
            <h3 matSubheader>Border Style</h3>\r
            @for (i of ['solid','dashed','dotted','double','hidden','none']; track i) {\r
              <mat-list-item>\r
                <code>.border[-[t|b|r|l|x|y]]-{{i}}</code>\r
              </mat-list-item>\r
            }\r
          </mat-list>\r
        </div>\r
        <div class="col-sm-12 col-md-6">\r
          <mat-list>\r
            <h3 matSubheader>Border Radius</h3>\r
            @for (i of [0,4,8,16,24,32,'full']; track i) {\r
              <mat-list-item>\r
                <code>.r[-[t|b]-[r|l]]-{{i}}, r[-[t|b|l|r]]-{{i}}</code>\r
              </mat-list-item>\r
            }\r
          </mat-list>\r
        </div>\r
      </div>\r
    </mat-tab>\r
\r
    <mat-tab label="Size">\r
      <div class="row no-gutters">\r
        <div class="col-sm-6 col-md-3">\r
          <mat-list>\r
            <h3 matSubheader>Width (%)</h3>\r
            @for (i of [20,25,40,50,60,75,80,'full','auto']; track i) {\r
              <mat-list-item>\r
                <code>.w-{{i}}</code>\r
              </mat-list-item>\r
            }\r
          </mat-list>\r
        </div>\r
        <div class="col-sm-6 col-md-3">\r
          <mat-list>\r
            <h3 matSubheader>Height (%)</h3>\r
            @for (i of [20,25,40,50,60,75,80,'full','auto']; track i) {\r
              <mat-list-item>\r
                <code>.h-{{i}}</code>\r
              </mat-list-item>\r
            }\r
          </mat-list>\r
        </div>\r
      </div>\r
    </mat-tab>\r
\r
    <mat-tab label="Text">\r
      <div class="row no-gutters">\r
        <div class="col-sm-6 col-md-3">\r
          <mat-list>\r
            <h3 matSubheader>Font Weight</h3>\r
            @for (i of [1,2,3,4,5,6,7,8,9]; track i) {\r
              <mat-list-item>\r
                <code>.f-w-{{i*100}}</code>\r
              </mat-list-item>\r
            }\r
          </mat-list>\r
        </div>\r
        <div class="col-sm-6 col-md-3">\r
          <mat-list>\r
            <h3 matSubheader>Font Size</h3>\r
            @for (i of [0,10,12,14,16,18,20]; track i) {\r
              <mat-list-item>\r
                <code>.f-s-{{i}}</code>\r
              </mat-list-item>\r
            }\r
          </mat-list>\r
        </div>\r
        <div class="col-sm-6 col-md-3">\r
          <mat-list>\r
            <h3 matSubheader>Font Style</h3>\r
            <mat-list-item><code>.font-italic</code></mat-list-item>\r
            <mat-list-item><code>.font-normal</code></mat-list-item>\r
          </mat-list>\r
        </div>\r
        <div class="col-sm-6 col-md-3">\r
          <mat-list>\r
            <h3 matSubheader>Text Align</h3>\r
            <mat-list-item><code>.text-center</code></mat-list-item>\r
            <mat-list-item><code>.text-right</code></mat-list-item>\r
            <mat-list-item><code>.text-left</code></mat-list-item>\r
          </mat-list>\r
        </div>\r
        <div class="col-sm-6 col-md-3">\r
          <mat-list>\r
            <h3 matSubheader>Text Decoration</h3>\r
            <mat-list-item><code>.text-none</code></mat-list-item>\r
            <mat-list-item><code>.text-underline</code></mat-list-item>\r
            <mat-list-item><code>.text-line-through</code></mat-list-item>\r
          </mat-list>\r
        </div>\r
        <div class="col-sm-6 col-md-3">\r
          <mat-list>\r
            <h3 matSubheader>Text Transform</h3>\r
            <mat-list-item><code>.text-capitalize</code></mat-list-item>\r
            <mat-list-item><code>.text-uppercase</code></mat-list-item>\r
            <mat-list-item><code>.text-lowercase</code></mat-list-item>\r
          </mat-list>\r
        </div>\r
        <div class="col-sm-6 col-md-3">\r
          <mat-list>\r
            <h3 matSubheader>White Space</h3>\r
            <mat-list-item><code>.text-normal</code></mat-list-item>\r
            <mat-list-item><code>.text-nowrap</code></mat-list-item>\r
          </mat-list>\r
        </div>\r
        <div class="col-sm-6 col-md-3">\r
          <mat-list>\r
            <h3 matSubheader>Word Wrap</h3>\r
            <mat-list-item><code>.text-break</code></mat-list-item>\r
          </mat-list>\r
        </div>\r
        <div class="col-sm-6 col-md-3">\r
          <mat-list>\r
            <h3 matSubheader>Text Overflow</h3>\r
            <mat-list-item><code>.text-ellipsis</code></mat-list-item>\r
          </mat-list>\r
        </div>\r
        <div class="col-sm-6 col-md-3">\r
          <mat-list>\r
            <h3 matSubheader>Color</h3>\r
            <mat-list-item><code>.text-reset</code></mat-list-item>\r
            <mat-list-item><code>.text-current</code></mat-list-item>\r
          </mat-list>\r
        </div>\r
      </div>\r
    </mat-tab>\r
\r
    <mat-tab label="Misc">\r
      <div class="row no-gutters">\r
        <div class="col-sm-6 col-md-3">\r
          <mat-list>\r
            <h3 matSubheader>Vertical Align</h3>\r
            @for (i of ['top','middle','bottom']; track i) {\r
              <mat-list-item>\r
                <code>.align-{{i}}</code>\r
              </mat-list-item>\r
            }\r
          </mat-list>\r
        </div>\r
        <div class="col-sm-6 col-md-3">\r
          <mat-list>\r
            <h3 matSubheader>Cursor</h3>\r
            @for (i of ['default','pointer','text',\r
              'move','copy','not-allowed']; track i) {\r
              <mat-list-item>\r
                <code>.cursor-{{i}}</code>\r
              </mat-list-item>\r
            }\r
          </mat-list>\r
        </div>\r
        <div class="col-sm-6 col-md-3">\r
          <mat-list>\r
            <h3 matSubheader>User Select</h3>\r
            @for (i of ['all','auto','none']; track i) {\r
              <mat-list-item>\r
                <code>.select-{{i}}</code>\r
              </mat-list-item>\r
            }\r
          </mat-list>\r
        </div>\r
        <div class="col-sm-6 col-md-3">\r
          <mat-list>\r
            <h3 matSubheader>Pointer Events</h3>\r
            <mat-list-item><code>.pointer-events-none</code></mat-list-item>\r
            <mat-list-item><code>.pointer-events-auto</code></mat-list-item>\r
          </mat-list>\r
        </div>\r
        <div class="col-sm-6 col-md-3">\r
          <mat-list>\r
            <h3 matSubheader>Overflow</h3>\r
            @for (i of ['auto','hidden','visible','scroll']; track i) {\r
              <mat-list-item>\r
                <code>.overflow[-[x|y]]-{{i}}</code>\r
              </mat-list-item>\r
            }\r
          </mat-list>\r
        </div>\r
        <div class="col-sm-6 col-md-3">\r
          <mat-list>\r
            <h3 matSubheader>Object Fit</h3>\r
            @for (i of ['cover','contain','fill','none','scale-down']; track i) {\r
              <mat-list-item>\r
                <code>.object-{{i}}</code>\r
              </mat-list-item>\r
            }\r
          </mat-list>\r
        </div>\r
        <div class="col-sm-6 col-md-3">\r
          <mat-list>\r
            <h3 matSubheader>Object Position</h3>\r
            @for (i of ['top','bottom','center','left','left-top',\r
              'left-right','right','right-top','right-bottom']; track i) {\r
              <mat-list-item>\r
                <code>.object-{{i}}</code>\r
              </mat-list-item>\r
            }\r
          </mat-list>\r
        </div>\r
        <div class="col-sm-6 col-md-3">\r
          <mat-list>\r
            <h3 matSubheader>Icon Size</h3>\r
            @for (i of [18,24,36,48]; track i) {\r
              <mat-list-item>\r
                <code>.icon-{{i}}</code>\r
              </mat-list-item>\r
            }\r
          </mat-list>\r
        </div>\r
      </div>\r
    </mat-tab>\r
  </mat-tab-group>\r
</mat-card>\r
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UtilitiesCssHelpersComponent, { className: "UtilitiesCssHelpersComponent", filePath: "src/app/routes/utilities/css-helpers/css-helpers.component.ts", lineNumber: 14 });
})();

// src/app/routes/utilities/utilities.routes.ts
var routes = [
  { path: "css-grid", component: UtilitiesCssGridComponent },
  { path: "css-helpers", component: UtilitiesCssHelpersComponent }
];
export {
  routes
};
//# sourceMappingURL=chunk-QH4S3Y6H.js.map
