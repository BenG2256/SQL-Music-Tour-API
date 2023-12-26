'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('meetgreets', {
      meet_greet_id: {
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
      startTime: {
        allowNull: false,
        timestamps: false,
        type: Sequelize.DATE
      },
      endTime: {
        allowNull: false,
        timestamps: false,
        type: Sequelize.DATE
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('MeetGreets');
  }
};