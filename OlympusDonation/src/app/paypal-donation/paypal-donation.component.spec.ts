import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaypalDonationComponent } from './paypal-donation.component';

describe('PaypalDonationComponent', () => {
  let component: PaypalDonationComponent;
  let fixture: ComponentFixture<PaypalDonationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaypalDonationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaypalDonationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
