const express = require('express')

const admin = express.Router()

admin.get('/login',(req,res)=>{
    res.send('login')
})

module.exports = admin