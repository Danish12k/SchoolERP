import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllocateFeeComponent } from './allocate-fee.component';

describe('AllocateFeeComponent', () => {
  let component: AllocateFeeComponent;
  let fixture: ComponentFixture<AllocateFeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllocateFeeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllocateFeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
