import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage['auth-token']) {
            return true;
        }
        if (route.queryParams['code']) {
            this.router.navigate(["signup"], { queryParams: { code: route.queryParams['code'] } });
        } else {
            this.router.navigate(["signup"]);
        }
        return false;
    }
}
