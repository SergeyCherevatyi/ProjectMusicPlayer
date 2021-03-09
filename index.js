const express = require('express')
const path = require('path')
const mongoose = require('mongoose')

require('dotenv').config()
const {DB_DB, DB_HOST} = process.env
const PORT = process.env.PORT || 3000
const app = express()

//Routes
const homeRoutes = require('./routes/home')
const loginRoutes = require('./routes/login')
const signinRoutes = require('./routes/signin')



const User = require('./models/user')


app.use('/', homeRoutes)
app.use('/login', loginRoutes)
app.use('/signin', signinRoutes)

app.use(express.static('public'));




async function start() {
  try {
    const url = `mongodb://${DB_HOST}/${DB_DB}`
    // const url = `mongodb://localhost/project`

    await mongoose.connect(url, {
        useNewUrlParser: true, 
        useFindAndModify: false,
        useUnifiedTopology: true
    })

    // const candidate = await User.findOne()
    // if(!candidate) {
    //     const user = new User ({
    //         name: 'Sergey',
    //         email: 'sergeycherevatyi@gmail.com',
    //         password: 9121988
    //     }) 

    //     await user.save()
    // }

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`)
    })
  } catch (e) {
    console.log(e)
  }
}
start()