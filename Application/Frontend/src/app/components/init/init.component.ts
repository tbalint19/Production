import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Message, FullUser, User, Account, Profile } from '../../_models/_index';
import { UserService, MessageService } from '../../_services/_index';

@Component({
    moduleId: module.id,
    templateUrl: 'init.component.html',
    styleUrls: ['init.component.css'],
})
export class InitComponent implements OnInit {

    public confirmationCode: string;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private userService: UserService,
        private messages: MessageService){
    }

    ngOnInit() {
        this.userService.getUser().subscribe(
            (user: FullUser) => {
                localStorage.setItem('full-user', JSON.stringify(user));
                this.router.navigate([""]);
            }
        )
    }

}
