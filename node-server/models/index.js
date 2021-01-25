const mongoose = require('mongoose');
require('dotenv').config();
const url = process.env.livemongo 
const localurl = process.env.localmongo;

module.exports = mongoose.connect(localurl, {
  useNewUrlParser: true,
  useUnifiedTopology:true, 
  useFindAndModify:true
}).then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err));