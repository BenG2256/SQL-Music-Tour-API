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
      timestamps: false,
      type: Sequelize.INTEGER
    },
    eventId: {
      allowNull: false,
      timestamps: false,
      type: Sequelize.INTEGER
    },
    stageId: {
      allowNull: false,
      timestamps: false,
      type: Sequelize.INTEGER
    }}, {
      sequelize,
      modelName: 'StageEvent',
      tableName: 'stage_event',
      timestamps: false
  });
  return StageEvent;
};