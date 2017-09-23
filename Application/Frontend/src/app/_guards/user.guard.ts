import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';

@Injectable()
export class UserGuard implements CanActivate {

    constructor(private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem('full-user')){
            return true;
        }
        if (route.queryParams['code']) {
            this.router.navigate(["initialize"], { queryParams: { code: route.queryParams['code'] } });
        } else {
            this.router.navigate(["initialize"]);
        }
        return false;
    }
}
