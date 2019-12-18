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
  .where({recordnumber: 9999090})
  .then(result => {
    expect(result).toBeTruthy();
  })
  .then(() => {
    done();
  })
});

test('should return data from postgreSQL by recordNumber', (done) => {
  return knex('relatedproducts')
  .where({recordnumber: 9999090})
  .then(result => {
    expect(result).toBeTruthy();
  })
  .then(() => {
    done();
  })
});

test('should return data from postgreSQL by productId', (done) => {
  return knex('relatedproducts')
    .where({productid: '64ba9ece-d695-4277-84ea-0ddac7cb9129'})
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
  return client.execute(query, ['9999090'], {prepare: true})
    .then(result => {
      expect(result).toBeTruthy();
    })
    .then(() => {
      done();
    })
});

test('should return data from Cassadra by recordNumber', (done) => {
  const query = 'SELECT * FROM sdc.relatedproducts WHERE recordnumber = ?';
  return client.execute(query, ['9999090'], {prepare: true})
    .then(result => {
      expect(result).toBeTruthy();
    })
    .then(() => {
      done();
    })
});

test('should return data from Cassadra by productId', (done) => {
  const query = 'SELECT * FROM sdc.relatedproducts WHERE productid = ?';
  return client.execute(query, ['64ba9ece-d695-4277-84ea-0ddac7cb9129'], {prepare: true})
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

// describe('aws.js', () => {
//   test('AWS anonymous function does retrieve 15 photos and is from s3 fecquarkalex', () => {
//     return aws.then(data => {
//       expect(data.length).toBe(15);
//       expect(data[0]).toMatch(new RegExp('https://fecquarkalex.s3-us-west-1.amazonaws.com'));
//     })
//   })
// })


// describe('faker.js', () => {

//   test('It is an array with 5 objects inside', () => {
//     return faker.fakerData(data => {
//       expect(typeof data === 'object');
//       expect(Array.isArray(data[0])).toBe(true);
//     })
//   })

//   test('Object has correct keys value pairs.', () => {
//     return faker.fakerData(data => {
//       let sample = data[0];
//       expect(Object.keys(sample)).toContain('image')
//       expect(typeof sample.image === 'string').toBe(true);
//       expect(Object.keys(sample)).toContain('productTitle')
//       expect(typeof sample.productTitle === 'string').toBe(true);
//       expect(Object.keys(sample)).toContain('price')
//       expect(typeof sample.price === 'number').toBe(true);
//       expect(Object.keys(sample)).toContain('shippingCost')
//       expect(typeof sample.shippingCost === 'number').toBe(true);
//     })
//   })

// })



// describe('postgresql.js', () => {

//   mongoose.connect('mongodb://localhost/fecRepo', {useNewUrlParser: true});
//   let db = mongo.db;
//   let repo = mongo.repo;

//     //Will have to refactor this.
//     it ('mongo.retrieve should find records that were inserted', async () => {
//       await mongo.del();
//       await mongo.insertOne();
//       return await mongo.retrieve()
//       .then(res => {
//         expect(res.length === 2).toBe(true);
//         mongo.del()
//       });
//     })


//     it('mongo.save should save 10 records',async () => {
//       //const repo = db.collection('repo');
//       return mongo.save(async result => {
//         await repo.find({}, (err, res) => {
//           expect(JSON.stringify(result) == JSON.stringify(res)).toBe(true);
//         })
//       })
//     })

// })

// describe('mongo.js', () => {

//     let connection;
//     let db;

//     beforeAll(async () => {
//       connection = await MongoClient.connect(global.__MONGO_URI__, {useNewUrlParser: true})
//       db = await connection.db(global.__MONGO_DB_NAME__);
//     })

//     afterAll(async () => {
//       await connection.close();
//     })

//     it('mongo.save should save 5 records',async () => {
//       const repo = db.collection('repo');

//       return mongo.save(async result => {
//         expect(result.length === 5).toBe(true);
//       })

//     })


//     it ('mongo.retrieve should find records that were inserted', async () => {
//       const repo = db.collection('repo');
//       let mock = {'image': 'https://fecquarkalex.s3-us-west-1.amazonaws.com/watch3.jpg', "productTitle": "Mock Data", "price": 200, "shippingCost": 0}


//       let inserted = await repo.insertOne(mock);
//       let find = await repo.find({});

//       console.log(inserted, "\n", find);

//       return mongo.retrieve(async res => {
//         console.log('res: ', res);
//         //console.log('inserted: ', inserted.ops);
//       })
//     })

// })