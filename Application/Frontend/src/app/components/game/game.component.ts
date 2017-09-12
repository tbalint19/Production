import { Component } from "@angular/core";
import { Router } from '@angular/router';
import { Message } from '../../_models/_index';
import { UserService, MessageService } from '../../_services/_index';

@Component({
    moduleId: module.id,
    templateUrl: 'game.component.html',
    styleUrls: ['game.component.css'],
})
export class GameComponent{

    constructor(private router: Router, private userService: UserService, private messages: MessageService){
    }

}
