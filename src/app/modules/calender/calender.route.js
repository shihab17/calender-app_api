const express = require('express');
const router = express.Router();
const { get, create } = require('./calender.controller');
router.get('/', get);
router.post('/', create);
module.exports = router;