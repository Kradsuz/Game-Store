const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Platform, Offer }) {
      this.hasMany(Offer, { foreignKey: "gameId" });
      this.belongsToMany(Platform, {
        through: "GamePlatform",
        foreignKey: "gameId",
      });
    }
  }
  Game.init(
    {
      cover: DataTypes.TEXT,
      date: DataTypes.STRING,
      genres: DataTypes.STRING,
      name: DataTypes.STRING,
      rating: DataTypes.INTEGER,
      apiGameId: DataTypes.INTEGER,
      summaru: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Game",
    }
  );
  return Game;
};
