import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Task5ParentComponentComponent } from './task5-parent-component.component';

describe('Task5ParentComponentComponent', () => {
  let component: Task5ParentComponentComponent;
  let fixture: ComponentFixture<Task5ParentComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Task5ParentComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Task5ParentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
