const { default: axios } = require('axios');
const express = require('express');
const cors = require('cors')
const app = express();
app.use(cors()); 


let graphQLData = {};

function getData(){
    axios.get('https://www.greenbowsports.co.uk/graphql?query={products(search: "forza-mini-target-goal-only"){items {name short_description {html} id sku image {url} price {regularPrice{ amount {value currency}}}}}}')
    .then(response => {
        console.log(response.data.data.products);
        graphQLData = response.data.data.products
    })

}

getData()

app.get('/', (req, res) => {
    res.json(graphQLData)
    console.log("GET request received");
});

app.listen(3000);