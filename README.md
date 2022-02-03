To run the project, go into the server folder and type in the terminal: node app.js
Then the index.html can be opened in the browser.

I had to use node.js as I couldn't access the GraphQL directly from the client due to a CORS issue.
So the node server makes the request and then the client gets the data from the node express app.

That is what took most of my time, as I couldn't figure out why my client couldn't access the data.

Another issue, was for the express app to access the body of the post request received, but it turned out to be an easy fix
using bodyparser.json()

Then I thought of the next and previous buttons functionality, as I wanted them to loop, instead of just reaching the end and
then being forced to press the previous button.

Added a bit of CSS (which wasn't the easiest task either)

I didn't focus on it too much, but added a bit of error handling for the search bar.
