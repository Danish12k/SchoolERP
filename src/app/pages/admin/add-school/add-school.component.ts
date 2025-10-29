import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MaterialModule } from '../../../../../schematics/ng-add/files/module-files/app/material.module';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-add-school',
imports: [
    MatCard,
    MaterialModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    TranslateModule,
    ReactiveFormsModule
  ],
  templateUrl: './add-school.component.html',
  styleUrl: './add-school.component.scss'
})
export class AddSchoolComponent implements OnInit {
collegeForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.collegeForm = this.fb.group({
      collegeId: [0],
      collegeAbreviation: ['', [Validators.required, Validators.maxLength(10)]],
      collegeName: ['', [Validators.required, Validators.maxLength(100)]],
      collegeAddress: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      fax: [''],
      webSite: [''],
      affilicationNo: [''],
      board: [''],
      collegeLogo: [''],
      schoolCode: [''],
      dioceseCode: [''],
      portalURL: ['']
    });
  }

  onSubmit() {
    if (this.collegeForm.valid) {
      console.log('Form Submitted:', this.collegeForm.value);
      // ✅ Call your API service here to save data
    } else {
      this.collegeForm.markAllAsTouched();
    }
  }

  onCancel() {
    this.collegeForm.reset();
  }
}
