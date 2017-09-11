import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    templateUrl: 'navbar.component.html',
    styleUrls: ['navbar.component.css'],
    selector: 'navbar'
})
export class NavBarComponent {

    constructor(private router: Router) {
    }

    logout(){
        localStorage.removeItem('auth-token');
        this.router.navigate(['/signup']);
    }

    getHome(){
        this.router.navigate(['']);
    }

    shouldShowLogin(){
        return !(localStorage.getItem('auth-token'));
    }

    shouldShowMenu(){
        return !this.shouldShowLogin();
    }

}
