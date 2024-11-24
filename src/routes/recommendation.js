const router = require('express').Router();
const recommendationController = require('../controllers/recommendation');
const { verifyToken } = require('../middleware/jwt');

/**
 * @swagger
 * tags:
 *   name: Recommendations
 *   description: API for managing CV Recommendation
 */

/**
 * @swagger
 * /api/recommendation/cv/{id}:
 *   post:
 *     summary: Create a new recommendation for a CV
 *     description: Adds a new recommendation to the specified CV.
 *     tags:
 *       - Recommendations
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the CV to add the recommendation to.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - description
 *             properties:
 *               description:
 *                 type: string
 *                 description: The content of the recommendation.
 *                 example: "This is a recommendation."
 *     responses:
 *       201:
 *         description: Recommendation created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 description:
 *                   type: string
 *                   description: The content of the recommendation.
 *                   example: "This is a recommendation."
 *                 id:
 *                   type: string
 *                   description: The unique identifier of the recommendation.
 *                   example: "670507e5a85e8b4542098ab9"
 *                 userid:
 *                   type: object
 *                   properties:
 *                     firstname:
 *                       type: string
 *                       description: The first name of the user.
 *                       example: John
 *                     lastname:
 *                       type: string
 *                       description: The last name of the user.
 *                       example: Doe
 *                     id:
 *                       type: string
 *                       description: The unique identifier of the user.
 *                       example: "670507e5a85e8b4542098ab9"
 *                 cvid:
 *                   type: string
 *                   description: The ID of the CV the recommendation is for.
 *                   example: "670507e5a85e8b4542098ab9"
 *       400:
 *         description: Bad request - Invalid input or missing required fields.
 *       401:
 *         description: Unauthorized - No token provided.
 *       500:
 *         description: Internal server error.
 */
router.post('/cv/:id', verifyToken, recommendationController.createRecommendation);

/**
 * @swagger
 * /api/recommendation/cv/{id}:
 *   get:
 *     summary: Get all recommendations for a CV
 *     description: Retrieves all recommendations for the specified CV.
 *     tags:
 *       - Recommendations
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the CV to retrieve recommendations for.
 *     responses:
 *       200:
 *         description: Successfully retrieved recommendations.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   description:
 *                     type: string
 *                     description: The content of the recommendation.
 *                     example: "This is a recommendation."
 *                   id:
 *                     type: string
 *                     description: The unique identifier of the recommendation.
 *                     example: "670507e5a85e8b4542098ab9"
 *                   userId:
 *                     type: object
 *                     properties:
 *                       firstname:
 *                         type: string
 *                         description: The first name of the user.
 *                         example: John
 *                       lastname:
 *                         type: string
 *                         description: The last name of the user.
 *                         example: Doe
 *                       id:
 *                         type: string
 *                         description: The unique identifier of the user.
 *                         example: "670507e5a85e8b4542098ab9"
 *                   cvid:
 *                     type: string
 *                     description: The ID of the CV the recommendation is for.
 *                     example: "670507e5a85e8b4542098ab9"
 *       400:
 *         description: Bad request - Invalid input or missing required fields.
 *       401:
 *         description: Unauthorized - No token provided.
 *       500:
 *         description: Internal server error.
 */
router.get('/cv/:id', verifyToken, recommendationController.getAllRecommendationsByCv);

/**
 * @swagger
 * /api/recommendation/{id}:
 *   delete:
 *     summary: Delete a recommendation
 *     description: Deletes the specified recommendation.
 *     tags:
 *       - Recommendations
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the recommendation to delete.
 *     responses:
 *       200:
 *         description: Recommendation deleted successfully.
 *       400:
 *         description: Bad request - Invalid input or missing required fields.
 *       401:
 *         description: Unauthorized - No token provided.
 *       404:
 *         description: Recommendation not found.
 *       500:
 *         description: Internal server error.
 */
router.delete('/:id', verifyToken, recommendationController.deleteRecommendation);

module.exports = router;
