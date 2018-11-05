import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObiectiveComponent } from './obiective.component';

describe('ObiectiveComponent', () => {
  let component: ObiectiveComponent;
  let fixture: ComponentFixture<ObiectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObiectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObiectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
