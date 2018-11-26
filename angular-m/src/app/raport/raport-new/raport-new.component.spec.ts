import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaportNewComponent } from './raport-new.component';

describe('RaportNewComponent', () => {
  let component: RaportNewComponent;
  let fixture: ComponentFixture<RaportNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaportNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaportNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
