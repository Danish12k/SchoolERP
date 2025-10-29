import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectmasterComponent } from './subjectmaster.component';

describe('SubjectmasterComponent', () => {
  let component: SubjectmasterComponent;
  let fixture: ComponentFixture<SubjectmasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubjectmasterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubjectmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
