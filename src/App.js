import { NewTodo } from "./components/NewTodo";
import { Todolist } from "./components/TodoList,";

function App() {
  return (
    <div className="App">
        <h2>Hello redux todo</h2>
        <NewTodo />
        <Todolist />
    </div>
  );
}

export default App;
