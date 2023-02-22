const express = require("express");
const app = express();
app.use(express.json());
require("dotenv").config();
const cors = require("cors");
app.use(cors());
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

// const MOCK = require("./Mocks/mocks");
const Conversion = require("./Models/conversions");

app.route("/").get(async (req, res) => {
  try {
    res.status(200).json({ message: "OK" });
    // const allConvesiones = await Conversion.find();
    // res.status(200).json(allConvesiones);
  } catch (error) {
    res.status(400).json({ error: true, message: error });
  }
});
// app.route("/data").post(async (req, res) => {
//   const { body } = req;
//   try {
//     const newConvesion = new Conversion(body);
//     console.log(newConvesion);
//     await newConvesion.save();
//     res.status(200).json(newConvesion);
//   } catch (error) {
//     res.status(400).json({ error: true, message: error });
//     console.log(error);
//   }
// });
// app.route("/data").delete(async (req, res) => {
//   const { id } = req.body;
//   console.log(id);
//   try {
//     const deletConv = await Conversion.findOneAndDelete({ id });
//     res.status(200).json(deletConv);
//   } catch (error) {
//     res.status(400).json({ error: true, message: error });
//     console.log(error);
//   }
// });

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ` + PORT);
});
