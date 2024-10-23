// src/app/services/person.service.ts
import { Injectable } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  //private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor() {}

  // getUsers(): Observable<any[]> {
  //   return this.http.get<any[]>(this.apiUrl);
  // }

  getUsersUsingFetch(): Observable<any[]> {
    return from(fetch("https://jsonplaceholder.typicode.com/users").then(response => response.json())).pipe(
      map(data => data),
      catchError((error) => {
        console.error('Error fetching data:', error);
        throw error;
      })
    );
  }
}
