const router = require('express').Router();
const recommendationController = require('../controllers/recommendation');
const { verifyToken } = require('../middleware/jwt');

router.post('/cv/:id', verifyToken, recommendationController.createRecommendation);

router.get('/cv/:id', verifyToken, recommendationController.getAllRecommendationsByCv);

router.delete('/:id', verifyToken, recommendationController.deleteRecommendation);

module.exports = router;
