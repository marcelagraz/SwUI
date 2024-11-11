import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseResponse } from '../../models/base-response';
import { CreatePlanetModel } from '../../models/create-planet-model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  apiUrl = 'https://localhost:7082/api';

  constructor(private http: HttpClient) {}

  getAllPlanets(): Observable<BaseResponse> {
    return this.http.get<BaseResponse>(this.apiUrl + "/planets?pageNumber=1&pageSize=10");
  }

  createPlanet(planet: CreatePlanetModel): Observable<BaseResponse> {
    return this.http.post<BaseResponse>(this.apiUrl + "/planets", planet);
  }
}
