const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const User = require('../schema/User');

router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());

router.post('/', (req, res) => {
    console.log('in post method');
    User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }, (err, user) =>{
        if(err) return res.status(500).send('There is some problem in user creation');
        res.status(200).send(user);
    });
});

router.get('/', (req, res) => {
    User.find({}, (err, users) =>{
        if(err) return res.status(500).send('There is some problem to get users');
        res.status(200).send(users);
    });
});

module.exports = router;