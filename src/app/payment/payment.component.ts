import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, group } from '@angular/animations';

import {PaymentsService} from '../payments.service';

enum Tab {
  All = "All",
  Paid = "Paid",
  Refunded = "Refunded"
}

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
  animations: [
    // DEFAULT STATES
    trigger('enterLeave', [
      // :ENTER TRANSITION
      // Transition Styles
      transition('void => *', [
        // 'From' styles
        style({
          opacity: 0.2,
          transform: 'translateX(-100vw)'
        }),
        animate('1000ms ease-in',
          // 'To' styles
          // 1 - Comment this to remove the item's grow...
          style({
            opacity: 1,
            transform: 'scale(1.2)'
          })
        )
      ])
    ])
  ]
})

export class PaymentComponent implements OnInit {
  payments:Array<Payment>;
  tabPayments:Array<Payment>;
  activeTab:Tab;

  constructor(public paymentsService: PaymentsService) { }

  ngOnInit() {
    this.payments = this.paymentsService.getPayments();
    this.tabPayments = Object.assign([], this.payments);
  }


  onTabSelect(x:string) {

    this.activeTab = Tab[x];
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
interface Payment {
  id: string;
  amount: string;
  status: string;
  date: string;
}
