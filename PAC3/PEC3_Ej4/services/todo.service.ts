import { Todo } from '../models/todo.model';

export class TodoService {
  todos: Todo[];
  onTodoListChanged: (todos: Todo[]) => void;

  constructor() {
    this.todos = (JSON.parse(localStorage.getItem("todos") || '[]') as Partial<Todo>[]).map(
      todo => new Todo(todo)
    );
    this.onTodoListChanged = () => {};
  }

  public getTodos(): Todo[] {
    return this.todos;
  }

  bindTodoListChanged(callback: (todos: Todo[]) => void) {
    this.onTodoListChanged = callback;
  }

  _commit(todos: Todo[]) {
    this.onTodoListChanged(todos);
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  addTodo(text: string) {
    this.todos.push(new Todo({ text }));

    this._commit(this.todos);
  }

  editTodo(id: string, updatedText: string) {
    this.todos = this.todos.map(todo =>
      todo.id === id
        ? new Todo({
            ...todo,
            text: updatedText
          })
        : todo
    );

    this._commit(this.todos);
  }

  deleteTodo(id: string) {
    this.todos = this.todos.filter(todo => todo.id !== id);

    this._commit(this.todos);
  }

  toggleTodo(id: string) {
    this.todos = this.todos.map(todo =>
      todo.id === id ? new Todo({ ...todo, complete: !todo.complete }) : todo
    );

    this._commit(this.todos);
  }
}
