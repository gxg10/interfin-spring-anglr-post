import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stire } from 'src/app/model/stire';
import { StiriService } from 'src/app/services/stiri.service';

const stiriUrl = 'http://localhost:8080/stiri?sort=data,desc';

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
