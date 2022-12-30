import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class KudoService {
  // private _kudoId: string | undefined;
  // delete and put 
  // private kudosById = `http://localhost:3001/kudos/${this._kudoId}`
  // get
  private kudosByUserId = 'http://localhost:3001/kudos/62b85458bf9d7ae41e70c06a'
  // post
  private kudosPost = 'http://localhost:3001/kudos'

  
  constructor(private httpClient: HttpClient) { }

  deleteKudosById(kudoId:string) {
    return this.httpClient.delete(`http://localhost:3001/kudos/${kudoId}`);
  }

  updateKudosById(kudoId:string, updatedKudo: any) {
    return this.httpClient.put(`http://localhost:3001/kudos/${kudoId}`, updatedKudo);
  }

  getKudosByUserId() {
    return this.httpClient.get(this.kudosByUserId);
  }

  postNewKudo(newKudo: any) {
    return this.httpClient.post(this.kudosPost, newKudo);
  }
}