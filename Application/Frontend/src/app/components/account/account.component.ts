import { Component } from "@angular/core";
import { Router } from '@angular/router';
import { Message } from '../../_models/_index';
import { UserService, MessageService } from '../../_services/_index';

@Component({
    moduleId: module.id,
    templateUrl: 'account.component.html',
    styleUrls: ['account.component.css'],
})
export class AccountComponent{

    constructor(private router: Router, private userService: UserService, private messages: MessageService){
    }

}
