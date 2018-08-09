import { Task6Module } from './task6.module';

describe('Task6Module', () => {
  let task6Module: Task6Module;

  beforeEach(() => {
    task6Module = new Task6Module();
  });

  it('should create an instance', () => {
    expect(task6Module).toBeTruthy();
  });
});
