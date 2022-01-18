const url = require("url");
const express = require("express");
const router = express.Router();
const needle = require("needle");
const apicache = require("apicache");

const REACT_APP_GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const REACT_APP_GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

// Init cache
let cache = apicache.middleware;

router.get("/", cache("2 minutes"), async (req, res) => {
  try {
    const params = new URLSearchParams({
      ...url.parse(req.url, true).query,
    });

    const githubRes = await needle(
      "get",
      `${REACT_APP_GITHUB_URL}/search/users?${params}`,
      {
        headers: { authorization: `token ${REACT_APP_GITHUB_TOKEN}` },
      }
    );
    const data = githubRes.body;

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
