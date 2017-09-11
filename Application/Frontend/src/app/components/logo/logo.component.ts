import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    templateUrl: 'logo.component.html',
    styleUrls: ['logo.component.css'],
    selector: 'logo'
})
export class LogoComponent {

    constructor(private router: Router) {
    }

    getHome(){
        this.router.navigate(['']);
    }

}
