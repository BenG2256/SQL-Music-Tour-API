'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, Sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Event.init({event_id: {
    autoIncrement: true,
    primaryKey: true,
    timestamps: false,
    type: Sequelize.INTEGER
  },
  name: {
    timestamps: false,
    allowNull: false,
    type: Sequelize.STRING
  },
  date: {
    timestamps: false,
    allowNull: false,
    type: Sequelize.DATE
  }},{
    sequelize,
    modelName: 'Event',
    tableName: 'event',
    timestamps: false
  })
  return Event;
};
