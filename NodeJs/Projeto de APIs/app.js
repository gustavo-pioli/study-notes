const express = require("express");
const operadorGlobalErros = require("./controladores/erroControlador");
const cidadeRoteador = require("./rotas/cidadeRotas");
const clienteRoteador = require("./rotas/clienteRotas");

const app = express();

app.use(express.json());

app.use("/api/cidades", cidadeRoteador);
app.use("/api/clientes", clienteRoteador);

app.use(operadorGlobalErros);

module.exports = app;
