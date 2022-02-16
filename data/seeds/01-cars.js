// STRETCH
const cars = [
    {
        vin: 'JH2MC1309HK207701',
        make: 'toyota',
        model: 'prius',
        milage: 5005,
        title: 'clean',
        transmission: 'manual'
    },
    {
        vin: '1J8GR48K57C584172',
        make: 'toyota',
        model: 'corolla',
        milage: 115265,
        title: 'salvage'
    },
    {
        vin: 'JKAEXVD183A087284',
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
