import { Component, OnInit, Input } from '@angular/core';
import { Stire } from 'src/app/home/home.component';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
              private router: Router,
              private http: HttpClient) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        console.log('params ' + params['id']);
        this.id = +params['id'];
        this.getStire(this.id)
        .subscribe(data => {
        this.stire = data;
        console.log('stire: ' + this.stire);
    });
      }
    );
    console.log('test');

  }

  getStire(id: number): Observable<any> {
  return this.http.get(`${stiriUrl}${id}`);
  }

  onBack() {
    this.router.navigate([`profil/stiri/`]);
  }

}
