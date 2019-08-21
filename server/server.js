//const bodyParser = require("body-parser");
const cors = require('cors');
const express = require('express');
const app = express();
const axios = require("axios");


app.use(express.json());

 //app.use(bodyParser.json());
 //app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());


app.get("/", (req, res) => {
  res.send("Working express server .....");
});

app.get("/component/:usernameGithub", (req, res, next) => {
  let username = encodeURIComponent(req.params.usernameGithub);
   console.log(username);
  let url = `http://api.github.com/users/${username}/repos`;
  axios.get(url).then(response => {
    res.json(response.data);
    console.log(response.data);
  });
});

const PORT = 8000;
app.listen(PORT, () => console.log(`listen to port ${PORT}`));