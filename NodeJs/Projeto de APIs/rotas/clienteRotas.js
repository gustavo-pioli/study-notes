const express = require("express");
const clienteControlador = require("./../controladores/clienteControlador");
// Permite verificação do campo cidade no cadastro do cliente
const cidadeControlador = require("./../controladores/cidadeControlador");

const roteador = express.Router();

roteador
  .route("/")
  .get(clienteControlador.getAllClientes)
  .post(cidadeControlador.checkCidade, clienteControlador.createCliente);

roteador.route("/nome/:nome").get(clienteControlador.getClienteByNome);
roteador
  .route("/id/:id")
  .get(clienteControlador.getCliente)
  .patch(clienteControlador.updateClienteNome)
  .delete(clienteControlador.deleteCliente);

module.exports = roteador;
