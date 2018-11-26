import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import {map} from 'rxjs/operators';

const rapoarteUrl = 'http://localhost:8080/rapoartenew';
const zilnic = 'http://localhost:8080/rapoartenew/zilnic';
const saptamanal = 'http://localhost:8080/rapoartenew/saptamanal';
const lunar = 'http://localhost:8080/rapoartenew/lunar';
const down = 'http://localhost:8080/download/test.pdf';

@Component({
  selector: 'app-raport',
  templateUrl: './raport.component.html',
  styleUrls: ['./raport.component.css']
})
export class RaportComponent implements OnInit {

  b: any;

  rapoarte: Array<any>;

  constructor(private http: HttpClient, private router: Router) { }

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

  onGetRap(): Observable<any> {
     const httpOptions = {
      'responseType' : 'arraybuffer' as 'json'
    };
    return this.http.get(`${down}`, httpOptions);
  }


  onGet(id: number) {
    this.onGetRap().subscribe(
      (data) => {

        const file = new Blob([data], {type: 'application/pdf'});
        const fileURL = URL.createObjectURL(file);
        this.b = file;
        window.open(fileURL);
        this.router.navigate([`/rapoarte/${id}`]);
      }
    );
  }


}
