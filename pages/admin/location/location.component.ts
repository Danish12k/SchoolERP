import { Component } from '@angular/core';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { MatTab, MatTabGroup } from '@angular/material/tabs';
import { CountryComponent } from '../country/country.component';
import { StatemasterComponent } from '../statemaster/statemaster.component';
import { DistrictComponent } from '../district/district.component';

@Component({
  selector: 'app-location',
  imports: [MatCard, MatCardTitle, MatCardHeader, MatTabGroup,
     MatCardContent, MatTab, CountryComponent,StatemasterComponent,DistrictComponent
     ],
  templateUrl: './location.component.html',
  styleUrl: './location.component.scss'
})
export class LocationComponent {

}
