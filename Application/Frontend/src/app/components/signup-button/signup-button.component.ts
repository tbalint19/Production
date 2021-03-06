import { Component, Input } from "@angular/core";
import { Router } from '@angular/router';
import { UserService, MessageService } from '../../_services/_index'
import { SignupUser, DefaultResponse, SignupStatus, Message } from '../../_models/_index';

@Component({
    moduleId: module.id,
    templateUrl: 'signup-button.component.html',
    styleUrls: ['signup-button.component.css'],
    selector: 'signup-button'
})
export class SignupButtonComponent{

    @Input() user: SignupUser;
    @Input() status: SignupStatus;

    constructor(private router: Router, private userService: UserService, private messages: MessageService){
    }

    requestSignup(){
        this.status.pendingSignup = true;
        this.userService.signupUser(this.user).subscribe(
            (response: DefaultResponse) => {
                this.status.pendingSignup = false;
                if (response.is_successful) {
                    this.messages.add(new Message(
                        "success",
                        "Successful signup!",
                        "You can log in now " + this.user.username + "."
                    ));
                    this.status.reset();
                    this.user.reset();
                }
            }
        )
    }

    disabledSignup(){
        return !this.status.noCheckActive() || !this.user.dataIsValid() || this.status.pendingSignup;
    }

}
