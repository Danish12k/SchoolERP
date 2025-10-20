import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeGroupComponent } from './fee-group.component';

describe('FeeGroupComponent', () => {
  let component: FeeGroupComponent;
  let fixture: ComponentFixture<FeeGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeeGroupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeeGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
