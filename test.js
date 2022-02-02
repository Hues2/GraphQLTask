
// fetch('https://www.greenbowsports.co.uk/graphql?query={products(search: "forza-mini-target-goal-only"){items {name short_description {html} id sku image {url} price {regularPrice{ amount {value currency}}}}}}', {
//     method: 'GET',
//     headers: {
//         'content-type': 'application/json'
//     },
// }).then((response) => response.json()).then((data) => console.log(data));


// fetch('https://www.greenbowsports.co.uk/graphql', {
//     method: 'POST',
//     headers: {
//         'content-type': 'application/json'
//     },
//     body: JSON.stringify({
//         query: `{
//             products(search: "forza-mini-target-goal-only"){
//               items {
//                   name
//                   short_description {html}
//                   id
//                   sku
//                   image {url}
//                   price {
//                       regularPrice {
//                           amount {
//                               value
//                               currency
//                           }
//                       }
//                   }
//               }
//             }
//         }`
//     }),

// }).then((response) => response.json()).then((data) => console.log(data));