/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";

export const Form = ({ setTodoItems }) => {
  const [todoName, setTodoName] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const todo = { id: Date.now(), todoName, isComplete };
    setTodoItems((todos) => [...todos, todo]);
  };

  return (
    <div className="bg-amber-800 md:py-12 h-1/6 flex  py-5 w-full px-3 ">
      <form
        className="flex items-center md:w-1/2 w-11/12 mx-auto justify-center"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="todo-name"
          id="todo-name"
          placeholder="What to do?"
          className="rounded-full md:px-3 px-1 md:py-2 py-1 md:me-10 me-2 md:w-1/2 w-8/12"
          onChange={(e) => setTodoName(e.target.value)}
        />
        <input
          type="checkbox"
          name="isComplete"
          id="isComplete"
          className="me-1"
          onChange={(e) => setIsComplete(e.target.checked)}
        />
        <span className="md:text-xl text-sm text-white md:me-10 me-2">
          Completed
        </span>
        <input
          type="submit"
          value="Add"
          className="text-black md:text-lg text-sm bg-amber-500 font-bold md:px-3 px-2 md:py-2 py-1 rounded-3xl"
        />
      </form>
    </div>
  );
};
