const express = require("express");
const logger = require("morgan");
const apiRouter = require("./routes");

const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.json());

app.use(logger("tiny"));

app.get("/", (req, res) => {
  res.status(200).send(`
    <div>
      <h1>Test</h1>
      <div>
        <a href="http://localhost:8080/users">Go to users</a>
      </div>
      <div></div>
    </div>
  `);
});

app.use("/api", apiRouter);

const start = () => {
  app.listen(PORT, () => console.log(`Server run on port ${PORT}`));
};

start();
