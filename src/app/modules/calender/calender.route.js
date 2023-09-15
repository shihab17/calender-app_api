const express = require('express');
const router = express.Router();
const { get, create, update, remove } = require('./calender.controller');
router.get('/', get);
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', remove);
module.exports = router;