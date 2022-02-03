const { default: axios } = require("axios");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var userInput = '"forza-mini-target-goal-only"';
let graphQLData = {};
var initialData = {};

async function getData(input) {
  input = userInput;
  await axios
    .get(
      "https://www.greenbowsports.co.uk/graphql?query={products(search: " +
        input +
        "){items {name short_description {html} id sku image {url} price {regularPrice{ amount {value currency}}}}}}"
    )
    .then((response) => {
      console.log(response.data.data.products);
      graphQLData = response.data.data.products;
      initialData = response.data.data.products;
    })
    .catch((error) => {
      graphQLData = {
        items: [],
      };
      console.log(error);
    });
}

app.post("/search", (req, res) => {
  console.log("POST request received");
  userInput = '"' + req.body.input + '"';
  getData().then(() => {
    // If there are items in the array
    if (graphQLData.items) {
      res.json(graphQLData);
      // If not
    } else {
      res.json({
        items: [],
      });
      graphQLData = initialData;
    }
  });
});

app.get("/index", (req, res) => {
  res.json(graphQLData);
  console.log("GET request received");
});

getData();
app.listen(3000);
