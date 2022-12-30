import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
  
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersUrl = 'http://127.0.0.1:3000/api/users';

  constructor(private httpClient: HttpClient) { }
  
  listUser(){
    return this.httpClient.get(this.usersUrl);
  }

  addUser() {

  }

  findUser() {

  }

  updateUser() {

  }

  deleteUser() {
    
  }
}
