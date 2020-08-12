import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

  constructor(
    private ContactService: ContactService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  contacts : Contact[] = [];

  ngOnInit(): void {
    this.ContactService.loadContacts();
    this.getContacts();
  }

  getContacts() {
    this.ContactService.contacts$
      .subscribe(contacts => this.contacts = contacts)
  }

  setFilterBy(filterBy) {
    this.ContactService.loadContacts(filterBy);
    this.getContacts();
  }
}
