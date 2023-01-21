const Joi = require('joi');
const createGameValidation = (body) => {
  const schema = Joi.object({
    playerId: Joi.number().required().label('playerId'),
    gameDate: Joi.string().required().label('Game Date'),
    opponent: Joi.string().required().label('Opponent'),
    battingAvg: Joi.number().label('Batting Avg'),
    plateAppearances: Joi.number().label('Plate Appearances'),
    atBats: Joi.number().label('At Bats'),
    runs: Joi.number().label('Runs'),
    hits: Joi.number().label('Hits'),
    runsbattedIn: Joi.number().label('Rubs batted In '),
    doubles: Joi.number().label('Doubles'),
    triples: Joi.number().label('Triples'),
    homeruns: Joi.number().label('Home runs'),
    class: Joi.string().required().label('Triples'),
  });
  return schema.validate(body);
};

module.exports = {
  createGameValidation,
};
