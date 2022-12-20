var express = require('express');
var router = express.Router();
const {Post} = require('../models')



router.post('/new', async function(req, res, next) {
    const { title, content,userId } = req.body

    try {
        res.json(post)
        const post = await Post.create({title, content, userId})
        
    } catch (error) {
        res.send(error)
    }
   
})

router.get('/', async function(req, res, next) {
 const blogs = await Post.findAll()
if(blogs){
    res.json(blogs)

}else{
    res.send('something went wrong')
}

   
})


module.exports = router;