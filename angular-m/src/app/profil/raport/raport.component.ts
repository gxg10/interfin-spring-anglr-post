import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

// rapoartenew -> rapoarte vali
// rapoarte -> sistem nou

const rapoarteUrl = 'http://localhost:8080/rapoartenew';
const zilnic = 'http://localhost:8080/rapoarte/zilnic';
const saptamanal = 'http://localhost:8080/rapoarte/saptamanal';
const lunar = 'http://localhost:8080/rapoarte/lunar';
const down = 'http://localhost:8080/download/test.pdf';

@Component({
  selector: 'app-raport',
  templateUrl: './raport.component.html',
  styleUrls: ['./raport.component.css']
})
export class RaportComponent implements OnInit {

  src = 'http://localhost:8080/download/test1.pdf';

  b: any;

  page = 1;
  zooom = 0.42;
  totalPages: number;
  isLoaded = false;

  rapoarte: Array<any>;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.getZilnic().subscribe(data => {
      // console.log(data);
      this.rapoarte = data.content;
      console.log(this.rapoarte);
    });
  }

  change(raport: any) {
    console.log(raport.url);
    this.src = raport.url;
  }

  afterLoadComplete(pdfData: any) {
    this.totalPages = pdfData.numPages;
    this.isLoaded = true;
  }


  nextPage() {
    this.page++;
  }

  prevPage() {
    this.page--;
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

  // onGetRap(): Observable<any> {
  //    const httpOptions = {
  //     'responseType' : 'arraybuffer' as 'json'
  //   };
  //   return this.http.get(`${down}`, httpOptions);
  // }


  // onGet(id: number) {
  //   this.onGetRap().subscribe(
  //     (data) => {

  //       const file = new Blob([data], {type: 'application/pdf'});
  //       const fileURL = URL.createObjectURL(file);
  //       this.b = file;
  //       window.open(fileURL);
  //       this.router.navigate([`/rapoarte/${id}`]);
  //     }
  //   );
  // }


}