import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../_services/_index';
import { LoginUser, TokenResponse } from '../../_models/_index';

@Component({
    moduleId: module.id,
    templateUrl: 'navbar.component.html',
    styleUrls: ['navbar.component.css'],
    selector: 'navbar'
})
export class NavBarComponent {

    public user: LoginUser = new LoginUser();

    constructor(private router: Router, private userService: UserService) {
    }

    logout(){

    }

    shouldShowLogout(){

    }

    getHome(){
        this.router.navigate(['']);
    }

    requestLogin(){
        this.userService.loginUser(this.user).subscribe(
            (response: TokenResponse) => console.log(response)
        )
    }

    shouldShowLogin(){
        return !(localStorage.getItem('user'));
    }

}
