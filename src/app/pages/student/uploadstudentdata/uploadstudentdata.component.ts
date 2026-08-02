import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MaterialModule } from '../../../../../schematics/ng-add/files/module-files/app/material.module';
import * as XLSX from 'xlsx';

export type StudentUploadRow = Record<string, string | number | null>;

@Component({
  selector: 'app-uploadstudentdata',
  imports: [MatCardModule, MaterialModule, MatTableModule],
  templateUrl: './uploadstudentdata.component.html',
  styleUrl: './uploadstudentdata.component.scss',
})
export class UploadstudentdataComponent {
  readonly sampleHeaders = [
    'AdmissionNo',
    'StudentName',
    'FatherName',
    'MotherName',
    'Mobile',
    'DOB',
    'Gender',
    'Class',
    'Section',
    'RollNumber',
  ];

  dataSource = new MatTableDataSource<StudentUploadRow>([]);
  displayedColumns: string[] = [];
  dataColumns: string[] = [];
  columnLabels: Record<string, string> = {};

  selectedFile: File | null = null;
  parsing = false;
  submitting = false;
  errorMessage: string | null = null;
  infoMessage: string | null = null;
  tableVersion = 0;

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.selectedFile = input.files?.[0] ?? null;
    this.errorMessage = null;
    this.infoMessage = null;
  }

  uploadFile(): void {
    if (!this.selectedFile) {
      this.errorMessage = 'Please select an Excel file first.';
      return;
    }

    this.parsing = true;
    this.errorMessage = null;
    this.infoMessage = null;

    const reader = new FileReader();
    reader.onload = () => {
      try {
        const data = new Uint8Array(reader.result as ArrayBuffer);
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        if (!sheetName) {
          throw new Error('The Excel file has no worksheets.');
        }

        const sheet = workbook.Sheets[sheetName];
        const rows = XLSX.utils.sheet_to_json<Record<string, unknown>>(sheet, {
          defval: '',
          raw: false,
        });

        if (!rows.length) {
          this.dataSource.data = [];
          this.displayedColumns = [];
          this.dataColumns = [];
          this.columnLabels = {};
          this.errorMessage = 'No data rows found in the Excel file.';
          this.parsing = false;
          return;
        }

        const headers = Object.keys(rows[0]);
        this.dataColumns = headers.map((_, index) => `col_${index}`);
        this.displayedColumns = ['seqNo', ...this.dataColumns];
        this.columnLabels = Object.fromEntries(
          headers.map((header, index) => [`col_${index}`, String(header).trim() || `Column ${index + 1}`])
        );

        this.dataSource.data = rows.map(row => {
          const mapped: StudentUploadRow = {};
          headers.forEach((header, index) => {
            mapped[`col_${index}`] = this.cleanCell(row[header]);
          });
          return mapped;
        });
        this.tableVersion += 1;
        this.infoMessage = `Loaded ${this.dataSource.data.length} row(s) from "${this.selectedFile?.name}".`;
      } catch (error) {
        this.dataSource.data = [];
        this.displayedColumns = [];
        this.dataColumns = [];
        this.columnLabels = {};
        this.errorMessage =
          error instanceof Error ? error.message : 'Could not read the Excel file. Please check the format.';
      } finally {
        this.parsing = false;
      }
    };

    reader.onerror = () => {
      this.parsing = false;
      this.errorMessage = 'Failed to read the selected file.';
    };

    reader.readAsArrayBuffer(this.selectedFile);
  }

  downloadSample(): void {
    const worksheet = XLSX.utils.aoa_to_sheet([this.sampleHeaders]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Students');
    XLSX.writeFile(workbook, 'student-upload-sample.xlsx');
  }

  submitData(): void {
    if (!this.dataSource.data.length) {
      this.errorMessage = 'No rows to submit. Upload an Excel file first.';
      return;
    }

    this.submitting = true;
    this.errorMessage = null;

    // Stub: wire to StudentService upload API when endpoint is provided.
    const payload = this.dataSource.data.map(row => {
      const item: Record<string, string | number | null> = {};
      Object.keys(this.columnLabels).forEach(key => {
        item[this.columnLabels[key]] = row[key] ?? null;
      });
      return item;
    });

    console.log('submitStudentUpload', payload);
    this.infoMessage = `Prepared ${payload.length} row(s) for upload. API wiring pending.`;
    this.submitting = false;
  }

  clearData(): void {
    this.dataSource.data = [];
    this.displayedColumns = [];
    this.dataColumns = [];
    this.columnLabels = {};
    this.selectedFile = null;
    this.errorMessage = null;
    this.infoMessage = null;
  }

  rowNumber(index: number): number {
    return index + 1;
  }

  displayCell(row: StudentUploadRow, column: string): string {
    const value = row[column];
    if (value == null || value === '') {
      return '—';
    }
    return String(value);
  }

  private cleanCell(value: unknown): string {
    return String(value ?? '').replace(/\s+/g, ' ').trim();
  }
}
