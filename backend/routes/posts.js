var express = require('express');
var router = express.Router();
const {Post} = require('../models')



router.post('/new', async function(req, res, next) {
    const { title, content } = req.body

    const post = await Post.create({title, content, userId: 1})
    res.json(post)

    
})


module.exports = router;