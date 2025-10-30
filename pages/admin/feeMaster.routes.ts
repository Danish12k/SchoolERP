import { Routes } from "@angular/router";
import { FeeGroupComponent } from "./fee-group/fee-group.component";
import { FeeHeadComponent } from "./fee-head/fee-head.component";
import { FeeInstallmentComponent } from "./fee-installment/fee-installment.component";
import { AllocateFeeComponent } from "./allocate-fee/allocate-fee.component";

export const routes: Routes = [
    { path: 'feeGroup', component: FeeGroupComponent },
    { path: 'feeHead', component: FeeHeadComponent },
    { path: 'feeInstallment', component: FeeInstallmentComponent },
    { path: 'allocateFee', component: AllocateFeeComponent },
]