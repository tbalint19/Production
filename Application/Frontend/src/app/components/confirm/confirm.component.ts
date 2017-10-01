import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Message, ConfirmRequest, DefaultResponse } from '../../_models/_index';
import { UserService } from '../../_services/_index';

@Component({
    moduleId: module.id,
    templateUrl: 'confirm.component.html',
    styleUrls: ['confirm.component.css'],
})
export class ConfirmComponent implements OnInit {

    public messages: Message[] = [];
    public request: ConfirmRequest = new ConfirmRequest();

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private userService: UserService){
    }

    confirm(){
        this.userService.confirmUser(this.request).subscribe(
            (response: DefaultResponse) => {
                console.log(response);
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
