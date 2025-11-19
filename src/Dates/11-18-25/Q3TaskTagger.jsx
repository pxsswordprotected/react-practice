import { useState } from "react";

const Q3TaskTagger = () => {
  const [listTasks, setList] = useState([]);
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setList([...listTasks, { id: Date.now(), text: task }]);
    setTask("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="enter"
        />
        <button type="submit">Add</button>
      </form>

      <div className="grid grid-cols-2 gap-4">
        {listTasks.map((task) => (
          <div key={task.id} className="shadow p-4 bg-white">
            <p className="text-black">{task.text}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Q3TaskTagger;

/*
Your Task: Build a "Task Tagger" app.

    State: Manage a list of tasks. Each task object has an id and text.

    Form: An input field and an "Add" button.

        The input must be a controlled component (value tied to state).

        Prevent the default HTML form submit behavior.

    Display: Render the list of tasks using .map().

        Crucial: You must use a proper key.

        Styling: Display them in a CSS Grid (grid grid-cols-2 or similar) with a gap. Each task should look like a card (shadow, p-4, bg-white).

    Constraint: Do not mutate the array. Use concat or the spread syntax [...] to add new items.
*/
