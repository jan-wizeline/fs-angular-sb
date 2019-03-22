import { Injectable } from '@angular/core';


@Injectable({ //makes a class a service; available for DI
  providedIn: 'root' //available in root level; can use anywhere inside the app
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username, password) {
    if (username === "jan" && password === "1234") {
      return true;
    } else  {
      return false;
    }
  }
}
