import "./App.css";
import TodoInput from "./components/TodoInput.js";
import TodoList from "./components/TodoList.js";

function App() {
  return (
    <div className="todobox">
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default App;
