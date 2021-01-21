import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'k21r';
}

constructor() {
  if (localStorage.getItem("admin")) {
    console.log("admin is alreay exists")
  } else {
    let admin = {
      "login": "admin",
      "password": "admin"
    }
    let jsonAdmin = JSON.stringify(admin)
    localStorage.setItem("admin", jsonAdmin)
    console.log("admin was created")
  }

  if (localStorage.getItem("user")) {
    console.log("user is alreay exists")
  } else {
    let user = {
      "login": "login",
      "password": "password"
    }
    let jsonUser = JSON.stringify(user)
    localStorage.setItem("user", jsonUser)
    console.log("user was created")
  }

  let jsonUser = localStorage.getItem("user")
if (jsonUser) {
    let user = JSON.parse(jsonUser)
    let login_for_user = user["login"]
    let password_for_user = user["password"]
    console.log("Login - " + login_for_user)
    console.log("Password - " + password_for_user)
}

let jsonAdmin = localStorage.getItem("admin")
if (jsonAdmin) {
    let admin = JSON.parse(jsonAdmin)
    let login_for_admin = admin["login"]
    let password_for_admin = admin["password"]
    console.log("Login - " + login_for_admin)
    console.log("Password - " + password_for_admin)
}
}