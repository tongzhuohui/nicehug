const Router = require('koa-router')
const tags = require('./tag')
const article = require('./article')
const comments = require('./comment')
const hero = require('./hero')
const music = require('./music')
const user = require('./user')
const reply = require('./reply')
const project = require('./project')
const router = new Router()

article(router)
tags(router)
comments(router)
hero(router)
music(router)
user(router)
reply(router)
project(router)

module.exports = router