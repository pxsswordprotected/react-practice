import { useState, useEffect } from "react";

export const Question2 = () => {
  const [isLoading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]); //posts will have id, title, caption, etc

  useEffect(() => {
    setLoading(true); //not sure if right placement
    axios.get("https://jsonplaceholder.typicode.com/posts").then((p) => {
      setPosts(p.data);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>

      {isLoading && <p>Loading...</p>}
    </>
  );
};

export default Question2;

// Build a component called PostLoader that:

//     Fetches a list of posts from https://jsonplaceholder.typicode.com/posts when the component first mounts

//     Displays each post's title in a list

//     Shows a loading message ("Loading posts...") while the data is being fetched (Hint: use a separate isLoading state)

//     Only fetches once, even if the component re-renders

// Write the full component. You'll need to use axios (or fetch—your choice). Attempt from memory.
