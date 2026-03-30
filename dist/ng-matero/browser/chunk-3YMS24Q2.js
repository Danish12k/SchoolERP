import {
  MatListItem,
  MatListItemIcon,
  MatListModule,
  MatNavList,
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
  MatInput,
  MatInputModule
} from "./chunk-A73OTLOU.js";
import "./chunk-V5CFSWHT.js";
import {
  AuthService,
  PageHeaderComponent,
  Router,
  RouterLink,
  RouterOutlet
} from "./chunk-NJPKBYXE.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  MatButton,
  MatButtonModule,
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatIcon,
  MatIconModule,
  MatLabel,
  MatOption,
  MatOptionModule,
  MatSelect,
  MatSelectModule,
  MatSuffix,
  NgControlStatus,
  NgControlStatusGroup,
  NumberValueAccessor,
  ReactiveFormsModule,
  RequiredValidator,
  TranslateModule,
  TranslatePipe,
  Validators,
  ɵNgNoValidate
} from "./chunk-VC5UOWO3.js";
import "./chunk-R3YVZPGI.js";
import {
  Component,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinterpolate,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵreference,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-KH435EP6.js";

// src/app/routes/profile/layout/layout.component.ts
var _ProfileLayoutComponent = class _ProfileLayoutComponent {
  constructor() {
    this.auth = inject(AuthService);
    this.router = inject(Router);
  }
  ngOnInit() {
    this.auth.user().subscribe((user) => this.user = user);
  }
  logout() {
    this.auth.logout().subscribe(() => {
      this.router.navigateByUrl("/auth/login");
    });
  }
};
_ProfileLayoutComponent.\u0275fac = function ProfileLayoutComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ProfileLayoutComponent)();
};
_ProfileLayoutComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProfileLayoutComponent, selectors: [["app-profile-layout"]], decls: 37, vars: 15, consts: [[1, "bg-dark", "text-light", 3, "title"], [1, "row"], [1, "col-sm-4", "col-md-4", "col-lg-3"], [1, "text-center"], ["alt", "", "width", "80", 1, "m-b-8", "r-full", 3, "src"], [1, "m-t-0", "m-b-8", "f-w-400"], [1, "m-t-0", "m-b-8"], [1, "m-t-0", "text-grey-500"], ["mat-flat-button", "", "href", "https://github.com/nzbin", "target", "_blank"], ["mat-flat-button", "", "color", "warn", 1, "m-l-8"], [1, "m-t-16", "m-b-8"], ["mat-list-item", "", "routerLink", "/profile/overview"], ["matListItemIcon", ""], ["mat-list-item", "", "routerLink", "/profile/settings"], ["mat-list-item", "", "tabindex", "0", 3, "click", "keydown.enter"], [1, "col-sm-8", "col-md-8", "col-lg-9"]], template: function ProfileLayoutComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "page-header", 0);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "div", 1)(3, "div", 2)(4, "mat-card")(5, "mat-card-content")(6, "div", 3);
    \u0275\u0275element(7, "img", 4);
    \u0275\u0275elementStart(8, "h2", 5);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 6);
    \u0275\u0275text(11, "FE Developer, UE designer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 7);
    \u0275\u0275text(13, "I like reading, writing and drawing.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "a", 8);
    \u0275\u0275text(15, "Follow Me");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 9);
    \u0275\u0275text(17, "Contact Me");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(18, "mat-divider", 10);
    \u0275\u0275elementStart(19, "mat-nav-list")(20, "a", 11)(21, "mat-icon", 12);
    \u0275\u0275text(22, "account_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "a", 13)(26, "mat-icon", 12);
    \u0275\u0275text(27, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "a", 14);
    \u0275\u0275listener("click", function ProfileLayoutComponent_Template_a_click_30_listener() {
      return ctx.logout();
    })("keydown.enter", function ProfileLayoutComponent_Template_a_keydown_enter_30_listener() {
      return ctx.logout();
    });
    \u0275\u0275elementStart(31, "mat-icon", 12);
    \u0275\u0275text(32, "exit_to_app");
    \u0275\u0275elementEnd();
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(35, "div", 15);
    \u0275\u0275element(36, "router-outlet");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("title", \u0275\u0275interpolate(\u0275\u0275pipeBind1(1, 7, "profile")));
    \u0275\u0275advance(7);
    \u0275\u0275property("src", ctx.user.avatar, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.user.name);
    \u0275\u0275advance(14);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(24, 9, "profile"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(29, 11, "edit_profile"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(34, 13, "logout"), " ");
  }
}, dependencies: [
  RouterLink,
  RouterOutlet,
  MatButtonModule,
  MatButton,
  MatCardModule,
  MatCard,
  MatCardContent,
  MatDividerModule,
  MatDivider,
  MatListModule,
  MatNavList,
  MatListItem,
  MatListItemIcon,
  MatIconModule,
  MatIcon,
  PageHeaderComponent,
  TranslateModule,
  TranslatePipe
], encapsulation: 2 });
var ProfileLayoutComponent = _ProfileLayoutComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProfileLayoutComponent, [{
    type: Component,
    args: [{ selector: "app-profile-layout", imports: [
      RouterLink,
      RouterOutlet,
      MatButtonModule,
      MatCardModule,
      MatDividerModule,
      MatListModule,
      MatIconModule,
      PageHeaderComponent,
      TranslateModule
    ], template: `<page-header class="bg-dark text-light" title="{{ 'profile' | translate }}" />\r
\r
<div class="row">\r
  <div class="col-sm-4 col-md-4 col-lg-3">\r
    <mat-card>\r
      <mat-card-content>\r
        <div class="text-center">\r
          <img class="m-b-8 r-full" [src]="user.avatar" alt="" width="80">\r
          <h2 class="m-t-0 m-b-8 f-w-400">{{ user.name }}</h2>\r
          <p class="m-t-0 m-b-8">FE Developer, UE designer</p>\r
          <p class="m-t-0 text-grey-500">I like reading, writing and drawing.</p>\r
\r
          <a mat-flat-button href="https://github.com/nzbin" target="_blank">Follow Me</a>\r
          <button mat-flat-button color="warn" class="m-l-8">Contact Me</button>\r
        </div>\r
\r
        <mat-divider class="m-t-16 m-b-8" />\r
\r
        <mat-nav-list>\r
          <a mat-list-item routerLink="/profile/overview">\r
            <mat-icon matListItemIcon>account_circle</mat-icon> {{ 'profile' | translate }}\r
          </a>\r
          <a mat-list-item routerLink="/profile/settings">\r
            <mat-icon matListItemIcon>edit</mat-icon> {{ 'edit_profile' | translate }}\r
          </a>\r
          <a mat-list-item (click)="logout()" (keydown.enter)="logout()" tabindex="0">\r
            <mat-icon matListItemIcon>exit_to_app</mat-icon> {{ 'logout' | translate }}\r
          </a>\r
        </mat-nav-list>\r
      </mat-card-content>\r
    </mat-card>\r
  </div>\r
  <div class="col-sm-8 col-md-8 col-lg-9">\r
    <router-outlet />\r
  </div>\r
</div>\r
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProfileLayoutComponent, { className: "ProfileLayoutComponent", filePath: "src/app/routes/profile/layout/layout.component.ts", lineNumber: 29 });
})();

// src/app/routes/profile/overview/overview.component.ts
var _ProfileOverviewComponent = class _ProfileOverviewComponent {
};
_ProfileOverviewComponent.\u0275fac = function ProfileOverviewComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ProfileOverviewComponent)();
};
_ProfileOverviewComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProfileOverviewComponent, selectors: [["app-profile-overview"]], decls: 35, vars: 0, consts: [["label", "First"], [1, "m-16"], ["src", "images/pixabay/2.jpg", "alt", "", 1, "d-block", "w-full"], ["label", "Second"], ["src", "images/pixabay/8.jpg", "alt", "", 1, "d-block", "w-full"], ["label", "Third"], ["src", "images/pixabay/16.jpg", "alt", "", 1, "d-block", "w-full"]], template: function ProfileOverviewComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-card")(1, "mat-tab-group")(2, "mat-tab", 0)(3, "div", 1);
    \u0275\u0275element(4, "img", 2);
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6, "Aenean viverra arcu nec pellentesque ultrices. In erat purus, adipiscing nec lacinia at, ornare ac eros. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8, " Nullam at risus metus. Quisque nisl purus, pulvinar ut mauris vel, elementum suscipit eros. Praesent ornare ante massa, egestas pellentesque orci convallis ut. Curabitur consequat convallis est, id luctus mauris lacinia vel. Nullam tristique lobortis mauris, ultricies fermentum lacus bibendum id. Proin non ante tortor. Suspendisse pulvinar ornare tellus nec pulvinar. Nam pellentesque accumsan mi, non pellentesque sem convallis sed. Quisque rutrum erat id auctor gravida.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p");
    \u0275\u0275text(10, " Nullam at risus metus. Quisque nisl purus, pulvinar ut mauris vel, elementum suscipit eros. Praesent ornare ante massa, egestas pellentesque orci convallis ut. Curabitur consequat convallis est, id luctus mauris lacinia vel. Nullam tristique lobortis mauris, ultricies fermentum lacus bibendum id. Proin non ante tortor. Suspendisse pulvinar ornare tellus nec pulvinar. Nam pellentesque accumsan mi, non pellentesque sem convallis sed. Quisque rutrum erat id auctor gravida.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p");
    \u0275\u0275text(12, " Nullam at risus metus. Quisque nisl purus, pulvinar ut mauris vel, elementum suscipit eros. Praesent ornare ante massa, egestas pellentesque orci convallis ut. Curabitur consequat convallis est, id luctus mauris lacinia vel. Nullam tristique lobortis mauris, ultricies fermentum lacus bibendum id. Proin non ante tortor. Suspendisse pulvinar ornare tellus nec pulvinar. Nam pellentesque accumsan mi, non pellentesque sem convallis sed. Quisque rutrum erat id auctor gravida.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "mat-tab", 3)(14, "div", 1);
    \u0275\u0275element(15, "img", 4);
    \u0275\u0275elementStart(16, "h3");
    \u0275\u0275text(17, "Vestibulum vitae diam nec odio dapibus placerat. Ut ut lorem justo.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "p");
    \u0275\u0275text(19, " Fusce bibendum augue nec fermentum tempus. Sed laoreet dictum tempus. Aenean ac sem quis nulla malesuada volutpat. Nunc vitae urna pulvinar velit commodo cursus. Nullam eu felis quis diam adipiscing hendrerit vel ac turpis. Nam mattis fringilla euismod. Donec eu ipsum sit amet mauris iaculis aliquet. Quisque sit amet feugiat odio. Cras convallis lorem at libero lobortis, placerat lobortis sapien lacinia. Duis sit amet elit bibendum sapien dignissim bibendum.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "p");
    \u0275\u0275text(21, " Fusce bibendum augue nec fermentum tempus. Sed laoreet dictum tempus. Aenean ac sem quis nulla malesuada volutpat. Nunc vitae urna pulvinar velit commodo cursus. Nullam eu felis quis diam adipiscing hendrerit vel ac turpis. Nam mattis fringilla euismod. Donec eu ipsum sit amet mauris iaculis aliquet. Quisque sit amet feugiat odio. Cras convallis lorem at libero lobortis, placerat lobortis sapien lacinia. Duis sit amet elit bibendum sapien dignissim bibendum.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "p");
    \u0275\u0275text(23, " Fusce bibendum augue nec fermentum tempus. Sed laoreet dictum tempus. Aenean ac sem quis nulla malesuada volutpat. Nunc vitae urna pulvinar velit commodo cursus. Nullam eu felis quis diam adipiscing hendrerit vel ac turpis. Nam mattis fringilla euismod. Donec eu ipsum sit amet mauris iaculis aliquet. Quisque sit amet feugiat odio. Cras convallis lorem at libero lobortis, placerat lobortis sapien lacinia. Duis sit amet elit bibendum sapien dignissim bibendum.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "mat-tab", 5)(25, "div", 1);
    \u0275\u0275element(26, "img", 6);
    \u0275\u0275elementStart(27, "h3");
    \u0275\u0275text(28, "Maecenas eget turpis luctus, scelerisque arcu id, iaculis urna. Interdum et malesuada fames ac ante ipsum primis in faucibus.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "p");
    \u0275\u0275text(30, " Morbi placerat est nec pharetra placerat. Ut laoreet nunc accumsan orci aliquam accumsan. Maecenas volutpat dolor vitae sapien ultricies fringilla. Suspendisse vitae orci sed nibh ultrices tristique. Aenean in ante eget urna semper imperdiet. Pellentesque sagittis a nulla at scelerisque. Nam augue nulla, accumsan quis nisi a, facilisis eleifend nulla. Praesent aliquet odio non imperdiet fringilla.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "p");
    \u0275\u0275text(32, " Morbi placerat est nec pharetra placerat. Ut laoreet nunc accumsan orci aliquam accumsan. Maecenas volutpat dolor vitae sapien ultricies fringilla. Suspendisse vitae orci sed nibh ultrices tristique. Aenean in ante eget urna semper imperdiet. Pellentesque sagittis a nulla at scelerisque. Nam augue nulla, accumsan quis nisi a, facilisis eleifend nulla. Praesent aliquet odio non imperdiet fringilla.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "p");
    \u0275\u0275text(34, " Morbi placerat est nec pharetra placerat. Ut laoreet nunc accumsan orci aliquam accumsan. Maecenas volutpat dolor vitae sapien ultricies fringilla. Suspendisse vitae orci sed nibh ultrices tristique. Aenean in ante eget urna semper imperdiet. Pellentesque sagittis a nulla at scelerisque. Nam augue nulla, accumsan quis nisi a, facilisis eleifend nulla. Praesent aliquet odio non imperdiet fringilla.");
    \u0275\u0275elementEnd()()()()();
  }
}, dependencies: [MatCardModule, MatCard, MatTabsModule, MatTab, MatTabGroup], encapsulation: 2 });
var ProfileOverviewComponent = _ProfileOverviewComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProfileOverviewComponent, [{
    type: Component,
    args: [{ selector: "app-profile-overview", imports: [MatCardModule, MatTabsModule], template: '<mat-card>\r\n  <mat-tab-group>\r\n    <mat-tab label="First">\r\n      <div class="m-16">\r\n        <img class="d-block w-full" src="images/pixabay/2.jpg" alt="">\r\n        <h3>Aenean viverra arcu nec pellentesque ultrices. In erat purus, adipiscing nec lacinia at,\r\n          ornare ac eros.\r\n        </h3>\r\n        <p>\r\n          Nullam at risus metus. Quisque nisl purus, pulvinar ut mauris vel, elementum suscipit\r\n          eros. Praesent\r\n          ornare ante massa, egestas pellentesque orci convallis ut. Curabitur consequat convallis\r\n          est, id luctus\r\n          mauris lacinia vel. Nullam tristique lobortis mauris, ultricies fermentum lacus bibendum\r\n          id. Proin non\r\n          ante tortor. Suspendisse pulvinar ornare tellus nec pulvinar. Nam pellentesque accumsan\r\n          mi, non\r\n          pellentesque sem convallis sed. Quisque rutrum erat id auctor gravida.</p>\r\n        <p>\r\n          Nullam at risus metus. Quisque nisl purus, pulvinar ut mauris vel, elementum suscipit\r\n          eros. Praesent\r\n          ornare ante massa, egestas pellentesque orci convallis ut. Curabitur consequat convallis\r\n          est, id luctus\r\n          mauris lacinia vel. Nullam tristique lobortis mauris, ultricies fermentum lacus bibendum\r\n          id. Proin non\r\n          ante tortor. Suspendisse pulvinar ornare tellus nec pulvinar. Nam pellentesque accumsan\r\n          mi, non\r\n          pellentesque sem convallis sed. Quisque rutrum erat id auctor gravida.</p>\r\n        <p>\r\n          Nullam at risus metus. Quisque nisl purus, pulvinar ut mauris vel, elementum suscipit\r\n          eros. Praesent\r\n          ornare ante massa, egestas pellentesque orci convallis ut. Curabitur consequat convallis\r\n          est, id luctus\r\n          mauris lacinia vel. Nullam tristique lobortis mauris, ultricies fermentum lacus bibendum\r\n          id. Proin non\r\n          ante tortor. Suspendisse pulvinar ornare tellus nec pulvinar. Nam pellentesque accumsan\r\n          mi, non\r\n          pellentesque sem convallis sed. Quisque rutrum erat id auctor gravida.</p>\r\n      </div>\r\n    </mat-tab>\r\n    <mat-tab label="Second">\r\n      <div class="m-16">\r\n        <img class="d-block w-full" src="images/pixabay/8.jpg" alt="">\r\n        <h3>Vestibulum vitae diam nec odio dapibus placerat. Ut ut lorem justo.</h3>\r\n        <p>\r\n          Fusce bibendum augue nec fermentum tempus. Sed laoreet dictum tempus. Aenean ac sem quis\r\n          nulla malesuada\r\n          volutpat. Nunc vitae urna pulvinar velit commodo cursus. Nullam eu felis quis diam\r\n          adipiscing hendrerit\r\n          vel ac turpis. Nam mattis fringilla euismod. Donec eu ipsum sit amet mauris iaculis\r\n          aliquet. Quisque sit\r\n          amet feugiat odio. Cras convallis lorem at libero lobortis, placerat lobortis sapien\r\n          lacinia. Duis sit\r\n          amet elit bibendum sapien dignissim bibendum.</p>\r\n        <p>\r\n          Fusce bibendum augue nec fermentum tempus. Sed laoreet dictum tempus. Aenean ac sem quis\r\n          nulla malesuada\r\n          volutpat. Nunc vitae urna pulvinar velit commodo cursus. Nullam eu felis quis diam\r\n          adipiscing hendrerit\r\n          vel ac turpis. Nam mattis fringilla euismod. Donec eu ipsum sit amet mauris iaculis\r\n          aliquet. Quisque sit\r\n          amet feugiat odio. Cras convallis lorem at libero lobortis, placerat lobortis sapien\r\n          lacinia. Duis sit\r\n          amet elit bibendum sapien dignissim bibendum.</p>\r\n        <p>\r\n          Fusce bibendum augue nec fermentum tempus. Sed laoreet dictum tempus. Aenean ac sem quis\r\n          nulla malesuada\r\n          volutpat. Nunc vitae urna pulvinar velit commodo cursus. Nullam eu felis quis diam\r\n          adipiscing hendrerit\r\n          vel ac turpis. Nam mattis fringilla euismod. Donec eu ipsum sit amet mauris iaculis\r\n          aliquet. Quisque sit\r\n          amet feugiat odio. Cras convallis lorem at libero lobortis, placerat lobortis sapien\r\n          lacinia. Duis sit\r\n          amet elit bibendum sapien dignissim bibendum.</p>\r\n\r\n      </div>\r\n    </mat-tab>\r\n    <mat-tab label="Third">\r\n      <div class="m-16">\r\n        <img class="d-block w-full" src="images/pixabay/16.jpg" alt="">\r\n        <h3>Maecenas eget turpis luctus, scelerisque arcu id, iaculis urna. Interdum et malesuada\r\n          fames ac ante\r\n          ipsum primis in faucibus.</h3>\r\n        <p>\r\n          Morbi placerat est nec pharetra placerat. Ut laoreet nunc accumsan orci aliquam accumsan.\r\n          Maecenas\r\n          volutpat dolor vitae sapien ultricies fringilla. Suspendisse vitae orci sed nibh ultrices\r\n          tristique.\r\n          Aenean in ante eget urna semper imperdiet. Pellentesque sagittis a nulla at scelerisque.\r\n          Nam augue nulla,\r\n          accumsan quis nisi a, facilisis eleifend nulla. Praesent aliquet odio non imperdiet\r\n          fringilla.</p>\r\n        <p>\r\n          Morbi placerat est nec pharetra placerat. Ut laoreet nunc accumsan orci aliquam accumsan.\r\n          Maecenas\r\n          volutpat dolor vitae sapien ultricies fringilla. Suspendisse vitae orci sed nibh ultrices\r\n          tristique.\r\n          Aenean in ante eget urna semper imperdiet. Pellentesque sagittis a nulla at scelerisque.\r\n          Nam augue nulla,\r\n          accumsan quis nisi a, facilisis eleifend nulla. Praesent aliquet odio non imperdiet\r\n          fringilla.</p>\r\n        <p>\r\n          Morbi placerat est nec pharetra placerat. Ut laoreet nunc accumsan orci aliquam accumsan.\r\n          Maecenas\r\n          volutpat dolor vitae sapien ultricies fringilla. Suspendisse vitae orci sed nibh ultrices\r\n          tristique.\r\n          Aenean in ante eget urna semper imperdiet. Pellentesque sagittis a nulla at scelerisque.\r\n          Nam augue nulla,\r\n          accumsan quis nisi a, facilisis eleifend nulla. Praesent aliquet odio non imperdiet\r\n          fringilla.</p>\r\n\r\n      </div>\r\n    </mat-tab>\r\n  </mat-tab-group>\r\n</mat-card>\r\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProfileOverviewComponent, { className: "ProfileOverviewComponent", filePath: "src/app/routes/profile/overview/overview.component.ts", lineNumber: 11 });
})();

// src/app/routes/profile/settings/settings.component.ts
function ProfileSettingsComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Please enter username");
    \u0275\u0275elementEnd();
  }
}
function ProfileSettingsComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.getErrorMessage(ctx_r0.reactiveForm));
  }
}
function ProfileSettingsComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Please select gender");
    \u0275\u0275elementEnd();
  }
}
function ProfileSettingsComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Please enter city");
    \u0275\u0275elementEnd();
  }
}
function ProfileSettingsComponent_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Please enter address");
    \u0275\u0275elementEnd();
  }
}
function ProfileSettingsComponent_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Please enter company");
    \u0275\u0275elementEnd();
  }
}
function ProfileSettingsComponent_Conditional_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Please enter mobile");
    \u0275\u0275elementEnd();
  }
}
function ProfileSettingsComponent_Conditional_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Please enter tele");
    \u0275\u0275elementEnd();
  }
}
function ProfileSettingsComponent_Conditional_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Please enter website");
    \u0275\u0275elementEnd();
  }
}
function ProfileSettingsComponent_Conditional_77_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Please enter website");
    \u0275\u0275elementEnd();
  }
}
var _ProfileSettingsComponent = class _ProfileSettingsComponent {
  constructor() {
    this.fb = inject(FormBuilder);
    this.reactiveForm = this.fb.nonNullable.group({
      username: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      gender: ["", [Validators.required]],
      city: ["", [Validators.required]],
      address: ["", [Validators.required]],
      company: ["", [Validators.required]],
      mobile: ["", [Validators.required]],
      tele: ["", [Validators.required]],
      website: ["", [Validators.required]],
      date: ["", [Validators.required]]
    });
  }
  getErrorMessage(form) {
    return form.get("email")?.hasError("required") ? "You must enter a value" : form.get("email")?.hasError("email") ? "Not a valid email" : "";
  }
};
_ProfileSettingsComponent.\u0275fac = function ProfileSettingsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ProfileSettingsComponent)();
};
_ProfileSettingsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProfileSettingsComponent, selectors: [["app-profile-settings"]], decls: 81, vars: 13, consts: [["picker2", ""], [1, "m-b-16"], [1, "form-field-full", 3, "formGroup"], [1, "row"], [1, "col-sm-6", "col-xl-4"], ["matInput", "", "placeholder", "Simple placeholder", "formControlName", "username", "required", ""], ["matInput", "", "placeholder", "Simple placeholder", "formControlName", "email", "required", ""], ["formControlName", "gender", "required", ""], ["value", "1"], ["value", "2"], ["matInput", "", "placeholder", "Simple placeholder", "formControlName", "city", "required", ""], ["matInput", "", "placeholder", "Simple placeholder", "formControlName", "address", "required", ""], ["matInput", "", "placeholder", "Simple placeholder", "formControlName", "company", "required", ""], ["matInput", "", "placeholder", "Simple placeholder", "type", "number", "formControlName", "mobile", "required", ""], ["matSuffix", ""], ["matInput", "", "placeholder", "Simple placeholder", "type", "number", "formControlName", "tele", "required", ""], ["matInput", "", "placeholder", "Simple placeholder", "formControlName", "website", "required", ""], ["matInput", "", "placeholder", "Choose a date", "formControlName", "date", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], [1, "d-flex", "justify-content-end"], ["mat-flat-button", ""]], template: function ProfileSettingsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-card")(1, "mat-card-header", 1)(2, "mat-card-title");
    \u0275\u0275text(3, "Edit Profile");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "mat-card-content")(5, "form", 2)(6, "div", 3)(7, "div", 4)(8, "mat-form-field")(9, "mat-label");
    \u0275\u0275text(10, "Username");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "input", 5);
    \u0275\u0275conditionalCreate(12, ProfileSettingsComponent_Conditional_12_Template, 2, 0, "mat-error");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 4)(14, "mat-form-field")(15, "mat-label");
    \u0275\u0275text(16, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "input", 6);
    \u0275\u0275conditionalCreate(18, ProfileSettingsComponent_Conditional_18_Template, 2, 1, "mat-error");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 4)(20, "mat-form-field")(21, "mat-label");
    \u0275\u0275text(22, "Gender");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "mat-select", 7)(24, "mat-option");
    \u0275\u0275text(25, "-- None --");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "mat-option", 8);
    \u0275\u0275text(27, "male");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "mat-option", 9);
    \u0275\u0275text(29, "female");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(30, ProfileSettingsComponent_Conditional_30_Template, 2, 0, "mat-error");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 4)(32, "mat-form-field")(33, "mat-label");
    \u0275\u0275text(34, "City");
    \u0275\u0275elementEnd();
    \u0275\u0275element(35, "input", 10);
    \u0275\u0275conditionalCreate(36, ProfileSettingsComponent_Conditional_36_Template, 2, 0, "mat-error");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 4)(38, "mat-form-field")(39, "mat-label");
    \u0275\u0275text(40, "Address");
    \u0275\u0275elementEnd();
    \u0275\u0275element(41, "input", 11);
    \u0275\u0275conditionalCreate(42, ProfileSettingsComponent_Conditional_42_Template, 2, 0, "mat-error");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 4)(44, "mat-form-field")(45, "mat-label");
    \u0275\u0275text(46, "Company");
    \u0275\u0275elementEnd();
    \u0275\u0275element(47, "input", 12);
    \u0275\u0275conditionalCreate(48, ProfileSettingsComponent_Conditional_48_Template, 2, 0, "mat-error");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "div", 4)(50, "mat-form-field")(51, "mat-label");
    \u0275\u0275text(52, "Mobile");
    \u0275\u0275elementEnd();
    \u0275\u0275element(53, "input", 13);
    \u0275\u0275elementStart(54, "mat-icon", 14);
    \u0275\u0275text(55, "smartphone");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(56, ProfileSettingsComponent_Conditional_56_Template, 2, 0, "mat-error");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(57, "div", 4)(58, "mat-form-field")(59, "mat-label");
    \u0275\u0275text(60, "Tele");
    \u0275\u0275elementEnd();
    \u0275\u0275element(61, "input", 15);
    \u0275\u0275elementStart(62, "mat-icon", 14);
    \u0275\u0275text(63, "phone");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(64, ProfileSettingsComponent_Conditional_64_Template, 2, 0, "mat-error");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(65, "div", 4)(66, "mat-form-field")(67, "mat-label");
    \u0275\u0275text(68, "Website");
    \u0275\u0275elementEnd();
    \u0275\u0275element(69, "input", 16);
    \u0275\u0275conditionalCreate(70, ProfileSettingsComponent_Conditional_70_Template, 2, 0, "mat-error");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(71, "div", 4)(72, "mat-form-field");
    \u0275\u0275element(73, "input", 17)(74, "mat-datepicker-toggle", 18)(75, "mat-datepicker", null, 0);
    \u0275\u0275conditionalCreate(77, ProfileSettingsComponent_Conditional_77_Template, 2, 0, "mat-error");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(78, "div", 19)(79, "button", 20);
    \u0275\u0275text(80, "Save");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    let tmp_9_0;
    let tmp_10_0;
    let tmp_13_0;
    const picker2_r2 = \u0275\u0275reference(76);
    \u0275\u0275advance(5);
    \u0275\u0275property("formGroup", ctx.reactiveForm);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(((tmp_2_0 = ctx.reactiveForm.get("username")) == null ? null : tmp_2_0.invalid) ? 12 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(((tmp_3_0 = ctx.reactiveForm.get("email")) == null ? null : tmp_3_0.invalid) ? 18 : -1);
    \u0275\u0275advance(12);
    \u0275\u0275conditional(((tmp_4_0 = ctx.reactiveForm.get("gender")) == null ? null : tmp_4_0.invalid) ? 30 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(((tmp_5_0 = ctx.reactiveForm.get("city")) == null ? null : tmp_5_0.invalid) ? 36 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(((tmp_6_0 = ctx.reactiveForm.get("address")) == null ? null : tmp_6_0.invalid) ? 42 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(((tmp_7_0 = ctx.reactiveForm.get("company")) == null ? null : tmp_7_0.invalid) ? 48 : -1);
    \u0275\u0275advance(8);
    \u0275\u0275conditional(((tmp_8_0 = ctx.reactiveForm.get("mobile")) == null ? null : tmp_8_0.invalid) ? 56 : -1);
    \u0275\u0275advance(8);
    \u0275\u0275conditional(((tmp_9_0 = ctx.reactiveForm.get("tele")) == null ? null : tmp_9_0.invalid) ? 64 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(((tmp_10_0 = ctx.reactiveForm.get("website")) == null ? null : tmp_10_0.invalid) ? 70 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275property("matDatepicker", picker2_r2);
    \u0275\u0275advance();
    \u0275\u0275property("for", picker2_r2);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(((tmp_13_0 = ctx.reactiveForm.get("date")) == null ? null : tmp_13_0.invalid) ? 77 : -1);
  }
}, dependencies: [FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, ReactiveFormsModule, FormGroupDirective, FormControlName, MatButtonModule, MatButton, MatCardModule, MatCard, MatCardContent, MatCardHeader, MatCardTitle, MatDatepickerModule, MatDatepicker, MatDatepickerInput, MatDatepickerToggle, MatFormFieldModule, MatFormField, MatLabel, MatError, MatSuffix, MatInputModule, MatInput, MatIconModule, MatIcon, MatOptionModule, MatOption, MatSelectModule, MatSelect], encapsulation: 2 });
var ProfileSettingsComponent = _ProfileSettingsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProfileSettingsComponent, [{
    type: Component,
    args: [{ selector: "app-profile-settings", imports: [
      FormsModule,
      ReactiveFormsModule,
      MatButtonModule,
      MatCardModule,
      MatDatepickerModule,
      MatFormFieldModule,
      MatInputModule,
      MatIconModule,
      MatOptionModule,
      MatSelectModule
    ], template: `<mat-card>\r
  <mat-card-header class="m-b-16">\r
    <mat-card-title>Edit Profile</mat-card-title>\r
  </mat-card-header>\r
\r
  <mat-card-content>\r
    <form [formGroup]="reactiveForm" class="form-field-full">\r
      <div class="row">\r
        <div class="col-sm-6 col-xl-4">\r
          <mat-form-field>\r
            <mat-label>Username</mat-label>\r
            <input matInput placeholder="Simple placeholder" formControlName="username" required>\r
            @if (reactiveForm.get('username')?.invalid) {\r
              <mat-error>Please enter username</mat-error>\r
            }\r
          </mat-form-field>\r
        </div>\r
\r
        <div class="col-sm-6 col-xl-4">\r
          <mat-form-field>\r
            <mat-label>Email</mat-label>\r
            <input matInput placeholder="Simple placeholder" formControlName="email" required>\r
            @if (reactiveForm.get('email')?.invalid) {\r
              <mat-error>{{getErrorMessage(reactiveForm)}}</mat-error>\r
            }\r
          </mat-form-field>\r
        </div>\r
\r
        <div class="col-sm-6 col-xl-4">\r
          <mat-form-field>\r
            <mat-label>Gender</mat-label>\r
            <mat-select formControlName="gender" required>\r
              <mat-option>-- None --</mat-option>\r
              <mat-option value="1">male</mat-option>\r
              <mat-option value="2">female</mat-option>\r
            </mat-select>\r
            @if (reactiveForm.get('gender')?.invalid) {\r
              <mat-error>Please select gender</mat-error>\r
            }\r
          </mat-form-field>\r
        </div>\r
\r
        <div class="col-sm-6 col-xl-4">\r
          <mat-form-field>\r
            <mat-label>City</mat-label>\r
            <input matInput placeholder="Simple placeholder" formControlName="city" required>\r
            @if (reactiveForm.get('city')?.invalid) {\r
              <mat-error>Please enter city</mat-error>\r
            }\r
          </mat-form-field>\r
        </div>\r
\r
        <div class="col-sm-6 col-xl-4">\r
          <mat-form-field>\r
            <mat-label>Address</mat-label>\r
            <input matInput placeholder="Simple placeholder" formControlName="address" required>\r
            @if (reactiveForm.get('address')?.invalid) {\r
              <mat-error>Please enter address</mat-error>\r
            }\r
          </mat-form-field>\r
        </div>\r
\r
        <div class="col-sm-6 col-xl-4">\r
          <mat-form-field>\r
            <mat-label>Company</mat-label>\r
            <input matInput placeholder="Simple placeholder" formControlName="company" required>\r
            @if (reactiveForm.get('company')?.invalid) {\r
              <mat-error>Please enter company</mat-error>\r
            }\r
          </mat-form-field>\r
        </div>\r
\r
        <div class="col-sm-6 col-xl-4">\r
          <mat-form-field>\r
            <mat-label>Mobile</mat-label>\r
            <input matInput placeholder="Simple placeholder" type="number" formControlName="mobile"\r
              required>\r
            <mat-icon matSuffix>smartphone</mat-icon>\r
            @if (reactiveForm.get('mobile')?.invalid) {\r
              <mat-error>Please enter mobile</mat-error>\r
            }\r
          </mat-form-field>\r
        </div>\r
\r
        <div class="col-sm-6 col-xl-4">\r
          <mat-form-field>\r
            <mat-label>Tele</mat-label>\r
            <input matInput placeholder="Simple placeholder" type="number" formControlName="tele"\r
              required>\r
            <mat-icon matSuffix>phone</mat-icon>\r
            @if (reactiveForm.get('tele')?.invalid) {\r
              <mat-error>Please enter tele</mat-error>\r
            }\r
          </mat-form-field>\r
        </div>\r
\r
        <div class="col-sm-6 col-xl-4">\r
          <mat-form-field>\r
            <mat-label>Website</mat-label>\r
            <input matInput placeholder="Simple placeholder" formControlName="website" required>\r
            @if (reactiveForm.get('website')?.invalid) {\r
              <mat-error>Please enter website</mat-error>\r
            }\r
          </mat-form-field>\r
        </div>\r
\r
        <div class="col-sm-6 col-xl-4">\r
          <mat-form-field>\r
            <input matInput [matDatepicker]="picker2" placeholder="Choose a date"\r
              formControlName="date">\r
            <mat-datepicker-toggle matSuffix [for]="picker2" />\r
            <mat-datepicker #picker2 />\r
            @if (reactiveForm.get('date')?.invalid) {\r
              <mat-error>Please enter website</mat-error>\r
            }\r
          </mat-form-field>\r
        </div>\r
      </div>\r
\r
      <div class="d-flex justify-content-end">\r
        <button mat-flat-button>Save</button>\r
      </div>\r
    </form>\r
  </mat-card-content>\r
</mat-card>\r
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProfileSettingsComponent, { className: "ProfileSettingsComponent", filePath: "src/app/routes/profile/settings/settings.component.ts", lineNumber: 37 });
})();

// src/app/routes/profile/profile.routes.ts
var routes = [
  {
    path: "",
    component: ProfileLayoutComponent,
    children: [
      { path: "", redirectTo: "overview", pathMatch: "full" },
      { path: "overview", component: ProfileOverviewComponent },
      { path: "settings", component: ProfileSettingsComponent }
    ]
  }
];
export {
  routes
};
//# sourceMappingURL=chunk-3YMS24Q2.js.map
