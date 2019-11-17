const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/relatedproductssdc', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

const db = mongoose.connection;
db.once('open', () => { console.log('open!'); });

const relatedProductsSdcSchema = new mongoose.Schema({
  image: String,
  productTitle: String,
  shippingCost: Number,
  price: Number,
});

const RelatedProductsSdc = mongoose.model('relatedproductssdc', relatedProductsSdcSchema);

exports.RelatedProductsSdc = RelatedProductsSdc;
// exports.db = db;



//given codebase

/* eslint-disable arrow-body-style */
/* eslint-disable no-console */
// const mongoose = require('mongoose');
// const fakerAPI = require('./faker');
// mongoose.connect('mongodb://localhost/fecRepo', {useNewUrlParser: true});
// Need below for docker.
// mongoose.connect('mongodb://localhost/fecRepo:27017', { useNewUrlParser: true })
//   .catch((err) => console.error(err));


// const db = mongoose.connection;
// db.once('open', () => { console.log('open!'); });


// const repoSchema = mongoose.Schema({
//   image: String,
//   productTitle: String,
//   shippingCost: Number,
//   price: Number,
// });

// const repo = mongoose.model('repos', repoSchema);



// given functions to interact with db

// const save = (cb) => {
//   const records = fakerAPI.fakerData();
//   records.then((r) => {
//     repo.deleteMany((err) => {
//       if (err) throw err;
//       else {
//         repo.insertMany(r, (error, result) => {
//           if (error) throw error;
//           else {
//             cb(result);
//           }
//         });
//       }
//     });
//   });
// };

// const findOne = () => {
//   return new Promise((resolve) => {
//     repo.findOne({ productTitle: 'Chewbacca w/ Sound Star Wars 15" Plush Toy' })
//       .then((r) => {
//         repo.findOne({ productTitle: 'Chewbacca Star Wars Talking Stuffed Animal Plush Wookie Doll 8" Inches' })
//           .then((f) => resolve([r, f]));
//       });
//   });
// };


// const retrieve = () => {
//   return new Promise((resolve, reject) => {
//     repo.find({}, (err, res) => {
//       if (err) reject(err);
//       else {
//         resolve(res);
//       }
//     });
//   });
// };

// module.exports = {
//   save,
//   retrieve,
//   db,
//   repo,
//   findOne,
// };
