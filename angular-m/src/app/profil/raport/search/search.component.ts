import { Component, OnInit } from '@angular/core';
import { RaportService } from 'src/app/services/raport.service';
import { DatePipe } from '@angular/common';
import { Raport } from 'src/app/model/raport';
import { ObservableMedia } from '@angular/flex-layout/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent  implements OnInit {

  src = 'http://localhost:8080/download/test1.pdf';

  rapoarte: Raport[];

  val: any;
  start: any;
  end;

  start_m: any;
  end_m;

  b: any;
  page = 1;
  zoom = 0.42;
  totalPages: number;
  isLoaded = false;

  constructor(private raportService: RaportService,
              public datepipe: DatePipe,
              public media: ObservableMedia) { }

  ngOnInit() {
  }

  change(raport: Raport) {
    console.log(raport.url);
    this.src = raport.url;
  }

  afterLoadComplete(pdfData: any) {
    this.totalPages = pdfData.numPages;
    this.isLoaded = true;
  }


  nextPage() {
    this.page++;
  }

  prevPage() {
    this.page--;
  }

  a(raport: any) {
    return raport.contents;
    // console.log(raport.title);
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
