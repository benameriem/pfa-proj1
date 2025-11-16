const express = require("express");
const app = express();
const port = 3000;
const routes = require("./routes");
const cors = require("cors");

// Permissions to view API (CORS)
app.use(
  cors({
    origin: "*",
  })
);

// Parsing json requests
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api", routes);
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
