import { useEffect, useState } from "react";
import axios from "axios";

const FetchingPractice = ({ userID }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get(`https://api.example.com/user/${userId}`).then((r) => {
      setUser(r.data);
    });
  }, [userID]);

  return <></>;
};

export default FetchingPractice;
