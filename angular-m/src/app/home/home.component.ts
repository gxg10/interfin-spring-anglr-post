import { Component, OnInit } from '@angular/core';
import { Stire } from 'src/app/model/stire';
import { StiriService } from 'src/app/services/stiri.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  stiri: Stire[];

  constructor(private stiriService: StiriService) { }

  ngOnInit() {
    this.stiriService.getStiri().subscribe(data => {
      // console.log(data);
      this.stiri = data.content;
    });
  }

}