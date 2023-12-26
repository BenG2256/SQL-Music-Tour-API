'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, Sequelize, DataTypes) => {
  class Stage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Stage.init( {stage_id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    timestamps: false,
    type: Sequelize.INTEGER
  },
  name: {
    allowNull: false,
    timestamps: false,
    type: Sequelize.STRING
  },
  capacity: {
    allowNull: false,
    timestamps: false,
    type: Sequelize.INTEGER
  }}, {
    sequelize,
    modelName: 'Stage',
    tableName: 'stage',
    timestamps: false
  });
  return Stage;
};