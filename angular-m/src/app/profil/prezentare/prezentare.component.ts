import { Component, OnInit } from '@angular/core';
import { ObservableMedia } from '@angular/flex-layout';

@Component({
  selector: 'app-prezentare',
  templateUrl: './prezentare.component.html',
  styleUrls: ['./prezentare.component.css']
})
export class PrezentareComponent implements OnInit {

  constructor(public media: ObservableMedia) { }

  ngOnInit() {
  }

}
