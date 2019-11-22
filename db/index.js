const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/relatedproductssdc', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

const db = mongoose.connection;
db.once('open', () => { console.log('open!'); });

const relatedProductsSdcSchema = new mongoose.Schema({
  image: String,
  productTitle: String,
  shippingCost: Number,
  price: Number,
});

const RelatedProductsSdc = mongoose.model('relatedproductssdc', relatedProductsSdcSchema);

exports.RelatedProductsSdc = RelatedProductsSdc;