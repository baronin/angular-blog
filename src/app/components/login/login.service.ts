import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserModule} from '../../user/user.module';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) {

  }

  validateLogin(user: UserModule) {
    return this.http.post('/api/user/login', {
      username: user.username,
      password: user.password
    });
  }

}
