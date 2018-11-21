import { Component, OnInit } from '@angular/core';
import { Stire } from '../home/home.component';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const stiriUrl = 'http://localhost:8080/stiri?sort=data,desc';
const stiriSize = 'http://localhost:8080/stiri?size=3';
const nextPage = 'http://localhost:8080/stiri?size=3&page=';


@Component({
  selector: 'app-stiri',
  templateUrl: './stiri.component.html',
  styleUrls: ['./stiri.component.css']
})
export class StiriComponent implements OnInit {

  actualPage = 0;
  nrPages: number;

  stiri: Stire[];

  x = 1;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.nextPage().subscribe(data => {
      this.stiri = data.content;
      this.nrPages = data.totalPages - 1;
      console.log(this.nrPages);
      console.log(this.stiri);
    });
  }

  onContinut() {
    
  }

  getStiri(): Observable<any> {
    return this.http.get(`${stiriSize}`);
  }

  nextPage(): Observable<any> {
    return this.http.get(`${nextPage}${this.actualPage}`);
  }

  pushNext() {
    if (this.actualPage < this.nrPages) {
      this.actualPage ++;
      console.log(this.actualPage);
      this.nextPage().subscribe(data => {
        // this.actualPage ++;
        this.stiri = data.content;
        console.log(data);
      });
    }
    
    // if (this.actualPage <= this.nrPages) {
      
    // }
  }

  pushPrev() {
    if (this.actualPage > 0) {
      this.actualPage -- ;
      console.log(this.actualPage);
      this.nextPage().subscribe(data => {
        this.stiri = data.content;
        console.log(data);
      });
    }
    
    // if (this.actualPage > 0) {
      
    // }
  }

  // pushNext() {
  //   if (this.x <= 3) {
  //     console.log(this.x);
  //     this.x++;
  //   }
  // }

}
