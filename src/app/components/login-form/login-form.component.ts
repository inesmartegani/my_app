import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/class/user';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  user: User = new User();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(value:any){
    console.log('onSubmit()'); 
    console.dir(value);
  }
}

