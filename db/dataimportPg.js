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
  // table.increments('id').primary()
  table.string('image')
  table.string('producttitle')
  table.float('shippingcost')
  table.float('price')
  table.string('productid')
});
const query = "copy relatedproducts(image,producttitle,shippingcost,price,productid) from '/Users/osanchez/coding bc/rpt16/sdc-service-otto/db/data.txt' delimiter ',' csv header";
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

// json file processing
// const dropTable = knex.schema.dropTable('relatedproducts');
// const createTable = knex.schema.createTableIfNotExists('relatedproducts', (table) => {
//   table.jsonb('data')
// })

// const query = "copy relatedproducts(data) from '/Users/osanchez/coding bc/rpt16/sdc-service-otto/db/data.txt' csv quote e'\x01' delimiter e'\x02'";

// datagen.rs.pipe(JSONStream.stringify(open='', sep='\n', close='')).pipe(datagen.ws);