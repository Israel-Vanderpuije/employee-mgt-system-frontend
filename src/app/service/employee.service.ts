import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL = "http://localhost:8080/api/v1/";

  constructor(private httpClient: HttpClient) { }

  getEmployeesList(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseURL}` + "employee");
  }
  
  addEmployee(employee: Employee): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}` + "employee", employee)
  }

  getEmployeeById(id: number): Observable<Employee>{
    const params = new HttpParams().set('id', id)
    return this.httpClient.get<Employee>(`${this.baseURL}` + "find", {params})
  }

  updateEmployee(employee: Employee): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}` + "update", employee)
  }

  deleteEmployee(id: number): Observable<Object>{
    const params = new HttpParams().set('id', id)
    return this.httpClient.delete(`${this.baseURL}` + "delete", {params})
  }

}
