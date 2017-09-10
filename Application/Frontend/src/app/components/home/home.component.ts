import { Component } from "@angular/core";
import { Router } from '@angular/router';
import { Message } from '../../_models/_index';

@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css'],
})
export class HomeComponent{

    public messages: Message[] = [];

    constructor(private router: Router){
    }

}
