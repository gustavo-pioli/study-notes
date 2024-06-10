const mongoose = require("mongoose");

const cidadeSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: [true, "Uma cidade deve ser nomeada"],
    unique: true,
  },
  estado: {
    type: String,
    required: [true, "Uma cidade deve pertencer a um estado"],
  },
});

const Cidade = mongoose.model("Cidade", cidadeSchema);
module.exports = Cidade;
