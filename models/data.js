const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  id: String,
  inputValor: String,
  uniti2: String,
  valor: String,
  uniti: String,
});

const Product = mongoose.model("products", productSchema);
module.exports = Product;