// pages/api/data.js
// route => /api/data
import nc from 'next-connect'

const handler = nc()
  .get(async (req, res) => {

  })
  .post ((req, res) => {

  })
export default (req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify({ message: 'hello' }))
}