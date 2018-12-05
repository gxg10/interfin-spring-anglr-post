import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Stire } from 'src/app/model/stire';

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
    this.router.navigate([`/stiri/${id}`]);
  }

}
