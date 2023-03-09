const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Offer, Role }) {
      this.hasMany(Offer, { foreignKey: "sellerId" });
      this.hasMany(Role, { foreignKey: "roleId" })
    }
  }
  User.init(
    {
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      pass: DataTypes.TEXT,
      img: DataTypes.TEXT,
      desc: DataTypes.TEXT,
      roleId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
