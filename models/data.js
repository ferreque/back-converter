const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  id: { type: String, require: true },
  inputValor: { type: String, require: true },
  uniti2: { type: String, require: true },
  valor: { type: String, require: true },
  uniti: { type: String, require: true },
});

const Product = mongoose.model("products", productSchema);
module.exports = Product;
