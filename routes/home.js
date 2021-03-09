const {Router} = require('express')
const router = Router()
const path = require('path')

router.get('/', (req,res)=> {

    // static work with file
   res.status(200)
   res.sendFile(path.join(__dirname, '../public/example', 'index.html'))
})


module.exports = router