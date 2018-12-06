import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrezentareComponent } from './prezentare.component';

describe('PrezentareComponent', () => {
  let component: PrezentareComponent;
  let fixture: ComponentFixture<PrezentareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrezentareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrezentareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
