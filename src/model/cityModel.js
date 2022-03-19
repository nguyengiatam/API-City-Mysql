const connection = require('../config/db.config')

const GET_ALL_CITY = 'SELECT * FROM city'
const GET_CITY_BY_ID = 'SELECT * FROM city WHERE id = ?'
const GET_CITY_BY_NAME = 'SELECT * FROM city WHERE name = ?'
const UPDATE_CITY_NAME = 'UPDATE city SET name = ? WHERE id = ?'
const UPDATE_CITY_ZIP = 'UPDATE city SET zip = ? WHERE id = ?'
const DELETE_CITY_BY_ID = 'DELETE FROM city WHERE id = ?'
const DELETE_CITY_BY_NAME = 'DELETE FROM city WHERE name = ?'
const ADD_CITY = 'INSERT INTO city (name, zip) VALUES (?, ?)'

const queryDb = async (query, ...args) => {
    try {
        const result = await connection.query(query, args);
        return result
    } catch (error) {
        console.log(error.message);
        error.code = 400;
        throw error;
    }
}

module.exports = {
    GET_CITY_BY_NAME,
    GET_CITY_BY_ID,
    GET_ALL_CITY,
    UPDATE_CITY_NAME,
    DELETE_CITY_BY_NAME,
    DELETE_CITY_BY_ID,
    ADD_CITY,
    UPDATE_CITY_ZIP,
    queryDb
}