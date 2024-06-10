const Cliente = require("./../modelos/clienteModelo");
const AppError = require("./../utils/appError");
const catchAsync = require("./../utils/catchAsync");

exports.getAllClientes = catchAsync(async (req, res, next) => {
  const clientes = await Cliente.find();

  // RESPOSTA SUCCESS
  res.status(200).json({
    status: "sucesso",
    resultados: clientes.length,
    dados: {
      clientes,
    },
  });
});

exports.getClienteByNome = catchAsync(async (req, res, next) => {
  const cliente = await Cliente.findOne({ nome: req.params.nome });

  if (!cliente) {
    return next(
      new AppError("Nenhum cliente encontrado com NOME fornecido", 404)
    );
  }

  // RESPOSTA SUCCESS
  res.status(200).json({
    status: "sucesso",
    dados: {
      cliente,
    },
  });
});

exports.getCliente = catchAsync(async (req, res, next) => {
  const cliente = await Cliente.findById(req.params.id);

  if (!cliente) {
    return next(
      new AppError("Nenhum cliente encontrado com ID fornecido", 404)
    );
  }

  // RESPOSTA SUCCESS
  res.status(200).json({
    status: "sucesso",
    dados: {
      cliente,
    },
  });
});

exports.createCliente = catchAsync(async (req, res, next) => {
  const novoCliente = await Cliente.create(req.body);

  // RESPOSTA CREATED
  res.status(201).json({
    status: "sucesso",
    dados: {
      cidade: novoCliente,
    },
  });
});

exports.updateClienteNome = catchAsync(async (req, res, next) => {
  // Filtrando Update
  const camposProibidos = [
    "sobrenome",
    "sexo",
    "dataNascimento",
    "idade",
    "cidade",
  ];
  camposProibidos.forEach((el) => delete req.body[el]); // Permite mudança apenas do nome

  const cliente = await Cliente.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!cliente) {
    return next(
      new AppError("Nenhum cliente encontrado com ID fornecido", 404)
    );
  }

  // RESPOSTA SUCCESS
  res.status(200).json({
    status: "sucesso",
    dados: {
      cliente,
    },
  });
});

exports.deleteCliente = catchAsync(async (req, res, next) => {
  const cliente = await Cliente.findByIdAndDelete(req.params.id);

  if (!cliente) {
    return next(
      new AppError("Nenhum cliente encontrado com ID fornecido", 404)
    );
  }

  // RESPOSTA NO CONTENT
  res.status(204).json({
    status: "sucesso",
    dados: null,
  });
});
