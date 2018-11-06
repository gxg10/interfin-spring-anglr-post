import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContNouComponent } from './cont-nou.component';

describe('ContNouComponent', () => {
  let component: ContNouComponent;
  let fixture: ComponentFixture<ContNouComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContNouComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContNouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
