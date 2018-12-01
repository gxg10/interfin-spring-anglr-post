import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaportStartComponent } from './raport-start.component';

describe('RaportStartComponent', () => {
  let component: RaportStartComponent;
  let fixture: ComponentFixture<RaportStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaportStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaportStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
