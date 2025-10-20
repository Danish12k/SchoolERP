import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { ExpenseService } from '../services/expense.service';
import { MatTableDataSource } from '@angular/material/table';
import { IExpenseHead } from '../interfaces/IAdmintMst';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MaterialModule } from '../../../../../schematics/ng-add/files/module-files/app/material.module';
import { FormBuilder, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { TranslateModule } from '@ngx-translate/core';
import { MatDialog } from '@angular/material/dialog';
import { PageHeaderComponent } from "@shared";

@Component({
  selector: 'app-expense',
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
    ReactiveFormsModule,
  ],
  templateUrl: './expense.component.html',
  styleUrl: './expense.component.scss'
})
export class ExpenseComponent implements OnInit {
  dataSource = new MatTableDataSource<IExpenseHead>([]);
  displayedColumns: string[] = ['expense', 'status', 'actions'];

  private _expenseService = inject(ExpenseService);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('editDialog') editDialog: any;

  constructor(private fb: FormBuilder, private dialog: MatDialog) { }
  expenseForm!: FormGroup;
  expenseList: IExpenseHead[] = [];
  expenseName: string = '';
  ngOnInit(): void {
    this.expenseForm = this.fb.group({
      id: [0],
      expenseHead: [null, [Validators.required, Validators.minLength(2)]],
      activeStatus: [false]
    })

    this.GetExpenseList();
  }

  GetExpenseList() {
    this._expenseService.listExpense().subscribe({
      next: (res) => {
        if (res.success) {
          this.dataSource.data = Array.isArray(res.data) ? res.data : [res.data];
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
      },
      error: (err) => {
        console.log("error to fetch expense list", err);
      }

    });
  };

  addExpense() {
    debugger;
    if (this.expenseForm.valid) {
      const formValue = this.expenseForm.value;
      formValue.activeStatus = formValue.activeStatus ? 1 : 0;
      this._expenseService.addExpense(formValue).subscribe({
        next: (res) => {
          if (res.success) {
            alert(res.message);
            this.GetExpenseList();
          }
          else {
            alert(res.message);
          }
        },
        error: (err) => {
          console.log("add expense error", err);
          alert("Something went wrong.");
        }
      });
    }

  }



  // listing
  openEditDialog(expense: IExpenseHead) {
    const dialogRef = this.dialog.open(this.editDialog, {
      width: '400px',
      data: { ...expense }
    });
    debugger;
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        debugger;
        // Handle the result from the dialog (e.g., save changes)
        console.log('Dialog result:', result);
        result.activeStatus = result.activeStatus ? 1 : 0;
        this._expenseService.updateExpense(result).subscribe({
          next: (res) => {
            if (res.success) {
              alert(res.message);
              this.GetExpenseList(); // Refresh the list
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

  /** Checkbox Selection Logic */
  toggleSelection(row: IExpenseHead) {
    if (this.expenseList.includes(row)) {
      this.expenseList = this.expenseList.filter(r => r !== row);
    } else {
      this.expenseList.push(row);
    }
  }

  isAllSelected() {
    return this.expenseList.length === this.dataSource.data.length;
  }

  isPartialSelected() {
    return this.expenseList.length > 0 && !this.isAllSelected();
  }

  masterToggle() {
    if (this.isAllSelected()) {
      this.expenseList = [];
    } else {
      this.expenseList = [...this.dataSource.data];
    }
  }

  DeleteExpense(expense: IExpenseHead) {
    debugger;
    const id = expense.id;
    if (id > 0) {
      this._expenseService.deleteExpense(id).subscribe({
        next: (res) => {
          if (res.success) {
            alert(res.message);

            this.GetExpenseList();
          }
        }
      });
    }

  }

}
