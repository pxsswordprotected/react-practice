import { useEffect, useState } from "react";
import axios from "axios";

const Q4UseEffect = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((p) => setUsers((prevUsers) => [...prevUsers, ...p.data]))
        .finally(() => setLoading(false));
    }, 3000);
  }, []);

  return (
    <>
      <div className="text-center">
        {isLoading && <p className="animate-pulse">Loading...</p>}
      </div>
      {!isLoading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {users.map((user) => (
            <div key={user.id}>{user.name}</div>
          ))}
        </div>
      )}
    </>
  );
};

export default Q4UseEffect;

/*
Your Task: Create a component called UserGallery.

    State: Initialize state for users (empty array) and loading (boolean true).

    Effect: On mount (only once), use axios.get (or fetch) to get data from https://jsonplaceholder.typicode.com/users.

    Logic:

        Wait for the data.

        Update the users state with the result.

        Set loading to false.

    UI:

        If loading is true, display a centered text saying "Loading..." with Tailwind animate-pulse.

        If loaded, display the users.

        Responsive Constraint: On mobile, show 1 column. On small tablets (sm), 2 columns. On laptops (md), 3 columns.
*/
