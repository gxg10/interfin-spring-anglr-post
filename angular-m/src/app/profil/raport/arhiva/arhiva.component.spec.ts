import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArhivaComponent } from './arhiva.component';

describe('ArhivaComponent', () => {
  let component: ArhivaComponent;
  let fixture: ComponentFixture<ArhivaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArhivaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArhivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
