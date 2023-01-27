const express = require('express')
const UserController = require('../controllers/User')
const router = express.Router();

router.get('/', UserController.findAll);// afficher tous les utilisateurs
router.get('/:id', UserController.findOne);// afficher un utilisateur 
router.post('/', UserController.create);// creer un utilisateur 
router.patch('/:id', UserController.update);// mise a jour  dun  fantome on pourrait mettre put
router.delete('/:id', UserController.destroy); // delete a fantome 

module.exports = router