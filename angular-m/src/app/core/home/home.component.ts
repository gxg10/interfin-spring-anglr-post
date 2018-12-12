import { Component, OnInit } from '@angular/core';
import { Stire } from 'src/app/model/stire';
import { StiriService } from 'src/app/services/stiri.service';
import { throwError, interval, of } from 'rxjs';
import { retryWhen, flatMap } from 'rxjs/operators';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  stiri: Stire[];
  error;

  constructor(private stiriService: StiriService,
              private router: Router) { }

  ngOnInit() {
    this.stiriService.getStiri4()
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

  onGoTo(stire: Stire) {
    console.log(stire.id);
    const id = stire.id;
    this.router.navigate([`/profil/stiri/${id}`]);
  }

}
