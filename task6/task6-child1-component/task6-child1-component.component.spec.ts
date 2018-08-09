import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Task6Child1ComponentComponent } from './task6-child1-component.component';

describe('Task6Child1ComponentComponent', () => {
  let component: Task6Child1ComponentComponent;
  let fixture: ComponentFixture<Task6Child1ComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Task6Child1ComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Task6Child1ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
