import { useState } from "react";

const AsyncStateDemo = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const loggedInn = () => {
    setLoggedIn(!loggedIn);
  };

  return (
    <div>
      <p>are you logged in?</p>
      {loggedIn ? <p>logged in!</p> : <p>not logged in!</p>}
      <button onClick={loggedInn}>{loggedIn ? "Logout" : "Login"}</button>
    </div>
  );
};

export default AsyncStateDemo;
