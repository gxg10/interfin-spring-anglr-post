import { Component, ElementRef, ViewChild, AfterViewInit, 
  ViewEncapsulation } from '@angular/core';
import { NavItem } from './model/nav-item';
import { NavService } from './services/nav.service';
import { ObservableMedia } from '@angular/flex-layout';
import * as Hammer from 'hammerjs';
import {MatSidenav} from '@angular/material';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class AppComponent implements AfterViewInit {

  navItems: NavItem[] = [
    {
      displayName: 'Profil',
      iconName: 'home',
      children: [
        {
          displayName: 'Prezentare',
          iconName: 'info',
          route: 'profil/prezentare'
        },
        {
          displayName: 'Obiective',
          iconName: 'trending_up',
          route: 'profil/obiective'
        },
        {
          displayName: 'Rapoarte',
          iconName: 'work',
          route: 'profil/rapoarte'
        },
        {
          displayName: 'Stiri',
          iconName: 'whatshot',
          route: 'profil/stiri'
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

  @ViewChild(MatSidenav)
  public appDrawer: MatSidenav;

  constructor(private navService: NavService,
              elementRef: ElementRef,
              public media: ObservableMedia) {
                const hammertime = new Hammer(elementRef.nativeElement, {});
                hammertime.on('panright', (ev) => {
                  if (ev.pointerType !== 'mouse' && this.media.isActive('xs')) {
                    this.navService.openNav();
                  }
                });
                hammertime.on('panleft', (ev) => {
                  if (ev.pointerType !== 'mouse' && this.media.isActive('xs')) {
                    this.navService.closeNav();
                    // this.appDrawer.close();
                  }
                });
              }

  ngAfterViewInit() {
    this.navService.appDrawer = this.appDrawer;
  }

  onTest() {
    this.navService.closeNav();
  }
}
