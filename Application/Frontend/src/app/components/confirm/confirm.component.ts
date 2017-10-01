import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Message, ConfirmRequest, DefaultResponse } from '../../_models/_index';
import { UserService, MessageService } from '../../_services/_index';

@Component({
    moduleId: module.id,
    templateUrl: 'confirm.component.html',
    styleUrls: ['confirm.component.css'],
})
export class ConfirmComponent implements OnInit {

    public request: ConfirmRequest = new ConfirmRequest();

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private messages: MessageService,
        private userService: UserService){
    }

    confirm(){
        this.userService.confirmUser(this.request).subscribe(
            (response: DefaultResponse) => {
                if (response.is_successful) {
                    localStorage.removeItem('full-user');
                    this.messages.add(new Message("success", "Success", "Your account is confirmed!"));
                    this.router.navigate(['']);
                } else {
                    this.messages.add(new Message("error", "Error", "Invalid confirmation code!"));
                }
            }
        )
    }

    disabledConfirm(){
        return !this.request.isValid();
    }

    ngOnInit() {
        if (sessionStorage.getItem('confirmationCode')) {
            this.request.confirmationCode = sessionStorage.getItem('confirmationCode');
            this.confirm();
        }
    }

}
