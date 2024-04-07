import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../interfaces/usuario';
import { ResponseApi } from '../interfaces/response-api';
import { environment } from 'src/environments/environment';
import { Login } from '../interfaces/login';


@Injectable({
  providedIn: 'root'
})
export class UsuarioServicioService {
  private urlApi: string = environment.endpoint + "Usuario/";
    constructor(private http: HttpClient) {
  }

  getIniciarSesion(request: Login): Observable<ResponseApi> {

    return this.http.post<ResponseApi>(`${this.urlApi}IniciarSesion`, request)
  }

  getUsuarios(): Observable<ResponseApi> {

    return this.http.get <ResponseApi>(`${this.urlApi}Lista`)

  }

  saveUsuario(request:Usuario): Observable<ResponseApi> {

    return this.http.post<ResponseApi>(`${this.urlApi}Guardar`, request, { headers: { 'Content-Type': 'application/json;charset=utf-8' }})

  }

  editUsuario(request: Usuario): Observable<ResponseApi> {

    return this.http.put<ResponseApi>(`${this.urlApi}Editar`, request, { headers: { 'Content-Type': 'application/json;charset=utf-8' } })

  }

deleteUsuario(id: number): Observable<ResponseApi> {

    return this.http.delete<ResponseApi>(`${this.urlApi}Eliminar/${id}`);

  }
}
