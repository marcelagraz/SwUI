import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseResponse } from '../../models/base-response';
import { CreatePlanetModel } from '../../models/create-planet-model';
import { CreatePeopleModel } from '../../models/create-people-model';
import { CreateFilmModel } from '../../models/create-film-model';

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

  getAllPeoples(): Observable<BaseResponse> {
    return this.http.get<BaseResponse>(this.apiUrl + "/peoples?pageNumber=1&pageSize=10");
  }

  createPeople(people: CreatePeopleModel): Observable<BaseResponse> {
    return this.http.post<BaseResponse>(this.apiUrl + "/peoples", people);
  }

  getAllFilms(): Observable<BaseResponse> {
    return this.http.get<BaseResponse>(this.apiUrl + "/films?pageNumber=1&pageSize=10");
  }

  createFilm(film: CreateFilmModel): Observable<BaseResponse> {
    return this.http.post<BaseResponse>(this.apiUrl + "/films", film);
  }
}
