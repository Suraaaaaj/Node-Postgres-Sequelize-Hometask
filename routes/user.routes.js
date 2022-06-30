const userController = require('../controller/user.controller.js');
const router = require('express').Router();

// to add new user
router.post('/addUser', userController.addUser);

// to get all user
router.get('/allUsers', userController.getAllUsers);

// to update user info
router.put('/:id', userController.updateUser);

// to soft delete 
router.put('/delete/:id', userController.deleteUser);



module.exports = router;