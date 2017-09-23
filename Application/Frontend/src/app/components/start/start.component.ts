import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Message, FullUser, User, Account, Profile } from '../../_models/_index';
import { UserService, MessageService } from '../../_services/_index';

@Component({
    moduleId: module.id,
    templateUrl: 'start.component.html',
    styleUrls: ['start.component.css'],
})
export class StartComponent implements OnInit {

    public confirmationCode: string;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private userService: UserService,
        private messages: MessageService){
    }

    ngOnInit() {
        this.route.queryParams.subscribe((params: Params) => {
            if (params['code']) {
                this.confirmationCode = params['code'];
            }
            this.userService.getUser().subscribe(
                (user: FullUser) => {
                    localStorage.setItem('full-user', JSON.stringify(user));
                    if (this.confirmationCode) {
                        this.router.navigate([""], { queryParams: { code: this.confirmationCode } });
                    } else {
                        this.router.navigate([""]);
                    }
                }
            )
        })
    }

}
