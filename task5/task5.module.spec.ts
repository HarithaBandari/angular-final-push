import { Task5Module } from './task5.module';

describe('Task5Module', () => {
  let task5Module: Task5Module;

  beforeEach(() => {
    task5Module = new Task5Module();
  });

  it('should create an instance', () => {
    expect(task5Module).toBeTruthy();
  });
});
