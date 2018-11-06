import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-obiective',
  templateUrl: './obiective.component.html',
  styleUrls: ['./obiective.component.css']
})


export class ObiectiveComponent implements OnInit {

  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  constructor() { }

  ngOnInit() {
  }

  

}

