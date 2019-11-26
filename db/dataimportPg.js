const datagen = require('./datagen');
const knex = require('knex')({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    user: 'osanchez',
    password: '',
    database: 'sdc'
  }
});

const dropTable = knex.schema.dropTable('relatedproducts');
const createTable = knex.schema.createTableIfNotExists('relatedproducts', (table) => {
  // table.increments('id').primary()
  table.string('image')
  table.string('producttitle')
  table.float('shippingcost')
  table.float('price')
  table.string('productid')
});

const query = "copy relatedproducts(image,producttitle,shippingcost,price,productid) from '/Users/osanchez/coding bc/rpt16/sdc-service-otto/db/data.txt' delimiter ',' csv header";

const copyCsv = knex.raw(query);


datagen.rs.pipe(datagen.stringifier).pipe(datagen.ws);

datagen.ws.on('finish', () => {
  console.log('csv file created');
  dropTable
    .then(() => {
      console.log('relatedproducts table dropped');
      return createTable;
    })
    .then(()=> {
      console.log('relatedproducts table created');
      return copyCsv;
    })
    .then((result) => {
      console.log('data copy successful, rows added: ', result.rowCount);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      process.exit();
    })
});