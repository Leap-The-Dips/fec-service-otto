const fs = require('fs');
const fsPromises = fs.promises;
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
  table.uuid('productid').primary().unique()
  table.string('image')
  table.string('producttitle')
  table.float('shippingcost')
  table.float('price')
  table.float('recordnumber')
});
const query = "copy relatedproducts(productid,image,producttitle,shippingcost,price, recordnumber) from '/Users/osanchez/coding bc/rpt16/sdc-service-otto/db/data.txt' delimiter ',' csv header";
const copyCsvToTable = knex.raw(query);

fsPromises.access('./data.txt')
  .then(() => {
    console.log('found data.txt file in folder');
    return dropTable;
  })
  .then(() => {
    console.log('dropped relatedproducts table');
    return createTable;
  })
  .then(() => {
    console.log('created table');
    return copyCsvToTable;
  })
  .then ((result) => {
    console.log('number of records copied to the table: ', result.rowCount);
    console.log(`data loading process took: ${process.uptime()} seconds`)
  })
  .catch((err) => {
    console.log('error: ', err);
  })
  .finally(() => {
    process.exit();
  });
