const express = require('express');

const router = express.Router();
const userController = require('../controllers/user.controller');
const verifyToken = require('../middlewares/verifyToken');


//----------ADmin routes----------------
router.get('/', userController.getUsers);

router.get('/:id', userController.getUser);

router.put('/', userController.updateUser);

router.delete('/', userController.deleteUser);

//----------Freelance routes----------------

router.get('/freelance/', userController.getFreelanceUsers);

router.get('/freelance/:id', userController.getFreelanceUser);

router.put('/freelance/', userController.updateFreelanceUser);


//----------Company routes----------------

router.get('/company/', userController.getCompanyUsers);

router.get('/company/:id', userController.getCompanyUser);

router.put('/company/', userController.updateCompanyUser);

//----------Search routes----------------

router.get('/freelance/search/', userController.searchUsers);

router.get('/freelance/filter/', userController.filterUsers);


module.exports = router;

