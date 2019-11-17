# SDC-Otto Sanchez

Service CRUD support. Ebay Related Products:
  The following section provides details on the CRUD API calls format for this service and respective examples.

GET Request for a single product:
  GET Request Format:
    URL: http://localhost:3001/suggested?prod_id=<productId>


  GET Request Example: http://localhost:3001/suggested?prod_id=5dd18e8a56b4dac615b4c924
  Example response: {
    "_id": "5dd18e8a56b4dac615b4c924",
    "image": "urltest",
    "productTitle": "testproduct111",
    "shippingCost": 300,
    "price": 2111,
    "__v": 0
    }

POST Request for a single product:
  POST Request Format:
    URL: http://localhost:3001/product
    Headers: Content-Type: "application/json"
    Body: {
      "image": "<image url>",
      "productTitle": "<product title>",
      "shippingCost": "<product shipping cost>",
      "price": "<product price>"
    }

  POST Request Example:
    URL: http://localhost:3001/product
    Headers: Content-Type: "application/json"
    Body: {
      "image": "urltest",
      "productTitle": "testproduct111",
      "shippingCost": "300",
      "price": "2111"
    }

  POST Response Example:
    body: [
      {
          "_id": "5dd18e8a56b4dac615b4c924",
          "image": "urltest",
          "productTitle": "testproduct111",
          "shippingCost": 300,
          "price": 2111,
          "__v": 0
      }
    ]


PUT Request for a single product:
  PUT Request Format:
    URL: http://localhost:3001/product/:productId
    Headers: Content-Type: "application/json"
    Body: {
    "image": "<updated image url>",
    "productTitle": "<updated product title>",
    "shippingCost": "<updated product shipping cost>",
    "price": "<updated product price>"
    }

  PUT Request Example:
    URL: http://localhost:3001/product/5dd18e8a56b4dac615b4c924
    Headers: Content-Type: "application/json"
    Body: {
      "image": "urltest2222",
      "productTitle": "testproduct2222",
      "shippingCost": "300222",
      "price": "2111222"
    }

  PUT Response Example:
    Body (returns previous product by default): {
    "_id": "5dd18e8a56b4dac615b4c924",
    "image": "urltest",
    "productTitle": "testproduct111",
    "shippingCost": 300,
    "price": 2111,
    "__v": 0
    }

DELETE Request for a single product:
  DELETE Request Format:
    URL: http://localhost:3001/product/:productId

  DELETE Request Example:
    URL: http://localhost:3001/product/5dd18e8a56b4dac615b4c924

  DELETE Response Example:
    Body (returns deleted object): {
    "_id": "5dd18e8a56b4dac615b4c924",
    "image": "urltest2222",
    "productTitle": "testproduct2222",
    "shippingCost": 300222,
    "price": 2111222,
    "__v": 0
  }
