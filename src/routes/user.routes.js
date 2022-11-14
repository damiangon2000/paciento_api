// RUTAS DE USUARIOS

const router = require("express").Router(); // importar express.Router()

const userController = require('../controllers/user.controller') // importar el archivo de controladores de usuarios


router.get('/', userController.list)
router.post('/', userController.create)
router.get('/:id', userController.get)
router.delete('/', userController.delete)


module.exports = router;
