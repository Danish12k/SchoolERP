import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllocateFeetoClassComponent } from './allocate-feeto-class.component';

describe('AllocateFeetoClassComponent', () => {
  let component: AllocateFeetoClassComponent;
  let fixture: ComponentFixture<AllocateFeetoClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllocateFeetoClassComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllocateFeetoClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
