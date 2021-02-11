const Sequelize = require('sequelize');
const dbInstance = require('../db');

const User = dbInstance.define('table_user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        alloNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        alloNull: false
    }
});

module.exports = User;