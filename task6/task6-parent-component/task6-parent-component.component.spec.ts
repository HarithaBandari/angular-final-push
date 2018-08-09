import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Task6ParentComponentComponent } from './task6-parent-component.component';

describe('Task6ParentComponentComponent', () => {
  let component: Task6ParentComponentComponent;
  let fixture: ComponentFixture<Task6ParentComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Task6ParentComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Task6ParentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
