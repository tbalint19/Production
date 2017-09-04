import { Component } from "@angular/core";
import { Router } from '@angular/router';
import { UserService } from '../../_services/_index'
import { SignupUser, DefaultResponse, CheckResponse, TokenResponse } from '../../_models/_index';

@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css'],
})
export class LoginComponent{

    public signupUser: SignupUser = new SignupUser();

    constructor(private router: Router){
    }

    requestSignup(){

    }

    disabledSignup(){
      // return !this.user.username || !this.user.password || !(this.user.username.length > 5)|| !(this.user.password.length > 9) || this.user.password != this.user.passwordAgain;
    }

    disabledLogin(){
      //  return !this.user.username || !this.user.password || !(this.user.username.length > 5)|| !(this.user.password.length > 9);
    }

}
