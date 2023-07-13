/**
 * @swagger
 * components:
 *   schemas:
 *     Reply:
 *       type: object
 *       required:
 *         - name
 *         - description
 *       properties:
 *         id:
 *           type: interger
 *           description: The auto-generated id of the reply
 *         content:
 *           type: string
 *           description: Description of the reply
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The date the reply was added
 *         updatedAt:
 *           type: string
 *           format: date
 *           description: The date the reply was modified
 *       example:
 *         id: 1
 *         name: Juice and plant drinks.
 *         description: drinks made out of fruits and plants
 *         isAlcoholic: true
 *         createdAt: 2020-03-10T04:05:06.157Z
 *         updatedAt: 2020-03-10T04:05:06.157Z
 */

/**
 * @swagger
 * tags:
 *   name: Category
 *   description: The reply From the API
 * /category:
 *   get:
 *     summary: Lists all the categories
 *     tags: [Reply]
 *     responses:
 *       200:
 *         description: The list of the categories
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *             $ref: '#/components/schemas/Category'
 *   post:
 *     summary: Create a new category
 *     tags: [Reply]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Category'
 *     responses:
 *       200:
 *         description: The created category.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Category'
 *       500:
 *         description: Some server error
 * /category/{id}:
 *   get:
 *     summary: Get the reply by id
 *     tags: [Reply]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The reply id
 *     responses:
 *       200:
 *         description: The reply response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Category'
 *       404:
 *         description: The reply was not found
 *   put:
 *    summary: Update the reply by the id
 *    tags: [Reply]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The reply id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Category'
 *    responses:
 *      200:
 *        description: The reply was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Category'
 *      404:
 *        description: The reply was not found
 *      500:
 *        description: Some error happened
 *   delete:
 *     summary: Remove the reply by id
 *     tags: [Reply]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The reply id
 *     responses:
 *       200:
 *         description: The reply was deleted
 *       404:
 *         description: The reply was not found
 */

const express = require("express");
const {
  getAllCategories,
  getOneCategory,
  createCategory,
  patchCategory,
  deleteCategory,
  putCategory,
} = require("../controllers/CategoryController");
const router = express.Router();

router.get("/", getAllCategories);
router.get("/:id", getOneCategory);
router.post("/", createCategory);
router.patch("/:id", patchCategory);
router.put("/:id", putCategory);
router.delete("/:id", deleteCategory);

module.exports = router;
