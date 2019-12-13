const cassandra = require('cassandra-driver')
const client = new cassandra.Client({ contactPoints: ['localhost'], localDataCenter: 'datacenter1' });
const parse = require('csv-parse');
const fs = require('fs');
const executeConcurrent = cassandra.concurrent.executeConcurrent;
const rs = fs.createReadStream('../db/data.txt');
const fsPromises = fs.promises;

const parser = parse(
  {
    from_line: 2
  }
);

const stream = rs.pipe(parser);

fsPromises.access('./data.txt')
  .then(() => {
    console.log('found data.txt file in folder');
    return client.connect();
  })
  .then(function() {
    const query = "DROP KEYSPACE IF EXISTS sdc";
    return client.execute(query);
  })
  .then(function () {
    const query = "CREATE KEYSPACE IF NOT EXISTS sdc WITH replication =" +
    "{'class': 'SimpleStrategy', 'replication_factor': '1' }";
    return client.execute(query);
  })
  .then(function () {
    const query = "CREATE TABLE IF NOT EXISTS sdc.relatedproducts" +
    " (productid uuid PRIMARY KEY, image text, producttitle text, shippingcost text, price text)";
    return client.execute(query);
  })
  .then(function () {
    return client.metadata.getTable('sdc', 'relatedproducts');
  })
  .then(() => {
      const query = 'INSERT INTO sdc.relatedproducts (productid, image, producttitle, shippingcost, price) values (?, ?, ?, ?, ?)';
      return executeConcurrent(client, query, stream, {prepare: true, concurrencyLevel: 500});
  })
  .then((result) => {
    console.log(result);
    console.log(`data loading process to cassandra took: ${process.uptime()} seconds`)
    return client.shutdown();
  })
  .catch(function (err) {
    console.error('There was an error', err);
    return client.shutdown().then(() => { throw err; });
  });