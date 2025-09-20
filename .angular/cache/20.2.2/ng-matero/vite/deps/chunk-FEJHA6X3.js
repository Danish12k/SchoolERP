import {
  MtxPipesModule,
  MtxToObservablePipe
} from "./chunk-DUWU3IMR.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-FHX5LAOA.js";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogModule,
  MatDialogRef
} from "./chunk-LCG7XJKE.js";
import {
  MatButton,
  MatButtonModule,
  MatIconButton
} from "./chunk-NA7PBFX6.js";
import {
  AsyncPipe,
  CommonModule
} from "./chunk-7NOA7DFH.js";
import {
  ChangeDetectionStrategy,
  Component,
  Injectable,
  NgModule,
  ViewEncapsulation,
  inject,
  setClassMetadata,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-TGP6U4PS.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-PEHFQLBM.js";

// node_modules/@ng-matero/extensions/fesm2022/mtxDialog.mjs
function MtxDialogContainer_Conditional_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 4);
    ɵɵlistener("click", function MtxDialogContainer_Conditional_0_Conditional_5_Template_button_click_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1._onClose());
    });
    ɵɵelementStart(1, "mat-icon");
    ɵɵtext(2, "close");
    ɵɵelementEnd()();
  }
}
function MtxDialogContainer_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "h1", 0)(1, "span");
    ɵɵtext(2);
    ɵɵpipe(3, "toObservable");
    ɵɵpipe(4, "async");
    ɵɵelementEnd();
    ɵɵconditionalCreate(5, MtxDialogContainer_Conditional_0_Conditional_5_Template, 3, 0, "button", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind1(4, 4, ɵɵpipeBind1(3, 2, ctx_r1.data.title)));
    ɵɵadvance(3);
    ɵɵconditional(ctx_r1.data.showCloseIcon ? 5 : -1);
  }
}
function MtxDialogContainer_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 1)(1, "p");
    ɵɵtext(2);
    ɵɵpipe(3, "toObservable");
    ɵɵpipe(4, "async");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind1(4, 3, ɵɵpipeBind1(3, 1, ctx_r1.data.description)));
  }
}
function MtxDialogContainer_For_4_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 7);
    ɵɵlistener("click", function MtxDialogContainer_For_4_Conditional_0_Template_button_click_0_listener() {
      ɵɵrestoreView(_r3);
      const btn_r4 = ɵɵnextContext().$implicit;
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1._onClick(btn_r4.onClick));
    });
    ɵɵtext(1);
    ɵɵpipe(2, "toObservable");
    ɵɵpipe(3, "async");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const btn_r4 = ɵɵnextContext().$implicit;
    ɵɵclassMap(btn_r4.class);
    ɵɵproperty("matButton", btn_r4.type || "text")("color", btn_r4.color);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 7, ɵɵpipeBind1(2, 5, btn_r4.text)), " ");
  }
}
function MtxDialogContainer_For_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 8);
    ɵɵlistener("click", function MtxDialogContainer_For_4_Conditional_1_Template_button_click_0_listener() {
      ɵɵrestoreView(_r5);
      const btn_r4 = ɵɵnextContext().$implicit;
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1._onClick(btn_r4.onClick));
    });
    ɵɵtext(1);
    ɵɵpipe(2, "toObservable");
    ɵɵpipe(3, "async");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const btn_r4 = ɵɵnextContext().$implicit;
    ɵɵclassMap(btn_r4.class);
    ɵɵproperty("matButton", btn_r4.type || "text")("color", btn_r4.color);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 7, ɵɵpipeBind1(2, 5, btn_r4.text)), " ");
  }
}
function MtxDialogContainer_For_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, MtxDialogContainer_For_4_Conditional_0_Template, 4, 9, "button", 5)(1, MtxDialogContainer_For_4_Conditional_1_Template, 4, 9, "button", 6);
  }
  if (rf & 2) {
    const btn_r4 = ctx.$implicit;
    ɵɵconditional(btn_r4.focusInitial ? 0 : 1);
  }
}
var _MtxDialogContainer = class _MtxDialogContainer {
  constructor() {
    this.dialogRef = inject(MatDialogRef);
    this.data = inject(MAT_DIALOG_DATA);
  }
  _onClick(fn) {
    if (fn) {
      fn.call(this);
    }
    this._onClose();
  }
  _onClose() {
    this.dialogRef.close();
  }
};
_MtxDialogContainer.ɵfac = function MtxDialogContainer_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MtxDialogContainer)();
};
_MtxDialogContainer.ɵcmp = ɵɵdefineComponent({
  type: _MtxDialogContainer,
  selectors: [["mtx-dialog-container"]],
  hostAttrs: [1, "mtx-dialog-container"],
  exportAs: ["mtxDialogContainer"],
  decls: 5,
  vars: 2,
  consts: [[1, "mtx-dialog-title"], [1, "mtx-dialog-content"], [1, "mtx-dialog-actions"], ["mat-icon-button", ""], ["mat-icon-button", "", 3, "click"], ["cdkFocusInitial", "", 3, "matButton", "color", "class"], [3, "matButton", "color", "class"], ["cdkFocusInitial", "", 3, "click", "matButton", "color"], [3, "click", "matButton", "color"]],
  template: function MtxDialogContainer_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵconditionalCreate(0, MtxDialogContainer_Conditional_0_Template, 6, 6, "h1", 0);
      ɵɵconditionalCreate(1, MtxDialogContainer_Conditional_1_Template, 5, 5, "div", 1);
      ɵɵelementStart(2, "div", 2);
      ɵɵrepeaterCreate(3, MtxDialogContainer_For_4_Template, 2, 1, null, null, ɵɵrepeaterTrackByIdentity);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵconditional(ctx.data.title ? 0 : -1);
      ɵɵadvance();
      ɵɵconditional(ctx.data.description ? 1 : -1);
      ɵɵadvance(2);
      ɵɵrepeater(ctx.data.buttons);
    }
  },
  dependencies: [MatButton, MatIconButton, MatIcon, AsyncPipe, MtxToObservablePipe],
  styles: [".mtx-dialog-title{display:flex;justify-content:space-between;align-items:center;padding:8px 24px;margin:0;line-height:48px;font-weight:500;font-size:20px}.mtx-dialog-title .mat-mdc-button-base{margin-right:-16px}[dir=rtl] .mtx-dialog-title .mat-mdc-button-base{margin-right:0;margin-left:-16px}.mtx-dialog-content{display:block;max-height:65vh;padding:0 24px;overflow:auto;-webkit-overflow-scrolling:touch}.mtx-dialog-content p{margin-top:0}.mtx-dialog-actions{display:flex;flex-wrap:wrap;align-items:center;justify-content:flex-end;padding:8px}.mtx-dialog-actions .mat-mdc-button-base{margin-left:8px}[dir=rtl] .mtx-dialog-actions .mat-mdc-button-base{margin-left:0;margin-right:8px}\n"],
  encapsulation: 2,
  changeDetection: 0
});
var MtxDialogContainer = _MtxDialogContainer;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MtxDialogContainer, [{
    type: Component,
    args: [{
      selector: "mtx-dialog-container",
      exportAs: "mtxDialogContainer",
      host: {
        class: "mtx-dialog-container"
      },
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      imports: [AsyncPipe, MatButton, MatIconButton, MatIcon, MtxToObservablePipe],
      template: `@if (data.title) {
  <h1 class="mtx-dialog-title">
    <span>{{ data.title | toObservable | async }}</span>
    @if (data.showCloseIcon) {
      <button mat-icon-button (click)="_onClose()">
        <mat-icon>close</mat-icon>
      </button>
    }
  </h1>
}
@if (data.description) {
  <div class="mtx-dialog-content">
    <p>{{ data.description | toObservable | async }}</p>
  </div>
}
<div class="mtx-dialog-actions">
  @for (btn of data.buttons; track btn) {
    @if (btn.focusInitial) {
      <button
        cdkFocusInitial
        [matButton]="btn.type || 'text'"
        [color]="btn.color"
        [class]="btn.class"
        (click)="_onClick(btn.onClick!)"
      >
        {{ btn.text | toObservable | async }}
      </button>
    } @else {
      <button
        [matButton]="btn.type || 'text'"
        [color]="btn.color"
        [class]="btn.class"
        (click)="_onClick(btn.onClick!)"
      >
        {{ btn.text | toObservable | async }}
      </button>
    }
  }
</div>
`,
      styles: [".mtx-dialog-title{display:flex;justify-content:space-between;align-items:center;padding:8px 24px;margin:0;line-height:48px;font-weight:500;font-size:20px}.mtx-dialog-title .mat-mdc-button-base{margin-right:-16px}[dir=rtl] .mtx-dialog-title .mat-mdc-button-base{margin-right:0;margin-left:-16px}.mtx-dialog-content{display:block;max-height:65vh;padding:0 24px;overflow:auto;-webkit-overflow-scrolling:touch}.mtx-dialog-content p{margin-top:0}.mtx-dialog-actions{display:flex;flex-wrap:wrap;align-items:center;justify-content:flex-end;padding:8px}.mtx-dialog-actions .mat-mdc-button-base{margin-left:8px}[dir=rtl] .mtx-dialog-actions .mat-mdc-button-base{margin-left:0;margin-right:8px}\n"]
    }]
  }], null, null);
})();
var defaults = {
  title: "",
  description: "",
  buttons: [{
    text: "Cancel",
    onClick: () => {
    }
  }, {
    color: "warn",
    text: "OK",
    focusInitial: true,
    onClick: () => {
    }
  }],
  showCloseIcon: false,
  disableClose: true,
  width: "300px"
};
var _MtxDialog = class _MtxDialog {
  constructor() {
    this.dialog = inject(MatDialog);
  }
  originalOpen(componentOrTemplateRef = MtxDialogContainer, config) {
    return this.dialog.open(componentOrTemplateRef, config);
  }
  open(config, componentOrTemplateRef = MtxDialogContainer) {
    const data = Object.assign({}, defaults, config);
    return this.dialog.open(componentOrTemplateRef, __spreadProps(__spreadValues({}, data), {
      data
    }));
  }
  alert(title, description = "", onOk = () => {
  }) {
    this.open({
      title,
      description,
      buttons: [{
        color: "warn",
        text: "OK",
        onClick: () => onOk()
      }]
    });
  }
  confirm(title, description = "", onOk = () => {
  }, onClose = () => {
  }) {
    this.open({
      title,
      description,
      buttons: [{
        text: "Cancel",
        onClick: () => onClose()
      }, {
        color: "warn",
        text: "OK",
        focusInitial: true,
        onClick: () => onOk()
      }]
    });
  }
};
_MtxDialog.ɵfac = function MtxDialog_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MtxDialog)();
};
_MtxDialog.ɵprov = ɵɵdefineInjectable({
  token: _MtxDialog,
  factory: _MtxDialog.ɵfac,
  providedIn: "root"
});
var MtxDialog = _MtxDialog;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MtxDialog, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var _MtxDialogModule = class _MtxDialogModule {
};
_MtxDialogModule.ɵfac = function MtxDialogModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MtxDialogModule)();
};
_MtxDialogModule.ɵmod = ɵɵdefineNgModule({
  type: _MtxDialogModule,
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatIconModule, MtxPipesModule, MtxDialogContainer],
  exports: [MtxDialogContainer]
});
_MtxDialogModule.ɵinj = ɵɵdefineInjector({
  providers: [MtxDialog],
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatIconModule, MtxPipesModule, MtxDialogContainer]
});
var MtxDialogModule = _MtxDialogModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MtxDialogModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, MatDialogModule, MatButtonModule, MatIconModule, MtxPipesModule, MtxDialogContainer],
      exports: [MtxDialogContainer],
      providers: [MtxDialog]
    }]
  }], null, null);
})();

export {
  MtxDialogContainer,
  MtxDialog,
  MtxDialogModule
};
//# sourceMappingURL=chunk-FEJHA6X3.js.map
