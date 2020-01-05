// const aws = require('../db/aws.js');
const faker = require('../db/faker.js');
// const mongo = require('../db/mongo.js');
// const {MongoClient} = require('mongodb');
// const mongoose = require('mongoose');
const cassandra = require('cassandra-driver')
const client = new cassandra.Client({ contactPoints: ['localhost'], localDataCenter: 'datacenter1' });

// const fs = require('fs');
// const fsPromises = fs.promises;
const knex = require('knex')({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    user: 'osanchez',
    password: '',
    database: 'sdc'
  }
});


test('should return data from postgreSQL by recordNumber- Dummy Test', (done) => {
  return knex('relatedproducts')
  .where({recordnumber: 200})
  .then(result => {
    expect(result).toBeTruthy();
  })
  .then(() => {
    done();
  })
});

test('should return data from postgreSQL by productId, bottom 1% of the database', (done) => {
  return knex('relatedproducts')
    .where({productid: 'fb0b1ac1-d549-4813-9284-6d85f5996939'})
    .then(result => {
      expect(result).toBeTruthy();
    })
    .then(() => {
      done();
    })
});

test('should return data from postgreSQL by recordNumber, bottom 1% of the database', (done) => {
  return knex('relatedproducts')
  .where({recordnumber: 9999089})
  .then(result => {
    expect(result).toBeTruthy();
  })
  .then(() => {
    knex.destroy()
  })
  .then(() => {
    done();
  })
});

test('should return data from Cassadra by recordNumber- Dummy test', (done) => {
  const query = 'SELECT * FROM sdc.relatedproducts WHERE recordnumber = ?';
  return client.execute(query, ['200'], {prepare: true})
    .then(result => {
      expect(result).toBeTruthy();
    })
    .then(() => {
      done();
    })
});

test('should return data from Cassandra by productId, bottom 1% of the database', (done) => {
  const query = 'SELECT * FROM sdc.relatedproducts WHERE productid = ?';
  return client.execute(query, ['fb0b1ac1-d549-4813-9284-6d85f5996939'], {prepare: true})
    .then(result => {
      expect(result).toBeTruthy();
    })
    .then(() => {
      done();
    })
});

test('should return data from Cassandra by recordNumber, bottom 1% of the database', (done) => {
  const query = 'SELECT * FROM sdc.relatedproducts WHERE recordnumber = ?';
  return client.execute(query, ['9999089'], {prepare: true})
    .then(result => {
      expect(result).toBeTruthy();
    })
    .then(() => {
      client.shutdown();
    })
    .then(() => {
      done();
    })
});


//   test('should return data from Cassandra by recordNumber, bottom 1% of the database', (done) => {
//     const query = 'SELECT * FROM sdc.relatedproducts WHERE recordnumber = ?';
//     return client.execute(query, ['9999089'], {prepare: true})
//     .then(result => {
//       expect(result).toBeTruthy();
//     })
//     .then(() => {
//       done();
//     })
// });
