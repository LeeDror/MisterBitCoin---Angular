import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'contact-filter',
  templateUrl: './contact-filter.component.html',
  styleUrls: ['./contact-filter.component.scss']
})
export class ContactFilterComponent implements OnInit {

  constructor() { }

  @Output() filtered = new EventEmitter();

  filterBy = {term: ''};

  submit(ev) {ev.preventDefault()}

  setFilter() {
    this.filtered.emit({...this.filterBy})
  }
  ngOnInit(): void {
  }
}
