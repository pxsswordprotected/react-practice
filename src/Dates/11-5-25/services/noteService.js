import axios from "axios";

const baseUrl = "http://api.example.com/notes";

const getAll = () => axios.get(baseUrl);

const create = (newObject) => axios.post(baseUrl, newObject);

const update = (id, updatedObject) =>
  axios.put("${baseUrl/${id}", updatedObject);

const remove = (id) => axios.delete("${baseUrl/${id}");

export default { getAll, create, update, remove };
