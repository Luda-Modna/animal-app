'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PetTypes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      PetTypes.hasMany(models.Pet, { foreignKey: 'petTypeId' });
    }
  }
  PetTypes.init(
    {
      type: DataTypes.STRING(64),
    },
    {
      sequelize,
      modelName: 'PetTypes',
      underscored: true,
    }
  );
  return PetTypes;
};
