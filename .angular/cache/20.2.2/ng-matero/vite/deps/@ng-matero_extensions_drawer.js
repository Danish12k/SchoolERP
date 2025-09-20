import "./chunk-BUODDSMA.js";
import "./chunk-PDT2INH5.js";
import "./chunk-53W4PNKK.js";
import "./chunk-NJS35E3Q.js";
import "./chunk-XA3EVXH3.js";
import "./chunk-5JG26RIF.js";
import "./chunk-3ZNKIVOX.js";
import "./chunk-ZRGC465N.js";
import "./chunk-4VSTA2RQ.js";
import "./chunk-YIF4T2TR.js";
import "./chunk-EBZ3PI6G.js";
import "./chunk-MKT2JYIF.js";
import "./chunk-4HFP2B2Z.js";
import "./chunk-WYFSJBQU.js";
import "./chunk-OX3NRC6A.js";
import {
  CdkDialogContainer,
  Dialog,
  DialogConfig,
  DialogModule
} from "./chunk-6HJBXO2Q.js";
import {
  Overlay
} from "./chunk-5X3YISR3.js";
import {
  CdkPortalOutlet,
  PortalModule
} from "./chunk-E7NPFLEN.js";
import "./chunk-VENV3F3G.js";
import {
  coerceCssPixelValue
} from "./chunk-L2BZS5YT.js";
import "./chunk-4MZFUHHW.js";
import {
  MatCommonModule,
  hasModifierKey
} from "./chunk-EUCP2ZY2.js";
import "./chunk-AJKRHC55.js";
import "./chunk-GIJAI27L.js";
import "./chunk-YD3JPWO3.js";
import "./chunk-2ZKSKDON.js";
import "./chunk-ZZTSUEW6.js";
import "./chunk-VFYKDPTI.js";
import "./chunk-7UJZXIJQ.js";
import "./chunk-IP7SSTAP.js";
import "./chunk-WB2HPCD2.js";
import "./chunk-TR37UYJX.js";
import "./chunk-J7QA3RMN.js";
import "./chunk-7NOA7DFH.js";
import {
  ESCAPE
} from "./chunk-2SF2BFR3.js";
import "./chunk-SOWEEQXE.js";
import "./chunk-IET25UKP.js";
import "./chunk-OUSM42MY.js";
import {
  ANIMATION_MODULE_TYPE,
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Injectable,
  InjectionToken,
  NgModule,
  ViewChild,
  ViewEncapsulation,
  inject,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdomProperty,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵqueryRefresh,
  ɵɵtemplate,
  ɵɵviewQuery
} from "./chunk-TGP6U4PS.js";
import {
  defer,
  merge
} from "./chunk-MY7C4QNH.js";
import "./chunk-H6VVMQMC.js";
import {
  Subject,
  filter,
  startWith,
  take
} from "./chunk-KEQKGBJ6.js";
import "./chunk-HOFLPY52.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-PEHFQLBM.js";

// node_modules/@ng-matero/extensions/fesm2022/mtxDrawer.mjs
function MtxDrawerContainer_ng_template_0_Template(rf, ctx) {
}
var MtxDrawerConfig = class {
  constructor() {
    this.data = null;
    this.hasBackdrop = true;
    this.disableClose = false;
    this.ariaLabel = null;
    this.closeOnNavigation = true;
    this.autoFocus = "first-tabbable";
    this.restoreFocus = true;
    this.position = "right";
  }
};
var ENTER_ANIMATION = "_mtx-drawer-enter";
var EXIT_ANIMATION = "_mtx-drawer-exit";
var _MtxDrawerContainer = class _MtxDrawerContainer extends CdkDialogContainer {
  constructor() {
    super(...arguments);
    this._animationsDisabled = inject(ANIMATION_MODULE_TYPE, {
      optional: true
    }) === "NoopAnimations";
    this._animationState = "void";
    this._animationStateChanged = new EventEmitter();
    this._destroyed = false;
  }
  get _drawerPosition() {
    return `mtx-drawer-${this._config.position}`;
  }
  _contentAttached() {
    super._contentAttached();
    this.enter();
  }
  /** Begin animation of bottom sheet entrance into view. */
  enter() {
    if (!this._destroyed) {
      this._animationState = "visible";
      this._changeDetectorRef.markForCheck();
      this._changeDetectorRef.detectChanges();
      if (this._animationsDisabled) {
        this._simulateAnimation(ENTER_ANIMATION);
      }
    }
  }
  /** Begin animation of the bottom sheet exiting from view. */
  exit() {
    if (!this._destroyed) {
      this._animationState = "hidden";
      this._changeDetectorRef.markForCheck();
      if (this._animationsDisabled) {
        this._simulateAnimation(EXIT_ANIMATION);
      }
    }
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    this._destroyed = true;
  }
  _simulateAnimation(name) {
    this._ngZone.run(() => {
      this._handleAnimationEvent(true, name);
      setTimeout(() => this._handleAnimationEvent(false, name));
    });
  }
  _handleAnimationEvent(isStart, animationName) {
    const isEnter = animationName === ENTER_ANIMATION;
    const isExit = animationName === EXIT_ANIMATION;
    if (isEnter) {
      this._trapFocus();
    }
    if (isEnter || isExit) {
      this._animationStateChanged.emit({
        toState: isEnter ? "visible" : "hidden",
        phase: isStart ? "start" : "done"
      });
    }
  }
  _captureInitialFocus() {
  }
};
_MtxDrawerContainer.ɵfac = /* @__PURE__ */ (() => {
  let ɵMtxDrawerContainer_BaseFactory;
  return function MtxDrawerContainer_Factory(__ngFactoryType__) {
    return (ɵMtxDrawerContainer_BaseFactory || (ɵMtxDrawerContainer_BaseFactory = ɵɵgetInheritedFactory(_MtxDrawerContainer)))(__ngFactoryType__ || _MtxDrawerContainer);
  };
})();
_MtxDrawerContainer.ɵcmp = ɵɵdefineComponent({
  type: _MtxDrawerContainer,
  selectors: [["mtx-drawer-container"]],
  viewQuery: function MtxDrawerContainer_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(CdkPortalOutlet, 7);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._portalOutlet = _t.first);
    }
  },
  hostAttrs: ["tabindex", "-1", 1, "mtx-drawer-container"],
  hostVars: 12,
  hostBindings: function MtxDrawerContainer_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("animationstart", function MtxDrawerContainer_animationstart_HostBindingHandler($event) {
        return ctx._handleAnimationEvent(true, $event.animationName);
      })("animationend", function MtxDrawerContainer_animationend_HostBindingHandler($event) {
        return ctx._handleAnimationEvent(false, $event.animationName);
      })("animationcancel", function MtxDrawerContainer_animationcancel_HostBindingHandler($event) {
        return ctx._handleAnimationEvent(false, $event.animationName);
      });
    }
    if (rf & 2) {
      ɵɵdomProperty("id", ctx._config.id);
      ɵɵattribute("role", ctx._config.role)("aria-modal", ctx._config.isModal)("aria-label", ctx._config.ariaLabel);
      ɵɵclassMap(ctx._drawerPosition);
      ɵɵclassProp("mtx-drawer-container-animations-enabled", !ctx._animationsDisabled)("mtx-drawer-container-enter", ctx._animationState === "visible")("mtx-drawer-container-exit", ctx._animationState === "hidden");
    }
  },
  features: [ɵɵInheritDefinitionFeature],
  decls: 1,
  vars: 0,
  consts: [["cdkPortalOutlet", ""]],
  template: function MtxDrawerContainer_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, MtxDrawerContainer_ng_template_0_Template, 0, 0, "ng-template", 0);
    }
  },
  dependencies: [CdkPortalOutlet],
  styles: ["@keyframes _mtx-drawer-enter{0%{box-shadow:none;visibility:hidden}to{transform:none;visibility:visible}}@keyframes _mtx-drawer-exit{0%{transform:none;visibility:visible}to{box-shadow:none;visibility:hidden}}.mtx-drawer-container{display:block;width:100%;padding:8px 16px;overflow:auto;outline:0;box-sizing:border-box;position:relative;background-color:var(--mtx-drawer-container-background-color, var(--mat-sys-surface));color:var(--mtx-drawer-container-text-color, var(--mat-sys-on-surface-variant));box-shadow:var(--mtx-drawer-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, .2), 0px 2px 2px 0px rgba(0, 0, 0, .14), 0px 1px 5px 0px rgba(0, 0, 0, .12))}@media (forced-colors: active){.mtx-drawer-container{outline:1px solid}}.mtx-drawer-container-animations-enabled.mtx-drawer-container-enter{animation:_mtx-drawer-enter .15s cubic-bezier(0,0,.2,1) forwards}.mtx-drawer-container-animations-enabled.mtx-drawer-container-exit{animation:_mtx-drawer-exit .4s cubic-bezier(.25,.8,.25,1) backwards}.mtx-drawer-container-animations-enabled.mtx-drawer-right{transform:translate(100%)}.mtx-drawer-container-animations-enabled.mtx-drawer-left{transform:translate(-100%)}.mtx-drawer-container-animations-enabled.mtx-drawer-bottom{transform:translateY(100%)}.mtx-drawer-container-animations-enabled.mtx-drawer-top{transform:translateY(-100%)}.mtx-drawer-right{border-top-left-radius:var(--mtx-drawer-container-shape, var(--mat-sys-corner-large));border-bottom-left-radius:var(--mtx-drawer-container-shape, var(--mat-sys-corner-large))}.mtx-drawer-left{border-top-right-radius:var(--mtx-drawer-container-shape, var(--mat-sys-corner-large));border-bottom-right-radius:var(--mtx-drawer-container-shape, var(--mat-sys-corner-large))}.mtx-drawer-bottom{border-top-left-radius:var(--mtx-drawer-container-shape, var(--mat-sys-corner-large));border-top-right-radius:var(--mtx-drawer-container-shape, var(--mat-sys-corner-large))}.mtx-drawer-top{border-bottom-left-radius:var(--mtx-drawer-container-shape, var(--mat-sys-corner-large));border-bottom-right-radius:var(--mtx-drawer-container-shape, var(--mat-sys-corner-large))}\n"],
  encapsulation: 2
});
var MtxDrawerContainer = _MtxDrawerContainer;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MtxDrawerContainer, [{
    type: Component,
    args: [{
      selector: "mtx-drawer-container",
      changeDetection: ChangeDetectionStrategy.Default,
      encapsulation: ViewEncapsulation.None,
      host: {
        "class": "mtx-drawer-container",
        "[class]": "_drawerPosition",
        "[class.mtx-drawer-container-animations-enabled]": "!_animationsDisabled",
        "[class.mtx-drawer-container-enter]": '_animationState === "visible"',
        "[class.mtx-drawer-container-exit]": '_animationState === "hidden"',
        "tabindex": "-1",
        "[id]": "_config.id",
        "[attr.role]": "_config.role",
        "[attr.aria-modal]": "_config.isModal",
        "[attr.aria-label]": "_config.ariaLabel",
        "(animationstart)": "_handleAnimationEvent(true, $event.animationName)",
        "(animationend)": "_handleAnimationEvent(false, $event.animationName)",
        "(animationcancel)": "_handleAnimationEvent(false, $event.animationName)"
      },
      imports: [CdkPortalOutlet],
      template: "<ng-template cdkPortalOutlet></ng-template>\n",
      styles: ["@keyframes _mtx-drawer-enter{0%{box-shadow:none;visibility:hidden}to{transform:none;visibility:visible}}@keyframes _mtx-drawer-exit{0%{transform:none;visibility:visible}to{box-shadow:none;visibility:hidden}}.mtx-drawer-container{display:block;width:100%;padding:8px 16px;overflow:auto;outline:0;box-sizing:border-box;position:relative;background-color:var(--mtx-drawer-container-background-color, var(--mat-sys-surface));color:var(--mtx-drawer-container-text-color, var(--mat-sys-on-surface-variant));box-shadow:var(--mtx-drawer-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, .2), 0px 2px 2px 0px rgba(0, 0, 0, .14), 0px 1px 5px 0px rgba(0, 0, 0, .12))}@media (forced-colors: active){.mtx-drawer-container{outline:1px solid}}.mtx-drawer-container-animations-enabled.mtx-drawer-container-enter{animation:_mtx-drawer-enter .15s cubic-bezier(0,0,.2,1) forwards}.mtx-drawer-container-animations-enabled.mtx-drawer-container-exit{animation:_mtx-drawer-exit .4s cubic-bezier(.25,.8,.25,1) backwards}.mtx-drawer-container-animations-enabled.mtx-drawer-right{transform:translate(100%)}.mtx-drawer-container-animations-enabled.mtx-drawer-left{transform:translate(-100%)}.mtx-drawer-container-animations-enabled.mtx-drawer-bottom{transform:translateY(100%)}.mtx-drawer-container-animations-enabled.mtx-drawer-top{transform:translateY(-100%)}.mtx-drawer-right{border-top-left-radius:var(--mtx-drawer-container-shape, var(--mat-sys-corner-large));border-bottom-left-radius:var(--mtx-drawer-container-shape, var(--mat-sys-corner-large))}.mtx-drawer-left{border-top-right-radius:var(--mtx-drawer-container-shape, var(--mat-sys-corner-large));border-bottom-right-radius:var(--mtx-drawer-container-shape, var(--mat-sys-corner-large))}.mtx-drawer-bottom{border-top-left-radius:var(--mtx-drawer-container-shape, var(--mat-sys-corner-large));border-top-right-radius:var(--mtx-drawer-container-shape, var(--mat-sys-corner-large))}.mtx-drawer-top{border-bottom-left-radius:var(--mtx-drawer-container-shape, var(--mat-sys-corner-large));border-bottom-right-radius:var(--mtx-drawer-container-shape, var(--mat-sys-corner-large))}\n"]
    }]
  }], null, {
    _portalOutlet: [{
      type: ViewChild,
      args: [CdkPortalOutlet, {
        static: true
      }]
    }]
  });
})();
var MtxDrawerRef = class {
  /** Instance of the component making up the content of the drawer. */
  get instance() {
    return this._ref.componentInstance;
  }
  /**
   * `ComponentRef` of the component opened into the drawer. Will be
   * null when the drawer is opened using a `TemplateRef`.
   */
  get componentRef() {
    return this._ref.componentRef;
  }
  constructor(_ref, config, containerInstance) {
    this._ref = _ref;
    this._afterDismissed = new Subject();
    this._afterOpened = new Subject();
    this.containerInstance = containerInstance;
    this.disableClose = config.disableClose;
    this.id = _ref.id;
    containerInstance._animationStateChanged.pipe(filter((event) => event.phase === "done" && event.toState === "visible"), take(1)).subscribe(() => {
      this._afterOpened.next();
      this._afterOpened.complete();
    });
    containerInstance._animationStateChanged.pipe(filter((event) => event.phase === "done" && event.toState === "hidden"), take(1)).subscribe(() => {
      clearTimeout(this._closeFallbackTimeout);
      this._ref.close(this._result);
    });
    _ref.overlayRef.detachments().subscribe(() => {
      this._ref.close(this._result);
    });
    merge(this.backdropClick(), this.keydownEvents().pipe(filter((event) => event.keyCode === ESCAPE))).subscribe((event) => {
      if (!this.disableClose && (event.type !== "keydown" || !hasModifierKey(event))) {
        event.preventDefault();
        this.dismiss();
      }
    });
  }
  /**
   * Dismisses the drawer.
   * @param result Data to be passed back to the drawer opener.
   */
  dismiss(result) {
    if (this.containerInstance && !this._afterDismissed.closed) {
      this.containerInstance._animationStateChanged.pipe(filter((event) => event.phase === "start"), take(1)).subscribe((event) => {
        this._closeFallbackTimeout = setTimeout(() => this._ref.close(this._result), 500);
        this._ref.overlayRef.detachBackdrop();
      });
      this._result = result;
      this.containerInstance.exit();
      this.containerInstance = null;
    }
  }
  /** Gets an observable that is notified when the drawer is finished closing. */
  afterDismissed() {
    return this._ref.closed;
  }
  /** Gets an observable that is notified when the drawer has opened and appeared. */
  afterOpened() {
    return this._afterOpened;
  }
  /**
   * Gets an observable that emits when the overlay's backdrop has been clicked.
   */
  backdropClick() {
    return this._ref.backdropClick;
  }
  /**
   * Gets an observable that emits when keydown events are targeted on the overlay.
   */
  keydownEvents() {
    return this._ref.keydownEvents;
  }
};
var MTX_DRAWER_DATA = new InjectionToken("MtxDrawerData");
var MTX_DRAWER_DEFAULT_OPTIONS = new InjectionToken("mtx-drawer-default-options");
var uniqueId = 0;
var _MtxDrawer = class _MtxDrawer {
  constructor() {
    this._overlay = inject(Overlay);
    this._parentDrawer = inject(_MtxDrawer, {
      optional: true,
      skipSelf: true
    });
    this._defaultOptions = inject(MTX_DRAWER_DEFAULT_OPTIONS, {
      optional: true
    });
    this._openDrawersAtThisLevel = [];
    this._afterAllDismissedAtThisLevel = new Subject();
    this._afterOpenedAtThisLevel = new Subject();
    this._dialog = inject(Dialog);
    this.afterAllDismissed = defer(() => this.openDrawers.length ? this._getAfterAllDismissed() : this._getAfterAllDismissed().pipe(startWith(void 0)));
  }
  /** Keeps track of the currently-open dialogs. */
  get openDrawers() {
    return this._parentDrawer ? this._parentDrawer.openDrawers : this._openDrawersAtThisLevel;
  }
  /** Stream that emits when a drawer has been opened. */
  get afterOpened() {
    return this._parentDrawer ? this._parentDrawer.afterOpened : this._afterOpenedAtThisLevel;
  }
  _getAfterAllDismissed() {
    const parent = this._parentDrawer;
    return parent ? parent._getAfterAllDismissed() : this._afterAllDismissedAtThisLevel;
  }
  open(componentOrTemplateRef, config) {
    let drawerRef;
    const _config = __spreadValues(__spreadValues({}, this._defaultOptions || new MtxDrawerConfig()), config);
    _config.id = _config.id || `mtx-drawer-${uniqueId++}`;
    _config.width = _config.position === "left" || _config.position === "right" ? coerceCssPixelValue(_config.width) : "100vw";
    _config.height = _config.position === "top" || _config.position === "bottom" ? coerceCssPixelValue(_config.height) : "100vh";
    this._dialog.open(componentOrTemplateRef, __spreadProps(__spreadValues({}, _config), {
      // Disable closing since we need to sync it up to the animation ourselves.
      disableClose: true,
      // Disable closing on detachments so that we can sync up the animation.
      closeOnOverlayDetachments: false,
      container: {
        type: MtxDrawerContainer,
        providers: () => [
          // Provide our config as the CDK config as well since it has the same interface as the
          // CDK one, but it contains the actual values passed in by the user for things like
          // `disableClose` which we disable for the CDK dialog since we handle it ourselves.
          {
            provide: MtxDrawerConfig,
            useValue: _config
          },
          {
            provide: DialogConfig,
            useValue: _config
          }
        ]
      },
      scrollStrategy: _config.scrollStrategy || this._overlay.scrollStrategies.block(),
      positionStrategy: this._overlay.position().global()[_config.position]("0"),
      templateContext: () => ({
        drawerRef
      }),
      providers: (cdkRef, _cdkConfig, container) => {
        drawerRef = new MtxDrawerRef(cdkRef, _config, container);
        return [{
          provide: MtxDrawerRef,
          useValue: drawerRef
        }, {
          provide: MTX_DRAWER_DATA,
          useValue: _config.data
        }];
      }
    }));
    this.openDrawers.push(drawerRef);
    this.afterOpened.next(drawerRef);
    drawerRef.afterDismissed().subscribe(() => {
      const index = this.openDrawers.indexOf(drawerRef);
      if (index > -1) {
        this.openDrawers.splice(index, 1);
        if (!this.openDrawers.length) {
          this._getAfterAllDismissed().next();
        }
      }
    });
    return drawerRef;
  }
  /**
   * Dismisses all of the currently-open drawers.
   */
  dismissAll() {
    this._dismissDrawers(this.openDrawers);
  }
  /**
   * Finds an open drawer by its id.
   * @param id ID to use when looking up the drawer.
   */
  getDrawerById(id) {
    return this.openDrawers.find((drawer) => drawer.id === id);
  }
  ngOnDestroy() {
    this._dismissDrawers(this._openDrawersAtThisLevel);
    this._afterAllDismissedAtThisLevel.complete();
    this._afterOpenedAtThisLevel.complete();
  }
  _dismissDrawers(drawers) {
    let i = drawers.length;
    while (i--) {
      drawers[i].dismiss();
    }
  }
};
_MtxDrawer.ɵfac = function MtxDrawer_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MtxDrawer)();
};
_MtxDrawer.ɵprov = ɵɵdefineInjectable({
  token: _MtxDrawer,
  factory: _MtxDrawer.ɵfac,
  providedIn: "root"
});
var MtxDrawer = _MtxDrawer;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MtxDrawer, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var _MtxDrawerModule = class _MtxDrawerModule {
};
_MtxDrawerModule.ɵfac = function MtxDrawerModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MtxDrawerModule)();
};
_MtxDrawerModule.ɵmod = ɵɵdefineNgModule({
  type: _MtxDrawerModule,
  imports: [DialogModule, PortalModule, MatCommonModule, MtxDrawerContainer],
  exports: [MtxDrawerContainer, MatCommonModule]
});
_MtxDrawerModule.ɵinj = ɵɵdefineInjector({
  providers: [MtxDrawer],
  imports: [DialogModule, PortalModule, MatCommonModule, MatCommonModule]
});
var MtxDrawerModule = _MtxDrawerModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MtxDrawerModule, [{
    type: NgModule,
    args: [{
      imports: [DialogModule, PortalModule, MatCommonModule, MtxDrawerContainer],
      exports: [MtxDrawerContainer, MatCommonModule],
      providers: [MtxDrawer]
    }]
  }], null, null);
})();
var mtxDrawerAnimations = {
  // Represents:
  // drawerState: trigger('state', [
  //   state(
  //     'void, hidden',
  //     style({
  //       'box-shadow': 'none',
  //       'visibility': 'hidden',
  //     })
  //   ),
  //   state(
  //     'visible',
  //     style({
  //       transform: 'none',
  //       visibility: 'visible',
  //     })
  //   ),
  //   transition(
  //     'visible => void, visible => hidden',
  //     animate('400ms cubic-bezier(0.25, 0.8, 0.25, 1)')
  //   ),
  //   transition('void => visible', animate('150ms cubic-bezier(0, 0, 0.2, 1)')),
  // ]),
  /** Animation that shows and hides a drawer. */
  drawerState: {
    type: 7,
    name: "state",
    definitions: [{
      type: 0,
      name: "void, hidden",
      styles: {
        type: 6,
        styles: {
          "box-shadow": "none",
          "visibility": "hidden"
        },
        offset: null
      },
      options: null
    }, {
      type: 0,
      name: "visible",
      styles: {
        type: 6,
        styles: {
          transform: "none",
          visibility: "visible"
        },
        offset: null
      },
      options: null
    }, {
      type: 1,
      expr: "visible => void, visible => hidden",
      animation: {
        type: 4,
        styles: {
          type: 6,
          styles: {},
          offset: null
        },
        timings: "400ms cubic-bezier(0.25, 0.8, 0.25, 1)"
      },
      options: null
    }, {
      type: 1,
      expr: "void => visible",
      animation: {
        type: 4,
        styles: {
          type: 6,
          styles: {},
          offset: null
        },
        timings: "150ms cubic-bezier(0, 0, 0.2, 1)"
      },
      options: null
    }],
    options: {}
  }
};
export {
  MTX_DRAWER_DATA,
  MTX_DRAWER_DEFAULT_OPTIONS,
  MtxDrawer,
  MtxDrawerConfig,
  MtxDrawerContainer,
  MtxDrawerModule,
  MtxDrawerRef,
  mtxDrawerAnimations
};
//# sourceMappingURL=@ng-matero_extensions_drawer.js.map
