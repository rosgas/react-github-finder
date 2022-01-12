const PORT = 8000;
const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.json("Hi, Ross");
});

app.get("/users", (req, res) => {
  const fetchUsers = {
    method: "GET",
    url: `${process.env.REACT_APP_GITHUB_URL}/users`,
    headers: {
      Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
    },
  };

  axios
    .request(fetchUsers)
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
});

app.listen(8000, () => console.log(`Server is running at port ${PORT}`));
