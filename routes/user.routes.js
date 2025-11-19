const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

// Import middleware
const authBearer  = require("../middlewares/auth.middleware.js");

// Routing standar REST API
// Semua Endpoint users harus PROTECTED karena data bersifat rahasia
router.get('/', authBearer, userController.getAllUsers);        // get all
router.get('/:id', authBearer, userController.getUserById);     // search by id
router.post('/', authBearer, userController.createUser);        // new data
router.put('/:id', authBearer, userController.updateUser);      // update by id
router.delete('/:id', authBearer, userController.deleteUser);   // delete

module.exports = router;
