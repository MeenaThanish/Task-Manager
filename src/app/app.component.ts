import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'task';
  tasks = ['task1', 'task2', 'task3', 'task4','task5'];
  InprogressTask=[];
  CompletedTask=[];
  updateProgress(task,state){

if(state=="Inprogress"){
  this.InprogressTask.push(task);
}
else if(state=="completed"){
this.CompletedTask.push(task);
}
  }
}
