const {Router} = require('express')
const router = Router()
const path = require('path')

router.get('/', (req,res)=> {

    res.end('<h1> Login </h1>')
})


module.exports = router