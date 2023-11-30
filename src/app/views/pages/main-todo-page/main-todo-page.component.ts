import { ModalService } from '../../../services/modal/modal.service';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { Subscription } from 'rxjs';
import { ModalComponent } from './components/modal/modal.component';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-main-todo-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TodoListComponent, ModalComponent, TitleCasePipe],
  templateUrl: './main-todo-page.component.html',
  styleUrl: './main-todo-page.component.css',
})
export class MainTodoPageComponent implements OnInit, OnDestroy {
  modalSwitch: boolean = false;
  // sortByComplete: boolean = true;
  subscription!: Subscription;

  constructor(private readonly switchService: ModalService) {}

  ngOnInit(): void {
    this.subscription = this.switchService.$modal.subscribe((val) => (this.modalSwitch = val));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  openModal() {
    this.modalSwitch = true;
  }

  // toggleGrouping() {
  //   this.sortByComplete = !this.sortByComplete;
  // }
}
