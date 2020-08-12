import { Injectable } from '@angular/core';
import { of, never } from 'rxjs';
import { utils } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUser() {
    var user = utils.loadFromStorage('user');
    return of(user);
  }

  signup(name) {
    var user = { name: name, coins: 100, moves: []}
    utils.storeToStorage('user', user);
  }

  addMove(contact, amount) {
    const move = {at: Date.now(), toId: contact._id ,to: contact.name, amount: amount};
    const user = utils.loadFromStorage('user');
    user.moves.unshift(move);
    user.coins -=amount;
    utils.storeToStorage('user', user);
  }
}
