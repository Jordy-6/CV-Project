const router = require('express').Router();
const userController = require('../controllers/user');
const { verifyToken } = require('../middleware/jwt');

/**
 * @swagger
 * tags:
 *   name: User
 *   description: API for managing user information
 */

/**
 * @swagger
 * /api/user/me:
 *   post:
 *     summary: Get the current user's information
 *     description: Retrieve the information of the currently authenticated user based on the provided JWT token.
 *     tags:
 *       - User
 *     responses:
 *       200:
 *         description: Successfully retrieved user information.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: The unique identifier of the user.
 *                   example: "670507e5a85e8b4542098ab9"
 *                 firstname:
 *                   type: string
 *                   description: The user's first name.
 *                   example: John
 *                 lastname:
 *                   type: string
 *                   description: The user's last name.
 *                   example: Doe
 *                 email:
 *                   type: string
 *                   description: The user's email address.
 *                   example: john.doe@example.com
 *       401:
 *         description: Unauthorized - No token provided.
 *       500:
 *         description: Internal server error.
 */
router.post('/me', verifyToken, userController.getMyInfos);

/**
 * @swagger
 * /api/user/me:
 *   put:
 *     summary: Update the current user's information
 *     description: Updates the authenticated user's information. Requires a valid JWT token.
 *     tags:
 *       - User
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstname:
 *                 type: string
 *                 description: The user's first name.
 *                 example: John
 *               lastname:
 *                 type: string
 *                 description: The user's last name.
 *                 example: Doe
 *               email:
 *                 type: string
 *                 format: email
 *                 description: The user's email address.
 *                 example: john.doe@example.com
 *               password:
 *                 type: string
 *                 description: The user's new password.
 *                 example: newSecurePassword123
 *             required:
 *               - firstname
 *               - lastname
 *               - email
 *               - password
 *     responses:
 *       200:
 *         description: User information successfully updated.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Success message.
 *                   example: User infos was successfully updated
 *                 data:
 *                   type: object
 *                   properties:
 *                     firstname:
 *                       type: string
 *                       example: John
 *                     lastname:
 *                       type: string
 *                       example: Doe
 *                     email:
 *                       type: string
 *                       format: email
 *                       example: john.doe@example.com
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *                       example: 2024-11-24T12:34:56Z
 *       400:
 *         description: Validation error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Invalid user information
 *       401:
 *         description: Unauthorized - No token provided.
 *       403:
 *         description: You cannot use your old password.
 *       404:
 *         description: User not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: User not found
 *       500:
 *         description: Internal server error.
 */
router.put('/me', verifyToken, userController.updateInfos);

module.exports = router;
