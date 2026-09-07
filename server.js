const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 10000;

// Serve website files from the repository root
app.use(express.static(__dirname));

// Render health check
app.get("/health", (req, res) => {
  res.status(200).send("OnikeUniverse is running");
});

// Main website
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`OnikeUniverse running on port ${PORT}`);
});