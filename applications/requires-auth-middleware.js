const jwt = require('jsonwebtoken');
const secrets = require("./required-s");

module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  const secret = secrets.jwtSecret;

  if (token) {
    jwt.verify(token, secret, (err, decodedToken) => {
      if(err) {
        res.status(401).json({ message: 'Invalid token in header.' })
      } else {
        req.body.user_id = decodedToken.id;
        next();
      }
    });
  } else if (process.env.DB_ENV === 'testing') {
    reg.body.user_id = 1
    next();
  } else {
    res.status(400).json({ message: 'Please provide a token in the header.' });
  }
};