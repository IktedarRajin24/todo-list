/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Todo } from "../Todo/Todo";

export const List = ({
  todoItems,
  onDeleteTodo,
  onUpdateTodo,
  onClearList,
}) => {
  let sortedList;
  const [sortBy, setSortBy] = useState("default");
  sortBy === "default"
    ? (sortedList = todoItems)
    : sortBy === "completion"
    ? (sortedList = todoItems.slice().sort((a, b) => {
        return a.isComplete === b.isComplete ? 0 : a.isComplete ? 1 : -1;
      }))
    : sortBy === "alphabetical"
    ? (sortedList = todoItems.slice().sort((a, b) => {
        return a.todoName.localeCompare(b.todoName);
      }))
    : {};

  return (
    <div className="bg-amber-600 w-full h-3/5 text-center md:py-10 py-10">
      <div className=" grid md:grid-cols-4 grid-cols-3 grid-rows-6  md:gap-y-10 gap-y-5">
        {sortedList.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            onDeleteTodo={onDeleteTodo}
            onUpdateTodo={onUpdateTodo}
          ></Todo>
        ))}
      </div>
      <div className="absolute w-full md:bottom-14 bottom-32">
        <select
          className="md:w-1/12 w-2/5 mx-auto rounded-full md:py-3 py-1 px-2 mb-10"
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="default">Default</option>
          <option value="completion">Sort by completion</option>
          <option value="alphabetical">Sort by alphabetical order</option>
        </select>
        <button
          className="text-black md:text-lg text-md bg-amber-500 font-bold md:py-3 py-1 px-2 rounded-3xl ms-5"
          onClick={onClearList}
        >
          Clear List
        </button>
      </div>
    </div>
  );
};
