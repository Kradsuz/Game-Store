const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Offer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Pay, Platform, Game }) {
      this.belongsTo(Game, { foreignKey: "gameId" });
      this.belongsTo(User, { foreignKey: "sellerId" });
      this.belongsTo(Pay, { foreignKey: "payId" });
      this.belongsTo(Platform, { foreignKey: "platformId" });
    }
  }
  Offer.init(
    {
      price: DataTypes.STRING,
      time: DataTypes.STRING,
      payId: DataTypes.INTEGER,
      sellerId: DataTypes.INTEGER,
      platformId: DataTypes.INTEGER,
      gameId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Offer",
    }
  );
  return Offer;
};
