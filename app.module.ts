import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';

import { Task1Component } from './task1/task1.component';
import { Task2Component } from './task2/task2.component';
import { Task3Component } from './task3/task3.component';
import { ChildComponentComponent } from './task3/child-component/child-component.component';

import { Task4Module } from './task4/task4.module';
import { ParentComponentComponent } from './task4/parent-component/parent-component.component';
import { Task5Module } from './task5/task5.module';
import { Task6Module } from './task6/task6.module';
import { Task6Child1ComponentComponent } from './task6/task6-child1-component/task6-child1-component.component';

@NgModule({
  declarations: [
    AppComponent,
    Task1Component,
    Task2Component,
    Task3Component,
    ChildComponentComponent
  
  ],
  imports: [
    BrowserModule,
    Task4Module,
    Task5Module,
    Task6Module
  ],
  providers: [Task6Child1ComponentComponent],
  bootstrap: [AppComponent],
  schemas : [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
