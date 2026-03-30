import {
  AbstractControl,
  AsyncPipe,
  CommonModule,
  DomSanitizer,
  ErrorStateMatcher,
  FocusMonitor,
  FormArray,
  FormControl,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  MAT_FORM_FIELD,
  MatFormFieldControl,
  NG_VALUE_ACCESSOR,
  NgControl,
  NgControlStatus,
  NgForOf,
  NgForm,
  NgModel,
  NgTemplateOutlet,
  ReactiveFormsModule,
  Validators,
  _ErrorStateTracker
} from "./chunk-VC5UOWO3.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ComponentRef$1,
  ContentChild,
  ContentChildren,
  DOCUMENT,
  DestroyRef,
  Directive,
  ElementRef,
  EventEmitter,
  HostAttributeToken,
  HostListener,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NgModule,
  NgZone,
  NoopNgZone,
  Observable,
  Optional,
  Output,
  Renderer2,
  ReplaySubject,
  RuntimeError,
  Subject,
  Subscription,
  TemplateRef,
  Type,
  VERSION,
  ViewChild,
  ViewChildren,
  ViewContainerRef,
  ViewEncapsulation,
  __objRest,
  __restKey,
  __spreadProps,
  __spreadValues,
  afterNextRender,
  animationFrameScheduler,
  asapScheduler,
  assertInInjectionContext,
  assertNotInReactiveContext,
  auditTime,
  booleanAttribute,
  computed,
  contentChild,
  contentChildren,
  debounceTime,
  distinctUntilChanged,
  effect,
  filter,
  forwardRef,
  fromEvent,
  getOutputDestroyRef,
  inject,
  input,
  isObservable,
  map,
  merge,
  model,
  numberAttribute,
  of,
  output,
  setClassMetadata,
  signal,
  startWith,
  switchMap,
  take,
  takeUntil,
  tap,
  untracked,
  viewChild,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵcomponentInstance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuery,
  ɵɵcontentQuerySignal,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵinject,
  ɵɵinterpolate,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵpureFunction4,
  ɵɵqueryAdvance,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery,
  ɵɵviewQuerySignal
} from "./chunk-KH435EP6.js";

// node_modules/@ngx-formly/core/fesm2020/ngx-formly-core.mjs
var _c0 = ["container"];
function FormlyField_ng_template_0_Template(rf, ctx) {
}
var _c1 = ["*"];
function FormlyGroup_formly_field_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "formly-field", 1);
  }
  if (rf & 2) {
    const f_r1 = ctx.$implicit;
    \u0275\u0275property("field", f_r1);
  }
}
var _c2 = ["fieldComponent"];
function disableTreeValidityCall(form, callback) {
  const _updateTreeValidity = form._updateTreeValidity.bind(form);
  form._updateTreeValidity = () => {
  };
  callback();
  form._updateTreeValidity = _updateTreeValidity;
}
function getFieldId(formId, field, index) {
  if (field.id) {
    return field.id;
  }
  let type = field.type;
  if (!type && field.template) {
    type = "template";
  }
  if (type instanceof Type) {
    type = type.prototype.constructor.name;
  }
  return [formId, type, field.key, index].join("_");
}
function hasKey(field) {
  return !isNil(field.key) && field.key !== "" && (!Array.isArray(field.key) || field.key.length > 0);
}
function getKeyPath(field) {
  if (!hasKey(field)) {
    return [];
  }
  if (field._keyPath?.key !== field.key) {
    let path = [];
    if (typeof field.key === "string") {
      const key = field.key.indexOf("[") === -1 ? field.key : field.key.replace(/\[(\w+)\]/g, ".$1");
      path = key.indexOf(".") !== -1 ? key.split(".") : [key];
    } else if (Array.isArray(field.key)) {
      path = field.key.slice(0);
    } else {
      path = [`${field.key}`];
    }
    defineHiddenProp(field, "_keyPath", {
      key: field.key,
      path
    });
  }
  return field._keyPath.path.slice(0);
}
var FORMLY_VALIDATORS = ["required", "pattern", "minLength", "maxLength", "min", "max"];
function assignFieldValue(field, value) {
  let paths = getKeyPath(field);
  if (paths.length === 0) {
    return;
  }
  let root = field;
  while (root.parent) {
    root = root.parent;
    paths = [...getKeyPath(root), ...paths];
  }
  if (value === void 0 && field.resetOnHide) {
    const k = paths.pop();
    const m = paths.reduce((model2, path) => model2[path] || {}, root.model);
    delete m[k];
    return;
  }
  assignModelValue(root.model, paths, value);
}
function assignModelValue(model2, paths, value) {
  for (let i = 0; i < paths.length - 1; i++) {
    const path = paths[i];
    if (!model2[path] || !isObject(model2[path])) {
      model2[path] = /^\d+$/.test(paths[i + 1]) ? [] : {};
    }
    model2 = model2[path];
  }
  model2[paths[paths.length - 1]] = clone(value);
}
function getFieldValue(field) {
  let model2 = field.parent ? field.parent.model : field.model;
  for (const path of getKeyPath(field)) {
    if (!model2) {
      return model2;
    }
    model2 = model2[path];
  }
  return model2;
}
function reverseDeepMerge(dest, ...args) {
  args.forEach((src) => {
    for (const srcArg in src) {
      if (isNil(dest[srcArg]) || isBlankString(dest[srcArg])) {
        dest[srcArg] = clone(src[srcArg]);
      } else if (objAndSameType(dest[srcArg], src[srcArg])) {
        reverseDeepMerge(dest[srcArg], src[srcArg]);
      }
    }
  });
  return dest;
}
function isNil(value) {
  return value == null;
}
function isUndefined(value) {
  return value === void 0;
}
function isBlankString(value) {
  return value === "";
}
function isFunction(value) {
  return typeof value === "function";
}
function objAndSameType(obj1, obj2) {
  return isObject(obj1) && isObject(obj2) && Object.getPrototypeOf(obj1) === Object.getPrototypeOf(obj2) && !(Array.isArray(obj1) || Array.isArray(obj2));
}
function isObject(x) {
  return x != null && typeof x === "object";
}
function isPromise(obj) {
  return !!obj && typeof obj.then === "function";
}
function clone(value) {
  if (!isObject(value) || isObservable(value) || value instanceof TemplateRef || /* instanceof SafeHtmlImpl */
  value.changingThisBreaksApplicationSecurity || ["RegExp", "FileList", "File", "Blob"].indexOf(value.constructor?.name) !== -1) {
    return value;
  }
  if (value instanceof Set) {
    return new Set(value);
  }
  if (value instanceof Map) {
    return new Map(value);
  }
  if (value instanceof Uint8Array) {
    return new Uint8Array(value);
  }
  if (value instanceof Uint16Array) {
    return new Uint16Array(value);
  }
  if (value instanceof Uint32Array) {
    return new Uint32Array(value);
  }
  if (value._isAMomentObject && isFunction(value.clone)) {
    return value.clone();
  }
  if (value instanceof AbstractControl) {
    return null;
  }
  if (value instanceof Date) {
    return new Date(value.getTime());
  }
  if (Array.isArray(value)) {
    return value.slice(0).map((v) => clone(v));
  }
  const proto = Object.getPrototypeOf(value);
  let c = Object.create(proto);
  c = Object.setPrototypeOf(c, proto);
  return Object.keys(value).reduce((newVal, prop) => {
    const propDesc = Object.getOwnPropertyDescriptor(value, prop);
    if (propDesc.get) {
      Object.defineProperty(newVal, prop, propDesc);
    } else {
      newVal[prop] = clone(value[prop]);
    }
    return newVal;
  }, c);
}
function defineHiddenProp(field, prop, defaultValue) {
  Object.defineProperty(field, prop, {
    enumerable: false,
    writable: true,
    configurable: true
  });
  field[prop] = defaultValue;
}
function observeDeep(source, paths, setFn) {
  let observers = [];
  const unsubscribe = () => {
    observers.forEach((observer2) => observer2());
    observers = [];
  };
  const observer = observe(source, paths, ({
    firstChange,
    currentValue
  }) => {
    !firstChange && setFn();
    unsubscribe();
    if (isObject(currentValue) && currentValue.constructor.name === "Object") {
      Object.keys(currentValue).forEach((prop) => {
        observers.push(observeDeep(source, [...paths, prop], setFn));
      });
    }
  });
  return () => {
    observer.unsubscribe();
    unsubscribe();
  };
}
function observe(o, paths, setFn) {
  if (!o._observers) {
    defineHiddenProp(o, "_observers", {});
  }
  let target = o;
  for (let i = 0; i < paths.length - 1; i++) {
    if (!target[paths[i]] || !isObject(target[paths[i]])) {
      target[paths[i]] = /^\d+$/.test(paths[i + 1]) ? [] : {};
    }
    target = target[paths[i]];
  }
  const key = paths[paths.length - 1];
  const prop = paths.join(".");
  if (!o._observers[prop]) {
    o._observers[prop] = {
      value: target[key],
      onChange: []
    };
  }
  const state = o._observers[prop];
  if (target[key] !== state.value) {
    state.value = target[key];
  }
  if (setFn && state.onChange.indexOf(setFn) === -1) {
    state.onChange.push(setFn);
    setFn({
      currentValue: state.value,
      firstChange: true
    });
    if (state.onChange.length >= 1 && isObject(target)) {
      const {
        enumerable
      } = Object.getOwnPropertyDescriptor(target, key) || {
        enumerable: true
      };
      Object.defineProperty(target, key, {
        enumerable,
        configurable: true,
        get: () => state.value,
        set: (currentValue) => {
          if (currentValue !== state.value) {
            const previousValue = state.value;
            state.value = currentValue;
            state.onChange.forEach((changeFn) => changeFn({
              previousValue,
              currentValue,
              firstChange: false
            }));
          }
        }
      });
    }
  }
  return {
    setValue(currentValue, emitEvent = true) {
      if (currentValue === state.value) {
        return;
      }
      const previousValue = state.value;
      state.value = currentValue;
      state.onChange.forEach((changeFn) => {
        if (changeFn !== setFn && emitEvent) {
          changeFn({
            previousValue,
            currentValue,
            firstChange: false
          });
        }
      });
    },
    unsubscribe() {
      state.onChange = state.onChange.filter((changeFn) => changeFn !== setFn);
      if (state.onChange.length === 0) {
        delete o._observers[prop];
      }
    }
  };
}
function getField(f, key) {
  key = Array.isArray(key) ? key.join(".") : key;
  if (!f.fieldGroup) {
    return void 0;
  }
  for (let i = 0, len = f.fieldGroup.length; i < len; i++) {
    const c = f.fieldGroup[i];
    const k = Array.isArray(c.key) ? c.key.join(".") : c.key;
    if (k === key) {
      return c;
    }
    if (c.fieldGroup && (isNil(k) || key.indexOf(`${k}.`) === 0)) {
      const field = getField(c, isNil(k) ? key : key.slice(k.length + 1));
      if (field) {
        return field;
      }
    }
  }
  return void 0;
}
function markFieldForCheck(field) {
  field._componentRefs?.forEach((ref) => {
    if (ref instanceof ComponentRef$1) {
      const changeDetectorRef = ref.injector.get(ChangeDetectorRef);
      changeDetectorRef.markForCheck();
    } else {
      ref.markForCheck();
    }
  });
}
function isNoopNgZone(ngZone) {
  return ngZone instanceof NoopNgZone;
}
function isHiddenField(field) {
  const isHidden = (f) => f.hide || f.expressions?.hide || f.hideExpression;
  let setDefaultValue = !field.resetOnHide || !isHidden(field);
  if (!isHidden(field) && field.resetOnHide) {
    let parent = field.parent;
    while (parent && !isHidden(parent)) {
      parent = parent.parent;
    }
    setDefaultValue = !parent || !isHidden(parent);
  }
  return !setDefaultValue;
}
function isSignalRequired() {
  return +VERSION.major > 18 || +VERSION.major >= 18 && +VERSION.minor >= 1;
}
var FORMLY_CONFIG = new InjectionToken("FORMLY_CONFIG");
var FormlyConfig = class {
  constructor() {
    this.types = {};
    this.validators = {};
    this.wrappers = {};
    this.messages = {};
    this.extras = {
      checkExpressionOn: "modelChange",
      lazyRender: true,
      resetFieldOnHide: true,
      renderFormlyFieldElement: true,
      showError(field) {
        return field.formControl?.invalid && (field.formControl?.touched || field.options.parentForm?.submitted || !!field.field.validation?.show);
      }
    };
    this.extensions = {};
    this.presets = {};
    this.extensionsByPriority = {};
  }
  addConfig(config) {
    if (config.types) {
      config.types.forEach((type) => this.setType(type));
    }
    if (config.validators) {
      config.validators.forEach((validator) => this.setValidator(validator));
    }
    if (config.wrappers) {
      config.wrappers.forEach((wrapper) => this.setWrapper(wrapper));
    }
    if (config.validationMessages) {
      config.validationMessages.forEach((validation) => this.addValidatorMessage(validation.name, validation.message));
    }
    if (config.extensions) {
      this.setSortedExtensions(config.extensions);
    }
    if (config.extras) {
      this.extras = __spreadValues(__spreadValues({}, this.extras), config.extras);
    }
    if (config.presets) {
      this.presets = __spreadValues(__spreadValues({}, this.presets), config.presets.reduce((acc, curr) => __spreadProps(__spreadValues({}, acc), {
        [curr.name]: curr.config
      }), {}));
    }
  }
  /**
   * Allows you to specify a custom type which you can use in your field configuration.
   * You can pass an object of options, or an array of objects of options.
   */
  setType(options) {
    if (Array.isArray(options)) {
      options.forEach((option) => this.setType(option));
    } else {
      if (!this.types[options.name]) {
        this.types[options.name] = {
          name: options.name
        };
      }
      ["component", "extends", "defaultOptions", "wrappers"].forEach((prop) => {
        if (options.hasOwnProperty(prop)) {
          this.types[options.name][prop] = options[prop];
        }
      });
    }
  }
  getType(name, throwIfNotFound = false) {
    if (name instanceof Type) {
      return {
        component: name,
        name: name.prototype.constructor.name
      };
    }
    if (!this.types[name]) {
      if (throwIfNotFound) {
        throw new Error(`[Formly Error] The type "${name}" could not be found. Please make sure that is registered through the FormlyModule declaration.`);
      }
      return null;
    }
    this.mergeExtendedType(name);
    return this.types[name];
  }
  /** @ignore */
  getMergedField(field = {}) {
    const type = this.getType(field.type);
    if (!type) {
      return;
    }
    if (type.defaultOptions) {
      reverseDeepMerge(field, type.defaultOptions);
    }
    const extendDefaults = type.extends && this.getType(type.extends).defaultOptions;
    if (extendDefaults) {
      reverseDeepMerge(field, extendDefaults);
    }
    if (field?.optionsTypes) {
      field.optionsTypes.forEach((option) => {
        const defaultOptions = this.getType(option).defaultOptions;
        if (defaultOptions) {
          reverseDeepMerge(field, defaultOptions);
        }
      });
    }
    const componentRef = this.resolveFieldTypeRef(field);
    if (componentRef?.instance?.defaultOptions) {
      reverseDeepMerge(field, componentRef.instance.defaultOptions);
    }
    if (!field.wrappers && type.wrappers) {
      field.wrappers = [...type.wrappers];
    }
  }
  /** @ignore @internal */
  resolveFieldTypeRef(field = {}) {
    const type = this.getType(field.type);
    if (!type) {
      return null;
    }
    if (!type.component || type._componentRef) {
      return type._componentRef;
    }
    const {
      _viewContainerRef,
      _injector
    } = field.options;
    if (!_viewContainerRef || !_injector) {
      return null;
    }
    const componentRef = _viewContainerRef.createComponent(type.component, {
      injector: _injector
    });
    defineHiddenProp(type, "_componentRef", componentRef);
    try {
      componentRef.destroy();
    } catch (e) {
      console.error(`An error occurred while destroying the Formly component type "${field.type}"`, e);
    }
    return type._componentRef;
  }
  setWrapper(options) {
    this.wrappers[options.name] = options;
    if (options.types) {
      options.types.forEach((type) => {
        this.setTypeWrapper(type, options.name);
      });
    }
  }
  getWrapper(name) {
    if (name instanceof Type) {
      return {
        component: name,
        name: name.prototype.constructor.name
      };
    }
    if (!this.wrappers[name]) {
      throw new Error(`[Formly Error] The wrapper "${name}" could not be found. Please make sure that is registered through the FormlyModule declaration.`);
    }
    return this.wrappers[name];
  }
  /** @ignore */
  setTypeWrapper(type, name) {
    if (!this.types[type]) {
      this.types[type] = {};
    }
    if (!this.types[type].wrappers) {
      this.types[type].wrappers = [];
    }
    if (this.types[type].wrappers.indexOf(name) === -1) {
      this.types[type].wrappers.push(name);
    }
  }
  setValidator(options) {
    this.validators[options.name] = options;
  }
  getValidator(name) {
    if (!this.validators[name]) {
      throw new Error(`[Formly Error] The validator "${name}" could not be found. Please make sure that is registered through the FormlyModule declaration.`);
    }
    return this.validators[name];
  }
  addValidatorMessage(name, message) {
    this.messages[name] = message;
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      const deprecated = {
        minlength: "minLength",
        maxlength: "maxLength"
      };
      if (deprecated[name]) {
        console.warn(`Formly deprecation: passing validation messages key '${name}' is deprecated since v6.0, use '${deprecated[name]}' instead.`);
        this.messages[deprecated[name]] = message;
      }
    }
  }
  getValidatorMessage(name) {
    return this.messages[name];
  }
  setSortedExtensions(extensionOptions) {
    extensionOptions.forEach((extensionOption) => {
      const priority = extensionOption.priority ?? 1;
      this.extensionsByPriority[priority] = __spreadProps(__spreadValues({}, this.extensionsByPriority[priority]), {
        [extensionOption.name]: extensionOption.extension
      });
    });
    this.extensions = Object.keys(this.extensionsByPriority).map(Number).sort((a, b) => a - b).reduce((acc, prio) => __spreadValues(__spreadValues({}, acc), this.extensionsByPriority[prio]), {});
  }
  mergeExtendedType(name) {
    if (!this.types[name].extends) {
      return;
    }
    const extendedType = this.getType(this.types[name].extends);
    if (!this.types[name].component) {
      this.types[name].component = extendedType.component;
    }
    if (!this.types[name].wrappers) {
      this.types[name].wrappers = extendedType.wrappers;
    }
  }
};
FormlyConfig.\u0275fac = function FormlyConfig_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || FormlyConfig)();
};
FormlyConfig.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: FormlyConfig,
  factory: FormlyConfig.\u0275fac,
  providedIn: "root"
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormlyConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var FormlyFormBuilder = class {
  constructor(config, injector, viewContainerRef, parentForm) {
    this.config = config;
    this.injector = injector;
    this.viewContainerRef = viewContainerRef;
    this.parentForm = parentForm;
  }
  buildForm(form, fieldGroup = [], model2, options) {
    this.build({
      fieldGroup,
      model: model2,
      form,
      options
    });
  }
  build(field) {
    if (!this.config.extensions.core) {
      throw new Error("NgxFormly: missing `forRoot()` call. use `forRoot()` when registering the `FormlyModule`.");
    }
    if (!field.parent) {
      this._setOptions(field);
    }
    disableTreeValidityCall(field.form, () => {
      this._build(field);
      if (!field.parent || field.fieldArray) {
        const options = field.options;
        if (field.parent && isHiddenField(field)) {
          options._hiddenFieldsForCheck?.push({
            field,
            default: false
          });
        }
        options.checkExpressions?.(field, true);
        options._detectChanges?.(field);
      }
    });
  }
  _build(field) {
    if (!field) {
      return;
    }
    const extensions = Object.values(this.config.extensions);
    extensions.forEach((extension) => extension.prePopulate?.(field));
    extensions.forEach((extension) => extension.onPopulate?.(field));
    field.fieldGroup?.forEach((f) => this._build(f));
    extensions.forEach((extension) => extension.postPopulate?.(field));
  }
  _setOptions(field) {
    field.form = field.form || new FormGroup({});
    field.model = field.model || {};
    field.options = field.options || {};
    const options = field.options;
    if (!options._viewContainerRef) {
      defineHiddenProp(options, "_viewContainerRef", this.viewContainerRef);
    }
    if (!options._injector) {
      defineHiddenProp(options, "_injector", this.injector);
    }
    if (!options.build) {
      options._buildForm = () => {
        console.warn(`Formly: 'options._buildForm' is deprecated since v6.0, use 'options.build' instead.`);
        this.build(field);
      };
      options.build = (f = field) => {
        this.build(f);
        return f;
      };
    }
    if (!options.parentForm && this.parentForm) {
      defineHiddenProp(options, "parentForm", this.parentForm);
      if (!isSignalRequired()) {
        observe(options, ["parentForm", "submitted"], ({
          firstChange
        }) => {
          if (!firstChange) {
            options.detectChanges(field);
          }
        });
      }
    }
  }
};
FormlyFormBuilder.\u0275fac = function FormlyFormBuilder_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || FormlyFormBuilder)(\u0275\u0275inject(FormlyConfig), \u0275\u0275inject(Injector), \u0275\u0275inject(ViewContainerRef, 8), \u0275\u0275inject(FormGroupDirective, 8));
};
FormlyFormBuilder.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: FormlyFormBuilder,
  factory: FormlyFormBuilder.\u0275fac,
  providedIn: "root"
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormlyFormBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [{
      type: FormlyConfig
    }, {
      type: Injector
    }, {
      type: ViewContainerRef,
      decorators: [{
        type: Optional
      }]
    }, {
      type: FormGroupDirective,
      decorators: [{
        type: Optional
      }]
    }];
  }, null);
})();
function unregisterControl(field, emitEvent = false) {
  const control = field.formControl;
  const fieldIndex = control._fields ? control._fields.indexOf(field) : -1;
  if (fieldIndex !== -1) {
    control._fields.splice(fieldIndex, 1);
  }
  const form = control.parent;
  if (!form) {
    return;
  }
  const opts = {
    emitEvent
  };
  if (form instanceof FormArray) {
    const key = form.controls.findIndex((c) => c === control);
    if (key !== -1) {
      form.removeAt(key, opts);
    }
  } else if (form instanceof FormGroup) {
    const paths = getKeyPath(field);
    const key = paths[paths.length - 1];
    if (form.get([key]) === control) {
      form.removeControl(key, opts);
    }
  }
  control.setParent(null);
}
function findControl(field) {
  if (field.formControl) {
    return field.formControl;
  }
  if (field.shareFormControl === false) {
    return null;
  }
  return field.form?.get(getKeyPath(field));
}
function registerControl(field, control, emitEvent = false) {
  control = control || field.formControl;
  if (!control._fields) {
    defineHiddenProp(control, "_fields", []);
  }
  if (control._fields.indexOf(field) === -1) {
    control._fields.push(field);
  }
  if (!field.formControl && control) {
    defineHiddenProp(field, "formControl", control);
    control.setValidators(null);
    control.setAsyncValidators(null);
    field.props.disabled = !!field.props.disabled;
    const disabledObserver = observe(field, ["props", "disabled"], ({
      firstChange,
      currentValue
    }) => {
      if (!firstChange) {
        currentValue ? field.formControl.disable() : field.formControl.enable();
      }
    });
    if (control instanceof FormControl) {
      control.registerOnDisabledChange(disabledObserver.setValue);
    }
  }
  if (!field.form || !hasKey(field)) {
    return;
  }
  let form = field.form;
  const paths = getKeyPath(field);
  const value = getFieldValue(field);
  if (!(isNil(control.value) && isNil(value)) && control.value !== value && control instanceof FormControl) {
    control.patchValue(value);
  }
  for (let i = 0; i < paths.length - 1; i++) {
    const path = paths[i];
    if (!form.get([path])) {
      form.setControl(path, new FormGroup({}), {
        emitEvent
      });
    }
    form = form.get([path]);
  }
  const key = paths[paths.length - 1];
  if (!field._hide && form.get([key]) !== control) {
    form.setControl(key, control, {
      emitEvent
    });
  }
}
function updateValidity(c, onlySelf = false) {
  const status = c.status;
  const value = c.value;
  c.updateValueAndValidity({
    emitEvent: false,
    onlySelf
  });
  if (status !== c.status) {
    c.statusChanges.emit(c.status);
  }
  if (value !== c.value) {
    c.valueChanges.emit(c.value);
  }
}
function clearControl(form) {
  delete form?._fields;
  form.setValidators(null);
  form.setAsyncValidators(null);
  if (form instanceof FormGroup || form instanceof FormArray) {
    Object.values(form.controls).forEach((c) => clearControl(c));
  }
}
var FormlyTemplate = class {
  constructor(ref) {
    this.ref = ref;
  }
  ngOnChanges() {
    this.name = this.name || "formly-group";
  }
};
FormlyTemplate.\u0275fac = function FormlyTemplate_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || FormlyTemplate)(\u0275\u0275directiveInject(TemplateRef));
};
FormlyTemplate.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: FormlyTemplate,
  selectors: [["", "formlyTemplate", ""]],
  inputs: {
    name: [0, "formlyTemplate", "name"]
  },
  standalone: false,
  features: [\u0275\u0275NgOnChangesFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormlyTemplate, [{
    type: Directive,
    args: [{
      selector: "[formlyTemplate]"
    }]
  }], function() {
    return [{
      type: TemplateRef
    }];
  }, {
    name: [{
      type: Input,
      args: ["formlyTemplate"]
    }]
  });
})();
var FormlyFieldTemplates = class {
};
FormlyFieldTemplates.\u0275fac = function FormlyFieldTemplates_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || FormlyFieldTemplates)();
};
FormlyFieldTemplates.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: FormlyFieldTemplates,
  factory: FormlyFieldTemplates.\u0275fac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormlyFieldTemplates, [{
    type: Injectable
  }], null, null);
})();
var FormlyField = class {
  constructor(config, renderer, _elementRef, hostContainerRef, form) {
    this.config = config;
    this.renderer = renderer;
    this._elementRef = _elementRef;
    this.hostContainerRef = hostContainerRef;
    this.form = form;
    this.hostObservers = [];
    this.componentRefs = [];
    this.hooksObservers = [];
    this.detectFieldBuild = false;
    this.valueChangesUnsubscribe = () => {
    };
  }
  get containerRef() {
    return this.config.extras.renderFormlyFieldElement ? this.viewContainerRef : this.hostContainerRef;
  }
  get elementRef() {
    if (this.config.extras.renderFormlyFieldElement) {
      return this._elementRef;
    }
    if (this.componentRefs?.[0] instanceof ComponentRef$1) {
      return this.componentRefs[0].location;
    }
    return null;
  }
  ngAfterContentInit() {
    this.triggerHook("afterContentInit");
  }
  ngAfterViewInit() {
    this.triggerHook("afterViewInit");
  }
  ngDoCheck() {
    if (this.detectFieldBuild && this.field && this.field.options) {
      this.render();
    }
  }
  ngOnInit() {
    this.triggerHook("onInit");
  }
  ngOnChanges(changes) {
    this.triggerHook("onChanges", changes);
  }
  ngOnDestroy() {
    this.resetRefs(this.field);
    this.hostObservers.forEach((hostObserver) => hostObserver.unsubscribe());
    this.hooksObservers.forEach((unsubscribe) => unsubscribe());
    this.valueChangesUnsubscribe();
    this.triggerHook("onDestroy");
  }
  renderField(containerRef, f, wrappers = []) {
    if (this.containerRef === containerRef) {
      this.resetRefs(this.field);
      this.containerRef.clear();
      wrappers = this.field?.wrappers;
    }
    if (wrappers?.length > 0) {
      const [wrapper, ...wps] = wrappers;
      const {
        component
      } = this.config.getWrapper(wrapper);
      const ref = containerRef.createComponent(component);
      this.attachComponentRef(ref, f);
      observe(ref.instance, ["fieldComponent"], ({
        currentValue,
        previousValue,
        firstChange
      }) => {
        if (currentValue) {
          if (previousValue && previousValue._lContainer === currentValue._lContainer) {
            return;
          }
          const viewRef = previousValue ? previousValue.detach() : null;
          if (viewRef && !viewRef.destroyed) {
            currentValue.insert(viewRef);
          } else {
            this.renderField(currentValue, f, wps);
          }
          !firstChange && ref.changeDetectorRef.detectChanges();
        }
      });
    } else if (f?.type) {
      const inlineType = this.form?.templates?.find((ref2) => ref2.name === f.type);
      let ref;
      if (inlineType) {
        ref = containerRef.createEmbeddedView(inlineType.ref, {
          $implicit: f
        });
      } else {
        const {
          component
        } = this.config.getType(f.type, true);
        ref = containerRef.createComponent(component);
      }
      this.attachComponentRef(ref, f);
    }
  }
  triggerHook(name, changes) {
    if (name === "onInit" || name === "onChanges" && changes.field && !changes.field.firstChange) {
      this.valueChangesUnsubscribe();
      this.valueChangesUnsubscribe = this.fieldChanges(this.field);
    }
    if (this.field?.hooks?.[name]) {
      if (!changes || changes.field) {
        const r = this.field.hooks[name](this.field);
        if (isObservable(r) && ["onInit", "afterContentInit", "afterViewInit"].indexOf(name) !== -1) {
          const sub = r.subscribe();
          this.hooksObservers.push(() => sub.unsubscribe());
        }
      }
    }
    if (name === "onChanges" && changes.field) {
      this.resetRefs(changes.field.previousValue);
      this.render();
    }
  }
  attachComponentRef(ref, field) {
    this.componentRefs.push(ref);
    field._componentRefs.push(ref);
    if (ref instanceof ComponentRef$1) {
      Object.assign(ref.instance, {
        field
      });
    }
  }
  render() {
    if (!this.field) {
      return;
    }
    if (!this.field.options) {
      this.detectFieldBuild = true;
      return;
    }
    this.detectFieldBuild = false;
    this.hostObservers.forEach((hostObserver) => hostObserver.unsubscribe());
    this.hostObservers = [observe(this.field, ["hide"], ({
      firstChange,
      currentValue
    }) => {
      const containerRef = this.containerRef;
      if (this.config.extras.lazyRender === false) {
        firstChange && this.renderField(containerRef, this.field);
        if (!firstChange || firstChange && currentValue) {
          this.elementRef && this.renderer.setStyle(this.elementRef.nativeElement, "display", currentValue ? "none" : "");
        }
      } else {
        if (currentValue) {
          containerRef.clear();
          if (this.field.className) {
            this.renderer.removeAttribute(this.elementRef.nativeElement, "class");
          }
        } else {
          this.renderField(containerRef, this.field);
          if (this.field.className) {
            this.renderer.setAttribute(this.elementRef.nativeElement, "class", this.field.className);
          }
        }
      }
      !firstChange && this.field.options.detectChanges(this.field);
    }), observe(this.field, ["className"], ({
      firstChange,
      currentValue
    }) => {
      if ((!firstChange || firstChange && currentValue) && (!this.config.extras.lazyRender || this.field.hide !== true)) {
        this.elementRef && this.renderer.setAttribute(this.elementRef.nativeElement, "class", currentValue);
      }
    })];
    if (!isSignalRequired()) {
      ["touched", "pristine", "status"].forEach((prop) => this.hostObservers.push(observe(this.field, ["formControl", prop], ({
        firstChange
      }) => !firstChange && markFieldForCheck(this.field))));
    } else if (this.field.formControl) {
      const events = this.field.formControl.events.subscribe(() => markFieldForCheck(this.field));
      this.hostObservers.push(events);
    }
  }
  resetRefs(field) {
    if (field) {
      if (field._localFields) {
        field._localFields = [];
      } else {
        defineHiddenProp(this.field, "_localFields", []);
      }
      if (field._componentRefs) {
        field._componentRefs = field._componentRefs.filter((ref) => this.componentRefs.indexOf(ref) === -1);
      } else {
        defineHiddenProp(this.field, "_componentRefs", []);
      }
    }
    this.componentRefs = [];
  }
  fieldChanges(field) {
    if (!field) {
      return () => {
      };
    }
    const propsObserver = observeDeep(field, ["props"], () => field.options.detectChanges(field));
    let subscribes = [() => {
      propsObserver();
    }];
    for (const key of Object.keys(field._expressions || {})) {
      const expressionObserver = observe(field, ["_expressions", key], ({
        currentValue,
        previousValue
      }) => {
        if (previousValue?.subscription) {
          previousValue.subscription.unsubscribe();
          previousValue.subscription = null;
        }
        if (isObservable(currentValue.value$)) {
          currentValue.subscription = currentValue.value$.subscribe();
        }
      });
      subscribes.push(() => {
        if (field._expressions[key]?.subscription) {
          field._expressions[key].subscription.unsubscribe();
        }
        expressionObserver.unsubscribe();
      });
    }
    for (const path of [["focus"], ["template"], ["fieldGroupClassName"], ["validation", "show"]]) {
      const fieldObserver = observe(field, path, ({
        firstChange
      }) => !firstChange && field.options.detectChanges(field));
      subscribes.push(() => fieldObserver.unsubscribe());
    }
    if (field.formControl && !field.fieldGroup) {
      const control = field.formControl;
      let valueChanges = control.valueChanges.pipe(map((value) => {
        field.parsers?.map((parserFn) => value = parserFn(value, field));
        if (!Object.is(value, field.formControl.value)) {
          field.formControl.setValue(value);
        }
        return value;
      }), distinctUntilChanged((x, y) => {
        if (x !== y || Array.isArray(x) || isObject(x)) {
          return false;
        }
        return true;
      }));
      if (control.value !== getFieldValue(field)) {
        valueChanges = valueChanges.pipe(startWith(control.value));
      }
      const {
        updateOn,
        debounce
      } = field.modelOptions;
      if ((!updateOn || updateOn === "change") && debounce?.default > 0) {
        valueChanges = control.valueChanges.pipe(debounceTime(debounce.default));
      }
      const sub = valueChanges.subscribe((value) => {
        if (control._fields?.length > 1 && control instanceof FormControl) {
          control.patchValue(value, {
            emitEvent: false,
            onlySelf: true
          });
        }
        if (hasKey(field)) {
          assignFieldValue(field, value);
        }
        field.options.fieldChanges.next({
          value,
          field,
          type: "valueChanges"
        });
      });
      subscribes.push(() => sub.unsubscribe());
    }
    let templateFieldsSubs = [];
    observe(field, ["_localFields"], ({
      currentValue
    }) => {
      templateFieldsSubs.forEach((unsubscribe) => unsubscribe());
      templateFieldsSubs = (currentValue || []).map((f) => this.fieldChanges(f));
    });
    return () => {
      subscribes.forEach((unsubscribe) => unsubscribe());
      templateFieldsSubs.forEach((unsubscribe) => unsubscribe());
    };
  }
};
FormlyField.\u0275fac = function FormlyField_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || FormlyField)(\u0275\u0275directiveInject(FormlyConfig), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(ViewContainerRef), \u0275\u0275directiveInject(FormlyFieldTemplates, 8));
};
FormlyField.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: FormlyField,
  selectors: [["formly-field"]],
  viewQuery: function FormlyField_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 7, ViewContainerRef);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.viewContainerRef = _t.first);
    }
  },
  inputs: {
    field: "field"
  },
  standalone: false,
  features: [\u0275\u0275NgOnChangesFeature],
  decls: 2,
  vars: 0,
  consts: [["container", ""]],
  template: function FormlyField_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, FormlyField_ng_template_0_Template, 0, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    }
  },
  styles: ["[_nghost-%COMP%]:empty{display:none}"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormlyField, [{
    type: Component,
    args: [{
      selector: "formly-field",
      template: "<ng-template #container></ng-template>",
      styles: [":host:empty{display:none}\n"]
    }]
  }], function() {
    return [{
      type: FormlyConfig
    }, {
      type: Renderer2
    }, {
      type: ElementRef
    }, {
      type: ViewContainerRef
    }, {
      type: FormlyFieldTemplates,
      decorators: [{
        type: Optional
      }]
    }];
  }, {
    field: [{
      type: Input
    }],
    viewContainerRef: [{
      type: ViewChild,
      args: ["container", {
        read: ViewContainerRef,
        static: true
      }]
    }]
  });
})();
var FormlyForm = class {
  constructor(builder, config, ngZone, fieldTemplates) {
    this.builder = builder;
    this.config = config;
    this.ngZone = ngZone;
    this.fieldTemplates = fieldTemplates;
    this.modelChange = new EventEmitter();
    this.field = {
      type: "formly-group"
    };
    this._modelChangeValue = {};
    this.valueChangesUnsubscribe = () => {
    };
  }
  /** The form instance which allow to track model value and validation status. */
  set form(form) {
    this.field.form = form;
  }
  get form() {
    return this.field.form;
  }
  /** The model to be represented by the form. */
  set model(model2) {
    if (this.config.extras.immutable && this._modelChangeValue === model2) {
      return;
    }
    this.setField({
      model: model2
    });
  }
  get model() {
    return this.field.model;
  }
  /** The field configurations for building the form. */
  set fields(fieldGroup) {
    this.setField({
      fieldGroup
    });
  }
  get fields() {
    return this.field.fieldGroup;
  }
  /** Options for the form. */
  set options(options) {
    this.setField({
      options
    });
  }
  get options() {
    return this.field.options;
  }
  set templates(templates) {
    this.fieldTemplates.templates = templates;
  }
  ngDoCheck() {
    if (this.config.extras.checkExpressionOn === "changeDetectionCheck") {
      this.checkExpressionChange();
    }
  }
  ngOnChanges(changes) {
    if (changes.fields && this.form) {
      clearControl(this.form);
    }
    if (changes.fields || changes.form || changes.model && this._modelChangeValue !== changes.model.currentValue) {
      this.valueChangesUnsubscribe();
      this.builder.build(this.field);
      this.valueChangesUnsubscribe = this.valueChanges();
    }
  }
  ngOnDestroy() {
    this.valueChangesUnsubscribe();
  }
  checkExpressionChange() {
    this.field.options.checkExpressions?.(this.field);
  }
  valueChanges() {
    this.valueChangesUnsubscribe();
    let formEvents = null;
    if (isSignalRequired()) {
      let submitted = this.options?.parentForm?.submitted;
      formEvents = this.form.events.subscribe(() => {
        if (submitted !== this.options?.parentForm?.submitted) {
          this.options.detectChanges(this.field);
          submitted = this.options?.parentForm?.submitted;
        }
      });
    }
    let fieldChangesDetection = [observeDeep(this.field.options, ["formState"], () => this.field.options.detectChanges(this.field))];
    const valueChanges = this.field.options.fieldChanges.pipe(filter(({
      field,
      type
    }) => hasKey(field) && type === "valueChanges"), switchMap(() => isNoopNgZone(this.ngZone) ? of(null) : this.ngZone.onStable.asObservable().pipe(take(1)))).subscribe(() => this.ngZone.runGuarded(() => {
      this.checkExpressionChange();
      this.modelChange.emit(this._modelChangeValue = clone(this.model));
    }));
    return () => {
      fieldChangesDetection.forEach((fnc) => fnc());
      formEvents?.unsubscribe();
      valueChanges.unsubscribe();
    };
  }
  setField(field) {
    if (this.config.extras.immutable) {
      this.field = __spreadValues(__spreadValues({}, this.field), clone(field));
    } else {
      Object.keys(field).forEach((p) => this.field[p] = field[p]);
    }
  }
};
FormlyForm.\u0275fac = function FormlyForm_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || FormlyForm)(\u0275\u0275directiveInject(FormlyFormBuilder), \u0275\u0275directiveInject(FormlyConfig), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(FormlyFieldTemplates));
};
FormlyForm.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: FormlyForm,
  selectors: [["formly-form"]],
  contentQueries: function FormlyForm_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      \u0275\u0275contentQuery(dirIndex, FormlyTemplate, 4);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
    }
  },
  inputs: {
    form: "form",
    model: "model",
    fields: "fields",
    options: "options"
  },
  outputs: {
    modelChange: "modelChange"
  },
  standalone: false,
  features: [\u0275\u0275ProvidersFeature([FormlyFormBuilder, FormlyFieldTemplates]), \u0275\u0275NgOnChangesFeature],
  decls: 1,
  vars: 1,
  consts: [[3, "field"]],
  template: function FormlyForm_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "formly-field", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("field", ctx.field);
    }
  },
  dependencies: [FormlyField],
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormlyForm, [{
    type: Component,
    args: [{
      selector: "formly-form",
      template: '<formly-field [field]="field"></formly-field>',
      providers: [FormlyFormBuilder, FormlyFieldTemplates],
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], function() {
    return [{
      type: FormlyFormBuilder
    }, {
      type: FormlyConfig
    }, {
      type: NgZone
    }, {
      type: FormlyFieldTemplates
    }];
  }, {
    form: [{
      type: Input
    }],
    model: [{
      type: Input
    }],
    fields: [{
      type: Input
    }],
    options: [{
      type: Input
    }],
    modelChange: [{
      type: Output
    }],
    templates: [{
      type: ContentChildren,
      args: [FormlyTemplate]
    }]
  });
})();
var FormlyAttributes = class {
  constructor(renderer, elementRef, _document) {
    this.renderer = renderer;
    this.elementRef = elementRef;
    this.uiAttributesCache = {};
    this.uiEvents = {
      listeners: [],
      events: ["click", "keyup", "keydown", "keypress", "focus", "blur", "change"],
      callback: (eventName, $event) => {
        switch (eventName) {
          case "focus":
            return this.onFocus($event);
          case "blur":
            return this.onBlur($event);
          case "change":
            return this.onChange($event);
          default:
            return this.props[eventName](this.field, $event);
        }
      }
    };
    this.document = _document;
  }
  get props() {
    return this.field.props || {};
  }
  get fieldAttrElements() {
    return this.field?.["_elementRefs"] || [];
  }
  ngOnChanges(changes) {
    if (changes.field) {
      this.field.name && this.setAttribute("name", this.field.name);
      this.uiEvents.listeners.forEach((listener) => listener());
      this.uiEvents.events.forEach((eventName) => {
        if (this.props?.[eventName] || ["focus", "blur", "change"].indexOf(eventName) !== -1) {
          this.uiEvents.listeners.push(this.renderer.listen(this.elementRef.nativeElement, eventName, (e) => this.uiEvents.callback(eventName, e)));
        }
      });
      if (this.props?.attributes) {
        observe(this.field, ["props", "attributes"], ({
          currentValue,
          previousValue
        }) => {
          if (previousValue) {
            Object.keys(previousValue).forEach((attr) => this.removeAttribute(attr));
          }
          if (currentValue) {
            Object.keys(currentValue).forEach((attr) => {
              if (currentValue[attr] != null) {
                this.setAttribute(attr, currentValue[attr]);
              }
            });
          }
        });
      }
      this.detachElementRef(changes.field.previousValue);
      this.attachElementRef(changes.field.currentValue);
      if (this.fieldAttrElements.length === 1) {
        !this.id && this.field.id && this.setAttribute("id", this.field.id);
        this.focusObserver = observe(this.field, ["focus"], ({
          currentValue
        }) => {
          this.toggleFocus(currentValue);
        });
      }
    }
    if (changes.id) {
      this.setAttribute("id", this.id);
    }
  }
  /**
   * We need to re-evaluate all the attributes on every change detection cycle, because
   * by using a HostBinding we run into certain edge cases. This means that whatever logic
   * is in here has to be super lean or we risk seriously damaging or destroying the performance.
   *
   * Formly issue: https://github.com/ngx-formly/ngx-formly/issues/1317
   * Material issue: https://github.com/angular/components/issues/14024
   */
  ngDoCheck() {
    if (!this.uiAttributes) {
      const element = this.elementRef.nativeElement;
      this.uiAttributes = [...FORMLY_VALIDATORS, "tabindex", "placeholder", "readonly", "disabled", "step"].filter((attr) => !element.hasAttribute || !element.hasAttribute(attr));
    }
    for (let i = 0; i < this.uiAttributes.length; i++) {
      const attr = this.uiAttributes[i];
      const value = this.props[attr];
      if (this.uiAttributesCache[attr] !== value && (!this.props.attributes || !this.props.attributes.hasOwnProperty(attr.toLowerCase()))) {
        this.uiAttributesCache[attr] = value;
        if (value || value === 0) {
          this.setAttribute(attr, value === true ? attr : `${value}`);
        } else {
          this.removeAttribute(attr);
        }
      }
    }
  }
  ngOnDestroy() {
    this.uiEvents.listeners.forEach((listener) => listener());
    this.detachElementRef(this.field);
    this.focusObserver?.unsubscribe();
  }
  toggleFocus(value) {
    const element = this.fieldAttrElements ? this.fieldAttrElements[0] : null;
    if (!element || !element.nativeElement.focus) {
      return;
    }
    const isFocused = !!this.document.activeElement && this.fieldAttrElements.some(({
      nativeElement
    }) => this.document.activeElement === nativeElement || nativeElement.contains(this.document.activeElement));
    if (value && !isFocused) {
      Promise.resolve().then(() => element.nativeElement.focus());
    } else if (!value && isFocused) {
      Promise.resolve().then(() => element.nativeElement.blur());
    }
  }
  onFocus($event) {
    this.focusObserver?.setValue(true);
    this.props.focus?.(this.field, $event);
  }
  onBlur($event) {
    this.focusObserver?.setValue(false);
    this.props.blur?.(this.field, $event);
  }
  // handle custom `change` event, for regular ones rely on DOM listener
  onHostChange($event) {
    if ($event instanceof Event) {
      return;
    }
    this.onChange($event);
  }
  onChange($event) {
    this.props.change?.(this.field, $event);
    this.field.formControl?.markAsDirty();
  }
  attachElementRef(f) {
    if (!f) {
      return;
    }
    if (f["_elementRefs"]?.indexOf(this.elementRef) === -1) {
      f["_elementRefs"].push(this.elementRef);
    } else {
      defineHiddenProp(f, "_elementRefs", [this.elementRef]);
    }
  }
  detachElementRef(f) {
    const index = f?.["_elementRefs"] ? this.fieldAttrElements.indexOf(this.elementRef) : -1;
    if (index !== -1) {
      f["_elementRefs"].splice(index, 1);
    }
  }
  setAttribute(attr, value) {
    this.renderer.setAttribute(this.elementRef.nativeElement, attr, value);
  }
  removeAttribute(attr) {
    this.renderer.removeAttribute(this.elementRef.nativeElement, attr);
  }
};
FormlyAttributes.\u0275fac = function FormlyAttributes_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || FormlyAttributes)(\u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(DOCUMENT));
};
FormlyAttributes.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: FormlyAttributes,
  selectors: [["", "formlyAttributes", ""]],
  hostBindings: function FormlyAttributes_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("change", function FormlyAttributes_change_HostBindingHandler($event) {
        return ctx.onHostChange($event);
      });
    }
  },
  inputs: {
    field: [0, "formlyAttributes", "field"],
    id: "id"
  },
  standalone: false,
  features: [\u0275\u0275NgOnChangesFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormlyAttributes, [{
    type: Directive,
    args: [{
      selector: "[formlyAttributes]",
      host: {
        "(change)": "onHostChange($event)"
      }
    }]
  }], function() {
    return [{
      type: Renderer2
    }, {
      type: ElementRef
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [DOCUMENT]
      }]
    }];
  }, {
    field: [{
      type: Input,
      args: ["formlyAttributes"]
    }],
    id: [{
      type: Input
    }]
  });
})();
var FieldType = class {
  constructor() {
    this.field = {};
  }
  set _formlyControls(controls) {
    const f = this.field;
    f._localFields = controls.map((c) => c.control._fields || []).flat().filter((f2) => f2.formControl !== this.field.formControl);
  }
  get model() {
    return this.field.model;
  }
  get form() {
    return this.field.form;
  }
  get options() {
    return this.field.options;
  }
  get key() {
    return this.field.key;
  }
  get formControl() {
    return this.field.formControl;
  }
  get props() {
    return this.field.props || {};
  }
  /** @deprecated Use `props` instead. */
  get to() {
    return this.props;
  }
  get showError() {
    return this.options.showError(this);
  }
  get id() {
    return this.field.id;
  }
  get formState() {
    return this.options?.formState || {};
  }
};
FieldType.\u0275fac = function FieldType_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || FieldType)();
};
FieldType.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: FieldType,
  viewQuery: function FieldType_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(NgControl, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._formlyControls = _t);
    }
  },
  inputs: {
    field: "field"
  },
  standalone: false
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FieldType, [{
    type: Directive
  }], null, {
    _formlyControls: [{
      type: ViewChildren,
      args: [NgControl]
    }],
    field: [{
      type: Input
    }]
  });
})();
var FormlyGroup = class extends FieldType {
};
FormlyGroup.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275FormlyGroup_BaseFactory;
  return function FormlyGroup_Factory(__ngFactoryType__) {
    return (\u0275FormlyGroup_BaseFactory || (\u0275FormlyGroup_BaseFactory = \u0275\u0275getInheritedFactory(FormlyGroup)))(__ngFactoryType__ || FormlyGroup);
  };
})();
FormlyGroup.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: FormlyGroup,
  selectors: [["formly-group"]],
  hostVars: 2,
  hostBindings: function FormlyGroup_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classMap(ctx.field.fieldGroupClassName || "");
    }
  },
  standalone: false,
  features: [\u0275\u0275InheritDefinitionFeature],
  ngContentSelectors: _c1,
  decls: 2,
  vars: 1,
  consts: [[3, "field", 4, "ngFor", "ngForOf"], [3, "field"]],
  template: function FormlyGroup_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275template(0, FormlyGroup_formly_field_0_Template, 1, 1, "formly-field", 0);
      \u0275\u0275projection(1);
    }
    if (rf & 2) {
      \u0275\u0275property("ngForOf", ctx.field.fieldGroup);
    }
  },
  dependencies: [FormlyField, NgForOf],
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormlyGroup, [{
    type: Component,
    args: [{
      selector: "formly-group",
      template: `
    <formly-field *ngFor="let f of field.fieldGroup" [field]="f"></formly-field>
    <ng-content></ng-content>
  `,
      host: {
        "[class]": 'field.fieldGroupClassName || ""'
      },
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, null);
})();
var FormlyValidationMessage = class {
  constructor(config) {
    this.config = config;
  }
  ngOnChanges() {
    const EXPR_VALIDATORS = FORMLY_VALIDATORS.map((v) => `templateOptions.${v}`);
    this.errorMessage$ = merge(this.field.formControl.statusChanges, !this.field.options ? of(null) : this.field.options.fieldChanges.pipe(filter(({
      field,
      type,
      property
    }) => {
      return field === this.field && type === "expressionChanges" && (property.indexOf("validation") !== -1 || EXPR_VALIDATORS.indexOf(property) !== -1);
    }))).pipe(startWith(null), switchMap(() => isObservable(this.errorMessage) ? this.errorMessage : of(this.errorMessage)));
  }
  get errorMessage() {
    const fieldForm = this.field.formControl;
    for (const error in fieldForm.errors) {
      if (fieldForm.errors.hasOwnProperty(error)) {
        let message = this.config.getValidatorMessage(error);
        if (isObject(fieldForm.errors[error])) {
          if (fieldForm.errors[error].errorPath) {
            return void 0;
          }
          if (fieldForm.errors[error].message) {
            message = fieldForm.errors[error].message;
          }
        }
        if (this.field.validation?.messages?.[error]) {
          message = this.field.validation.messages[error];
        }
        if (this.field.validators?.[error]?.message) {
          message = this.field.validators[error].message;
        }
        if (this.field.asyncValidators?.[error]?.message) {
          message = this.field.asyncValidators[error].message;
        }
        if (typeof message === "function") {
          return message(fieldForm.errors[error], this.field);
        }
        return message;
      }
    }
    return void 0;
  }
};
FormlyValidationMessage.\u0275fac = function FormlyValidationMessage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || FormlyValidationMessage)(\u0275\u0275directiveInject(FormlyConfig));
};
FormlyValidationMessage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: FormlyValidationMessage,
  selectors: [["formly-validation-message"]],
  inputs: {
    field: "field"
  },
  standalone: false,
  features: [\u0275\u0275NgOnChangesFeature],
  decls: 2,
  vars: 3,
  template: function FormlyValidationMessage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275text(0);
      \u0275\u0275pipe(1, "async");
    }
    if (rf & 2) {
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(1, 1, ctx.errorMessage$));
    }
  },
  dependencies: [AsyncPipe],
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormlyValidationMessage, [{
    type: Component,
    args: [{
      selector: "formly-validation-message",
      template: "{{ errorMessage$ | async }}",
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], function() {
    return [{
      type: FormlyConfig
    }];
  }, {
    field: [{
      type: Input
    }]
  });
})();
var FieldArrayType = class extends FieldType {
  onPopulate(field) {
    if (hasKey(field)) {
      const control = findControl(field);
      registerControl(field, control ? control : new FormArray([], {
        updateOn: field.modelOptions.updateOn
      }));
    }
    field.fieldGroup = field.fieldGroup || [];
    const length = Array.isArray(field.model) ? field.model.length : 0;
    if (field.fieldGroup.length > length) {
      for (let i = field.fieldGroup.length - 1; i >= length; --i) {
        unregisterControl(field.fieldGroup[i], true);
        field.fieldGroup.splice(i, 1);
      }
    }
    for (let i = field.fieldGroup.length; i < length; i++) {
      const f = __spreadValues({}, clone(typeof field.fieldArray === "function" ? field.fieldArray(field) : field.fieldArray));
      if (f.key !== null) {
        f.key = `${i}`;
      }
      field.fieldGroup.push(f);
    }
  }
  add(i, initialModel, {
    markAsDirty
  } = {
    markAsDirty: true
  }) {
    markAsDirty && this.formControl.markAsDirty();
    i = i == null ? this.field.fieldGroup.length : i;
    if (!this.model) {
      assignFieldValue(this.field, []);
    }
    this.model.splice(i, 0, initialModel ? clone(initialModel) : void 0);
    this.markFieldForCheck(this.field.fieldGroup[i]);
    this._build();
  }
  remove(i, {
    markAsDirty
  } = {
    markAsDirty: true
  }) {
    markAsDirty && this.formControl.markAsDirty();
    this.model.splice(i, 1);
    const field = this.field.fieldGroup[i];
    this.field.fieldGroup.splice(i, 1);
    this.field.fieldGroup.forEach((f, key) => this.updateArrayElementKey(f, `${key}`));
    unregisterControl(field, true);
    this._build();
  }
  _build() {
    const fields = this.field.formControl._fields ?? [this.field];
    fields.forEach((f) => this.options.build(f));
    this.options.fieldChanges.next({
      field: this.field,
      value: getFieldValue(this.field),
      type: "valueChanges"
    });
  }
  updateArrayElementKey(f, newKey) {
    if (hasKey(f)) {
      f.key = newKey;
      return;
    }
    if (!f.fieldGroup?.length) {
      return;
    }
    for (let i = 0; i < f.fieldGroup.length; i++) {
      this.updateArrayElementKey(f.fieldGroup[i], newKey);
    }
  }
  markFieldForCheck(f) {
    if (!f) {
      return;
    }
    f.fieldGroup?.forEach((c) => this.markFieldForCheck(c));
    if (f.hide === false) {
      this.options._hiddenFieldsForCheck.push({
        field: f
      });
    }
  }
};
FieldArrayType.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275FieldArrayType_BaseFactory;
  return function FieldArrayType_Factory(__ngFactoryType__) {
    return (\u0275FieldArrayType_BaseFactory || (\u0275FieldArrayType_BaseFactory = \u0275\u0275getInheritedFactory(FieldArrayType)))(__ngFactoryType__ || FieldArrayType);
  };
})();
FieldArrayType.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: FieldArrayType,
  standalone: false,
  features: [\u0275\u0275InheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FieldArrayType, [{
    type: Directive
  }], null, null);
})();
var FieldWrapper = class extends FieldType {
  set _formlyControls(_) {
  }
  set _staticContent(content) {
    this.fieldComponent = content;
  }
};
FieldWrapper.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275FieldWrapper_BaseFactory;
  return function FieldWrapper_Factory(__ngFactoryType__) {
    return (\u0275FieldWrapper_BaseFactory || (\u0275FieldWrapper_BaseFactory = \u0275\u0275getInheritedFactory(FieldWrapper)))(__ngFactoryType__ || FieldWrapper);
  };
})();
FieldWrapper.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: FieldWrapper,
  viewQuery: function FieldWrapper_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c2, 5, ViewContainerRef);
      \u0275\u0275viewQuery(_c2, 7, ViewContainerRef);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.fieldComponent = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._staticContent = _t.first);
    }
  },
  standalone: false,
  features: [\u0275\u0275InheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FieldWrapper, [{
    type: Directive
  }], null, {
    fieldComponent: [{
      type: ViewChild,
      args: ["fieldComponent", {
        read: ViewContainerRef
      }]
    }],
    _staticContent: [{
      type: ViewChild,
      args: ["fieldComponent", {
        read: ViewContainerRef,
        static: true
      }]
    }]
  });
})();
var FormlyTemplateType = class extends FieldType {
  constructor(sanitizer) {
    super();
    this.sanitizer = sanitizer;
    this.innerHtml = {};
  }
  get template() {
    if (this.field && this.field.template !== this.innerHtml.template) {
      this.innerHtml = {
        template: this.field.template,
        content: this.props.safeHtml ? this.sanitizer.bypassSecurityTrustHtml(this.field.template) : this.field.template
      };
    }
    return this.innerHtml.content;
  }
};
FormlyTemplateType.\u0275fac = function FormlyTemplateType_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || FormlyTemplateType)(\u0275\u0275directiveInject(DomSanitizer));
};
FormlyTemplateType.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: FormlyTemplateType,
  selectors: [["formly-template"]],
  standalone: false,
  features: [\u0275\u0275InheritDefinitionFeature],
  decls: 1,
  vars: 1,
  consts: [[3, "innerHtml"]],
  template: function FormlyTemplateType_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("innerHtml", ctx.template, \u0275\u0275sanitizeHtml);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormlyTemplateType, [{
    type: Component,
    args: [{
      selector: "formly-template",
      template: `<div [innerHtml]="template"></div>`,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], function() {
    return [{
      type: DomSanitizer
    }];
  }, null);
})();
function evalStringExpression(expression, argNames) {
  try {
    return Function(...argNames, `return ${expression};`);
  } catch (error) {
    console.error(error);
  }
}
function evalExpression(expression, thisArg, argVal) {
  if (typeof expression === "function") {
    return expression.apply(thisArg, argVal);
  } else {
    return expression ? true : false;
  }
}
var FieldExpressionExtension = class {
  onPopulate(field) {
    if (field._expressions) {
      return;
    }
    defineHiddenProp(field, "_expressions", {});
    observe(field, ["hide"], ({
      currentValue,
      firstChange
    }) => {
      defineHiddenProp(field, "_hide", !!currentValue);
      if (!firstChange || firstChange && currentValue === true) {
        field.props.hidden = currentValue;
        field.options._hiddenFieldsForCheck.push({
          field
        });
      }
    });
    if (field.hideExpression) {
      observe(field, ["hideExpression"], ({
        currentValue: expr
      }) => {
        field._expressions.hide = this.parseExpressions(field, "hide", typeof expr === "boolean" ? () => expr : expr);
      });
    }
    const evalExpr = (key, expr) => {
      if (typeof expr === "string" || isFunction(expr)) {
        field._expressions[key] = this.parseExpressions(field, key, expr);
      } else if (expr instanceof Observable) {
        field._expressions[key] = {
          value$: expr.pipe(tap((v) => {
            this.evalExpr(field, key, v);
            field.options._detectChanges(field);
          }))
        };
      }
    };
    field.expressions = field.expressions || {};
    for (const key of Object.keys(field.expressions)) {
      observe(field, ["expressions", key], ({
        currentValue: expr
      }) => {
        evalExpr(key, isFunction(expr) ? (...args) => expr(field, args[3]) : expr);
      });
    }
    field.expressionProperties = field.expressionProperties || {};
    for (const key of Object.keys(field.expressionProperties)) {
      observe(field, ["expressionProperties", key], ({
        currentValue
      }) => evalExpr(key, currentValue));
    }
  }
  postPopulate(field) {
    if (field.parent) {
      return;
    }
    if (!field.options.checkExpressions) {
      let checkLocked = false;
      field.options.checkExpressions = (f, ignoreCache) => {
        if (checkLocked) {
          return;
        }
        checkLocked = true;
        const fieldChanged = this.checkExpressions(f, ignoreCache);
        const options = field.options;
        options._hiddenFieldsForCheck.sort((f2) => f2.field.hide ? -1 : 1).forEach((f2) => this.changeHideState(f2.field, f2.field.hide ?? f2.default, !ignoreCache));
        options._hiddenFieldsForCheck = [];
        if (fieldChanged) {
          this.checkExpressions(field);
        }
        checkLocked = false;
      };
      field.options._checkField = (f, ignoreCache) => {
        console.warn(`Formly: 'options._checkField' is deprecated since v6.0, use 'options.checkExpressions' instead.`);
        field.options.checkExpressions(f, ignoreCache);
      };
    }
  }
  parseExpressions(field, path, expr) {
    let parentExpression;
    if (field.parent && ["hide", "props.disabled"].includes(path)) {
      const rootValue = (f) => {
        return path === "hide" ? f.hide : f.props.disabled;
      };
      parentExpression = () => {
        let root = field.parent;
        while (root.parent && !rootValue(root)) {
          root = root.parent;
        }
        return rootValue(root);
      };
    }
    expr = expr || (() => false);
    if (typeof expr === "string") {
      expr = evalStringExpression(expr, ["model", "formState", "field"]);
    }
    let currentValue;
    return {
      callback: (ignoreCache) => {
        try {
          const exprValue = evalExpression(parentExpression ? (...args) => parentExpression(field) || expr(...args) : expr, {
            field
          }, [field.model, field.options.formState, field, ignoreCache]);
          if (ignoreCache || currentValue !== exprValue && (!isObject(exprValue) || isObservable(exprValue) || JSON.stringify(exprValue) !== JSON.stringify(currentValue))) {
            currentValue = exprValue;
            this.evalExpr(field, path, exprValue);
            return true;
          }
          return false;
        } catch (error) {
          error.message = `[Formly Error] [Expression "${path}"] ${error.message}`;
          throw error;
        }
      }
    };
  }
  checkExpressions(field, ignoreCache = false) {
    if (!field) {
      return false;
    }
    let fieldChanged = false;
    if (field._expressions) {
      for (const key of Object.keys(field._expressions)) {
        field._expressions[key].callback?.(ignoreCache) && (fieldChanged = true);
      }
    }
    field.fieldGroup?.forEach((f) => this.checkExpressions(f, ignoreCache) && (fieldChanged = true));
    return fieldChanged;
  }
  changeDisabledState(field, value) {
    if (field.fieldGroup) {
      field.fieldGroup.filter((f) => !f._expressions.hasOwnProperty("props.disabled")).forEach((f) => this.changeDisabledState(f, value));
    }
    if (hasKey(field) && field.props.disabled !== value) {
      field.props.disabled = value;
    }
  }
  changeHideState(field, hide, resetOnHide) {
    if (field.fieldGroup) {
      field.fieldGroup.filter((f) => f && !f._expressions.hide).forEach((f) => this.changeHideState(f, hide, resetOnHide));
    }
    if (field.formControl && hasKey(field)) {
      defineHiddenProp(field, "_hide", !!(hide || field.hide));
      const c = field.formControl;
      if (c._fields?.length > 1) {
        updateValidity(c);
      }
      if (hide === true && (!c._fields || c._fields.every((f) => !!f._hide))) {
        unregisterControl(field, true);
        if (resetOnHide && field.resetOnHide) {
          assignFieldValue(field, void 0);
          field.formControl.reset({
            value: void 0,
            disabled: field.formControl.disabled
          });
          field.options.fieldChanges.next({
            value: void 0,
            field,
            type: "valueChanges"
          });
          if (field.fieldGroup && field.formControl instanceof FormArray) {
            field.fieldGroup.length = 0;
          }
        }
      } else if (hide === false) {
        if (field.resetOnHide && !isUndefined(field.defaultValue) && isUndefined(getFieldValue(field))) {
          assignFieldValue(field, field.defaultValue);
        }
        registerControl(field, void 0, true);
        if (field.resetOnHide && field.fieldArray && field.fieldGroup?.length !== field.model?.length) {
          field.options.build(field);
        }
      }
    }
    if (field.options.fieldChanges) {
      field.options.fieldChanges.next({
        field,
        type: "hidden",
        value: hide
      });
    }
  }
  evalExpr(field, prop, value) {
    if (prop.indexOf("model.") === 0) {
      const key = prop.replace(/^model\./, ""), parent = field.fieldGroup ? field : field.parent;
      let control = field?.key === key ? field.formControl : field.form.get(key);
      if (!control && field.get(key)) {
        control = field.get(key).formControl;
      }
      assignFieldValue({
        key,
        parent,
        model: field.model
      }, value);
      if (control && !(isNil(control.value) && isNil(value)) && control.value !== value) {
        control.patchValue(value);
      }
    } else {
      try {
        let target = field;
        const paths = this._evalExpressionPath(field, prop);
        const lastIndex = paths.length - 1;
        for (let i = 0; i < lastIndex; i++) {
          target = target[paths[i]];
        }
        target[paths[lastIndex]] = value;
      } catch (error) {
        error.message = `[Formly Error] [Expression "${prop}"] ${error.message}`;
        throw error;
      }
      if (["templateOptions.disabled", "props.disabled"].includes(prop) && hasKey(field)) {
        this.changeDisabledState(field, value);
      }
    }
    this.emitExpressionChanges(field, prop, value);
  }
  emitExpressionChanges(field, property, value) {
    if (!field.options.fieldChanges) {
      return;
    }
    field.options.fieldChanges.next({
      field,
      type: "expressionChanges",
      property,
      value
    });
  }
  _evalExpressionPath(field, prop) {
    if (field._expressions[prop] && field._expressions[prop].paths) {
      return field._expressions[prop].paths;
    }
    let paths = [];
    if (prop.indexOf("[") === -1) {
      paths = prop.split(".");
    } else {
      prop.split(/[[\]]{1,2}/).filter((p) => p).forEach((path) => {
        const arrayPath = path.match(/['|"](.*?)['|"]/);
        if (arrayPath) {
          paths.push(arrayPath[1]);
        } else {
          paths.push(...path.split(".").filter((p) => p));
        }
      });
    }
    if (field._expressions[prop]) {
      field._expressions[prop].paths = paths;
    }
    return paths;
  }
};
var FieldValidationExtension = class {
  constructor(config) {
    this.config = config;
  }
  onPopulate(field) {
    this.initFieldValidation(field, "validators");
    this.initFieldValidation(field, "asyncValidators");
  }
  initFieldValidation(field, type) {
    const validators = [];
    if (type === "validators" && !(field.hasOwnProperty("fieldGroup") && !hasKey(field))) {
      validators.push(this.getPredefinedFieldValidation(field));
    }
    if (field[type]) {
      for (const validatorName of Object.keys(field[type])) {
        validatorName === "validation" ? validators.push(...field[type].validation.map((v) => this.wrapNgValidatorFn(field, v))) : validators.push(this.wrapNgValidatorFn(field, field[type][validatorName], validatorName));
      }
    }
    defineHiddenProp(field, "_" + type, validators);
  }
  getPredefinedFieldValidation(field) {
    let VALIDATORS = [];
    FORMLY_VALIDATORS.forEach((opt) => observe(field, ["props", opt], ({
      currentValue,
      firstChange
    }) => {
      VALIDATORS = VALIDATORS.filter((o) => o !== opt);
      if (opt === "required" && currentValue != null && typeof currentValue !== "boolean") {
        console.warn(`Formly: Invalid prop 'required' of type '${typeof currentValue}', expected 'boolean' (Field:${field.key}).`);
      }
      if (currentValue != null && currentValue !== false) {
        VALIDATORS.push(opt);
      }
      if (!firstChange && field.formControl) {
        updateValidity(field.formControl);
      }
    }));
    return (control) => {
      if (VALIDATORS.length === 0) {
        return null;
      }
      return Validators.compose(VALIDATORS.map((opt) => () => {
        const value = field.props[opt];
        switch (opt) {
          case "required":
            return Validators.required(control);
          case "pattern":
            return Validators.pattern(value)(control);
          case "minLength":
            const minLengthResult = Validators.minLength(value)(control);
            const minLengthKey = this.config.getValidatorMessage("minlength") || field.validation?.messages?.minlength ? "minlength" : "minLength";
            return minLengthResult ? {
              [minLengthKey]: minLengthResult.minlength
            } : null;
          case "maxLength":
            const maxLengthResult = Validators.maxLength(value)(control);
            const maxLengthKey = this.config.getValidatorMessage("maxlength") || field.validation?.messages?.maxlength ? "maxlength" : "maxLength";
            return maxLengthResult ? {
              [maxLengthKey]: maxLengthResult.maxlength
            } : null;
          case "min":
            return Validators.min(value)(control);
          case "max":
            return Validators.max(value)(control);
          default:
            return null;
        }
      }))(control);
    };
  }
  wrapNgValidatorFn(field, validator, validatorName) {
    let validatorOption;
    if (typeof validator === "string") {
      validatorOption = clone(this.config.getValidator(validator));
    }
    if (typeof validator === "object" && validator.name) {
      validatorOption = clone(this.config.getValidator(validator.name));
      if (validator.options) {
        validatorOption.options = validator.options;
      }
    }
    if (typeof validator === "object" && validator.expression) {
      const _a = validator, {
        expression
      } = _a, options = __objRest(_a, [
        "expression"
      ]);
      validatorOption = {
        name: validatorName,
        validation: expression,
        options: Object.keys(options).length > 0 ? options : null
      };
    }
    if (typeof validator === "function") {
      validatorOption = {
        name: validatorName,
        validation: validator
      };
    }
    return (control) => {
      const errors = validatorOption.validation(control, field, validatorOption.options);
      if (isPromise(errors)) {
        return errors.then((v) => this.handleResult(field, validatorName ? !!v : v, validatorOption));
      }
      if (isObservable(errors)) {
        return errors.pipe(map((v) => this.handleResult(field, validatorName ? !!v : v, validatorOption)));
      }
      return this.handleResult(field, validatorName ? !!errors : errors, validatorOption);
    };
  }
  handleResult(field, errors, {
    name,
    options
  }) {
    if (typeof errors === "boolean") {
      errors = errors ? null : {
        [name]: options ? options : true
      };
    }
    const ctrl = field.formControl;
    ctrl?._childrenErrors?.[name]?.();
    if (isObject(errors)) {
      Object.keys(errors).forEach((name2) => {
        const errorPath = errors[name2].errorPath ? errors[name2].errorPath : options?.errorPath;
        const childCtrl = errorPath ? field.formControl.get(errorPath) : null;
        if (childCtrl) {
          const _a = errors[name2], {
            errorPath: _errorPath
          } = _a, opts = __objRest(_a, [
            "errorPath"
          ]);
          childCtrl.setErrors(__spreadProps(__spreadValues({}, childCtrl.errors || {}), {
            [name2]: opts
          }));
          !ctrl._childrenErrors && defineHiddenProp(ctrl, "_childrenErrors", {});
          ctrl._childrenErrors[name2] = () => {
            const _a2 = childCtrl.errors || {}, {
              [name2]: _toDelete
            } = _a2, childErrors = __objRest(_a2, [
              __restKey(name2)
            ]);
            childCtrl.setErrors(Object.keys(childErrors).length === 0 ? null : childErrors);
          };
        }
      });
    }
    return errors;
  }
};
var FieldFormExtension = class {
  prePopulate(field) {
    if (!this.root) {
      this.root = field;
    }
    if (field.parent) {
      Object.defineProperty(field, "form", {
        get: () => field.parent.formControl,
        configurable: true
      });
    }
  }
  onPopulate(field) {
    if (field.hasOwnProperty("fieldGroup") && !hasKey(field)) {
      defineHiddenProp(field, "formControl", field.form);
    } else {
      this.addFormControl(field);
    }
  }
  postPopulate(field) {
    if (this.root !== field) {
      return;
    }
    this.root = null;
    const markForCheck = this.setValidators(field);
    if (markForCheck && field.parent) {
      let parent = field.parent;
      while (parent) {
        if (hasKey(parent) || !parent.parent) {
          updateValidity(parent.formControl, true);
        }
        parent = parent.parent;
      }
    }
  }
  addFormControl(field) {
    let control = findControl(field);
    if (field.fieldArray) {
      return;
    }
    if (!control) {
      const controlOptions = {
        updateOn: field.modelOptions.updateOn
      };
      if (field.fieldGroup) {
        control = new FormGroup({}, controlOptions);
      } else {
        const value = hasKey(field) ? getFieldValue(field) : field.defaultValue;
        control = new FormControl({
          value,
          disabled: !!field.props.disabled
        }, __spreadProps(__spreadValues({}, controlOptions), {
          initialValueIsDefault: true
        }));
      }
    } else {
      if (control instanceof FormControl) {
        const value = hasKey(field) ? getFieldValue(field) : field.defaultValue;
        control.defaultValue = value;
      }
    }
    registerControl(field, control);
  }
  setValidators(field, disabled = false) {
    if (disabled === false && hasKey(field) && field.props?.disabled) {
      disabled = true;
    }
    let markForCheck = false;
    field.fieldGroup?.forEach((f) => f && this.setValidators(f, disabled) && (markForCheck = true));
    if (hasKey(field) || !field.parent || !hasKey(field) && !field.fieldGroup) {
      const {
        formControl: c
      } = field;
      if (c) {
        if (hasKey(field) && c instanceof FormControl) {
          if (disabled && c.enabled) {
            c.disable({
              emitEvent: false,
              onlySelf: true
            });
            markForCheck = true;
          }
          if (!disabled && c.disabled) {
            c.enable({
              emitEvent: false,
              onlySelf: true
            });
            markForCheck = true;
          }
        }
        if (null === c.validator && this.hasValidators(field, "_validators")) {
          c.setValidators(() => {
            const v = Validators.compose(this.mergeValidators(field, "_validators"));
            return v ? v(c) : null;
          });
          markForCheck = true;
        }
        if (null === c.asyncValidator && this.hasValidators(field, "_asyncValidators")) {
          c.setAsyncValidators(() => {
            const v = Validators.composeAsync(this.mergeValidators(field, "_asyncValidators"));
            return v ? v(c) : of(null);
          });
          markForCheck = true;
        }
        if (markForCheck) {
          updateValidity(c, true);
          let parent = c.parent;
          for (let i = 1; i < getKeyPath(field).length; i++) {
            if (parent) {
              updateValidity(parent, true);
              parent = parent.parent;
            }
          }
        }
      }
    }
    return markForCheck;
  }
  hasValidators(field, type) {
    const c = field.formControl;
    if (c?._fields?.length > 1 && c._fields.some((f) => f[type].length > 0)) {
      return true;
    } else if (field[type].length > 0) {
      return true;
    }
    return field.fieldGroup?.some((f) => f?.fieldGroup && !hasKey(f) && this.hasValidators(f, type));
  }
  mergeValidators(field, type) {
    const validators = [];
    const c = field.formControl;
    if (c?._fields?.length > 1) {
      c._fields.filter((f) => !f._hide).forEach((f) => validators.push(...f[type]));
    } else if (field[type]) {
      validators.push(...field[type]);
    }
    if (field.fieldGroup) {
      field.fieldGroup.filter((f) => f?.fieldGroup && !hasKey(f)).forEach((f) => validators.push(...this.mergeValidators(f, type)));
    }
    return validators;
  }
};
var CoreExtension = class {
  constructor(config) {
    this.config = config;
    this.formId = 0;
  }
  prePopulate(field) {
    const root = field.parent;
    this.initRootOptions(field);
    this.initFieldProps(field);
    if (root) {
      Object.defineProperty(field, "options", {
        get: () => root.options,
        configurable: true
      });
      Object.defineProperty(field, "model", {
        get: () => hasKey(field) && field.fieldGroup ? getFieldValue(field) : root.model,
        configurable: true
      });
    }
    Object.defineProperty(field, "get", {
      value: (key) => getField(field, key),
      configurable: true
    });
    this.getFieldComponentInstance(field).prePopulate?.(field);
  }
  onPopulate(field) {
    this.initFieldOptions(field);
    this.getFieldComponentInstance(field).onPopulate?.(field);
    if (field.fieldGroup) {
      field.fieldGroup.forEach((f, index) => {
        if (f) {
          Object.defineProperty(f, "parent", {
            get: () => field,
            configurable: true
          });
          Object.defineProperty(f, "index", {
            get: () => index,
            configurable: true
          });
        }
        this.formId++;
      });
    }
  }
  postPopulate(field) {
    this.getFieldComponentInstance(field).postPopulate?.(field);
  }
  initFieldProps(field) {
    field.props ?? (field.props = field.templateOptions);
    Object.defineProperty(field, "templateOptions", {
      get: () => field.props,
      set: (props) => field.props = props,
      configurable: true
    });
  }
  initRootOptions(field) {
    if (field.parent) {
      return;
    }
    const options = field.options;
    field.options.formState = field.options.formState || {};
    if (!options.showError) {
      options.showError = this.config.extras.showError;
    }
    if (!options.fieldChanges) {
      defineHiddenProp(options, "fieldChanges", new Subject());
    }
    if (!options._hiddenFieldsForCheck) {
      options._hiddenFieldsForCheck = [];
    }
    options._markForCheck = (f) => {
      console.warn(`Formly: 'options._markForCheck' is deprecated since v6.0, use 'options.detectChanges' instead.`);
      options.detectChanges(f);
    };
    options._detectChanges = (f) => {
      if (f._componentRefs) {
        markFieldForCheck(f);
      }
      f.fieldGroup?.forEach((f2) => f2 && options._detectChanges(f2));
    };
    options.detectChanges = (f) => {
      f.options.checkExpressions?.(f);
      options._detectChanges(f);
    };
    options.resetModel = (model2) => {
      model2 = clone(model2 ?? options._initialModel);
      if (field.model) {
        Object.keys(field.model).forEach((k) => delete field.model[k]);
        Object.assign(field.model, model2 || {});
      }
      if (!isSignalRequired()) {
        observe(options, ["parentForm", "submitted"]).setValue(false, false);
      }
      options.build(field);
      field.form.reset(field.model);
    };
    options.updateInitialValue = (model2) => options._initialModel = clone(model2 ?? field.model);
    field.options.updateInitialValue();
  }
  initFieldOptions(field) {
    reverseDeepMerge(field, {
      id: getFieldId(`formly_${this.formId}`, field, field.index),
      hooks: {},
      modelOptions: {},
      validation: {
        messages: {}
      },
      props: !field.type || !hasKey(field) ? {} : {
        label: "",
        placeholder: "",
        disabled: false
      }
    });
    if (this.config.extras.resetFieldOnHide && field.resetOnHide !== false) {
      field.resetOnHide = true;
    }
    if (field.type !== "formly-template" && (field.template || field.expressions?.template || field.expressionProperties?.template)) {
      field.type = "formly-template";
    }
    if (!field.type && field.fieldGroup) {
      field.type = "formly-group";
    }
    if (field.type) {
      this.config.getMergedField(field);
    }
    if (hasKey(field) && !isUndefined(field.defaultValue) && isUndefined(getFieldValue(field)) && !isHiddenField(field)) {
      assignFieldValue(field, field.defaultValue);
    }
    field.wrappers = field.wrappers || [];
  }
  getFieldComponentInstance(field) {
    const componentRefInstance = () => {
      let componentRef = this.config.resolveFieldTypeRef(field);
      const fieldComponentRef = field._componentRefs?.slice(-1)[0];
      if (fieldComponentRef instanceof ComponentRef$1 && fieldComponentRef?.componentType === componentRef?.componentType) {
        componentRef = fieldComponentRef;
      }
      return componentRef?.instance;
    };
    if (!field._proxyInstance) {
      defineHiddenProp(field, "_proxyInstance", new Proxy({}, {
        get: (_, prop) => componentRefInstance()?.[prop],
        set: (_, prop, value) => componentRefInstance()[prop] = value
      }));
    }
    return field._proxyInstance;
  }
};
function defaultFormlyConfig(config) {
  return {
    types: [{
      name: "formly-group",
      component: FormlyGroup
    }, {
      name: "formly-template",
      component: FormlyTemplateType
    }],
    extensions: [{
      name: "core",
      extension: new CoreExtension(config),
      priority: -250
    }, {
      name: "field-validation",
      extension: new FieldValidationExtension(config),
      priority: -200
    }, {
      name: "field-form",
      extension: new FieldFormExtension(),
      priority: -150
    }, {
      name: "field-expression",
      extension: new FieldExpressionExtension(),
      priority: -100
    }]
  };
}
var FormlyModule = class _FormlyModule {
  constructor(configService, configs = []) {
    if (!configs) {
      return;
    }
    configs.forEach((config) => configService.addConfig(config));
  }
  static forRoot(config = {}) {
    return {
      ngModule: _FormlyModule,
      providers: [{
        provide: FORMLY_CONFIG,
        multi: true,
        useFactory: defaultFormlyConfig,
        deps: [FormlyConfig]
      }, {
        provide: FORMLY_CONFIG,
        useValue: config,
        multi: true
      }, FormlyConfig, FormlyFormBuilder]
    };
  }
  static forChild(config = {}) {
    return {
      ngModule: _FormlyModule,
      providers: [{
        provide: FORMLY_CONFIG,
        multi: true,
        useFactory: defaultFormlyConfig,
        deps: [FormlyConfig]
      }, {
        provide: FORMLY_CONFIG,
        useValue: config,
        multi: true
      }, FormlyFormBuilder]
    };
  }
};
FormlyModule.\u0275fac = function FormlyModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || FormlyModule)(\u0275\u0275inject(FormlyConfig), \u0275\u0275inject(FORMLY_CONFIG, 8));
};
FormlyModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: FormlyModule,
  declarations: [FormlyTemplate, FormlyForm, FormlyField, FormlyAttributes, FormlyGroup, FormlyValidationMessage, FormlyTemplateType],
  imports: [CommonModule],
  exports: [FormlyTemplate, FormlyForm, FormlyField, FormlyAttributes, FormlyGroup, FormlyValidationMessage]
});
FormlyModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [[CommonModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormlyModule, [{
    type: NgModule,
    args: [{
      declarations: [FormlyTemplate, FormlyForm, FormlyField, FormlyAttributes, FormlyGroup, FormlyValidationMessage, FormlyTemplateType],
      exports: [FormlyTemplate, FormlyForm, FormlyField, FormlyAttributes, FormlyGroup, FormlyValidationMessage],
      imports: [CommonModule]
    }]
  }], function() {
    return [{
      type: FormlyConfig
    }, {
      type: void 0,
      decorators: [{
        type: Optional
      }, {
        type: Inject,
        args: [FORMLY_CONFIG]
      }]
    }];
  }, null);
})();

// node_modules/@angular/core/fesm2022/rxjs-interop.mjs
function outputToObservable(ref) {
  const destroyRef = getOutputDestroyRef(ref);
  return new Observable((observer) => {
    const unregisterOnDestroy = destroyRef?.onDestroy(() => observer.complete());
    const subscription = ref.subscribe((v) => observer.next(v));
    return () => {
      subscription.unsubscribe();
      unregisterOnDestroy?.();
    };
  });
}
function toObservable(source, options) {
  if (ngDevMode && !options?.injector) {
    assertInInjectionContext(toObservable);
  }
  const injector = options?.injector ?? inject(Injector);
  const subject = new ReplaySubject(1);
  const watcher = effect(() => {
    let value;
    try {
      value = source();
    } catch (err) {
      untracked(() => subject.error(err));
      return;
    }
    untracked(() => subject.next(value));
  }, { injector, manualCleanup: true });
  injector.get(DestroyRef).onDestroy(() => {
    watcher.destroy();
    subject.complete();
  });
  return subject.asObservable();
}
function toSignal(source, options) {
  typeof ngDevMode !== "undefined" && ngDevMode && assertNotInReactiveContext(toSignal, "Invoking `toSignal` causes new subscriptions every time. Consider moving `toSignal` outside of the reactive context and read the signal value where needed.");
  const requiresCleanup = !options?.manualCleanup;
  if (ngDevMode && requiresCleanup && !options?.injector) {
    assertInInjectionContext(toSignal);
  }
  const cleanupRef = requiresCleanup ? options?.injector?.get(DestroyRef) ?? inject(DestroyRef) : null;
  const equal = makeToSignalEqual(options?.equal);
  let state;
  if (options?.requireSync) {
    state = signal({
      kind: 0
      /* StateKind.NoValue */
    }, { equal });
  } else {
    state = signal({ kind: 1, value: options?.initialValue }, { equal });
  }
  let destroyUnregisterFn;
  const sub = source.subscribe({
    next: (value) => state.set({ kind: 1, value }),
    error: (error) => {
      state.set({ kind: 2, error });
      destroyUnregisterFn?.();
    },
    complete: () => {
      destroyUnregisterFn?.();
    }
    // Completion of the Observable is meaningless to the signal. Signals don't have a concept of
    // "complete".
  });
  if (options?.requireSync && state().kind === 0) {
    throw new RuntimeError(601, (typeof ngDevMode === "undefined" || ngDevMode) && "`toSignal()` called with `requireSync` but `Observable` did not emit synchronously.");
  }
  destroyUnregisterFn = cleanupRef?.onDestroy(sub.unsubscribe.bind(sub));
  return computed(() => {
    const current = state();
    switch (current.kind) {
      case 1:
        return current.value;
      case 2:
        throw current.error;
      case 0:
        throw new RuntimeError(601, (typeof ngDevMode === "undefined" || ngDevMode) && "`toSignal()` called with `requireSync` but `Observable` did not emit synchronously.");
    }
  }, { equal: options?.equal });
}
function makeToSignalEqual(userEquality = Object.is) {
  return (a, b) => a.kind === 1 && b.kind === 1 && userEquality(a.value, b.value);
}

// node_modules/@ng-matero/extensions/node_modules/@ng-select/ng-select/fesm2022/ng-select-ng-select.mjs
var _c02 = ["content"];
var _c12 = ["scroll"];
var _c22 = ["padding"];
var _c3 = ["*"];
var _c4 = (a0) => ({
  searchTerm: a0
});
function NgDropdownPanelComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275elementContainer(1, 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.headerTemplate())("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c4, ctx_r0.filterValue()));
  }
}
function NgDropdownPanelComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275elementContainer(1, 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.footerTemplate())("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c4, ctx_r0.filterValue()));
  }
}
var _c5 = ["searchInput"];
var _c6 = ["clearButton"];
var _c7 = (a0, a1, a2) => ({
  item: a0,
  clear: a1,
  label: a2
});
var _c8 = (a0, a1) => ({
  items: a0,
  clear: a1
});
var _c9 = (a0, a1, a2, a3) => ({
  item: a0,
  item$: a1,
  index: a2,
  searchTerm: a3
});
function NgSelectComponent_Conditional_2_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.placeholder() ?? ctx_r1.config.placeholder);
  }
}
function NgSelectComponent_Conditional_2_ng_template_2_Template(rf, ctx) {
}
function NgSelectComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NgSelectComponent_Conditional_2_ng_template_0_Template, 2, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(2, NgSelectComponent_Conditional_2_ng_template_2_Template, 0, 0, "ng-template", 19);
  }
  if (rf & 2) {
    const defaultPlaceholderTemplate_r3 = \u0275\u0275reference(1);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.placeholderTemplate() || defaultPlaceholderTemplate_r3);
  }
}
function NgSelectComponent_Conditional_3_For_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275listener("click", function NgSelectComponent_Conditional_3_For_1_ng_template_1_Template_span_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const item_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.unselect(item_r5));
    });
    \u0275\u0275text(1, "\xD7");
    \u0275\u0275elementEnd();
    \u0275\u0275element(2, "span", 24);
  }
  if (rf & 2) {
    const item_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngItemLabel", item_r5.label)("escape", ctx_r1.escapeHTML);
  }
}
function NgSelectComponent_Conditional_3_For_1_ng_template_3_Template(rf, ctx) {
}
function NgSelectComponent_Conditional_3_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275template(1, NgSelectComponent_Conditional_3_For_1_ng_template_1_Template, 3, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(3, NgSelectComponent_Conditional_3_For_1_ng_template_3_Template, 0, 0, "ng-template", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const defaultLabelTemplate_r6 = \u0275\u0275reference(2);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("ng-value-disabled", item_r5.disabled);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.labelTemplate() || defaultLabelTemplate_r6)("ngTemplateOutletContext", \u0275\u0275pureFunction3(4, _c7, item_r5.value, ctx_r1.clearItem, item_r5.label));
  }
}
function NgSelectComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, NgSelectComponent_Conditional_3_For_1_Template, 4, 8, "div", 21, \u0275\u0275componentInstance().trackByOption, true);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r1.selectedItems);
  }
}
function NgSelectComponent_Conditional_4_ng_template_0_Template(rf, ctx) {
}
function NgSelectComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NgSelectComponent_Conditional_4_ng_template_0_Template, 0, 0, "ng-template", 12);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.multiLabelTemplate())("ngTemplateOutletContext", \u0275\u0275pureFunction2(2, _c8, ctx_r1.selectedValues, ctx_r1.clearItem));
  }
}
function NgSelectComponent_Conditional_8_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 25);
  }
}
function NgSelectComponent_Conditional_8_ng_template_2_Template(rf, ctx) {
}
function NgSelectComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NgSelectComponent_Conditional_8_ng_template_0_Template, 1, 0, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(2, NgSelectComponent_Conditional_8_ng_template_2_Template, 0, 0, "ng-template", 19);
  }
  if (rf & 2) {
    const defaultLoadingSpinnerTemplate_r8 = \u0275\u0275reference(1);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.loadingSpinnerTemplate() || defaultLoadingSpinnerTemplate_r8);
  }
}
function NgSelectComponent_Conditional_9_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 19);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.clearButtonTemplate());
  }
}
function NgSelectComponent_Conditional_9_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 27, 4);
    \u0275\u0275listener("click", function NgSelectComponent_Conditional_9_Conditional_1_Template_span_click_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.handleClearClick($event));
    });
    \u0275\u0275elementStart(2, "span", 28);
    \u0275\u0275text(3, "\xD7");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("title", \u0275\u0275interpolate(ctx_r1.clearAllText() || ctx_r1.config.clearAllText));
    \u0275\u0275attribute("tabindex", ctx_r1.tabFocusOnClear() ? 0 : -1);
  }
}
function NgSelectComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, NgSelectComponent_Conditional_9_Conditional_0_Template, 1, 1, "ng-container", 19)(1, NgSelectComponent_Conditional_9_Conditional_1_Template, 4, 3, "span", 26);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.clearButtonTemplate() ? 0 : 1);
  }
}
function NgSelectComponent_Conditional_12_For_3_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 33);
  }
  if (rf & 2) {
    const item_r12 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngItemLabel", item_r12.label)("escape", ctx_r1.escapeHTML);
  }
}
function NgSelectComponent_Conditional_12_For_3_ng_template_3_Template(rf, ctx) {
}
function NgSelectComponent_Conditional_12_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275listener("click", function NgSelectComponent_Conditional_12_For_3_Template_div_click_0_listener() {
      const item_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleItem(item_r12));
    })("mouseover", function NgSelectComponent_Conditional_12_For_3_Template_div_mouseover_0_listener() {
      const item_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onItemHover(item_r12));
    });
    \u0275\u0275template(1, NgSelectComponent_Conditional_12_For_3_ng_template_1_Template, 1, 2, "ng-template", null, 5, \u0275\u0275templateRefExtractor)(3, NgSelectComponent_Conditional_12_For_3_ng_template_3_Template, 0, 0, "ng-template", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r12 = ctx.$implicit;
    const defaultOptionTemplate_r13 = \u0275\u0275reference(2);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("ng-option-disabled", item_r12.disabled)("ng-option-selected", item_r12.selected)("ng-optgroup", item_r12.children)("ng-option", !item_r12.children)("ng-option-child", !!item_r12.parent)("ng-option-marked", item_r12 === ctx_r1.itemsList.markedItem);
    \u0275\u0275attribute("role", item_r12.children ? "group" : "option")("aria-selected", item_r12.selected)("id", item_r12 == null ? null : item_r12.htmlId)("aria-setsize", ctx_r1.itemsList.filteredItems.length)("aria-posinset", item_r12.index + 1);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngTemplateOutlet", item_r12.children ? ctx_r1.optgroupTemplate() || defaultOptionTemplate_r13 : ctx_r1.optionTemplate() || defaultOptionTemplate_r13)("ngTemplateOutletContext", \u0275\u0275pureFunction4(19, _c9, item_r12.value, item_r12, item_r12.index, ctx_r1.searchTerm));
  }
}
function NgSelectComponent_Conditional_12_Conditional_4_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span")(1, "span", 35);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.addTagText() || ctx_r1.config.addTagText);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1('"', ctx_r1.searchTerm, '"');
  }
}
function NgSelectComponent_Conditional_12_Conditional_4_ng_template_3_Template(rf, ctx) {
}
function NgSelectComponent_Conditional_12_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275listener("mouseover", function NgSelectComponent_Conditional_12_Conditional_4_Template_div_mouseover_0_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.itemsList.unmarkItem());
    })("click", function NgSelectComponent_Conditional_12_Conditional_4_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectTag());
    });
    \u0275\u0275template(1, NgSelectComponent_Conditional_12_Conditional_4_ng_template_1_Template, 4, 2, "ng-template", null, 6, \u0275\u0275templateRefExtractor)(3, NgSelectComponent_Conditional_12_Conditional_4_ng_template_3_Template, 0, 0, "ng-template", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const defaultTagTemplate_r15 = \u0275\u0275reference(2);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("ng-option-marked", !ctx_r1.itemsList.markedItem);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.tagTemplate() || defaultTagTemplate_r15)("ngTemplateOutletContext", \u0275\u0275pureFunction1(4, _c4, ctx_r1.searchTerm));
  }
}
function NgSelectComponent_Conditional_12_Conditional_5_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.notFoundText() ?? ctx_r1.config.notFoundText);
  }
}
function NgSelectComponent_Conditional_12_Conditional_5_ng_template_2_Template(rf, ctx) {
}
function NgSelectComponent_Conditional_12_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NgSelectComponent_Conditional_12_Conditional_5_ng_template_0_Template, 2, 1, "ng-template", null, 7, \u0275\u0275templateRefExtractor)(2, NgSelectComponent_Conditional_12_Conditional_5_ng_template_2_Template, 0, 0, "ng-template", 12);
  }
  if (rf & 2) {
    const defaultNotFoundTemplate_r16 = \u0275\u0275reference(1);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.notFoundTemplate() || defaultNotFoundTemplate_r16)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c4, ctx_r1.searchTerm));
  }
}
function NgSelectComponent_Conditional_12_Conditional_6_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.typeToSearchText() || ctx_r1.config.typeToSearchText);
  }
}
function NgSelectComponent_Conditional_12_Conditional_6_ng_template_2_Template(rf, ctx) {
}
function NgSelectComponent_Conditional_12_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NgSelectComponent_Conditional_12_Conditional_6_ng_template_0_Template, 2, 1, "ng-template", null, 8, \u0275\u0275templateRefExtractor)(2, NgSelectComponent_Conditional_12_Conditional_6_ng_template_2_Template, 0, 0, "ng-template", 19);
  }
  if (rf & 2) {
    const defaultTypeToSearchTemplate_r17 = \u0275\u0275reference(1);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.typeToSearchTemplate() || defaultTypeToSearchTemplate_r17);
  }
}
function NgSelectComponent_Conditional_12_Conditional_7_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.loadingText() || ctx_r1.config.loadingText);
  }
}
function NgSelectComponent_Conditional_12_Conditional_7_ng_template_2_Template(rf, ctx) {
}
function NgSelectComponent_Conditional_12_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NgSelectComponent_Conditional_12_Conditional_7_ng_template_0_Template, 2, 1, "ng-template", null, 9, \u0275\u0275templateRefExtractor)(2, NgSelectComponent_Conditional_12_Conditional_7_ng_template_2_Template, 0, 0, "ng-template", 12);
  }
  if (rf & 2) {
    const defaultLoadingTextTemplate_r18 = \u0275\u0275reference(1);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.loadingTextTemplate() || defaultLoadingTextTemplate_r18)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c4, ctx_r1.searchTerm));
  }
}
function NgSelectComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ng-dropdown-panel", 29);
    \u0275\u0275listener("update", function NgSelectComponent_Conditional_12_Template_ng_dropdown_panel_update_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.viewPortItems = $event);
    })("scroll", function NgSelectComponent_Conditional_12_Template_ng_dropdown_panel_scroll_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.scroll.emit($event));
    })("scrollToEnd", function NgSelectComponent_Conditional_12_Template_ng_dropdown_panel_scrollToEnd_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.scrollToEnd.emit($event));
    })("outsideClick", function NgSelectComponent_Conditional_12_Template_ng_dropdown_panel_outsideClick_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275elementContainerStart(1);
    \u0275\u0275repeaterCreate(2, NgSelectComponent_Conditional_12_For_3_Template, 4, 24, "div", 30, \u0275\u0275componentInstance().trackByOption, true);
    \u0275\u0275conditionalCreate(4, NgSelectComponent_Conditional_12_Conditional_4_Template, 4, 6, "div", 31);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275conditionalCreate(5, NgSelectComponent_Conditional_12_Conditional_5_Template, 3, 4);
    \u0275\u0275conditionalCreate(6, NgSelectComponent_Conditional_12_Conditional_6_Template, 3, 1);
    \u0275\u0275conditionalCreate(7, NgSelectComponent_Conditional_12_Conditional_7_Template, 3, 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    const appendToValue_r19 = ctx_r1.appendTo() || ctx_r1.config.appendTo;
    \u0275\u0275classMap(appendToValue_r19 ? ctx_r1.ngClass() ? ctx_r1.ngClass() : ctx_r1.classes : null);
    \u0275\u0275classProp("ng-select-multiple", ctx_r1.multiple());
    \u0275\u0275property("virtualScroll", ctx_r1.virtualScroll() ?? !ctx_r1.config.disableVirtualScroll ?? false)("bufferAmount", ctx_r1.bufferAmount())("appendTo", appendToValue_r19)("position", ctx_r1.dropdownPosition())("headerTemplate", ctx_r1.headerTemplate())("footerTemplate", ctx_r1.footerTemplate())("filterValue", ctx_r1.searchTerm)("items", ctx_r1.itemsList.filteredItems)("markedItem", ctx_r1.itemsList.markedItem)("id", ctx_r1.dropdownId)("ariaLabelDropdown", ctx_r1.ariaLabelDropdown());
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.viewPortItems);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.showAddTag ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.showNoItemsFound() ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.showTypeToSearch() ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.loading() && ctx_r1.itemsList.filteredItems.length === 0 ? 7 : -1);
  }
}
function NgSelectComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", ctx_r1.notFoundText, " ");
  }
}
var unescapedHTMLExp = /[&<>"']/g;
var hasUnescapedHTMLExp = RegExp(unescapedHTMLExp.source);
var htmlEscapes = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
};
function escapeHTML(value) {
  return value && hasUnescapedHTMLExp.test(value) ? value.replace(unescapedHTMLExp, (chr) => htmlEscapes[chr]) : value;
}
function isDefined(value) {
  return value !== void 0 && value !== null;
}
function isObject2(value) {
  return typeof value === "object" && isDefined(value);
}
function isPromise2(value) {
  return value instanceof Promise;
}
function isFunction2(value) {
  return value instanceof Function;
}
var _NgItemLabelDirective = class _NgItemLabelDirective {
  constructor() {
    this.element = inject(ElementRef);
    this.ngItemLabel = input();
    this.escape = input(true);
    effect(() => {
      this.element.nativeElement.innerHTML = this.escape() ? escapeHTML(this.ngItemLabel()) : this.ngItemLabel();
    });
  }
};
_NgItemLabelDirective.\u0275fac = function NgItemLabelDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgItemLabelDirective)();
};
_NgItemLabelDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _NgItemLabelDirective,
  selectors: [["", "ngItemLabel", ""]],
  inputs: {
    ngItemLabel: [1, "ngItemLabel"],
    escape: [1, "escape"]
  }
});
var NgItemLabelDirective = _NgItemLabelDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgItemLabelDirective, [{
    type: Directive,
    args: [{
      selector: "[ngItemLabel]",
      standalone: true
    }]
  }], () => [], null);
})();
var _NgOptionTemplateDirective = class _NgOptionTemplateDirective {
  constructor() {
    this.template = inject(TemplateRef);
  }
};
_NgOptionTemplateDirective.\u0275fac = function NgOptionTemplateDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgOptionTemplateDirective)();
};
_NgOptionTemplateDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _NgOptionTemplateDirective,
  selectors: [["", "ng-option-tmp", ""]]
});
var NgOptionTemplateDirective = _NgOptionTemplateDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgOptionTemplateDirective, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: "[ng-option-tmp]",
      standalone: true
    }]
  }], null, null);
})();
var _NgOptgroupTemplateDirective = class _NgOptgroupTemplateDirective {
  constructor() {
    this.template = inject(TemplateRef);
  }
};
_NgOptgroupTemplateDirective.\u0275fac = function NgOptgroupTemplateDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgOptgroupTemplateDirective)();
};
_NgOptgroupTemplateDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _NgOptgroupTemplateDirective,
  selectors: [["", "ng-optgroup-tmp", ""]]
});
var NgOptgroupTemplateDirective = _NgOptgroupTemplateDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgOptgroupTemplateDirective, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: "[ng-optgroup-tmp]",
      standalone: true
    }]
  }], null, null);
})();
var _NgLabelTemplateDirective = class _NgLabelTemplateDirective {
  constructor() {
    this.template = inject(TemplateRef);
  }
};
_NgLabelTemplateDirective.\u0275fac = function NgLabelTemplateDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgLabelTemplateDirective)();
};
_NgLabelTemplateDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _NgLabelTemplateDirective,
  selectors: [["", "ng-label-tmp", ""]]
});
var NgLabelTemplateDirective = _NgLabelTemplateDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgLabelTemplateDirective, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: "[ng-label-tmp]",
      standalone: true
    }]
  }], null, null);
})();
var _NgMultiLabelTemplateDirective = class _NgMultiLabelTemplateDirective {
  constructor() {
    this.template = inject(TemplateRef);
  }
};
_NgMultiLabelTemplateDirective.\u0275fac = function NgMultiLabelTemplateDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgMultiLabelTemplateDirective)();
};
_NgMultiLabelTemplateDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _NgMultiLabelTemplateDirective,
  selectors: [["", "ng-multi-label-tmp", ""]]
});
var NgMultiLabelTemplateDirective = _NgMultiLabelTemplateDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgMultiLabelTemplateDirective, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: "[ng-multi-label-tmp]",
      standalone: true
    }]
  }], null, null);
})();
var _NgHeaderTemplateDirective = class _NgHeaderTemplateDirective {
  constructor() {
    this.template = inject(TemplateRef);
  }
};
_NgHeaderTemplateDirective.\u0275fac = function NgHeaderTemplateDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgHeaderTemplateDirective)();
};
_NgHeaderTemplateDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _NgHeaderTemplateDirective,
  selectors: [["", "ng-header-tmp", ""]]
});
var NgHeaderTemplateDirective = _NgHeaderTemplateDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgHeaderTemplateDirective, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: "[ng-header-tmp]",
      standalone: true
    }]
  }], null, null);
})();
var _NgFooterTemplateDirective = class _NgFooterTemplateDirective {
  constructor() {
    this.template = inject(TemplateRef);
  }
};
_NgFooterTemplateDirective.\u0275fac = function NgFooterTemplateDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgFooterTemplateDirective)();
};
_NgFooterTemplateDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _NgFooterTemplateDirective,
  selectors: [["", "ng-footer-tmp", ""]]
});
var NgFooterTemplateDirective = _NgFooterTemplateDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgFooterTemplateDirective, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: "[ng-footer-tmp]",
      standalone: true
    }]
  }], null, null);
})();
var _NgNotFoundTemplateDirective = class _NgNotFoundTemplateDirective {
  constructor() {
    this.template = inject(TemplateRef);
  }
};
_NgNotFoundTemplateDirective.\u0275fac = function NgNotFoundTemplateDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgNotFoundTemplateDirective)();
};
_NgNotFoundTemplateDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _NgNotFoundTemplateDirective,
  selectors: [["", "ng-notfound-tmp", ""]]
});
var NgNotFoundTemplateDirective = _NgNotFoundTemplateDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgNotFoundTemplateDirective, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: "[ng-notfound-tmp]",
      standalone: true
    }]
  }], null, null);
})();
var _NgPlaceholderTemplateDirective = class _NgPlaceholderTemplateDirective {
  constructor() {
    this.template = inject(TemplateRef);
  }
};
_NgPlaceholderTemplateDirective.\u0275fac = function NgPlaceholderTemplateDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgPlaceholderTemplateDirective)();
};
_NgPlaceholderTemplateDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _NgPlaceholderTemplateDirective,
  selectors: [["", "ng-placeholder-tmp", ""]]
});
var NgPlaceholderTemplateDirective = _NgPlaceholderTemplateDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgPlaceholderTemplateDirective, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: "[ng-placeholder-tmp]",
      standalone: true
    }]
  }], null, null);
})();
var _NgTypeToSearchTemplateDirective = class _NgTypeToSearchTemplateDirective {
  constructor() {
    this.template = inject(TemplateRef);
  }
};
_NgTypeToSearchTemplateDirective.\u0275fac = function NgTypeToSearchTemplateDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgTypeToSearchTemplateDirective)();
};
_NgTypeToSearchTemplateDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _NgTypeToSearchTemplateDirective,
  selectors: [["", "ng-typetosearch-tmp", ""]]
});
var NgTypeToSearchTemplateDirective = _NgTypeToSearchTemplateDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgTypeToSearchTemplateDirective, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: "[ng-typetosearch-tmp]",
      standalone: true
    }]
  }], null, null);
})();
var _NgLoadingTextTemplateDirective = class _NgLoadingTextTemplateDirective {
  constructor() {
    this.template = inject(TemplateRef);
  }
};
_NgLoadingTextTemplateDirective.\u0275fac = function NgLoadingTextTemplateDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgLoadingTextTemplateDirective)();
};
_NgLoadingTextTemplateDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _NgLoadingTextTemplateDirective,
  selectors: [["", "ng-loadingtext-tmp", ""]]
});
var NgLoadingTextTemplateDirective = _NgLoadingTextTemplateDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgLoadingTextTemplateDirective, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: "[ng-loadingtext-tmp]",
      standalone: true
    }]
  }], null, null);
})();
var _NgTagTemplateDirective = class _NgTagTemplateDirective {
  constructor() {
    this.template = inject(TemplateRef);
  }
};
_NgTagTemplateDirective.\u0275fac = function NgTagTemplateDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgTagTemplateDirective)();
};
_NgTagTemplateDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _NgTagTemplateDirective,
  selectors: [["", "ng-tag-tmp", ""]]
});
var NgTagTemplateDirective = _NgTagTemplateDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgTagTemplateDirective, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: "[ng-tag-tmp]",
      standalone: true
    }]
  }], null, null);
})();
var _NgLoadingSpinnerTemplateDirective = class _NgLoadingSpinnerTemplateDirective {
  constructor() {
    this.template = inject(TemplateRef);
  }
};
_NgLoadingSpinnerTemplateDirective.\u0275fac = function NgLoadingSpinnerTemplateDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgLoadingSpinnerTemplateDirective)();
};
_NgLoadingSpinnerTemplateDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _NgLoadingSpinnerTemplateDirective,
  selectors: [["", "ng-loadingspinner-tmp", ""]]
});
var NgLoadingSpinnerTemplateDirective = _NgLoadingSpinnerTemplateDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgLoadingSpinnerTemplateDirective, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: "[ng-loadingspinner-tmp]",
      standalone: true
    }]
  }], null, null);
})();
var _NgClearButtonTemplateDirective = class _NgClearButtonTemplateDirective {
  constructor() {
    this.template = inject(TemplateRef);
  }
};
_NgClearButtonTemplateDirective.\u0275fac = function NgClearButtonTemplateDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgClearButtonTemplateDirective)();
};
_NgClearButtonTemplateDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _NgClearButtonTemplateDirective,
  selectors: [["", "ng-clearbutton-tmp", ""]]
});
var NgClearButtonTemplateDirective = _NgClearButtonTemplateDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgClearButtonTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[ng-clearbutton-tmp]",
      standalone: true
    }]
  }], null, null);
})();
var _NgSelectConfig = class _NgSelectConfig {
  constructor() {
    this.fixedPlaceholder = true;
    this.notFoundText = "No items found";
    this.typeToSearchText = "Type to search";
    this.addTagText = "Add item";
    this.loadingText = "Loading...";
    this.clearAllText = "Clear all";
    this.disableVirtualScroll = true;
    this.openOnEnter = true;
    this.appearance = "underline";
    this.tabFocusOnClear = true;
  }
};
_NgSelectConfig.\u0275fac = function NgSelectConfig_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgSelectConfig)();
};
_NgSelectConfig.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _NgSelectConfig,
  factory: _NgSelectConfig.\u0275fac,
  providedIn: "root"
});
var NgSelectConfig = _NgSelectConfig;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgSelectConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var _ConsoleService = class _ConsoleService {
  warn(message) {
    console.warn(message);
  }
};
_ConsoleService.\u0275fac = function ConsoleService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ConsoleService)();
};
_ConsoleService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _ConsoleService,
  factory: _ConsoleService.\u0275fac,
  providedIn: "root"
});
var ConsoleService = _ConsoleService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConsoleService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
function newId() {
  return "axxxxxxxxxxx".replace(/[x]/g, () => {
    const val = Math.random() * 16 | 0;
    return val.toString(16);
  });
}
var diacritics = {
  "\u24B6": "A",
  "\uFF21": "A",
  "\xC0": "A",
  "\xC1": "A",
  "\xC2": "A",
  "\u1EA6": "A",
  "\u1EA4": "A",
  "\u1EAA": "A",
  "\u1EA8": "A",
  "\xC3": "A",
  "\u0100": "A",
  "\u0102": "A",
  "\u1EB0": "A",
  "\u1EAE": "A",
  "\u1EB4": "A",
  "\u1EB2": "A",
  "\u0226": "A",
  "\u01E0": "A",
  "\xC4": "A",
  "\u01DE": "A",
  "\u1EA2": "A",
  "\xC5": "A",
  "\u01FA": "A",
  "\u01CD": "A",
  "\u0200": "A",
  "\u0202": "A",
  "\u1EA0": "A",
  "\u1EAC": "A",
  "\u1EB6": "A",
  "\u1E00": "A",
  "\u0104": "A",
  "\u023A": "A",
  "\u2C6F": "A",
  "\uA732": "AA",
  "\xC6": "AE",
  "\u01FC": "AE",
  "\u01E2": "AE",
  "\uA734": "AO",
  "\uA736": "AU",
  "\uA738": "AV",
  "\uA73A": "AV",
  "\uA73C": "AY",
  "\u24B7": "B",
  "\uFF22": "B",
  "\u1E02": "B",
  "\u1E04": "B",
  "\u1E06": "B",
  "\u0243": "B",
  "\u0182": "B",
  "\u0181": "B",
  "\u24B8": "C",
  "\uFF23": "C",
  "\u0106": "C",
  "\u0108": "C",
  "\u010A": "C",
  "\u010C": "C",
  "\xC7": "C",
  "\u1E08": "C",
  "\u0187": "C",
  "\u023B": "C",
  "\uA73E": "C",
  "\u24B9": "D",
  "\uFF24": "D",
  "\u1E0A": "D",
  "\u010E": "D",
  "\u1E0C": "D",
  "\u1E10": "D",
  "\u1E12": "D",
  "\u1E0E": "D",
  "\u0110": "D",
  "\u018B": "D",
  "\u018A": "D",
  "\u0189": "D",
  "\uA779": "D",
  "\u01F1": "DZ",
  "\u01C4": "DZ",
  "\u01F2": "Dz",
  "\u01C5": "Dz",
  "\u24BA": "E",
  "\uFF25": "E",
  "\xC8": "E",
  "\xC9": "E",
  "\xCA": "E",
  "\u1EC0": "E",
  "\u1EBE": "E",
  "\u1EC4": "E",
  "\u1EC2": "E",
  "\u1EBC": "E",
  "\u0112": "E",
  "\u1E14": "E",
  "\u1E16": "E",
  "\u0114": "E",
  "\u0116": "E",
  "\xCB": "E",
  "\u1EBA": "E",
  "\u011A": "E",
  "\u0204": "E",
  "\u0206": "E",
  "\u1EB8": "E",
  "\u1EC6": "E",
  "\u0228": "E",
  "\u1E1C": "E",
  "\u0118": "E",
  "\u1E18": "E",
  "\u1E1A": "E",
  "\u0190": "E",
  "\u018E": "E",
  "\u24BB": "F",
  "\uFF26": "F",
  "\u1E1E": "F",
  "\u0191": "F",
  "\uA77B": "F",
  "\u24BC": "G",
  "\uFF27": "G",
  "\u01F4": "G",
  "\u011C": "G",
  "\u1E20": "G",
  "\u011E": "G",
  "\u0120": "G",
  "\u01E6": "G",
  "\u0122": "G",
  "\u01E4": "G",
  "\u0193": "G",
  "\uA7A0": "G",
  "\uA77D": "G",
  "\uA77E": "G",
  "\u24BD": "H",
  "\uFF28": "H",
  "\u0124": "H",
  "\u1E22": "H",
  "\u1E26": "H",
  "\u021E": "H",
  "\u1E24": "H",
  "\u1E28": "H",
  "\u1E2A": "H",
  "\u0126": "H",
  "\u2C67": "H",
  "\u2C75": "H",
  "\uA78D": "H",
  "\u24BE": "I",
  "\uFF29": "I",
  "\xCC": "I",
  "\xCD": "I",
  "\xCE": "I",
  "\u0128": "I",
  "\u012A": "I",
  "\u012C": "I",
  "\u0130": "I",
  "\xCF": "I",
  "\u1E2E": "I",
  "\u1EC8": "I",
  "\u01CF": "I",
  "\u0208": "I",
  "\u020A": "I",
  "\u1ECA": "I",
  "\u012E": "I",
  "\u1E2C": "I",
  "\u0197": "I",
  "\u24BF": "J",
  "\uFF2A": "J",
  "\u0134": "J",
  "\u0248": "J",
  "\u24C0": "K",
  "\uFF2B": "K",
  "\u1E30": "K",
  "\u01E8": "K",
  "\u1E32": "K",
  "\u0136": "K",
  "\u1E34": "K",
  "\u0198": "K",
  "\u2C69": "K",
  "\uA740": "K",
  "\uA742": "K",
  "\uA744": "K",
  "\uA7A2": "K",
  "\u24C1": "L",
  "\uFF2C": "L",
  "\u013F": "L",
  "\u0139": "L",
  "\u013D": "L",
  "\u1E36": "L",
  "\u1E38": "L",
  "\u013B": "L",
  "\u1E3C": "L",
  "\u1E3A": "L",
  "\u0141": "L",
  "\u023D": "L",
  "\u2C62": "L",
  "\u2C60": "L",
  "\uA748": "L",
  "\uA746": "L",
  "\uA780": "L",
  "\u01C7": "LJ",
  "\u01C8": "Lj",
  "\u24C2": "M",
  "\uFF2D": "M",
  "\u1E3E": "M",
  "\u1E40": "M",
  "\u1E42": "M",
  "\u2C6E": "M",
  "\u019C": "M",
  "\u24C3": "N",
  "\uFF2E": "N",
  "\u01F8": "N",
  "\u0143": "N",
  "\xD1": "N",
  "\u1E44": "N",
  "\u0147": "N",
  "\u1E46": "N",
  "\u0145": "N",
  "\u1E4A": "N",
  "\u1E48": "N",
  "\u0220": "N",
  "\u019D": "N",
  "\uA790": "N",
  "\uA7A4": "N",
  "\u01CA": "NJ",
  "\u01CB": "Nj",
  "\u24C4": "O",
  "\uFF2F": "O",
  "\xD2": "O",
  "\xD3": "O",
  "\xD4": "O",
  "\u1ED2": "O",
  "\u1ED0": "O",
  "\u1ED6": "O",
  "\u1ED4": "O",
  "\xD5": "O",
  "\u1E4C": "O",
  "\u022C": "O",
  "\u1E4E": "O",
  "\u014C": "O",
  "\u1E50": "O",
  "\u1E52": "O",
  "\u014E": "O",
  "\u022E": "O",
  "\u0230": "O",
  "\xD6": "O",
  "\u022A": "O",
  "\u1ECE": "O",
  "\u0150": "O",
  "\u01D1": "O",
  "\u020C": "O",
  "\u020E": "O",
  "\u01A0": "O",
  "\u1EDC": "O",
  "\u1EDA": "O",
  "\u1EE0": "O",
  "\u1EDE": "O",
  "\u1EE2": "O",
  "\u1ECC": "O",
  "\u1ED8": "O",
  "\u01EA": "O",
  "\u01EC": "O",
  "\xD8": "O",
  "\u01FE": "O",
  "\u0186": "O",
  "\u019F": "O",
  "\uA74A": "O",
  "\uA74C": "O",
  "\u01A2": "OI",
  "\uA74E": "OO",
  "\u0222": "OU",
  "\u24C5": "P",
  "\uFF30": "P",
  "\u1E54": "P",
  "\u1E56": "P",
  "\u01A4": "P",
  "\u2C63": "P",
  "\uA750": "P",
  "\uA752": "P",
  "\uA754": "P",
  "\u24C6": "Q",
  "\uFF31": "Q",
  "\uA756": "Q",
  "\uA758": "Q",
  "\u024A": "Q",
  "\u24C7": "R",
  "\uFF32": "R",
  "\u0154": "R",
  "\u1E58": "R",
  "\u0158": "R",
  "\u0210": "R",
  "\u0212": "R",
  "\u1E5A": "R",
  "\u1E5C": "R",
  "\u0156": "R",
  "\u1E5E": "R",
  "\u024C": "R",
  "\u2C64": "R",
  "\uA75A": "R",
  "\uA7A6": "R",
  "\uA782": "R",
  "\u24C8": "S",
  "\uFF33": "S",
  "\u1E9E": "S",
  "\u015A": "S",
  "\u1E64": "S",
  "\u015C": "S",
  "\u1E60": "S",
  "\u0160": "S",
  "\u1E66": "S",
  "\u1E62": "S",
  "\u1E68": "S",
  "\u0218": "S",
  "\u015E": "S",
  "\u2C7E": "S",
  "\uA7A8": "S",
  "\uA784": "S",
  "\u24C9": "T",
  "\uFF34": "T",
  "\u1E6A": "T",
  "\u0164": "T",
  "\u1E6C": "T",
  "\u021A": "T",
  "\u0162": "T",
  "\u1E70": "T",
  "\u1E6E": "T",
  "\u0166": "T",
  "\u01AC": "T",
  "\u01AE": "T",
  "\u023E": "T",
  "\uA786": "T",
  "\uA728": "TZ",
  "\u24CA": "U",
  "\uFF35": "U",
  "\xD9": "U",
  "\xDA": "U",
  "\xDB": "U",
  "\u0168": "U",
  "\u1E78": "U",
  "\u016A": "U",
  "\u1E7A": "U",
  "\u016C": "U",
  "\xDC": "U",
  "\u01DB": "U",
  "\u01D7": "U",
  "\u01D5": "U",
  "\u01D9": "U",
  "\u1EE6": "U",
  "\u016E": "U",
  "\u0170": "U",
  "\u01D3": "U",
  "\u0214": "U",
  "\u0216": "U",
  "\u01AF": "U",
  "\u1EEA": "U",
  "\u1EE8": "U",
  "\u1EEE": "U",
  "\u1EEC": "U",
  "\u1EF0": "U",
  "\u1EE4": "U",
  "\u1E72": "U",
  "\u0172": "U",
  "\u1E76": "U",
  "\u1E74": "U",
  "\u0244": "U",
  "\u24CB": "V",
  "\uFF36": "V",
  "\u1E7C": "V",
  "\u1E7E": "V",
  "\u01B2": "V",
  "\uA75E": "V",
  "\u0245": "V",
  "\uA760": "VY",
  "\u24CC": "W",
  "\uFF37": "W",
  "\u1E80": "W",
  "\u1E82": "W",
  "\u0174": "W",
  "\u1E86": "W",
  "\u1E84": "W",
  "\u1E88": "W",
  "\u2C72": "W",
  "\u24CD": "X",
  "\uFF38": "X",
  "\u1E8A": "X",
  "\u1E8C": "X",
  "\u24CE": "Y",
  "\uFF39": "Y",
  "\u1EF2": "Y",
  "\xDD": "Y",
  "\u0176": "Y",
  "\u1EF8": "Y",
  "\u0232": "Y",
  "\u1E8E": "Y",
  "\u0178": "Y",
  "\u1EF6": "Y",
  "\u1EF4": "Y",
  "\u01B3": "Y",
  "\u024E": "Y",
  "\u1EFE": "Y",
  "\u24CF": "Z",
  "\uFF3A": "Z",
  "\u0179": "Z",
  "\u1E90": "Z",
  "\u017B": "Z",
  "\u017D": "Z",
  "\u1E92": "Z",
  "\u1E94": "Z",
  "\u01B5": "Z",
  "\u0224": "Z",
  "\u2C7F": "Z",
  "\u2C6B": "Z",
  "\uA762": "Z",
  "\u24D0": "a",
  "\uFF41": "a",
  "\u1E9A": "a",
  "\xE0": "a",
  "\xE1": "a",
  "\xE2": "a",
  "\u1EA7": "a",
  "\u1EA5": "a",
  "\u1EAB": "a",
  "\u1EA9": "a",
  "\xE3": "a",
  "\u0101": "a",
  "\u0103": "a",
  "\u1EB1": "a",
  "\u1EAF": "a",
  "\u1EB5": "a",
  "\u1EB3": "a",
  "\u0227": "a",
  "\u01E1": "a",
  "\xE4": "a",
  "\u01DF": "a",
  "\u1EA3": "a",
  "\xE5": "a",
  "\u01FB": "a",
  "\u01CE": "a",
  "\u0201": "a",
  "\u0203": "a",
  "\u1EA1": "a",
  "\u1EAD": "a",
  "\u1EB7": "a",
  "\u1E01": "a",
  "\u0105": "a",
  "\u2C65": "a",
  "\u0250": "a",
  "\uA733": "aa",
  "\xE6": "ae",
  "\u01FD": "ae",
  "\u01E3": "ae",
  "\uA735": "ao",
  "\uA737": "au",
  "\uA739": "av",
  "\uA73B": "av",
  "\uA73D": "ay",
  "\u24D1": "b",
  "\uFF42": "b",
  "\u1E03": "b",
  "\u1E05": "b",
  "\u1E07": "b",
  "\u0180": "b",
  "\u0183": "b",
  "\u0253": "b",
  "\u24D2": "c",
  "\uFF43": "c",
  "\u0107": "c",
  "\u0109": "c",
  "\u010B": "c",
  "\u010D": "c",
  "\xE7": "c",
  "\u1E09": "c",
  "\u0188": "c",
  "\u023C": "c",
  "\uA73F": "c",
  "\u2184": "c",
  "\u24D3": "d",
  "\uFF44": "d",
  "\u1E0B": "d",
  "\u010F": "d",
  "\u1E0D": "d",
  "\u1E11": "d",
  "\u1E13": "d",
  "\u1E0F": "d",
  "\u0111": "d",
  "\u018C": "d",
  "\u0256": "d",
  "\u0257": "d",
  "\uA77A": "d",
  "\u01F3": "dz",
  "\u01C6": "dz",
  "\u24D4": "e",
  "\uFF45": "e",
  "\xE8": "e",
  "\xE9": "e",
  "\xEA": "e",
  "\u1EC1": "e",
  "\u1EBF": "e",
  "\u1EC5": "e",
  "\u1EC3": "e",
  "\u1EBD": "e",
  "\u0113": "e",
  "\u1E15": "e",
  "\u1E17": "e",
  "\u0115": "e",
  "\u0117": "e",
  "\xEB": "e",
  "\u1EBB": "e",
  "\u011B": "e",
  "\u0205": "e",
  "\u0207": "e",
  "\u1EB9": "e",
  "\u1EC7": "e",
  "\u0229": "e",
  "\u1E1D": "e",
  "\u0119": "e",
  "\u1E19": "e",
  "\u1E1B": "e",
  "\u0247": "e",
  "\u025B": "e",
  "\u01DD": "e",
  "\u24D5": "f",
  "\uFF46": "f",
  "\u1E1F": "f",
  "\u0192": "f",
  "\uA77C": "f",
  "\u24D6": "g",
  "\uFF47": "g",
  "\u01F5": "g",
  "\u011D": "g",
  "\u1E21": "g",
  "\u011F": "g",
  "\u0121": "g",
  "\u01E7": "g",
  "\u0123": "g",
  "\u01E5": "g",
  "\u0260": "g",
  "\uA7A1": "g",
  "\u1D79": "g",
  "\uA77F": "g",
  "\u24D7": "h",
  "\uFF48": "h",
  "\u0125": "h",
  "\u1E23": "h",
  "\u1E27": "h",
  "\u021F": "h",
  "\u1E25": "h",
  "\u1E29": "h",
  "\u1E2B": "h",
  "\u1E96": "h",
  "\u0127": "h",
  "\u2C68": "h",
  "\u2C76": "h",
  "\u0265": "h",
  "\u0195": "hv",
  "\u24D8": "i",
  "\uFF49": "i",
  "\xEC": "i",
  "\xED": "i",
  "\xEE": "i",
  "\u0129": "i",
  "\u012B": "i",
  "\u012D": "i",
  "\xEF": "i",
  "\u1E2F": "i",
  "\u1EC9": "i",
  "\u01D0": "i",
  "\u0209": "i",
  "\u020B": "i",
  "\u1ECB": "i",
  "\u012F": "i",
  "\u1E2D": "i",
  "\u0268": "i",
  "\u0131": "i",
  "\u24D9": "j",
  "\uFF4A": "j",
  "\u0135": "j",
  "\u01F0": "j",
  "\u0249": "j",
  "\u24DA": "k",
  "\uFF4B": "k",
  "\u1E31": "k",
  "\u01E9": "k",
  "\u1E33": "k",
  "\u0137": "k",
  "\u1E35": "k",
  "\u0199": "k",
  "\u2C6A": "k",
  "\uA741": "k",
  "\uA743": "k",
  "\uA745": "k",
  "\uA7A3": "k",
  "\u24DB": "l",
  "\uFF4C": "l",
  "\u0140": "l",
  "\u013A": "l",
  "\u013E": "l",
  "\u1E37": "l",
  "\u1E39": "l",
  "\u013C": "l",
  "\u1E3D": "l",
  "\u1E3B": "l",
  "\u017F": "l",
  "\u0142": "l",
  "\u019A": "l",
  "\u026B": "l",
  "\u2C61": "l",
  "\uA749": "l",
  "\uA781": "l",
  "\uA747": "l",
  "\u01C9": "lj",
  "\u24DC": "m",
  "\uFF4D": "m",
  "\u1E3F": "m",
  "\u1E41": "m",
  "\u1E43": "m",
  "\u0271": "m",
  "\u026F": "m",
  "\u24DD": "n",
  "\uFF4E": "n",
  "\u01F9": "n",
  "\u0144": "n",
  "\xF1": "n",
  "\u1E45": "n",
  "\u0148": "n",
  "\u1E47": "n",
  "\u0146": "n",
  "\u1E4B": "n",
  "\u1E49": "n",
  "\u019E": "n",
  "\u0272": "n",
  "\u0149": "n",
  "\uA791": "n",
  "\uA7A5": "n",
  "\u01CC": "nj",
  "\u24DE": "o",
  "\uFF4F": "o",
  "\xF2": "o",
  "\xF3": "o",
  "\xF4": "o",
  "\u1ED3": "o",
  "\u1ED1": "o",
  "\u1ED7": "o",
  "\u1ED5": "o",
  "\xF5": "o",
  "\u1E4D": "o",
  "\u022D": "o",
  "\u1E4F": "o",
  "\u014D": "o",
  "\u1E51": "o",
  "\u1E53": "o",
  "\u014F": "o",
  "\u022F": "o",
  "\u0231": "o",
  "\xF6": "o",
  "\u022B": "o",
  "\u1ECF": "o",
  "\u0151": "o",
  "\u01D2": "o",
  "\u020D": "o",
  "\u020F": "o",
  "\u01A1": "o",
  "\u1EDD": "o",
  "\u1EDB": "o",
  "\u1EE1": "o",
  "\u1EDF": "o",
  "\u1EE3": "o",
  "\u1ECD": "o",
  "\u1ED9": "o",
  "\u01EB": "o",
  "\u01ED": "o",
  "\xF8": "o",
  "\u01FF": "o",
  "\u0254": "o",
  "\uA74B": "o",
  "\uA74D": "o",
  "\u0275": "o",
  "\u01A3": "oi",
  "\u0223": "ou",
  "\uA74F": "oo",
  "\u24DF": "p",
  "\uFF50": "p",
  "\u1E55": "p",
  "\u1E57": "p",
  "\u01A5": "p",
  "\u1D7D": "p",
  "\uA751": "p",
  "\uA753": "p",
  "\uA755": "p",
  "\u24E0": "q",
  "\uFF51": "q",
  "\u024B": "q",
  "\uA757": "q",
  "\uA759": "q",
  "\u24E1": "r",
  "\uFF52": "r",
  "\u0155": "r",
  "\u1E59": "r",
  "\u0159": "r",
  "\u0211": "r",
  "\u0213": "r",
  "\u1E5B": "r",
  "\u1E5D": "r",
  "\u0157": "r",
  "\u1E5F": "r",
  "\u024D": "r",
  "\u027D": "r",
  "\uA75B": "r",
  "\uA7A7": "r",
  "\uA783": "r",
  "\u24E2": "s",
  "\uFF53": "s",
  "\xDF": "s",
  "\u015B": "s",
  "\u1E65": "s",
  "\u015D": "s",
  "\u1E61": "s",
  "\u0161": "s",
  "\u1E67": "s",
  "\u1E63": "s",
  "\u1E69": "s",
  "\u0219": "s",
  "\u015F": "s",
  "\u023F": "s",
  "\uA7A9": "s",
  "\uA785": "s",
  "\u1E9B": "s",
  "\u24E3": "t",
  "\uFF54": "t",
  "\u1E6B": "t",
  "\u1E97": "t",
  "\u0165": "t",
  "\u1E6D": "t",
  "\u021B": "t",
  "\u0163": "t",
  "\u1E71": "t",
  "\u1E6F": "t",
  "\u0167": "t",
  "\u01AD": "t",
  "\u0288": "t",
  "\u2C66": "t",
  "\uA787": "t",
  "\uA729": "tz",
  "\u24E4": "u",
  "\uFF55": "u",
  "\xF9": "u",
  "\xFA": "u",
  "\xFB": "u",
  "\u0169": "u",
  "\u1E79": "u",
  "\u016B": "u",
  "\u1E7B": "u",
  "\u016D": "u",
  "\xFC": "u",
  "\u01DC": "u",
  "\u01D8": "u",
  "\u01D6": "u",
  "\u01DA": "u",
  "\u1EE7": "u",
  "\u016F": "u",
  "\u0171": "u",
  "\u01D4": "u",
  "\u0215": "u",
  "\u0217": "u",
  "\u01B0": "u",
  "\u1EEB": "u",
  "\u1EE9": "u",
  "\u1EEF": "u",
  "\u1EED": "u",
  "\u1EF1": "u",
  "\u1EE5": "u",
  "\u1E73": "u",
  "\u0173": "u",
  "\u1E77": "u",
  "\u1E75": "u",
  "\u0289": "u",
  "\u24E5": "v",
  "\uFF56": "v",
  "\u1E7D": "v",
  "\u1E7F": "v",
  "\u028B": "v",
  "\uA75F": "v",
  "\u028C": "v",
  "\uA761": "vy",
  "\u24E6": "w",
  "\uFF57": "w",
  "\u1E81": "w",
  "\u1E83": "w",
  "\u0175": "w",
  "\u1E87": "w",
  "\u1E85": "w",
  "\u1E98": "w",
  "\u1E89": "w",
  "\u2C73": "w",
  "\u24E7": "x",
  "\uFF58": "x",
  "\u1E8B": "x",
  "\u1E8D": "x",
  "\u24E8": "y",
  "\uFF59": "y",
  "\u1EF3": "y",
  "\xFD": "y",
  "\u0177": "y",
  "\u1EF9": "y",
  "\u0233": "y",
  "\u1E8F": "y",
  "\xFF": "y",
  "\u1EF7": "y",
  "\u1E99": "y",
  "\u1EF5": "y",
  "\u01B4": "y",
  "\u024F": "y",
  "\u1EFF": "y",
  "\u24E9": "z",
  "\uFF5A": "z",
  "\u017A": "z",
  "\u1E91": "z",
  "\u017C": "z",
  "\u017E": "z",
  "\u1E93": "z",
  "\u1E95": "z",
  "\u01B6": "z",
  "\u0225": "z",
  "\u0240": "z",
  "\u2C6C": "z",
  "\uA763": "z",
  "\u0386": "\u0391",
  "\u0388": "\u0395",
  "\u0389": "\u0397",
  "\u038A": "\u0399",
  "\u03AA": "\u0399",
  "\u038C": "\u039F",
  "\u038E": "\u03A5",
  "\u03AB": "\u03A5",
  "\u038F": "\u03A9",
  "\u03AC": "\u03B1",
  "\u03AD": "\u03B5",
  "\u03AE": "\u03B7",
  "\u03AF": "\u03B9",
  "\u03CA": "\u03B9",
  "\u0390": "\u03B9",
  "\u03CC": "\u03BF",
  "\u03CD": "\u03C5",
  "\u03CB": "\u03C5",
  "\u03B0": "\u03C5",
  "\u03C9": "\u03C9",
  "\u03C2": "\u03C3"
};
function stripSpecialChars(text) {
  const match = (a) => diacritics[a] || a;
  return text.replace(/[^\u0000-\u007E]/g, match);
}
var ItemsList = class {
  constructor(_ngSelect, _selectionModel) {
    this._ngSelect = _ngSelect;
    this._selectionModel = _selectionModel;
    this._items = [];
    this._filteredItems = [];
    this._markedIndex = -1;
  }
  get items() {
    return this._items;
  }
  get filteredItems() {
    return this._filteredItems;
  }
  get markedIndex() {
    return this._markedIndex;
  }
  get selectedItems() {
    return this._selectionModel.value;
  }
  get markedItem() {
    return this._filteredItems[this._markedIndex];
  }
  get noItemsToSelect() {
    return this._ngSelect.hideSelected() && this._items.length === this.selectedItems.length;
  }
  get maxItemsSelected() {
    return this._ngSelect.multiple() && this._ngSelect.maxSelectedItems() <= this.selectedItems.length;
  }
  get lastSelectedItem() {
    let i = this.selectedItems.length - 1;
    for (; i >= 0; i--) {
      const item = this.selectedItems[i];
      if (!item.disabled) {
        return item;
      }
    }
    return null;
  }
  setItems(items) {
    this._items = items.map((item, index) => this.mapItem(item, index));
    const groupBy = this._ngSelect.groupBy();
    if (groupBy) {
      this._groups = this._groupBy(this._items, groupBy);
      this._items = this._flatten(this._groups);
    } else {
      this._groups = /* @__PURE__ */ new Map();
      this._groups.set(void 0, this._items);
    }
    this._filteredItems = [...this._items];
  }
  select(item) {
    if (item.selected || this.maxItemsSelected) {
      return;
    }
    const multiple = this._ngSelect.multiple();
    if (!multiple) {
      this.clearSelected();
    }
    this._selectionModel.select(item, multiple, this._ngSelect.selectableGroupAsModel());
    if (this._ngSelect.hideSelected()) {
      this._hideSelected(item);
    }
  }
  unselect(item) {
    if (!item.selected) {
      return;
    }
    const multiple = this._ngSelect.multiple();
    this._selectionModel.unselect(item, multiple);
    if (this._ngSelect.hideSelected() && isDefined(item.index) && multiple) {
      this._showSelected(item);
    }
  }
  findItem(value) {
    let findBy;
    if (this._ngSelect.compareWith()) {
      findBy = (item) => this._ngSelect.compareWith()(item.value, value);
    } else if (this._ngSelect.bindValue()) {
      findBy = (item) => !item.children && this.resolveNested(item.value, this._ngSelect.bindValue()) === value;
    } else {
      findBy = (item) => item.value === value || !item.children && item.label && item.label === this.resolveNested(value, this._ngSelect.bindLabel());
    }
    return this._items.find((item) => findBy(item));
  }
  addItem(item) {
    const option = this.mapItem(item, this._items.length);
    this._items.push(option);
    this._filteredItems.push(option);
    return option;
  }
  clearSelected(keepDisabled = false) {
    this._selectionModel.clear(keepDisabled);
    this._items.forEach((item) => {
      item.selected = keepDisabled && item.selected && item.disabled;
      item.marked = false;
    });
    if (this._ngSelect.hideSelected()) {
      this.resetFilteredItems();
    }
  }
  findByLabel(term) {
    term = stripSpecialChars(term).toLocaleLowerCase();
    return this.filteredItems.find((item) => {
      const label = stripSpecialChars(item.label).toLocaleLowerCase();
      return label.substr(0, term.length) === term;
    });
  }
  filter(term) {
    if (!term) {
      this.resetFilteredItems();
      return;
    }
    this._filteredItems = [];
    term = this._ngSelect.searchFn() ? term : stripSpecialChars(term).toLocaleLowerCase();
    const match = this._ngSelect.searchFn() || this._defaultSearchFn;
    const hideSelected = this._ngSelect.hideSelected();
    for (const key of Array.from(this._groups.keys())) {
      const matchedItems = [];
      for (const item of this._groups.get(key)) {
        if (hideSelected && (item.parent && item.parent.selected || item.selected)) {
          continue;
        }
        const searchItem = this._ngSelect.searchFn() ? item.value : item;
        if (match(term, searchItem)) {
          matchedItems.push(item);
        }
      }
      if (matchedItems.length > 0) {
        const [last] = matchedItems.slice(-1);
        if (last.parent) {
          const head = this._items.find((x) => x === last.parent);
          this._filteredItems.push(head);
        }
        this._filteredItems.push(...matchedItems);
      }
    }
  }
  resetFilteredItems() {
    if (this._filteredItems.length === this._items.length) {
      return;
    }
    if (this._ngSelect.hideSelected() && this.selectedItems.length > 0) {
      this._filteredItems = this._items.filter((x) => !x.selected);
    } else {
      this._filteredItems = this._items;
    }
  }
  unmarkItem() {
    this._markedIndex = -1;
  }
  markNextItem() {
    this._stepToItem(1);
  }
  markPreviousItem() {
    this._stepToItem(-1);
  }
  markItem(item) {
    this._markedIndex = this._filteredItems.indexOf(item);
  }
  markSelectedOrDefault(markDefault) {
    if (this._filteredItems.length === 0) {
      return;
    }
    const lastMarkedIndex = this._getLastMarkedIndex();
    if (lastMarkedIndex > -1) {
      this._markedIndex = lastMarkedIndex;
    } else {
      this._markedIndex = markDefault ? this.filteredItems.findIndex((x) => !x.disabled) : -1;
    }
  }
  resolveNested(option, key) {
    if (!isObject2(option)) {
      return option;
    }
    if (key.indexOf(".") === -1) {
      return option[key];
    } else {
      const keys = key.split(".");
      let value = option;
      for (let i = 0, len = keys.length; i < len; ++i) {
        if (value == null) {
          return null;
        }
        value = value[keys[i]];
      }
      return value;
    }
  }
  mapItem(item, index) {
    const label = isDefined(item.$ngOptionLabel) ? item.$ngOptionLabel : this.resolveNested(item, this._ngSelect.bindLabel());
    const value = isDefined(item.$ngOptionValue) ? item.$ngOptionValue : item;
    return {
      index,
      label: isDefined(label) ? label.toString() : "",
      value,
      disabled: item.disabled,
      htmlId: `${this._ngSelect.dropdownId}-${index}`
    };
  }
  mapSelectedItems() {
    const multiple = this._ngSelect.multiple();
    for (const selected of this.selectedItems) {
      const bindValue = this._ngSelect.bindValue();
      let item = null;
      if (this._ngSelect.compareWith()) {
        item = this._items.find((item2) => this._ngSelect.compareWith()(item2.value, selected.value));
      } else {
        const value = bindValue ? this.resolveNested(selected.value, bindValue) : selected.value;
        item = isDefined(value) ? this.findItem(value) : null;
      }
      this._selectionModel.unselect(selected, multiple);
      this._selectionModel.select(item || selected, multiple, this._ngSelect.selectableGroupAsModel());
    }
    if (this._ngSelect.hideSelected()) {
      this._filteredItems = this.filteredItems.filter((x) => this.selectedItems.indexOf(x) === -1);
    }
  }
  _showSelected(item) {
    this._filteredItems.push(item);
    if (item.parent) {
      const parent = item.parent;
      const parentExists = this._filteredItems.find((x) => x === parent);
      if (!parentExists) {
        this._filteredItems.push(parent);
      }
    } else if (item.children) {
      for (const child of item.children) {
        child.selected = false;
        this._filteredItems.push(child);
      }
    }
    this._filteredItems = [...this._filteredItems.sort((a, b) => a.index - b.index)];
  }
  _hideSelected(item) {
    this._filteredItems = this._filteredItems.filter((x) => x !== item);
    if (item.parent) {
      const children = item.parent.children;
      if (children.every((x) => x.selected)) {
        this._filteredItems = this._filteredItems.filter((x) => x !== item.parent);
      }
    } else if (item.children) {
      this._filteredItems = this.filteredItems.filter((x) => x.parent !== item);
    }
  }
  _defaultSearchFn(search, opt) {
    const label = stripSpecialChars(opt.label).toLocaleLowerCase();
    return label.indexOf(search) > -1;
  }
  _getNextItemIndex(steps) {
    if (steps > 0) {
      return this._markedIndex >= this._filteredItems.length - 1 ? 0 : this._markedIndex + 1;
    }
    return this._markedIndex <= 0 ? this._filteredItems.length - 1 : this._markedIndex - 1;
  }
  _stepToItem(steps) {
    if (this._filteredItems.length === 0 || this._filteredItems.every((x) => x.disabled)) {
      return;
    }
    this._markedIndex = this._getNextItemIndex(steps);
    if (this.markedItem.disabled) {
      this._stepToItem(steps);
    }
  }
  _getLastMarkedIndex() {
    if (this._ngSelect.hideSelected()) {
      return -1;
    }
    if (this._markedIndex > -1 && this.markedItem === void 0) {
      return -1;
    }
    const selectedIndex = this._filteredItems.indexOf(this.lastSelectedItem);
    if (this.lastSelectedItem && selectedIndex < 0) {
      return -1;
    }
    return Math.max(this.markedIndex, selectedIndex);
  }
  _groupBy(items, prop) {
    const groups = /* @__PURE__ */ new Map();
    if (items.length === 0) {
      return groups;
    }
    if (Array.isArray(items[0].value[prop])) {
      for (const item of items) {
        const children = (item.value[prop] || []).map((x, index) => this.mapItem(x, index));
        groups.set(item, children);
      }
      return groups;
    }
    const isFnKey = isFunction2(this._ngSelect.groupBy());
    const keyFn = (item) => {
      const key = isFnKey ? prop(item.value) : item.value[prop];
      return isDefined(key) ? key : void 0;
    };
    for (const item of items) {
      const key = keyFn(item);
      const group = groups.get(key);
      if (group) {
        group.push(item);
      } else {
        groups.set(key, [item]);
      }
    }
    return groups;
  }
  _flatten(groups) {
    const isGroupByFn = isFunction2(this._ngSelect.groupBy());
    const items = [];
    for (const key of Array.from(groups.keys())) {
      let i = items.length;
      if (key === void 0) {
        const withoutGroup = groups.get(void 0) || [];
        items.push(...withoutGroup.map((x) => {
          x.index = i++;
          return x;
        }));
        continue;
      }
      const isObjectKey = isObject2(key);
      const parent = {
        label: isObjectKey ? "" : String(key),
        children: void 0,
        parent: null,
        index: i++,
        disabled: !this._ngSelect.selectableGroup(),
        htmlId: newId()
      };
      const groupKey = isGroupByFn ? this._ngSelect.bindLabel() : this._ngSelect.groupBy();
      const groupValue = this._ngSelect.groupValue() || (() => {
        if (isObjectKey) {
          return key.value;
        }
        return {
          [groupKey]: key
        };
      });
      const children = groups.get(key).map((x) => {
        x.parent = parent;
        x.children = void 0;
        x.index = i++;
        return x;
      });
      parent.children = children;
      parent.value = groupValue(key, children.map((x) => x.value));
      items.push(parent);
      items.push(...children);
    }
    return items;
  }
};
var _NgDropdownPanelService = class _NgDropdownPanelService {
  constructor() {
    this._dimensions = {
      itemHeight: 0,
      panelHeight: 0,
      itemsPerViewport: 0
    };
  }
  get dimensions() {
    return this._dimensions;
  }
  calculateItems(scrollPos, itemsLength, buffer) {
    const d = this._dimensions;
    const scrollHeight = d.itemHeight * itemsLength;
    const scrollTop = Math.max(0, scrollPos);
    const indexByScrollTop = scrollTop / scrollHeight * itemsLength;
    let end = Math.min(itemsLength, Math.ceil(indexByScrollTop) + (d.itemsPerViewport + 1));
    const maxStartEnd = end;
    const maxStart = Math.max(0, maxStartEnd - d.itemsPerViewport);
    let start = Math.min(maxStart, Math.floor(indexByScrollTop));
    let topPadding = d.itemHeight * Math.ceil(start) - d.itemHeight * Math.min(start, buffer);
    topPadding = !isNaN(topPadding) ? topPadding : 0;
    start = !isNaN(start) ? start : -1;
    end = !isNaN(end) ? end : -1;
    start -= buffer;
    start = Math.max(0, start);
    end += buffer;
    end = Math.min(itemsLength, end);
    return {
      topPadding,
      scrollHeight,
      start,
      end
    };
  }
  setDimensions(itemHeight, panelHeight) {
    const itemsPerViewport = Math.max(1, Math.floor(panelHeight / itemHeight));
    this._dimensions = {
      itemHeight,
      panelHeight,
      itemsPerViewport
    };
  }
  getScrollTo(itemTop, itemHeight, lastScroll) {
    const {
      panelHeight
    } = this.dimensions;
    const itemBottom = itemTop + itemHeight;
    const top = lastScroll;
    const bottom = top + panelHeight;
    if (panelHeight >= itemBottom && lastScroll === itemTop) {
      return null;
    }
    if (itemBottom > bottom) {
      return top + itemBottom - bottom;
    } else if (itemTop <= top) {
      return itemTop;
    }
    return null;
  }
};
_NgDropdownPanelService.\u0275fac = function NgDropdownPanelService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgDropdownPanelService)();
};
_NgDropdownPanelService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _NgDropdownPanelService,
  factory: _NgDropdownPanelService.\u0275fac
});
var NgDropdownPanelService = _NgDropdownPanelService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgDropdownPanelService, [{
    type: Injectable
  }], null, null);
})();
var CSS_POSITIONS = ["top", "right", "bottom", "left"];
var SCROLL_SCHEDULER = typeof requestAnimationFrame !== "undefined" ? animationFrameScheduler : asapScheduler;
var _NgDropdownPanelComponent = class _NgDropdownPanelComponent {
  constructor() {
    this._renderer = inject(Renderer2);
    this._zone = inject(NgZone);
    this._panelService = inject(NgDropdownPanelService);
    this._document = inject(DOCUMENT, {
      optional: true
    });
    this._dropdown = inject(ElementRef).nativeElement;
    this.items = input([]);
    this.markedItem = input(void 0);
    this.position = input("auto");
    this.appendTo = input(void 0);
    this.bufferAmount = input(void 0);
    this.virtualScroll = input(false, {
      transform: booleanAttribute
    });
    this.headerTemplate = input(void 0);
    this.footerTemplate = input(void 0);
    this.filterValue = input(null);
    this.ariaLabelDropdown = input(null);
    this.update = output();
    this.scroll = output();
    this.scrollToEnd = output();
    this.outsideClick = output();
    this.contentElementRef = viewChild("content", {
      read: ElementRef
    });
    this.scrollElementRef = viewChild("scroll", {
      read: ElementRef
    });
    this.paddingElementRef = viewChild("padding", {
      read: ElementRef
    });
    this._destroy$ = new Subject();
    this._virtualPadding = computed(() => this.paddingElementRef()?.nativeElement);
    this._scrollablePanel = computed(() => this.scrollElementRef()?.nativeElement);
    this._contentPanel = computed(() => this.contentElementRef()?.nativeElement);
    this._scrollToEndFired = false;
    this._updateScrollHeight = false;
    this._lastScrollPosition = 0;
  }
  get currentPosition() {
    return this._currentPosition;
  }
  get itemsLength() {
    return this._itemsLength;
  }
  set itemsLength(value) {
    if (value !== this._itemsLength) {
      this._itemsLength = value;
      this._onItemsLengthChanged();
    }
  }
  get _startOffset() {
    if (this.markedItem()) {
      const {
        itemHeight,
        panelHeight
      } = this._panelService.dimensions;
      const offset = this.markedItem().index * itemHeight;
      return panelHeight > offset ? 0 : offset;
    }
    return 0;
  }
  ngOnInit() {
    this._select = this._dropdown.parentElement;
    this._handleScroll();
    this._handleOutsideClick();
    this._appendDropdown();
    this._setupMousedownListener();
  }
  ngOnChanges(changes) {
    if (changes.items) {
      const change = changes.items;
      this._onItemsChange(change.currentValue, change.firstChange);
    }
  }
  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
    this._destroy$.unsubscribe();
    if (this.appendTo()) {
      this._renderer.removeChild(this._dropdown.parentNode, this._dropdown);
    }
  }
  scrollTo(option, startFromOption = false) {
    if (!option) {
      return;
    }
    const index = this.items().indexOf(option);
    if (index < 0 || index >= this.itemsLength) {
      return;
    }
    let scrollTo;
    if (this.virtualScroll()) {
      const itemHeight = this._panelService.dimensions.itemHeight;
      scrollTo = this._panelService.getScrollTo(index * itemHeight, itemHeight, this._lastScrollPosition);
    } else {
      const item = this._dropdown.querySelector(`#${option.htmlId}`);
      const lastScroll = startFromOption ? item.offsetTop : this._lastScrollPosition;
      scrollTo = this._panelService.getScrollTo(item.offsetTop, item.clientHeight, lastScroll);
    }
    if (isDefined(scrollTo)) {
      this._scrollablePanel().scrollTop = scrollTo;
    }
  }
  scrollToTag() {
    const panel = this._scrollablePanel();
    panel.scrollTop = panel.scrollHeight - panel.clientHeight;
  }
  adjustPosition() {
    this._updateYPosition();
  }
  _handleDropdownPosition() {
    this._currentPosition = this._calculateCurrentPosition(this._dropdown);
    if (CSS_POSITIONS.includes(this._currentPosition)) {
      this._updateDropdownClass(this._currentPosition);
    } else {
      this._updateDropdownClass("bottom");
    }
    if (this.appendTo()) {
      this._updateYPosition();
    }
    this._dropdown.style.opacity = "1";
  }
  _updateDropdownClass(currentPosition) {
    CSS_POSITIONS.forEach((position) => {
      const REMOVE_CSS_CLASS = `ng-select-${position}`;
      this._renderer.removeClass(this._dropdown, REMOVE_CSS_CLASS);
      this._renderer.removeClass(this._select, REMOVE_CSS_CLASS);
    });
    const ADD_CSS_CLASS = `ng-select-${currentPosition}`;
    this._renderer.addClass(this._dropdown, ADD_CSS_CLASS);
    this._renderer.addClass(this._select, ADD_CSS_CLASS);
  }
  _handleScroll() {
    this._zone.runOutsideAngular(() => {
      if (!this._scrollablePanel()) {
        return;
      }
      fromEvent(this._scrollablePanel(), "scroll").pipe(takeUntil(this._destroy$), auditTime(0, SCROLL_SCHEDULER)).subscribe((e) => {
        const path = e.path || e.composedPath && e.composedPath();
        if (!path || path.length === 0 && !e.target) {
          return;
        }
        const scrollTop = !path || path.length === 0 ? e.target.scrollTop : path[0].scrollTop;
        this._onContentScrolled(scrollTop);
      });
    });
  }
  _handleOutsideClick() {
    if (!this._document) {
      return;
    }
    this._zone.runOutsideAngular(() => {
      merge(fromEvent(this._document, "touchstart", {
        capture: true
      }), fromEvent(this._document, "click", {
        capture: true
      })).pipe(takeUntil(this._destroy$)).subscribe(($event) => this._checkToClose($event));
    });
  }
  _checkToClose($event) {
    if (this._select.contains($event.target) || this._dropdown.contains($event.target)) {
      return;
    }
    const path = $event.path || $event.composedPath && $event.composedPath();
    if ($event.target && $event.target.shadowRoot && path && path[0] && this._select.contains(path[0])) {
      return;
    }
    this._zone.run(() => this.outsideClick.emit());
  }
  _onItemsChange(items = [], firstChange) {
    this._scrollToEndFired = false;
    this.itemsLength = items.length;
    if (this.virtualScroll()) {
      this._updateItemsRange(firstChange);
    } else {
      this._setVirtualHeight();
      this._updateItems(firstChange);
    }
  }
  _updateItems(firstChange) {
    this.update.emit(this.items());
    if (firstChange === false) {
      return;
    }
    this._zone.runOutsideAngular(() => {
      Promise.resolve().then(() => {
        const panelHeight = this._scrollablePanel().clientHeight;
        this._panelService.setDimensions(0, panelHeight);
        this._handleDropdownPosition();
        this.scrollTo(this.markedItem(), firstChange);
      });
    });
  }
  _updateItemsRange(firstChange) {
    this._zone.runOutsideAngular(() => {
      this._measureDimensions().then(() => {
        if (firstChange) {
          this._renderItemsRange(this._startOffset);
          this._handleDropdownPosition();
        } else {
          this._renderItemsRange();
        }
      });
    });
  }
  _onContentScrolled(scrollTop) {
    if (this.virtualScroll()) {
      this._renderItemsRange(scrollTop);
    }
    this._lastScrollPosition = scrollTop;
    this._fireScrollToEnd(scrollTop);
  }
  _updateVirtualHeight(height) {
    if (this._updateScrollHeight) {
      this._virtualPadding().style.height = `${height}px`;
      this._updateScrollHeight = false;
    }
  }
  _setVirtualHeight() {
    if (!this._virtualPadding()) {
      return;
    }
    this._virtualPadding().style.height = `0px`;
  }
  _onItemsLengthChanged() {
    this._updateScrollHeight = true;
  }
  _renderItemsRange(scrollTop = null) {
    if (scrollTop && this._lastScrollPosition === scrollTop) {
      return;
    }
    scrollTop = scrollTop || this._scrollablePanel().scrollTop;
    const range = this._panelService.calculateItems(scrollTop, this.itemsLength, this.bufferAmount());
    this._updateVirtualHeight(range.scrollHeight);
    this._contentPanel().style.transform = `translateY(${range.topPadding}px)`;
    this._zone.run(() => {
      this.update.emit(this.items().slice(range.start, range.end));
      this.scroll.emit({
        start: range.start,
        end: range.end
      });
    });
    if (isDefined(scrollTop) && this._lastScrollPosition === 0) {
      this._scrollablePanel().scrollTop = scrollTop;
      this._lastScrollPosition = scrollTop;
    }
  }
  _measureDimensions() {
    if (this._panelService.dimensions.itemHeight > 0 || this.itemsLength === 0) {
      return Promise.resolve(this._panelService.dimensions);
    }
    const [first] = this.items();
    this.update.emit([first]);
    return Promise.resolve().then(() => {
      const option = this._dropdown.querySelector(`#${first.htmlId}`);
      const optionHeight = option.clientHeight;
      this._virtualPadding().style.height = `${optionHeight * this.itemsLength}px`;
      const panelHeight = this._scrollablePanel().clientHeight;
      this._panelService.setDimensions(optionHeight, panelHeight);
      return this._panelService.dimensions;
    });
  }
  _fireScrollToEnd(scrollTop) {
    if (this._scrollToEndFired || scrollTop === 0) {
      return;
    }
    const padding = this.virtualScroll() ? this._virtualPadding() : this._contentPanel();
    if (scrollTop + this._dropdown.clientHeight >= padding.clientHeight - 1) {
      this._zone.run(() => this.scrollToEnd.emit());
      this._scrollToEndFired = true;
    }
  }
  _calculateCurrentPosition(dropdownEl) {
    const position = this.position();
    if (position !== "auto") {
      return position;
    }
    const selectRect = this._select.getBoundingClientRect();
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const offsetTop = selectRect.top + window.pageYOffset;
    const height = selectRect.height;
    const dropdownHeight = dropdownEl.getBoundingClientRect().height;
    if (offsetTop + height + dropdownHeight > scrollTop + document.documentElement.clientHeight) {
      return "top";
    } else {
      return "bottom";
    }
  }
  _appendDropdown() {
    if (!this.appendTo()) {
      return;
    }
    this._parent = this._dropdown.shadowRoot ? this._dropdown.shadowRoot.querySelector(this.appendTo()) : document.querySelector(this.appendTo());
    if (!this._parent) {
      throw new Error(`appendTo selector ${this.appendTo()} did not found any parent element`);
    }
    this._updateXPosition();
    this._parent.appendChild(this._dropdown);
  }
  _updateXPosition() {
    const select = this._select.getBoundingClientRect();
    const parent = this._parent.getBoundingClientRect();
    const isRTL = document.documentElement.dir === "rtl";
    const offsetLeft = select.left - parent.left;
    if (isRTL) {
      const offsetRight = parent.right - select.right;
      this._dropdown.style.right = offsetRight + "px";
      this._dropdown.style.left = "auto";
    } else {
      this._dropdown.style.left = offsetLeft + "px";
      this._dropdown.style.right = "auto";
    }
    this._dropdown.style.width = select.width + "px";
    this._dropdown.style.minWidth = select.width + "px";
  }
  _updateYPosition() {
    const select = this._select.getBoundingClientRect();
    const parent = this._parent.getBoundingClientRect();
    const delta = select.height;
    if (this._currentPosition === "top") {
      const offsetBottom = parent.bottom - select.bottom;
      this._dropdown.style.bottom = offsetBottom + delta + "px";
      this._dropdown.style.top = "auto";
    } else if (this._currentPosition === "bottom") {
      const offsetTop = select.top - parent.top;
      this._dropdown.style.top = offsetTop + delta + "px";
      this._dropdown.style.bottom = "auto";
    }
  }
  _setupMousedownListener() {
    this._zone.runOutsideAngular(() => {
      fromEvent(this._dropdown, "mousedown").pipe(takeUntil(this._destroy$)).subscribe((event) => {
        const target = event.target;
        if (target.tagName === "INPUT") {
          return;
        }
        event.preventDefault();
      });
    });
  }
};
_NgDropdownPanelComponent.\u0275fac = function NgDropdownPanelComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgDropdownPanelComponent)();
};
_NgDropdownPanelComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _NgDropdownPanelComponent,
  selectors: [["ng-dropdown-panel"]],
  viewQuery: function NgDropdownPanelComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx.contentElementRef, _c02, 5, ElementRef);
      \u0275\u0275viewQuerySignal(ctx.scrollElementRef, _c12, 5, ElementRef);
      \u0275\u0275viewQuerySignal(ctx.paddingElementRef, _c22, 5, ElementRef);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance(3);
    }
  },
  inputs: {
    items: [1, "items"],
    markedItem: [1, "markedItem"],
    position: [1, "position"],
    appendTo: [1, "appendTo"],
    bufferAmount: [1, "bufferAmount"],
    virtualScroll: [1, "virtualScroll"],
    headerTemplate: [1, "headerTemplate"],
    footerTemplate: [1, "footerTemplate"],
    filterValue: [1, "filterValue"],
    ariaLabelDropdown: [1, "ariaLabelDropdown"]
  },
  outputs: {
    update: "update",
    scroll: "scroll",
    scrollToEnd: "scrollToEnd",
    outsideClick: "outsideClick"
  },
  features: [\u0275\u0275NgOnChangesFeature],
  ngContentSelectors: _c3,
  decls: 9,
  vars: 7,
  consts: [["scroll", ""], ["padding", ""], ["content", ""], [1, "ng-dropdown-header"], ["role", "listbox", 1, "ng-dropdown-panel-items", "scroll-host"], [1, "ng-dropdown-footer"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]],
  template: function NgDropdownPanelComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275conditionalCreate(0, NgDropdownPanelComponent_Conditional_0_Template, 2, 4, "div", 3);
      \u0275\u0275elementStart(1, "div", 4, 0);
      \u0275\u0275element(3, "div", null, 1);
      \u0275\u0275elementStart(5, "div", null, 2);
      \u0275\u0275projection(7);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(8, NgDropdownPanelComponent_Conditional_8_Template, 2, 4, "div", 5);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.headerTemplate() ? 0 : -1);
      \u0275\u0275advance();
      \u0275\u0275attribute("aria-label", ctx.ariaLabelDropdown());
      \u0275\u0275advance(2);
      \u0275\u0275classProp("total-padding", ctx.virtualScroll());
      \u0275\u0275advance(2);
      \u0275\u0275classProp("scrollable-content", ctx.virtualScroll() && ctx.items().length);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.footerTemplate() ? 8 : -1);
    }
  },
  dependencies: [NgTemplateOutlet],
  encapsulation: 2,
  changeDetection: 0
});
var NgDropdownPanelComponent = _NgDropdownPanelComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgDropdownPanelComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      selector: "ng-dropdown-panel",
      template: `
		@if (headerTemplate()) {
			<div class="ng-dropdown-header">
				<ng-container [ngTemplateOutlet]="headerTemplate()" [ngTemplateOutletContext]="{ searchTerm: filterValue() }" />
			</div>
		}
		<div #scroll role="listbox" class="ng-dropdown-panel-items scroll-host" [attr.aria-label]="ariaLabelDropdown()">
			<div #padding [class.total-padding]="virtualScroll()"></div>
			<div #content [class.scrollable-content]="virtualScroll() && items().length">
				<ng-content />
			</div>
		</div>
		@if (footerTemplate()) {
			<div class="ng-dropdown-footer">
				<ng-container [ngTemplateOutlet]="footerTemplate()" [ngTemplateOutletContext]="{ searchTerm: filterValue() }" />
			</div>
		}
	`,
      imports: [NgTemplateOutlet]
    }]
  }], null, null);
})();
var _NgOptionComponent = class _NgOptionComponent {
  constructor() {
    this.value = input();
    this.disabled = input(false, {
      transform: booleanAttribute
    });
    this.elementRef = inject(ElementRef);
    this.label = signal("");
    this.stateChange = computed(() => ({
      value: this.value(),
      disabled: this.disabled(),
      label: this.label()
    }));
    this.stateChange$ = toObservable(this.stateChange);
    afterNextRender(() => {
      if (this._label !== this.label()) {
        this.label.set(this._label);
      }
    });
  }
  get _label() {
    return (this.elementRef.nativeElement.innerHTML || "").trim();
  }
};
_NgOptionComponent.\u0275fac = function NgOptionComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgOptionComponent)();
};
_NgOptionComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _NgOptionComponent,
  selectors: [["ng-option"]],
  inputs: {
    value: [1, "value"],
    disabled: [1, "disabled"]
  },
  ngContentSelectors: _c3,
  decls: 1,
  vars: 0,
  template: function NgOptionComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
var NgOptionComponent = _NgOptionComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgOptionComponent, [{
    type: Component,
    args: [{
      selector: "ng-option",
      standalone: true,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<ng-content />`
    }]
  }], () => [], null);
})();
var KeyCode;
(function(KeyCode2) {
  KeyCode2["Tab"] = "Tab";
  KeyCode2["Enter"] = "Enter";
  KeyCode2["Esc"] = "Escape";
  KeyCode2["Space"] = " ";
  KeyCode2["ArrowUp"] = "ArrowUp";
  KeyCode2["ArrowDown"] = "ArrowDown";
  KeyCode2["Backspace"] = "Backspace";
})(KeyCode || (KeyCode = {}));
function DefaultSelectionModelFactory() {
  return new DefaultSelectionModel();
}
var DefaultSelectionModel = class {
  constructor() {
    this._selected = [];
  }
  get value() {
    return this._selected;
  }
  select(item, multiple, groupAsModel) {
    item.selected = true;
    if (!item.children || !multiple && groupAsModel) {
      this._selected.push(item);
    }
    if (multiple) {
      if (item.parent) {
        const childrenCount = item.parent.children.length;
        const selectedCount = item.parent.children.filter((x) => x.selected).length;
        item.parent.selected = childrenCount === selectedCount;
      } else if (item.children) {
        this._setChildrenSelectedState(item.children, true);
        this._removeChildren(item);
        if (groupAsModel && this._activeChildren(item)) {
          this._selected = [...this._selected.filter((x) => x.parent !== item), item];
        } else {
          this._selected = [...this._selected, ...item.children.filter((x) => !x.disabled)];
        }
      }
    }
  }
  unselect(item, multiple) {
    this._selected = this._selected.filter((x) => x !== item);
    item.selected = false;
    if (multiple) {
      if (item.parent && item.parent.selected) {
        const children = item.parent.children;
        this._removeParent(item.parent);
        this._removeChildren(item.parent);
        this._selected.push(...children.filter((x) => x !== item && !x.disabled));
        item.parent.selected = false;
      } else if (item.children) {
        this._setChildrenSelectedState(item.children, false);
        this._removeChildren(item);
      }
    }
  }
  clear(keepDisabled) {
    this._selected = keepDisabled ? this._selected.filter((x) => x.disabled) : [];
  }
  _setChildrenSelectedState(children, selected) {
    for (const child of children) {
      if (child.disabled) {
        continue;
      }
      child.selected = selected;
    }
  }
  _removeChildren(parent) {
    this._selected = [...this._selected.filter((x) => x.parent !== parent), ...parent.children.filter((x) => x.parent === parent && x.disabled && x.selected)];
  }
  _removeParent(parent) {
    this._selected = this._selected.filter((x) => x !== parent);
  }
  _activeChildren(item) {
    return item.children.every((x) => !x.disabled || x.selected);
  }
};
var SELECTION_MODEL_FACTORY = new InjectionToken("ng-select-selection-model");
var _NgSelectComponent = class _NgSelectComponent {
  constructor() {
    this.classes = inject(new HostAttributeToken("class"), {
      optional: true
    });
    this.autoFocus = inject(new HostAttributeToken("autofocus"), {
      optional: true
    });
    this.config = inject(NgSelectConfig);
    this._cd = inject(ChangeDetectorRef);
    this._console = inject(ConsoleService);
    this._disabled = signal(false);
    this.ariaLabelDropdown = input("Options List");
    this.ariaLabel = input(void 0);
    this.markFirst = input(true, {
      transform: booleanAttribute
    });
    this.placeholder = input(this.config.placeholder);
    this.fixedPlaceholder = input(true);
    this.notFoundText = input(void 0);
    this.typeToSearchText = input(void 0);
    this.preventToggleOnRightClick = input(false);
    this.addTagText = input(void 0);
    this.loadingText = input(void 0);
    this.clearAllText = input(void 0);
    this.dropdownPosition = input("auto");
    this.appendTo = input(void 0);
    this.loading = input(false, {
      transform: booleanAttribute
    });
    this.closeOnSelect = input(true, {
      transform: booleanAttribute
    });
    this.hideSelected = input(false, {
      transform: booleanAttribute
    });
    this.selectOnTab = input(false, {
      transform: booleanAttribute
    });
    this.openOnEnter = input(void 0, {
      transform: booleanAttribute
    });
    this.maxSelectedItems = input(void 0, {
      transform: numberAttribute
    });
    this.groupBy = input(void 0);
    this.groupValue = input(void 0);
    this.bufferAmount = input(4, {
      transform: numberAttribute
    });
    this.virtualScroll = input(void 0, {
      transform: booleanAttribute
    });
    this.selectableGroup = input(false, {
      transform: booleanAttribute
    });
    this.tabFocusOnClearButton = input();
    this.selectableGroupAsModel = input(true, {
      transform: booleanAttribute
    });
    this.searchFn = input(null);
    this.trackByFn = input(null);
    this.clearOnBackspace = input(true, {
      transform: booleanAttribute
    });
    this.labelForId = input(null);
    this.inputAttrs = input({});
    this.tabIndex = input(void 0, {
      transform: numberAttribute
    });
    this.readonly = input(false, {
      transform: booleanAttribute
    });
    this.searchWhileComposing = input(true, {
      transform: booleanAttribute
    });
    this.minTermLength = input(0, {
      transform: numberAttribute
    });
    this.editableSearchTerm = input(false, {
      transform: booleanAttribute
    });
    this.ngClass = input(null);
    this.typeahead = input(void 0);
    this.multiple = input(false, {
      transform: booleanAttribute
    });
    this.addTag = input(false);
    this.searchable = input(true, {
      transform: booleanAttribute
    });
    this.clearable = input(true, {
      transform: booleanAttribute
    });
    this.deselectOnClick = input();
    this.clearSearchOnAdd = input(void 0);
    this.compareWith = input(void 0, {
      transform: (fn) => {
        if (fn !== void 0 && fn !== null && !isFunction2(fn)) {
          throw Error("`compareWith` must be a function.");
        }
        return fn;
      }
    });
    this.bindLabel = model(void 0);
    this.bindValue = model(void 0);
    this.appearance = model(void 0);
    this.isOpen = model(false);
    this.items = model([]);
    this.blurEvent = output({
      alias: "blur"
    });
    this.focusEvent = output({
      alias: "focus"
    });
    this.changeEvent = output({
      alias: "change"
    });
    this.openEvent = output({
      alias: "open"
    });
    this.closeEvent = output({
      alias: "close"
    });
    this.searchEvent = output({
      alias: "search"
    });
    this.clearEvent = output({
      alias: "clear"
    });
    this.addEvent = output({
      alias: "add"
    });
    this.removeEvent = output({
      alias: "remove"
    });
    this.scroll = output({
      alias: "scroll"
    });
    this.scrollToEnd = output({
      alias: "scrollToEnd"
    });
    this.disabled = computed(() => this.readonly() || this._disabled());
    this.clearSearchOnAddValue = computed(() => {
      if (isDefined(this.clearSearchOnAdd())) {
        return this.clearSearchOnAdd();
      }
      if (isDefined(this.config.clearSearchOnAdd)) {
        return this.config.clearSearchOnAdd;
      }
      return this.closeOnSelect();
    });
    this.deselectOnClickValue = computed(() => {
      if (isDefined(this.deselectOnClick())) {
        return this.deselectOnClick();
      }
      if (isDefined(this.config.deselectOnClick)) {
        return this.config.deselectOnClick;
      }
      return this.multiple();
    });
    this.optionTemplate = contentChild(NgOptionTemplateDirective, {
      read: TemplateRef
    });
    this.optgroupTemplate = contentChild(NgOptgroupTemplateDirective, {
      read: TemplateRef
    });
    this.labelTemplate = contentChild(NgLabelTemplateDirective, {
      read: TemplateRef
    });
    this.multiLabelTemplate = contentChild(NgMultiLabelTemplateDirective, {
      read: TemplateRef
    });
    this.headerTemplate = contentChild(NgHeaderTemplateDirective, {
      read: TemplateRef
    });
    this.footerTemplate = contentChild(NgFooterTemplateDirective, {
      read: TemplateRef
    });
    this.notFoundTemplate = contentChild(NgNotFoundTemplateDirective, {
      read: TemplateRef
    });
    this.placeholderTemplate = contentChild(NgPlaceholderTemplateDirective, {
      read: TemplateRef
    });
    this.typeToSearchTemplate = contentChild(NgTypeToSearchTemplateDirective, {
      read: TemplateRef
    });
    this.loadingTextTemplate = contentChild(NgLoadingTextTemplateDirective, {
      read: TemplateRef
    });
    this.tagTemplate = contentChild(NgTagTemplateDirective, {
      read: TemplateRef
    });
    this.loadingSpinnerTemplate = contentChild(NgLoadingSpinnerTemplateDirective, {
      read: TemplateRef
    });
    this.clearButtonTemplate = contentChild(NgClearButtonTemplateDirective, {
      read: TemplateRef
    });
    this.dropdownPanel = viewChild(forwardRef(() => NgDropdownPanelComponent));
    this.searchInput = viewChild("searchInput");
    this.clearButton = viewChild("clearButton");
    this.ngOptions = contentChildren(NgOptionComponent, {
      descendants: true
    });
    this.ngOptionsObservable = toObservable(this.ngOptions);
    this.viewPortItems = [];
    this.searchTerm = null;
    this.dropdownId = newId();
    this.escapeHTML = true;
    this.tabFocusOnClear = signal(true);
    this._defaultLabel = "label";
    this._pressedKeys = [];
    this._isComposing = false;
    this._destroy$ = new Subject();
    this._keyPress$ = new Subject();
    this.keyDownFn = input((_) => true);
    this.clearItem = (item) => {
      const option = this.selectedItems.find((x) => x.value === item);
      this.unselect(option);
    };
    this.trackByOption = (_, item) => {
      if (this.trackByFn()) {
        return this.trackByFn()(item.value);
      }
      return item;
    };
    this._onChange = (_) => {
    };
    this._onTouched = () => {
    };
    const config = this.config;
    const newSelectionModel = inject(SELECTION_MODEL_FACTORY, {
      optional: true
    });
    const _elementRef = inject(ElementRef);
    this._mergeGlobalConfig(config);
    this.itemsList = new ItemsList(this, newSelectionModel ? newSelectionModel() : DefaultSelectionModelFactory());
    this.element = _elementRef.nativeElement;
  }
  get filtered() {
    return !!this.searchTerm && this.searchable() || this._isComposing;
  }
  get selectedItems() {
    return this.itemsList.selectedItems;
  }
  get selectedValues() {
    return this.selectedItems.map((x) => x.value);
  }
  get hasValue() {
    return this.selectedItems.length > 0;
  }
  get currentPanelPosition() {
    if (this.dropdownPanel()) {
      return this.dropdownPanel().currentPosition;
    }
    return void 0;
  }
  get showAddTag() {
    if (!this._validTerm) {
      return false;
    }
    const term = this.searchTerm.toLowerCase().trim();
    return this.addTag() && !this.itemsList.filteredItems.some((x) => x.label.toLowerCase() === term) && (!this.hideSelected() && this.isOpen() || !this.selectedItems.some((x) => x.label.toLowerCase() === term)) && !this.loading();
  }
  get _editableSearchTerm() {
    return this.editableSearchTerm() && !this.multiple();
  }
  get _isTypeahead() {
    return this.typeahead() && this.typeahead().observed;
  }
  get _validTerm() {
    const term = this.searchTerm?.trim();
    return term && term.length >= this.minTermLength();
  }
  ngOnInit() {
    this._handleKeyPresses();
    this._setInputAttributes();
  }
  ngOnChanges(changes) {
    if (changes.multiple) {
      this.itemsList.clearSelected();
    }
    if (changes.items) {
      this._itemsAreUsed = true;
      this._setItems(changes.items.currentValue || []);
    }
    if (changes.isOpen) {
      this._manualOpen = isDefined(changes.isOpen.currentValue);
    }
    if (changes.groupBy) {
      if (!changes.items) {
        this._setItems([...this.items()]);
      }
    }
    if (changes.inputAttrs) {
      this._setInputAttributes();
    }
    this._setTabFocusOnClear();
  }
  ngAfterViewInit() {
    if (!this._itemsAreUsed) {
      this.escapeHTML = false;
      this._setItemsFromNgOptions();
    }
    if (isDefined(this.autoFocus)) {
      this.focus();
    }
  }
  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }
  handleKeyDown($event) {
    const keyName = $event.key;
    if (Object.values(KeyCode).includes(keyName)) {
      if (this.keyDownFn()($event) === false) {
        return;
      }
      this.handleKeyCode($event);
    } else if (keyName && keyName.length === 1) {
      this._keyPress$.next(keyName.toLocaleLowerCase());
    }
  }
  handleKeyCode($event) {
    const target = $event.target;
    if (this.clearButton() && this.clearButton().nativeElement === target) {
      this.handleKeyCodeClear($event);
    } else {
      this.handleKeyCodeInput($event);
    }
  }
  handleKeyCodeInput($event) {
    switch ($event.key) {
      case KeyCode.ArrowDown:
        this._handleArrowDown($event);
        break;
      case KeyCode.ArrowUp:
        this._handleArrowUp($event);
        break;
      case KeyCode.Space:
        this._handleSpace($event);
        break;
      case KeyCode.Enter:
        this._handleEnter($event);
        break;
      case KeyCode.Tab:
        this._handleTab($event);
        break;
      case KeyCode.Esc:
        this.close();
        $event.preventDefault();
        break;
      case KeyCode.Backspace:
        this._handleBackspace();
        break;
    }
  }
  handleKeyCodeClear($event) {
    switch ($event.key) {
      case KeyCode.Enter:
        this.handleClearClick();
        $event.preventDefault();
        break;
    }
  }
  handleMousedown($event) {
    if (this.disabled()) {
      return;
    }
    if (this.preventToggleOnRightClick() && $event.button === 2) {
      return false;
    }
    const target = $event.target;
    if (target.tagName !== "INPUT") {
      $event.preventDefault();
    }
    if (target.classList.contains("ng-clear-wrapper")) {
      return;
    }
    if (target.classList.contains("ng-arrow-wrapper")) {
      this.handleArrowClick();
      return;
    }
    if (target.classList.contains("ng-value-icon")) {
      return;
    }
    if (!this.focused) {
      this.focus();
    }
    if (this.searchable()) {
      this.open();
    } else {
      this.toggle();
    }
  }
  handleArrowClick() {
    if (this.isOpen()) {
      this.close();
    } else {
      this.open();
    }
  }
  handleClearClick(_event) {
    if (this.hasValue) {
      this.itemsList.clearSelected(true);
      this._updateNgModel();
    }
    this._clearSearch();
    this.focus();
    this.clearEvent.emit();
    this._onSelectionChanged();
  }
  clearModel() {
    if (!this.clearable()) {
      return;
    }
    this.itemsList.clearSelected();
    this._updateNgModel();
  }
  writeValue(value) {
    this.itemsList.clearSelected();
    this._handleWriteValue(value);
    this._cd.markForCheck();
  }
  registerOnChange(fn) {
    this._onChange = fn;
  }
  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  setDisabledState(state) {
    this._disabled.set(state);
    this._cd.markForCheck();
  }
  toggle() {
    if (!this.isOpen()) {
      this.open();
    } else {
      this.close();
    }
  }
  open() {
    if (this.disabled() || this.isOpen() || this._manualOpen) {
      return;
    }
    if (!this._isTypeahead && !this.addTag() && this.itemsList.noItemsToSelect) {
      return;
    }
    this.isOpen.set(true);
    this.itemsList.markSelectedOrDefault(this.markFirst());
    this.openEvent.emit();
    if (!this.searchTerm) {
      this.focus();
    }
    this.detectChanges();
  }
  close() {
    if (!this.isOpen() || this._manualOpen) {
      return;
    }
    this.isOpen.set(false);
    this._isComposing = false;
    if (!this._editableSearchTerm) {
      this._clearSearch();
    } else {
      this.itemsList.resetFilteredItems();
    }
    this.itemsList.unmarkItem();
    this._onTouched();
    this.closeEvent.emit();
    this._cd.markForCheck();
  }
  toggleItem(item) {
    if (!item || item.disabled || this.disabled()) {
      return;
    }
    if (this.deselectOnClickValue() && item.selected) {
      this.unselect(item);
    } else {
      this.select(item);
    }
    if (this._editableSearchTerm) {
      this._setSearchTermFromItems();
    }
  }
  select(item) {
    if (!item.selected) {
      this.itemsList.select(item);
      if (this.clearSearchOnAddValue() && !this._editableSearchTerm) {
        this._clearSearch();
      }
      this._updateNgModel();
      if (this.multiple()) {
        this.addEvent.emit(item.value);
      }
    }
    if (this.closeOnSelect() || this.itemsList.noItemsToSelect) {
      this.close();
    }
    this._onSelectionChanged();
  }
  focus() {
    this.searchInput().nativeElement.focus();
  }
  blur() {
    this.searchInput().nativeElement.blur();
  }
  unselect(item) {
    if (!item) {
      return;
    }
    this.itemsList.unselect(item);
    this.focus();
    this._updateNgModel();
    this.removeEvent.emit(item.value);
    this._onSelectionChanged();
  }
  selectTag() {
    let tag;
    if (isFunction2(this.addTag())) {
      tag = this.addTag()(this.searchTerm);
    } else {
      tag = this._primitive ? this.searchTerm : {
        [this.bindLabel()]: this.searchTerm
      };
    }
    const handleTag = (item) => this._isTypeahead || !this.isOpen() ? this.itemsList.mapItem(item, null) : this.itemsList.addItem(item);
    if (isPromise2(tag)) {
      tag.then((item) => this.select(handleTag(item))).catch(() => {
      });
    } else if (tag) {
      this.select(handleTag(tag));
    }
  }
  showClear() {
    return this.clearable() && (this.hasValue || this.searchTerm) && !this.disabled();
  }
  focusOnClear() {
    this.blur();
    if (this.clearButton()) {
      this.clearButton().nativeElement.focus();
    }
  }
  showNoItemsFound() {
    const empty = this.itemsList.filteredItems.length === 0;
    return (empty && !this._isTypeahead && !this.loading() || empty && this._isTypeahead && this._validTerm && !this.loading()) && !this.showAddTag;
  }
  showTypeToSearch() {
    const empty = this.itemsList.filteredItems.length === 0;
    return empty && this._isTypeahead && !this._validTerm && !this.loading();
  }
  onCompositionStart() {
    this._isComposing = true;
  }
  onCompositionEnd(term) {
    this._isComposing = false;
    if (this.searchWhileComposing()) {
      return;
    }
    this.filter(term);
  }
  filter(term) {
    if (this._isComposing && !this.searchWhileComposing()) {
      return;
    }
    this.searchTerm = term;
    if (this._isTypeahead && (this._validTerm || this.minTermLength() === 0)) {
      this.typeahead().next(term);
    }
    if (!this._isTypeahead) {
      this.itemsList.filter(this.searchTerm);
      if (this.isOpen()) {
        this.itemsList.markSelectedOrDefault(this.markFirst());
      }
    }
    this.searchEvent.emit({
      term,
      items: this.itemsList.filteredItems.map((x) => x.value)
    });
    this.open();
  }
  onInputFocus($event) {
    if (this.focused) {
      return;
    }
    if (this._editableSearchTerm) {
      this._setSearchTermFromItems();
    }
    this.element.classList.add("ng-select-focused");
    this.focusEvent.emit($event);
    this.focused = true;
  }
  onInputBlur($event) {
    this.element.classList.remove("ng-select-focused");
    this.blurEvent.emit($event);
    if (!this.isOpen() && !this.disabled()) {
      this._onTouched();
    }
    if (this._editableSearchTerm) {
      this._setSearchTermFromItems();
    }
    this.focused = false;
  }
  onItemHover(item) {
    if (item.disabled) {
      return;
    }
    this.itemsList.markItem(item);
  }
  detectChanges() {
    if (!this._cd.destroyed) {
      this._cd.detectChanges();
    }
  }
  _setSearchTermFromItems() {
    const selected = this.selectedItems?.[0];
    this.searchTerm = selected?.label ?? null;
  }
  _setItems(items) {
    const firstItem = items[0];
    this.bindLabel.set(this.bindLabel() || this._defaultLabel);
    this._primitive = isDefined(firstItem) ? !isObject2(firstItem) : this._primitive || this.bindLabel() === this._defaultLabel;
    this.itemsList.setItems(items);
    if (items.length > 0 && this.hasValue) {
      this.itemsList.mapSelectedItems();
    }
    if (this.isOpen() && isDefined(this.searchTerm) && !this._isTypeahead) {
      this.itemsList.filter(this.searchTerm);
    }
    if (this._isTypeahead || this.isOpen()) {
      this.itemsList.markSelectedOrDefault(this.markFirst());
    }
  }
  _setItemsFromNgOptions() {
    const mapNgOptions = (options) => {
      const items = options.map((option) => ({
        $ngOptionValue: option.value(),
        $ngOptionLabel: option.elementRef.nativeElement.innerHTML,
        disabled: option.disabled()
      })) ?? [];
      this.items.set(items);
      this.itemsList.setItems(items);
      if (this.hasValue) {
        this.itemsList.mapSelectedItems();
      }
    };
    const handleOptionChange = (options) => {
      return merge(...options.map((option) => option.stateChange$)).pipe(tap((option) => {
        const item = this.itemsList.findItem(option.value);
        item.disabled = option.disabled;
        item.label = option.label || item.label;
      }));
    };
    this.ngOptionsObservable.pipe(startWith(this.ngOptions()), takeUntil(this._destroy$), tap((options) => {
      this.bindLabel.set(this._defaultLabel);
      mapNgOptions(options);
      this._cd.detectChanges();
    }), switchMap((options) => handleOptionChange(options))).subscribe();
  }
  _isValidWriteValue(value) {
    if (!isDefined(value) || this.multiple() && value === "" || Array.isArray(value) && value.length === 0) {
      return false;
    }
    const validateBinding = (item) => {
      if (!isDefined(this.compareWith()) && isObject2(item) && this.bindValue()) {
        this._console.warn(`Setting object(${JSON.stringify(item)}) as your model with bindValue is not allowed unless [compareWith] is used.`);
        return false;
      }
      return true;
    };
    if (this.multiple()) {
      if (!Array.isArray(value)) {
        this._console.warn("Multiple select ngModel should be array.");
        return false;
      }
      return value.every((item) => validateBinding(item));
    } else {
      return validateBinding(value);
    }
  }
  _handleWriteValue(ngModel) {
    if (!this._isValidWriteValue(ngModel)) {
      return;
    }
    const select = (val) => {
      let item = this.itemsList.findItem(val);
      if (item) {
        this.itemsList.select(item);
      } else {
        const isValObject = isObject2(val);
        const isPrimitive = !isValObject && !this.bindValue();
        if (isValObject || isPrimitive) {
          this.itemsList.select(this.itemsList.mapItem(val, null));
        } else if (this.bindValue()) {
          item = {
            [this.bindLabel()]: null,
            [this.bindValue()]: val
          };
          this.itemsList.select(this.itemsList.mapItem(item, null));
        }
      }
    };
    if (this.multiple()) {
      ngModel.forEach((item) => select(item));
    } else {
      select(ngModel);
    }
  }
  _handleKeyPresses() {
    if (this.searchable()) {
      return;
    }
    this._keyPress$.pipe(takeUntil(this._destroy$), tap((letter) => this._pressedKeys.push(letter)), debounceTime(200), filter(() => this._pressedKeys.length > 0), map(() => this._pressedKeys.join(""))).subscribe((term) => {
      const item = this.itemsList.findByLabel(term);
      if (item) {
        if (this.isOpen()) {
          this.itemsList.markItem(item);
          this._scrollToMarked();
          this._cd.markForCheck();
        } else {
          this.select(item);
        }
      }
      this._pressedKeys = [];
    });
  }
  _setInputAttributes() {
    const input2 = this.searchInput().nativeElement;
    const attributes = __spreadValues({
      type: "text",
      autocorrect: "off",
      autocapitalize: "off",
      autocomplete: "off",
      "aria-controls": this.dropdownId
    }, this.inputAttrs());
    for (const key of Object.keys(attributes)) {
      input2.setAttribute(key, attributes[key]);
    }
  }
  _setTabFocusOnClear() {
    this.tabFocusOnClear.set(isDefined(this.tabFocusOnClearButton()) ? !!this.tabFocusOnClearButton() : this.config.tabFocusOnClear);
  }
  _updateNgModel() {
    const model2 = [];
    for (const item of this.selectedItems) {
      if (this.bindValue()) {
        let value = null;
        if (item.children) {
          const groupKey = this.groupValue() ? this.bindValue() : this.groupBy();
          value = item.value[groupKey || this.groupBy()];
        } else {
          value = this.itemsList.resolveNested(item.value, this.bindValue());
        }
        model2.push(value);
      } else {
        model2.push(item.value);
      }
    }
    const selected = this.selectedItems.map((x) => x.value);
    if (this.multiple()) {
      this._onChange(model2);
      this.changeEvent.emit(selected);
    } else {
      this._onChange(isDefined(model2[0]) ? model2[0] : null);
      this.changeEvent.emit(selected[0]);
    }
    this._cd.markForCheck();
  }
  _clearSearch() {
    if (!this.searchTerm) {
      return;
    }
    this._changeSearch(null);
    this.itemsList.resetFilteredItems();
  }
  _changeSearch(searchTerm) {
    this.searchTerm = searchTerm;
    if (this._isTypeahead) {
      this.typeahead().next(searchTerm);
    }
  }
  _scrollToMarked() {
    if (!this.isOpen() || !this.dropdownPanel()) {
      return;
    }
    this.dropdownPanel().scrollTo(this.itemsList.markedItem);
  }
  _scrollToTag() {
    if (!this.isOpen() || !this.dropdownPanel()) {
      return;
    }
    this.dropdownPanel().scrollToTag();
  }
  _onSelectionChanged() {
    const appendTo = this.appendTo() ?? this.config.appendTo;
    if (this.isOpen() && this.deselectOnClickValue() && appendTo) {
      this._cd.detectChanges();
      this.dropdownPanel().adjustPosition();
    }
  }
  _handleTab($event) {
    if (this.isOpen() === false) {
      if (this.showClear() && !$event.shiftKey && this.tabFocusOnClear()) {
        this.focusOnClear();
        $event.preventDefault();
      } else if (!this.addTag()) {
        return;
      }
    }
    if (this.selectOnTab()) {
      if (this.itemsList.markedItem) {
        this.toggleItem(this.itemsList.markedItem);
        $event.preventDefault();
      } else if (this.showAddTag) {
        this.selectTag();
        $event.preventDefault();
      } else {
        this.close();
      }
    } else {
      this.close();
    }
  }
  _handleEnter($event) {
    const openOnEnter = this.openOnEnter() ?? this.config.openOnEnter;
    if (this.isOpen() || this._manualOpen) {
      if (this.itemsList.markedItem) {
        this.toggleItem(this.itemsList.markedItem);
      } else if (this.showAddTag) {
        this.selectTag();
      }
    } else if (openOnEnter) {
      this.open();
    } else {
      return;
    }
    $event.preventDefault();
  }
  _handleSpace($event) {
    if (this.isOpen() || this._manualOpen) {
      return;
    }
    this.open();
    $event.preventDefault();
  }
  _handleArrowDown($event) {
    if (this._nextItemIsTag(1)) {
      this.itemsList.unmarkItem();
      this._scrollToTag();
    } else {
      this.itemsList.markNextItem();
      this._scrollToMarked();
    }
    this.open();
    $event.preventDefault();
  }
  _handleArrowUp($event) {
    if (!this.isOpen()) {
      return;
    }
    if (this._nextItemIsTag(-1)) {
      this.itemsList.unmarkItem();
      this._scrollToTag();
    } else {
      this.itemsList.markPreviousItem();
      this._scrollToMarked();
    }
    $event.preventDefault();
  }
  _nextItemIsTag(nextStep) {
    const nextIndex = this.itemsList.markedIndex + nextStep;
    return this.addTag() && this.searchTerm && this.itemsList.markedItem && (nextIndex < 0 || nextIndex === this.itemsList.filteredItems.length);
  }
  _handleBackspace() {
    if (this.searchTerm || !this.clearable() || !this.clearOnBackspace() || !this.hasValue) {
      return;
    }
    if (this.multiple()) {
      this.unselect(this.itemsList.lastSelectedItem);
    } else {
      this.clearModel();
    }
  }
  _mergeGlobalConfig(config) {
    this.bindValue.set(this.bindValue() || config.bindValue);
    this.bindLabel.set(this.bindLabel() || config.bindLabel);
    this.appearance.set(this.appearance() || config.appearance);
    this._setTabFocusOnClear();
  }
  /**
   * Gets virtual scroll value from input or from config
   *
   *  @param config NgSelectConfig object
   *
   *  @returns `true` if virtual scroll is enabled, `false` otherwise
   */
  getVirtualScroll(config) {
    return isDefined(this.virtualScroll) ? this.virtualScroll() : this.isVirtualScrollDisabled(config);
  }
  /**
   * Gets disableVirtualScroll value from input or from config
   *
   *  @param config NgSelectConfig object
   *
   *  @returns `true` if disableVirtualScroll is enabled, `false` otherwise
   */
  isVirtualScrollDisabled(config) {
    return isDefined(config.disableVirtualScroll) ? !config.disableVirtualScroll : false;
  }
};
_NgSelectComponent.\u0275fac = function NgSelectComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgSelectComponent)();
};
_NgSelectComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _NgSelectComponent,
  selectors: [["ng-select"]],
  contentQueries: function NgSelectComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      \u0275\u0275contentQuerySignal(dirIndex, ctx.optionTemplate, NgOptionTemplateDirective, 5, TemplateRef);
      \u0275\u0275contentQuerySignal(dirIndex, ctx.optgroupTemplate, NgOptgroupTemplateDirective, 5, TemplateRef);
      \u0275\u0275contentQuerySignal(dirIndex, ctx.labelTemplate, NgLabelTemplateDirective, 5, TemplateRef);
      \u0275\u0275contentQuerySignal(dirIndex, ctx.multiLabelTemplate, NgMultiLabelTemplateDirective, 5, TemplateRef);
      \u0275\u0275contentQuerySignal(dirIndex, ctx.headerTemplate, NgHeaderTemplateDirective, 5, TemplateRef);
      \u0275\u0275contentQuerySignal(dirIndex, ctx.footerTemplate, NgFooterTemplateDirective, 5, TemplateRef);
      \u0275\u0275contentQuerySignal(dirIndex, ctx.notFoundTemplate, NgNotFoundTemplateDirective, 5, TemplateRef);
      \u0275\u0275contentQuerySignal(dirIndex, ctx.placeholderTemplate, NgPlaceholderTemplateDirective, 5, TemplateRef);
      \u0275\u0275contentQuerySignal(dirIndex, ctx.typeToSearchTemplate, NgTypeToSearchTemplateDirective, 5, TemplateRef);
      \u0275\u0275contentQuerySignal(dirIndex, ctx.loadingTextTemplate, NgLoadingTextTemplateDirective, 5, TemplateRef);
      \u0275\u0275contentQuerySignal(dirIndex, ctx.tagTemplate, NgTagTemplateDirective, 5, TemplateRef);
      \u0275\u0275contentQuerySignal(dirIndex, ctx.loadingSpinnerTemplate, NgLoadingSpinnerTemplateDirective, 5, TemplateRef);
      \u0275\u0275contentQuerySignal(dirIndex, ctx.clearButtonTemplate, NgClearButtonTemplateDirective, 5, TemplateRef);
      \u0275\u0275contentQuerySignal(dirIndex, ctx.ngOptions, NgOptionComponent, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance(14);
    }
  },
  viewQuery: function NgSelectComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx.dropdownPanel, NgDropdownPanelComponent, 5);
      \u0275\u0275viewQuerySignal(ctx.searchInput, _c5, 5);
      \u0275\u0275viewQuerySignal(ctx.clearButton, _c6, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance(3);
    }
  },
  hostVars: 20,
  hostBindings: function NgSelectComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("keydown", function NgSelectComponent_keydown_HostBindingHandler($event) {
        return ctx.handleKeyDown($event);
      });
    }
    if (rf & 2) {
      \u0275\u0275classProp("ng-select", true)("ng-select-single", !ctx.multiple())("ng-select-typeahead", ctx.typeahead())("ng-select-multiple", ctx.multiple())("ng-select-taggable", ctx.addTag())("ng-select-searchable", ctx.searchable())("ng-select-clearable", ctx.clearable())("ng-select-opened", ctx.isOpen())("ng-select-filtered", ctx.filtered)("ng-select-disabled", ctx.disabled());
    }
  },
  inputs: {
    ariaLabelDropdown: [1, "ariaLabelDropdown"],
    ariaLabel: [1, "ariaLabel"],
    markFirst: [1, "markFirst"],
    placeholder: [1, "placeholder"],
    fixedPlaceholder: [1, "fixedPlaceholder"],
    notFoundText: [1, "notFoundText"],
    typeToSearchText: [1, "typeToSearchText"],
    preventToggleOnRightClick: [1, "preventToggleOnRightClick"],
    addTagText: [1, "addTagText"],
    loadingText: [1, "loadingText"],
    clearAllText: [1, "clearAllText"],
    dropdownPosition: [1, "dropdownPosition"],
    appendTo: [1, "appendTo"],
    loading: [1, "loading"],
    closeOnSelect: [1, "closeOnSelect"],
    hideSelected: [1, "hideSelected"],
    selectOnTab: [1, "selectOnTab"],
    openOnEnter: [1, "openOnEnter"],
    maxSelectedItems: [1, "maxSelectedItems"],
    groupBy: [1, "groupBy"],
    groupValue: [1, "groupValue"],
    bufferAmount: [1, "bufferAmount"],
    virtualScroll: [1, "virtualScroll"],
    selectableGroup: [1, "selectableGroup"],
    tabFocusOnClearButton: [1, "tabFocusOnClearButton"],
    selectableGroupAsModel: [1, "selectableGroupAsModel"],
    searchFn: [1, "searchFn"],
    trackByFn: [1, "trackByFn"],
    clearOnBackspace: [1, "clearOnBackspace"],
    labelForId: [1, "labelForId"],
    inputAttrs: [1, "inputAttrs"],
    tabIndex: [1, "tabIndex"],
    readonly: [1, "readonly"],
    searchWhileComposing: [1, "searchWhileComposing"],
    minTermLength: [1, "minTermLength"],
    editableSearchTerm: [1, "editableSearchTerm"],
    ngClass: [1, "ngClass"],
    typeahead: [1, "typeahead"],
    multiple: [1, "multiple"],
    addTag: [1, "addTag"],
    searchable: [1, "searchable"],
    clearable: [1, "clearable"],
    deselectOnClick: [1, "deselectOnClick"],
    clearSearchOnAdd: [1, "clearSearchOnAdd"],
    compareWith: [1, "compareWith"],
    bindLabel: [1, "bindLabel"],
    bindValue: [1, "bindValue"],
    appearance: [1, "appearance"],
    isOpen: [1, "isOpen"],
    items: [1, "items"],
    keyDownFn: [1, "keyDownFn"]
  },
  outputs: {
    bindLabel: "bindLabelChange",
    bindValue: "bindValueChange",
    appearance: "appearanceChange",
    isOpen: "isOpenChange",
    items: "itemsChange",
    blurEvent: "blur",
    focusEvent: "focus",
    changeEvent: "change",
    openEvent: "open",
    closeEvent: "close",
    searchEvent: "search",
    clearEvent: "clear",
    addEvent: "add",
    removeEvent: "remove",
    scroll: "scroll",
    scrollToEnd: "scrollToEnd"
  },
  features: [\u0275\u0275ProvidersFeature([{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => _NgSelectComponent),
    multi: true
  }, NgDropdownPanelService]), \u0275\u0275NgOnChangesFeature],
  decls: 15,
  vars: 20,
  consts: [["searchInput", ""], ["defaultPlaceholderTemplate", ""], ["defaultLabelTemplate", ""], ["defaultLoadingSpinnerTemplate", ""], ["clearButton", ""], ["defaultOptionTemplate", ""], ["defaultTagTemplate", ""], ["defaultNotFoundTemplate", ""], ["defaultTypeToSearchTemplate", ""], ["defaultLoadingTextTemplate", ""], [1, "ng-select-container", 3, "mousedown"], [1, "ng-value-container"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "ng-input"], ["aria-autocomplete", "list", "role", "combobox", 3, "blur", "change", "compositionend", "compositionstart", "focus", "input", "disabled", "readOnly", "value"], [1, "ng-arrow-wrapper"], [1, "ng-arrow"], [1, "ng-dropdown-panel", 3, "virtualScroll", "bufferAmount", "appendTo", "position", "headerTemplate", "footerTemplate", "filterValue", "items", "markedItem", "ng-select-multiple", "class", "id", "ariaLabelDropdown"], ["aria-atomic", "true", "aria-live", "polite", "role", "status", 1, "ng-visually-hidden"], [3, "ngTemplateOutlet"], [1, "ng-placeholder"], [1, "ng-value", 3, "ng-value-disabled"], [1, "ng-value"], ["aria-hidden", "true", 1, "ng-value-icon", "left", 3, "click"], [1, "ng-value-label", 3, "ngItemLabel", "escape"], [1, "ng-spinner-loader"], ["role", "button", "tabindex", "0", 1, "ng-clear-wrapper", 3, "title"], ["role", "button", "tabindex", "0", 1, "ng-clear-wrapper", 3, "click", "title"], ["aria-hidden", "true", 1, "ng-clear"], [1, "ng-dropdown-panel", 3, "update", "scroll", "scrollToEnd", "outsideClick", "virtualScroll", "bufferAmount", "appendTo", "position", "headerTemplate", "footerTemplate", "filterValue", "items", "markedItem", "id", "ariaLabelDropdown"], [1, "ng-option", 3, "ng-option-disabled", "ng-option-selected", "ng-optgroup", "ng-option", "ng-option-child", "ng-option-marked"], ["role", "option", 1, "ng-option", 3, "ng-option-marked"], [1, "ng-option", 3, "click", "mouseover"], [1, "ng-option-label", 3, "ngItemLabel", "escape"], ["role", "option", 1, "ng-option", 3, "mouseover", "click"], [1, "ng-tag-label"], [1, "ng-option", "ng-option-disabled"]],
  template: function NgSelectComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 10);
      \u0275\u0275listener("mousedown", function NgSelectComponent_Template_div_mousedown_0_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.handleMousedown($event));
      });
      \u0275\u0275elementStart(1, "div", 11);
      \u0275\u0275conditionalCreate(2, NgSelectComponent_Conditional_2_Template, 3, 1);
      \u0275\u0275conditionalCreate(3, NgSelectComponent_Conditional_3_Template, 2, 0);
      \u0275\u0275conditionalCreate(4, NgSelectComponent_Conditional_4_Template, 1, 5, null, 12);
      \u0275\u0275elementStart(5, "div", 13)(6, "input", 14, 0);
      \u0275\u0275listener("blur", function NgSelectComponent_Template_input_blur_6_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onInputBlur($event));
      })("change", function NgSelectComponent_Template_input_change_6_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView($event.stopPropagation());
      })("compositionend", function NgSelectComponent_Template_input_compositionend_6_listener() {
        \u0275\u0275restoreView(_r1);
        const searchInput_r7 = \u0275\u0275reference(7);
        return \u0275\u0275resetView(ctx.onCompositionEnd(searchInput_r7.value));
      })("compositionstart", function NgSelectComponent_Template_input_compositionstart_6_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onCompositionStart());
      })("focus", function NgSelectComponent_Template_input_focus_6_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onInputFocus($event));
      })("input", function NgSelectComponent_Template_input_input_6_listener() {
        \u0275\u0275restoreView(_r1);
        const searchInput_r7 = \u0275\u0275reference(7);
        return \u0275\u0275resetView(ctx.filter(searchInput_r7.value));
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(8, NgSelectComponent_Conditional_8_Template, 3, 1);
      \u0275\u0275conditionalCreate(9, NgSelectComponent_Conditional_9_Template, 2, 1);
      \u0275\u0275elementStart(10, "span", 15);
      \u0275\u0275element(11, "span", 16);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(12, NgSelectComponent_Conditional_12_Template, 8, 19, "ng-dropdown-panel", 17);
      \u0275\u0275elementStart(13, "div", 18);
      \u0275\u0275conditionalCreate(14, NgSelectComponent_Conditional_14_Template, 1, 1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275classProp("ng-appearance-outline", ctx.appearance() === "outline")("ng-has-value", ctx.hasValue);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.selectedItems.length === 0 && !ctx.searchTerm || (ctx.fixedPlaceholder() ?? ctx.config.fixedPlaceholder) ? 2 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional((!ctx.multiLabelTemplate() || !ctx.multiple()) && ctx.selectedItems.length > 0 ? 3 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.multiple() && ctx.multiLabelTemplate() && ctx.selectedValues.length > 0 ? 4 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.disabled())("readOnly", !ctx.searchable() || ctx.itemsList.maxItemsSelected)("value", ctx.searchTerm ?? "");
      \u0275\u0275attribute("aria-activedescendant", ctx.isOpen() ? ctx.itemsList == null ? null : ctx.itemsList.markedItem == null ? null : ctx.itemsList.markedItem.htmlId : null)("aria-controls", ctx.isOpen() ? ctx.dropdownId : null)("aria-expanded", ctx.isOpen())("aria-label", ctx.ariaLabel())("id", ctx.labelForId())("tabindex", ctx.tabIndex());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.loading() ? 8 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showClear() ? 9 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.isOpen() ? 12 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.isOpen && ctx.showNoItemsFound() ? 14 : -1);
    }
  },
  dependencies: [NgTemplateOutlet, NgItemLabelDirective, NgDropdownPanelComponent],
  styles: ['@charset "UTF-8";.ng-select{position:relative;display:block;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.ng-select div,.ng-select input,.ng-select span{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.ng-select [hidden]{display:none}.ng-select.ng-select-searchable .ng-select-container .ng-value-container .ng-input{opacity:1}.ng-select.ng-select-opened .ng-select-container{z-index:1001}.ng-select.ng-select-disabled .ng-select-container .ng-value-container .ng-placeholder,.ng-select.ng-select-disabled .ng-select-container .ng-value-container .ng-value{-webkit-user-select:none;user-select:none;cursor:default}.ng-select.ng-select-disabled .ng-arrow-wrapper{cursor:default}.ng-select.ng-select-filtered .ng-placeholder{display:none}.ng-select .ng-select-container{cursor:default;display:flex;outline:none;overflow:hidden;position:relative;width:100%}.ng-select .ng-select-container .ng-value-container{display:flex;flex:1}.ng-select .ng-select-container .ng-value-container .ng-input{opacity:0}.ng-select .ng-select-container .ng-value-container .ng-input>input{box-sizing:content-box;background:none transparent;border:0 none;box-shadow:none;outline:none;padding:0;cursor:default;width:100%}.ng-select .ng-select-container .ng-value-container .ng-input>input::-ms-clear{display:none}.ng-select .ng-select-container .ng-value-container .ng-input>input[readonly]{-webkit-user-select:unset;user-select:unset;width:0;padding:0}.ng-select.ng-select-single.ng-select-filtered .ng-select-container .ng-value-container .ng-value{visibility:hidden}.ng-select.ng-select-single .ng-select-container .ng-value-container,.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-value{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-value .ng-value-icon{display:none}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{position:absolute;left:0;width:100%}.ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value .ng-value-icon{display:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container{flex-wrap:wrap}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{position:absolute}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value{white-space:nowrap}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled .ng-value-icon{display:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon{cursor:pointer}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input{flex:1;z-index:2}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{z-index:1}.ng-select .ng-clear-wrapper{cursor:pointer;position:relative;width:17px;-webkit-user-select:none;user-select:none}.ng-select .ng-clear-wrapper .ng-clear{display:inline-block;font-size:18px;line-height:1;pointer-events:none}.ng-select .ng-spinner-loader{border-radius:50%;width:17px;height:17px;margin-right:5px;font-size:10px;position:relative;text-indent:-9999em;border-top:2px solid rgba(66,66,66,.2);border-right:2px solid rgba(66,66,66,.2);border-bottom:2px solid rgba(66,66,66,.2);border-left:2px solid #424242;transform:translateZ(0);animation:load8 .8s infinite linear}.ng-select .ng-spinner-loader:after{border-radius:50%;width:17px;height:17px}@-webkit-keyframes load8{0%{-webkit-transform:rotate(0deg);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes load8{0%{-webkit-transform:rotate(0deg);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.ng-select .ng-arrow-wrapper{cursor:pointer;position:relative;text-align:center;-webkit-user-select:none;user-select:none}.ng-select .ng-arrow-wrapper .ng-arrow{pointer-events:none;display:inline-block;height:0;width:0;position:relative}.ng-dropdown-panel{box-sizing:border-box;position:absolute;opacity:0;width:100%;z-index:1050;-webkit-overflow-scrolling:touch}.ng-dropdown-panel .ng-dropdown-panel-items{display:block;height:auto;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;max-height:240px;overflow-y:auto}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option{box-sizing:border-box;cursor:pointer;display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option .ng-option-label:empty:before{content:"\\200b"}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option .highlighted{font-weight:700;text-decoration:underline}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.disabled{cursor:default}.ng-dropdown-panel .scroll-host{overflow:hidden;overflow-y:auto;position:relative;display:block;-webkit-overflow-scrolling:touch}.ng-dropdown-panel .scrollable-content{top:0;left:0;width:100%;height:100%;position:absolute}.ng-dropdown-panel .total-padding{width:1px;opacity:0}.ng-visually-hidden{position:absolute!important;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0 0 0 0);border:0;white-space:nowrap}\n'],
  encapsulation: 2,
  changeDetection: 0
});
var NgSelectComponent = _NgSelectComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgSelectComponent, [{
    type: Component,
    args: [{
      selector: "ng-select",
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => NgSelectComponent),
        multi: true
      }, NgDropdownPanelService],
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      imports: [NgTemplateOutlet, NgItemLabelDirective, NgDropdownPanelComponent],
      host: {
        "[class.ng-select]": "true",
        "[class.ng-select-single]": "!multiple()",
        "[class.ng-select-typeahead]": "typeahead()",
        "[class.ng-select-multiple]": "multiple()",
        "[class.ng-select-taggable]": "addTag()",
        "[class.ng-select-searchable]": "searchable()",
        "[class.ng-select-clearable]": "clearable()",
        "[class.ng-select-opened]": "isOpen()",
        "[class.ng-select-filtered]": "filtered",
        "[class.ng-select-disabled]": "disabled()"
      },
      template: `<div
	(mousedown)="handleMousedown($event)"
	[class.ng-appearance-outline]="appearance() === 'outline'"
	[class.ng-has-value]="hasValue"
	class="ng-select-container">
	<div class="ng-value-container">
		@if ((selectedItems.length === 0 && !searchTerm) || (fixedPlaceholder() ?? config.fixedPlaceholder )) {
			<ng-template #defaultPlaceholderTemplate>
				<div class="ng-placeholder">{{ placeholder() ?? config.placeholder }}</div>
			</ng-template>
			<ng-template [ngTemplateOutlet]="placeholderTemplate() || defaultPlaceholderTemplate"> </ng-template>
		}

		@if ((!multiLabelTemplate() || !multiple()) && selectedItems.length > 0) {
			@for (item of selectedItems; track trackByOption($index, item)) {
				<div [class.ng-value-disabled]="item.disabled" class="ng-value">
					<ng-template #defaultLabelTemplate>
						<span class="ng-value-icon left" (click)="unselect(item)" aria-hidden="true">\xD7</span>
						<span class="ng-value-label" [ngItemLabel]="item.label" [escape]="escapeHTML"></span>
					</ng-template>
					<ng-template
						[ngTemplateOutlet]="labelTemplate() || defaultLabelTemplate"
						[ngTemplateOutletContext]="{ item: item.value, clear: clearItem, label: item.label }">
					</ng-template>
				</div>
			}
		}

		@if (multiple() && multiLabelTemplate() && selectedValues.length > 0) {
			<ng-template [ngTemplateOutlet]="multiLabelTemplate()" [ngTemplateOutletContext]="{ items: selectedValues, clear: clearItem }">
			</ng-template>
		}

		<div class="ng-input">
			<input
				#searchInput
				(blur)="onInputBlur($event)"
				(change)="$event.stopPropagation()"
				(compositionend)="onCompositionEnd(searchInput.value)"
				(compositionstart)="onCompositionStart()"
				(focus)="onInputFocus($event)"
				(input)="filter(searchInput.value)"
				[attr.aria-activedescendant]="isOpen() ? itemsList?.markedItem?.htmlId : null"
				[attr.aria-controls]="isOpen() ? dropdownId : null"
				[attr.aria-expanded]="isOpen()"
				[attr.aria-label]="ariaLabel()"
				[attr.id]="labelForId()"
				[attr.tabindex]="tabIndex()"
				[disabled]="disabled()"
				[readOnly]="!searchable() || itemsList.maxItemsSelected"
				[value]="searchTerm ?? ''"
				aria-autocomplete="list"
				role="combobox" />
		</div>
	</div>

	@if (loading()) {
		<ng-template #defaultLoadingSpinnerTemplate>
			<div class="ng-spinner-loader"></div>
		</ng-template>
		<ng-template [ngTemplateOutlet]="loadingSpinnerTemplate() || defaultLoadingSpinnerTemplate"></ng-template>
	}

	@if (showClear()) {
		@if (clearButtonTemplate()) {
			<ng-container [ngTemplateOutlet]="clearButtonTemplate()"></ng-container>
		} @else {
			<span
				class="ng-clear-wrapper"
				role="button"
				tabindex="0"
				[attr.tabindex]="tabFocusOnClear() ? 0 : -1"
				title="{{ clearAllText() || config.clearAllText }}"
				#clearButton
				(click)="handleClearClick($event)">
				<span class="ng-clear" aria-hidden="true">\xD7</span>
			</span>
		}
	}

	<span class="ng-arrow-wrapper">
		<span class="ng-arrow"></span>
	</span>
</div>

@if (isOpen()) {
	@let appendToValue = appendTo() || config.appendTo;
	<ng-dropdown-panel
		class="ng-dropdown-panel"
		[virtualScroll]="virtualScroll() ?? !config.disableVirtualScroll ?? false"
		[bufferAmount]="bufferAmount()"
		[appendTo]="appendToValue"
		[position]="dropdownPosition()"
		[headerTemplate]="headerTemplate()"
		[footerTemplate]="footerTemplate()"
		[filterValue]="searchTerm"
		[items]="itemsList.filteredItems"
		[markedItem]="itemsList.markedItem"
		(update)="viewPortItems = $event"
		(scroll)="scroll.emit($event)"
		(scrollToEnd)="scrollToEnd.emit($event)"
		(outsideClick)="close()"
		[class.ng-select-multiple]="multiple()"
		[class]="appendToValue ? (ngClass() ? ngClass() : classes) : null"
		[id]="dropdownId"
		[ariaLabelDropdown]="ariaLabelDropdown()">
		<ng-container>
			@for (item of viewPortItems; track trackByOption($index, item)) {
				<div
					class="ng-option"
					[attr.role]="item.children ? 'group' : 'option'"
					(click)="toggleItem(item)"
					(mouseover)="onItemHover(item)"
					[class.ng-option-disabled]="item.disabled"
					[class.ng-option-selected]="item.selected"
					[class.ng-optgroup]="item.children"
					[class.ng-option]="!item.children"
					[class.ng-option-child]="!!item.parent"
					[class.ng-option-marked]="item === itemsList.markedItem"
					[attr.aria-selected]="item.selected"
					[attr.id]="item?.htmlId"
					[attr.aria-setsize]="itemsList.filteredItems.length"
					[attr.aria-posinset]="item.index + 1">
					<ng-template #defaultOptionTemplate>
						<span class="ng-option-label" [ngItemLabel]="item.label" [escape]="escapeHTML"></span>
					</ng-template>
					<ng-template
						[ngTemplateOutlet]="
							item.children ? optgroupTemplate() || defaultOptionTemplate : optionTemplate() || defaultOptionTemplate
						"
						[ngTemplateOutletContext]="{ item: item.value, item$: item, index: item.index, searchTerm: searchTerm }">
					</ng-template>
				</div>
			}
			@if (showAddTag) {
				<div
					class="ng-option"
					[class.ng-option-marked]="!itemsList.markedItem"
					(mouseover)="itemsList.unmarkItem()"
					role="option"
					(click)="selectTag()">
					<ng-template #defaultTagTemplate>
						<span
							><span class="ng-tag-label">{{ addTagText() || config.addTagText }}</span
							>"{{ searchTerm }}"</span
						>
					</ng-template>
					<ng-template
						[ngTemplateOutlet]="tagTemplate() || defaultTagTemplate"
						[ngTemplateOutletContext]="{ searchTerm: searchTerm }">
					</ng-template>
				</div>
			}
		</ng-container>
		@if (showNoItemsFound()) {
			<ng-template #defaultNotFoundTemplate>
				<div class="ng-option ng-option-disabled">{{ notFoundText() ?? config.notFoundText }}</div>
			</ng-template>
			<ng-template
				[ngTemplateOutlet]="notFoundTemplate() || defaultNotFoundTemplate"
				[ngTemplateOutletContext]="{ searchTerm: searchTerm }">
			</ng-template>
		}
		@if (showTypeToSearch()) {
			<ng-template #defaultTypeToSearchTemplate>
				<div class="ng-option ng-option-disabled">{{ typeToSearchText() || config.typeToSearchText }}</div>
			</ng-template>
			<ng-template [ngTemplateOutlet]="typeToSearchTemplate() || defaultTypeToSearchTemplate"></ng-template>
		}
		@if (loading() && itemsList.filteredItems.length === 0) {
			<ng-template #defaultLoadingTextTemplate>
				<div class="ng-option ng-option-disabled">{{ loadingText() || config.loadingText }}</div>
			</ng-template>
			<ng-template
				[ngTemplateOutlet]="loadingTextTemplate() || defaultLoadingTextTemplate"
				[ngTemplateOutletContext]="{ searchTerm: searchTerm }">
			</ng-template>
		}
	</ng-dropdown-panel>
}

<!-- Always present aria-live region -->
<div aria-atomic="true" aria-live="polite" class="ng-visually-hidden" role="status">
	@if (isOpen && showNoItemsFound()) {
		{{ notFoundText }}
	}
</div>
`,
      styles: ['@charset "UTF-8";.ng-select{position:relative;display:block;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.ng-select div,.ng-select input,.ng-select span{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.ng-select [hidden]{display:none}.ng-select.ng-select-searchable .ng-select-container .ng-value-container .ng-input{opacity:1}.ng-select.ng-select-opened .ng-select-container{z-index:1001}.ng-select.ng-select-disabled .ng-select-container .ng-value-container .ng-placeholder,.ng-select.ng-select-disabled .ng-select-container .ng-value-container .ng-value{-webkit-user-select:none;user-select:none;cursor:default}.ng-select.ng-select-disabled .ng-arrow-wrapper{cursor:default}.ng-select.ng-select-filtered .ng-placeholder{display:none}.ng-select .ng-select-container{cursor:default;display:flex;outline:none;overflow:hidden;position:relative;width:100%}.ng-select .ng-select-container .ng-value-container{display:flex;flex:1}.ng-select .ng-select-container .ng-value-container .ng-input{opacity:0}.ng-select .ng-select-container .ng-value-container .ng-input>input{box-sizing:content-box;background:none transparent;border:0 none;box-shadow:none;outline:none;padding:0;cursor:default;width:100%}.ng-select .ng-select-container .ng-value-container .ng-input>input::-ms-clear{display:none}.ng-select .ng-select-container .ng-value-container .ng-input>input[readonly]{-webkit-user-select:unset;user-select:unset;width:0;padding:0}.ng-select.ng-select-single.ng-select-filtered .ng-select-container .ng-value-container .ng-value{visibility:hidden}.ng-select.ng-select-single .ng-select-container .ng-value-container,.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-value{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-value .ng-value-icon{display:none}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{position:absolute;left:0;width:100%}.ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value .ng-value-icon{display:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container{flex-wrap:wrap}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{position:absolute}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value{white-space:nowrap}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled .ng-value-icon{display:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon{cursor:pointer}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input{flex:1;z-index:2}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{z-index:1}.ng-select .ng-clear-wrapper{cursor:pointer;position:relative;width:17px;-webkit-user-select:none;user-select:none}.ng-select .ng-clear-wrapper .ng-clear{display:inline-block;font-size:18px;line-height:1;pointer-events:none}.ng-select .ng-spinner-loader{border-radius:50%;width:17px;height:17px;margin-right:5px;font-size:10px;position:relative;text-indent:-9999em;border-top:2px solid rgba(66,66,66,.2);border-right:2px solid rgba(66,66,66,.2);border-bottom:2px solid rgba(66,66,66,.2);border-left:2px solid #424242;transform:translateZ(0);animation:load8 .8s infinite linear}.ng-select .ng-spinner-loader:after{border-radius:50%;width:17px;height:17px}@-webkit-keyframes load8{0%{-webkit-transform:rotate(0deg);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes load8{0%{-webkit-transform:rotate(0deg);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.ng-select .ng-arrow-wrapper{cursor:pointer;position:relative;text-align:center;-webkit-user-select:none;user-select:none}.ng-select .ng-arrow-wrapper .ng-arrow{pointer-events:none;display:inline-block;height:0;width:0;position:relative}.ng-dropdown-panel{box-sizing:border-box;position:absolute;opacity:0;width:100%;z-index:1050;-webkit-overflow-scrolling:touch}.ng-dropdown-panel .ng-dropdown-panel-items{display:block;height:auto;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;max-height:240px;overflow-y:auto}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option{box-sizing:border-box;cursor:pointer;display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option .ng-option-label:empty:before{content:"\\200b"}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option .highlighted{font-weight:700;text-decoration:underline}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.disabled{cursor:default}.ng-dropdown-panel .scroll-host{overflow:hidden;overflow-y:auto;position:relative;display:block;-webkit-overflow-scrolling:touch}.ng-dropdown-panel .scrollable-content{top:0;left:0;width:100%;height:100%;position:absolute}.ng-dropdown-panel .total-padding{width:1px;opacity:0}.ng-visually-hidden{position:absolute!important;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0 0 0 0);border:0;white-space:nowrap}\n']
    }]
  }], () => [], {
    handleKeyDown: [{
      type: HostListener,
      args: ["keydown", ["$event"]]
    }]
  });
})();
var _NgSelectModule = class _NgSelectModule {
};
_NgSelectModule.\u0275fac = function NgSelectModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgSelectModule)();
};
_NgSelectModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _NgSelectModule,
  imports: [NgDropdownPanelComponent, NgOptionComponent, NgSelectComponent, NgOptgroupTemplateDirective, NgOptionTemplateDirective, NgLabelTemplateDirective, NgMultiLabelTemplateDirective, NgHeaderTemplateDirective, NgFooterTemplateDirective, NgPlaceholderTemplateDirective, NgClearButtonTemplateDirective, NgNotFoundTemplateDirective, NgTypeToSearchTemplateDirective, NgLoadingTextTemplateDirective, NgTagTemplateDirective, NgLoadingSpinnerTemplateDirective, NgItemLabelDirective],
  exports: [NgSelectComponent, NgOptionComponent, NgOptgroupTemplateDirective, NgOptionTemplateDirective, NgLabelTemplateDirective, NgMultiLabelTemplateDirective, NgHeaderTemplateDirective, NgFooterTemplateDirective, NgPlaceholderTemplateDirective, NgNotFoundTemplateDirective, NgTypeToSearchTemplateDirective, NgLoadingTextTemplateDirective, NgTagTemplateDirective, NgLoadingSpinnerTemplateDirective, NgClearButtonTemplateDirective]
});
_NgSelectModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: provideNgSelect()
});
var NgSelectModule = _NgSelectModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgSelectModule, [{
    type: NgModule,
    args: [{
      imports: [NgDropdownPanelComponent, NgOptionComponent, NgSelectComponent, NgOptgroupTemplateDirective, NgOptionTemplateDirective, NgLabelTemplateDirective, NgMultiLabelTemplateDirective, NgHeaderTemplateDirective, NgFooterTemplateDirective, NgPlaceholderTemplateDirective, NgClearButtonTemplateDirective, NgNotFoundTemplateDirective, NgTypeToSearchTemplateDirective, NgLoadingTextTemplateDirective, NgTagTemplateDirective, NgLoadingSpinnerTemplateDirective, NgItemLabelDirective],
      exports: [NgSelectComponent, NgOptionComponent, NgOptgroupTemplateDirective, NgOptionTemplateDirective, NgLabelTemplateDirective, NgMultiLabelTemplateDirective, NgHeaderTemplateDirective, NgFooterTemplateDirective, NgPlaceholderTemplateDirective, NgNotFoundTemplateDirective, NgTypeToSearchTemplateDirective, NgLoadingTextTemplateDirective, NgTagTemplateDirective, NgLoadingSpinnerTemplateDirective, NgClearButtonTemplateDirective],
      providers: provideNgSelect()
    }]
  }], null, null);
})();
function provideNgSelect() {
  return [{
    provide: SELECTION_MODEL_FACTORY,
    useValue: DefaultSelectionModelFactory
  }];
}

// node_modules/@ng-matero/extensions/fesm2022/mtxSelect.mjs
var _c03 = ["*"];
var _c13 = ["ngSelect"];
var _c23 = () => ({
  standalone: true
});
var _c32 = (a0, a1, a2, a3) => ({
  item: a0,
  item$: a1,
  index: a2,
  searchTerm: a3
});
var _c42 = (a0, a1, a2) => ({
  item: a0,
  clear: a1,
  label: a2
});
var _c52 = (a0, a1) => ({
  items: a0,
  clear: a1
});
var _c62 = (a0) => ({
  searchTerm: a0
});
function MtxSelect_Conditional_2_ng_template_0_ng_template_0_Template(rf, ctx) {
}
function MtxSelect_Conditional_2_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MtxSelect_Conditional_2_ng_template_0_ng_template_0_Template, 0, 0, "ng-template", 15);
  }
  if (rf & 2) {
    const item_r2 = ctx.item;
    const item$_r3 = ctx.item$;
    const index_r4 = ctx.index;
    const searchTerm_r5 = ctx.searchTerm;
    const ctx_r5 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r5.optionTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction4(2, _c32, item_r2, item$_r3, index_r4, searchTerm_r5));
  }
}
function MtxSelect_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MtxSelect_Conditional_2_ng_template_0_Template, 1, 7, "ng-template", 2);
  }
}
function MtxSelect_Conditional_3_ng_template_0_ng_template_0_Template(rf, ctx) {
}
function MtxSelect_Conditional_3_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MtxSelect_Conditional_3_ng_template_0_ng_template_0_Template, 0, 0, "ng-template", 15);
  }
  if (rf & 2) {
    const item_r7 = ctx.item;
    const item$_r8 = ctx.item$;
    const index_r9 = ctx.index;
    const searchTerm_r10 = ctx.searchTerm;
    const ctx_r5 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r5.optgroupTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction4(2, _c32, item_r7, item$_r8, index_r9, searchTerm_r10));
  }
}
function MtxSelect_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MtxSelect_Conditional_3_ng_template_0_Template, 1, 7, "ng-template", 3);
  }
}
function MtxSelect_Conditional_4_ng_template_0_ng_template_0_Template(rf, ctx) {
}
function MtxSelect_Conditional_4_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MtxSelect_Conditional_4_ng_template_0_ng_template_0_Template, 0, 0, "ng-template", 15);
  }
  if (rf & 2) {
    const item_r11 = ctx.item;
    const clear_r12 = ctx.clear;
    const label_r13 = ctx.label;
    const ctx_r5 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r5.labelTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction3(2, _c42, item_r11, clear_r12, label_r13));
  }
}
function MtxSelect_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MtxSelect_Conditional_4_ng_template_0_Template, 1, 6, "ng-template", 4);
  }
}
function MtxSelect_Conditional_5_ng_template_0_ng_template_0_Template(rf, ctx) {
}
function MtxSelect_Conditional_5_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MtxSelect_Conditional_5_ng_template_0_ng_template_0_Template, 0, 0, "ng-template", 15);
  }
  if (rf & 2) {
    const items_r14 = ctx.items;
    const clear_r15 = ctx.clear;
    const ctx_r5 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r5.multiLabelTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction2(2, _c52, items_r14, clear_r15));
  }
}
function MtxSelect_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MtxSelect_Conditional_5_ng_template_0_Template, 1, 5, "ng-template", 5);
  }
}
function MtxSelect_Conditional_6_ng_template_0_ng_template_0_Template(rf, ctx) {
}
function MtxSelect_Conditional_6_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MtxSelect_Conditional_6_ng_template_0_ng_template_0_Template, 0, 0, "ng-template", 16);
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r5.headerTemplate);
  }
}
function MtxSelect_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MtxSelect_Conditional_6_ng_template_0_Template, 1, 1, "ng-template", 6);
  }
}
function MtxSelect_Conditional_7_ng_template_0_ng_template_0_Template(rf, ctx) {
}
function MtxSelect_Conditional_7_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MtxSelect_Conditional_7_ng_template_0_ng_template_0_Template, 0, 0, "ng-template", 16);
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r5.footerTemplate);
  }
}
function MtxSelect_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MtxSelect_Conditional_7_ng_template_0_Template, 1, 1, "ng-template", 7);
  }
}
function MtxSelect_Conditional_8_ng_template_0_ng_template_0_Template(rf, ctx) {
}
function MtxSelect_Conditional_8_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MtxSelect_Conditional_8_ng_template_0_ng_template_0_Template, 0, 0, "ng-template", 15);
  }
  if (rf & 2) {
    const searchTerm_r16 = ctx.searchTerm;
    const ctx_r5 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r5.notFoundTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c62, searchTerm_r16));
  }
}
function MtxSelect_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MtxSelect_Conditional_8_ng_template_0_Template, 1, 4, "ng-template", 8);
  }
}
function MtxSelect_Conditional_9_ng_template_0_ng_template_0_Template(rf, ctx) {
}
function MtxSelect_Conditional_9_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MtxSelect_Conditional_9_ng_template_0_ng_template_0_Template, 0, 0, "ng-template", 16);
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r5.typeToSearchTemplate);
  }
}
function MtxSelect_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MtxSelect_Conditional_9_ng_template_0_Template, 1, 1, "ng-template", 9);
  }
}
function MtxSelect_Conditional_10_ng_template_0_ng_template_0_Template(rf, ctx) {
}
function MtxSelect_Conditional_10_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MtxSelect_Conditional_10_ng_template_0_ng_template_0_Template, 0, 0, "ng-template", 15);
  }
  if (rf & 2) {
    const searchTerm_r17 = ctx.searchTerm;
    const ctx_r5 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r5.loadingTextTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c62, searchTerm_r17));
  }
}
function MtxSelect_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MtxSelect_Conditional_10_ng_template_0_Template, 1, 4, "ng-template", 10);
  }
}
function MtxSelect_Conditional_11_ng_template_0_ng_template_0_Template(rf, ctx) {
}
function MtxSelect_Conditional_11_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MtxSelect_Conditional_11_ng_template_0_ng_template_0_Template, 0, 0, "ng-template", 15);
  }
  if (rf & 2) {
    const searchTerm_r18 = ctx.searchTerm;
    const ctx_r5 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r5.tagTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c62, searchTerm_r18));
  }
}
function MtxSelect_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MtxSelect_Conditional_11_ng_template_0_Template, 1, 4, "ng-template", 11);
  }
}
function MtxSelect_Conditional_12_ng_template_0_ng_template_0_Template(rf, ctx) {
}
function MtxSelect_Conditional_12_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MtxSelect_Conditional_12_ng_template_0_ng_template_0_Template, 0, 0, "ng-template", 16);
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r5.loadingSpinnerTemplate);
  }
}
function MtxSelect_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MtxSelect_Conditional_12_ng_template_0_Template, 1, 1, "ng-template", 12);
  }
}
function MtxSelect_Conditional_13_ng_template_0_ng_template_0_Template(rf, ctx) {
}
function MtxSelect_Conditional_13_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MtxSelect_Conditional_13_ng_template_0_ng_template_0_Template, 0, 0, "ng-template", 16);
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r5.placeholderTemplate);
  }
}
function MtxSelect_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MtxSelect_Conditional_13_ng_template_0_Template, 1, 1, "ng-template", 13);
  }
}
function MtxSelect_Conditional_14_ng_template_0_ng_template_0_Template(rf, ctx) {
}
function MtxSelect_Conditional_14_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MtxSelect_Conditional_14_ng_template_0_ng_template_0_Template, 0, 0, "ng-template", 16);
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r5.clearbuttonTemplate);
  }
}
function MtxSelect_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MtxSelect_Conditional_14_ng_template_0_Template, 1, 1, "ng-template", 14);
  }
}
var _MtxOption = class _MtxOption {
  constructor() {
    this.elementRef = inject(ElementRef);
    this.disabled = false;
    this.stateChange$ = new Subject();
  }
  get label() {
    return (this.elementRef.nativeElement.textContent || "").trim();
  }
  ngOnChanges(changes) {
    if (changes.disabled) {
      this.stateChange$.next({
        value: this.value,
        disabled: this.disabled
      });
    }
  }
  ngAfterViewChecked() {
    if (this.label !== this._previousLabel) {
      this._previousLabel = this.label;
      this.stateChange$.next({
        value: this.value,
        disabled: this.disabled,
        label: this.elementRef.nativeElement.innerHTML
      });
    }
  }
  ngOnDestroy() {
    this.stateChange$.complete();
  }
};
_MtxOption.\u0275fac = function MtxOption_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MtxOption)();
};
_MtxOption.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _MtxOption,
  selectors: [["mtx-option"]],
  inputs: {
    value: "value",
    disabled: [2, "disabled", "disabled", booleanAttribute]
  },
  exportAs: ["mtxOption"],
  features: [\u0275\u0275NgOnChangesFeature],
  ngContentSelectors: _c03,
  decls: 1,
  vars: 0,
  template: function MtxOption_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
var MtxOption = _MtxOption;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MtxOption, [{
    type: Component,
    args: [{
      selector: "mtx-option",
      exportAs: "mtxOption",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <ng-content></ng-content>
  `
    }]
  }], null, {
    value: [{
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
var _MtxSelectIntl = class _MtxSelectIntl {
  constructor() {
    this._defaultOptions = inject(MTX_SELECT_DEFAULT_OPTIONS, {
      optional: true
    });
    this.changes = new Subject();
    this.placeholder = this._defaultOptions?.placeholder;
    this.notFoundText = this._defaultOptions?.notFoundText ?? "No items found";
    this.typeToSearchText = this._defaultOptions?.typeToSearchText ?? "Type to search";
    this.addTagText = this._defaultOptions?.addTagText ?? "Add item";
    this.loadingText = this._defaultOptions?.loadingText ?? "Loading...";
    this.clearAllText = this._defaultOptions?.clearAllText ?? "Clear all";
  }
};
_MtxSelectIntl.\u0275fac = function MtxSelectIntl_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MtxSelectIntl)();
};
_MtxSelectIntl.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _MtxSelectIntl,
  factory: _MtxSelectIntl.\u0275fac,
  providedIn: "root"
});
var MtxSelectIntl = _MtxSelectIntl;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MtxSelectIntl, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var _MtxSelectOptionTemplate = class _MtxSelectOptionTemplate {
  constructor() {
    this.template = inject(TemplateRef);
  }
};
_MtxSelectOptionTemplate.\u0275fac = function MtxSelectOptionTemplate_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MtxSelectOptionTemplate)();
};
_MtxSelectOptionTemplate.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _MtxSelectOptionTemplate,
  selectors: [["", "ng-option-tmp", ""]]
});
var MtxSelectOptionTemplate = _MtxSelectOptionTemplate;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MtxSelectOptionTemplate, [{
    type: Directive,
    args: [{
      selector: "[ng-option-tmp]"
    }]
  }], null, null);
})();
var _MtxSelectOptgroupTemplate = class _MtxSelectOptgroupTemplate {
  constructor() {
    this.template = inject(TemplateRef);
  }
};
_MtxSelectOptgroupTemplate.\u0275fac = function MtxSelectOptgroupTemplate_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MtxSelectOptgroupTemplate)();
};
_MtxSelectOptgroupTemplate.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _MtxSelectOptgroupTemplate,
  selectors: [["", "ng-optgroup-tmp", ""]]
});
var MtxSelectOptgroupTemplate = _MtxSelectOptgroupTemplate;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MtxSelectOptgroupTemplate, [{
    type: Directive,
    args: [{
      selector: "[ng-optgroup-tmp]"
    }]
  }], null, null);
})();
var _MtxSelectLabelTemplate = class _MtxSelectLabelTemplate {
  constructor() {
    this.template = inject(TemplateRef);
  }
};
_MtxSelectLabelTemplate.\u0275fac = function MtxSelectLabelTemplate_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MtxSelectLabelTemplate)();
};
_MtxSelectLabelTemplate.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _MtxSelectLabelTemplate,
  selectors: [["", "ng-label-tmp", ""]]
});
var MtxSelectLabelTemplate = _MtxSelectLabelTemplate;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MtxSelectLabelTemplate, [{
    type: Directive,
    args: [{
      selector: "[ng-label-tmp]"
    }]
  }], null, null);
})();
var _MtxSelectMultiLabelTemplate = class _MtxSelectMultiLabelTemplate {
  constructor() {
    this.template = inject(TemplateRef);
  }
};
_MtxSelectMultiLabelTemplate.\u0275fac = function MtxSelectMultiLabelTemplate_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MtxSelectMultiLabelTemplate)();
};
_MtxSelectMultiLabelTemplate.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _MtxSelectMultiLabelTemplate,
  selectors: [["", "ng-multi-label-tmp", ""]]
});
var MtxSelectMultiLabelTemplate = _MtxSelectMultiLabelTemplate;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MtxSelectMultiLabelTemplate, [{
    type: Directive,
    args: [{
      selector: "[ng-multi-label-tmp]"
    }]
  }], null, null);
})();
var _MtxSelectHeaderTemplate = class _MtxSelectHeaderTemplate {
  constructor() {
    this.template = inject(TemplateRef);
  }
};
_MtxSelectHeaderTemplate.\u0275fac = function MtxSelectHeaderTemplate_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MtxSelectHeaderTemplate)();
};
_MtxSelectHeaderTemplate.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _MtxSelectHeaderTemplate,
  selectors: [["", "ng-header-tmp", ""]]
});
var MtxSelectHeaderTemplate = _MtxSelectHeaderTemplate;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MtxSelectHeaderTemplate, [{
    type: Directive,
    args: [{
      selector: "[ng-header-tmp]"
    }]
  }], null, null);
})();
var _MtxSelectFooterTemplate = class _MtxSelectFooterTemplate {
  constructor() {
    this.template = inject(TemplateRef);
  }
};
_MtxSelectFooterTemplate.\u0275fac = function MtxSelectFooterTemplate_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MtxSelectFooterTemplate)();
};
_MtxSelectFooterTemplate.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _MtxSelectFooterTemplate,
  selectors: [["", "ng-footer-tmp", ""]]
});
var MtxSelectFooterTemplate = _MtxSelectFooterTemplate;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MtxSelectFooterTemplate, [{
    type: Directive,
    args: [{
      selector: "[ng-footer-tmp]"
    }]
  }], null, null);
})();
var _MtxSelectNotFoundTemplate = class _MtxSelectNotFoundTemplate {
  constructor() {
    this.template = inject(TemplateRef);
  }
};
_MtxSelectNotFoundTemplate.\u0275fac = function MtxSelectNotFoundTemplate_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MtxSelectNotFoundTemplate)();
};
_MtxSelectNotFoundTemplate.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _MtxSelectNotFoundTemplate,
  selectors: [["", "ng-notfound-tmp", ""]]
});
var MtxSelectNotFoundTemplate = _MtxSelectNotFoundTemplate;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MtxSelectNotFoundTemplate, [{
    type: Directive,
    args: [{
      selector: "[ng-notfound-tmp]"
    }]
  }], null, null);
})();
var _MtxSelectTypeToSearchTemplate = class _MtxSelectTypeToSearchTemplate {
  constructor() {
    this.template = inject(TemplateRef);
  }
};
_MtxSelectTypeToSearchTemplate.\u0275fac = function MtxSelectTypeToSearchTemplate_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MtxSelectTypeToSearchTemplate)();
};
_MtxSelectTypeToSearchTemplate.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _MtxSelectTypeToSearchTemplate,
  selectors: [["", "ng-typetosearch-tmp", ""]]
});
var MtxSelectTypeToSearchTemplate = _MtxSelectTypeToSearchTemplate;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MtxSelectTypeToSearchTemplate, [{
    type: Directive,
    args: [{
      selector: "[ng-typetosearch-tmp]"
    }]
  }], null, null);
})();
var _MtxSelectLoadingTextTemplate = class _MtxSelectLoadingTextTemplate {
  constructor() {
    this.template = inject(TemplateRef);
  }
};
_MtxSelectLoadingTextTemplate.\u0275fac = function MtxSelectLoadingTextTemplate_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MtxSelectLoadingTextTemplate)();
};
_MtxSelectLoadingTextTemplate.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _MtxSelectLoadingTextTemplate,
  selectors: [["", "ng-loadingtext-tmp", ""]]
});
var MtxSelectLoadingTextTemplate = _MtxSelectLoadingTextTemplate;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MtxSelectLoadingTextTemplate, [{
    type: Directive,
    args: [{
      selector: "[ng-loadingtext-tmp]"
    }]
  }], null, null);
})();
var _MtxSelectTagTemplate = class _MtxSelectTagTemplate {
  constructor() {
    this.template = inject(TemplateRef);
  }
};
_MtxSelectTagTemplate.\u0275fac = function MtxSelectTagTemplate_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MtxSelectTagTemplate)();
};
_MtxSelectTagTemplate.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _MtxSelectTagTemplate,
  selectors: [["", "ng-tag-tmp", ""]]
});
var MtxSelectTagTemplate = _MtxSelectTagTemplate;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MtxSelectTagTemplate, [{
    type: Directive,
    args: [{
      selector: "[ng-tag-tmp]"
    }]
  }], null, null);
})();
var _MtxSelectLoadingSpinnerTemplate = class _MtxSelectLoadingSpinnerTemplate {
  constructor() {
    this.template = inject(TemplateRef);
  }
};
_MtxSelectLoadingSpinnerTemplate.\u0275fac = function MtxSelectLoadingSpinnerTemplate_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MtxSelectLoadingSpinnerTemplate)();
};
_MtxSelectLoadingSpinnerTemplate.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _MtxSelectLoadingSpinnerTemplate,
  selectors: [["", "ng-loadingspinner-tmp", ""]]
});
var MtxSelectLoadingSpinnerTemplate = _MtxSelectLoadingSpinnerTemplate;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MtxSelectLoadingSpinnerTemplate, [{
    type: Directive,
    args: [{
      selector: "[ng-loadingspinner-tmp]"
    }]
  }], null, null);
})();
var _MtxSelectPlaceholderTemplate = class _MtxSelectPlaceholderTemplate {
  constructor() {
    this.template = inject(TemplateRef);
  }
};
_MtxSelectPlaceholderTemplate.\u0275fac = function MtxSelectPlaceholderTemplate_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MtxSelectPlaceholderTemplate)();
};
_MtxSelectPlaceholderTemplate.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _MtxSelectPlaceholderTemplate,
  selectors: [["", "ng-placeholder-tmp", ""]]
});
var MtxSelectPlaceholderTemplate = _MtxSelectPlaceholderTemplate;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MtxSelectPlaceholderTemplate, [{
    type: Directive,
    args: [{
      selector: "[ng-placeholder-tmp]"
    }]
  }], null, null);
})();
var _MtxSelectClearbuttonTemplate = class _MtxSelectClearbuttonTemplate {
  constructor() {
    this.template = inject(TemplateRef);
  }
};
_MtxSelectClearbuttonTemplate.\u0275fac = function MtxSelectClearbuttonTemplate_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MtxSelectClearbuttonTemplate)();
};
_MtxSelectClearbuttonTemplate.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _MtxSelectClearbuttonTemplate,
  selectors: [["", "ng-clearbutton-tmp", ""]]
});
var MtxSelectClearbuttonTemplate = _MtxSelectClearbuttonTemplate;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MtxSelectClearbuttonTemplate, [{
    type: Directive,
    args: [{
      selector: "[ng-clearbutton-tmp]"
    }]
  }], null, null);
})();
var MTX_SELECT_DEFAULT_OPTIONS = new InjectionToken("mtx-select-default-options");
var nextUniqueId = 0;
var _MtxSelect = class _MtxSelect {
  get clearSearchOnAdd() {
    return this._clearSearchOnAdd ?? this.closeOnSelect;
  }
  set clearSearchOnAdd(value) {
    this._clearSearchOnAdd = value;
  }
  get items() {
    return this._items;
  }
  set items(value) {
    this._itemsAreUsed = true;
    this._items = value;
  }
  /** Value of the select control. */
  get value() {
    return this._value;
  }
  set value(newValue) {
    const hasAssigned = this._assignValue(newValue);
    if (hasAssigned) {
      this._onChange(newValue);
    }
  }
  /** Unique id of the element. */
  get id() {
    return this._id;
  }
  set id(value) {
    this._id = value || this._uid;
    this.stateChanges.next();
  }
  /** Placeholder to be shown if value is empty. */
  get placeholder() {
    return this._placeholder;
  }
  set placeholder(value) {
    this._placeholder = value;
    this.stateChanges.next();
  }
  /** Whether the select is focused. */
  get focused() {
    return this._focused;
  }
  /** Whether the select has a value. */
  get empty() {
    return this.value == null || Array.isArray(this.value) && this.value.length === 0;
  }
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  get shouldLabelFloat() {
    return this.focused || !this.empty;
  }
  /** Whether the component is required. */
  get required() {
    return this._required ?? this.ngControl?.control?.hasValidator(Validators.required) ?? false;
  }
  set required(value) {
    this._required = value;
    this.stateChanges.next();
  }
  /** Object used to control when error messages are shown. */
  get errorStateMatcher() {
    return this._errorStateTracker.matcher;
  }
  set errorStateMatcher(value) {
    this._errorStateTracker.matcher = value;
  }
  /** Whether or not the overlay panel is open. */
  get panelOpen() {
    return !!this.ngSelect.isOpen;
  }
  /** Whether the select is in an error state. */
  get errorState() {
    return this._errorStateTracker.errorState;
  }
  set errorState(value) {
    this._errorStateTracker.errorState = value;
  }
  constructor() {
    this._intl = inject(MtxSelectIntl);
    this._changeDetectorRef = inject(ChangeDetectorRef);
    this._elementRef = inject(ElementRef);
    this._focusMonitor = inject(FocusMonitor);
    this.ngControl = inject(NgControl, {
      optional: true,
      self: true
    });
    this._parentFormField = inject(MAT_FORM_FIELD, {
      optional: true
    });
    this._defaultOptions = inject(MTX_SELECT_DEFAULT_OPTIONS, {
      optional: true
    });
    this._document = inject(DOCUMENT);
    this.addTag = false;
    this.appearance = "underline";
    this.appendTo = this._defaultOptions?.appendTo ?? "body";
    this.bindLabel = this._defaultOptions?.bindLabel;
    this.bindValue = this._defaultOptions?.bindValue;
    this.closeOnSelect = true;
    this.clearable = true;
    this.clearOnBackspace = true;
    this.dropdownPosition = "auto";
    this.bufferAmount = 4;
    this.selectableGroup = false;
    this.selectableGroupAsModel = true;
    this.hideSelected = false;
    this.loading = false;
    this.labelForId = null;
    this.markFirst = true;
    this.multiple = false;
    this.searchable = true;
    this.readonly = false;
    this.searchFn = null;
    this.searchWhileComposing = true;
    this.selectOnTab = false;
    this.trackByFn = null;
    this.inputAttrs = {};
    this.openOnEnter = this._defaultOptions?.openOnEnter ?? true;
    this.minTermLength = 0;
    this.editableSearchTerm = false;
    this.keyDownFn = (_) => true;
    this.virtualScroll = this._defaultOptions?.virtualScroll ?? false;
    this.fixedPlaceholder = this._defaultOptions?.fixedPlaceholder ?? false;
    this.deselectOnClick = this._defaultOptions?.deselectOnClick ?? false;
    this.blurEvent = new EventEmitter();
    this.focusEvent = new EventEmitter();
    this.changeEvent = new EventEmitter();
    this.openEvent = new EventEmitter();
    this.closeEvent = new EventEmitter();
    this.searchEvent = new EventEmitter();
    this.clearEvent = new EventEmitter();
    this.addEvent = new EventEmitter();
    this.removeEvent = new EventEmitter();
    this.scroll = new EventEmitter();
    this.scrollToEnd = new EventEmitter();
    this._clearSearchOnAdd = this._defaultOptions?.clearSearchOnAdd;
    this._items = [];
    this._itemsAreUsed = false;
    this._destroy$ = new Subject();
    this._value = null;
    this.stateChanges = new Subject();
    this._uid = `mtx-select-${nextUniqueId++}`;
    this._focused = false;
    this.disabled = false;
    this.ariaLabel = "";
    this.ariaLabelledby = null;
    this._ariaDescribedby = null;
    this.controlType = "mtx-select";
    this._onChange = () => {
    };
    this._onTouched = () => {
    };
    this._valueId = `mtx-select-value-${nextUniqueId++}`;
    this._intlChangesSubscription = Subscription.EMPTY;
    const _focusMonitor = this._focusMonitor;
    const defaultErrorStateMatcher = inject(ErrorStateMatcher);
    const parentForm = inject(NgForm, {
      optional: true
    });
    const parentFormGroup = inject(FormGroupDirective, {
      optional: true
    });
    const ngControl = this.ngControl;
    this._intlChangesSubscription = this._intl.changes.subscribe(() => {
      this._changeDetectorRef.detectChanges();
    });
    _focusMonitor.monitor(this._elementRef, true).subscribe((origin) => {
      if (this._focused && !origin) {
        this._onTouched();
      }
      this._focused = !!origin;
      this.stateChanges.next();
    });
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
    this._errorStateTracker = new _ErrorStateTracker(defaultErrorStateMatcher, ngControl, parentFormGroup, parentForm, this.stateChanges);
    this.id = this.id;
  }
  ngOnInit() {
    if (this.compareWith) {
      this.ngSelect.compareWith = this.compareWith;
    }
  }
  ngAfterViewInit() {
    if (!this._itemsAreUsed) {
      this.ngSelect.escapeHTML = false;
      this._setItemsFromMtxOptions();
    }
  }
  ngDoCheck() {
    if (this.ngControl) {
      const ngControl = this.ngControl;
      if (this._previousControl !== ngControl.control) {
        if (this._previousControl !== void 0 && ngControl.disabled !== null && ngControl.disabled !== this.disabled) {
          this.disabled = ngControl.disabled;
        }
        this._previousControl = ngControl.control;
      }
      this.updateErrorState();
    }
  }
  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
    this.stateChanges.complete();
    this._focusMonitor.stopMonitoring(this._elementRef);
    this._intlChangesSubscription.unsubscribe();
  }
  /** Gets the value for the `aria-labelledby` attribute of the inputs. */
  _getAriaLabelledby() {
    if (this.ariaLabel) {
      return null;
    }
    const labelId = this._parentFormField?.getLabelId();
    let value = (labelId ? labelId + " " : "") + this._valueId;
    if (this.ariaLabelledby) {
      value += " " + this.ariaLabelledby;
    }
    return value;
  }
  /** Implemented as part of MatFormFieldControl. */
  setDescribedByIds(ids) {
    this._ariaDescribedby = ids.length ? ids.join(" ") : null;
  }
  /**
   * Disables the select. Part of the ControlValueAccessor interface required
   * to integrate with Angular's core forms API.
   *
   * @param isDisabled Sets whether the component is disabled.
   */
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
    this._changeDetectorRef.markForCheck();
    this.stateChanges.next();
  }
  /** Implemented as part of MatFormFieldControl. */
  onContainerClick(event) {
    const target = event.target;
    if (!target.classList.contains("ng-arrow-wrapper")) {
      this.focus();
      this.open();
    }
  }
  /**
   * Sets the select's value. Part of the ControlValueAccessor interface
   * required to integrate with Angular's core forms API.
   *
   * @param value New value to be written to the model.
   */
  writeValue(value) {
    this._assignValue(value);
  }
  /**
   * Saves a callback function to be invoked when the select's value
   * changes from user input. Part of the ControlValueAccessor interface
   * required to integrate with Angular's core forms API.
   *
   * @param fn Callback to be triggered when the value changes.
   */
  registerOnChange(fn) {
    this._onChange = fn;
  }
  /**
   * Saves a callback function to be invoked when the select is blurred
   * by the user. Part of the ControlValueAccessor interface required
   * to integrate with Angular's core forms API.
   *
   * @param fn Callback to be triggered when the component has been touched.
   */
  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  /** Refreshes the error state of the select. */
  updateErrorState() {
    this._errorStateTracker.updateErrorState();
  }
  /** Assigns a specific value to the select. Returns whether the value has changed. */
  _assignValue(newValue) {
    if (newValue !== this._value || this.multiple && Array.isArray(newValue)) {
      this._value = newValue;
      this._changeDetectorRef.markForCheck();
      return true;
    }
    return false;
  }
  /** NgSelect's `_setItemsFromNgOptions` */
  _setItemsFromMtxOptions() {
    const mapMtxOptions = (options) => {
      this.items = options.map((option) => ({
        $ngOptionValue: option.value,
        $ngOptionLabel: option.elementRef.nativeElement.innerHTML,
        disabled: option.disabled
      }));
      this.ngSelect.itemsList.setItems(this.items);
      if (this.ngSelect.hasValue) {
        this.ngSelect.itemsList.mapSelectedItems();
      }
      this.ngSelect.detectChanges();
    };
    const handleOptionChange = () => {
      const changedOrDestroyed = merge(this.mtxOptions.changes, this._destroy$);
      merge(...this.mtxOptions.map((option) => option.stateChange$)).pipe(takeUntil(changedOrDestroyed)).subscribe((option) => {
        const item = this.ngSelect.itemsList.findItem(option.value);
        item.disabled = option.disabled;
        item.label = option.label || item.label;
        this.ngSelect.detectChanges();
      });
    };
    this.mtxOptions.changes.pipe(startWith(this.mtxOptions), takeUntil(this._destroy$)).subscribe((options) => {
      mapMtxOptions(options);
      handleOptionChange();
    });
  }
  open() {
    this.ngSelect.open();
  }
  close() {
    this.ngSelect.close();
  }
  focus() {
    this.ngSelect.focus();
  }
  blur() {
    this.ngSelect.blur();
  }
  openChange() {
    this.openEvent.emit();
    setTimeout(() => {
      const dropdownEl = this._document.getElementById(this.ngSelect.dropdownId);
      dropdownEl?.classList.add("mat-" + this._parentFormField?.color);
    });
  }
};
_MtxSelect.\u0275fac = function MtxSelect_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MtxSelect)();
};
_MtxSelect.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _MtxSelect,
  selectors: [["mtx-select"]],
  contentQueries: function MtxSelect_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      \u0275\u0275contentQuery(dirIndex, MtxSelectOptionTemplate, 5, TemplateRef);
      \u0275\u0275contentQuery(dirIndex, MtxSelectOptgroupTemplate, 5, TemplateRef);
      \u0275\u0275contentQuery(dirIndex, MtxSelectLabelTemplate, 5, TemplateRef);
      \u0275\u0275contentQuery(dirIndex, MtxSelectMultiLabelTemplate, 5, TemplateRef);
      \u0275\u0275contentQuery(dirIndex, MtxSelectHeaderTemplate, 5, TemplateRef);
      \u0275\u0275contentQuery(dirIndex, MtxSelectFooterTemplate, 5, TemplateRef);
      \u0275\u0275contentQuery(dirIndex, MtxSelectNotFoundTemplate, 5, TemplateRef);
      \u0275\u0275contentQuery(dirIndex, MtxSelectTypeToSearchTemplate, 5, TemplateRef);
      \u0275\u0275contentQuery(dirIndex, MtxSelectLoadingTextTemplate, 5, TemplateRef);
      \u0275\u0275contentQuery(dirIndex, MtxSelectTagTemplate, 5, TemplateRef);
      \u0275\u0275contentQuery(dirIndex, MtxSelectLoadingSpinnerTemplate, 5, TemplateRef);
      \u0275\u0275contentQuery(dirIndex, MtxSelectPlaceholderTemplate, 5, TemplateRef);
      \u0275\u0275contentQuery(dirIndex, MtxSelectClearbuttonTemplate, 5, TemplateRef);
      \u0275\u0275contentQuery(dirIndex, MtxOption, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.optionTemplate = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.optgroupTemplate = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.labelTemplate = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.multiLabelTemplate = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.headerTemplate = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.footerTemplate = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.notFoundTemplate = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.typeToSearchTemplate = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.loadingTextTemplate = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.tagTemplate = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.loadingSpinnerTemplate = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.placeholderTemplate = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.clearbuttonTemplate = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.mtxOptions = _t);
    }
  },
  viewQuery: function MtxSelect_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c13, 7);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.ngSelect = _t.first);
    }
  },
  hostAttrs: ["role", "combobox", "aria-autocomplete", "none", 1, "mtx-select"],
  hostVars: 20,
  hostBindings: function MtxSelect_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("id", ctx.id)("aria-expanded", ctx.panelOpen)("aria-label", ctx.ariaLabel || null)("aria-labelledby", ctx._getAriaLabelledby())("aria-describedby", ctx._ariaDescribedby || null)("aria-required", ctx.required.toString())("aria-disabled", ctx.disabled.toString())("aria-invalid", ctx.errorState);
      \u0275\u0275classProp("mtx-select-floating", ctx.shouldLabelFloat)("mtx-select-disabled", ctx.disabled)("mtx-select-invalid", ctx.errorState)("mtx-select-required", ctx.required)("mtx-select-empty", ctx.empty)("mtx-select-multiple", ctx.multiple);
    }
  },
  inputs: {
    addTag: "addTag",
    addTagText: "addTagText",
    appearance: "appearance",
    appendTo: "appendTo",
    bindLabel: "bindLabel",
    bindValue: "bindValue",
    closeOnSelect: [2, "closeOnSelect", "closeOnSelect", booleanAttribute],
    clearAllText: "clearAllText",
    clearable: [2, "clearable", "clearable", booleanAttribute],
    clearOnBackspace: [2, "clearOnBackspace", "clearOnBackspace", booleanAttribute],
    compareWith: "compareWith",
    dropdownPosition: "dropdownPosition",
    groupBy: "groupBy",
    groupValue: "groupValue",
    bufferAmount: "bufferAmount",
    selectableGroup: [2, "selectableGroup", "selectableGroup", booleanAttribute],
    selectableGroupAsModel: [2, "selectableGroupAsModel", "selectableGroupAsModel", booleanAttribute],
    hideSelected: [2, "hideSelected", "hideSelected", booleanAttribute],
    loading: [2, "loading", "loading", booleanAttribute],
    loadingText: "loadingText",
    labelForId: "labelForId",
    markFirst: [2, "markFirst", "markFirst", booleanAttribute],
    maxSelectedItems: "maxSelectedItems",
    multiple: [2, "multiple", "multiple", booleanAttribute],
    notFoundText: "notFoundText",
    searchable: [2, "searchable", "searchable", booleanAttribute],
    readonly: [2, "readonly", "readonly", booleanAttribute],
    searchFn: "searchFn",
    searchWhileComposing: [2, "searchWhileComposing", "searchWhileComposing", booleanAttribute],
    selectOnTab: [2, "selectOnTab", "selectOnTab", booleanAttribute],
    trackByFn: "trackByFn",
    inputAttrs: "inputAttrs",
    tabIndex: "tabIndex",
    openOnEnter: [2, "openOnEnter", "openOnEnter", booleanAttribute],
    minTermLength: "minTermLength",
    editableSearchTerm: [2, "editableSearchTerm", "editableSearchTerm", booleanAttribute],
    keyDownFn: "keyDownFn",
    virtualScroll: [2, "virtualScroll", "virtualScroll", booleanAttribute],
    typeToSearchText: "typeToSearchText",
    typeahead: "typeahead",
    isOpen: "isOpen",
    fixedPlaceholder: [2, "fixedPlaceholder", "fixedPlaceholder", booleanAttribute],
    deselectOnClick: [2, "deselectOnClick", "deselectOnClick", booleanAttribute],
    clearSearchOnAdd: "clearSearchOnAdd",
    items: "items",
    value: "value",
    id: "id",
    placeholder: "placeholder",
    disabled: [2, "disabled", "disabled", booleanAttribute],
    required: [2, "required", "required", booleanAttribute],
    errorStateMatcher: "errorStateMatcher",
    ariaLabel: [0, "aria-label", "ariaLabel"],
    ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"]
  },
  outputs: {
    blurEvent: "blur",
    focusEvent: "focus",
    changeEvent: "change",
    openEvent: "open",
    closeEvent: "close",
    searchEvent: "search",
    clearEvent: "clear",
    addEvent: "add",
    removeEvent: "remove",
    scroll: "scroll",
    scrollToEnd: "scrollToEnd"
  },
  exportAs: ["mtxSelect"],
  features: [\u0275\u0275ProvidersFeature([{
    provide: MatFormFieldControl,
    useExisting: _MtxSelect
  }])],
  decls: 15,
  vars: 63,
  consts: [["ngSelect", ""], [3, "ngModelChange", "blur", "focus", "change", "open", "close", "search", "clear", "add", "remove", "scroll", "scrollToEnd", "ngModel", "ngModelOptions", "placeholder", "items", "addTag", "addTagText", "appendTo", "appearance", "bindLabel", "bindValue", "closeOnSelect", "clearAllText", "clearable", "clearOnBackspace", "dropdownPosition", "groupBy", "groupValue", "bufferAmount", "hideSelected", "isOpen", "inputAttrs", "loading", "loadingText", "labelForId", "markFirst", "maxSelectedItems", "multiple", "notFoundText", "readonly", "typeahead", "typeToSearchText", "trackByFn", "searchable", "searchFn", "searchWhileComposing", "clearSearchOnAdd", "selectableGroup", "selectableGroupAsModel", "selectOnTab", "tabIndex", "openOnEnter", "minTermLength", "editableSearchTerm", "keyDownFn", "virtualScroll", "fixedPlaceholder", "deselectOnClick"], ["ng-option-tmp", ""], ["ng-optgroup-tmp", ""], ["ng-label-tmp", ""], ["ng-multi-label-tmp", ""], ["ng-header-tmp", ""], ["ng-footer-tmp", ""], ["ng-notfound-tmp", ""], ["ng-typetosearch-tmp", ""], ["ng-loadingtext-tmp", ""], ["ng-tag-tmp", ""], ["ng-loadingspinner-tmp", ""], ["ng-placeholder-tmp", ""], ["ng-clearbutton-tmp", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "ngTemplateOutlet"]],
  template: function MtxSelect_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "ng-select", 1, 0);
      \u0275\u0275twoWayListener("ngModelChange", function MtxSelect_Template_ng_select_ngModelChange_0_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.value, $event) || (ctx.value = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("blur", function MtxSelect_Template_ng_select_blur_0_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.blurEvent.emit($event));
      })("focus", function MtxSelect_Template_ng_select_focus_0_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.focusEvent.emit($event));
      })("change", function MtxSelect_Template_ng_select_change_0_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.changeEvent.emit($event));
      })("open", function MtxSelect_Template_ng_select_open_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.openChange());
      })("close", function MtxSelect_Template_ng_select_close_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeEvent.emit());
      })("search", function MtxSelect_Template_ng_select_search_0_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.searchEvent.emit($event));
      })("clear", function MtxSelect_Template_ng_select_clear_0_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.clearEvent.emit($event));
      })("add", function MtxSelect_Template_ng_select_add_0_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.addEvent.emit($event));
      })("remove", function MtxSelect_Template_ng_select_remove_0_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.removeEvent.emit($event));
      })("scroll", function MtxSelect_Template_ng_select_scroll_0_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.scroll.emit($event));
      })("scrollToEnd", function MtxSelect_Template_ng_select_scrollToEnd_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.scrollToEnd.emit());
      });
      \u0275\u0275conditionalCreate(2, MtxSelect_Conditional_2_Template, 1, 0, null, 2);
      \u0275\u0275conditionalCreate(3, MtxSelect_Conditional_3_Template, 1, 0, null, 3);
      \u0275\u0275conditionalCreate(4, MtxSelect_Conditional_4_Template, 1, 0, null, 4);
      \u0275\u0275conditionalCreate(5, MtxSelect_Conditional_5_Template, 1, 0, null, 5);
      \u0275\u0275conditionalCreate(6, MtxSelect_Conditional_6_Template, 1, 0, null, 6);
      \u0275\u0275conditionalCreate(7, MtxSelect_Conditional_7_Template, 1, 0, null, 7);
      \u0275\u0275conditionalCreate(8, MtxSelect_Conditional_8_Template, 1, 0, null, 8);
      \u0275\u0275conditionalCreate(9, MtxSelect_Conditional_9_Template, 1, 0, null, 9);
      \u0275\u0275conditionalCreate(10, MtxSelect_Conditional_10_Template, 1, 0, null, 10);
      \u0275\u0275conditionalCreate(11, MtxSelect_Conditional_11_Template, 1, 0, null, 11);
      \u0275\u0275conditionalCreate(12, MtxSelect_Conditional_12_Template, 1, 0, null, 12);
      \u0275\u0275conditionalCreate(13, MtxSelect_Conditional_13_Template, 1, 0, null, 13);
      \u0275\u0275conditionalCreate(14, MtxSelect_Conditional_14_Template, 1, 0, null, 14);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275classProp("ng-select-invalid", ctx.errorState);
      \u0275\u0275twoWayProperty("ngModel", ctx.value);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(62, _c23))("placeholder", ctx.placeholder || ctx._intl.placeholder)("items", ctx.items)("addTag", ctx.addTag)("addTagText", ctx.addTagText || ctx._intl.addTagText)("appendTo", ctx.appendTo)("appearance", ctx.appearance)("bindLabel", ctx.bindLabel)("bindValue", ctx.bindValue)("closeOnSelect", ctx.closeOnSelect)("clearAllText", ctx.clearAllText || ctx._intl.clearAllText)("clearable", ctx.clearable)("clearOnBackspace", ctx.clearOnBackspace)("dropdownPosition", ctx.dropdownPosition)("groupBy", ctx.groupBy)("groupValue", ctx.groupValue)("bufferAmount", ctx.bufferAmount)("hideSelected", ctx.hideSelected)("isOpen", ctx.isOpen)("inputAttrs", ctx.inputAttrs)("loading", ctx.loading)("loadingText", ctx.loadingText || ctx._intl.loadingText)("labelForId", ctx.labelForId)("markFirst", ctx.markFirst)("maxSelectedItems", ctx.maxSelectedItems)("multiple", ctx.multiple)("notFoundText", ctx.notFoundText || ctx._intl.notFoundText)("readonly", ctx.readonly || ctx.disabled)("typeahead", ctx.typeahead)("typeToSearchText", ctx.typeToSearchText || ctx._intl.typeToSearchText)("trackByFn", ctx.trackByFn)("searchable", ctx.searchable)("searchFn", ctx.searchFn)("searchWhileComposing", ctx.searchWhileComposing)("clearSearchOnAdd", ctx.clearSearchOnAdd)("selectableGroup", ctx.selectableGroup)("selectableGroupAsModel", ctx.selectableGroupAsModel)("selectOnTab", ctx.selectOnTab)("tabIndex", ctx.tabIndex)("openOnEnter", ctx.openOnEnter)("minTermLength", ctx.minTermLength)("editableSearchTerm", ctx.editableSearchTerm)("keyDownFn", ctx.keyDownFn)("virtualScroll", ctx.virtualScroll)("fixedPlaceholder", ctx.fixedPlaceholder)("deselectOnClick", ctx.deselectOnClick);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.optionTemplate ? 2 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.optgroupTemplate ? 3 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.labelTemplate ? 4 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.multiLabelTemplate ? 5 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.headerTemplate ? 6 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.footerTemplate ? 7 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.notFoundTemplate ? 8 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.typeToSearchTemplate ? 9 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loadingTextTemplate ? 10 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.tagTemplate ? 11 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loadingSpinnerTemplate ? 12 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.placeholderTemplate ? 13 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.clearbuttonTemplate ? 14 : -1);
    }
  },
  dependencies: [NgSelectModule, NgSelectComponent, NgOptgroupTemplateDirective, NgOptionTemplateDirective, NgLabelTemplateDirective, NgMultiLabelTemplateDirective, NgHeaderTemplateDirective, NgFooterTemplateDirective, NgPlaceholderTemplateDirective, NgNotFoundTemplateDirective, NgTypeToSearchTemplateDirective, NgLoadingTextTemplateDirective, NgTagTemplateDirective, NgLoadingSpinnerTemplateDirective, NgClearButtonTemplateDirective, FormsModule, NgControlStatus, NgModel, NgTemplateOutlet],
  styles: [".ng-select{padding:var(--mat-form-field-filled-with-label-container-padding-top, 24px) 16px var(--mat-form-field-filled-with-label-container-padding-bottom, 8px);margin:calc(var(--mat-form-field-filled-with-label-container-padding-top, 24px) * -1) -16px calc(var(--mat-form-field-filled-with-label-container-padding-bottom, 8px) * -1)}.mdc-text-field--outlined .ng-select,.mdc-text-field--no-label .ng-select{padding-top:var(--mat-form-field-container-vertical-padding, 16px);padding-bottom:var(--mat-form-field-container-vertical-padding, 16px);margin-top:calc(var(--mat-form-field-container-vertical-padding, 16px) * -1);margin-bottom:calc(var(--mat-form-field-container-vertical-padding, 16px) * -1)}.ng-select .ng-select-container{align-items:center;color:var(--mtx-select-container-text-color, var(--mat-sys-on-surface))}.ng-select .ng-select-container .ng-value-container{align-items:center;gap:4px}.ng-select .ng-select-container .ng-value-container .ng-input>input{height:var(--mat-form-field-container-text-line-height, var(--mat-sys-body-large-line-height));color:inherit;font:inherit}.ng-select .ng-select-container .ng-clear-wrapper{display:inline-flex;justify-content:center;align-items:center;width:24px;height:var(--mat-form-field-container-text-line-height, var(--mat-sys-body-large-line-height))}.ng-select .ng-placeholder{transition:opacity .2s;opacity:1;color:var(--mtx-select-placeholder-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-form-field-hide-placeholder .ng-select .ng-placeholder{opacity:0}.ng-select .ng-has-value .ng-placeholder{display:none}.ng-select .ng-clear-wrapper{color:var(--mtx-select-clear-icon-color, var(--mat-sys-on-surface))}.ng-select .ng-clear-wrapper:hover .ng-clear{color:var(--mtx-select-clear-icon-hover-color, var(--mat-sys-error))}.ng-select.ng-select-disabled .ng-value{color:var(--mtx-select-disabled-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.ng-select.ng-select-opened .ng-arrow-wrapper .ng-arrow{top:-2px;border-width:0 5px 5px}.ng-select.ng-select-single.ng-select-filtered .ng-placeholder{display:initial;visibility:hidden}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value{display:inline-flex;align-items:center;height:var(--mat-form-field-container-text-line-height, var(--mat-sys-body-large-line-height));padding:0 calc((var(--mat-form-field-container-text-line-height, var(--mat-sys-body-large-line-height)) - 16px) / 2);border-radius:9999px;font-size:.875em;background-color:var(--mtx-select-multiple-value-background-color, transparent);border:1px solid var(--mtx-select-multiple-value-outline-color, var(--mat-sys-outline))}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled{opacity:.4}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-label{display:inline-block;margin:0 4px;line-height:16px}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon{width:16px;height:16px;line-height:16px;border-radius:50%;text-align:center}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon:hover{background-color:var(--mtx-select-multiple-value-icon-hover-background-color, var(--mat-sys-outline-variant))}.ng-select.ng-select-multiple.ng-select-disabled .ng-select-container .ng-value-container .ng-value{border-color:var(--mtx-select-multiple-value-disabled-outline-color, color-mix(in srgb, var(--mat-sys-outline) 38%, transparent))}.ng-select .ng-arrow-wrapper{width:10px}.ng-select .ng-arrow{border-width:5px 5px 2px;border-style:solid;border-color:var(--mtx-select-enabled-arrow-color, var(--mat-sys-on-surface)) transparent transparent}.ng-select.ng-select-disabled .ng-arrow{border-color:var(--mtx-select-disabled-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent)) transparent transparent}.ng-select.ng-select-invalid .ng-arrow{border-color:var(--mtx-select-invalid-arrow-color, var(--mat-sys-error)) transparent transparent}.ng-select.ng-select-opened .ng-arrow{border-color:transparent transparent var(--mtx-select-enabled-arrow-color, var(--mat-sys-on-surface))}.ng-select.ng-select-opened.ng-select-invalid .ng-arrow{border-color:transparent transparent var(--mtx-select-invalid-arrow-color, var(--mat-sys-error))}.ng-dropdown-panel{background-color:var(--mtx-select-panel-background-color, var(--mat-sys-surface-container))}.ng-dropdown-panel.ng-select-bottom{top:100%;border-bottom-left-radius:var(--mtx-select-container-shape, var(--mat-sys-corner-extra-small));border-bottom-right-radius:var(--mtx-select-container-shape, var(--mat-sys-corner-extra-small));box-shadow:var(--mtx-select-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, .2), 0px 2px 2px 0px rgba(0, 0, 0, .14), 0px 1px 5px 0px rgba(0, 0, 0, .12))}.ng-dropdown-panel.ng-select-top{bottom:100%;border-top-left-radius:var(--mtx-select-container-shape, var(--mat-sys-corner-extra-small));border-top-right-radius:var(--mtx-select-container-shape, var(--mat-sys-corner-extra-small));box-shadow:var(--mtx-select-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, .2), 0px 2px 2px 0px rgba(0, 0, 0, .14), 0px 1px 5px 0px rgba(0, 0, 0, .12))}.ng-dropdown-panel .ng-dropdown-header,.ng-dropdown-panel .ng-dropdown-footer{padding:14px 16px}.ng-dropdown-panel .ng-dropdown-header{border-bottom:1px solid var(--mtx-select-panel-divider-color, var(--mat-sys-outline))}.ng-dropdown-panel .ng-dropdown-footer{border-top:1px solid var(--mtx-select-panel-divider-color, var(--mat-sys-outline))}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup{padding:14px 16px;font-weight:500;-webkit-user-select:none;user-select:none;cursor:pointer;color:var(--mtx-select-optgroup-label-text-color, var(--mat-sys-on-surface))}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-disabled{cursor:default}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-marked{background-color:var(--mtx-select-option-hover-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent))}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-selected{background-color:var(--mtx-select-option-selected-state-background-color, var(--mat-sys-secondary-container));color:var(--mtx-select-option-selected-state-text-color, var(--mat-sys-on-surface))}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option{position:relative;padding:14px 16px;text-overflow:ellipsis;text-decoration:none;text-align:left;white-space:nowrap;overflow:hidden;color:var(--mtx-select-option-label-text-color, var(--mat-sys-on-surface))}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-marked{background-color:var(--mtx-select-option-hover-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent))}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected{background-color:var(--mtx-select-option-selected-state-background-color, var(--mat-sys-secondary-container));color:var(--mtx-select-option-selected-state-text-color, var(--mat-sys-on-surface))}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-disabled{color:var(--mtx-select-option-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}[dir=rtl] .ng-dropdown-panel .ng-dropdown-panel-items .ng-option{text-align:right}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-child{padding-left:32px}[dir=rtl] .ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-child{padding-right:32px;padding-left:0}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option .ng-tag-label{margin-right:6px;font-size:80%}[dir=rtl] .ng-dropdown-panel .ng-dropdown-panel-items .ng-option .ng-tag-label{margin-left:6px;margin-right:0}\n"],
  encapsulation: 2,
  changeDetection: 0
});
var MtxSelect = _MtxSelect;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MtxSelect, [{
    type: Component,
    args: [{
      selector: "mtx-select",
      exportAs: "mtxSelect",
      host: {
        "role": "combobox",
        "aria-autocomplete": "none",
        "[attr.id]": "id",
        "[attr.aria-expanded]": "panelOpen",
        "[attr.aria-label]": "ariaLabel || null",
        "[attr.aria-labelledby]": "_getAriaLabelledby()",
        "[attr.aria-describedby]": "_ariaDescribedby || null",
        "[attr.aria-required]": "required.toString()",
        "[attr.aria-disabled]": "disabled.toString()",
        "[attr.aria-invalid]": "errorState",
        "[class.mtx-select-floating]": "shouldLabelFloat",
        "[class.mtx-select-disabled]": "disabled",
        "[class.mtx-select-invalid]": "errorState",
        "[class.mtx-select-required]": "required",
        "[class.mtx-select-empty]": "empty",
        "[class.mtx-select-multiple]": "multiple",
        "class": "mtx-select"
      },
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [{
        provide: MatFormFieldControl,
        useExisting: MtxSelect
      }],
      imports: [NgSelectModule, FormsModule, NgTemplateOutlet],
      template: '<ng-select #ngSelect\n  [class.ng-select-invalid]="errorState"\n  [(ngModel)]="value"\n  [ngModelOptions]="{standalone: true}"\n  [placeholder]="placeholder || _intl.placeholder!"\n  [items]="items"\n  [addTag]="addTag"\n  [addTagText]="addTagText || _intl.addTagText"\n  [appendTo]="appendTo"\n  [appearance]="appearance"\n  [bindLabel]="bindLabel!"\n  [bindValue]="bindValue!"\n  [closeOnSelect]="closeOnSelect"\n  [clearAllText]="clearAllText || _intl.clearAllText"\n  [clearable]="clearable"\n  [clearOnBackspace]="clearOnBackspace"\n  [dropdownPosition]="dropdownPosition"\n  [groupBy]="groupBy"\n  [groupValue]="groupValue"\n  [bufferAmount]="bufferAmount"\n  [hideSelected]="hideSelected"\n  [isOpen]="isOpen"\n  [inputAttrs]="inputAttrs"\n  [loading]="loading"\n  [loadingText]="loadingText || _intl.loadingText"\n  [labelForId]="labelForId"\n  [markFirst]="markFirst"\n  [maxSelectedItems]="maxSelectedItems"\n  [multiple]="multiple"\n  [notFoundText]="notFoundText || _intl.notFoundText"\n  [readonly]="readonly || disabled"\n  [typeahead]="typeahead"\n  [typeToSearchText]="typeToSearchText || _intl.typeToSearchText"\n  [trackByFn]="trackByFn"\n  [searchable]="searchable"\n  [searchFn]="searchFn"\n  [searchWhileComposing]="searchWhileComposing"\n  [clearSearchOnAdd]="clearSearchOnAdd"\n  [selectableGroup]="selectableGroup"\n  [selectableGroupAsModel]="selectableGroupAsModel"\n  [selectOnTab]="selectOnTab"\n  [tabIndex]="tabIndex"\n  [openOnEnter]="openOnEnter"\n  [minTermLength]="minTermLength"\n  [editableSearchTerm]="editableSearchTerm"\n  [keyDownFn]="keyDownFn"\n  [virtualScroll]="virtualScroll"\n  [fixedPlaceholder]="fixedPlaceholder"\n  [deselectOnClick]="deselectOnClick"\n  (blur)="blurEvent.emit($event)"\n  (focus)="focusEvent.emit($event)"\n  (change)="changeEvent.emit($event)"\n  (open)="openChange()"\n  (close)="closeEvent.emit()"\n  (search)="searchEvent.emit($event)"\n  (clear)="clearEvent.emit($event)"\n  (add)="addEvent.emit($event)"\n  (remove)="removeEvent.emit($event)"\n  (scroll)="scroll.emit($event)"\n  (scrollToEnd)="scrollToEnd.emit()">\n\n  @if (optionTemplate) {\n    <ng-template ng-option-tmp let-item="item" let-item$="item$" let-index="index"\n      let-searchTerm="searchTerm">\n      <ng-template [ngTemplateOutlet]="optionTemplate"\n        [ngTemplateOutletContext]="{ item: item, item$: item$, index: index, searchTerm: searchTerm }">\n      </ng-template>\n    </ng-template>\n  }\n\n  @if (optgroupTemplate) {\n    <ng-template ng-optgroup-tmp let-item="item" let-item$="item$" let-index="index"\n      let-searchTerm="searchTerm">\n      <ng-template [ngTemplateOutlet]="optgroupTemplate"\n        [ngTemplateOutletContext]="{ item: item, item$: item$, index: index, searchTerm: searchTerm }">\n      </ng-template>\n    </ng-template>\n  }\n\n  @if (labelTemplate) {\n    <ng-template ng-label-tmp let-item="item" let-clear="clear" let-label="label">\n      <ng-template [ngTemplateOutlet]="labelTemplate"\n        [ngTemplateOutletContext]="{ item: item, clear: clear, label: label }">\n      </ng-template>\n    </ng-template>\n  }\n\n  @if (multiLabelTemplate) {\n    <ng-template ng-multi-label-tmp let-items="items" let-clear="clear">\n      <ng-template [ngTemplateOutlet]="multiLabelTemplate"\n        [ngTemplateOutletContext]="{ items: items, clear: clear }">\n      </ng-template>\n    </ng-template>\n  }\n\n  @if (headerTemplate) {\n    <ng-template ng-header-tmp>\n      <ng-template [ngTemplateOutlet]="headerTemplate"></ng-template>\n    </ng-template>\n  }\n\n  @if (footerTemplate) {\n    <ng-template ng-footer-tmp>\n      <ng-template [ngTemplateOutlet]="footerTemplate"></ng-template>\n    </ng-template>\n  }\n\n  @if (notFoundTemplate) {\n    <ng-template ng-notfound-tmp let-searchTerm="searchTerm">\n      <ng-template [ngTemplateOutlet]="notFoundTemplate"\n        [ngTemplateOutletContext]="{ searchTerm: searchTerm }">\n      </ng-template>\n    </ng-template>\n  }\n\n  @if (typeToSearchTemplate) {\n    <ng-template ng-typetosearch-tmp>\n      <ng-template [ngTemplateOutlet]="typeToSearchTemplate"></ng-template>\n    </ng-template>\n  }\n\n  @if (loadingTextTemplate) {\n    <ng-template ng-loadingtext-tmp let-searchTerm="searchTerm">\n      <ng-template [ngTemplateOutlet]="loadingTextTemplate"\n        [ngTemplateOutletContext]="{ searchTerm: searchTerm }">\n      </ng-template>\n    </ng-template>\n  }\n\n  @if (tagTemplate) {\n    <ng-template ng-tag-tmp let-searchTerm="searchTerm">\n      <ng-template [ngTemplateOutlet]="tagTemplate"\n        [ngTemplateOutletContext]="{ searchTerm: searchTerm }">\n      </ng-template>\n    </ng-template>\n  }\n\n  @if (loadingSpinnerTemplate) {\n    <ng-template ng-loadingspinner-tmp>\n      <ng-template [ngTemplateOutlet]="loadingSpinnerTemplate"></ng-template>\n    </ng-template>\n  }\n\n  @if (placeholderTemplate) {\n    <ng-template ng-placeholder-tmp>\n      <ng-template [ngTemplateOutlet]="placeholderTemplate"></ng-template>\n    </ng-template>\n  }\n\n  @if (clearbuttonTemplate) {\n    <ng-template ng-clearbutton-tmp>\n      <ng-template [ngTemplateOutlet]="clearbuttonTemplate"></ng-template>\n    </ng-template>\n  }\n  \n</ng-select>',
      styles: [".ng-select{padding:var(--mat-form-field-filled-with-label-container-padding-top, 24px) 16px var(--mat-form-field-filled-with-label-container-padding-bottom, 8px);margin:calc(var(--mat-form-field-filled-with-label-container-padding-top, 24px) * -1) -16px calc(var(--mat-form-field-filled-with-label-container-padding-bottom, 8px) * -1)}.mdc-text-field--outlined .ng-select,.mdc-text-field--no-label .ng-select{padding-top:var(--mat-form-field-container-vertical-padding, 16px);padding-bottom:var(--mat-form-field-container-vertical-padding, 16px);margin-top:calc(var(--mat-form-field-container-vertical-padding, 16px) * -1);margin-bottom:calc(var(--mat-form-field-container-vertical-padding, 16px) * -1)}.ng-select .ng-select-container{align-items:center;color:var(--mtx-select-container-text-color, var(--mat-sys-on-surface))}.ng-select .ng-select-container .ng-value-container{align-items:center;gap:4px}.ng-select .ng-select-container .ng-value-container .ng-input>input{height:var(--mat-form-field-container-text-line-height, var(--mat-sys-body-large-line-height));color:inherit;font:inherit}.ng-select .ng-select-container .ng-clear-wrapper{display:inline-flex;justify-content:center;align-items:center;width:24px;height:var(--mat-form-field-container-text-line-height, var(--mat-sys-body-large-line-height))}.ng-select .ng-placeholder{transition:opacity .2s;opacity:1;color:var(--mtx-select-placeholder-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-form-field-hide-placeholder .ng-select .ng-placeholder{opacity:0}.ng-select .ng-has-value .ng-placeholder{display:none}.ng-select .ng-clear-wrapper{color:var(--mtx-select-clear-icon-color, var(--mat-sys-on-surface))}.ng-select .ng-clear-wrapper:hover .ng-clear{color:var(--mtx-select-clear-icon-hover-color, var(--mat-sys-error))}.ng-select.ng-select-disabled .ng-value{color:var(--mtx-select-disabled-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.ng-select.ng-select-opened .ng-arrow-wrapper .ng-arrow{top:-2px;border-width:0 5px 5px}.ng-select.ng-select-single.ng-select-filtered .ng-placeholder{display:initial;visibility:hidden}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value{display:inline-flex;align-items:center;height:var(--mat-form-field-container-text-line-height, var(--mat-sys-body-large-line-height));padding:0 calc((var(--mat-form-field-container-text-line-height, var(--mat-sys-body-large-line-height)) - 16px) / 2);border-radius:9999px;font-size:.875em;background-color:var(--mtx-select-multiple-value-background-color, transparent);border:1px solid var(--mtx-select-multiple-value-outline-color, var(--mat-sys-outline))}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled{opacity:.4}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-label{display:inline-block;margin:0 4px;line-height:16px}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon{width:16px;height:16px;line-height:16px;border-radius:50%;text-align:center}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon:hover{background-color:var(--mtx-select-multiple-value-icon-hover-background-color, var(--mat-sys-outline-variant))}.ng-select.ng-select-multiple.ng-select-disabled .ng-select-container .ng-value-container .ng-value{border-color:var(--mtx-select-multiple-value-disabled-outline-color, color-mix(in srgb, var(--mat-sys-outline) 38%, transparent))}.ng-select .ng-arrow-wrapper{width:10px}.ng-select .ng-arrow{border-width:5px 5px 2px;border-style:solid;border-color:var(--mtx-select-enabled-arrow-color, var(--mat-sys-on-surface)) transparent transparent}.ng-select.ng-select-disabled .ng-arrow{border-color:var(--mtx-select-disabled-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent)) transparent transparent}.ng-select.ng-select-invalid .ng-arrow{border-color:var(--mtx-select-invalid-arrow-color, var(--mat-sys-error)) transparent transparent}.ng-select.ng-select-opened .ng-arrow{border-color:transparent transparent var(--mtx-select-enabled-arrow-color, var(--mat-sys-on-surface))}.ng-select.ng-select-opened.ng-select-invalid .ng-arrow{border-color:transparent transparent var(--mtx-select-invalid-arrow-color, var(--mat-sys-error))}.ng-dropdown-panel{background-color:var(--mtx-select-panel-background-color, var(--mat-sys-surface-container))}.ng-dropdown-panel.ng-select-bottom{top:100%;border-bottom-left-radius:var(--mtx-select-container-shape, var(--mat-sys-corner-extra-small));border-bottom-right-radius:var(--mtx-select-container-shape, var(--mat-sys-corner-extra-small));box-shadow:var(--mtx-select-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, .2), 0px 2px 2px 0px rgba(0, 0, 0, .14), 0px 1px 5px 0px rgba(0, 0, 0, .12))}.ng-dropdown-panel.ng-select-top{bottom:100%;border-top-left-radius:var(--mtx-select-container-shape, var(--mat-sys-corner-extra-small));border-top-right-radius:var(--mtx-select-container-shape, var(--mat-sys-corner-extra-small));box-shadow:var(--mtx-select-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, .2), 0px 2px 2px 0px rgba(0, 0, 0, .14), 0px 1px 5px 0px rgba(0, 0, 0, .12))}.ng-dropdown-panel .ng-dropdown-header,.ng-dropdown-panel .ng-dropdown-footer{padding:14px 16px}.ng-dropdown-panel .ng-dropdown-header{border-bottom:1px solid var(--mtx-select-panel-divider-color, var(--mat-sys-outline))}.ng-dropdown-panel .ng-dropdown-footer{border-top:1px solid var(--mtx-select-panel-divider-color, var(--mat-sys-outline))}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup{padding:14px 16px;font-weight:500;-webkit-user-select:none;user-select:none;cursor:pointer;color:var(--mtx-select-optgroup-label-text-color, var(--mat-sys-on-surface))}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-disabled{cursor:default}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-marked{background-color:var(--mtx-select-option-hover-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent))}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-selected{background-color:var(--mtx-select-option-selected-state-background-color, var(--mat-sys-secondary-container));color:var(--mtx-select-option-selected-state-text-color, var(--mat-sys-on-surface))}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option{position:relative;padding:14px 16px;text-overflow:ellipsis;text-decoration:none;text-align:left;white-space:nowrap;overflow:hidden;color:var(--mtx-select-option-label-text-color, var(--mat-sys-on-surface))}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-marked{background-color:var(--mtx-select-option-hover-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent))}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected{background-color:var(--mtx-select-option-selected-state-background-color, var(--mat-sys-secondary-container));color:var(--mtx-select-option-selected-state-text-color, var(--mat-sys-on-surface))}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-disabled{color:var(--mtx-select-option-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}[dir=rtl] .ng-dropdown-panel .ng-dropdown-panel-items .ng-option{text-align:right}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-child{padding-left:32px}[dir=rtl] .ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-child{padding-right:32px;padding-left:0}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option .ng-tag-label{margin-right:6px;font-size:80%}[dir=rtl] .ng-dropdown-panel .ng-dropdown-panel-items .ng-option .ng-tag-label{margin-left:6px;margin-right:0}\n"]
    }]
  }], () => [], {
    ngSelect: [{
      type: ViewChild,
      args: ["ngSelect", {
        static: true
      }]
    }],
    optionTemplate: [{
      type: ContentChild,
      args: [MtxSelectOptionTemplate, {
        read: TemplateRef
      }]
    }],
    optgroupTemplate: [{
      type: ContentChild,
      args: [MtxSelectOptgroupTemplate, {
        read: TemplateRef
      }]
    }],
    labelTemplate: [{
      type: ContentChild,
      args: [MtxSelectLabelTemplate, {
        read: TemplateRef
      }]
    }],
    multiLabelTemplate: [{
      type: ContentChild,
      args: [MtxSelectMultiLabelTemplate, {
        read: TemplateRef
      }]
    }],
    headerTemplate: [{
      type: ContentChild,
      args: [MtxSelectHeaderTemplate, {
        read: TemplateRef
      }]
    }],
    footerTemplate: [{
      type: ContentChild,
      args: [MtxSelectFooterTemplate, {
        read: TemplateRef
      }]
    }],
    notFoundTemplate: [{
      type: ContentChild,
      args: [MtxSelectNotFoundTemplate, {
        read: TemplateRef
      }]
    }],
    typeToSearchTemplate: [{
      type: ContentChild,
      args: [MtxSelectTypeToSearchTemplate, {
        read: TemplateRef
      }]
    }],
    loadingTextTemplate: [{
      type: ContentChild,
      args: [MtxSelectLoadingTextTemplate, {
        read: TemplateRef
      }]
    }],
    tagTemplate: [{
      type: ContentChild,
      args: [MtxSelectTagTemplate, {
        read: TemplateRef
      }]
    }],
    loadingSpinnerTemplate: [{
      type: ContentChild,
      args: [MtxSelectLoadingSpinnerTemplate, {
        read: TemplateRef
      }]
    }],
    placeholderTemplate: [{
      type: ContentChild,
      args: [MtxSelectPlaceholderTemplate, {
        read: TemplateRef
      }]
    }],
    clearbuttonTemplate: [{
      type: ContentChild,
      args: [MtxSelectClearbuttonTemplate, {
        read: TemplateRef
      }]
    }],
    mtxOptions: [{
      type: ContentChildren,
      args: [MtxOption, {
        descendants: true
      }]
    }],
    addTag: [{
      type: Input
    }],
    addTagText: [{
      type: Input
    }],
    appearance: [{
      type: Input
    }],
    appendTo: [{
      type: Input
    }],
    bindLabel: [{
      type: Input
    }],
    bindValue: [{
      type: Input
    }],
    closeOnSelect: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    clearAllText: [{
      type: Input
    }],
    clearable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    clearOnBackspace: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    compareWith: [{
      type: Input
    }],
    dropdownPosition: [{
      type: Input
    }],
    groupBy: [{
      type: Input
    }],
    groupValue: [{
      type: Input
    }],
    bufferAmount: [{
      type: Input
    }],
    selectableGroup: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    selectableGroupAsModel: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    hideSelected: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    loading: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    loadingText: [{
      type: Input
    }],
    labelForId: [{
      type: Input
    }],
    markFirst: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    maxSelectedItems: [{
      type: Input
    }],
    multiple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    notFoundText: [{
      type: Input
    }],
    searchable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    readonly: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    searchFn: [{
      type: Input
    }],
    searchWhileComposing: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    selectOnTab: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    trackByFn: [{
      type: Input
    }],
    inputAttrs: [{
      type: Input
    }],
    tabIndex: [{
      type: Input
    }],
    openOnEnter: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    minTermLength: [{
      type: Input
    }],
    editableSearchTerm: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    keyDownFn: [{
      type: Input
    }],
    virtualScroll: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    typeToSearchText: [{
      type: Input
    }],
    typeahead: [{
      type: Input
    }],
    isOpen: [{
      type: Input
    }],
    fixedPlaceholder: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    deselectOnClick: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    blurEvent: [{
      type: Output,
      args: ["blur"]
    }],
    focusEvent: [{
      type: Output,
      args: ["focus"]
    }],
    changeEvent: [{
      type: Output,
      args: ["change"]
    }],
    openEvent: [{
      type: Output,
      args: ["open"]
    }],
    closeEvent: [{
      type: Output,
      args: ["close"]
    }],
    searchEvent: [{
      type: Output,
      args: ["search"]
    }],
    clearEvent: [{
      type: Output,
      args: ["clear"]
    }],
    addEvent: [{
      type: Output,
      args: ["add"]
    }],
    removeEvent: [{
      type: Output,
      args: ["remove"]
    }],
    scroll: [{
      type: Output,
      args: ["scroll"]
    }],
    scrollToEnd: [{
      type: Output,
      args: ["scrollToEnd"]
    }],
    clearSearchOnAdd: [{
      type: Input
    }],
    items: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    id: [{
      type: Input
    }],
    placeholder: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    required: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    errorStateMatcher: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }],
    ariaLabelledby: [{
      type: Input,
      args: ["aria-labelledby"]
    }]
  });
})();
var _MtxSelectModule = class _MtxSelectModule {
};
_MtxSelectModule.\u0275fac = function MtxSelectModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MtxSelectModule)();
};
_MtxSelectModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _MtxSelectModule,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NgSelectModule, MtxSelect, MtxOption, MtxSelectOptgroupTemplate, MtxSelectOptionTemplate, MtxSelectLabelTemplate, MtxSelectMultiLabelTemplate, MtxSelectHeaderTemplate, MtxSelectFooterTemplate, MtxSelectNotFoundTemplate, MtxSelectTypeToSearchTemplate, MtxSelectLoadingTextTemplate, MtxSelectTagTemplate, MtxSelectLoadingSpinnerTemplate, MtxSelectPlaceholderTemplate, MtxSelectClearbuttonTemplate],
  exports: [MtxSelect, MtxOption, MtxSelectOptgroupTemplate, MtxSelectOptionTemplate, MtxSelectLabelTemplate, MtxSelectMultiLabelTemplate, MtxSelectHeaderTemplate, MtxSelectFooterTemplate, MtxSelectNotFoundTemplate, MtxSelectTypeToSearchTemplate, MtxSelectLoadingTextTemplate, MtxSelectTagTemplate, MtxSelectLoadingSpinnerTemplate, MtxSelectPlaceholderTemplate, MtxSelectClearbuttonTemplate]
});
_MtxSelectModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NgSelectModule, MtxSelect]
});
var MtxSelectModule = _MtxSelectModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MtxSelectModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, FormsModule, ReactiveFormsModule, NgSelectModule, MtxSelect, MtxOption, MtxSelectOptgroupTemplate, MtxSelectOptionTemplate, MtxSelectLabelTemplate, MtxSelectMultiLabelTemplate, MtxSelectHeaderTemplate, MtxSelectFooterTemplate, MtxSelectNotFoundTemplate, MtxSelectTypeToSearchTemplate, MtxSelectLoadingTextTemplate, MtxSelectTagTemplate, MtxSelectLoadingSpinnerTemplate, MtxSelectPlaceholderTemplate, MtxSelectClearbuttonTemplate],
      exports: [MtxSelect, MtxOption, MtxSelectOptgroupTemplate, MtxSelectOptionTemplate, MtxSelectLabelTemplate, MtxSelectMultiLabelTemplate, MtxSelectHeaderTemplate, MtxSelectFooterTemplate, MtxSelectNotFoundTemplate, MtxSelectTypeToSearchTemplate, MtxSelectLoadingTextTemplate, MtxSelectTagTemplate, MtxSelectLoadingSpinnerTemplate, MtxSelectPlaceholderTemplate, MtxSelectClearbuttonTemplate]
    }]
  }], null, null);
})();

export {
  outputToObservable,
  toSignal,
  defineHiddenProp,
  observe,
  FORMLY_CONFIG,
  FormlyForm,
  FormlyAttributes,
  FieldType,
  FormlyValidationMessage,
  FieldWrapper,
  FormlyModule,
  MtxOption,
  MtxSelectTagTemplate,
  MtxSelect,
  MtxSelectModule
};
/*! Bundled license information:

@angular/core/fesm2022/rxjs-interop.mjs:
  (**
   * @license Angular v20.2.4
   * (c) 2010-2025 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
//# sourceMappingURL=chunk-X3OJG3WO.js.map
