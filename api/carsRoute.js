const express = require('express')

const db = require('../data/db-config')

const router = express.Router()

// @@@@@@@@@@ GET request @@@@@@@@@@
router.get('/', (req, res) => {
    db('cars')
    .then(cars => res.json(cars))
    .catch(err => res.status(500).json({ message: 'Failed to retrieve cars' }))
})

// @@@@@@@@@@ POST request @@@@@@@@@@
router.post('/', (req, res) => {
    const newCar = req.body

    db('cars')
    .insert(newCar, 'id')
    .then(([id]) => {
        db('cars')
        .where({ id })
        .then(car => res.json(car))
        .catch(err => res.status(500).json({ message: 'Failed to retrieve car' }))
    })
    .catch(err => res.status(500).json({ message: 'Failed to add new car' }))
})

// @@@@@@@@@@ DELETE request @@@@@@@@@@
router.delete('/:id', (req, res) => {
    const { id } = req.params

    db('cars')
    .where({ id })
    .first()
    .then(remCar => {
        db('cars')
        .where({ id })
        .del()
        .then(count => res.json(remCar))
        .catch(err => res.status(500).json({ message: 'Failed to delete car' }))
    })
    .catch(err => res.status(500).json({ message: 'Failed to retrieve car' }))
})

module.exports = router