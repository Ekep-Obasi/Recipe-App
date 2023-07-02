/**
 * @swagger
 * components:
 *   schemas:
 *     Drink:
 *       type: object
 *       required:
 *         - name
 *         - description
 *         - imageUrl
 *       properties:
 *         id:
 *           type: interger
 *           description: The auto-generated id of the drink
 *         name:
 *           type: string
 *           description: The name of the drink
 *         description:
 *           type: string
 *           description: The drink's description
 *         imageUrl:
 *           type: string
 *           description: A link to the drink's image
 *         recipe:
 *           type: string
 *           description: The drink's recipe
 *         userId:
 *           type: string
 *           description: the id of the user that created the drink
 *         isAlcoholic:
 *           type: boolean
 *           description: whether or not the drink is alcoholic
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The date the drink was added
 *         updatedAt:
 *           type: string
 *           format: date
 *           description: The date the drink was modified
 *       example:
 *         id: 1
 *         name: Apple Juice
 *         description: Apple juice is the juice from apples. It does not have alcohol, and it tastes sweet from the natural fruit sugars.
 *         imageUrl: https://en.wikipedia.org/wiki/File:Apfelsaft_im_Glas.jpg
 *         recipe: Start by washing and then coring the apple to remove seeds...
 *         userId: 1
 *         isAlcoholic: true
 *         createdAt: 2020-03-10T04:05:06.157Z
 *         updatedAt: 2020-03-10T04:05:06.157Z
 */

/**
 * @swagger
 * tags:
 *   name: Drink
 *   description: The Drink From the API
 * /drinks:
 *   get:
 *     summary: Lists all the drinks
 *     tags: [Drinks]
 *     responses:
 *       200:
 *         description: The list of the drinks
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *             $ref: '#/components/schemas/Drink'
 *   post:
 *     summary: Create a new drink
 *     tags: [Drinks]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Drink'
 *     responses:
 *       200:
 *         description: The created drink.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Drink'
 *       500:
 *         description: Some server error
 * /drinks/{id}:
 *   get:
 *     summary: Get the drink by id
 *     tags: [Drinks]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The drink id
 *     responses:
 *       200:
 *         description: The drink response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Drink'
 *       404:
 *         description: The drink was not found
 *   put:
 *    summary: Update the drink by the id
 *    tags: [Drinks]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The drink id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Drink'
 *    responses:
 *      200:
 *        description: The drink was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Drink'
 *      404:
 *        description: The drink was not found
 *      500:
 *        description: Some error happened
 *   delete:
 *     summary: Remove the drink by id
 *     tags: [Drinks]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The drink id
 *
 *     responses:
 *       200:
 *         description: The drink was deleted
 *       404:
 *         description: The drink was not found
 */

const express = require("express");
const {
  getAllDrinks,
  getOneDrink,
  createDrink,
  patchDrink,
  putDrink,
  deleteDrink,
} = require("../controllers/DrinkController");

const router = express.Router();

router.get("/", getAllDrinks);
router.get("/:id", getOneDrink);
router.post("/", createDrink);
router.patch("/:id", patchDrink);
router.put("/:id", putDrink);
router.delete("/:id", deleteDrink);

module.exports = router;
