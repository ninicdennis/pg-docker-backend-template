const express = require('express'),
	router = express.Router(),
	Test = require('../controllers/testController')


router.get('/test', Test.index)

module.exports = router
