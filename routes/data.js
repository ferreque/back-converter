const router = require("express").Router();
const Data = require("../models/data");

router
  .get("/all", async (req, res) => {
    console.log("GET /datas/all");
    try {
      const allData = await Data.find();
      res.status(200).send(allData);
    } catch (error) {
      res.status(400).json({ error: true, message: error });
    }
  })
  .post("/new", async (req, res) => {
    console.log("POST /data/new");
    const { body } = req;
    try {
      const newData = new Data(body);
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
      const delData = await Data.findOneAndDelete({
        id,
      });
      res.status(200).json(delData);
    } catch (error) {
      console.log(error);
      res.status(404).json({
        error: true,
        message: error,
      });
    }
  });

module.exports = router;
