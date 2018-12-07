import { Component, OnInit } from '@angular/core';
import { Stire } from 'src/app/model/stire';
import { StiriService } from 'src/app/services/stiri.service';
import { ObservableMedia } from '@angular/flex-layout';

@Component({
  selector: 'app-stiri-start',
  templateUrl: './stiri-start.component.html',
  styleUrls: ['./stiri-start.component.css']
})
export class StiriStartComponent implements OnInit {

  stire: Stire;

  constructor(private stiriService: StiriService,
              public media: ObservableMedia) { }

  ngOnInit() {
    this.stiriService.getStiri4().subscribe(
      data => {
        this.stire = data.content[0];
      }
    );
  }

}
