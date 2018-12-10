import { Component, OnInit } from '@angular/core';
import { Raport } from 'src/app/model/raport';
import { RaportService } from 'src/app/services/raport.service';

@Component({
  selector: 'app-arhiva-veche',
  templateUrl: './arhiva-veche.component.html',
  styleUrls: ['./arhiva-veche.component.css']
})
export class ArhivaVecheComponent implements OnInit {

  rapoarte: Raport[];
  val;
  start;
  end;

  constructor(private raportService: RaportService) { }

  ngOnInit() {
  }

  onTest(data: Date) {
    const someDate = data.getTime();
    console.log(someDate);
    const newDate = Math.floor(someDate / 1000);
    console.log(newDate);
    this.raportService.getRapArhivaByDate(newDate).subscribe(
      res => {
        this.rapoarte = res;
        console.log(res);
      }
    );
  }

  onSearch(start: Date, end: Date) {
    const startDate = start.getTime();
    const endDate = end.getTime();

    const newStartDate = Math.floor(startDate / 1000);
    const newEndDate = Math.floor(endDate / 1000);

    // console.log('start date ' + newStartDate);
    // console.log('end date ' + newEndDate);

    this.raportService.getRapArhivaByInterval(newStartDate, newEndDate).subscribe(
      res => {
        console.log(res);
        this.rapoarte = res;
      }
    );

  }

}
