import { GlobalEventsManager } from '../../_eventsmanager/global.eventsmanager';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    templateUrl: 'navbar.component.html',
    styleUrls: ['navbar.component.css'],
    selector: 'navbar'
})
export class NavBarComponent {

    public showNavBar = true;

    constructor(
        private router: Router,
        private globalEventsManager: GlobalEventsManager
      ) {
          this.globalEventsManager.showNavBarEmitter.subscribe((mode) => {
              if (mode !== null) { this.showNavBar = mode; }
      });
    }

    logout(){

    }

    shouldShowLogout(){

    }

    shouldShowLogin(){
        return this.router.url !== '/login';
    }

}
