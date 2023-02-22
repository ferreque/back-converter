// Configuracion de express
const express = require("express");
const app = express();
// Configuracion del body parser de express
app.use(express.json());
// Configuracion de mongoose
const mongoose = require("mongoose");

// Configuracion de dotenv
require("dotenv").config();

mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connection OK"))
  .catch((error) => console.error(error));

// Configuracion de CORS (evito errores de CORS)
var cors = require("cors");
app.use(cors());
let corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

// Importo el mock
// const MOCK = require('./mocks/mocks');

// Dejo seteado en una constante el puerto, usar el que este en el env, sino 800
const PORT = process.env.PORT || 8000;

// Empiezo a programar los endopoints
const productsRoutes = require("./routes/conversion");

app.use("/products", productsRoutes);

// Esta funcion es la que corre la API, si no esta, no se autoejecuta.
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
