import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const stiriUrl = 'http://localhost:8080/stiri/';
const stiriUrlToate = 'http://localhost:8080/stiri?sort=data,desc';
const stiriSize = 'http://localhost:8080/stiri?size=3';
const nextPage = 'http://localhost:8080/stiri?size=3&page=';

@Injectable({
  providedIn: 'root'
})
export class StiriService {

  actualPage = 0;
  nrPages: number;


  constructor(private http: HttpClient) { }

  getStiri(): Observable<any> {
    return this.http.get(`${stiriUrlToate}`);
  }

  getStiriSize(): Observable<any> {
    return this.http.get(`${stiriSize}`);
  }

  getNextPage(): Observable<any> {
    return this.http.get(`${nextPage}${this.actualPage}`);
  }

  getStireById(id: number): Observable<any> {
    return this.http.get(`${stiriUrl}${id}`);
    }

  getActualPage() {
    return this.actualPage;
  }

  incrementActualPage(): void {
    this.actualPage++;
  }

  decrementActualPage(): void {
    this.actualPage--;
  }
}
