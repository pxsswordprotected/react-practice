const login = async (credentials) => {
  const loggedIn = await axios.post(
    "http://localhost:3001/api/login",
    credentials
  );
  return loggedIn.data;
};

export default { login };
