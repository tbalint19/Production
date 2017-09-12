import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    templateUrl: 'navbar-menu.component.html',
    styleUrls: ['navbar-menu.component.css'],
    selector: 'navbar-menu'
})
export class NavbarMenuComponent{

    constructor(private router: Router){
    }

    getResults(){
        this.router.navigate(['/results']);
    }

    getCommunity(){
        this.router.navigate(['/community']);
    }

    getProfile(){
        this.router.navigate(['/profile']);
    }

    getAccount(){
        this.router.navigate(['/account']);
    }

    getInfo(){
        this.router.navigate(['/about']);
    }

    logout(){
        localStorage.removeItem('auth-token');
        this.router.navigate(['/signup']);
    }

}
