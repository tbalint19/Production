import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '../_httpclient/httpclient';
import { SignupUser, LoginUser, DefaultResponse, TokenResponse, CheckResponse, ConfirmRequest } from '../_models/_index';

@Injectable()
export class UserService {

    constructor(private client: HttpClient, private router: Router) {
    }

    public checkUsername(user: SignupUser): Observable<CheckResponse> {
        return this.client.get('/api/profile/checkusername?username=' + user.username);
    }

    public checkEmail(user: SignupUser): Observable<CheckResponse> {
        return this.client.get('/api/profile/checkemail?email=' + user.email);
    }

    public signupUser(user: SignupUser): Observable<DefaultResponse> {
        return this.client.post('/api/profile/signup', user);
    }

    public loginUser(user: LoginUser): Observable<TokenResponse> {
        return this.client.post('/api/profile/login', user);
    }

    public confirmUser(request: ConfirmRequest): Observable<DefaultResponse> {
        return this.client.post('/api/profile/confirm', request);
    }

}
