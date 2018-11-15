import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NavService } from '../nav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() sidenavToggle = new EventEmitter<void>();

  collapsed = false;

  constructor(public navService: NavService) { }

  ngOnInit() {
  }

  onToggleSidenav() {
    this.sidenavToggle.emit();
    this.collapsed = !this.collapsed;
    // console.log(this.collapsed);
  }

}
