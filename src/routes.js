const express = require('express');

const routes = express.Router();
const multer = require('multer');

const multerConfig = require('./config/multer');
const DocumentController = require('./controllers/DocumentController');


routes.post('/avatar', multer(multerConfig).single('file'), DocumentController.store);

module.exports = routes;