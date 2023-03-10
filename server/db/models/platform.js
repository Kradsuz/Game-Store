const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Platform extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Offer, Game }) {
      this.hasMany(Offer, { foreignKey: "platformId" });
      this.belongsToMany(Game, {
        through: "GamePlatform",
        foreignKey: "platformId",
      });
    }
  }
  Platform.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Platform",
    }
  );
  return Platform;
};
