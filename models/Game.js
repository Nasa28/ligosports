module.exports = (sequelize, DataTypes) => {
  const Games = sequelize.define(
    'Games',
    {
      playerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      gameDate: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      opponent: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      battingAvg: {
        type: DataTypes.FLOAT,
        defaultValue: 0
      },
      plateAppearances: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      atBats: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      runs: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      hits: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      runsbattedIn: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      doubles: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      triples: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      homeruns: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      class: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },

    { timestamps: false, createdAt: false, updatedAt: false },
  );

  return Games;
};
