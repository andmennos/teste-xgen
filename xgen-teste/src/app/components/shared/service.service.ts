import { Character } from './../home/listas/character.interface';
import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API: string = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<Character[]> {
    return this.httpClient.get<Character[]>(API);
  }
}
