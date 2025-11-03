import UserItem from "./UserItem";
import { useState } from "react";

const UserGrid = () => {
  const users = [
    { id: 1, name: "james", email: "jamea221@gmail.com" },
    { id: 2, name: "Bob", email: "bob@example.com" },
    { id: 3, name: "Charlie", email: "charlie@example.com" },
  ];

  return (
    <div>
      {users.map((user) => (
        <UserItem key={user.id} name={user.name} email={user.email} />
      ))}
    </div>
  );
};

export default UserGrid;
