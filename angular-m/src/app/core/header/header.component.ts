import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavService } from '../../services/nav.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  collapsed = false;
  collSubscription: Subscription;

  constructor(public navService: NavService) { }

  ngOnInit() {
    this.navService.coll.subscribe(data => {
      this.collapsed = data;
      // console.log('ng on init' + this.collapsed);
    });
  }

  onToggleSidenav() {

    if (this.collapsed) {
      this.collapsed = !this.collapsed;
      this.navService.closeNav();
    } else {
      this.collapsed = !this.collapsed;
      this.navService.openNav();
    }
  }

  ngOnDestroy() {
    this.collSubscription.unsubscribe();
  }

}
