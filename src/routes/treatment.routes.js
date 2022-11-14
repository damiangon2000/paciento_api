const router = require("express").Router();

const treatmentController = require('../controllers/treatment.controller')


router.get('/', treatmentController.list)
router.post('/', treatmentController.create)
router.get('/:id', treatmentController.get)
router.delete('/', treatmentController.delete)


module.exports = router;
