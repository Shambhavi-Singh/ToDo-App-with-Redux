import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../redux/actions";

function TodoItem({ todo }) {
  const [editable, setEditable] = useState(false);
  const [name, setName] = useState(todo.name);
  let dispatch = useDispatch();

  return (
    <div>
      <div className="task">
        {/* <div>#{todo.id.length > 1 ? todo.id[2] : todo.id}</div> */}
        <div className="todo">
          {editable ? (
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          ) : (
            <h4>{todo.name}</h4>
          )}
        </div>
        <button
          className=""
          onClick={() => {
            dispatch(
              updateTodo({
                ...todo,
                name: name,
              })
            );
            if (editable) {
              setName(todo.name);
            }
            setEditable(!editable);
          }}
        >
          {editable ? "Update" : "Edit"}
        </button>
        <button
          className="btn btn-danger m-2"
          onClick={() => dispatch(deleteTodo(todo.id))}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
