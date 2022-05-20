const healthCheck = (req, res) => {
  res.status(200);
  res.send('ok');
};

module.exports = healthCheck;
