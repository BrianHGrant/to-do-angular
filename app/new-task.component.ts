import {Component, EventEmitter} from 'angular2/core';
import {Task} from './task.model';

@Component({
  selector: 'new-task',
  outputs: ['onSubmitNewTask'],
  template: `
  <div class="task-form">
    <h3>Create Task:</h3>
    <button (click)="addTask(newDescription, newPriority, newCategory)" class="btn-success btn-lg add-button">Add</button>
    <input class="col-sm-8 input-lg" #newDescription>
    <select class="filter" #newPriority>
      <option>High</option>
      <option selected="selected">Medium</option>
      <option>Low</option>
    </select>
    <select class="filter" #newCategory>
      <option>Work</option>
      <option selected="selected">Hobby</option>
      <option>Home</option>
    </select>

  </div>
  `
})
export class NewTaskComponent {
  public onSubmitNewTask: EventEmitter<String[]>;
  constructor(){
    this.onSubmitNewTask = new EventEmitter();
  }
  addTask(userDescription: HTMLInputElement, userPriority: HTMLInputElement, userCategory: HTMLInputElement) {
    console.log(userPriority);
    this.onSubmitNewTask.emit([userDescription.value, userPriority.value, userCategory.value]);
    userDescription.value = "";
    userPriority.value = "";
    userCategory.value = "";
  }
  // addPriorityValue(userPriority: HTMLInputElement) {
  //   this.onSubmitNewTask.emit(userPriority.value);
  //   userPriority.value = "";
  //   console.log("something is happening");
  // }
}
//
// <div class="radio" #newCategory>
//   <label><input value="Work" type="radio" name="optradio">Work</label>
//   <label><input value="Hobby" type="radio" name="optradio">Hobby</label>
//   <label><input value="Home" type="radio" name="optradio">Home</label>
// </div>
