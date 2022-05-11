


const db = require('../models')

db.Place.create([{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: 'https://www.bing.com/th?id=OIP.qpa37kQZAQcyBz-' +
        'InejAkwHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2',
    founded: 1989
}, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: '/images/coffee-cat.jpg',
    founded: 2020
}])
    .then(() => {
        console.log('Success!')
        process.exit
    })
    .catch(err => {
        console.log('Failure!', err)
        process.exit
    })





