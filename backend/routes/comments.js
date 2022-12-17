var express = require('express');
var router = express.Router();
const {Comment} = require('../models')



router.post('/new', async function(req, res, next) {
    const { content } = req.body

    const comment = await Comment.create({content, userId: 1, postId:1})
    res.json(comment)

    
})


module.exports = router;