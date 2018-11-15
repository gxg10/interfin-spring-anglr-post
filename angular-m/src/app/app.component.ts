import { Component, ElementRef, ViewChild, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { NavItem } from './nav-item';
import { NavService } from './nav.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class AppComponent implements AfterViewInit {
  @ViewChild('appDrawer') appDrawer: ElementRef;
  navItems: NavItem[] = [
    {
      displayName: 'Profil',
      iconName: 'home',
      children: [
        {
          displayName: 'Prezentare',
          iconName: 'info'
        },
        {
          displayName: 'Obiective',
          iconName: 'trending_up'
        },
        {
          displayName: 'Rapoarte',
          iconName: 'work'
        }
      ]
    },
    {
      displayName: 'About',
      iconName: 'account_balance',
      children: [
        {
          displayName: 'Deschidere Cont',
          iconName: 'attach_money'
        },
        {
          displayName: 'Taxe si Comisioane',
          iconName: 'money'
        },
        {
          displayName: 'Login',
          iconName: 'recent_actors'
        },
        {
          displayName: 'upload',
          iconName: 'recent_actors'
        }
      ]
    },
    {
      displayName: 'Contact',
      iconName: 'contact_support'
    },
    {
      displayName: 'Servicii',
      iconName: 'room_service'
    },
    {
      displayName: 'Piata de Capital',
      iconName: 'recent_actors'
    }
  ];

  constructor(private navService: NavService) {}

  ngAfterViewInit() {
    this.navService.appDrawer = this.appDrawer;
  }

}

