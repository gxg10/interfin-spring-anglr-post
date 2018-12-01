import { Component, OnInit, Input } from '@angular/core';
import { Stire } from 'src/app/home/home.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stiri-item',
  templateUrl: './stiri-item.component.html',
  styleUrls: ['./stiri-item.component.css']
})
export class StiriItemComponent implements OnInit {

  @Input() stire: Stire;
  @Input() index: number;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onTest(id: number) {
    this.router.navigate([`profil/stiri/${id}`]);
  }

}
