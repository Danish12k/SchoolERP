import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { PageHeaderComponent } from '@shared';
import { FeeGroupComponent } from '../fee-group/fee-group.component';
import { FeeHeadComponent } from '../fee-head/fee-head.component';
import { FeeInstallmentComponent } from '../fee-installment/fee-installment.component';
import { AllocateFeeComponent } from '../allocate-fee/allocate-fee.component';

type FeeMasterTab = 'feeGroup' | 'feeHead' | 'feeInstallment' | 'allocateFee';

@Component({
  selector: 'app-fee-master',
  host: { class: 'admin-page-host' },
  imports: [
    PageHeaderComponent,
    MatCardModule,
    FeeGroupComponent,
    FeeHeadComponent,
    FeeInstallmentComponent,
    AllocateFeeComponent,
  ],
  templateUrl: './fee-master.component.html',
  styleUrl: './fee-master.component.scss',
})
export class FeeMasterComponent {
  selectedTab: FeeMasterTab = 'feeGroup';

  readonly tabs: { key: FeeMasterTab; label: string }[] = [
    { key: 'feeGroup', label: 'Fee Group' },
    { key: 'feeHead', label: 'Fee Head' },
    { key: 'feeInstallment', label: 'Fee Installment' },
    { key: 'allocateFee', label: 'Allocate Fee to Class' },
  ];
}
