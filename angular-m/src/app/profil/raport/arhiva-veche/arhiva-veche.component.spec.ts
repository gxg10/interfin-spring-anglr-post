import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArhivaVecheComponent } from './arhiva-veche.component';

describe('ArhivaVecheComponent', () => {
  let component: ArhivaVecheComponent;
  let fixture: ComponentFixture<ArhivaVecheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArhivaVecheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArhivaVecheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
