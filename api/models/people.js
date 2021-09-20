'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class People extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      People.hasMany(models.Pets, {
        foreignKey: 'owner_ID'  
      })

      People.hasMany(models.Diagnoses, {
        foreignKey: 'ownerPet_ID'
      })
    }
  };
  People.init({
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
    appointment: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'People',
  });
  return People;
};