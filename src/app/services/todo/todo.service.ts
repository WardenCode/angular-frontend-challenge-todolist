import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Todo } from '../../models/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private readonly todosFakeData: Todo[] = [
    {
      id: 1,
      title: 'Complete Monthly Report',
      description: "Review last month's data, analyze trends, and draft a detailed report for executive presentation.",
      completed: true,
    },
    {
      id: 2,
      title: 'Prepare Client Presentation',
      description: 'Create a visually appealing presentation highlighting key project points and addressing specific client needs.',
      completed: true,
    },
    {
      id: 3,
      title: 'Review Code for New Module',
      description:
        'Conduct a thorough review of newly developed code, identify potential improvements, and ensure compliance with coding standards.',
      completed: false,
    },
    {
      id: 4,
      title: 'Organize Team Meeting',
      description: 'Coordinate the agenda, send invitations, and prepare necessary documentation for an effective team meeting.',
      completed: true,
    },
    {
      id: 5,
      title: 'Research New Technologies',
      description:
        'Explore the latest technological trends relevant to the current project, assessing their applicability and potential benefits.',
      completed: false,
    },
    {
      id: 6,
      title: 'Purchase Office Supplies',
      description: 'Take inventory of current office supplies, identify needs, and make purchases to maintain efficient workflow.',
      completed: false,
    },
    {
      id: 7,
      title: 'Plan Company Event',
      description:
        'Organize all logistical details, from venue selection to activity coordination, to ensure the success of a company event.',
      completed: true,
    },
    {
      id: 8,
      title: 'Set Up Backup System',
      description: 'Evaluate and enhance the current backup strategy to ensure the secure and efficient recovery of critical data.',
      completed: true,
    },
    {
      id: 9,
      title: 'Design UI for New Project',
      description:
        'Collaborate with the design team to create an intuitive and appealing user interface that enhances the user experience.',
      completed: false,
    },
    {
      id: 10,
      title: 'Coordinate Staff Training',
      description: "Develop an effective training program, identify training needs, and coordinate sessions to improve the team's skills.",
      completed: false,
    },
  ];
  private todosObservablePrivate: BehaviorSubject<Todo[]> = new BehaviorSubject<Todo[]>(this.todosFakeData);
  private actualId: number = this.todosFakeData.length;

  add(newTodo: Todo) {
    const currentTodos = this.todosObservablePrivate.getValue() || [];
    const updatedTodos = [...currentTodos, newTodo];
    this.updateTodos(updatedTodos);
    this.actualId++;
  }

  delete(todoId: number) {
    const currentTodos = this.todosObservablePrivate.getValue() || [];
    const updatedTodos = currentTodos.filter((todo) => todo.id !== todoId);
    this.updateTodos(updatedTodos);
  }

  fetch(id: number) {
    const currentTodos = this.todosObservablePrivate.getValue() || [];
    const todoFound = currentTodos.find((todo) => todo.id === id);

    return todoFound;
  }

  get lastTodoId() {
    return this.actualId;
  }

  updateState(id: number) {
    const currentTodos = this.todosObservablePrivate.getValue() || [];
    const updatedTodos = currentTodos.map((todo) => {
      if (todo.id === id) todo.completed = !todo.completed;
      return todo;
    });

    this.updateTodos(updatedTodos);
  }

  private updateTodos(todos: Todo[]) {
    this.todosObservablePrivate.next(todos);
  }

  get todosObservable() {
    return this.todosObservablePrivate.asObservable();
  }

  // getSortedTodos(sortByComplete: boolean): Observable<Todo[]> {
  //   return this.todosObservable.pipe(
  //     map((todos) => {
  //       const completedTodos = todos.filter((todo) => todo.completed);
  //       const incompleteTodos = todos.filter((todo) => !todo.completed);

  //       return sortByComplete ? [...completedTodos, ...incompleteTodos] : [...incompleteTodos, ...completedTodos];
  //     })
  //   );
  // }
}
