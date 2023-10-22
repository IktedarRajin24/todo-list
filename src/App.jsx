/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Header } from "./Components/Header/Header";
import { Form } from "./Components/Form/Form";
import { List } from "./Components/List/List";
import { Footer } from "./Components/Footer/Footer";

export default function App() {
  const [todoItems, setTodoItems] = useState([]);
  const handleDeleteTodo = (id) => {
    setTodoItems((items) => items.filter((item) => item.id !== id));
  };
  const handleEditTodo = (id) => {
    setTodoItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, isComplete: !item.isComplete } : item
      )
    );
  };
  const handleClearList = () => {
    const confirmed = window.confirm("Are you sure to delete all your todos?");
    if (confirmed) setTodoItems([]);
  };
  return (
    <div className="h-screen">
      <Header />
      <Form setTodoItems={setTodoItems} />
      <List
        todoItems={todoItems}
        onDeleteTodo={handleDeleteTodo}
        onUpdateTodo={handleEditTodo}
        onClearList={handleClearList}
      />
      <Footer todoItems={todoItems} />
    </div>
  );
}
