import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Task6Child2ComponentComponent } from './task6-child2-component.component';

describe('Task6Child2ComponentComponent', () => {
  let component: Task6Child2ComponentComponent;
  let fixture: ComponentFixture<Task6Child2ComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Task6Child2ComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Task6Child2ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
