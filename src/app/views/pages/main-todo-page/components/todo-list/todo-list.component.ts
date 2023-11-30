import { TodoService } from '../../../../../services/todo/todo.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Todo } from '../../../../../models/todo.model';
import { AsyncPipe, NgFor } from '@angular/common';
import { TodoItemComponent } from '../todo-item/todo-item.component';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgFor, AsyncPipe, TodoItemComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent implements OnInit {
  // @Input() sortByComplete: boolean = true;
  data$: Observable<Todo[]> = of([]);

  constructor(private readonly todoService: TodoService) {}

  ngOnInit() {
    this.updateTodos();
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   this.updateTodos();
  // }

  updateTodos() {
    this.data$ = this.todoService.todosObservable;
    // this.data$ = this.todoService.todosObservable.pipe(
    //   map((todos) => {
    //     console.log(todos);
    //     return todos.sort((a, b) => {
    //       return a.completed === b.completed ? 0 : a.completed ? -1 : 1;
    //       if (this.sortByComplete) return a.completed === b.completed ? 0 : a.completed ? -1 : 1;
    //       return a.completed === b.completed ? 0 : a.completed ? 1 : -1;
    //     });
    //     return todos;
    //   })
    // );
  }

  trackByFn(index: number, item: Todo) {
    return item.id;
  }
}
