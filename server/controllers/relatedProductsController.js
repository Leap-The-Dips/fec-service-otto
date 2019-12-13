const products = require('../models/products');

exports.getAllProducts = (req, res) => {
  // const category = req.params.categoryId;
  products.getProducts()
    .then((results) => {
      res.status(200).send(results);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
};

exports.insertProducts = (req, res) => {
  const products = req.body;
  products.insertManyProducts(products)
    .then((results) => {
      res.status(201).send(results);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

exports.getProduct = (req, res) => {
  const productId = req.query.prod_id;
  products.getProduct(productId)
    .then((results) => {
      res.status(200).send(results);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
};

exports.insertProduct = (req, res) => {
  const product = req.body;
  products.insertProduct(product)
    .then((results) => {
      res.status(201).send(results);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
};

exports.updateProduct = (req, res) => {
  const productId = req.params.productId;
  const product = req.body;
  console.log(productId, product);
  products.updateProduct(productId, product)
    .then((results) => {
      res.status(201).send(results);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
};

exports.deleteProduct = (req, res) => {
  const productId = req.params.productId;
  console.log(productId);
  products.deleteProduct(productId)
    .then((results) => {
      res.status(201).send(results);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
};

