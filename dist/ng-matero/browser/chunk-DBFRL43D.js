import {
  MatButtonToggle,
  MatButtonToggleGroup,
  MatButtonToggleModule
} from "./chunk-YS74DO2Z.js";
import {
  MatCard,
  MatCardContent,
  MatCardModule
} from "./chunk-VYFYOWDW.js";
import {
  NgxPermissionsDirective,
  NgxPermissionsModule,
  NgxPermissionsService,
  NgxRolesService,
  PageHeaderComponent,
  Router,
  ngxPermissionsGuard
} from "./chunk-NJPKBYXE.js";
import {
  CommonModule,
  FormsModule,
  JsonPipe,
  MatIconButton,
  NgControlStatus,
  NgModel
} from "./chunk-VC5UOWO3.js";
import "./chunk-R3YVZPGI.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  NgModule,
  Output,
  Subject,
  ViewEncapsulation,
  booleanAttribute,
  inject,
  setClassMetadata,
  takeUntil,
  ɵsetClassDebugInfo,
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
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-KH435EP6.js";

// src/app/routes/permissions/role-switching/role-switching.component.ts
var _PermissionsRoleSwitchingComponent = class _PermissionsRoleSwitchingComponent {
  constructor() {
    this.rolesSrv = inject(NgxRolesService);
    this.permissionsSrv = inject(NgxPermissionsService);
    this.currentRole = "";
    this.currentPermissions = [];
    this.permissionsOfRole = {
      ADMIN: ["canAdd", "canDelete", "canEdit", "canRead"],
      MANAGER: ["canAdd", "canEdit", "canRead"],
      GUEST: ["canRead"]
    };
    this._destroy$ = new Subject();
  }
  ngOnInit() {
    this.currentRole = Object.keys(this.rolesSrv.getRoles())[0];
    this.currentPermissions = Object.keys(this.permissionsSrv.getPermissions());
    this.rolesSrv.roles$.pipe(takeUntil(this._destroy$)).subscribe((roles) => {
      console.log(roles);
    });
    this.permissionsSrv.permissions$.pipe(takeUntil(this._destroy$)).subscribe((permissions) => {
      console.log(permissions);
    });
  }
  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }
  onPermissionChange() {
    this.currentPermissions = this.permissionsOfRole[this.currentRole];
    this.rolesSrv.flushRolesAndPermissions();
    this.rolesSrv.addRoleWithPermissions(this.currentRole, this.currentPermissions);
  }
};
_PermissionsRoleSwitchingComponent.\u0275fac = function PermissionsRoleSwitchingComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PermissionsRoleSwitchingComponent)();
};
_PermissionsRoleSwitchingComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PermissionsRoleSwitchingComponent, selectors: [["app-permissions-role-switching"]], decls: 26, vars: 7, consts: [["href", "https://github.com/AlexKhymenko/ngx-permissions", "target", "_blank"], [3, "ngModelChange", "change", "ngModel"], ["value", "ADMIN"], ["value", "MANAGER"], ["value", "GUEST"]], template: function PermissionsRoleSwitchingComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "page-header");
    \u0275\u0275elementStart(1, "p");
    \u0275\u0275text(2, " The permissions management is powered by ");
    \u0275\u0275elementStart(3, "a", 0)(4, "code");
    \u0275\u0275text(5, "ngx-permissions");
    \u0275\u0275elementEnd()();
    \u0275\u0275text(6, ".\n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "mat-card")(8, "mat-card-content")(9, "mat-button-toggle-group", 1);
    \u0275\u0275twoWayListener("ngModelChange", function PermissionsRoleSwitchingComponent_Template_mat_button_toggle_group_ngModelChange_9_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.currentRole, $event) || (ctx.currentRole = $event);
      return $event;
    });
    \u0275\u0275listener("change", function PermissionsRoleSwitchingComponent_Template_mat_button_toggle_group_change_9_listener() {
      return ctx.onPermissionChange();
    });
    \u0275\u0275elementStart(10, "mat-button-toggle", 2);
    \u0275\u0275text(11, "ADMIN");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-button-toggle", 3);
    \u0275\u0275text(13, "MANAGER");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "mat-button-toggle", 4);
    \u0275\u0275text(15, "GUEST");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "p");
    \u0275\u0275text(17, " Your current role: ");
    \u0275\u0275elementStart(18, "code");
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "json");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "p");
    \u0275\u0275text(22, " Your current permissions: ");
    \u0275\u0275elementStart(23, "code");
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "json");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx.currentRole);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 3, ctx.currentRole));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 5, ctx.currentPermissions));
  }
}, dependencies: [FormsModule, NgControlStatus, NgModel, MatButtonToggleModule, MatButtonToggleGroup, MatButtonToggle, MatCardModule, MatCard, MatCardContent, PageHeaderComponent, JsonPipe], encapsulation: 2 });
var PermissionsRoleSwitchingComponent = _PermissionsRoleSwitchingComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PermissionsRoleSwitchingComponent, [{
    type: Component,
    args: [{ selector: "app-permissions-role-switching", imports: [JsonPipe, FormsModule, MatButtonToggleModule, MatCardModule, PageHeaderComponent], template: '<page-header />\r\n\r\n<p>\r\n  The permissions management is powered by\r\n  <a href="https://github.com/AlexKhymenko/ngx-permissions" target="_blank">\r\n    <code>ngx-permissions</code>\r\n  </a>.\r\n</p>\r\n\r\n<mat-card>\r\n  <mat-card-content>\r\n    <mat-button-toggle-group [(ngModel)]="currentRole" (change)="onPermissionChange()">\r\n      <mat-button-toggle value="ADMIN">ADMIN</mat-button-toggle>\r\n      <mat-button-toggle value="MANAGER">MANAGER</mat-button-toggle>\r\n      <mat-button-toggle value="GUEST">GUEST</mat-button-toggle>\r\n    </mat-button-toggle-group>\r\n\r\n    <p>\r\n      Your current role: <code>{{currentRole | json}}</code>\r\n    </p>\r\n\r\n    <p>\r\n      Your current permissions: <code>{{currentPermissions | json}}</code>\r\n    </p>\r\n  </mat-card-content>\r\n</mat-card>\r\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PermissionsRoleSwitchingComponent, { className: "PermissionsRoleSwitchingComponent", filePath: "src/app/routes/permissions/role-switching/role-switching.component.ts", lineNumber: 18 });
})();

// src/app/routes/permissions/route-guard/route-guard.component.ts
var _PermissionsRouteGuardComponent = class _PermissionsRouteGuardComponent {
  constructor() {
    this.router = inject(Router);
    this.rolesSrv = inject(NgxRolesService);
    this.permissionsSrv = inject(NgxPermissionsService);
    this.currentRole = "";
    this.currentPermissions = [];
    this.permissionsOfRole = {
      ADMIN: ["canAdd", "canDelete", "canEdit", "canRead"],
      MANAGER: ["canAdd", "canEdit", "canRead"],
      GUEST: ["canRead"]
    };
  }
  ngOnInit() {
    this.currentRole = Object.keys(this.rolesSrv.getRoles())[0];
    this.currentPermissions = Object.keys(this.permissionsSrv.getPermissions());
  }
  onPermissionChange() {
    this.currentPermissions = this.permissionsOfRole[this.currentRole];
    this.rolesSrv.flushRolesAndPermissions();
    this.rolesSrv.addRoleWithPermissions(this.currentRole, this.currentPermissions);
    this.router.navigateByUrl("/dashboard");
  }
};
_PermissionsRouteGuardComponent.\u0275fac = function PermissionsRouteGuardComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PermissionsRouteGuardComponent)();
};
_PermissionsRouteGuardComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PermissionsRouteGuardComponent, selectors: [["app-permissions-route-guard"]], decls: 22, vars: 7, consts: [[3, "ngModelChange", "change", "ngModel"], ["value", "ADMIN"], ["value", "MANAGER"], ["value", "GUEST"]], template: function PermissionsRouteGuardComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "page-header");
    \u0275\u0275elementStart(1, "p");
    \u0275\u0275text(2, " The route will be redirected to dashboard after change permission.\n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-card")(4, "mat-card-content")(5, "mat-button-toggle-group", 0);
    \u0275\u0275twoWayListener("ngModelChange", function PermissionsRouteGuardComponent_Template_mat_button_toggle_group_ngModelChange_5_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.currentRole, $event) || (ctx.currentRole = $event);
      return $event;
    });
    \u0275\u0275listener("change", function PermissionsRouteGuardComponent_Template_mat_button_toggle_group_change_5_listener() {
      return ctx.onPermissionChange();
    });
    \u0275\u0275elementStart(6, "mat-button-toggle", 1);
    \u0275\u0275text(7, "ADMIN");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "mat-button-toggle", 2);
    \u0275\u0275text(9, "MANAGER");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "mat-button-toggle", 3);
    \u0275\u0275text(11, "GUEST");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "p");
    \u0275\u0275text(13, " Your current role: ");
    \u0275\u0275elementStart(14, "code");
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "json");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "p");
    \u0275\u0275text(18, " Your current permissions: ");
    \u0275\u0275elementStart(19, "code");
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "json");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx.currentRole);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 3, ctx.currentRole));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 5, ctx.currentPermissions));
  }
}, dependencies: [FormsModule, NgControlStatus, NgModel, MatButtonToggleModule, MatButtonToggleGroup, MatButtonToggle, MatCardModule, MatCard, MatCardContent, PageHeaderComponent, JsonPipe], encapsulation: 2 });
var PermissionsRouteGuardComponent = _PermissionsRouteGuardComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PermissionsRouteGuardComponent, [{
    type: Component,
    args: [{ selector: "app-permissions-route-guard", imports: [JsonPipe, FormsModule, MatButtonToggleModule, MatCardModule, PageHeaderComponent], template: '<page-header />\r\n\r\n<p>\r\n  The route will be redirected to dashboard after change permission.\r\n</p>\r\n\r\n<mat-card>\r\n  <mat-card-content>\r\n    <mat-button-toggle-group [(ngModel)]="currentRole" (change)="onPermissionChange()">\r\n      <mat-button-toggle value="ADMIN">ADMIN</mat-button-toggle>\r\n      <mat-button-toggle value="MANAGER">MANAGER</mat-button-toggle>\r\n      <mat-button-toggle value="GUEST">GUEST</mat-button-toggle>\r\n    </mat-button-toggle-group>\r\n\r\n    <p>\r\n      Your current role: <code>{{currentRole | json}}</code>\r\n    </p>\r\n\r\n    <p>\r\n      Your current permissions: <code>{{currentPermissions | json}}</code>\r\n    </p>\r\n  </mat-card-content>\r\n</mat-card>\r\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PermissionsRouteGuardComponent, { className: "PermissionsRouteGuardComponent", filePath: "src/app/routes/permissions/route-guard/route-guard.component.ts", lineNumber: 17 });
})();

// node_modules/@ng-matero/extensions/fesm2022/mtxAlert.mjs
var _c0 = ["*"];
function MtxAlert_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "button", 1);
    \u0275\u0275listener("click", function MtxAlert_Conditional_1_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1._onClosed());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 2);
    \u0275\u0275element(3, "path", 3);
    \u0275\u0275elementEnd()()();
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
_MtxAlert.\u0275fac = function MtxAlert_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MtxAlert)();
};
_MtxAlert.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _MtxAlert,
  selectors: [["mtx-alert"]],
  hostAttrs: ["role", "alert"],
  hostVars: 4,
  hostBindings: function MtxAlert_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classMap(ctx.hostClassList);
      \u0275\u0275classProp("mtx-alert-dismissible", ctx.dismissible);
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
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
      \u0275\u0275conditionalCreate(1, MtxAlert_Conditional_1_Template, 4, 0, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.dismissible ? 1 : -1);
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
_MtxAlertModule.\u0275fac = function MtxAlertModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MtxAlertModule)();
};
_MtxAlertModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _MtxAlertModule,
  imports: [CommonModule, MtxAlert],
  exports: [MtxAlert]
});
_MtxAlertModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
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

// src/app/routes/permissions/test/test.component.ts
var _c02 = () => ["admin"];
var _c1 = () => ["guest"];
var _c2 = () => ["adminnnnn"];
var _c3 = () => [];
function PermissionsTestComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 11);
    \u0275\u0275text(1, " I should see it only admin ");
    \u0275\u0275elementEnd();
  }
}
function PermissionsTestComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 11);
    \u0275\u0275text(1, " Usage on both only and except I should see it only admin ");
    \u0275\u0275elementEnd();
  }
}
function PermissionsTestComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 12);
    \u0275\u0275text(1, "I will see it only guest");
    \u0275\u0275elementEnd();
  }
}
function PermissionsTestComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 13);
    \u0275\u0275text(1, "I will see it except adminnnnn");
    \u0275\u0275elementEnd();
  }
}
function PermissionsTestComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 14);
    \u0275\u0275text(1, "I should see it except admin");
    \u0275\u0275elementEnd();
  }
}
function PermissionsTestComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, " Testing template ");
    \u0275\u0275elementEnd();
  }
}
function PermissionsTestComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, " Testing template ");
    \u0275\u0275elementEnd();
  }
}
function PermissionsTestComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 15);
    \u0275\u0275text(1, "else block");
    \u0275\u0275elementEnd();
  }
}
function PermissionsTestComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 16);
    \u0275\u0275text(1, "then block");
    \u0275\u0275elementEnd();
  }
}
function PermissionsTestComponent_button_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button");
    \u0275\u0275text(1, " This should be visible to admin or superadmin ");
    \u0275\u0275elementEnd();
  }
}
function PermissionsTestComponent_button_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button");
    \u0275\u0275text(1, "WTF");
    \u0275\u0275elementEnd();
  }
}
var _PermissionsTestComponent = class _PermissionsTestComponent {
  constructor() {
    this.permissionsSrv = inject(NgxPermissionsService);
    this.comparedPermission = ["guest"];
  }
  getPermissions() {
    return Object.keys(this.permissionsSrv.getPermissions());
  }
  addPermission() {
    this.permissionsSrv.addPermission("admin", () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => resolve(true), 2e3);
      });
    });
  }
  removePermission() {
    this.permissionsSrv.removePermission("admin");
  }
  unAuthorized() {
    console.log("unAuthorized");
  }
  authorized() {
    console.log("authorizes");
  }
  changeToAdmin() {
    this.comparedPermission = ["admin"];
    console.log(this.comparedPermission);
  }
  changeToAnotherPermission() {
    this.comparedPermission = ["awesome"];
    console.log(this.comparedPermission);
  }
  changeToGuest() {
    this.comparedPermission = ["guest"];
    console.log(this.comparedPermission);
  }
};
_PermissionsTestComponent.\u0275fac = function PermissionsTestComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PermissionsTestComponent)();
};
_PermissionsTestComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PermissionsTestComponent, selectors: [["app-permissions-test"]], decls: 41, vars: 28, consts: [["a", ""], ["b", ""], ["type", "danger"], [3, "click"], ["permissions", "", 3, "ngxPermissionsOnly"], [3, "ngxPermissionsOnly", "ngxPermissionsExcept"], ["permissions", "", 3, "permissionsAuthorized", "permissionsUnauthorized", "ngxPermissionsExcept"], ["permissions", "", 3, "ngxPermissionsExcept"], [4, "ngxPermissionsOnly", "ngxPermissionsOnlyElse", "ngxPermissionsOnlyThen"], [4, "ngxPermissionsExcept", "ngxPermissionsExceptElse", "ngxPermissionsExceptThen"], [4, "ngxPermissionsOnly"], [1, "bg-green-50", "text-white"], [1, "bg-purple-50", "text-white"], [1, "bg-orange-50", "text-white"], [1, "bg-azure-50", "text-white"], [1, "bg-azure-30", "text-light"], [1, "bg-azure-90", "text-dark"]], template: function PermissionsTestComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "page-header");
    \u0275\u0275elementStart(1, "mat-card")(2, "mat-card-content")(3, "mtx-alert", 2);
    \u0275\u0275text(4, "\u26A0\uFE0F The permissions check will delay 2s.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p")(6, "button", 3);
    \u0275\u0275listener("click", function PermissionsTestComponent_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.addPermission());
    });
    \u0275\u0275text(7, "Add Permission [ admin ]");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 3);
    \u0275\u0275listener("click", function PermissionsTestComponent_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.removePermission());
    });
    \u0275\u0275text(9, "Remove Permission [ admin ]");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(10, PermissionsTestComponent_ng_template_10_Template, 2, 0, "ng-template", 4)(11, PermissionsTestComponent_ng_template_11_Template, 2, 0, "ng-template", 5)(12, PermissionsTestComponent_ng_template_12_Template, 2, 0, "ng-template", 4)(13, PermissionsTestComponent_ng_template_13_Template, 2, 0, "ng-template", 6);
    \u0275\u0275listener("permissionsAuthorized", function PermissionsTestComponent_Template_ng_template_permissionsAuthorized_13_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.authorized());
    })("permissionsUnauthorized", function PermissionsTestComponent_Template_ng_template_permissionsUnauthorized_13_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.unAuthorized());
    });
    \u0275\u0275template(14, PermissionsTestComponent_ng_template_14_Template, 2, 0, "ng-template", 7)(15, PermissionsTestComponent_div_15_Template, 2, 0, "div", 8)(16, PermissionsTestComponent_div_16_Template, 2, 0, "div", 9)(17, PermissionsTestComponent_ng_template_17_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(19, PermissionsTestComponent_ng_template_19_Template, 2, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementStart(21, "p");
    \u0275\u0275text(22, " Compared permission: ");
    \u0275\u0275elementStart(23, "code");
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "json");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div")(27, "button", 3);
    \u0275\u0275listener("click", function PermissionsTestComponent_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.changeToAdmin());
    });
    \u0275\u0275text(28, "Change To Admin Permission");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "button", 3);
    \u0275\u0275listener("click", function PermissionsTestComponent_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.changeToAnotherPermission());
    });
    \u0275\u0275text(30, "Change To Awesome Permission");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "button", 3);
    \u0275\u0275listener("click", function PermissionsTestComponent_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.changeToGuest());
    });
    \u0275\u0275text(32, "Change To Guest Permission");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div");
    \u0275\u0275template(34, PermissionsTestComponent_button_34_Template, 2, 0, "button", 10)(35, PermissionsTestComponent_button_35_Template, 2, 0, "button", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "p");
    \u0275\u0275text(37, " Your current permissions: ");
    \u0275\u0275elementStart(38, "code");
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "json");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const a_r2 = \u0275\u0275reference(18);
    const b_r3 = \u0275\u0275reference(20);
    \u0275\u0275advance(10);
    \u0275\u0275property("ngxPermissionsOnly", \u0275\u0275pureFunction0(20, _c02));
    \u0275\u0275advance();
    \u0275\u0275property("ngxPermissionsOnly", \u0275\u0275pureFunction0(21, _c02))("ngxPermissionsExcept", "hhhhh");
    \u0275\u0275advance();
    \u0275\u0275property("ngxPermissionsOnly", \u0275\u0275pureFunction0(22, _c1));
    \u0275\u0275advance();
    \u0275\u0275property("ngxPermissionsExcept", \u0275\u0275pureFunction0(23, _c2));
    \u0275\u0275advance();
    \u0275\u0275property("ngxPermissionsExcept", \u0275\u0275pureFunction0(24, _c02));
    \u0275\u0275advance();
    \u0275\u0275property("ngxPermissionsOnly", \u0275\u0275pureFunction0(25, _c02))("ngxPermissionsOnlyElse", a_r2)("ngxPermissionsOnlyThen", b_r3);
    \u0275\u0275advance();
    \u0275\u0275property("ngxPermissionsExcept", \u0275\u0275pureFunction0(26, _c02))("ngxPermissionsExceptElse", a_r2)("ngxPermissionsExceptThen", b_r3);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 16, ctx.comparedPermission));
    \u0275\u0275advance(10);
    \u0275\u0275property("ngxPermissionsOnly", ctx.comparedPermission);
    \u0275\u0275advance();
    \u0275\u0275property("ngxPermissionsOnly", \u0275\u0275pureFunction0(27, _c3));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(40, 18, ctx.getPermissions()));
  }
}, dependencies: [MatCardModule, MatCard, MatCardContent, MtxAlertModule, MtxAlert, NgxPermissionsModule, NgxPermissionsDirective, PageHeaderComponent, JsonPipe], encapsulation: 2 });
var PermissionsTestComponent = _PermissionsTestComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PermissionsTestComponent, [{
    type: Component,
    args: [{ selector: "app-permissions-test", imports: [JsonPipe, MatCardModule, MtxAlertModule, NgxPermissionsModule, PageHeaderComponent], template: `<page-header />\r
\r
<mat-card>\r
  <mat-card-content>\r
    <mtx-alert type="danger">\u26A0\uFE0F The permissions check will delay 2s.</mtx-alert>\r
\r
    <p>\r
      <button (click)="addPermission()">Add Permission [ admin ]</button>\r
      <button (click)="removePermission()">Remove Permission [ admin ]</button>\r
    </p>\r
\r
    <ng-template permissions [ngxPermissionsOnly]="['admin']">\r
      <p class="bg-green-50 text-white">\r
        I should see it only admin\r
      </p>\r
    </ng-template>\r
\r
    <ng-template [ngxPermissionsOnly]="['admin']" [ngxPermissionsExcept]="'hhhhh'">\r
      <p class="bg-green-50 text-white">\r
        Usage on both only and except I should see it only admin\r
      </p>\r
    </ng-template>\r
\r
    <ng-template permissions [ngxPermissionsOnly]="['guest']">\r
      <p class="bg-purple-50 text-white">I will see it only guest</p>\r
    </ng-template>\r
\r
    <ng-template permissions [ngxPermissionsExcept]="['adminnnnn']"\r
                 (permissionsAuthorized)="authorized()"\r
                 (permissionsUnauthorized)="unAuthorized()">\r
      <p class="bg-orange-50 text-white">I will see it except adminnnnn</p>\r
    </ng-template>\r
\r
    <ng-template permissions [ngxPermissionsExcept]="['admin']">\r
      <p class="bg-azure-50 text-white">I should see it except admin</p>\r
    </ng-template>\r
\r
    <div *ngxPermissionsOnly="['admin']; else a; then b">\r
      Testing template\r
    </div>\r
\r
    <div *ngxPermissionsExcept="['admin']; else a; then b">\r
      Testing template\r
    </div>\r
\r
    <ng-template #a>\r
      <p class="bg-azure-30 text-light">else block</p>\r
    </ng-template>\r
    <ng-template #b>\r
      <p class="bg-azure-90 text-dark">then block</p>\r
    </ng-template>\r
\r
    <p>\r
      Compared permission: <code>{{comparedPermission | json}}</code>\r
    </p>\r
\r
    <div>\r
      <button (click)="changeToAdmin()">Change To Admin Permission</button>\r
\r
      <button (click)="changeToAnotherPermission()">Change To Awesome Permission</button>\r
\r
      <button (click)="changeToGuest()">Change To Guest Permission</button>\r
    </div>\r
\r
    <div>\r
      <button *ngxPermissionsOnly="comparedPermission">\r
        This should be visible to admin or superadmin\r
      </button>\r
\r
      <button *ngxPermissionsOnly="[]">WTF</button>\r
    </div>\r
\r
    <p>\r
      Your current permissions: <code>{{getPermissions() | json}}</code>\r
    </p>\r
\r
  </mat-card-content>\r
</mat-card>\r
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PermissionsTestComponent, { className: "PermissionsTestComponent", filePath: "src/app/routes/permissions/test/test.component.ts", lineNumber: 15 });
})();

// src/app/routes/permissions/permissions.routes.ts
var routes = [
  { path: "role-switching", component: PermissionsRoleSwitchingComponent },
  {
    path: "route-guard",
    component: PermissionsRouteGuardComponent,
    canActivate: [ngxPermissionsGuard],
    data: {
      permissions: {
        except: "GUEST",
        redirectTo: "/dashboard"
      }
    }
  },
  {
    path: "test",
    component: PermissionsTestComponent,
    canActivate: [ngxPermissionsGuard],
    data: {
      permissions: {
        only: "ADMIN",
        redirectTo: "/dashboard"
      }
    }
  }
];
export {
  routes
};
//# sourceMappingURL=chunk-DBFRL43D.js.map
