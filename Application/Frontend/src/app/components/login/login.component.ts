import { Component } from "@angular/core";
import { Router } from '@angular/router';
import { UserService, MessageService } from '../../_services/_index'
import { LoginUser, TokenResponse, LoginStatus, Message } from '../../_models/_index';

@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css'],
    selector: 'login'
})
export class LoginComponent{

    public user: LoginUser;
    public status: LoginStatus;

    constructor(private router: Router, private userService: UserService, private messages: MessageService){
        this.user = new LoginUser();
        this.status = new LoginStatus();
    }

    disabledLogin(){
        return !this.user.dataIsValid() || this.status.pendingLogin;
    }

    requestLogin(){
        this.status.pendingLogin = true;
        this.userService.loginUser(this.user).subscribe(
            (response: TokenResponse) => this.handleLoginResponse(response.token)
        )
    }

    handleLoginResponse(token: string){
        this.status.pendingLogin = false;
        if (token){
            this.handleLoginSuccess(token);
        } else {
            this.handleLoginError();
        }
    }

    handleLoginSuccess(token: string){
        localStorage.setItem('auth-token', token);
        localStorage.removeItem('full-user');
        this.messages.add(new Message('success', 'Successful login', 'Welcome'))
        this.user = new LoginUser();
        this.status = new LoginStatus();
        this.router.navigate(['/']);
    }

    handleLoginError(){
        this.messages.add(new Message('error', 'Invalid credentials', 'Try again'))
    }

}
