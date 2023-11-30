import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TodoService } from '../../../../../services/todo/todo.service';
import { Todo } from '../../../../../models/todo.model';
import { Router } from '@angular/router';
import { EllipsisPipe } from '../../../../../pipes/ellipsis.pipe';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [EllipsisPipe],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css',
})
export class TodoItemComponent {
  @Input() todo!: Todo;

  constructor(private readonly todoService: TodoService, private readonly router: Router) {}

  deleteTodo() {
    this.todoService.delete(this.todo.id);
  }

  updateTodo() {
    this.todoService.updateState(this.todo.id);
  }

  goToDetailedView() {
    this.router.navigate(['todos', this.todo.id]);
  }
}
