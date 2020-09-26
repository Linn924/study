const Router = require("koa-router")
const template = require('art-template')
const Student = require('../model/user.js')


const student = new Router()

student.get('/add',async ctx => {
    let html = template('index.art',{})
    ctx.body = html
})

student.get('/list',async ctx => {
    //查询学生信息
    let studentList = await Student.find()
    let html = template('list.art',{
        students:studentList
    })
    ctx.body = html
})


student.post('/add',async ctx => {
    var data = ctx.request.body
    await Student.create(data)
    ctx.response.redirect('/list')
})


module.exports = student