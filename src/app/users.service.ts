import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

//Service för att hämta users från jsonplaceholder.
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url:any = {
    users: 'https://jsonplaceholder.typicode.com/users',
  }

  constructor(private http: HttpClient) { }
  //hämtar alla users som en Observable ('tidningskiosken').
  public getUsers(): Observable<any> {
    return this.http.get(this.url.users);
  }
  //hämtar en user som en Observable med ett id.
  public getUser(id: string): Observable<any> {
    return this.http.get(this.url.users + "/" + id);
  }
}
