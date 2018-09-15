/* eslint-env node */
'use strict';

module.exports = function (app) {
  const express = require('express');
  const testRouter = express.Router();

  testRouter.get('/', function (req, res) {
    res.send({
      test: []
    });
  });

  testRouter.post('/', function (req, res) {
    res.status(201).end();
  });

  testRouter.get('/:id', function (req, res) {
    res.send({
      test: {
        id: req.params.id
      }
    });
  });

  testRouter.put('/:id', function (req, res) {
    res.send({
      test: {
        id: req.params.id
      }
    });
  });

  testRouter.delete('/:id', function (req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/test', require('body-parser').json());
  app.use('/api/test', testRouter);
};
