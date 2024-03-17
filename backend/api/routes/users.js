
var express = require('express');
var userModel = require('../models/user');
var router = express.Router();
const bcrypt = require('bcrypt');

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

async function checkEmail(req, res, next) {
  try {
    const email = req.body.Email;
    const existingUser = await userModel.findOne({ email: email });
    if (existingUser) {
      return res.status(200).json({
        msg: "Email Already Exists",
        results: existingUser
      });
    }
    next();
  } catch (err) {
    // Handle error
    next(err); // Pass the error to Express error handling middleware
  }
}

// router.post('/register', checkEmail, async (req, res) => {

//   var userDetails = new userModel({
//     name: req.body.Name,
//     email: req.body.Email,
//     password: req.body.Password,

//   });

//   await userModel.create(userDetails).then(doc => {
//     res.status(201).json({
//       message: "Inserted Successfully",
//       results: doc
//     });
//   })
//     .catch(err => {
//       res.json(err);
//     });


// });



router.post('/register', checkEmail, async (req, res) => {

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

      await userDetails.save(userDetails).then(resResult => {
        res.status(201).json({
          msg: "Inserted Successfully",
          results: resResult
        });


      })
        .catch(err => {
          res.json(err);
        });
    }
  });
});


router.post("/login", async (req, res, next) => {

  try {
    const email = req.body.Email;
    const user = await userModel.findOne({ email: email });

    if (!user) {
      return res.status(200).json({
        msg: "Auth Failed",
        UserData: '',
        status: 'error'
      });
    }

    const passwordMatch = await bcrypt.compare(req.body.Password, user.password);
    if (passwordMatch) {
      return res.status(200).json({
        msg: "User Login Successfully",
        UserData: user,
        status: 'success'
      });
    } else {
      return res.status(200).json({
        msg: "Auth Failed",
        UserData: '',
        status: 'error'
      });
    }
  } catch (err) {
    return res.status(500).json({
      error: err.message
    });
  }

});



module.exports = router;
