import { Component } from "@angular/core";
import { Router } from '@angular/router';
import { UserService } from '../../_services/_index'
import { SignupUser, DefaultResponse, CheckResponse, SignupStatus } from '../../_models/_index';

@Component({
    moduleId: module.id,
    templateUrl: 'signup.component.html',
    styleUrls: ['signup.component.css'],
})
export class SignupComponent{

    public user: SignupUser = new SignupUser();
    public status: SignupStatus = new SignupStatus();

    constructor(private router: Router, private userService: UserService){
    }

    requestSignup(){
        this.userService.signupUser(this.user).subscribe(
            (response: DefaultResponse) => console.log(response)
        )
    }

    disabledSignup(){
        return !this.status.noCheckActive() || !this.user.dataIsValid();
    }

}
