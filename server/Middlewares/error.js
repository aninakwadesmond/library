function error(err, req, res, next) {
  return res.status(500).json('Something went wrong');
}

module.exports = error;
