import { useState } from "react";

const FilterPractice = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Buy milk", done: false, priority: "high" },
    { id: 2, text: "Walk dog", done: true, priority: "low" },
    { id: 3, text: "Call mom", done: false, priority: "high" },
  ]);

  const [filterType, setFilter] = useState("all");

  const DisplayTodos =
    filterType === "completed"
      ? todos.filter((item) => item.done === true)
      : filterType === "incomplete"
      ? todos.filter((item) => item.done === false)
      : filterType === "high-priority"
      ? todos.filter((item) => item.priority === "high")
      : todos;

  return (
    <>
      <button onClick={() => setFilter("all")}>All</button>
      <button onClick={() => setFilter("completed")}>Sort By Completed</button>
      <button onClick={() => setFilter("incomplete")}>
        Sort By Incomplete
      </button>
      <button onClick={() => setFilter("high-priority")}>
        Sort By High Priority
      </button>

      <ul>
        {DisplayTodos.map((item) => {
          <li key={item.id}>{item.text}</li>;
        })}
      </ul>
    </>
  );
};

export default FilterPractice;
