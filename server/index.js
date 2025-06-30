// Import Express framework to be able to build server
const express = require("express");
// Import CORS middleware to allow connections from FE to app running on different port
//
const cors = require("cors");

// Creates instance of the Express app
const app = express();
// Set port number for server to listen on.
// If there's an env variable PORT use that, otherwise 3001.
const PORT = process.env.PORT || 3001;

// Middleware: allow the server to parse incoming JSON request bodies
app.use(cors());
app.use(express.json());

const resources = [
  {
    id: 1,
    name: "Community Food Bank",
    category: "Food",
    location: "123 Main St",
  },
  { id: 2, name: "Free Clinic", category: "Health", location: "456 Elm St" },
  {
    id: 3,
    name: "Public Library",
    category: "Education",
    location: "789 Oak St",
  },
];

// Define a route: when the server gets a GET request to "/api/resources",
// respond with the list of mock resources above as JSON
app.get("/api/resources", (req, res) => {
  res.json(resources);
});

// Start the server and listen on the specified port
// When it's up and running, log a message to the console
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
