import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Stire } from 'src/app/model/stire';
import { StiriService } from 'src/app/services/stiri.service';
import { ObservableMedia } from '@angular/flex-layout';

@Component({
  selector: 'app-stiri-continut',
  templateUrl: './stiri-continut.component.html',
  styleUrls: ['./stiri-continut.component.css']
})
export class StiriContinutComponent implements OnInit {

  stire: Stire;
  id: number;

  constructor(private route: ActivatedRoute,
              private stiriService: StiriService,
              public media: ObservableMedia) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.stiriService.getStireById(this.id)
        .subscribe(data => {
        this.stire = data;
    });
      }
    );
  }


}
