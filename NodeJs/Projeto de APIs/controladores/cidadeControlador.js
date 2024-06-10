const Cidade = require("./../modelos/cidadeModelo");
const AppError = require("./../utils/appError");
const catchAsync = require("./../utils/catchAsync");

// Verifica se cidade existe (cadastro cliente)
exports.checkCidade = catchAsync(async (req, res, next) => {
  const cidade = await Cidade.findOne({ nome: req.body.cidade });

  if (!cidade) {
    return next(
      new AppError("Cidade não cadastrada! Cadastre a cidade primeiro", 412)
    );
  }

  next();
});

exports.getAllCidades = catchAsync(async (req, res, next) => {
  const cidades = await Cidade.find();

  // RESPOSTA SUCCESS
  res.status(200).json({
    status: "sucesso",
    resultados: cidades.length,
    dados: {
      cidades,
    },
  });
});

exports.getCidadeByNome = catchAsync(async (req, res, next) => {
  const cidade = await Cidade.findOne({ nome: req.params.nome });

  if (!cidade) {
    return next(
      new AppError("Nenhuma cidade encontrada com NOME fornecido", 404)
    );
  }

  // RESPOSTA SUCCESS
  res.status(200).json({
    status: "sucesso",
    dados: {
      cidade,
    },
  });
});

exports.getCidadeByEstado = catchAsync(async (req, res, next) => {
  const cidade = await Cidade.find({ estado: req.params.estado });

  if (!cidade || cidade == 0) {
    return next(
      new AppError("Nenhuma cidade encontrada com ESTADO fornecido", 404)
    );
  }

  // RESPOSTA SUCCESS
  res.status(200).json({
    status: "sucesso",
    dados: {
      cidade,
    },
  });
});

exports.createCidade = catchAsync(async (req, res, next) => {
  const novaCidade = await Cidade.create(req.body);

  // RESPOSTA CREATED
  res.status(201).json({
    status: "sucesso",
    dados: {
      cidade: novaCidade,
    },
  });
});

exports.updateCidade = catchAsync(async (req, res, next) => {
  const cidade = await Cidade.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!cidade) {
    return next(
      new AppError("Nenhuma cidade encontrada com ID fornecido", 404)
    );
  }

  // RESPOSTA SUCCESS
  res.status(200).json({
    status: "sucesso",
    dados: {
      cidade,
    },
  });
});

exports.deleteCidade = catchAsync(async (req, res, next) => {
  const cidade = await Cidade.findByIdAndDelete(req.params.id);

  if (!cidade) {
    return next(
      new AppError("Nenhuma cidade encontrada com ID fornecido", 404)
    );
  }

  // RESPOSTA NO CONTENT
  res.status(204).json({
    status: "sucesso",
    dados: null,
  });
});
