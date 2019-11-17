const express = require('express');
const router = express.Router();
const controllers = require('../controllers/relatedProductsController');

router.get('/data', controllers.getAllProducts);

router.post('/insertproducts', controllers.insertProducts);

router.get('/suggested', controllers.getProduct);

router.post('/product', controllers.insertProduct);

router.put('/product/:productId', controllers.updateProduct);

router.delete('/product/:productId', controllers.deleteProduct);

module.exports = router;