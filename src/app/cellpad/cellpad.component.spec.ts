import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CellpadComponent } from './cellpad.component';

describe('CellpadComponent', () => {
  let component: CellpadComponent;
  let fixture: ComponentFixture<CellpadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CellpadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CellpadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
