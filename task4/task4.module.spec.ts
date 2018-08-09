import { Task4Module } from './task4.module';

describe('Task4Module', () => {
  let task4Module: Task4Module;

  beforeEach(() => {
    task4Module = new Task4Module();
  });

  it('should create an instance', () => {
    expect(task4Module).toBeTruthy();
  });
});
