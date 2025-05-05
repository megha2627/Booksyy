//It starts the srver listen for the incoming request and response to them


const express = require("express"); // Importing Express
const cors = require("cors"); // Importing CORS for cross-origin requests
const bodyParser = require("body-parser"); // Parsing incoming request data
const routes = require("./routes"); // Importing all the route logic from the 'routes' file
require("dotenv").config(); // Loading environment variables from the .env file

const app = express(); // Creating an Express app instance
const port = process.env.PORT || 5000; // Setting up the port, default to 5000

app.use(cors()); // Using CORS middleware to allow cross-origin requests
app.use(bodyParser.json()); // Using bodyParser to parse incoming JSON requests

// Routes
app.use("/api", routes); // Connecting the '/api' route with all route definitions in 'routes.js'
//this /api is the base url for all the routes defined in the route.js file
app.listen(port, () => {
  console.log(`Server running on port ${port}`); // Starting the server and logging a message
});
