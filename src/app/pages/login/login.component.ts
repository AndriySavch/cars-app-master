import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  onSubmit = (form: NgForm) => {
    console.log(form.value);
    const userCred = {
      email: form.value.email,
      password: form.value.password
    }
    if (form.valid) {
      this.userService.logIn(userCred).subscribe(
        (resp) => {
          localStorage.setItem('token', resp.data.authToken);
          this.router.navigate(['']);
          console.log(resp);
        },
        (err) => {
          console.log('SOME ERROR!!!');
          console.log(err);
        }
      );
    }
  }
}
