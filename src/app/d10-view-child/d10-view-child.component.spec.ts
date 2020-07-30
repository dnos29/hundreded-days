import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D10ViewChildComponent } from './d10-view-child.component';

describe('D10ViewChildComponent', () => {
  let component: D10ViewChildComponent;
  let fixture: ComponentFixture<D10ViewChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D10ViewChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D10ViewChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
