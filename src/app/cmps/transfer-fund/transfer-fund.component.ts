import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from '../../models/contact.model';

@Component({
  selector: 'transfer-fund',
  templateUrl: './transfer-fund.component.html',
  styleUrls: ['./transfer-fund.component.scss']
})
export class TransferFundComponent implements OnInit {

  constructor() { }

  @Input() contact: Contact;
  @Input() maxCoins: number;
  @Output() trans = new EventEmitter();

  amount: number = null;
  showErr: { show: boolean, txt: string } = { show: false, txt: "You do not have enough coins" }

  doTransfer() {
    if (this.amount > this.maxCoins) {
      this.showErr.show = true;
      return;
    }
    this.trans.emit(this.amount);
    this.amount = null;
  }
  ngOnInit(): void {
  }

}
