import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D8OuputBindingComponent } from './d8-ouput-binding.component';

describe('D8OuputBindingComponent', () => {
  let component: D8OuputBindingComponent;
  let fixture: ComponentFixture<D8OuputBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D8OuputBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D8OuputBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
