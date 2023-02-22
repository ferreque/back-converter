const express = require("express");
const app = express();
app.use(express.json());

const mongoose = require("mongoose");

require("dotenv").config();

mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connection OK"))
  .catch((error) => console.error(error));

var cors = require("cors");
app.use(cors());
let corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};

// const MOCK = require('./mocks/mocks');

const PORT = process.env.PORT || 8000;

const dataRoutes = require("./routes/data");

app.use("/data", dataRoutes);

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
