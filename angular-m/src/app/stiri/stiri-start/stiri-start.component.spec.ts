import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StiriStartComponent } from './stiri-start.component';

describe('StiriStartComponent', () => {
  let component: StiriStartComponent;
  let fixture: ComponentFixture<StiriStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StiriStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StiriStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
