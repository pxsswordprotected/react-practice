let token = null;

const setToken = (newToken) => {
  token = `Bearer ${newToken}`;
};

const create = async (noteObject) => {
  const config = {
    headers: { Authorization: token },
  };

  const req = await axios.post(
    "http://localhost:3001/api/notes",
    noteObject,
    config
  );
  return req.data;
};

export default { setToken, create };


