
var express = require('express');
var userModel = require('../models/user');
var router = express.Router();

/* GET users listing. */
// router.get('/', function (req, res, next) {
//   res.render('index', { title: 'Express' });
// });
router.get('/', async (req, res) => {

  var userDetails = await userModel({
    name: 'rohit',
    email: 'rohit@gmail.com',
    password: 'rohit@123',

  });

  await userModel.create(userDetails)

  res.render('index', { title: 'User Data Inserted' });

})

router.post('/register', async (req, res) => {

  var userDetails = new userModel({
    name: req.body.Name,
    email: req.body.Email,
    password: req.body.Password,

  });

  await userModel.create(userDetails).then(doc => {
    res.status(201).json({
      message: "Inserted Successfully",
      results: doc
    });
  })
    .catch(err => {
      res.json(err);
    });


});

module.exports = router;
