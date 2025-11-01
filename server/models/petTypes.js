'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PetType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      PetType.hasMany(models.Pet, { foreignKey: 'petTypeId' });
    }
  }
  PetType.init(
    {
      type: DataTypes.STRING(64),
    },
    {
      sequelize,
      modelName: 'PetType',
      underscored: true,
    }
  );
  return PetType;
};
