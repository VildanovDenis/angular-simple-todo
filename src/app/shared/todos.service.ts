import { Injectable } from '@angular/core';

export interface Todo {
  id: number
  title: string
  finished: boolean
  date?: any
}

@Injectable({providedIn: 'root'})
export class TodosService {
  public todos: Todo[] = [
    {id: 1, title: 'eat', finished: true, date: new Date()},
    {id: 2, title: 'sleep', finished: false, date: new Date()},
    {id: 3, title: 'jdm', finished: false, date: new Date()},
  ]

  onToggle(id: number) {
    const index = this.todos.findIndex(todo => todo.id === id);
    this.todos[index].finished = !this.todos[index].finished
  }

  removeTodo(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id)
  }
}
