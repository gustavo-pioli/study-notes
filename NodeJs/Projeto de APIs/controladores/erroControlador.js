/*
  Permite a criação de mensagens personalizadas de erros de acordo
  com cada ambiente (produção, desenvolvimento)
*/
const AppError = require("./../utils/appError");

const handleCastErrorDB = (err) => {
  const message = `Inválido: ${err.path}: ${err.value}.`;
  return new AppError(message, 400);
};

const handleValidationErrorDB = (err) => {
  const errors = Object.values(err.errors).map((el) => el.message);

  const message = `Dados inseridos inválidos. ${errors.join(". ")}`;
  return new AppError(message, 400);
};

const sendErrorProd = (err, res) => {
  // Operational, erro operacional do cliente
  // Sem risco de informações sigilosas do sistema
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });

    // Erros relacionados ao servidor
    // Informação sigilosa do sistema
  } else {
    console.error("ERROR", err);

    res.status(500).json({
      status: "ERRO",
      message: "Ocorreu algo de errado! Por favor, tente novamente mais tarde.",
    });
  }
};

const sendErrorDev = (err, res) => {
  res.status(err.statusCode).json({
    status: "ERRO",
    error: err,
    message: err.message,
    stack: err.stack,
  });
};

module.exports = (err, req, res, next) => {
  console.log(err.stack);
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "ERRO";

  if (process.env.NODE_ENV === "development") {
    sendErrorDev(err, res);
  } else if (process.env.NODE_ENV === "production") {
    let erro = { ...err }; // Não captura a mensagem de erro

    erro.message = err.message;

    if (err.name === "CastError") erro = handleCastErrorDB(erro);
    if (err.name === "ValidationError") erro = handleValidationErrorDB(erro);

    sendErrorProd(erro, res);
  }
};
