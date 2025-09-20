import {
  DatetimeAdapter,
  MTX_DATETIME_FORMATS
} from "./chunk-DUWU3IMR.js";
import {
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
  MomentDateAdapter,
  MomentDateModule
} from "./chunk-ZCZBLY4X.js";
import {
  require_moment
} from "./chunk-7JZCG7YH.js";
import "./chunk-BUODDSMA.js";
import "./chunk-PDT2INH5.js";
import "./chunk-53W4PNKK.js";
import {
  DateAdapter,
  MAT_DATE_LOCALE
} from "./chunk-NJS35E3Q.js";
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
import "./chunk-7NOA7DFH.js";
import "./chunk-2SF2BFR3.js";
import "./chunk-IET25UKP.js";
import "./chunk-OUSM42MY.js";
import {
  Injectable,
  NgModule,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule
} from "./chunk-TGP6U4PS.js";
import "./chunk-MY7C4QNH.js";
import "./chunk-H6VVMQMC.js";
import "./chunk-KEQKGBJ6.js";
import "./chunk-HOFLPY52.js";
import {
  __toESM
} from "./chunk-PEHFQLBM.js";

// node_modules/@ng-matero/extensions-moment-adapter/fesm2022/extensions-moment-adapter.mjs
var _moment = __toESM(require_moment(), 1);
var moment = "default" in _moment ? _moment.default : _moment;
function range(length, valueFunction) {
  const valuesArray = Array(length);
  for (let i = 0; i < length; i++) {
    valuesArray[i] = valueFunction(i);
  }
  return valuesArray;
}
var _MomentDatetimeAdapter = class _MomentDatetimeAdapter extends DatetimeAdapter {
  constructor() {
    super();
    this._useUtc = false;
    const matDateLocale = inject(MAT_DATE_LOCALE, {
      optional: true
    });
    const matMomentAdapterOptions = inject(MAT_MOMENT_DATE_ADAPTER_OPTIONS, {
      optional: true
    });
    this.setLocale(matDateLocale || moment.locale());
    this._useUtc = matMomentAdapterOptions?.useUtc || false;
  }
  setLocale(locale) {
    super.setLocale(locale);
    const momentLocaleData = moment.localeData(locale);
    this._localeData = {
      firstDayOfWeek: momentLocaleData.firstDayOfWeek(),
      longMonths: momentLocaleData.months(),
      shortMonths: momentLocaleData.monthsShort(),
      dates: range(31, (i) => super.createDate(2017, 0, i + 1).format("D")),
      hours: range(24, (i) => this.createDatetime(2017, 0, 1, i, 0).format("H")),
      minutes: range(60, (i) => this.createDatetime(2017, 0, 1, 1, i).format("m")),
      longDaysOfWeek: momentLocaleData.weekdays(),
      shortDaysOfWeek: momentLocaleData.weekdaysShort(),
      narrowDaysOfWeek: momentLocaleData.weekdaysMin()
    };
  }
  getHour(date) {
    return super.clone(date).hour();
  }
  getMinute(date) {
    return super.clone(date).minute();
  }
  isInNextMonth(startDate, endDate) {
    const nextMonth = this.getDateInNextMonth(startDate);
    return super.sameMonthAndYear(nextMonth, endDate);
  }
  getWeek(date, firstDayOfWeek) {
    return super.clone(date).week();
  }
  createDatetime(year, month, date, hour, minute) {
    if (month < 0 || month > 11) {
      throw Error(`Invalid month index "${month}". Month index has to be between 0 and 11.`);
    }
    if (date < 1) {
      throw Error(`Invalid date "${date}". Date has to be greater than 0.`);
    }
    if (hour < 0 || hour > 23) {
      throw Error(`Invalid hour "${hour}". Hour has to be between 0 and 23.`);
    }
    if (minute < 0 || minute > 59) {
      throw Error(`Invalid minute "${minute}". Minute has to be between 0 and 59.`);
    }
    let result;
    if (this._useUtc) {
      result = moment.utc({
        year,
        month,
        date,
        hour,
        minute
      });
    } else {
      result = moment({
        year,
        month,
        date,
        hour,
        minute
      });
    }
    if (!result.isValid()) {
      throw Error(`Invalid date "${date}" for month with index "${month}".`);
    }
    return result.locale(this.locale);
  }
  getFirstDateOfMonth(date) {
    return super.clone(date).startOf("month");
  }
  getHourNames() {
    return this._localeData.hours;
  }
  getMinuteNames() {
    return this._localeData.minutes;
  }
  addCalendarHours(date, hours) {
    return super.clone(date).add({
      hours
    });
  }
  addCalendarMinutes(date, minutes) {
    return super.clone(date).add({
      minutes
    });
  }
  deserialize(value) {
    return this._delegate.deserialize(value);
  }
  getDateInNextMonth(date) {
    return super.clone(date).date(1).add({
      month: 1
    });
  }
};
_MomentDatetimeAdapter.ɵfac = function MomentDatetimeAdapter_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MomentDatetimeAdapter)();
};
_MomentDatetimeAdapter.ɵprov = ɵɵdefineInjectable({
  token: _MomentDatetimeAdapter,
  factory: _MomentDatetimeAdapter.ɵfac
});
var MomentDatetimeAdapter = _MomentDatetimeAdapter;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MomentDatetimeAdapter, [{
    type: Injectable
  }], () => [], null);
})();
var MTX_MOMENT_DATETIME_FORMATS = {
  parse: {
    dateInput: "L",
    monthInput: "MMMM",
    yearInput: "YYYY",
    datetimeInput: "L LT",
    timeInput: "LT"
  },
  display: {
    dateInput: "L",
    monthInput: "MMMM",
    yearInput: "YYYY",
    datetimeInput: "L LT",
    timeInput: "LT",
    monthYearLabel: "MMM YYYY",
    dateA11yLabel: "LL",
    monthYearA11yLabel: "MMMM YYYY",
    popupHeaderDateLabel: "ddd, DD MMM"
  }
};
var _MomentDatetimeModule = class _MomentDatetimeModule {
};
_MomentDatetimeModule.ɵfac = function MomentDatetimeModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MomentDatetimeModule)();
};
_MomentDatetimeModule.ɵmod = ɵɵdefineNgModule({
  type: _MomentDatetimeModule,
  imports: [MomentDateModule]
});
_MomentDatetimeModule.ɵinj = ɵɵdefineInjector({
  providers: [{
    provide: DatetimeAdapter,
    useClass: MomentDatetimeAdapter
  }],
  imports: [MomentDateModule]
});
var MomentDatetimeModule = _MomentDatetimeModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MomentDatetimeModule, [{
    type: NgModule,
    args: [{
      imports: [MomentDateModule],
      providers: [{
        provide: DatetimeAdapter,
        useClass: MomentDatetimeAdapter
      }]
    }]
  }], null, null);
})();
function provideMomentDatetimeAdapter(formats = MTX_MOMENT_DATETIME_FORMATS, options) {
  const providers = [{
    provide: DateAdapter,
    useClass: MomentDateAdapter,
    deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
  }, {
    provide: DatetimeAdapter,
    useClass: MomentDatetimeAdapter
  }, {
    provide: MTX_DATETIME_FORMATS,
    useValue: formats
  }];
  if (options) {
    providers.push({
      provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS,
      useValue: options
    });
  }
  return providers;
}
var _MtxMomentDatetimeModule = class _MtxMomentDatetimeModule {
};
_MtxMomentDatetimeModule.ɵfac = function MtxMomentDatetimeModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MtxMomentDatetimeModule)();
};
_MtxMomentDatetimeModule.ɵmod = ɵɵdefineNgModule({
  type: _MtxMomentDatetimeModule
});
_MtxMomentDatetimeModule.ɵinj = ɵɵdefineInjector({
  providers: [provideMomentDatetimeAdapter()]
});
var MtxMomentDatetimeModule = _MtxMomentDatetimeModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MtxMomentDatetimeModule, [{
    type: NgModule,
    args: [{
      providers: [provideMomentDatetimeAdapter()]
    }]
  }], null, null);
})();
export {
  MTX_MOMENT_DATETIME_FORMATS,
  MomentDatetimeAdapter,
  MomentDatetimeModule,
  MtxMomentDatetimeModule,
  provideMomentDatetimeAdapter
};
//# sourceMappingURL=@ng-matero_extensions-moment-adapter.js.map
