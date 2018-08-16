const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');


const User = require('../schema/User');

router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());

router.post('/authenticate',(req, res) =>{
    console.log('in auth',req.body.email);
    User.findOne({
        email: req.body.email
    },(err, user) =>{
        console.log(err);
        console.log(user);
        if(err){
            return res.status(500).send('there is some problem');
        }
        if(!user){
            return res.json({success: false, message: 'Authentication failed. User not found'});
        }else if(user){
            if(user.password !== req.body.password){
                res.json({success: false, message: 'Authentication failed. Wrong Password'});
            }else{
                const payload = {
                    admin: true
                }
  
                const token = jwt.sign(payload,'learnJWT',{
                    expiresIn: 60*60*24
                });
                console.log('in res');
                res.send({
                    success: true,
                    message: 'Enjoy your token',
                    token: token,
                    profile: {Name:user.name, Email:user.email}
                });
            }
        }
    });
  });

  router.post('/signup', (req, res) => {
    User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }, (err, user) =>{
        if(err) return res.status(500).send('There is some problem in user creation');
        res.status(200).send(user);
    });
});

  module.exports = router;