import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const stiriUrl = 'http://localhost:8080/stiri/';
const stiriUrlToate = 'http://localhost:8080/stiri?sort=data,desc';
const stiriSize = 'http://localhost:8080/stiri?size=3';
const nextPage = 'http://localhost:8080/stiri?size=4&page=';
const stiriSortByDateDescSizePage = 'http://localhost:8080/stiri?sort=data,desc&size=6&page=';
const stiriSortByDateSize4 = 'http://localhost:8080/stiri?sort=data,desc&size=4';

@Injectable({
  providedIn: 'root'
})
export class StiriService {

  actualPage = 0;
  nrPages: number;


  constructor(private http: HttpClient) { }

  getStiri4(): Observable<any> {
    return this.http.get(stiriSortByDateSize4);
  }

  getStiri(): Observable<any> {
    return this.http.get(`${stiriUrlToate}`);
  }

  getStiriSize(): Observable<any> {
    return this.http.get(`${stiriSize}`);
  }

  getNextPage(): Observable<any> {
    return this.http.get(`${stiriSortByDateDescSizePage}${this.actualPage}`);
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