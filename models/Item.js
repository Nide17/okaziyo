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
    type: [
      {
        photo: {
          type: String
        }
      }
    ]
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
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    unique: true
  }
});

//item: the name of this model
module.exports = mongoose.model('item', ItemSchema);
