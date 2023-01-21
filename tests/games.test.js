const request = require('supertest');
const app = require('../app');

const db = require('../models/index');

describe('GAME API', () => {
  const data = {
    playerId: 1,
    gameDate: '03/03',
    opponent: 'Mt. Zion',
    battingAvg: 0.25,
    plateAppearances: 4,
    atBats: 4,
    runs: 1,
    hits: 1,
    runsbattedIn: 1,
    doubles: 0,
    triples: 0,
    homeruns: 0,
    class: 'Jr',
  };

  const data2 = {
    gameDate: '03/03',
    opponent: 'Mt. Zion',
    battingAvg: 0.25,
    plateAppearances: 4,
    atBats: 4,
    runs: 1,
    hits: 1,
    runsbattedIn: 1,
    doubles: 0,
    triples: 0,
    homeruns: 0,
    class: 'Jr',
  };

  beforeEach(async () => {
    await db.Games.destroy({ where: {} });
    await db.Games.create(data);
  });

  afterEach(async () => {
    await db.Games.destroy({ where: {} });
  });
  describe('GET STATS', () => {
    it('should return 200 OK if playerId exist', async () => {
      const playerId = 1;
      const res = await request(app).get(`/api/gamestats/${playerId}`);
      expect(res.statusCode).toBe(200);
      expect(res.body.data).toHaveLength(1);
    });

    it('Should return the Data', async () => {
      const playerId = 1;
      const res = await request(app).get(`/api/gamestats/${playerId}`);
      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty('data');
      expect(Array.isArray(res.body.data)).toBe(true);

      expect(res.body.data[0]).toHaveProperty(
        'playerId',
        'gameDate',
        'opponent',
        'class',
        'battingAvg',
        'plateAppearances',
        'atBats',
        'runs',
        'hits',
        'runsbattedIn',
        'doubles',
        'triples',
        'homeruns',
      );
    });
    it('should return 404 if playerId does not exist', async () => {
      const playerId = 60;
      await request(app).get(`/api/gamestats/${playerId}`).expect(404);
    });
  });

  describe('CREATE STATS ', () => {
    it('should create a new game stat', async () => {
      const res = await request(app).post(`/api/createstats`).send(data);
      expect(res.statusCode).toEqual(201);
      expect(res.body.status).toEqual('Stats Created');
    });

    it('should return a 500 status if there is validation error', async () => {
      const res = await request(app).post('/api/createstats').send(data2);
      expect(res.statusCode).toEqual(500);
      expect(res.body).toHaveProperty('error');
      expect(res.body.status).toEqual('error');
    });
  });

  describe('GET TOTAL GAME STATS FOR A PLAYER ', () => {
    it('should return total game stats for a Player for the season', async () => {
      const playerId = 1;
      const res = await request(app).get(`/api/total/${playerId}`).send(data);
      expect(res.statusCode).toEqual(200);
      expect(typeof res).toEqual('object');
    });

    it('should return 404 if playerId does not exist', async () => {
      const playerId = 60;
      await request(app).get(`/api/gamestats/${playerId}`).expect(404);
    });
  });
});
