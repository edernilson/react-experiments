const express = require('express');
const controller = require('../controllers/controller');
const auth = require('../controllers/auth');

const router = express.Router();

router.get('/', controller.getDefault);
router.get('/getemployees', auth, controller.getEmployees);
router.post('/login', controller.loginuser);
router.post('/create', controller.createEmployee);
router.post('/addweight', controller.addnewweight);

module.exports = router;


// module.exports = function(app) {
//     app.route('/').get(controller.getDefault);
//     app.route('/getemployees').get(controller.getEmployees);
//     app.route('/login').post(controller.loginuser);
//     app.route('/create').post(controller.createEmployee);
//     app.route('/addweight').post(controller.addnewweight);
// };