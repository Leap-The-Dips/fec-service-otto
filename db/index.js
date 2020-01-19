// const mongoose = require('mongoose');
// const db = mongoose.connection;

const knex = require('knex')({
  client: 'pg',
  connection: {
    // host: '127.0.0.1',
    // user: 'osanchez',
    // password: '',
    host: '10.0.1.100',
    user: 'postgres',
    password: '!Postgresql0603',
    database: 'sdc'
  }
});

// mongoose.connect('mongodb://localhost:27017/relatedproductssdc', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true
// });


// db.once('open', () => { console.log('Connected to Mongo'); });


// const relatedProductsSdcSchema = new mongoose.Schema({
//   image: String,
//   producttitle: String,
//   shippingcost: Number,
//   price: Number,
//   productid: String
// });

// const RelatedProductsSdc = mongoose.model('relatedproductssdc', relatedProductsSdcSchema);

knex
  .select()
  .from('relatedproducts')
  .where({
    recordnumber: 1
  })
    .then(() => {
      console.log('Successfully connected to PG 10.0.1.100')
    })
    .catch((error) => {
      console.log('Error in connecting to PG', error)
    })
// knex.schema.createTableIfNotExists('relatedproducts', (table) => {
//     // table.increments('id').primary()
//     table.uuid('productid')
//     table.string('image')
//     table.string('producttitle')
//     table.float('shippingcost')
//     table.float('price')
//     table.float('recordnumber')
//   })
//   .then(() => {
//     console.log('Connected to Pg')
//   })

// exports.RelatedProductsMongo = RelatedProductsSdc;
exports.RelatedProductsPg = knex;