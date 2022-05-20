const logger = (req, res, next) => {
  console.info(`[${req.method}]: ${req.url}`);
  next();
};

module.exports = logger;
