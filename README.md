# SDC-Otto Sanchez

# Service CRUD support. Ebay Related Products:
  The following section provides details on the CRUD API calls format for this service and respective examples.

-----------------------------------------------------------------------------
## GET Request for a single product:
  ### GET Request Format:
    URL: http://localhost:3001/suggested?prod_id=<productId>


  ### GET Request Example:
    http://localhost:3001/suggested?prod_id=1
  ### Example response:
[
    {
        "productid": "e1e5fbf9-00b4-4b18-928f-972e1d5ca3bd",
        "image": "https://sdc-otto.s3.amazonaws.com/image29.jpg",
        "producttitle": "Rustic Soft Bacon",
        "shippingcost": 2,
        "price": 104,
        "recordnumber": 1
    }
]

-----------------------------------------------------------------------------
## POST Request for a single product:
  ### POST Request Format:
    URL: http://localhost:3001/product
    Headers: Content-Type: "application/json"
    Body:
    {
      "image": "<image url>",
      "productTitle": "<product title>",
      "shippingCost": "<product shipping cost>",
      "price": "<product price>"
      "recordnumber": "<product record number>",
      "productid": "<product id uuid>
    }

  ### POST Request Example:
    URL: http://localhost:3001/product
    Headers: Content-Type: "application/json"
    Body:
    {
      "image": "urltest1",
      "producttitle": "testproduct111",
      "shippingcost": "300",
      "price": "2111",
      "recordnumber": "10500000",
      "productid": "6c4b808e-adca-4b81-8266-d274b1f5de7f"
    }

  ### POST Response Example:
    Body 201 response:
    {
    "command": "INSERT",
    "rowCount": 1,
    "oid": 0,
    "rows": [],
    "fields": [],
    "_parsers": [],
    "_types": {
        "_types": {
            "arrayParser": {},
            "builtins": {
                "BOOL": 16,
                "BYTEA": 17,
                "CHAR": 18,
                "INT8": 20,
                "INT2": 21,
                "INT4": 23,
                "REGPROC": 24,
                "TEXT": 25,
                "OID": 26,
                "TID": 27,
                "XID": 28,
                "CID": 29,
                "JSON": 114,
                "XML": 142,
                "PG_NODE_TREE": 194,
                "SMGR": 210,
                "PATH": 602,
                "POLYGON": 604,
                "CIDR": 650,
                "FLOAT4": 700,
                "FLOAT8": 701,
                "ABSTIME": 702,
                "RELTIME": 703,
                "TINTERVAL": 704,
                "CIRCLE": 718,
                "MACADDR8": 774,
                "MONEY": 790,
                "MACADDR": 829,
                "INET": 869,
                "ACLITEM": 1033,
                "BPCHAR": 1042,
                "VARCHAR": 1043,
                "DATE": 1082,
                "TIME": 1083,
                "TIMESTAMP": 1114,
                "TIMESTAMPTZ": 1184,
                "INTERVAL": 1186,
                "TIMETZ": 1266,
                "BIT": 1560,
                "VARBIT": 1562,
                "NUMERIC": 1700,
                "REFCURSOR": 1790,
                "REGPROCEDURE": 2202,
                "REGOPER": 2203,
                "REGOPERATOR": 2204,
                "REGCLASS": 2205,
                "REGTYPE": 2206,
                "UUID": 2950,
                "TXID_SNAPSHOT": 2970,
                "PG_LSN": 3220,
                "PG_NDISTINCT": 3361,
                "PG_DEPENDENCIES": 3402,
                "TSVECTOR": 3614,
                "TSQUERY": 3615,
                "GTSVECTOR": 3642,
                "REGCONFIG": 3734,
                "REGDICTIONARY": 3769,
                "JSONB": 3802,
                "REGNAMESPACE": 4089,
                "REGROLE": 4096
            }
        },
        "text": {},
        "binary": {}
    },
    "RowCtor": null,
    "rowAsArray": false
    }

-----------------------------------------------------------------------------
## PUT Request for a single product:
  ### PUT Request Format:
    URL: http://localhost:3001/product/:productId
    Headers: Content-Type: "application/json"
    Body:
    {
    "productid": "<product id in uuid format>",
    "image": "<updated image url>",
    "productTitle": "<updated product title>",
    "shippingCost": "<updated product shipping cost>",
    "price": "<updated product price>",
    "recordnumber": "<product id in integer format>"
    }

  ### PUT Request Example:
    URL: http://localhost:3001/product/1
    Headers: Content-Type: "application/json"
    Body:
    {
        "productid": "e1e5fbf9-00b4-4b18-928f-972e1d5ca3bd",
        "image": "https://sdc-otto.s3.amazonaws.com/image29.jpg",
        "producttitle": "Rustic Soft Bacon Test",
        "shippingcost": 2,
        "price": 104,
        "recordnumber": 1
    }

  ### PUT Response Example:
    Body:
    Created
-----------------------------------------------------------------------------
## DELETE Request for a single product:
  ### DELETE Request Format:
    URL: http://localhost:3001/product/:productId

  ### DELETE Request Example:
    URL: http://localhost:3001/product/10500000

  ### DELETE Response Example:
    Body:
    Created
