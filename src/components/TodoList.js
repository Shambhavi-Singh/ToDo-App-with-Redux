import React from "react";
import TodoItem from "./TodoItem.js";
import { useSelector } from "react-redux";

function TodoList() {
  let todos = useSelector((state) => state);

  return (
    <div className="todolist">
      {todos.map((todo) => {
        return <TodoItem key={todos.id} todo={todo} />;
      })}
    </div>
  );
}

export default TodoList;
