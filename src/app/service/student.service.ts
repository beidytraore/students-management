import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Student} from '../model/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(
    private httpClient: HttpClient
  ) { }
  private apiUrl: string = environment.apiUrl;

  // get all student
  public getAllStudent(): Observable<Student[]>{
    return this.httpClient.get<Student[]>(`${this.apiUrl}/students`);
  }
  // get student by id
  public getStudentById(id: number): Observable<Student | null>{
    return this.httpClient.get<Student>(`${this.apiUrl}/student/${id}`);
  }
  // get student by roll
  public getStudentByRoll(roll: number): Observable<Student | null>{
    return this.httpClient.get<Student | null>(`${this.apiUrl}/studentByRoll/${roll}`)
  }
  // get student by reg
  public getStudentByReg(reg: number): Observable<Student | null>{
    return this.httpClient.get<Student | null>(`${this.apiUrl}/studentByReg/${reg}`)
  }
  // post all student
  public postAllStudent(students: Student[]): Observable<Student[]>{
    return this.httpClient.post<Student[]>(`${this.apiUrl}/students`, students);
  }
  // post one student
  public postOneStudent(student: Student): Observable<Student>{
    return this.httpClient.post<Student>(`${this.apiUrl}/student`, student);
  }
  // delete student by id
  public deleteStudentStudentById(id: number): Observable<string>{
    return this.httpClient.delete<string>(`${this.apiUrl}/student/${id}`);
  }
  // delete student by obj
  public deleteStudentByObj(student: Student): Observable<string>{
    const header = new Headers();
    const body = student;
    const responseType = 'text';
    const withCredentials = false;
    const reportProgress = false;

    header.append('Content-Type', 'json');

    const  option = {
      header,
      body,
      reportProgress,
      responseType,
      withCredentials
    };
    // @ts-ignore
    return this.httpClient.delete<string>(`${this.apiUrl}/student`, option);
  }
  // update student by obj
  public updateStudentByObj(student: Student): Observable<Student | null>{
    return this.httpClient.put<Student>(`${this.apiUrl}/student`, student);
  }
}
