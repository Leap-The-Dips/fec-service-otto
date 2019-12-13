const faker = require('faker');
const fs = require('fs');
const Stream = require('stream');
const stringify = require('csv-stringify');

const rs = new Stream.Readable({objectMode: true});
const ws = fs.createWriteStream(__dirname + '/data.txt');

const stringifier = stringify({
  header: true,
  columns: {
    productid: 'productid',
    image: 'image',
    producttitle: 'producttitle',
    shippingcost: 'shippingcost',
    price: 'price',
  }
});

const generateProducts = () => {
  const urlPrefix = 'https://sdc-otto.s3.amazonaws.com/image';
    let product = {
      productid: faker.random.uuid(),
      image: `${urlPrefix}${Math.floor((Math.random() * 100))}.jpg`,
      producttitle: faker.commerce.productName(),
      shippingcost: faker.random.number({max: 8, min: 1}),
      price: faker.random.number({min: 10, max: 150}),
    }
  return product;
};

rs.numRecords = 0;

rs._read = () => {
  if (rs.numRecords < 10000000) {
    rs.push(generateProducts());
    rs.numRecords = rs.numRecords + 1;
  } else {
    rs.push(null)
  }
}

ws.on('pipe', () => {
  console.log('started writing records to file');
})

ws.on('finish', () => {
  console.log('finished writing records to file');
  console.log(`data generation process took: ${process.uptime()} seconds`)
});

rs.pipe(stringifier).pipe(ws);