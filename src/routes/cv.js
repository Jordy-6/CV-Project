const router = require('express').Router();
const cvController = require('../controllers/cv');
const { verifyToken } = require('../middleware/jwt');

/**
 * @swagger
 * tags:
 *   name: CV
 *   description: API for managing CV
 */

/**
 * @swagger
 * /api/cv:
 *   post:
 *     summary: Create a new CV
 *     description: Adds a new CV to the system.
 *     tags:
 *       - CV
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - firstname
 *               - lastname
 *               - description
 *               - visible
 *             properties:
 *               firstname:
 *                 type: string
 *                 description: The first name of the user.
 *                 example: John
 *               lastname:
 *                 type: string
 *                 description: The last name of the user.
 *                 example: Doe
 *               description:
 *                 type: string
 *                 description: A brief description of the CV.
 *                 example: "Experienced software developer."
 *               diplomes:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     title:
 *                       type: string
 *                       description: The title of the diploma.
 *                       example: "Bachelor of Science in Computer Science"
 *                     school:
 *                       type: string
 *                       description: The school where the diploma was obtained.
 *                       example: "MIT"
 *                     year:
 *                       type: number
 *                       description: The year the diploma was obtained.
 *                       example: 2020
 *                 description: A list of diplomas.
 *               certifications:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                       description: The name of the certification.
 *                       example: "Certified Java Developer"
 *                     issuedBy:
 *                       type: string
 *                       description: The issuer of the certification.
 *                       example: "Oracle"
 *                     year:
 *                       type: number
 *                       description: The year the certification was obtained.
 *                       example: 2021
 *                 description: A list of certifications.
 *               formations:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                       description: The name of the formation.
 *                       example: "Advanced React Training"
 *                     institution:
 *                       type: string
 *                       description: The institution where the formation was obtained.
 *                       example: "Coursera"
 *                     year:
 *                       type: number
 *                       description: The year the formation was obtained.
 *                       example: 2022
 *                 description: A list of formations.
 *               jobs:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     title:
 *                       type: string
 *                       description: The title of the job.
 *                       example: "Software Engineer"
 *                     startYear:
 *                       type: number
 *                       description: The year the job started.
 *                       example: 2019
 *                     endYear:
 *                       type: number
 *                       description: The year the job ended.
 *                       example: 2021
 *                 description: A list of jobs.
 *               missions:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                       description: The name of the mission.
 *                       example: "Developed a new feature for the product"
 *                     description:
 *                       type: string
 *                       description: A brief description of the mission.
 *                       example: "Implemented a new feature that improved performance by 20%"
 *                 description: A list of missions.
 *               compagnies:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                       description: The name of the company.
 *                       example: "XYZ Corp"
 *                     location:
 *                       type: string
 *                       description: The location of the company.
 *                       example: "New York, NY"
 *                     industry:
 *                       type: string
 *                       description: The industry of the company.
 *                       example: "Technology"
 *                 description: A list of companies.
 *               visible:
 *                 type: boolean
 *                 description: Visibility status of the CV.
 *                 example: true
 *     responses:
 *       201:
 *         description: CV created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: The unique identifier of the CV.
 *                   example: "670507e5a85e8b4542098ab9"
 *                 userid:
 *                   type: string
 *                   description: The ID of the user who created the CV.
 *                   example: "670507e5a85e8b4542098ab9"
 *                 firstname:
 *                   type: string
 *                   description: The first name of the user.
 *                   example: John
 *                 lastname:
 *                   type: string
 *                   description: The last name of the user.
 *                   example: Doe
 *                 description:
 *                   type: string
 *                   description: A brief description of the CV.
 *                   example: "Experienced software developer."
 *                 diplomes:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       title:
 *                         type: string
 *                         description: The title of the diploma.
 *                         example: "Bachelor of Science in Computer Science"
 *                       school:
 *                         type: string
 *                         description: The school where the diploma was obtained.
 *                         example: "MIT"
 *                       year:
 *                         type: number
 *                         description: The year the diploma was obtained.
 *                         example: 2020
 *                 certifications:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       name:
 *                         type: string
 *                         description: The name of the certification.
 *                         example: "Certified Java Developer"
 *                       issuedBy:
 *                         type: string
 *                         description: The issuer of the certification.
 *                         example: "Oracle"
 *                       year:
 *                         type: number
 *                         description: The year the certification was obtained.
 *                         example: 2021
 *                 formations:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       name:
 *                         type: string
 *                         description: The name of the formation.
 *                         example: "Advanced React Training"
 *                       institution:
 *                         type: string
 *                         description: The institution where the formation was obtained.
 *                         example: "Coursera"
 *                       year:
 *                         type: number
 *                         description: The year the formation was obtained.
 *                         example: 2022
 *                 jobs:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       title:
 *                         type: string
 *                         description: The title of the job.
 *                         example: "Software Engineer"
 *                       startYear:
 *                         type: number
 *                         description: The year the job started.
 *                         example: 2019
 *                       endYear:
 *                         type: number
 *                         description: The year the job ended.
 *                         example: 2021
 *                 missions:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       name:
 *                         type: string
 *                         description: The name of the mission.
 *                         example: "Developed a new feature for the product"
 *                       description:
 *                         type: string
 *                         description: A brief description of the mission.
 *                         example: "Implemented a new feature that improved performance by 20%"
 *                 compagnies:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       name:
 *                         type: string
 *                         description: The name of the company.
 *                         example: "XYZ Corp"
 *                       location:
 *                         type: string
 *                         description: The location of the company.
 *                         example: "New York, NY"
 *                       industry:
 *                         type: string
 *                         description: The industry of the company.
 *                         example: "Technology"
 *                 visible:
 *                   type: boolean
 *                   description: Visibility status of the CV.
 *                   example: true
 *       400:
 *         description: Bad request - Invalid input or missing required fields.
 *       401:
 *         description: Unauthorized - Invalid or missing token.
 *       500:
 *         description: Internal server error.
 */
router.post('/', verifyToken, cvController.createCv);

/**
 * @swagger
 * /api/cv:
 *   get:
 *     summary: Get all CVs
 *     description: Retrieves all CVs from the system.
 *     tags:
 *       - CV
 *     responses:
 *       200:
 *         description: Successfully retrieved all CVs.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     description: The unique identifier of the CV.
 *                     example: "670507e5a85e8b4542098ab9"
 *                   userid:
 *                     type: string
 *                     description: The ID of the user who created the CV.
 *                     example: "670507e5a85e8b4542098ab9"
 *                   firstname:
 *                     type: string
 *                     description: The first name of the user.
 *                     example: John
 *                   lastname:
 *                     type: string
 *                     description: The last name of the user.
 *                     example: Doe
 *                   description:
 *                     type: string
 *                     description: A brief description of the CV.
 *                     example: "Experienced software developer."
 *                   diplomes:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         title:
 *                           type: string
 *                           description: The title of the diploma.
 *                           example: "Bachelor of Science in Computer Science"
 *                         school:
 *                           type: string
 *                           description: The school where the diploma was obtained.
 *                           example: "MIT"
 *                         year:
 *                           type: number
 *                           description: The year the diploma was obtained.
 *                           example: 2020
 *                   certifications:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         name:
 *                           type: string
 *                           description: The name of the certification.
 *                           example: "Certified Java Developer"
 *                         issuedBy:
 *                           type: string
 *                           description: The issuer of the certification.
 *                           example: "Oracle"
 *                         year:
 *                           type: number
 *                           description: The year the certification was obtained.
 *                           example: 2021
 *                   formations:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         name:
 *                           type: string
 *                           description: The name of the formation.
 *                           example: "Advanced React Training"
 *                         institution:
 *                           type: string
 *                           description: The institution where the formation was obtained.
 *                           example: "Coursera"
 *                         year:
 *                           type: number
 *                           description: The year the formation was obtained.
 *                           example: 2022
 *                   jobs:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         title:
 *                           type: string
 *                           description: The title of the job.
 *                           example: "Software Engineer"
 *                         startYear:
 *                           type: number
 *                           description: The year the job started.
 *                           example: 2019
 *                         endYear:
 *                           type: number
 *                           description: The year the job ended.
 *                           example: 2021
 *                   missions:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         name:
 *                           type: string
 *                           description: The name of the mission.
 *                           example: "Developed a new feature for the product"
 *                         description:
 *                           type: string
 *                           description: A brief description of the mission.
 *                           example: "Implemented a new feature that improved performance by 20%"
 *                   compagnies:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         name:
 *                           type: string
 *                           description: The name of the company.
 *                           example: "XYZ Corp"
 *                         location:
 *                           type: string
 *                           description: The location of the company.
 *                           example: "New York, NY"
 *                         industry:
 *                           type: string
 *                           description: The industry of the company.
 *                           example: "Technology"
 *                   visible:
 *                     type: boolean
 *                     description: Visibility status of the CV.
 *                     example: true
 *       400:
 *         description: Bad request - Invalid input or missing required fields.
 *       401:
 *         description: Unauthorized - Invalid or missing token.
 *       500:
 *         description: Internal server error.
 */
router.get('/', cvController.getAllCv);

/**
 * @swagger
 * /api/cv/me/{id}:
 *   get:
 *     summary: Get all CVs by user
 *     description: Retrieves all CVs created by the specified user.
 *     tags:
 *       - CV
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the user whose CVs are to be retrieved.
 *     responses:
 *       200:
 *         description: Successfully retrieved all CVs by the user.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     description: The unique identifier of the CV.
 *                     example: "670507e5a85e8b4542098ab9"
 *                   userid:
 *                     type: string
 *                     description: The ID of the user who created the CV.
 *                     example: "670507e5a85e8b4542098ab9"
 *                   firstname:
 *                     type: string
 *                     description: The first name of the user.
 *                     example: John
 *                   lastname:
 *                     type: string
 *                     description: The last name of the user.
 *                     example: Doe
 *                   description:
 *                     type: string
 *                     description: A brief description of the CV.
 *                     example: "Experienced software developer."
 *                   diplomes:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         title:
 *                           type: string
 *                           description: The title of the diploma.
 *                           example: "Bachelor of Science in Computer Science"
 *                         school:
 *                           type: string
 *                           description: The school where the diploma was obtained.
 *                           example: "MIT"
 *                         year:
 *                           type: number
 *                           description: The year the diploma was obtained.
 *                           example: 2020
 *                   certifications:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         name:
 *                           type: string
 *                           description: The name of the certification.
 *                           example: "Certified Java Developer"
 *                         issuedBy:
 *                           type: string
 *                           description: The issuer of the certification.
 *                           example: "Oracle"
 *                         year:
 *                           type: number
 *                           description: The year the certification was obtained.
 *                           example: 2021
 *                   formations:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         name:
 *                           type: string
 *                           description: The name of the formation.
 *                           example: "Advanced React Training"
 *                         institution:
 *                           type: string
 *                           description: The institution where the formation was obtained.
 *                           example: "Coursera"
 *                         year:
 *                           type: number
 *                           description: The year the formation was obtained.
 *                           example: 2022
 *                   jobs:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         title:
 *                           type: string
 *                           description: The title of the job.
 *                           example: "Software Engineer"
 *                         startYear:
 *                           type: number
 *                           description: The year the job started.
 *                           example: 2019
 *                         endYear:
 *                           type: number
 *                           description: The year the job ended.
 *                           example: 2021
 *                   missions:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         name:
 *                           type: string
 *                           description: The name of the mission.
 *                           example: "Developed a new feature for the product"
 *                         description:
 *                           type: string
 *                           description: A brief description of the mission.
 *                           example: "Implemented a new feature that improved performance by 20%"
 *                   compagnies:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         name:
 *                           type: string
 *                           description: The name of the company.
 *                           example: "XYZ Corp"
 *                         location:
 *                           type: string
 *                           description: The location of the company.
 *                           example: "New York, NY"
 *                         industry:
 *                           type: string
 *                           description: The industry of the company.
 *                           example: "Technology"
 *                   visible:
 *                     type: boolean
 *                     description: Visibility status of the CV.
 *                     example: true
 *       400:
 *         description: Bad request - Invalid input or missing required fields.
 *       401:
 *         description: Unauthorized - Invalid or missing token.
 *       500:
 *         description: Internal server error.
 */
router.get('/me/:id', verifyToken, cvController.getAllCvByUser);

/**
 * @swagger
 * /api/cv/{id}:
 *   get:
 *     summary: Get a CV by ID
 *     description: Retrieves a CV by its ID.
 *     tags:
 *       - CV
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the CV to retrieve.
 *     responses:
 *       200:
 *         description: Successfully retrieved the CV.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: The unique identifier of the CV.
 *                   example: "670507e5a85e8b4542098ab9"
 *                 userid:
 *                   type: string
 *                   description: The ID of the user who created the CV.
 *                   example: "670507e5a85e8b4542098ab9"
 *                 firstname:
 *                   type: string
 *                   description: The first name of the user.
 *                   example: John
 *                 lastname:
 *                   type: string
 *                   description: The last name of the user.
 *                   example: Doe
 *                 description:
 *                   type: string
 *                   description: A brief description of the CV.
 *                   example: "Experienced software developer."
 *                 diplomes:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       title:
 *                         type: string
 *                         description: The title of the diploma.
 *                         example: "Bachelor of Science in Computer Science"
 *                       school:
 *                         type: string
 *                         description: The school where the diploma was obtained.
 *                         example: "MIT"
 *                       year:
 *                         type: number
 *                         description: The year the diploma was obtained.
 *                         example: 2020
 *                 certifications:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       name:
 *                         type: string
 *                         description: The name of the certification.
 *                         example: "Certified Java Developer"
 *                       issuedBy:
 *                         type: string
 *                         description: The issuer of the certification.
 *                         example: "Oracle"
 *                       year:
 *                         type: number
 *                         description: The year the certification was obtained.
 *                         example: 2021
 *                 formations:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       name:
 *                         type: string
 *                         description: The name of the formation.
 *                         example: "Advanced React Training"
 *                       institution:
 *                         type: string
 *                         description: The institution where the formation was obtained.
 *                         example: "Coursera"
 *                       year:
 *                         type: number
 *                         description: The year the formation was obtained.
 *                         example: 2022
 *                 jobs:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       title:
 *                         type: string
 *                         description: The title of the job.
 *                         example: "Software Engineer"
 *                       startYear:
 *                         type: number
 *                         description: The year the job started.
 *                         example: 2019
 *                       endYear:
 *                         type: number
 *                         description: The year the job ended.
 *                         example: 2021
 *                 missions:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       name:
 *                         type: string
 *                         description: The name of the mission.
 *                         example: "Developed a new feature for the product"
 *                       description:
 *                         type: string
 *                         description: A brief description of the mission.
 *                         example: "Implemented a new feature that improved performance by 20%"
 *                 compagnies:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       name:
 *                         type: string
 *                         description: The name of the company.
 *                         example: "XYZ Corp"
 *                       location:
 *                         type: string
 *                         description: The location of the company.
 *                         example: "New York, NY"
 *                       industry:
 *                         type: string
 *                         description: The industry of the company.
 *                         example: "Technology"
 *                 visible:
 *                   type: boolean
 *                   description: Visibility status of the CV.
 *                   example: true
 *       400:
 *         description: Bad request - Invalid input or missing required fields.
 *       401:
 *         description: Unauthorized - Invalid or missing token.
 *       500:
 *         description: Internal server error.
 */
router.get('/:id', verifyToken, cvController.getCvById);

/**
 * @swagger
 * /api/cv/firstname/{firstname}:
 *   get:
 *     summary: Get all CVs with name
 *     description: Retrieves all CVs with a specific firstname.
 *     tags:
 *       - CV
 *     parameters:
 *       - in: path
 *         name: firstname
 *         required: true
 *         schema:
 *           type: string
 *         description: CVs of all the specific firstname to retrieve
 *     responses:
 *       200:
 *         description: Successfully retrieved the CV.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: The unique identifier of the CV.
 *                   example: "670507e5a85e8b4542098ab9"
 *                 userid:
 *                   type: string
 *                   description: The ID of the user who created the CV.
 *                   example: "670507e5a85e8b4542098ab9"
 *                 firstname:
 *                   type: string
 *                   description: The first name of the user.
 *                   example: John
 *                 lastname:
 *                   type: string
 *                   description: The last name of the user.
 *                   example: Doe
 *                 description:
 *                   type: string
 *                   description: A brief description of the CV.
 *                   example: "Experienced software developer."
 *                 diplomes:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       title:
 *                         type: string
 *                         description: The title of the diploma.
 *                         example: "Bachelor of Science in Computer Science"
 *                       school:
 *                         type: string
 *                         description: The school where the diploma was obtained.
 *                         example: "MIT"
 *                       year:
 *                         type: number
 *                         description: The year the diploma was obtained.
 *                         example: 2020
 *                 certifications:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       name:
 *                         type: string
 *                         description: The name of the certification.
 *                         example: "Certified Java Developer"
 *                       issuedBy:
 *                         type: string
 *                         description: The issuer of the certification.
 *                         example: "Oracle"
 *                       year:
 *                         type: number
 *                         description: The year the certification was obtained.
 *                         example: 2021
 *                 formations:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       name:
 *                         type: string
 *                         description: The name of the formation.
 *                         example: "Advanced React Training"
 *                       institution:
 *                         type: string
 *                         description: The institution where the formation was obtained.
 *                         example: "Coursera"
 *                       year:
 *                         type: number
 *                         description: The year the formation was obtained.
 *                         example: 2022
 *                 jobs:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       title:
 *                         type: string
 *                         description: The title of the job.
 *                         example: "Software Engineer"
 *                       startYear:
 *                         type: number
 *                         description: The year the job started.
 *                         example: 2019
 *                       endYear:
 *                         type: number
 *                         description: The year the job ended.
 *                         example: 2021
 *                 missions:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       name:
 *                         type: string
 *                         description: The name of the mission.
 *                         example: "Developed a new feature for the product"
 *                       description:
 *                         type: string
 *                         description: A brief description of the mission.
 *                         example: "Implemented a new feature that improved performance by 20%"
 *                 compagnies:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       name:
 *                         type: string
 *                         description: The name of the company.
 *                         example: "XYZ Corp"
 *                       location:
 *                         type: string
 *                         description: The location of the company.
 *                         example: "New York, NY"
 *                       industry:
 *                         type: string
 *                         description: The industry of the company.
 *                         example: "Technology"
 *                 visible:
 *                   type: boolean
 *                   description: Visibility status of the CV.
 *                   example: true
 *       401: 
 *         description: Unauthorized - Invalid or missing token.
 *       404:
 *         description: "CV with firstname: {firstname} not found."
 *       500:
 *         description: Internal server error.
 */
router.get('/firstname/:firstname', cvController.getCvByFirstName);

/**
 * @swagger
 * /api/cv/lastname/{lastname}:
 *   get:
 *     summary: Get all CVs with name
 *     description: Retrieves all CVs with a specific lastname.
 *     tags:
 *       - CV
 *     parameters:
 *       - in: path
 *         name: lastname
 *         required: true
 *         schema:
 *           type: string
 *         description: CVs of all the specific lastname to retrieve.
 *     responses:
 *       200:
 *         description: Successfully retrieved the CV.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: The unique identifier of the CV.
 *                   example: "670507e5a85e8b4542098ab9"
 *                 userid:
 *                   type: string
 *                   description: The ID of the user who created the CV.
 *                   example: "670507e5a85e8b4542098ab9"
 *                 firstname:
 *                   type: string
 *                   description: The first name of the user.
 *                   example: John
 *                 lastname:
 *                   type: string
 *                   description: The last name of the user.
 *                   example: Doe
 *                 description:
 *                   type: string
 *                   description: A brief description of the CV.
 *                   example: "Experienced software developer."
 *                 diplomes:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       title:
 *                         type: string
 *                         description: The title of the diploma.
 *                         example: "Bachelor of Science in Computer Science"
 *                       school:
 *                         type: string
 *                         description: The school where the diploma was obtained.
 *                         example: "MIT"
 *                       year:
 *                         type: number
 *                         description: The year the diploma was obtained.
 *                         example: 2020
 *                 certifications:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       name:
 *                         type: string
 *                         description: The name of the certification.
 *                         example: "Certified Java Developer"
 *                       issuedBy:
 *                         type: string
 *                         description: The issuer of the certification.
 *                         example: "Oracle"
 *                       year:
 *                         type: number
 *                         description: The year the certification was obtained.
 *                         example: 2021
 *                 formations:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       name:
 *                         type: string
 *                         description: The name of the formation.
 *                         example: "Advanced React Training"
 *                       institution:
 *                         type: string
 *                         description: The institution where the formation was obtained.
 *                         example: "Coursera"
 *                       year:
 *                         type: number
 *                         description: The year the formation was obtained.
 *                         example: 2022
 *                 jobs:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       title:
 *                         type: string
 *                         description: The title of the job.
 *                         example: "Software Engineer"
 *                       startYear:
 *                         type: number
 *                         description: The year the job started.
 *                         example: 2019
 *                       endYear:
 *                         type: number
 *                         description: The year the job ended.
 *                         example: 2021
 *                 missions:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       name:
 *                         type: string
 *                         description: The name of the mission.
 *                         example: "Developed a new feature for the product"
 *                       description:
 *                         type: string
 *                         description: A brief description of the mission.
 *                         example: "Implemented a new feature that improved performance by 20%"
 *                 compagnies:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       name:
 *                         type: string
 *                         description: The name of the company.
 *                         example: "XYZ Corp"
 *                       location:
 *                         type: string
 *                         description: The location of the company.
 *                         example: "New York, NY"
 *                       industry:
 *                         type: string
 *                         description: The industry of the company.
 *                         example: "Technology"
 *                 visible:
 *                   type: boolean
 *                   description: Visibility status of the CV.
 *                   example: true
 *       404:
 *         description: "CV with lastname: {lastname} not found."
 *       401:
 *         description: Unauthorized - Invalid or missing token.
 *       500:
 *         description: Internal server error.
 */
router.get('/lastname/:lastname', cvController.getCvByLastName);

/**
 * @swagger
 * /api/cv/{id}:
 *   put:
 *     summary: Update a CV by ID
 *     description: Updates a CV by its ID.
 *     tags:
 *       - CV
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the CV to update.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstname:
 *                 type: string
 *                 description: The first name of the user.
 *                 example: John
 *               lastname:
 *                 type: string
 *                 description: The last name of the user.
 *                 example: Doe
 *               description:
 *                 type: string
 *                 description: A brief description of the CV.
 *                 example: "Experienced software developer."
 *               diplomes:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     title:
 *                       type: string
 *                       description: The title of the diploma.
 *                       example: "Bachelor of Science in Computer Science"
 *                     school:
 *                       type: string
 *                       description: The school where the diploma was obtained.
 *                       example: "MIT"
 *                     year:
 *                       type: number
 *                       description: The year the diploma was obtained.
 *                       example: 2020
 *               certifications:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                       description: The name of the certification.
 *                       example: "Certified Java Developer"
 *                     issuedBy:
 *                       type: string
 *                       description: The issuer of the certification.
 *                       example: "Oracle"
 *                     year:
 *                       type: number
 *                       description: The year the certification was obtained.
 *                       example: 2021
 *               formations:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                       description: The name of the formation.
 *                       example: "Advanced React Training"
 *                     institution:
 *                       type: string
 *                       description: The institution where the formation was obtained.
 *                       example: "Coursera"
 *                     year:
 *                       type: number
 *                       description: The year the formation was obtained.
 *                       example: 2022
 *               jobs:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     title:
 *                       type: string
 *                       description: The title of the job.
 *                       example: "Software Engineer"
 *                     startYear:
 *                       type: number
 *                       description: The year the job started.
 *                       example: 2019
 *                     endYear:
 *                       type: number
 *                       description: The year the job ended.
 *                       example: 2021
 *               missions:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                       description: The name of the mission.
 *                       example: "Developed a new feature for the product"
 *                     description:
 *                       type: string
 *                       description: A brief description of the mission.
 *                       example: "Implemented a new feature that improved performance by 20%"
 *               compagnies:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                       description: The name of the company.
 *                       example: "XYZ Corp"
 *                     location:
 *                       type: string
 *                       description: The location of the company.
 *                       example: "New York, NY"
 *                     industry:
 *                       type: string
 *                       description: The industry of the company.
 *                       example: "Technology"
 *               visible:
 *                 type: boolean
 *                 description: Visibility status of the CV.
 *                 example: true
 *     responses:
 *       200:
 *         description: CV updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: The unique identifier of the CV.
 *                   example: "670507e5a85e8b4542098ab9"
 *                 userid:
 *                   type: string
 *                   description: The ID of the user who created the CV.
 *                   example: "670507e5a85e8b4542098ab9"
 *                 firstname:
 *                   type: string
 *                   description: The first name of the user.
 *                   example: John
 *                 lastname:
 *                   type: string
 *                   description: The last name of the user.
 *                   example: Doe
 *                 description:
 *                   type: string
 *                   description: A brief description of the CV.
 *                   example: "Experienced software developer."
 *                 diplomes:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       title:
 *                         type: string
 *                         description: The title of the diploma.
 *                         example: "Bachelor of Science in Computer Science"
 *                       school:
 *                         type: string
 *                         description: The school where the diploma was obtained.
 *                         example: "MIT"
 *                       year:
 *                         type: number
 *                         description: The year the diploma was obtained.
 *                         example: 2020
 *                 certifications:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       name:
 *                         type: string
 *                         description: The name of the certification.
 *                         example: "Certified Java Developer"
 *                       issuedBy:
 *                         type: string
 *                         description: The issuer of the certification.
 *                         example: "Oracle"
 *                       year:
 *                         type: number
 *                         description: The year the certification was obtained.
 *                         example: 2021
 *                 formations:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       name:
 *                         type: string
 *                         description: The name of the formation.
 *                         example: "Advanced React Training"
 *                       institution:
 *                         type: string
 *                         description: The institution where the formation was obtained.
 *                         example: "Coursera"
 *                       year:
 *                         type: number
 *                         description: The year the formation was obtained.
 *                         example: 2022
 *                 jobs:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       title:
 *                         type: string
 *                         description: The title of the job.
 *                         example: "Software Engineer"
 *                       startYear:
 *                         type: number
 *                         description: The year the job started.
 *                         example: 2019
 *                       endYear:
 *                         type: number
 *                         description: The year the job ended.
 *                         example: 2021
 *                 missions:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       name:
 *                         type: string
 *                         description: The name of the mission.
 *                         example: "Developed a new feature for the product"
 *                       description:
 *                         type: string
 *                         description: A brief description of the mission.
 *                         example: "Implemented a new feature that improved performance by 20%"
 *                 compagnies:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       name:
 *                         type: string
 *                         description: The name of the company.
 *                         example: "XYZ Corp"
 *                       location:
 *                         type: string
 *                         description: The location of the company.
 *                         example: "New York, NY"
 *                       industry:
 *                         type: string
 *                         description: The industry of the company.
 *                         example: "Technology"
 *                 visible:
 *                   type: boolean
 *                   description: Visibility status of the CV.
 *                   example: true
 *       400:
 *         description: Bad request - Invalid input or missing required fields.
 *       401:
 *         description: Unauthorized - Invalid or missing token.
 *       500:
 *         description: Internal server error.
 */
router.put('/:id', verifyToken, cvController.updateCv);

/**
 * @swagger
 * /api/cv/{id}:
 *   delete:
 *     summary: Delete a CV by ID
 *     description: Deletes a CV by its ID.
 *     tags:
 *       - CV
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the CV to delete.
 *     responses:
 *       200:
 *         description: CV deleted successfully.
 *       400:
 *         description: Bad request - Invalid input or missing required fields.
 *       401:
 *         description: Unauthorized - Invalid or missing token.
 *       404:
 *         description: Not found - CV not found.
 *       500:
 *         description: Internal server error.
 */
router.delete('/:id', verifyToken, cvController.deleteCv);

module.exports = router;
