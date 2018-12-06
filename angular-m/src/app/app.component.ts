import { Component, ElementRef, ViewChild, AfterViewInit, 
  ViewEncapsulation } from '@angular/core';
import { NavItem } from './model/nav-item';
import { NavService } from './services/nav.service';


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
          iconName: 'info',
          route: 'prezentare'
        },
        {
          displayName: 'Obiective',
          iconName: 'trending_up',
          route: 'obiective'
        },
        {
          displayName: 'Rapoarte',
          iconName: 'work',
          route: 'rapoarte'
        }
      ]
    },
    {
      displayName: 'About',
      iconName: 'account_balance',
      children: [
        {
          displayName: 'Deschidere Cont',
          iconName: 'attach_money',
          route: 'prezentare'
        },
        {
          displayName: 'Taxe si Comisioane',
          iconName: 'money',
          route: 'obiective'
        },
        {
          displayName: 'Login',
          iconName: 'recent_actors',
          route: 'rapoarte'
        },
        {
          displayName: 'upload',
          iconName: 'recent_actors',
          route: 'upload'
        }
      ]
    },
    {
      displayName: 'Contact',
      iconName: 'contact_support',
      route: 'prezentare'
    },
    {
      displayName: 'Servicii',
      iconName: 'room_service',
      route: 'obiective'
    },
    {
      displayName: 'Piata de Capital',
      iconName: 'recent_actors',
      route: 'upload'
    }
  ];

  constructor(private navService: NavService) {}

  ngAfterViewInit() {
    this.navService.appDrawer = this.appDrawer;
  }

  onTest() {
    this.navService.closeNav();
  }
}

