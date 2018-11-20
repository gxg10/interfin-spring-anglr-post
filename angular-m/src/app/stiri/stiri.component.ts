import { Component, OnInit } from '@angular/core';
import { Stire } from '../home/home.component';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const stiriUrl = 'http://localhost:8080/stiri?sort=data,desc';


@Component({
  selector: 'app-stiri',
  templateUrl: './stiri.component.html',
  styleUrls: ['./stiri.component.css']
})
export class StiriComponent implements OnInit {

  stiri: Stire[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getStiri().subscribe(data => {
      this.stiri = data.content;
      console.log(this.stiri);
    });
  }

  getStiri(): Observable<any> {
    return this.http.get(`${stiriUrl}`);
  }

}
