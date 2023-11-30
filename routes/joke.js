const express = require("express");
const request = require("request");
const router = express.Router();

/* GET users listing. */
const options = {
  url: "https://icanhazdadjoke.com/",
  headers: {
    "Content-Type": "application/json",
  },
  json: true,
};
router.get("/", function (req, res, next) {
  request(options, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      const status = 200;
      console.log(body);
      res.status(status).json(body);
    } else {
      // エラーの時
      const statusCode = error ? 502 : response.statusCode;
      const message = error ? "接続に失敗" : "エラーレスポンス受け取り";
      res.status(statusCode).json(message);
    }
  });
});

module.exports = router;
