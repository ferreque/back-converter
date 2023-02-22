const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dataSchema = new Schema({
  id: String,
  inputValor: String,
  uniti2: String,
  valor: String,
  uniti: String,
});

const Data = mongoose.model("dalta", dataSchema);
module.exports = Data;
