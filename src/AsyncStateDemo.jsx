import { useState } from "react";

function AsyncStateDemo() {
  const [count, setCount] = useState(0);

  function handleClick() {
    console.log("Before update:", count);
    setCount(count + 1);
    console.log("After update (same render):", count);

    // Try logging after a short delay
    setTimeout(() => {
      console.log("After timeout:", count); // Still old value in closure
    }, 0);
  }

  return (
    <div>
      <h2>Async State Demo</h2>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

export default AsyncStateDemo;
