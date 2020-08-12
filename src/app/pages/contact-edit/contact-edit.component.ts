import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss']
})
export class ContactEditComponent implements OnInit {

  constructor(
    private ContactService: ContactService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  contactToEdit: Contact = null;

  saveContact(ev) {
    ev.preventDefault();
    this.ContactService.saveContact(this.contactToEdit);
    this.router.navigate(['/contact']);
    this.contactToEdit = new Contact;
  }

  close() {
    this.router.navigate(['/contact']);
  }

  loadContact(id) {
    this.ContactService.getContactById(id)
      .subscribe(contact => this.contactToEdit = { ...contact });
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      console.log('params.id', params.id)
      if (params.id) this.loadContact(params.id)
      else {
        console.log('else')  
        this.contactToEdit = new Contact;
      }
    });
  }
}
