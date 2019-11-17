const db = require('../../db/mongo');

exports.dropRelatedProductsSdcTable = () => {
  return db.RelatedProductsSdc.remove({});
};

exports.getProducts = () => {
  const query = db.RelatedProductsSdc.find();
  return query.limit(10).exec();
};

exports.insertManyProducts = (products) => {
  return db.RelatedProductsSdc.insertMany(products);
};

exports.getProduct = (productId) => {
  const query = db.RelatedProductsSdc.findById(productId);
  return query.exec();
};

exports.insertProduct = (product) => {
  return db.RelatedProductsSdc.insertMany(product);
};

exports.deleteProduct = (productId) => {
  const query = db.RelatedProductsSdc.findByIdAndDelete(productId);
  return query.exec();
};

exports.updateProduct = (productId, product) => {
  const query = db.RelatedProductsSdc.findByIdAndUpdate(productId, product);
  return query.exec();
};


