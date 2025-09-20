// src/app/shared/services/directionality.service.ts
import { Directionality } from '@angular/cdk/bidi';
import { Injectable, OnDestroy } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppDirectionality extends Directionality implements OnDestroy {
  constructor() {
    // call the parent constructor to initialize Directionality properly
    super();
  }

  override ngOnDestroy(): void {
    // call parent cleanup if any
    super.ngOnDestroy?.();
  }
}
