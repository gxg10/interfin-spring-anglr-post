import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stire } from 'src/app/model/stire';
import { StiriService } from 'src/app/services/stiri.service';

const stiriUrl = 'http://localhost:8080/stiri?sort=data,desc';
const stiriSize = 'http://localhost:8080/stiri?size=3';
const nextPage = 'http://localhost:8080/stiri?size=3&page=';


@Component({
  selector: 'app-stiri',
  templateUrl: './stiri.component.html',
  styleUrls: ['./stiri.component.css']
})
export class StiriComponent implements OnInit {

  nrPages: number;

  stiri: Stire[];

  constructor(private stiriService: StiriService) { }

  ngOnInit() {
    this.nextPage().subscribe(data => {
      this.stiri = data.content;
      this.nrPages = data.totalPages - 1;
      console.log(this.nrPages);
      console.log(this.stiri);
    });
  }

  nextPage(): Observable<any> {
    return this.stiriService.getNextPage();
    // return this.http.get(`${nextPage}${this.actualPage}`);
  }

  pushNext() {
    if (this.stiriService.getActualPage() < this.getNrPages()) {
      this.stiriService.incrementActualPage();
      this.stiriService.getNextPage().subscribe(data => {
        this.stiri = data.content;
      });
    }

  }

  pushPrev() {
    if (this.stiriService.getActualPage() > 0) {
      this.stiriService.decrementActualPage() ;
      this.stiriService.getNextPage().subscribe(data => {
        this.stiri = data.content;
      });
    }

  }

  getNrPages() {
    return this.nrPages;
  }

}
