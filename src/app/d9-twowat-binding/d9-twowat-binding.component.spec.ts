import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D9TwowatBindingComponent } from './d9-twowat-binding.component';

describe('D9TwowatBindingComponent', () => {
  let component: D9TwowatBindingComponent;
  let fixture: ComponentFixture<D9TwowatBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D9TwowatBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D9TwowatBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
