import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

export { CanActivate } from "@angular/router";

export class AboutGuard implements CanActivate {
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {
        return confirm("Войдите в аккаунт, чтобы перейти на эту страницу");
    }

}