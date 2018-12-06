import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stire } from 'src/app/model/stire';
import { StiriService } from 'src/app/services/stiri.service';

const stiriUrl = 'http://localhost:8080/stiri/';

@Component({
  selector: 'app-stiri-continut',
  templateUrl: './stiri-continut.component.html',
  styleUrls: ['./stiri-continut.component.css']
})
export class StiriContinutComponent implements OnInit {

  stire: Stire;
  id: number;

  constructor(private route: ActivatedRoute,
              private stiriService: StiriService) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        console.log('params ' + params['id']);
        this.id = +params['id'];
        this.stiriService.getStireById(this.id)
        .subscribe(data => {
        this.stire = data;
        console.log('stire: ' + this.stire);
    });
      }
    );
    console.log('test');
  }


}
