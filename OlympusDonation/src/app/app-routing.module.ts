import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaypalDonationComponent } from './paypal-donation/paypal-donation.component';


const routes: Routes = [
    {
      path: '',
      component: PaypalDonationComponent,
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
