'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    const date = new Date()

    await queryInterface.bulkInsert('Quotes', [{
      name: 'Kiana',
      quote: 'Maybe Pepe is cursed?',
      emoji: '🐸',
      createdAt: date,
      updatedAt: date,
    }, 
    {
      name: 'Pin',
      quote: 'I am being a silly goose',
      emoji: '🦢',
      createdAt: date,
      updatedAt: date,
    }])
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('Quotes', null, {})
  }
};
