import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MaterialModule } from '../../../../../schematics/ng-add/files/module-files/app/material.module';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { TranslateModule } from '@ngx-translate/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ICountry } from '../../../interfaces/ILocation';
import { LocationService } from '../../../services/location.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-country',
  imports: [MatCard,
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
    ReactiveFormsModule,],
  templateUrl: './country.component.html',
  styleUrl: './country.component.scss'
})
export class CountryComponent implements OnInit {
  constructor(private fb: FormBuilder, private dialog: MatDialog) { }
  countryGroupForm!: FormGroup;
  dataSource = new MatTableDataSource<ICountry>([]);
   @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  displayedColumns: string[] = ['Country', 'actions'];

  private _locationService = inject(LocationService);
 countyList: ICountry[] = [];

  ngOnInit(): void {
    this.countryGroupForm = this.fb.group({
      id: [0],
      countryName: [null, [Validators.required, Validators.minLength(2)]]
    });

    this.countryList();
  }

  countryList(){
    debugger;
    this._locationService.listCountry().subscribe({
      next: (res) => {
        if (Array.isArray(res.data)) {
              debugger;
        //   const data: ICountry[] = Array.isArray(res.data)
        // ? res.data
        // : [res.data as ICountry];
        //   this.dataSource.data = data;
          this.dataSource.data = (Array.isArray(res.data) ? res.data : [res.data]) as ICountry[];
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
      }
    }); 
  }

  addCountry() {
    if (this.countryGroupForm.valid) {
      console.log(this.countryGroupForm.value);
    }
  }
  
applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
