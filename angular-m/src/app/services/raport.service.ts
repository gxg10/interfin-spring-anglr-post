import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// rapoarte/arhiva -> rapoarte vali
// rapoarte -> sistem nou

const rapoarteUrl = 'http://localhost:8080/rapoarte';
const zilnic = 'http://localhost:8080/rapoarte/zilnic';
const saptamanal = 'http://localhost:8080/rapoarte/saptamanal';
const lunar = 'http://localhost:8080/rapoarte/lunar';
const getByDate = 'http://localhost:8080/rapoarte/data?data=2018-11-22';
const rapByDate = 'http://localhost:8080/rapoarte/data?data=';
const rapByInterval = 'http://localhost:8080/rapoarte/data?start=';
const intervalEnd = '&end=';

const rapoarteAllArhiva = 'http://localhost:8080/rapoarte/arhiva';
const zilnicArhiva = 'http://localhost:8080/rapoarte/arhiva/zilnic';
const saptamanalArhiva = 'http://localhost:8080/rapoarte/arhiva/saptamanal';
const lunarArhiva = 'http://localhost:8080/rapoarte/arhiva/lunar';
const rapArhivaByDate = 'http://localhost:8080/rapoarte/arhiva/data?data=';
const rapArhivaByInterval = 'http://localhost:8080/rapoarte/arhiva/data?start=';
const arhivaIntervalEnd = '&end=';

@Injectable({
  providedIn: 'root'
})
export class RaportService {

  constructor(private http: HttpClient) { }

  getRapoarte(): Observable<any> {
    return this.http.get(`${rapoarteUrl}?size=3&sort=data,desc`);
  }

  getRapoarteArhiva(): Observable<any> {
    return this.http.get(`${rapoarteAllArhiva}?size=3&sort=data,desc`);
  }

  getZilnic(): Observable<any> {
    return this.http.get(`${zilnic}?size=3&sort=data,desc`);
  }

  getZilnicArhiva(): Observable<any> {
    return this.http.get(`${zilnicArhiva}?size=3&sort=data,desc`);
  }

  getSaptamanal(): Observable<any> {
    return this.http.get(`${saptamanal}?size=3&sort=data,desc`);
  }

  getSaptamanalArhiva(): Observable<any> {
    return this.http.get(`${saptamanalArhiva}?size=3&sort=data,desc`);
  }

  getLunar(): Observable<any> {
    return this.http.get(`${lunar}?size=3&sort=data,desc`);
  }

  getLunarArhiva(): Observable<any> {
    return this.http.get(`${lunarArhiva}?size=3&sort=data,desc`);
  }

  getByDate(): Observable<any> {
    return this.http.get(getByDate);
  }

  getRapByDate(date: string): Observable<any> {
    return this.http.get(`${rapByDate}${date}`);
  }

  getRapArhivaByDate(date: number): Observable<any> {
    return this.http.get(`${rapArhivaByDate}${date}`);
  }

  getRapByInterval(start: string, end: string): Observable<any> {
    return this.http.get(`${rapByInterval}${start}${intervalEnd}${end}`);
  }

  getRapArhivaByInterval(start: number, end: number): Observable<any> {
    return this.http.get(`${rapArhivaByInterval}${start}${arhivaIntervalEnd}${end}`);
  }
}
