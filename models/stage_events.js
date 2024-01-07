'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, Sequelize, DataTypes) => {
  class StageEvent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  StageEvent.init({
    stage_event_id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    event_id: {
      allowNull: false,
      type: Sequelize.INTEGER
    },
    stage_id: {
      allowNull: false,
      type: Sequelize.INTEGER
    }}, {
      sequelize,
      modelName: 'StageEvent',
      tableName: 'stage_events',
      timestamps: false
  });
  return StageEvent;
};