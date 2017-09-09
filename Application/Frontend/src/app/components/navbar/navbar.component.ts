import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUser } from '../../_models/_index';

@Component({
    moduleId: module.id,
    templateUrl: 'navbar.component.html',
    styleUrls: ['navbar.component.css'],
    selector: 'navbar'
})
export class NavBarComponent {

    public loginUser: LoginUser = new LoginUser();

    constructor(private router: Router) {
    }

    logout(){

    }

    shouldShowLogout(){

    }

    getHome(){
        this.router.navigate(['']);
    }

    shouldShowLogin(){
        return this.router.url !== '/login';
    }

}
