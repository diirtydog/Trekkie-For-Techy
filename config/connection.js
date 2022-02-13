const Sequelize = require('sequelize');
require('dotenv').config();

let sequalize;

if (process.env.JAWSDB_URL) {
    sequalize = new Sequelize(process.env.JAWSDB_URL);
} else {
    sequalize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
        host: 'localhost',
        dialect: 'mysql',
        prot: 3306
    });
}

module.exports = sequalize;