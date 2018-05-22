/*jslint node: true*/
"use strict";

var express = require('express'),
  router = express.Router(),
  StudentController = require('./controller');


/**
 * @apiGroup Order management 
 * @apiName Create Order
 * @api {POST} /occ/createOrder
 * @apiVersion 1.0.0
 */
router.get("/createStudent", StudentController.create);

module.exports = router;