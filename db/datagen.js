const faker = require('faker');
const fs = require('fs');
const Stream = require('stream');

const readableStream = new Stream.Readable();
const writableStream = fs.createWriteStream(__dirname + '/data.txt');

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

const writeProducts = (numberOfCycles, numberOfProducts) => {
  readableStream.pipe(writableStream);
  console.log('starting to write data');
  for (let i = 0; i < numberOfCycles; i++) {
    readableStream.push(JSON.stringify(generateProducts(numberOfProducts)));
  }
  readableStream.push(null);
  console.log('done pushing data to the file');
}

exports.writeProducts = writeProducts;
