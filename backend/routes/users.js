var express = require('express');
var router = express.Router();
const {User} = require('../models')

/* GET users listing. */
router.post('/', async function(req, res, next) {
  const { email, password } = req.body
  const user = await User.findOne({where: {email: email} })
  if(user){
    if(user.password === password){
      res.json(user)
    }else{
      res.json({message: `password does not match`})
    }
  }else{
    res.json({message: `No user found with his email`})
  }

  res.send('respond with a resource');
});

router.post('/signup', async function(req, res, next) {
  const {firstName, lastName, email, password} = req.body
  try {
    const user = await User.create({firstName, lastName, email, password})
    res.json(user)
  } catch (error) {
    res.send(error.message)
  }

})


module.exports = router;