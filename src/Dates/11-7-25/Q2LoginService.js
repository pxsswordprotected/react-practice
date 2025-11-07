import React from "react";
import axios from "axios";

const Q2LoginService = () => {
  const baseUrl = "http://localhost:3001/api/login";

  const login = async (creds) => {
    const promise = await axios.post(baseUrl, creds);
    return promise.data;
  };
};

export default Q2LoginService;
