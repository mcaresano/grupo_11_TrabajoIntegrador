const express = require('express');
const router = express.Router();

const usersControllers = require ('../controllers/usersControllers')

router.get('/login', usersControllers.login);
router.get('/register', usersControllers.register);

module.exports = router;
