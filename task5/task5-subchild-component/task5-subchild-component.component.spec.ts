import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Task5SubchildComponentComponent } from './task5-subchild-component.component';

describe('Task5SubchildComponentComponent', () => {
  let component: Task5SubchildComponentComponent;
  let fixture: ComponentFixture<Task5SubchildComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Task5SubchildComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Task5SubchildComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
