import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserService, MessageService } from '../../_services/_index';
import { LoginUser, TokenResponse, Message, LoginStatus } from '../../_models/_index';

@Component({
    moduleId: module.id,
    templateUrl: 'navbar.component.html',
    styleUrls: ['navbar.component.css'],
    selector: 'navbar'
})
export class NavBarComponent {

    public user: LoginUser;
    public status: LoginStatus;

    constructor(private router: Router, private userService: UserService, private messages: MessageService) {
        this.user = new LoginUser();
        this.status = new LoginStatus();
    }

    logout(){
        localStorage.removeItem('auth-token');
        this.router.navigate(['/signup']);
    }

    getHome(){
        this.router.navigate(['']);
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
        this.messages.add(new Message('success', 'Successful login', 'Welcome'))
        this.user = new LoginUser();
        this.status = new LoginStatus();
        if (this.router.url == '/signup') { this.router.navigate(['/']) };
    }

    handleLoginError(){
        this.messages.add(new Message('error', 'Invalid credentials', 'Try again'))
    }

    shouldShowLogin(){
        return !(localStorage.getItem('auth-token'));
    }

    shouldShowMenu(){
        return !this.shouldShowLogin();
    }

}
