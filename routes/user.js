const express = require('express');
const UserController = require('../controllers/userController');
const passport = require('./../config/passport-config'); // Import the Passport configuration

const router = express.Router();
router.get('/',UserController.getUsers);
router.get('/:id',passport.authenticate("jwt",{session:false}), UserController.getUserById);
router.post('/', UserController.createUser);
router.put('/:id',passport.authenticate("jwt",{session:false}), UserController.updateUser);
router.delete('/:id',passport.authenticate("jwt",{session:false}), UserController.deleteUser);

module.exports = router;
