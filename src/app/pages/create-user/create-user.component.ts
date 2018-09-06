import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  userForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.userForm = new FormGroup({
      'firstName': new FormControl(null, [Validators.required, Validators.pattern('[A-Z][a-z]*'), Validators.minLength(2)]),
      'lastName': new FormControl(null, [Validators.required, Validators.pattern( '[A-Z][a-z]*'), Validators.minLength(2)]),
      'email': new FormControl(null , [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(7), Validators.pattern('[A-Z][a-z]*[0-9]{2}')])
    });
    this.userForm.statusChanges.subscribe((status) => {
      console.log(status);
    });
    this.userForm.valueChanges.subscribe((value) => {
      console.log(value);
    });
  }

  onCreate = () => {
    console.log(this.userForm);
    //this.userForm.reset();
  }

}
