const router = require("express").Router();

const patientController = require('../controllers/patient.controller')


router.get('/', patientController.list)
router.post('/', patientController.create)
router.get('/:id', patientController.get)
router.delete('/', patientController.delete)


module.exports = router;
