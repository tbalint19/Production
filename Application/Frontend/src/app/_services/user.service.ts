import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '../_httpclient/httpclient';
import { SignupUser, LoginUser, DefaultResponse, TokenResponse, CheckResponse, ConfirmRequest } from '../_models/_index';

@Injectable()
export class UserService {

    constructor(private client: HttpClient, private router: Router) {
    }

    public checkUsername(username: string): Observable<CheckResponse> {
        return this.client.get('/api/profile/checkusername?username=' + username);
    }

    public checkEmail(email: string): Observable<CheckResponse> {
        return this.client.get('/api/profile/checkemail?email=' + email);
    }

    public checkInviter(inviter: string): Observable<CheckResponse> {
        return this.client.get('/api/profile/checkinviter?inviter=' + inviter);
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
