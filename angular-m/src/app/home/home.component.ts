import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const stiriUrl = 'http://localhost:8080/stiri?sort=data,desc';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  stiri: Stire[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getStiri().subscribe(data => {
      // console.log(data);
      this.stiri = data.content;
    });
  }

  getStiri(): Observable<any> {
    return this.http.get(`${stiriUrl}`);
  }

}

export class Stire {
  id: number;
  titlu: string;
  continut: string;
}
