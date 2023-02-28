const jwt = require('jsonwebtoken')

exports.authenticateToken = function (req, res, next) {
    const authHeader = req.headers["authorization"];
    req.user
    req._id
    if (!authHeader) {
      return res.status(401).send("Access denied. No token provided.");
    } else {
     let decoded =  jwt.verify(authHeader, "secretKey", (err, data) => {
        if (data.email) {
          req.user = data.email;
          req._id = data.id
          next();
        } else {
          res.status(400).json({ err });
        }
      });
    }
  }