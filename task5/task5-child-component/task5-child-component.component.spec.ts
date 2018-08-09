import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Task5ChildComponentComponent } from './task5-child-component.component';

describe('Task5ChildComponentComponent', () => {
  let component: Task5ChildComponentComponent;
  let fixture: ComponentFixture<Task5ChildComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Task5ChildComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Task5ChildComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
