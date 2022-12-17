const jwt = require ('jsonwebtoken')

module.exports.generateToken = (user) => {
    return jwt.sign(
        {id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,}, 
        process.env.JWT_SECRET, 
        {expiresIn: '30d'}
        )
}

module.exports.isAuth = (req, res,next) => {
    const authorization = req.headers.authorization
    if(authorization){
        const token = authorization.slice(7, authorization.length)
        jwt.verify(token,
            process.env.JWT_SECRET,
            (error, decode) => {
                if(error){
                    res.status(401).send({message: 'Invalid Token'})
                }else{
                    req.user = decode
                    next()
                }
            })
    }else{
        res.status(401).send({message: 'No Token'})
    }
}

