const router = require("express").Router();
const Conversion = require("../models/conversions");
router
  .get("/all", async (req, res) => {
    console.log("GET /data/all");
    try {
      // const allData = await Conversion.find();
      res.status(200).send("allData");
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: true, message: error });
    }
  })
  .post("/new", async (req, res) => {
    console.log("POST /data/new");
    const { body } = req;
    try {
      const newData = new Conversion(body);
      await newData.save();
      res.status(200).json(newData);
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: true, message: error });
    }
  })
  .delete("/delete", async (req, res) => {
    const { id } = req.body;
    console.log("DELETE/data/" + id);
    try {
      const delData = await Conversion.findOneAndDelete({
        id,
      });
      res.status(200).json(delData);
      console.log("DEL id " + delData);
    } catch (error) {
      console.log(error);
      res.status(404).json({
        error: true,
        message: error,
      });
    }
  });

module.exports = router;

// app.route("/").cors(corsOptions).get(async (req, res) => {
//     try {
//       const allConvesiones = await Conversion.find();
//       res.status(200).json(allConvesiones);
//     } catch (error) {
//       res.status(400).json({ error: true, message: error });
//     }
//   });
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
