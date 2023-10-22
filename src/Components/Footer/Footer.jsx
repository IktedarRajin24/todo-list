/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

export const Footer = ({ todoItems }) => {
  const totalTodos = todoItems.length;
  const completedTodos = todoItems
    .map((todo) => todo.isComplete)
    .filter((i) => i === true).length;
  const percentage = (completedTodos / totalTodos) * 100;
  if (totalTodos === 0)
    return (
      <footer className="bg-blue-300 md:py-5 py-2 text-center text-amber-700 font-bold md:text-xl text-md">
        <em>Start Adding Your Todos Now... 💥</em>
      </footer>
    );
  if (percentage === 100)
    return (
      <footer className="bg-blue-300 md:py-5 py-2 text-center text-amber-700 font-bold md:text-xl text-md">
        <em>Everything is done . Nice.</em>✅
      </footer>
    );
  return (
    <footer className="bg-blue-300 md:py-5 py-2 text-center text-amber-700 font-bold md:text-xl text-md">
      <em>
        You have {totalTodos} things to do and you have done {completedTodos}{" "}
        things. ({Math.round(percentage)}%)
      </em>
    </footer>
  );
};
