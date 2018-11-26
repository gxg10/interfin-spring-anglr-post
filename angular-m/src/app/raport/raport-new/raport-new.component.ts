import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-raport-new',
  templateUrl: './raport-new.component.html',
  styleUrls: ['./raport-new.component.css']
})
export class RaportNewComponent implements OnInit {
  @Input() b;

  constructor() { }

  ngOnInit() {

    console.log('this b e ' + this.b);
  }

}
