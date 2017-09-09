import { Component, Input } from "@angular/core";
import { Router } from '@angular/router';
import { SignupStatus } from '../../_models/_index';

@Component({
    moduleId: module.id,
    templateUrl: 'demo-proposer.component.html',
    styleUrls: ['demo-proposer.component.css'],
    selector: 'demo-proposer'
})
export class DemoProposerComponent{

    @Input() status: SignupStatus;

    constructor(private router: Router){
    }

    getDemo(){
        this.router.navigate(['demo']);
    }

}
