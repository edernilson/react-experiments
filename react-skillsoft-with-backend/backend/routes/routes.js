const express = require('express');
const controller = require('../controllers/controller');

const router = express.Router();

router.get('/', controller.getDefault);
router.get('/getemployees', controller.getEmployees);
router.post('/login', controller.loginuser);
router.post('/create', controller.createEmployee);
router.post('/addweight', controller.addnewweight);

module.exports = router;