var express = require('express');
var router = express.Router();
const {User} = require('../models')
const {generateToken} = require( '../utils.js')

/* GET users listing. */

router.post('/signin', async function(req, res, next) {
  const { email, password } = req.body
  const user = await User.findOne({where: {email: email} })
  if(user){
    if(user.password === password){
            res.json({
                id: user.id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                token: generateToken(user)
            })

    }else{
      res.json({message: `password does not match`})
    }
  }else{
    res.json({message: `No user found with his email`})
  }

});



router.post('/signup', async function(req, res, next) {

  const user = await User.findOne({
    where: {
      email: req.body.email
    }
  })
  if(user){
    res.status(500).send('email already existed')
  }else{
      const newUser = await User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
      })
    
      res.json({
          id: newUser.id,
          firstName: newUser.firstName,
          lastName: newUser.lastName,
          email: newUser.email,
          token: generateToken(newUser)
      })
  }

})


module.exports = router;