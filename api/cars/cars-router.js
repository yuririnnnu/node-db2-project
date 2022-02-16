const express = require('express')
const router = express.Router()
const Cars = require('./cars-model')
const {
    checkCarId,
    checkCarPayload,
    checkVinNumberValid,
    checkVinNumberUnique
} = require('./cars-middleware')

router.get('/', async (req, res, next) => {
    try {
        const cars = await Cars.getAll()
        res.json(cars)
    }
    catch(e) {
        next(e)
    }
})

router.get('/:id', checkCarId, async (req, res, next) => {
    try {
        const car = await Cars.getById(req.params.id)
        res.json(car)
    }
    catch(e) {
        next(e)
    }
})

router.post('/', checkCarPayload, checkVinNumberValid, checkVinNumberUnique, async (req, res, next) => {
    try {
        const car = await Cars.create(req.body)
        res.json(car)
    }
    catch(e) {
        next(e)
    }
})

module.exports =  router 