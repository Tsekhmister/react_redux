import { useDispatch, useSelector } from "react-redux";
import { removeTodo, toggleTodo } from "../store";

export const Todolist = () => {
  const todos = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.title}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => dispatch(toggleTodo(todo.id))}
          />{" "}
          {todo.title}{" "}
          <button onClick={() => dispatch(removeTodo(todo.id))} className="btn btn-dark">Delete</button>
        </li>
      ))}
    </ul>
  );
};
