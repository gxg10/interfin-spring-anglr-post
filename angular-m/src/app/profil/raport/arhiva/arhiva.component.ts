import { Component, OnInit } from '@angular/core';
import { RaportService } from 'src/app/services/raport.service';
import { DatePipe } from '@angular/common';
import { Raport } from 'src/app/model/raport';

@Component({
  selector: 'app-arhiva',
  templateUrl: './arhiva.component.html',
  styleUrls: ['./arhiva.component.css']
})
export class ArhivaComponent implements OnInit {

  rapoarte: Raport[];

  val: any;
  start: any;
  end;
  constructor(private raportService: RaportService,
              public datepipe: DatePipe) { }

  ngOnInit() {
  }


  onTest(data: string) {
    const someDate = this.datepipe.transform(data, 'yyyy-MM-dd');
    console.log(someDate);
    this.raportService.getRapByDate(someDate).subscribe(
      res => {
        this.rapoarte = res;
        console.log(res);
      }
    );
  }

  onSearch(start: string, end: string) {
    const startDate = this.datepipe.transform(start, 'yyyy-MM-dd');
    const endDate = this.datepipe.transform(end, 'yyyy-MM-dd');
    console.log(startDate, endDate);

    this.raportService.getRapByInterval(startDate, endDate).subscribe(
      res => {
        this.rapoarte = res;
        console.log(res);
      }
    );
  }

}
