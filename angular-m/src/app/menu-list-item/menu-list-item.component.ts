import { Component, OnInit, Input, HostBinding, Output, EventEmitter } from '@angular/core';
import { NavService } from '../nav.service';
import { NavItem } from '../nav-item';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-list-item',
  templateUrl: './menu-list-item.component.html',
  styleUrls: ['./menu-list-item.component.css'],
  animations: [
    trigger('indicatorRotate', [
      state('collapsed', style({transform: 'rotate(0deg)'})),
      state('expanded', style({transform: 'rotate(180deg)'})),
      transition('expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4,0.0,0.2,1)')
      ),
    ])
  ]
})
export class MenuListItemComponent implements OnInit {

  @Output() closeSidenav = new EventEmitter<void>();

  expanded: boolean;
  @HostBinding('attr.aria-expanded') ariaExpanded = this.expanded;
  @Input() item: NavItem;
  @Input() depth: number;

  constructor(public navService: NavService,
              public router: Router) {
    if (this.depth === undefined) {
      this.depth = 0;
    }
   }

  ngOnInit() {
  }

  onItemSelected(item: NavItem) {
    if (!item.children || !item.children.length) {
      this.navService.closeNav();
    }
    if (item.children && item.children.length) {
      this.expanded = !this.expanded;
    }
  }
}
