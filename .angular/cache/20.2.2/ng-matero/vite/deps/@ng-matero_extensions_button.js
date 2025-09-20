import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-7UY4UIPY.js";
import {
  MatButtonModule
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
  Directive,
  ElementRef,
  Input,
  NgModule,
  Renderer2,
  ViewContainerRef,
  booleanAttribute,
  inject,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule
} from "./chunk-TGP6U4PS.js";
import "./chunk-MY7C4QNH.js";
import "./chunk-H6VVMQMC.js";
import "./chunk-KEQKGBJ6.js";
import "./chunk-HOFLPY52.js";
import "./chunk-PEHFQLBM.js";

// node_modules/@ng-matero/extensions/fesm2022/mtxButton.mjs
var _MatButtonLoading = class _MatButtonLoading {
  constructor() {
    this._elementRef = inject(ElementRef);
    this._viewContainerRef = inject(ViewContainerRef);
    this._renderer = inject(Renderer2);
    this.spinner = null;
    this.loading = false;
    this.disabled = false;
  }
  ngOnChanges(changes) {
    if (!changes.loading) {
      return;
    }
    if (changes.loading.currentValue) {
      this._elementRef.nativeElement.classList.add("mat-button-loading");
      if (!this.disabled) {
        setTimeout(() => {
          this._elementRef.nativeElement.classList.add("mat-mdc-button-disabled");
          this._elementRef.nativeElement.setAttribute("disabled", "true");
        });
      }
      this.createSpinner();
    } else if (!changes.loading.firstChange) {
      this._elementRef.nativeElement.classList.remove("mat-button-loading");
      if (!this.disabled) {
        setTimeout(() => {
          this._elementRef.nativeElement.classList.remove("mat-mdc-button-disabled");
          this._elementRef.nativeElement.removeAttribute("disabled");
        });
      }
      this.destroySpinner();
    }
  }
  createSpinner() {
    if (!this.spinner) {
      this.spinner = this._viewContainerRef.createComponent(MatProgressSpinner);
      this.spinner.instance.color = this.color;
      this.spinner.instance.diameter = 24;
      this.spinner.instance.mode = "indeterminate";
      this._renderer.appendChild(this._elementRef.nativeElement, this.spinner.instance._elementRef.nativeElement);
    }
  }
  destroySpinner() {
    if (this.spinner) {
      this.spinner.destroy();
      this.spinner = null;
    }
  }
};
_MatButtonLoading.ɵfac = function MatButtonLoading_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatButtonLoading)();
};
_MatButtonLoading.ɵdir = ɵɵdefineDirective({
  type: _MatButtonLoading,
  selectors: [["", "mat-button", "", "loading", ""], ["", "matButton", "", "loading", ""], ["", "mat-raised-button", "", "loading", ""], ["", "mat-stroked-button", "", "loading", ""], ["", "mat-flat-button", "", "loading", ""], ["", "mat-icon-button", "", "loading", ""], ["", "matIconButton", "", "loading", ""], ["", "mat-fab", "", "loading", ""], ["", "matFab", "", "loading", ""], ["", "mat-mini-fab", "", "loading", ""], ["", "matMiniFab", "", "loading", ""]],
  inputs: {
    loading: [2, "loading", "loading", booleanAttribute],
    disabled: [2, "disabled", "disabled", booleanAttribute],
    color: "color"
  },
  features: [ɵɵNgOnChangesFeature]
});
var MatButtonLoading = _MatButtonLoading;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatButtonLoading, [{
    type: Directive,
    args: [{
      selector: `[mat-button][loading], [matButton][loading],
             [mat-raised-button][loading],
             [mat-stroked-button][loading],
             [mat-flat-button][loading],
             [mat-icon-button][loading], [matIconButton][loading],
             [mat-fab][loading], [matFab][loading],
             [mat-mini-fab][loading], [matMiniFab][loading]`
    }]
  }], null, {
    loading: [{
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
    color: [{
      type: Input
    }]
  });
})();
var _MtxButtonModule = class _MtxButtonModule {
};
_MtxButtonModule.ɵfac = function MtxButtonModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MtxButtonModule)();
};
_MtxButtonModule.ɵmod = ɵɵdefineNgModule({
  type: _MtxButtonModule,
  imports: [CommonModule, MatButtonModule, MatProgressSpinnerModule, MatButtonLoading],
  exports: [MatButtonLoading]
});
_MtxButtonModule.ɵinj = ɵɵdefineInjector({
  imports: [CommonModule, MatButtonModule, MatProgressSpinnerModule]
});
var MtxButtonModule = _MtxButtonModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MtxButtonModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, MatButtonModule, MatProgressSpinnerModule, MatButtonLoading],
      exports: [MatButtonLoading]
    }]
  }], null, null);
})();
export {
  MatButtonLoading,
  MtxButtonModule
};
//# sourceMappingURL=@ng-matero_extensions_button.js.map
