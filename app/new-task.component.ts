import {Component, EventEmitter} from 'angular2/core';
import {Task} from './task.model';

@Component({
  selector: 'new-task',
  outputs: ['onSubmitNewTask'],
  template: `
  <div class="task-form">
    <h3>Create Task:</h3>
    <button (click)="addTask(newDescription)" class="btn-success btn-lg add-button">Add</button>
    <input placeholder="Description" class="col-sm-8 input-lg" #newDescription>
  </div>
  `
})
export class NewTaskComponent {
  public onSubmitNewTask: EventEmitter<String>;
  constructor(){
    this.onSubmitNewTask = new EventEmitter();
  }
  addTask(userDescription: HTMLInputElement) {
    this.onSubmitNewTask.emit(userDescription.value);
    userDescription.value = "";
  }
}
