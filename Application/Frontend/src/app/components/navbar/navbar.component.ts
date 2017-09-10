import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../_services/_index';
import { LoginUser, TokenResponse, Message, LoginStatus } from '../../_models/_index';

@Component({
    moduleId: module.id,
    templateUrl: 'navbar.component.html',
    styleUrls: ['navbar.component.css'],
    selector: 'navbar'
})
export class NavBarComponent {

    public user: LoginUser = new LoginUser();
    public status: LoginStatus = new LoginStatus();
    @Input() messages: Message[];

    constructor(private router: Router, private userService: UserService) {
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
            (response: TokenResponse) => {
                this.status.pendingLogin = false;
                if (response.token){
                    localStorage.setItem('auth-token', response.token);
                    this.user.reset();
                    this.status.reset();
                    this.router.navigate(['/']);
                } else {
                    this.messages.push(new Message(
                        'error',
                        'Invalid credentials',
                        'Try again'
                    ))
                }
            }
        )
    }

    shouldShowLogin(){
        return !(localStorage.getItem('auth-token'));
    }

    shouldShowMenu(){
        return !this.shouldShowLogin();
    }

}
