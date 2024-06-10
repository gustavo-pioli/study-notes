const mongoose = require("mongoose");

const clienteSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: [true, "Cliente deve possuir nome"],
    trim: true,
  },
  sobrenome: {
    type: String,
    required: [true, "Cliente deve possuir nome"],
    trim: true,
  },
  sexo: {
    type: String,
    enum: {
      values: ["masculino", "feminino"],
      message: "O sexo deve ser masculino ou feminino",
    },
    default: "Não Informar",
  },
  dataNascimento: {
    type: Date,
    required: [true, "Cliente deve possuir Data de Nascimento"],
  },
  idade: {
    type: Number,
    default: function () {
      return calculaIdade(this.dataNascimento);
    },
  },
  cidade: {
    type: String,
    required: [true, "Cliente deve pertencer a uma cidade"],
  },
});

// Calcula a idade usando a Data de Nascimento
function calculaIdade(dataNascimento) {
  const agora = new Date();
  const nascimento = dataNascimento;
  let idade = agora.getFullYear() - nascimento.getFullYear();
  const m = agora.getMonth() - nascimento.getMonth();
  if (m < 0 || (m === 0 && agora.getDate() < nascimento.getDate())) {
    idade--;
  }
  return idade;
}

// Permite apenas únicas combinações de nome e sobrenome
clienteSchema.index({ nome: 1, sobrenome: 1 }, { unique: true });

clienteSchema.pre("save", function (next) {
  this.sexo = this.sexo.toUpperCase();
  next();
});

const Cliente = mongoose.model("Cliente", clienteSchema);
module.exports = Cliente;
