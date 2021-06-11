// Bring in Mongo
const mongoose = require('mongoose');

//initialize Mongo schema
const Schema = mongoose.Schema;

//create a schema object
const CategorySchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: true
  },
  date_created: {
    type: Date,
    default: Date.now
  },
  // items: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: 'item'
  //   }
  // ],
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    unique: true
  }
});

//Category: the name of this model
module.exports = mongoose.model('category', CategorySchema);
