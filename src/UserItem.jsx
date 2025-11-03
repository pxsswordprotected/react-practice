const UserItem = ({ name, email }) => {
  return (
    <>
      <strong>Welcome {name}</strong>
      <p>Email: {email}</p>
    </>
  );
};

export default UserItem;
