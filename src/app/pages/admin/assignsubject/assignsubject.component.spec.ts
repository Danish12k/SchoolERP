import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignsubjectComponent } from './assignsubject.component';

describe('AssignsubjectComponent', () => {
  let component: AssignsubjectComponent;
  let fixture: ComponentFixture<AssignsubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssignsubjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignsubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
