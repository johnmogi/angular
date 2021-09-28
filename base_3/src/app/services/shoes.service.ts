import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ShoeModel } from '../models/shoe';

@Injectable({
  providedIn: 'root'
})
export class ShoesService {
  public myApi = 'http://localhost:3000/api/';
  constructor(private http: HttpClient) { }

  public getAllShoes(): Observable<ShoeModel[]> {
    return this.http.get<ShoeModel[]>(this.myApi + "shoes");
  }

}