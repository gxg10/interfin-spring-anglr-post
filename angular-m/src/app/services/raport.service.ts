import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// rapoartenew -> rapoarte vali
// rapoarte -> sistem nou

const rapoarteUrl = 'http://localhost:8080/rapoartenew';
const zilnic = 'http://localhost:8080/rapoarte/zilnic';
const saptamanal = 'http://localhost:8080/rapoarte/saptamanal';
const lunar = 'http://localhost:8080/rapoarte/lunar';
const down = 'http://localhost:8080/download/test.pdf';
const getByDate = 'http://localhost:8080/rapoarte/date?date=2018-11-22';
const rapByDate = 'http://localhost:8080/rapoarte/date?date=';
const rapByInterval = 'http://localhost:8080/rapoarte/date?start=';
const intervalEnd = '&end=';

@Injectable({
  providedIn: 'root'
})
export class RaportService {

  constructor(private http: HttpClient) { }

  getRapoarte(): Observable<any> {
    return this.http.get(`${rapoarteUrl}?size=3&sort=data,desc`);
  }

  getZilnic(): Observable<any> {
    return this.http.get(`${zilnic}?size=3&sort=data,desc`);
  }

  getSaptamanal(): Observable<any> {
    return this.http.get(`${saptamanal}?size=3&sort=data,desc`);
  }

  getLunar(): Observable<any> {
    return this.http.get(`${lunar}?size=3&sort=data,desc`);
  }

  getByDate(): Observable<any> {
    return this.http.get(getByDate);
  }

  getRapByDate(date: string): Observable<any> {
    return this.http.get(`${rapByDate}${date}`);
  }

  getRapByInterval(start: string, end: string): Observable<any> {
    return this.http.get(`${rapByInterval}${start}${intervalEnd}${end}`);
  }
}
