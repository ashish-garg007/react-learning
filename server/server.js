const express = require('express');
const app = express();
const db = require('./src/schema/db');
const jwt = require('jsonwebtoken');
const apiRoutes = express.Router();
const cors = require('cors');

app.use(cors());
const port = process.env.PORT || 3001;


const UserController = require('./src/controller/UserController');
const AuthenticationController = require('./src/controller/Authentication');


apiRoutes.use((req,res,next) =>{
  const token = req.headers['x-access-token'];

  if(token){
    jwt.verify(token,'learnJWT',(err, decoded) =>{
      if(err){
        res.json({success: false, message:'Failed to authenticate token.'})
      }else{
        req.decoded = decoded;
        next();
      }
    });
  }else{
    return res.status(403).send({success:false, message:'No token provided'});
  }
});
app.use('/',AuthenticationController);
app.use('/api',apiRoutes);
app.use('/api', UserController);


const server = app.listen(port, function() {
    console.log('Express server listening on port ' + port);
  });

