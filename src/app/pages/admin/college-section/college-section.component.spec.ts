import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegeSectionComponent } from './college-section.component';

describe('CollegeSectionComponent', () => {
  let component: CollegeSectionComponent;
  let fixture: ComponentFixture<CollegeSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollegeSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollegeSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
