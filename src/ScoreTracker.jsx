import { useState } from "react";

const ScoreTracker = () => {
  const [user, setUser] = useState({
    name: "james",
    age: 21,
    email: "scvr@gmail.com",
  });

  const names = ["first", "second", "third"];
  const emails = ["first@gmail.com", "second@gmail.com"];

  return (
    <>
      <p>
        {user.name}, {user.age}, {user.email}
      </p>
      <button onClick={() => setUser((prev) => ({ ...prev, name: "Two" }))}>
        Change Name
      </button>
      <button onClick={() => setUser((prev) => ({ ...prev, age: age + 1 }))}>
        inc age
      </button>
      <button
        onClick={() =>
          setUser((prev) => ({ ...prev, email: "seggg3@gmail.com" }))
        }
      >
        Change email
      </button>
    </>
  );
};
export default ScoreTracker;
