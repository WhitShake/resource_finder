const express = require("express");
const cors = require("cors;");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

//Mock resource data:
const resources = [
  {
    id: 1,
    name: "Community Food Bank",
    category: "Food",
    location: "123 Main St.",
  },
  {
    id: 1,
    name: "Free Clinic",
    category: "Healthcare",
    location: "456 Elm St.",
  },
  {
    id: 1,
    name: "Public Library",
    category: "Education",
    location: "789 Oak St.",
  },
];

// Routes:
app.get("/api/resources", (req, res) => {
  res.json(resources);
});

app.listen(PORT, () => {
  console.log("Server running on http://localhost:${PORT}");
});
