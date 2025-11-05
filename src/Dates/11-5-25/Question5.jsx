import React, { useEffect, useState } from "react";
import axios from "axios";

const Question5 = () => {
  const [isLoading, setLoading] = useState(false);
  const [userID, setUserID] = useState("");
  const [error, setError] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (!userID) return;
    setLoading(true);

    const controller = new AbortController();

    axios
      .get(`https://jsonplaceholder.typicode.com/posts?userId=${userID}`, {
        signal: controller.signal,
      })
      .then((p) => {
        setPosts(p.data);
        setLoading(false);
      })
      .catch((e) => {
        if (!axios.isCancel(e)) {
          setError(e.message);
          setLoading(false);
        }
      });

    return () => {
      controller.abort();
    };
  }, [userID]);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error:{error}</p>}
      <label htmlFor="555">Select User</label>
      <select
        id="555"
        name="selected-user"
        onChange={(e) => setUserID(e.target.value)}
      >
        <option value="">Select a user...</option>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((user) => {
          <option key={user} value={user}>
            User {user}
          </option>;
        })}
      </select>
      <ul>
        {posts.length !== 0 &&
          posts.map((post) => {
            <li key={post.id}>{post.title}</li>;
          })}
      </ul>
    </>
  );
};

export default Question5;

// Build a component called UserPostFeed that:

//     Displays a dropdown to select a user ID (1-10)

//     When a user is selected, fetch all posts by that user from https://jsonplaceholder.typicode.com/posts?userId={id}

//     Display the posts' titles and bodies

//     Show loading state while fetching

//     Show error state if the fetch fails

//     Important: If the user changes their selection before the previous fetch completes, the old fetch result should NOT overwrite the
//      new one (hint: think about race conditions and cleanup)
