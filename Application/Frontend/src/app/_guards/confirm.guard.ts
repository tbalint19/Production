import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';

@Injectable()
export class ConfirmGuard implements CanActivate {

    constructor(private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (JSON.parse(localStorage.getItem('full-user'))["is_confirmed"]){
            return true;
        }
        if (route.queryParams['code']) {
            this.router.navigate(["confirm"], { queryParams: { code: route.queryParams['code'] } });
        } else {
            this.router.navigate(["confirm"]);
        }
        return false;
    }
}
