import { Component } from "@angular/core";
import { Router } from '@angular/router';
import { Message } from '../../_models/_index';
import { UserService, MessageService } from '../../_services/_index';

@Component({
    moduleId: module.id,
    templateUrl: 'results.component.html',
    styleUrls: ['results.component.css'],
})
export class ResultsComponent{

    constructor(private router: Router, private userService: UserService, private messages: MessageService){
    }

}
