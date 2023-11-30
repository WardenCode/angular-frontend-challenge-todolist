### Angular Front-End Developer Challenge: Todo List Application

**Objective:** Create a simple Todo List application using Angular.

**Requirements:**

1. **Component Structure:**

   - Create at least three components: `AppComponent` (root component), `TodoListComponent` (to display the list of todos), and `TodoItemComponent` (to display a single todo item).

2. **Model:**

   - Define a Todo model with properties such as `id`, `title`, `description`, and `completed`.

3. **Service:**

   - Implement a `TodoService` that provides methods to add, delete, and fetch todo items. Optionally, use RxJS Observables for data handling.

4. **State Management:**

   - Manage the state of todos in the `TodoService`. Use Angular's dependency injection to provide the service to components.

5. **Event Handling and Data Binding:**

   - Use event binding to handle actions like adding, completing, and deleting todos.
   - Use two-way data binding for form inputs to add new todos.

6. **Routing (Optional):**

   - Implement routing to navigate between different views, such as a home view and a detailed view for each todo.

7. **Styling:**

   - Apply basic CSS styling to make the UI presentable. Use Angular's encapsulated component styles.

8. **Validation:**
   - Implement simple form validation to ensure that the todo title is not empty.

**Bonus:**

- Add unit tests using Angular's testing framework.
- Implement a feature to filter todos based on their completion status.
