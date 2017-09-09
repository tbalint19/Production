import { Component } from "@angular/core";
import { Router } from '@angular/router';
import { Message } from '../../_models/_index';

@Component({
    moduleId: module.id,
    templateUrl: 'demo.component.html',
    styleUrls: ['demo.component.css'],
})
export class DemoComponent{

    public messages: Message[] = [];

    constructor(private router: Router){
    }

}
