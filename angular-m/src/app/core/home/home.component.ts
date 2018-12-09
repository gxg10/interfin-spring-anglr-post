import { Component, OnInit } from '@angular/core';
import { Stire } from 'src/app/model/stire';
import { StiriService } from 'src/app/services/stiri.service';
import { throwError, interval, of } from 'rxjs';
import { retryWhen, flatMap } from 'rxjs/operators';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  stiri: Stire[];
  error;

  constructor(private stiriService: StiriService) { }

  ngOnInit() {
    this.stiriService.getStiri()
    .pipe(retryWhen( data => {
      return interval(5000)
      .pipe(
        flatMap(count => count === 3 ? throwError('giving up') 
        : of(count))
      );
    } ))
    .subscribe(
      result => {
        this.stiri = result.content;
      },
      err => {
        this.error = err;
      });
  }

}
