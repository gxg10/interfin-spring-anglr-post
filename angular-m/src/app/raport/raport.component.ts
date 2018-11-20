import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const rapoarteUrl = 'http://localhost:8080/rapoartenew';
const zilnic = 'http://localhost:8080/rapoartenew/zilnic';
const saptamanal = 'http://localhost:8080/rapoartenew/saptamanal';
const lunar = 'http://localhost:8080/rapoartenew/lunar';

@Component({
  selector: 'app-raport',
  templateUrl: './raport.component.html',
  styleUrls: ['./raport.component.css']
})
export class RaportComponent implements OnInit {

  rapoarte: Array<any>;


  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getZilnic().subscribe(data => {
      // console.log(data);
      this.rapoarte = data.content;
      console.log(this.rapoarte);
    });
  }

  a(raport: any) {
    return raport.contents;
    // console.log(raport.title);
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
