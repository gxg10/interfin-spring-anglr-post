import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Stire } from '../model/stire';
import { StiriService } from '../services/stiri.service';

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

  constructor(private stiriService: StiriService) { }

  ngOnInit() {
    this.nextPage().subscribe(data => {
      this.stiri = data.content;
      this.nrPages = data.totalPages - 1;
      console.log(this.nrPages);
      console.log(this.stiri);
    });
  }

  getStiri(): Observable<any> {
    return this.stiriService.getStiriSize();
  }

  nextPage(): Observable<any> {
    return this.stiriService.getNextPage();
  }

  pushNext() {
    if (this.stiriService.getActualPage() < this.getNrPages()) {
      this.stiriService.incrementActualPage();
      console.log(this.actualPage);
      this.stiriService.getNextPage().subscribe(data => {
        // this.actualPage ++;
        this.stiri = data.content;
        console.log(data);
      });
    }

  }

  pushPrev() {
    if (this.stiriService.getActualPage() > 0) {
      this.stiriService.decrementActualPage();
      console.log(this.actualPage);
      this.stiriService.getNextPage().subscribe(data => {
        this.stiri = data.content;
        console.log(data);
      });
    }
  }

  getNrPages() {
    return this.nrPages;
  }

}
