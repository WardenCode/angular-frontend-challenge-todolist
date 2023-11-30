import { TodoService } from '../../../services/todo/todo.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../../../models/todo.model';

@Component({
  selector: 'app-detail-todo-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  templateUrl: './detail-todo-page.component.html',
  styleUrl: './detail-todo-page.component.css',
})
export class DetailTodoPageComponent implements OnInit {
  todo!: Todo;

  constructor(private readonly todoService: TodoService, private readonly route: ActivatedRoute, private readonly router: Router) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.getTodoData(id);
  }

  getTodoData(id: number) {
    const result = this.todoService.fetch(id);

    if (result === undefined) this.router.navigateByUrl('404');

    this.todo = result as Todo;
  }
}
