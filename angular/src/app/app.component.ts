import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const stiriUrl = 'http://localhost:8080/stiri';
const rapoarteUrl = 'http://localhost:8080/rapoarte';
const zilnic = 'http://localhost:8080/rapoarte/zilnic';
const saptamanal = 'http://localhost:8080/rapoarte/saptamanal';
const lunar = 'http://localhost:8080/rapoarte/lunar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  stiri: Stire[];
  rapoarte: RaportPiata[];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getStiri().subscribe(data => {
      console.log(data);
      this.stiri = data;
    });
    this.getRapoarte().subscribe(data => {
      console.log(data);
      this.rapoarte = data;
    });
  }

  getStiri(): Observable<any> {
    return this.http.get(`${stiriUrl}`);
  }

  getRapoarte(): Observable<any> {
    return this.http.get(`${rapoarteUrl}?size=3&sort=data,desc`);
  }

  getZilnic(): void {
    this.http.get(`${zilnic}?size=3&sort=data,desc`).subscribe(data => {
      console.log(data.content);
      this.rapoarte = data.content;
      
    });
  }

  getSaptamanal(): void {
    this.http.get(`${saptamanal}?size=3&sort=data,desc`).subscribe(data => {
      this.rapoarte = data.content;
    });
  }

  getLunar(): void {
    this.http.get(`${lunar}?size=3&sort=data,desc`).subscribe(data => {
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
