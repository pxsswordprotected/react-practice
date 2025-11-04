import { useEffect, useState } from "react";
import axios from "axios";

const FetchingPractice = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://api.example.com/user/1")
      .then((data) => {
        console.log("data arrived:", data);
        setUser(data.user);
        setLoading(false);
      })
      .catch((err) => {
        console.log("there was an error:", err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (err) return <p>Error: {error}</p>;

  return (
    <>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </>
  );
};

export default FetchingPractice;
