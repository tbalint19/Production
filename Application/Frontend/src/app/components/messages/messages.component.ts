import { Component, Input } from "@angular/core";
import { Router } from '@angular/router';
import { Message } from '../../_models/_index';

@Component({
    moduleId: module.id,
    templateUrl: 'messages.component.html',
    styleUrls: ['messages.component.css'],
    selector: 'messages'
})
export class MessagesComponent{

    @Input() messages: Message[];

    constructor(private router: Router){
    }

    getRelevant(){
        return this.messages.filter((entry: Message) => entry.isRelevant);
    }

}
