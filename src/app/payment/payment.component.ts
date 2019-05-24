import { Component, OnInit } from '@angular/core';
import {PaymentsService} from '../payments.service';

enum Tab {
  All = "All",
  Paid = "Paid",
  Refunded = "Refunded"
}

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})

export class PaymentComponent implements OnInit {
  payments;
  tabPayments;
  activeTab:Tab;

  constructor(public paymentsService: PaymentsService) { }

  ngOnInit() {
    this.payments = this.paymentsService.getPayments();
    this.tabPayments = Object.assign([], this.payments);
  }


  onTabSelect(x:Tab) {
    this.activeTab = x;
    //console.log("active tab is" + x);
    if(x === Tab.All) {
      this.tabPayments = this.payments;
    } else if (x === Tab.Paid) {
      this.tabPayments = this.payments
      this.tabPayments = this.payments.filter(each => each.status === "PAID");
    } else if (x === Tab.Refunded) {
      this.tabPayments = this.payments
      this.tabPayments = this.payments.filter(each => each.status === "REFUNDED");
    }

    
  }

}
