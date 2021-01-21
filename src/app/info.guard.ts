import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

export { CanActivate } from "@angular/router";

export class AboutGuard implements CanActivate {
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {
        alert("Войдите в систему, чтобы перейти на данную страницу")
        return false;

    }

}