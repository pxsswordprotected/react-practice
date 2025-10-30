import { useState } from "react";

const Practice = () => {
  const [name, updateName] = useState({
    firstName: "Alex",
    lastName: "Last",
  });

  const changeName = () => {
    updateName((prev) => ({ ...prev, firstName: "James" }));
  };

  const handleAddTwo = () => {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };
};
