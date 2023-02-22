const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const conversionSchema = new Schema({
  id: { type: String, required: true },
  inputValor: { type: String, required: true },
  uniti2: { type: String, required: true },
  valor: { type: String, required: true },
  uniti: { type: String, required: true },
});

const Conversion = mongoose.model("conversions", conversionSchema);

module.exports = Conversion;
