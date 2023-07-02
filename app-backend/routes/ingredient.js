/**
 * @swagger
 * components:
 *   schemas:
 *     Ingredient:
 *       type: object
 *       required:
 *         - name
 *         - description
 *       properties:
 *         id:
 *           type: interger
 *           description: The auto-generated id of the ingredient
 *         name:
 *           type: string
 *           description: The name of the ingredient
 *         description:
 *           type: string
 *           description: Description of the ingredient
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The date the ingredient was added
 *         updatedAt:
 *           type: string
 *           format: date
 *           description: The date the ingredient was modified
 *       example:
 *         id: 1
 *         name: Apples, cinnamon, sugar
 *         description: drinks made out of fruits and plants
 *         isAlcoholic: true
 *         createdAt: 2020-03-10T04:05:06.157Z
 *         updatedAt: 2020-03-10T04:05:06.157Z
 */

/**
 * @swagger
 * tags:
 *   name: ingredient
 *   description: The ingredient From the API
 * /ingredient:
 *   get:
 *     summary: Lists all the ingredients
 *     tags: [Ingredient]
 *     responses:
 *       200:
 *         description: The list of the ingredients
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *             $ref: '#/components/schemas/Ingredient'
 *   post:
 *     summary: Create a new ingredient
 *     tags: [Ingredient]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Ingredient'
 *     responses:
 *       200:
 *         description: The created ingredient.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Ingredient'
 *       500:
 *         description: Some server error
 * /ingredient/{id}:
 *   get:
 *     summary: Get the ingredient by id
 *     tags: [Ingredient]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ingredient id
 *     responses:
 *       200:
 *         description: The ingredient response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Ingredient'
 *       404:
 *         description: The ingredient was not found
 *   put:
 *    summary: Update the ingredient by the id
 *    tags: [Ingredient]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The ingredient id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Ingredient'
 *    responses:
 *      200:
 *        description: The ingredient was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Ingredient'
 *      404:
 *        description: The ingredient was not found
 *      500:
 *        description: Some error happened
 *   delete:
 *     summary: Remove the ingredient by id
 *     tags: [Ingredient]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ingredient id
 *     responses:
 *       200:
 *         description: The ingredient was deleted
 *       404:
 *         description: The ingredient was not found
 */

const express = require("express");
const {
  getAllIngredients,
  getOneIngredient,
  createIngredient,
  patchIngredient,
  putIngredient,
  deleteIngredient,
} = require("../controllers/IngredientController");

const router = express.Router();

router.get("/", getAllIngredients);
router.get("/:id", getOneIngredient);
router.post("/", createIngredient);
router.patch("/:id", patchIngredient);
router.put("/:id", putIngredient);
router.delete("/:id", deleteIngredient);

module.exports = router;
