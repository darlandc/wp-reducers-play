import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class AuthService {
  logged = false;

  isLogged() {
    const promise = new Promise((res) => {
      setTimeout(() => {
        res(this.logged);
      }, 800);
    });
    return promise;
  }

  login() {
    this.logged = true;
  }

  logout() {
    this.logged = false;
  }
}
