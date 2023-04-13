import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  getuserdata(){
    let url='https://jsonplaceholder.typicode.com/photos'
    return this.http.get(url);
  }
}
