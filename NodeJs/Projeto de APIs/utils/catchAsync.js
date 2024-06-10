// Generalizar a funcao catch para middleware de error handling
module.exports = (func) => {
  return (req, res, next) => {
    func(req, res, next).catch((err) => next(err));
  };
};
