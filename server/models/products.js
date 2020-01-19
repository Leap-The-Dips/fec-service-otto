const db = require('../../db');

exports.dropRelatedProducts = () => {
  // return db.RelatedProductsMongo.remove({});
  return db.RelatedProductsPg.schema
    .dropTable('relatedproducts');
};

exports.getProducts = () => {
  // const query = db.RelatedProductsMongo.find();
  // return query.limit(10).exec();
  return db.RelatedProductsPg
    .select()
    .from('relatedproducts')
    .limit(10);
};

exports.insertManyProducts = (products) => {
  // return db.RelatedProductsMongo.insertMany(products);
  return db.RelatedProductsPg
    .insert
};

exports.getProduct = (productId) => {
  // const query = db.RelatedProductsMongo.findById(productId);
  // return query.exec();
  return db.RelatedProductsPg
    .select()
    .from('relatedproducts')
    .where({
      'recordnumber': productId
    });
};

exports.insertProduct = (product) => {
  // return db.RelatedProductsMongo.insertMany(product);
  return db.RelatedProductsPg('relatedproducts')
    .insert(product);
};

exports.deleteProduct = (productId) => {
  // const query = db.RelatedProductsMongo.findByIdAndDelete(productId);
  // return query.exec();
  return db.RelatedProductsPg('relatedproducts')
    .where({
      'recordnumber': productId
    })
    .del()
};

exports.updateProduct = (productId, product) => {
  // const query = db.RelatedProductsMongo.findByIdAndUpdate(productId, product);
  // return query.exec();
  return db.RelatedProductsPg('relatedproducts')
    .where({
      recordnumber: productId
    })
    .update(product)
};


