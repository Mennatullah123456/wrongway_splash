const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/', controller.home);
router.get('/settings', controller.settings);
router.get('/records', controller.records);
router.get('/chat', controller.chat);
router.post('/join', controller.join);

module.exports = router;
