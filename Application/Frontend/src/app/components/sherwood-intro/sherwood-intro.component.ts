import { Component, Input } from "@angular/core";
import { Router } from '@angular/router';
import { SignupStatus } from '../../_models/_index';

@Component({
    moduleId: module.id,
    templateUrl: 'sherwood-intro.component.html',
    styleUrls: ['sherwood-intro.component.css'],
    selector: 'sherwood-intro'
})
export class SherwoodIntroComponent{

    @Input() status: SignupStatus;

    constructor(private router: Router){
    }

}
