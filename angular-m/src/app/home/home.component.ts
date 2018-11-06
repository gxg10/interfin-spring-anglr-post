import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const stiriUrl = 'http://localhost:8080/stiri?sort=data,desc';
const rapoarteUrl = 'http://localhost:8080/rapoarte';
const zilnic = 'http://localhost:8080/rapoarte/zilnic';
const saptamanal = 'http://localhost:8080/rapoarte/saptamanal';
const lunar = 'http://localhost:8080/rapoarte/lunar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  stiri: Stire[];
  rapoarte: Array<any>;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getStiri().subscribe(data => {
      // console.log(data);
      this.stiri = data.content;
    });
    this.getRapoarte().subscribe(data => {
      // console.log(data);
      this.rapoarte = data.content;
    });
  }

  getStiri(): Observable<any> {
    return this.http.get(`${stiriUrl}`);
  }

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

  pushGetZilnic() {
    this.getZilnic().subscribe(data => {
      // console.log(data.content);
      this.rapoarte = data.content;
    });
  }

  pushGetSaptamanal() {
    this.getSaptamanal().subscribe(data => {
      this.rapoarte = data.content;
    });
  }

  pushGetLunar() {
    this.getLunar().subscribe(data => {
      this.rapoarte = data.content;
    });
  }

}

export class Stire {
  id: number;
  titlu: string;
  continut: string;
}

export class RaportPiata {
  id: number;
  titlu: string;
  data: Date;
  tipRaport: string;
  continut: string;
}
