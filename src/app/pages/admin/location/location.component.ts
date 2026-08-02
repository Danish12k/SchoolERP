import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { PageHeaderComponent } from '@shared';
import { CountryComponent } from '../country/country.component';
import { StatemasterComponent } from '../statemaster/statemaster.component';
import { DistrictComponent } from '../district/district.component';

type LocationTab = 'country' | 'state' | 'district';

@Component({
  selector: 'app-location',
  host: { class: 'admin-page-host' },
  imports: [
    PageHeaderComponent,
    MatCardModule,
    CountryComponent,
    StatemasterComponent,
    DistrictComponent,
  ],
  templateUrl: './location.component.html',
  styleUrl: './location.component.scss',
})
export class LocationComponent {
  selectedTab: LocationTab = 'country';

  readonly tabs: { key: LocationTab; label: string }[] = [
    { key: 'country', label: 'Country' },
    { key: 'state', label: 'State' },
    { key: 'district', label: 'District' },
  ];
}
