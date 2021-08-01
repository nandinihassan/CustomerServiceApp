const jwt = require('jsonwebtoken');

function auth (req, res, next){
  const token = req.header('auth-token');
  if(!token) return res.statau(401).send('Access Denied');

  try{
      const verified = jwt.verify(token, process.env.TOKEN_SECRET);
      req.user = verified;
  } catch(err) {
      res.send(400).send('Invalid Token');
  }
}