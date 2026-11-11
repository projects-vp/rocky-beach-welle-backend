const express = require("express");
const request = require("request");
const cors = require("cors");
const app = express();

app.use(cors());
require("dotenv").config();

const client_id = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;

let currentAccessToken = null;

app.get("/refresh_token", function (req, res) {
  var authOptions = {
    url: "https://accounts.spotify.com/api/token",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic " +
        Buffer.from(client_id + ":" + client_secret).toString("base64"),
    },
    form: {
      grant_type: "client_credentials",
    },
    json: true,
    timeout: 10000,
  };

  request.post(authOptions, function (error, response, body) {
    if (
      !error &&
      response &&
      response.statusCode === 200 &&
      body &&
      typeof body.access_token === "string" &&
      body.access_token
    ) {
      currentAccessToken = body.access_token;
      res.send({
        access_token: currentAccessToken,
      });
    } else {
      const status =
        response && response.statusCode >= 400 && response.statusCode <= 599
          ? response.statusCode
          : 502;

      res.status(status).json({
        error: "spotify_token_error",
        message: "Spotify-Zugriffstoken konnte nicht geladen werden.",
      });
    }
  });
});

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
