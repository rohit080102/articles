
var express = require('express');
var userModel = require('../models/user');
var router = express.Router();
const bcrypt = require('bcrypt');
let response = require('./../core/response')

/* GET users listing. */
// router.get('/', function (req, res, next) {
//   res.render('index', { title: 'Express' });
// });
// router.get('/', async (req, res) => {


//   var userDetails = await userModel({
//     name: 'rohit',
//     email: 'rohit@gmail.com',
//     password: 'rohit@123',

//   });

//   await userModel.create(userDetails)

//   res.render('index', { title: 'User Data Inserted' });

// })

async function checkEmail(req, res, next) {
  try {
    const email = req.body.Email;
    const existingUser = await userModel.findOne({ email: email });
    if (existingUser) {
      return response.onSuccess("Email Already exist", 0, res)
    }
    next();
  } catch (err) {
    next(err);
  }
}



router.post('/register', checkEmail, async (req, res) => {
  try {

  } catch (err) {
    response
  }
  bcrypt.hash(req.body.Password, 10, async (err, hash) => {

    if (err) {
      res.status(400).json({
        msg: "Something Wrong, Try Later!",
        results: err
      });
    } else {
      var userDetails = new userModel({
        name: req.body.Name,
        email: req.body.Email,
        password: hash,
        role: 'Author'

      });
      try {
        await userDetails.save(userDetails)
        return response.onSuccess("Inserted Successfully", 1, res)
      }
      catch (err) {
        return response.onError(err, res);
      }
    }
  });
});


router.post("/login", async (req, res, next) => {

  try {
    const email = req.body.Email;
    const user = await userModel.findOne({ email: email });

    if (!user) {
      return response.onSuccess("Email not found", 1, res);
    } else {
      const passwordMatch = await bcrypt.compare(req.body.Password, user.password);
      if (passwordMatch) {
        return response.onSuccess("User Login successfully", user, res)

      } else {
        return response.onSuccess("Password is Incorrect", 1, res)

      }
    }
  } catch (err) {
    return response.onError(err, res)
  }

});



module.exports = router;
