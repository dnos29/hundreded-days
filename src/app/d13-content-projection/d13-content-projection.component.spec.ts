import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D13ContentProjectionComponent } from './d13-content-projection.component';

describe('D13ContentProjectionComponent', () => {
  let component: D13ContentProjectionComponent;
  let fixture: ComponentFixture<D13ContentProjectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D13ContentProjectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D13ContentProjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
