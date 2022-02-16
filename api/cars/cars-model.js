const db = require('../../data/db-config')

const getAll = () => {
  return db('cars')
}

const getById = (id) => {
  return db('cars').where('id', id).first()
}

const getVin = (vin) => {
  return db('cars').where('vin', vin).first()
}

const create = (car) => {
  return db('cars').insert(car).then(([id]) => {
    return getById(id)
  })
}

module.exports = {
  getAll,
  getById,
  create,
  getVin
}