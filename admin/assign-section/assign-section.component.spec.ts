import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignSectionComponent } from './assign-section.component';

describe('AssignSectionComponent', () => {
  let component: AssignSectionComponent;
  let fixture: ComponentFixture<AssignSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssignSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
