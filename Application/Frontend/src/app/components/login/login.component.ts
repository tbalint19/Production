import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService, MessageService } from '../../_services/_index'
import { LoginUser, TokenResponse, LoginStatus, Message } from '../../_models/_index';

@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css'],
    selector: 'login'
})
export class LoginComponent implements OnInit {

    public user: LoginUser;
    public status: LoginStatus;
    public confirmationCode: string;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private userService: UserService,
        private messages: MessageService){
        this.user = new LoginUser();
        this.status = new LoginStatus();
    }

    ngOnInit(){
        this.route.queryParams.subscribe((params: Params) => {
            this.confirmationCode = params['code'];
        })
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
        if (this.confirmationCode) {
            this.router.navigate([""], { queryParams: { code: this.confirmationCode } });
        } else {
            this.router.navigate([""]);
        }
    }

    handleLoginError(){
        this.messages.add(new Message('error', 'Invalid credentials', 'Try again'))
    }

}
