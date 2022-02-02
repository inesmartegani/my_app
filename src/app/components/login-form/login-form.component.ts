import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/class/user';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  @Input() user: User = new User();
// y agregar Input al import de arriba!

  @Output() enviar = new EventEmitter<User>();
// y agregar EventEmitter al import de arriba

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.enviar.emit(this.user);
  }

}

