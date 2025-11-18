import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UserGrid from "./UserGrid";
import NoteApp from "./NoteApp";
import FormPracticeOne from "./FormPracticeOne";
import { PracticeOne } from "./Dates";
import Q1 from "./Dates/11-14-25/Q1";

function App() {
  const [count, setCount] = useState(0);
  const num = 10;

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount(count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
          <br />
          {num}
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      {/* <UserGrid />
      <NoteApp />
      <FormPracticeOne /> */}
      <PracticeOne />
      <Q1 buttonLabel="show">
        <p className="underline text-3xl">This is a secret</p>
      </Q1>
      <button className="p-4 border">Click me</button>
      <p className="text-xl font-bold mb-7">Hello world</p>

      <div className="rounded-lg shadow-md bg-white p-4">
        <h2 className="text-lg font-semibold mb-2">Card title</h2>
        <p className="text-sm text-gray-600">Some card content.</p>
      </div>
      <a href="#" className="text-blue-600 hover:text-blue-800 hover:underline">
        Hover me
      </a>
      <div className="flex items-end justify-center gap-4 min-h-80">
        <button className="px-4 py-2 bg-green-600 text-white rounded">
          OK
        </button>
        <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-400">
          Cancel
        </button>
        <button className="btn-primary">Save</button>
      </div>
      <div className="group">
        <img src="..." className="group-hover:opacity-75" />
        <p className="group-hover:opacity-75">Yes</p>
      </div>
      <input className="peer" type="text" placeholder="Name" />
      <p className="hidden peer-focus:block text-sm text-gray-600">
        This is a secret
      </p>
      <div className="bg-gray-300/50 h-40">
        <p className="text-blue-500">Text</p>
      </div>
    </>
  );
}

export default App;
