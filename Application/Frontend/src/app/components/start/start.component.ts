import { Component } from "@angular/core";
import { Router } from '@angular/router';
import { Message, FullUser, User, Account, Profile } from '../../_models/_index';
import { UserService, MessageService } from '../../_services/_index';

@Component({
    moduleId: module.id,
    templateUrl: 'start.component.html',
    styleUrls: ['start.component.css'],
})
export class StartComponent{

    constructor(private router: Router, private userService: UserService, private messages: MessageService){
        this.userService.getUser().subscribe(
            (user: FullUser) => {
                localStorage.setItem('full-user', JSON.stringify(user));
                this.router.navigate(['/']);
            }
        )
    }

}
