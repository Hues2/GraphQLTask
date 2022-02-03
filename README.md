To run the project, go into the server folder and type in the terminal: node app.js
Then the index.html can be opened in the browser.

I had to use node.js as I couldn't access the GraphQL directly from the client due to a CORS issue.
So the node server makes the request and then the client gets the data from the node express app.