import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentlistComponent } from './studentlist.component';

describe('StudentlistComponent', () => {
  let component: StudentlistComponent;
  let fixture: ComponentFixture<StudentlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentlistComponent],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
