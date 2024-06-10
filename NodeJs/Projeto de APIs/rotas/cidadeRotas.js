const express = require("express");
const cidadeControlador = require("./../controladores/cidadeControlador");

const roteador = express.Router();

roteador
  .route("/")
  .get(cidadeControlador.getAllCidades)
  .post(cidadeControlador.createCidade);

roteador.route("/nome/:nome").get(cidadeControlador.getCidadeByNome);
roteador
  .route("/:id")
  .patch(cidadeControlador.updateCidade)
  .delete(cidadeControlador.deleteCidade);

roteador.route("/estado/:estado").get(cidadeControlador.getCidadeByEstado);

module.exports = roteador;
