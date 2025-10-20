import { Component } from '@angular/core';
import { MatCard, MatCardTitle, MatCardHeader, MatCardContent } from "@angular/material/card";
import { MatTabGroup, MatTab } from "@angular/material/tabs";
import { FeeGroupComponent } from "../fee-group/fee-group.component";
import { FeeHeadComponent } from "../fee-head/fee-head.component";
import { FeeInstallmentComponent } from "../fee-installment/fee-installment.component";
import { AllocateFeeComponent } from "../allocate-fee/allocate-fee.component";

@Component({
  selector: 'app-fee-master',
  imports: [
    MatCard, MatCardTitle, MatCardHeader, MatTabGroup,
     MatCardContent, MatTab, 
     FeeGroupComponent, FeeHeadComponent, 
     FeeInstallmentComponent, AllocateFeeComponent
    ],
  templateUrl: './fee-master.component.html',
  styleUrl: './fee-master.component.scss'
})
export class FeeMasterComponent {

}
