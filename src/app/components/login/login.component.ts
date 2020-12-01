import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import {UserModule} from '../../user/user.module';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ LoginService ]
})
export class LoginComponent implements OnInit {

  public user: UserModule;

  constructor(private loginService: LoginService) {
    this.user = new UserModule();
  }

  ngOnInit(): void {
  }

  validateLogin(): void {
    if (this.user.username && this.user.password) {
      this.loginService.validateLogin(this.user).subscribe(result => {
        console.log('result is ', result);
      }, error => {
        console.log('error is ', error);
      });
    } else {
      alert('enter user name and password');
    }
  }
}
