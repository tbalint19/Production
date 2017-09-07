import { Component, Input } from "@angular/core";
import { Router } from '@angular/router';
import { UserService } from '../../_services/_index'
import { SignupUser, SignupStatus, CheckResponse } from '../../_models/_index';

@Component({
    moduleId: module.id,
    templateUrl: 'signup-inviter-input.component.html',
    styleUrls: ['signup-inviter-input.component.css'],
    selector: 'signup-inviter-input'
})
export class SignupInviterInputComponent{

    @Input() user: SignupUser;
    @Input() status: SignupStatus;

    constructor(private router: Router, private userService: UserService){
    }

    checkInviter(){
        if (this.user.inviterIsValid()) {
            let observed = this.user.inviter;
            this.status.inviterIsFound = false;
            this.status.inviterIsChecked = true;
            this.userService.checkInviter(observed).subscribe(
              (response: CheckResponse) => {
                if (observed == this.user.inviter) {
                  this.status.inviterIsFound = response.is_occupied;
                  this.status.inviterIsChecked = false;
                }
              }
            )
        } else { this.status.inviterIsChecked = false; }
    }

    shouldShowInfo(){
        return !this.user.inviter || this.user.inviter && !this.user.inviterIsValid();
    }

    shouldShowLoading(){
        return this.status.inviterIsChecked;
    }

    shouldShowError(){
        return !this.status.inviterIsFound && !this.status.inviterIsChecked  && this.user.inviterIsValid();
    }

    shouldShowSuccess(){
        return this.status.inviterIsFound && this.user.inviterIsValid();
    }
}
