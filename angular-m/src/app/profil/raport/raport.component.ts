import { Component, OnInit } from '@angular/core';
import { ObservableMedia } from '@angular/flex-layout';
import { RaportService } from 'src/app/services/raport.service';
import { Raport } from 'src/app/model/raport';

@Component({
  selector: 'app-raport',
  templateUrl: './raport.component.html',
  styleUrls: ['./raport.component.css']
})
export class RaportComponent implements OnInit {

  src = 'http://localhost:8080/download/test1.pdf';

  b: any;

  page = 1;
  zooom = 0.42;
  totalPages: number;
  isLoaded = false;

  rapoarte: Raport[];

  constructor(public media: ObservableMedia,
              private raportService: RaportService) { }

  ngOnInit() {
    this.raportService.getZilnic().subscribe(data => {
      // console.log(data);
      this.rapoarte = data.content;
      console.log(this.rapoarte);
    });
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

  pushGetZilnic() {
    this.raportService.getZilnic().subscribe(data => {
      // console.log(data.content);
      this.rapoarte = data.content;
    });
  }

  pushGetSaptamanal() {
    this.raportService.getSaptamanal().subscribe(data => {
      this.rapoarte = data.content;
    });
  }

  pushGetLunar() {
    this.raportService.getLunar().subscribe(data => {
      this.rapoarte = data.content;
    });
  }

}
