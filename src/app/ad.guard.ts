import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AdService } from "./ad.service";

@Injectable()
export class AdGuard implements CanActivate {

    constructor(private adServive: AdService) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {

        if (!this.adServive.isUserLogged()) {
            alert("У вас нет прав для перехода. Необходимо: войти под специальной учёной записью");
            return false;
    } else (this.adServive.isUserAdmin())
        return true;
        }
    }
     
