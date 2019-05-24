import { Injectable, ModuleWithComponentFactories } from '@angular/core';
import * as moment from 'moment'
@Injectable({
  providedIn: 'root'
})
export class PaymentsService {
  payments = 
    [
      {
      "id": "Invoice XNj1LmZrgKQCAH3r1ZETqm",
      "amount": "$100.00 USD",
      "status": "PAID",
      "date": "Today, 2:59pm"
      //      "date": moment().hours(14).minutes(59)
      },
      {
      "id": "Invoice CjcYi9jt61GoA6TVcPCPyC",
      "amount": "$125.00 USD",
      "status": "PAID",
      "date": "Today, 11:27am"
      //"date": moment().hours(11).minutes(27)
      },
      {
      "id": "Invoice CU5dxRSnB7upXfrNYL1KyU",
      "amount": "$39.75 USD",
      "status": "PAID",
      "date": "Today, 9:35am"
      //"date": moment().hours(9).minutes(35)
      },
      {
      "id": "Invoice BKJG3cvg5MNkASYefd4e2S",
      "amount": "$5.00 USD",
      "status": "PENDING",
      "date": "Today, 8:12am"
      },
      {
      "id": "Invoice ELwdU1u8YjF2Jp1xRzACsD",
      "amount": "$24.00 USD",
      "status": "PAID",
      "date": "Feb 18, 1:49pm"
      },
      {
      "id": "Invoice 6pLV3MJszS4HUAAGkkNdB1",
      "amount": "$48.00 USD",
      "status": "PAID",
      "date": "Feb 18, 11:24am"
      },
      {
      "id": "Invoice 9rvQV9vjj8nh5GYhzbRQ9M",
      "amount": "$128.80 USD",
      "status": "PAID",
      "date": "Feb 16, 8:46pm"
      },
      {
      "id": "Invoice SyYCLjdoUvSn698uK2VGR7",
      "amount": "$2250.00 USD",
      "status": "REFUNDED",
      "date": "Feb 16, 8:12pm"
      },
      {
      "id": "Invoice LbohU1zwAyicFJ39JogwQu",
      "amount": "$11000.00 USD",
      "status": "PAID",
      "date": "Feb 8, 1:02pm"
      },
      {
      "id": "Invoice KEmFdwhCGvWM2tc874xzH3",
      "amount": "$10.00 USD",
      "status": "PAID",
      "date": "Feb 8, 12:59pm"
      }
    ]
  
  constructor() { }

  public getPayments(): Array<{id:String, amount:String, status:String, date:String}> {
    return this.payments;
  }

  randomDate(start:Date, end:Date): Date {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }

}
