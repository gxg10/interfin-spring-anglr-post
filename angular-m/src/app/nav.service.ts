import {EventEmitter, Injectable, Output} from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class NavService {
  public appDrawer: any;

  coll = new Subject<boolean>();

  constructor() {
  }

  public closeNav() {
    this.coll.next(false);
    this.appDrawer.close();
  }

  public openNav() {
    this.coll.next(true);
    this.appDrawer.open();
  }
}
