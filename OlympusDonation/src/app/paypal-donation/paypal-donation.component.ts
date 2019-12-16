import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

declare var paypal;

@Component({
  selector: 'app-paypal-donation',
  templateUrl: './paypal-donation.component.html',
  styleUrls: ['./paypal-donation.component.scss']
})
export class PaypalDonationComponent implements OnInit {

  @ViewChild('paypal', { static: true }) paypalElement: ElementRef;

  paid = false;
  product = {
    price: 77,
    desc: 'test',
  };

  ngOnInit() {
    paypal.Buttons({
      createOrder: (data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              description: this.product.desc,
              amount: {
                currency_code: 'EUR',
                value: this.product.price
              }
            }
          ]
        })
      },
      onApprove: async (data, actions) => {
        const order = await actions.order.capture();
        console.log(order);
      },
      onError: err => {
        console.log(err);
      }
    }).render(this.paypalElement.nativeElement);
  }

}
