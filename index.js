const express = require("express");
const app = express();
app.use(express.json());
require("dotenv").config();

const PORT = process.env.PORT || 8000;
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.URL_MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("db connection established"))
  .catch((err) => console.log(err));

const cors = require("cors");
app.use(cors());
const dataRoutes = require("./routes/conversion");

app.use("/data", dataRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ` + PORT);
});
