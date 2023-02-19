const express = require("express");
const app = express();
app.use(express.json());
require("dotenv").config();
console.log(process.env.PORT);

const PORT = process.env.PORT || 8000;

const MOCK = [
  {
    id: "id182",
    inputValor: "100",
    uniti2: "km",
    valor: 62.137,
    uniti: "miles",
  },
  {
    id: "id192",
    inputValor: "62.14",
    uniti2: "miles",
    valor: 100.0043876,
    uniti: "km",
  },
  {
    id: "id208",
    inputValor: "100.00",
    uniti2: "feeds",
    valor: 30.48,
    uniti: "meters",
  },
  {
    id: "id218",
    inputValor: "30.48",
    uniti2: "meters",
    valor: 100.0000032,
    uniti: "feeds",
  },

  {
    id: "id234",
    inputValor: "100.00",
    uniti2: "cm",
    valor: 39.3701,
    uniti: "inches",
  },

  {
    id: "id244",
    inputValor: "39.37",
    uniti2: "inches",
    valor: 99.9998,
    uniti: "cm",
  },
];

app
  .route("/data")
  .get((req, res) => {
    console.log("get");
    res.status(200).send(MOCK);
  })
  .post((req, res) => {
    console.log("get");
    res.status(200).send(req.body);
  });

app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en puerto ` + PORT);
});
