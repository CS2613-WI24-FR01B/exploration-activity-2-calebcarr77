import { useEffect, useState } from "react";
import "reactjs-popup/dist/index.css";
import { NewTodoForm } from "./NewTodoForm";
import "./syles.css";
import { TodoList } from "./TodoList";

export default function App() {
  //HOOKS:

  /*useState is checking local storage to get todos,
  if none are in localStorage, [] is returned */
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];
    return JSON.parse(localValue);
  });

  /* Everytime any values to todos array change,
  saves values in todos in local storage */
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);

  /* edit useState */
  const [edit, setEdit] = useState(false);

  //HELPER FUNCTIONS:

  function addTodo(title) {
    //passes in currentTodo values
    setTodos((currentTodos) => {
      return [
        //returns currentTodos values as well as adding the new todo
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  }

  //Check off a todo
  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id == id) {
          //create new todo, changing completed property
          return { ...todo, completed };
        }
        //if id does not match:
        return todo;
      });
    });
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => {
      //if todo.id does not equal passed in id, keep it, else remove it
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  function editTodo(id, newTitle) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id == id) {
          //create new todo, changing title property
          return { ...todo, title: newTitle };
        }
        //if id does not match:
        return todo;
      });
    });
  }

  //RETURN JSX:

  return (
    /* 
    this fragment (<></>) allows multiple 
    elements to be returned from a component 
    */
    <>
      {/* passing addToDo function as a prop */}
      <NewTodoForm onSubmit={addTodo} />
      {/* h1 is the todo list header */}
      <h1 className="header">Todo List</h1>

      <TodoList
        todos={todos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
      />
    </>
  );
}
