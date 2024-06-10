const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });
const app = require("./app");

const DB = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);

mongoose
  // Para DB local:
  //.connect(process.env.DATABASE_LOCAL, {
  .connect(DB, {
    // useNewUrlParser: true, DEPRECATED
    // useCreateIndex: true, NOT SUPPORTED
    // useFindAndModify: false, NOT SUPPORTED
  })
  .then(() => {
    console.log("DB: conectado");
  });

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`Servidor ativo no port ${port}...`);
});
