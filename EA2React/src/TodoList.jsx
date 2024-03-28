import { TodoItem } from "./TodoItem";

export function TodoList({ todos, toggleTodo, deleteTodo, editTodo }) {
  return (
    <ul className="list">
      {todos.length === 0 && "No Todos"}
      {/* code below returns an array, which is transformed to JSX list items */}
      {/* using todos */}
      {todos.map((todo) => {
        return (
          <TodoItem
            {...todo}
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        );
      })}
    </ul>
  );
}
