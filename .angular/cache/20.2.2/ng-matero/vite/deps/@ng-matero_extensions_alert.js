import {
  MatIconButton
} from "./chunk-NA7PBFX6.js";
import "./chunk-YIF4T2TR.js";
import "./chunk-EBZ3PI6G.js";
import "./chunk-MKT2JYIF.js";
import "./chunk-4HFP2B2Z.js";
import "./chunk-WYFSJBQU.js";
import "./chunk-OX3NRC6A.js";
import "./chunk-VENV3F3G.js";
import "./chunk-L2BZS5YT.js";
import "./chunk-4MZFUHHW.js";
import "./chunk-EUCP2ZY2.js";
import "./chunk-AJKRHC55.js";
import "./chunk-GIJAI27L.js";
import "./chunk-YD3JPWO3.js";
import "./chunk-2ZKSKDON.js";
import "./chunk-7UJZXIJQ.js";
import "./chunk-IP7SSTAP.js";
import "./chunk-WB2HPCD2.js";
import "./chunk-TR37UYJX.js";
import "./chunk-J7QA3RMN.js";
import {
  CommonModule
} from "./chunk-7NOA7DFH.js";
import "./chunk-2SF2BFR3.js";
import "./chunk-IET25UKP.js";
import "./chunk-OUSM42MY.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  NgModule,
  Output,
  ViewEncapsulation,
  booleanAttribute,
  inject,
  setClassMetadata,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵresetView,
  ɵɵrestoreView
} from "./chunk-TGP6U4PS.js";
import "./chunk-MY7C4QNH.js";
import "./chunk-H6VVMQMC.js";
import "./chunk-KEQKGBJ6.js";
import "./chunk-HOFLPY52.js";
import "./chunk-PEHFQLBM.js";

// node_modules/@ng-matero/extensions/fesm2022/mtxAlert.mjs
var _c0 = ["*"];
function MtxAlert_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 0)(1, "button", 1);
    ɵɵlistener("click", function MtxAlert_Conditional_1_Template_button_click_1_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1._onClosed());
    });
    ɵɵnamespaceSVG();
    ɵɵelementStart(2, "svg", 2);
    ɵɵelement(3, "path", 3);
    ɵɵelementEnd()()();
  }
}
var _MtxAlert = class _MtxAlert {
  constructor() {
    this._changeDetectorRef = inject(ChangeDetectorRef);
    this.type = "default";
    this.dismissible = false;
    this.elevation = 0;
    this.closed = new EventEmitter();
  }
  get hostClassList() {
    return `mtx-alert mtx-alert-${this.type} mat-elevation-z${this.elevation}`;
  }
  _onClosed() {
    this._changeDetectorRef.markForCheck();
    this.closed.emit(this);
  }
};
_MtxAlert.ɵfac = function MtxAlert_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MtxAlert)();
};
_MtxAlert.ɵcmp = ɵɵdefineComponent({
  type: _MtxAlert,
  selectors: [["mtx-alert"]],
  hostAttrs: ["role", "alert"],
  hostVars: 4,
  hostBindings: function MtxAlert_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.hostClassList);
      ɵɵclassProp("mtx-alert-dismissible", ctx.dismissible);
    }
  },
  inputs: {
    type: "type",
    dismissible: [2, "dismissible", "dismissible", booleanAttribute],
    elevation: "elevation"
  },
  outputs: {
    closed: "closed"
  },
  exportAs: ["mtxAlert"],
  ngContentSelectors: _c0,
  decls: 2,
  vars: 1,
  consts: [[1, "mtx-alert-close"], ["mat-icon-button", "", "type", "button", "aria-label", "Close", 3, "click"], ["viewBox", "0 0 24 24", "width", "24px", "height", "24px", "fill", "currentColor", "focusable", "false"], ["d", "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"]],
  template: function MtxAlert_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
      ɵɵconditionalCreate(1, MtxAlert_Conditional_1_Template, 4, 0, "div", 0);
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵconditional(ctx.dismissible ? 1 : -1);
    }
  },
  dependencies: [MatIconButton],
  styles: [".mtx-alert{position:relative;display:block;padding:.75rem 1rem;margin-bottom:1rem;line-height:1.5;border:1px solid var(--mtx-alert-outline-color, var(--mat-sys-outline-variant));border-radius:var(--mtx-alert-container-shape, var(--mat-sys-corner-small));background-color:var(--mtx-alert-background-color, var(--mat-sys-surface-container));color:var(--mtx-alert-text-color, var(--mat-sys-on-surface))}.mtx-alert.mtx-alert-info{border-color:var(--mtx-alert-info-outline-color, light-dark(#abc7ff, #005cbb));background-color:var(--mtx-alert-info-background-color, light-dark(#d7e3ff, #002f65));color:var(--mtx-alert-info-text-color, light-dark(#002f65, #d7e3ff))}.mtx-alert.mtx-alert-success{border-color:var(--mtx-alert-success-outline-color, light-dark(#02e600, #026e00));background-color:var(--mtx-alert-success-background-color, light-dark(#cbffb8, #013a00));color:var(--mtx-alert-success-text-color, light-dark(#013a00, #cbffb8))}.mtx-alert.mtx-alert-warning{border-color:var(--mtx-alert-warning-outline-color, light-dark(#cdcd00, #626200));background-color:var(--mtx-alert-warning-background-color, light-dark(#fffeac, #323200));color:var(--mtx-alert-warning-text-color, light-dark(#323200, #fffeac))}.mtx-alert.mtx-alert-danger{border-color:var(--mtx-alert-danger-outline-color, light-dark(#ffb4a8, #c00100));background-color:var(--mtx-alert-danger-background-color, light-dark(#ffdad4, #690100));color:var(--mtx-alert-danger-text-color, light-dark(#690100, #ffdad4))}.mtx-alert-close{position:absolute;top:0;right:0;display:flex;align-items:center;justify-content:center;width:3rem;height:3rem}[dir=rtl] .mtx-alert-close{right:auto;left:0}.mtx-alert-dismissible{padding-right:3rem}\n"],
  encapsulation: 2,
  changeDetection: 0
});
var MtxAlert = _MtxAlert;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MtxAlert, [{
    type: Component,
    args: [{
      selector: "mtx-alert",
      exportAs: "mtxAlert",
      host: {
        "[class]": "hostClassList",
        "[class.mtx-alert-dismissible]": "dismissible",
        "role": "alert"
      },
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      imports: [MatIconButton],
      template: '<ng-content></ng-content>\n@if (dismissible) {\n  <div class="mtx-alert-close">\n    <button mat-icon-button type="button" aria-label="Close" (click)="_onClosed()">\n      <svg viewBox="0 0 24 24" width="24px" height="24px" fill="currentColor" focusable="false">\n        <path\n          d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"\n        />\n      </svg>\n    </button>\n  </div>\n}\n',
      styles: [".mtx-alert{position:relative;display:block;padding:.75rem 1rem;margin-bottom:1rem;line-height:1.5;border:1px solid var(--mtx-alert-outline-color, var(--mat-sys-outline-variant));border-radius:var(--mtx-alert-container-shape, var(--mat-sys-corner-small));background-color:var(--mtx-alert-background-color, var(--mat-sys-surface-container));color:var(--mtx-alert-text-color, var(--mat-sys-on-surface))}.mtx-alert.mtx-alert-info{border-color:var(--mtx-alert-info-outline-color, light-dark(#abc7ff, #005cbb));background-color:var(--mtx-alert-info-background-color, light-dark(#d7e3ff, #002f65));color:var(--mtx-alert-info-text-color, light-dark(#002f65, #d7e3ff))}.mtx-alert.mtx-alert-success{border-color:var(--mtx-alert-success-outline-color, light-dark(#02e600, #026e00));background-color:var(--mtx-alert-success-background-color, light-dark(#cbffb8, #013a00));color:var(--mtx-alert-success-text-color, light-dark(#013a00, #cbffb8))}.mtx-alert.mtx-alert-warning{border-color:var(--mtx-alert-warning-outline-color, light-dark(#cdcd00, #626200));background-color:var(--mtx-alert-warning-background-color, light-dark(#fffeac, #323200));color:var(--mtx-alert-warning-text-color, light-dark(#323200, #fffeac))}.mtx-alert.mtx-alert-danger{border-color:var(--mtx-alert-danger-outline-color, light-dark(#ffb4a8, #c00100));background-color:var(--mtx-alert-danger-background-color, light-dark(#ffdad4, #690100));color:var(--mtx-alert-danger-text-color, light-dark(#690100, #ffdad4))}.mtx-alert-close{position:absolute;top:0;right:0;display:flex;align-items:center;justify-content:center;width:3rem;height:3rem}[dir=rtl] .mtx-alert-close{right:auto;left:0}.mtx-alert-dismissible{padding-right:3rem}\n"]
    }]
  }], null, {
    type: [{
      type: Input
    }],
    dismissible: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    elevation: [{
      type: Input
    }],
    closed: [{
      type: Output
    }]
  });
})();
var _MtxAlertModule = class _MtxAlertModule {
};
_MtxAlertModule.ɵfac = function MtxAlertModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MtxAlertModule)();
};
_MtxAlertModule.ɵmod = ɵɵdefineNgModule({
  type: _MtxAlertModule,
  imports: [CommonModule, MtxAlert],
  exports: [MtxAlert]
});
_MtxAlertModule.ɵinj = ɵɵdefineInjector({
  imports: [CommonModule, MtxAlert]
});
var MtxAlertModule = _MtxAlertModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MtxAlertModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, MtxAlert],
      exports: [MtxAlert]
    }]
  }], null, null);
})();
export {
  MtxAlert,
  MtxAlertModule
};
//# sourceMappingURL=@ng-matero_extensions_alert.js.map
