import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements OnInit {

  constructor(private UserService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  name: string = null;

  signup() {
    this.UserService.signup(this.name);
    this.router.navigate(['/']);
  }

  ngOnInit(): void {
  }

}
