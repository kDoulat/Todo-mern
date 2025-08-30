const testingController = (req, res) => {
  res.status(200).send("<h1>Welcome to todo App Server</h1>");
};

module.exports = { testingController };
