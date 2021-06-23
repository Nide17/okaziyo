// Bring in Mongo
const mongoose = require('mongoose');

//initialize Mongo schema
const Schema = mongoose.Schema;

//create a schema object
const ItemSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  brand: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true,
    default: 0
  },
  pictures: {
    type: Array
  },
  date_created: {
    type: Date,
    required: true,
    default: Date.now
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'category',
    unique: true,
    default: 'Others'
  },
  sub_category: {
    type: String,
    required: true,
    default: 'Others'
  },
  contactNumber: {
    type: String,
    minlength: 10,
    maxlength: 10,
    required: true,
    default: 'Others'
  },
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  }
});

//item: the name of this model
module.exports = mongoose.model('item', ItemSchema);
