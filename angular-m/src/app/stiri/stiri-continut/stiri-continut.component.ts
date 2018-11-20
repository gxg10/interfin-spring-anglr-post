import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stiri-continut',
  templateUrl: './stiri-continut.component.html',
  styleUrls: ['./stiri-continut.component.css']
})
export class StiriContinutComponent implements OnInit {

  @Input() continut;

  constructor() { }

  ngOnInit() {
  }

}
