const wrapAsync = require('../utils/wrapAsync');
const ErrorMsg = require('../utils/ErrorMsg');
const db = require('../models/index');
const { createGameValidation } = require('../schema/gameInputValidation');
const {
  getGameStats,
  totalPlayerStats,
  createStats,
} = require('../services/gamesService');

const getGameStatByPlayerId = wrapAsync(async (req, res, next) => {
  const data = await getGameStats(req.params.playerId);
  if (data.length < 1) {
    return next(new ErrorMsg('No games for this player', 404));
  }

  return res.status(200).json({ status: 'Success', count: data.length, data });
});

const createGameStats = wrapAsync(async (req, res, next) => {
  const { error } = createGameValidation(req.body);
  if (error) {
    return next(new ErrorMsg(`${error.details[0].message}`));
  }

  await createStats(req.body);
  return res.status(201).json({ status: 'Stats Created' });
});

const seasonPlayerStats = wrapAsync(async (req, res, next) => {
  const seasonStats = await totalPlayerStats(req.params.playerId);
  if (!seasonStats) {
    return next(new ErrorMsg('No games for this player', 404));
  }

  return res.status(200).json({ status: 'Success', seasonStats });
});

module.exports = { getGameStatByPlayerId, createGameStats, seasonPlayerStats };
