const { default: axios } = require('axios');
const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const app = express();
app.use(cors()); 
app.use(bodyParser.urlencoded({extended: true}))

var userInput = "\"forza-mini-target-goal-only\"";


let graphQLData = {};

function getData(){
    axios.get("https://www.greenbowsports.co.uk/graphql?query={products(search: " + userInput + "){items {name short_description {html} id sku image {url} price {regularPrice{ amount {value currency}}}}}}")
    .then(response => {
        console.log(response.data.data.products);
        graphQLData = response.data.data.products
    }).catch(error =>{
        graphQLData = {};
    })

}


app.get('/', (req, res) => {
    
    res.json(graphQLData)
    console.log("GET request received");
});

app.get('/search', (req, res) => {
    console.log("POST received");
    userInput = "\"" + req.body.product + "\"";
    
})

getData()
app.listen(3000);