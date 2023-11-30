import { Todo } from '../../../../../models/todo.model';
import { ModalService } from '../../../../../services/modal/modal.service';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../../../../../services/todo/todo.service';

@Component({
  selector: 'app-modal',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent {
  titleTouched = false;
  descriptionTouched = false;
  newTodo = {
    title: '',
    description: '',
    completed: false,
  };

  constructor(private readonly modalService: ModalService, private readonly todoService: TodoService) {}

  closeModal() {
    this.modalService.$modal.emit(false);
  }

  addTodo() {
    const newData: Todo = {
      id: this.todoService.lastTodoId + 1,
      ...this.newTodo,
    };

    this.todoService.add(newData);
    this.closeModal();
  }

  onTitleChange() {
    this.titleTouched = true;
  }

  onDescriptionChange() {
    this.descriptionTouched = true;
  }

  isFormValid(): boolean {
    return this.newTodo.title !== '' && this.newTodo.description !== '';
  }
}
