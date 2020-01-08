import { Component, OnInit } from '@angular/core';
import { Todo, TodosService } from '../shared/todos.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.sass']
})

export class TodoFormComponent implements OnInit {
  private isModalShow = false
  private title = ''

  constructor(private todosService: TodosService) { }

  ngOnInit() {
  }

  onToggleModalClick() {
    this.isModalShow = !this.isModalShow
  }

  addTodo() {
    if (!this.title) {
      return
    }

    const todo: Todo = {
      title: this.title,
      id: Date.now(),
      finished: false,
      date: new Date()
    };
    this.todosService.addTodo(todo);
    this.title = '';
    this.onToggleModalClick()
  }
}
