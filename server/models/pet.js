'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      Pet.belongsTo(models.PetTypes, {
        foreignKey: { allowNull: false, name: 'petTypeId' },
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
      });
    }
  }
  Pet.init(
    {
      name: { type: DataTypes.STRING(32), allowNull: false },
      owner: { type: DataTypes.STRING(64), allowNull: false },
      ownerContacts: {
        type: DataTypes.STRING(13),
        allowNull: false,
        validate: {
          is: /^\+\d{12}$/,
        },
      },
      description: { type: DataTypes.STRING, allowNull: false },
      city: {
        type: DataTypes.ENUM('Kyiv', 'Lviv', 'New York'),
        allowNull: false,
      },
      isFound: { type: DataTypes.BOOLEAN, defaultValue: false },
      lostDate: {
        type: DataTypes.DATEONLY,
        validate: {
          isBefore: new Date().toISOString(),
        },
      },
    },
    {
      sequelize,
      modelName: 'Pet',
      underscored: true,
    }
  );
  return Pet;
};
