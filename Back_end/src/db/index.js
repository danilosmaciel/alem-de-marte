const Sequelize = require('sequelize');
const dbConfig = require('./dbConfig');

const dbInstance = new Sequelize(dbConfig);

(async () => {
    try {
        const resultado = await dbInstance.sync();
        //console.log(resultado);
        console.log('Tabelas Criadas');
    } catch (error) {
        console.log(error);
    }
})();

module.exports = dbInstance;