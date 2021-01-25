const { Schema, model } = require('mongoose');

const MatchSchema = new Schema({
  id:            {type: String, required: true},
  title:         {type: String, required: true},
  type:          {type: String, required: true},
  description:   {type: String, required: true},
  downloadLink:  {type: String, required: true},
  published_at:  {type: Date, default: Date.now},
});

module.exports = model('web_projects', MatchSchema);