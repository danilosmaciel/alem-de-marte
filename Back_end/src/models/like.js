const Sequelize = require('sequelize');
const dbInstance = require('../db');

const Like = dbInstance.define('table_like', {
    id: {
        type: Sequelize.STRING,
        alloNull: false,
        primaryKey: true
    },
    counter: {
        type: Sequelize.INTEGER,
        alloNull: false
    }
});

module.exports = Like;