const db = require('../models/index');

const getGameStats = async (playerId) => {
  const response = await db.Games.findAll({ where: { playerId: playerId } });
  return response;
};

const totalPlayerStats = async (playerId) => {
  const data = await db.Games.findAll({ where: { playerId: playerId } });
  if (data.length < 1) {
    throw new Error('No games for this player', 404);
  }

  return data.reduce((accum, item) => {
    return {
      battingAvg: accum.battingAvg + item.battingAvg,
      atBats: accum.atBats + item.atBats,
      plateAppearances: accum.plateAppearances + item.plateAppearances,
      runs: accum.runs + item.runs,
      hits: accum.hits + item.hits,
      runsbattedIn: accum.runsbattedIn + item.runsbattedIn,
      doubles: accum.doubles + item.doubles,
      triples: accum.triples + item.triples,
      homeruns: accum.homeruns + item.homeruns,
    };
  });
};

const createStats = async (data) => {
  return await db.Games.create(data);
};
module.exports = { getGameStats, totalPlayerStats, createStats };
