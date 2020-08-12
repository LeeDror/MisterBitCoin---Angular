import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contact } from 'src/app/models/contact.model';
import { Move } from 'src/app/models/move.model';

import { ContactService } from 'src/app/services/contact.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {

  constructor(private ContactService: ContactService,
    private activatedRoute: ActivatedRoute,
    private UserService: UserService) { }

  contact: Contact = null;
  moves: Move[] = null;

  loadContact() {
    const id = this.activatedRoute.snapshot.params.id;
    this.ContactService.getContactById(id)
      .subscribe(contact => this.contact = contact);
  }
  
  loadMoves() {
    this.UserService.getUser()
      .subscribe(user => {
        this.moves = user.moves.filter(move => this.contact._id === move.toId)
      })
  }

  transfer(amount) {
    this.UserService.addMove(this.contact, amount);
  }

  ngOnInit(): void {
    this.loadContact();
    this.loadMoves();
  }

}
