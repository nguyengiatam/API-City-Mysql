require('dotenv').config(`${__dirname}/../../.env`)
const db = require('mysql2')

const connection = db.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: 'cityData',
})

connection.query('CREATE TABLE city (id INT PRIMARY KEY AUTO_INCREMENT, name VARCHAR(255) NOT NULL, zip INT NOT NULL)', function (err, result) {
    if (err) {
        return console.log(err.message);
    }
})

module.exports = connection.promise();