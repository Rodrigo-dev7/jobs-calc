const express = require('express')
const routes = express.Router()

const views = __dirname + '/views/'

const profile = {
  name: 'Rodrigo',
  avatar: 'https://avatars.githubusercontent.com/u/60434681?v=4',
  "monthly-budget": 3000,
  "hours-per-day": 5,
  "days-per-week": 9,
  "vacation-per-year": 4,
}

// request, response
routes.get('/', (req, res) => res.render(views + 'index'))
routes.get('/job', (req, res) => res.render(views + 'job'))
routes.get('/job/edit', (req, res) => res.render(views + 'job-edit'))
routes.get('/profile', (req, res) => res.render(views + 'profile', { profile }))


module.exports = routes
