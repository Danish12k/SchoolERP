import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoadingService } from '@core/ui/loading.service';

@Component({
  selector: 'app-loading-overlay',
  imports: [AsyncPipe, MatProgressSpinnerModule],
  template: `
    @if (loading$ | async) {
      <div class="app-loading-overlay" role="status" aria-live="polite" aria-label="Loading">
        <div class="app-loading-overlay__card">
          <mat-progress-spinner diameter="38" mode="indeterminate"></mat-progress-spinner>
          <div class="app-loading-overlay__text">Please wait…</div>
        </div>
      </div>
    }
  `,
  styles: [
    `
      .app-loading-overlay {
        position: fixed;
        inset: 0;
        z-index: 2000;
        display: grid;
        place-items: center;
        background: rgba(0, 0, 0, 0.18);
        backdrop-filter: blur(1px);
      }

      .app-loading-overlay__card {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 14px 16px;
        border-radius: 12px;
        background: var(--mat-sys-surface, #fff);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.22);
      }

      .app-loading-overlay__text {
        font-size: 14px;
        font-weight: 600;
        color: var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87));
      }
    `,
  ],
})
export class LoadingOverlayComponent {
  private readonly loading = inject(LoadingService);
  loading$ = this.loading.loading$;
}

