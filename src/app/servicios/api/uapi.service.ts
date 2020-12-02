import { Injectable } from '@angular/core';
import {LoginI} from '../../models/login.interface'
import {ResponseI} from '../../models/response.interface'
import {HttpClient,HttpHeaders} from '@angular/common/http'
import {Observable} from 'rxjs'
import {UsuariosI} from '../../models/usuarios.interface'
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UapiService {
 url:string="https://bustamante-backend.herokuapp.com/api/";
  
  constructor(private http:HttpClient) { }
  loginByemail(form:LoginI):Observable<ResponseI>{
    let direccion=this.url+ "login";
    return this.http.post<ResponseI>(direccion,form);
  }

  c:string=localStorage.getItem("x-token").valueOf();


  obtener() {
    const direccion = this.url+ "usuarios"
    const headers = new HttpHeaders({
      'x-token': this.c
    });

    return this.http.get(direccion, { headers });
  }
  allusuarios():Observable<UsuariosI[]>{
   
    return this.obtener().
    pipe(map(data => {
      return Object.values(data);
    }));
  }

}
