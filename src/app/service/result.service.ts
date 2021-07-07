import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Result} from '../model/result.model';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  constructor(
    private httpClient: HttpClient,private apiUrl = environment.apiUrl
  ) { }


  // get all result
  getAllResult(): Observable<Result[]>{
    return this.httpClient.get<Result[]>(`${this.apiUrl}/results`)
  }
  // get result by id
  getResultById(id: number): Observable<Result | null>{
    return this.httpClient.get<Result | null>(`${this.apiUrl}/result/${id}`)
  }
  // get result by roll
  getResultByRoll(roll: number): Observable<Result | null>{
    return this.httpClient.get<Result | null>(`${this.apiUrl}/resultByRoll/${roll}`)
  }
  // post one result
  postOneResult(result: Result): Observable<Result | null>{
    return this.httpClient.post<Result | null>(`${this.apiUrl}/result`, result)
  }
  // post all result
  postAllResult(results: Result[]): Observable<Result[]>{
    return this.httpClient.post<Result[]>(`${this.apiUrl}/results`, results)
  }
  // delete result by id
  deleteResultById(id: number): Observable<string>{
    return this.httpClient.delete<string>(`${this.apiUrl}/result/${id}`)
  }
  // delete result by roll
  deleteResultByRoll(roll: number): Observable<string>{
    return this.httpClient.delete<string>(`${this.apiUrl}/deleteByRoll/${roll}`)
  }
  // update result by result
  updateResult(result: Result): Observable<Result | null>{
    return this.httpClient.put<Result | null>(`${this.apiUrl}/result`, result)
  }
}
