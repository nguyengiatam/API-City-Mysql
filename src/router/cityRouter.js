const express = require('express')
const router = express.Router()
const cityController = require('../controller/cityController')

router.get('/all-city', cityController.getAllCity)
router.get('/id/:id', cityController.getCityById)
router.get('/name/:name', cityController.getCityByName)
router.post('/new-city', cityController.addNewCity)
router.put('/rename-city', cityController.renameCity)
router.put('/change-city-zip', cityController.renameCity)
router.delete('/:id', cityController.deleteCityById)
router.use(cityController.handleError)

module.exports = router