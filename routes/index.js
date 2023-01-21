const express = require('express');

const {
  getGameStatByPlayerId,
  seasonPlayerStats,
  createGameStats,
} = require('../controllers/gamesController');


const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Game:
 *       type: object
 *       required:
 *         - playerId
 *         - gameDate
 *         - opponent
 *         - class
 *       properties:
 *         playerId:
 *           type: number
 *           description: This is the player from the Players table
 *         gameDate:
 *           type: string
 *           description: The Game date
 *         opponent:
 *           type: string
 *           description: The player opponent
 *         battingAvg:
 *           type: number
 *           description: The player batting average
 *         plateAppearances:
 *           type: number
 *           description: The player's plate appearances
 *         atBats:
 *           type: number
 *           description: The player's at Bats score
 *         runs:
 *           type: number
 *           description: The player's runs
 *         hits:
 *           type: number
 *           description: The player's runs
 *         runsbattedIn:
 *           type: number
 *           description: The player's runs batted In
 *         doubles:
 *           type: number
 *           description: The player's doubles
 *         triples:
 *           type: number
 *           description: The player's triples
 *         homeruns:
 *           type: number
 *           description: The player's home runs
 *         class:
 *           type: string
 *           description: The player's class
 *       example:
 *         playerId: 1
 *         gameDate: '02/17'
 *         opponent: 'Chapel Hill'
 *         battingAvg: 0
 *         plateAppearances: 2
 *         atBats: 2
 *         runs: 0
 *         hits: 0
 *         runsbattedIn: 0
 *         doubles: 0
 *         triples: 0
 *         homeruns: 0
 *         class: 'Jr'
 */


 /**
  * @swagger
  * tags:
  *   name: Games
  *   description: The Games stata API
  */


 /**
 * @swagger
 * /api/createstats:
 *   post:
 *     summary: Create a player game stats
 *     tags: [Games]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Game'
 *     responses:
 *       200:
 *         description: The Game stats was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Game'
 *       500:
 *         description: Some server error
 */

router.post('/createstats', createGameStats);

/**
 * @swagger
 * /api/gamestats/{playerId}:
 *   get:
 *     summary: Get the Game stats by playerId
 *     tags: [Games]
 *     parameters:
 *       - in: path
 *         name: playerId
 *         schema:
 *           type: string
 *         required: true
 *         description: The  playerId
 *     responses:
 *       200:
 *         description: The game stats by playerId
 *         contens:
 *           application/json:
 *             schema:
 *               type: array
 *               $ref: '#/components/schemas/Game'
 *       404:
 *         description: The Game was not found
 */
router.get('/gamestats/:playerId', getGameStatByPlayerId);




/**
 * @swagger
 * /api/total/{playerId}:
 *   get:
 *     summary: Get the calculation of the player’s season’s totals from all the games played by playerId
 *     tags: [Games]
 *     parameters:
 *       - in: path
 *         name: playerId
 *         schema:
 *           type: string
 *         required: true
 *         description: The  playerId
 *     responses:
 *       200:
 *         description: the calculation of the player’s season’s totals from all the games played by playerId
 *         contens:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/Game'
 *       404:
 *         description: No Game  was not found
 */
router.get('/total/:playerId', seasonPlayerStats);



module.exports = router;
