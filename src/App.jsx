import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UserGrid from "./UserGrid";
import NoteApp from "./NoteApp";
import FormPracticeOne from "./FormPracticeOne";
import { PracticeOne } from "./Dates";
import Q1 from "./Dates/11-14-25/Q1";
// import Q1Alert f./Dates/11-18-25/Q1Alert25/Q1Alert";
import Q3TaskTagger from "./Dates/11-18-25/Q3TaskTagger";
import Q4UseEffect from "./Dates/11-18-25/Q4UseEffect";
import Q6ThemeProvider from "./Dates/11-18-25/Q6ThemeProvider";

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
      <div className="container mx-auto px-4 border">
        Content constrained to readable width and centered Content constrained
        to readable width and centeredContent constrained to readable width and
        centeredContent constrained to readable width and centered
      </div>

      <button className="focus:ring-4 focus:ring-red-300">
        Click me (shows ring on focus)
      </button>

      <button className="bg-blue-600 hover:bg-blue-700 transition duration-300 ease-in-out">
        Smooth color change
      </button>

      {/* <div className="animate-spin">a</div>*/}
      {/* <Q1Alert status="active">Success</Q1Alert>*/}
      <Q3TaskTagger />
      <Q4UseEffect />
      <Q6ThemeProvider />
    </>
  );
}

export default App;
