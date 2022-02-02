import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/class/user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
user = new User('pepe@mail', 'qwerty')
// y agregar User al import de arriba

  constructor(
  ) { }

  ngOnInit(): void {
  }

  enviar(user: User) {
    console.log(user);
  }

}
