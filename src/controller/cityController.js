const cityModel = require('../model/cityModel')

const getAllCity = async (req, res, next) => {
    try {
        const result = await cityModel.queryDb(cityModel.GET_ALL_CITY);
        res.status(200).json(result[0]);
    } catch (error) {
        next(error);
    }
}

const getCityById = async (req, res, next) => {
    try {
        const result = await cityModel.queryDb(cityModel.GET_CITY_BY_ID, req.params.id);
        if(result[0].length === 0){
            return next({code: 404, message: 'City not found'})
        }
        res.status(200).json(result[0]);
    } catch (error) {
        next(error);
    }
}

const getCityByName = async (req, res, next) => {
    try {
        const cityName = req.params.name.split('-').join(' ');
        const result = await cityModel.queryDb(cityModel.GET_CITY_BY_NAME, cityName);
        if(result[0].length === 0){
            return next({code: 404, message: 'City not found'})
        }
        res.status(200).json(result[0]);
    } catch (error) {
        next(error);
    }
}

const addNewCity = async (req, res, next) => {
    try {
        const result = await cityModel.queryDb(cityModel.ADD_CITY, req.body.name, req.body.zip);
        res.status(201).json(result[0])
    } catch (error) {
        next(error);
    }
}

const renameCity = async (req, res, next) => {
    try {
        const result = await cityModel.queryDb(cityModel.UPDATE_CITY_NAME, req.body.name, req.body.id);
        if (result[0].affectedRows == 0) {
            const err = new Error('City Id does not exist');
            err.code = 400
            throw err
        }
        res.status(200).json({cityId : result[0].insertId})
    } catch (error) {
        next(error);
    }
}

const changeCityZip = async (req, res, next) => {
    try {
        const result = await cityModel.queryDb(cityModel.UPDATE_CITY_ZIP, req.body.zip, req.body.id);
        if (result[0].affectedRows == 0) {
            const err = new Error('City Id does not exist');
            err.code = 400
            throw err
        }
        res.status(200).json({cityId : result[0].insertId})
    } catch (error) {
        next(error);
    }
}

const deleteCityById = async (req, res, next) => {
    try {
        const result = await cityModel.queryDb(cityModel.DELETE_CITY_BY_ID, req.params.id);
        if (result[0].affectedRows == 0) {
            const err = new Error('City Id does not exist');
            err.code = 400
            throw err
        }
        res.status(204).json()
    } catch (error) {
        next(error);
    }
}

const handleError = (error, req, res, next) => {
    const codeErr = error.code || 500;
    res.status(codeErr).json(error.message)
}

module.exports = {
    getAllCity,
    getCityById,
    addNewCity,
    deleteCityById,
    renameCity,
    changeCityZip,
    getCityByName,
    handleError
}