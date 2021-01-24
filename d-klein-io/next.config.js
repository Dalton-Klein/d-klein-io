const nextEnv = require('next-env')
const dotenvLoad = require('dotenv-load')

dotenvLoad()
//Allows our app to use the .env file
const withEnv = nextEnv()
module.exports = withEnv()