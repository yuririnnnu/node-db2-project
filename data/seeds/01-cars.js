// STRETCH
const cars = [
    {
        vin: '111111111111',
        make: 'toyota',
        model: 'prius',
        milage: 5005,
        title: 'clean',
        transmission: 'manual'
    },
    {
        vin: '111111111111',
        make: 'toyota',
        model: 'corolla',
        milage: 115265,
        title: 'salvage'
    },
    {
        vin: '111111111111',
        make: 'ford',
        model: 'focus',
        milage: 11321
    }
]

exports.seed = function(knex){
    return knex('cars')
    .truncate().then(()=>{
        return knex('cars').insert(cars)
    })
}

// async way of exporting
// exports.seed = async function(knex){
//     await knex('cars').truncate()
//     await knex('cars').insert(cars)
// }
