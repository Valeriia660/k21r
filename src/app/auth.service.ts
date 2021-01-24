import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  private username: string = "";
  private isLogged: boolean = false;

  logIn(username: string): void {
    this.username = username;
    this.isLogged = true;
  }

  //logOut(): void {
    //this.username = "";
    //this.isLogged = false;
  //}

  isUserLogged(): boolean {
    return this.isLogged;
  }

  //isUserInRole(role: Roles): boolean {
    //console.log(role.toString());
    //return true;
  //}
}

export enum Roles {
  admin,
  user,
  superadmin,
  guest
}
