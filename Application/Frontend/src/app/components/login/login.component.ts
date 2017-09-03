import { GlobalEventsManager } from '../../_eventsmanager/global.eventsmanager';
import { Component } from "@angular/core";
import { Router } from '@angular/router';
import { User } from '../../_models/_index';

@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css'],
})
export class LoginComponent{

    public user: User;

    constructor(
          private eventsManager: GlobalEventsManager,
          private router: Router,
    ){
          this.eventsManager.showNavBar(true);
    }

    requestLogin(){

    }

    requestSignup(){

    }

    disabledSignup(){
      return !this.user.username || !this.user.password || !(this.user.username.length > 5)|| !(this.user.password.length > 9) || this.user.password != this.user.passwordAgain;
    }

    disabledLogin(){
       return !this.user.username || !this.user.password || !(this.user.username.length > 5)|| !(this.user.password.length > 9);
    }

}
