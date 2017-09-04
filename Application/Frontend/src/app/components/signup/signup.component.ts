import { Component } from "@angular/core";
import { Router } from '@angular/router';
import { UserService } from '../../_services/_index'
import { SignupUser, DefaultResponse, CheckResponse } from '../../_models/_index';

@Component({
    moduleId: module.id,
    templateUrl: 'signup.component.html',
    styleUrls: ['signup.component.css'],
})
export class SignupComponent{

    public user: SignupUser = new SignupUser();
    public isCheckingUsername: boolean = false;
    public isCheckingEmail: boolean = false;
    public isCheckingInviter: boolean = false;

    constructor(private router: Router, private userService: UserService){
    }

    checkUsername(){
        this.userService.checkUsername(this.user).subscribe(
            (response: CheckResponse) => console.log(response)
        )
    }

    checkEmail(){
        this.userService.checkEmail(this.user).subscribe(
            (response: CheckResponse) => console.log(response)
        )
    }

    requestSignup(){
        this.userService.signupUser(this.user).subscribe(
            (response: DefaultResponse) => console.log(response)
        )
    }

    disabledSignup(){
        let validData = this.user.dataIsValid();
        let isChecking = this.isCheckingUsername || this.isCheckingEmail || this.isCheckingInviter;
        return !validData || isChecking;
    }

}
