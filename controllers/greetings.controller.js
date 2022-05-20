const sendGreetings = (req, res) => {
  res.status(200);
  return 'Hello human';
};

module.exports = sendGreetings
