var express = require('express');
var router = express.Router();
const {Post} = require('../models')



router.post('/new', async function(req, res, next) {
    const { title, content,userId } = req.body

    const post = await Post.create({title, content, userId})
    res.json(post)
   
})

router.get('/', async function(req, res, next) {
 const blogs = await Post.findAll()
 res.json(blogs)
   
})


module.exports = router;