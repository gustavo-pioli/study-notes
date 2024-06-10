// Classe de erros para moldar mensagens para o cliente em ambiente produção
class AppError extends Error {
  constructor(message, statusCode) {
    super(message);

    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
    this.isOperational = true; // Erros operacionais do cliente

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = AppError;
