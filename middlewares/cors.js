const HOSTS = ['http://localhost:3000'];

const cors = (_req, res, next) => {
  res.header('Access-Control-Allow-Origin', ...HOSTS);
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
};

module.exports = cors;
