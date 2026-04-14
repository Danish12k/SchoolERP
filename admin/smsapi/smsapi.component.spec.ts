import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsapiComponent } from './smsapi.component';

describe('SmsapiComponent', () => {
  let component: SmsapiComponent;
  let fixture: ComponentFixture<SmsapiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmsapiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmsapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
