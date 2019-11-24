const faker = require('faker');
const fs = require('fs');
const Stream = require('stream');

const rs = new Stream.Readable();
const ws = fs.createWriteStream(__dirname + '/data.txt');

const generateProducts = (numberOfProducts) => {
  let products = [];
  const urlPrefix = 'https://sdc-otto.s3.amazonaws.com/image';
  for (let i = 0; i < numberOfProducts; i++) {
    let product = {
      image: `${urlPrefix}${Math.floor((Math.random() * 100))}.jpg`,
      productTitle: faker.commerce.productName(),
      shippingCost: faker.random.number({max: 8, min: 1}),
      price: faker.random.number({min: 10, max: 150}),
      productId: faker.random.uuid(),
    }
    products.push(product);
 }
 return products;
}

rs.numRecords = 0;

rs._read = () => {
  if (rs.numRecords < 10000000) {
    rs.push(JSON.stringify(generateProducts(1000)));
    rs.numRecords = rs.numRecords + 1000;
  } else {
    rs.push(null)
  }
}

rs.pipe(ws);

exports.rs = rs;
exports.ws = ws;




