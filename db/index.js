const mongoose = require('mongoose');
const db = mongoose.connection;

const knex = require('knex')({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    user: 'osanchez',
    password: '',
    database: 'sdc'
  }
});

mongoose.connect('mongodb://localhost:27017/relatedproductssdc', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

db.once('open', () => { console.log('Connected to Mongo'); });

const relatedProductsSdcSchema = new mongoose.Schema({
  image: String,
  productTitle: String,
  shippingCost: Number,
  price: Number,
  productId: String
});

knex.schema.createTableIfNotExists('relatedproducts', (table) => {
    table.increments('id').primary()
    table.string('image')
    table.string('productTitle')
    table.float('shippingCost')
    table.float('price')
    table.string('productId')
})
  .then(() => {
    console.log('Connected to Pg')
  })

const RelatedProductsSdc = mongoose.model('relatedproductssdc', relatedProductsSdcSchema);

exports.RelatedProductsMongo = RelatedProductsSdc;
exports.RelatedProductsPg = knex;