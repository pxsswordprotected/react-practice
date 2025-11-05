import React, { useEffect, useState } from "react";

const Question4 = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [success, setSuccess] = useState(null);
  const controller = useRef(new AbortController());

  const fetchHandle = () => {
    setLoading(true);
    setSuccess(null);
    axios
      .get("https://jsonplaceholder.typicode.com/users", {
        signal: controller.current.signal,
      })
      .then((response) => {
        setUsers(response.data);
        setSuccess(true);
        setLoading(false);
      })
      .catch((error) => {
        if (axios.isCancel(error)) {
          setSuccess(false);
          setLoading(false);
          console.log("Request canceled");
        }
      });
  };

  const cancelRequest = () => {
    controller.current?.abort();
    controllerRef.current = new AbortController();
  };

  return (
    <>
      {loading && <p>Loading...</p>}
      <button onClick={fetchHandle}>fetch data</button>
      <button onClick={cancelRequest}>Cancel</button>

      {success === true &&
        users.map((user) => {
          <li key={user.id}>{user.name}</li>;
        })}

      {success === false && <p>Fetch cancelled</p>}
    </>
  );
};

export default Question4;

//     Has two buttons: "Fetch Data" and "Cancel"

//     When "Fetch Data" is clicked, it starts fetching from https://jsonplaceholder.typicode.com/users and displays
// "Fetching..." while loading

//     If the user clicks "Cancel" before the fetch completes, it should stop waiting for the data (the fetch aborts)

//     If the fetch completes successfully, display the list of user names

//     If the fetch is cancelled, display "Fetch cancelled"

// You'll need to research or recall how to cancel an axios request. (Hint: look into AbortController or axios' CancelToken).
// Write the full component with proper cleanup.
