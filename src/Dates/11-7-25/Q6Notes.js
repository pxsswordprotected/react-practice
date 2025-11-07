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

// Create a services/notes.js file with:

//     A private token variable (initialized to null)

//     A setToken(newToken) function that stores Bearer ${newToken}

//     A create(noteObject) function that:

//         Creates a config object with an Authorization header containing the token

//         Uses axios.post('http://localhost:3001/api/notes', noteObject, config) to send the request

//         Returns response.data
