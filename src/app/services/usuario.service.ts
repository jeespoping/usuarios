import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  url = 'https://gorest.co.in/public-api/users';
  token = '801b83cfd465fe453b0cfc4131377513211f1fa7ba6d9ef77d9d615771a22c77';

  constructor(private http:HttpClient) { }

  getUsuarios(): Observable<any>{
    return this.http.get<any>(this.url + '?access-token=' + this.token);
  }

  getUsuario(id: number): Observable<any>{
    return this.http.get<any>(this.url + '/' + id + '?access-token=' + this.token)
  }
}
