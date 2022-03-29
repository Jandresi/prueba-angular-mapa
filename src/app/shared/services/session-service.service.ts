import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionServiceService {

  constructor() { }

  agregarSesion(datos: string, valor: string) {
    var valores = this.getSesion();
    valores[datos] = valor;
    sessionStorage.setItem('session', JSON.stringify(valores));
  }

  getSesion() {
    var valores = {};
    if (sessionStorage.getItem('session')) {
      valores = JSON.parse(sessionStorage.getItem('session'));
    }
    return valores;
  }

  getValores(dato: any) {
    var datos = this.getSesion();
    if (datos[dato]==undefined) {
      return false;
    } else {      
    return datos[dato];
    }
  }
}
