/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

export const Todo = ({ todo, onDeleteTodo, onUpdateTodo }) => {
  return (
    <div className="md:w-9/12 w-full mx-auto">
      <p
        className={`md:text-xl text-md text-amber-900 font-bold ${
          todo.isComplete ? "line-through" : ""
        }`}
      >
        <input
          type="checkbox"
          name="isComplete"
          id="isComplete"
          className="me-1"
          checked={todo.isComplete}
          onChange={() => onUpdateTodo(todo.id)}
        />
        {todo.todoName}
        <span className="md:ms-2 ms-1">
          <button onClick={() => onDeleteTodo(todo.id)}>❌</button>
        </span>
      </p>
    </div>
  );
};
