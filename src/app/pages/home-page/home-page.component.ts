import { Component, OnInit } from '@angular/core';

import { UserService } from 'src/app/services/user.service';
import { BitcoinService } from 'src/app/services/bitcoin.service';
import { ActivatedRoute, Router } from '@angular/router';

import { User } from '../../models/user.model';
import { Move } from 'src/app/models/move.model';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private UserService: UserService,
    private BitcoinService: BitcoinService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  user: User = null;
  rate: number | object = null;
  moves: Move[] = null;

  getRate() {
    this.BitcoinService.getRate(this.user.coins)
      .subscribe(rate => this.rate = rate);
  }

  getUser() {
    this.UserService.getUser()
      .subscribe(user => {
        this.user = user
      });
  }

  loadMoves() {
    this.moves = this.user.moves.slice(0, 3)
  }

  ngOnInit(): void {
    this.getUser();
    if (!this.user) this.router.navigate(['/signup']);
    this.getRate();
    this.loadMoves();
  }
}
