import { Component } from "@angular/core";
import { Router } from '@angular/router';
import { UserService } from '../../_services/_index'
import { SignupUser, DefaultResponse, CheckResponse, SignupStatus, Message } from '../../_models/_index';

@Component({
    moduleId: module.id,
    templateUrl: 'signup.component.html',
    styleUrls: ['signup.component.css'],
})
export class SignupComponent{

    public user: SignupUser;
    public status: SignupStatus;

    constructor(
        private router: Router,
        private userService: UserService){
        this.user = new SignupUser();
        this.status = new SignupStatus();
    }

}
