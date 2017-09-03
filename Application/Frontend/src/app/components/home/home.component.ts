import { GlobalEventsManager } from '../../_eventsmanager/global.eventsmanager';
import { Component } from "@angular/core";
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css'],
})
export class HomeComponent{

    constructor(
          private eventsManager: GlobalEventsManager,
          private router: Router
    ){
          this.eventsManager.showNavBar(true);
    }
}
