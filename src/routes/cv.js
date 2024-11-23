const router = require('express').Router();
const cvController = require('../controllers/cv');
const { verifyToken } = require('../middleware/jwt');

router.post('/', verifyToken, cvController.createCv);

router.get('/', verifyToken, cvController.getAllCv);

router.get('/:firstname', verifyToken, cvController.getAllCvByUser);

router.get('/:id', verifyToken, cvController.getCvById);

router.put('/:id', verifyToken, cvController.updateCv);

router.delete('/:id', verifyToken, cvController.deleteCv);

module.exports = router;
