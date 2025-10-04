import { Component, inject, Inject, OnInit, ViewChild } from '@angular/core';
import { PageHeaderComponent } from "@shared";
import { MatCard, MatCardModule } from "@angular/material/card";
import { MaterialModule } from "../../../../../schematics/ng-add/files/module-files/app/material.module";
import { FormsModule, NgForm } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { TranslateModule } from '@ngx-translate/core';
import { SessionService } from '../services/session.service';
import { ISession } from '../interfaces/isession';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-session',
  imports: [PageHeaderComponent, MatCard,
    MaterialModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    TranslateModule,
    PageHeaderComponent,

  ],
  templateUrl: './session.component.html',
  styleUrl: './session.component.scss',
  providers: [DatePipe]
})
export class SessionComponent implements OnInit {
  private datepipe: DatePipe = inject(DatePipe);
  private _sessionservice = inject(SessionService);
  dataSource = new MatTableDataSource<ISession>([]);
  displayedColumns: string[] = ['select', 'Name', 'Description', 'yearFrom', 'yearTo', 'actions'];
  selection: ISession[] = [];
  constructor(private dialog: MatDialog) { }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('editDialog') editDialog: any;

  sessionName: string = '';
  description: string = '';
  yearFrom: Date | null = null;
  yearTo: Date | null = null;

  ngOnInit(): void {
    this.getsessionList();
  }

  addSession(form: NgForm) {
    debugger;
    if (form.invalid) {
      alert("Please fill all required fields");
      return;
    }
    debugger;
    const newSession: ISession = {
      sessionId: 0, // Assuming 0 for new session, backend should assign the actual ID
      sessionName: this.sessionName,
      description: this.description,
      yearFrom: this.datepipe.transform(this.yearFrom, "dd/MM/yyyy") || '',
      yearTo: this.datepipe.transform(this.yearTo, "dd/MM/yyyy") || ''
    };
    debugger;
    this._sessionservice.addSession(newSession).subscribe({
      next: (res) => {
        debugger;
        if (res.success) {
          alert('Session added successfully');
          this.getsessionList(); // Refresh the list
          form.resetForm(); // Reset the form after successful submission
        }
      },
      error: (err) => {
        console.error('Error adding session:', err);
        alert('Failed to add session');
      }
    });

  }


  getsessionList() {
    this._sessionservice.getSessionList().subscribe(response => {
      console.log('Session list fetched successfully:', response);
      if (response.success && response.data) {
        this.dataSource.data = response.data;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    }, error => {
      console.error('Error fetching session list:', error);
    });
  }

  openEditDialog(session: ISession) {
    const dialogRef = this.dialog.open(this.editDialog, {
      width: '400px',
      data: { ...session }
    });
    debugger;
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        debugger;
        // Handle the result from the dialog (e.g., save changes)
        console.log('Dialog result:', result);
        this._sessionservice.updateSession(result).subscribe({
          next: (res) => {
            if (res.success) {
              alert('Session updated successfully');
              this.getsessionList(); // Refresh the list
            }
          },
          error: (err) => {
            console.error('Error updating session:', err);
            alert('Failed to update session');
          }
        })
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  sessionDelete(session: ISession) {
    // Implement delete functionality here
    console.log('Delete session:', session);
  }
  /** Checkbox Selection Logic */
  toggleSelection(row: ISession) {
    if (this.selection.includes(row)) {
      this.selection = this.selection.filter(r => r !== row);
    } else {
      this.selection.push(row);
    }
  }

  isAllSelected() {
    return this.selection.length === this.dataSource.data.length;
  }

  isPartialSelected() {
    return this.selection.length > 0 && !this.isAllSelected();
  }

  masterToggle() {
    if (this.isAllSelected()) {
      this.selection = [];
    } else {
      this.selection = [...this.dataSource.data];
    }
  }

}
