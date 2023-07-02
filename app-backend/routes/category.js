/**
 * @swagger
 * components:
 *   schemas:
 *     Category:
 *       type: object
 *       required:
 *         - name
 *         - description
 *       properties:
 *         id:
 *           type: interger
 *           description: The auto-generated id of the category
 *         name:
 *           type: string
 *           description: The name of the category
 *         description:
 *           type: string
 *           description: Description of the category
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The date the category was added
 *         updatedAt:
 *           type: string
 *           format: date
 *           description: The date the category was modified
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
 *   description: The Category From the API
 * /category:
 *   get:
 *     summary: Lists all the categories
 *     tags: [Category]
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
 *     tags: [Category]
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
 *     summary: Get the category by id
 *     tags: [Category]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The category id
 *     responses:
 *       200:
 *         description: The category response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Category'
 *       404:
 *         description: The category was not found
 *   put:
 *    summary: Update the category by the id
 *    tags: [Category]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The category id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Category'
 *    responses:
 *      200:
 *        description: The category was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Category'
 *      404:
 *        description: The category was not found
 *      500:
 *        description: Some error happened
 *   delete:
 *     summary: Remove the category by id
 *     tags: [Category]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The category id
 *     responses:
 *       200:
 *         description: The category was deleted
 *       404:
 *         description: The category was not found
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
