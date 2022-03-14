
// name:  Ronald Kiefer
// Hebrew name:   ר ו נ  א ל ד
// date:  February 24, 2022  Thursday
// description:  js controller file for rest-rant app


const router = require('express').Router()
const db = require('../models')
//const places = require('../models/places')


// index route list of places
router.get('/', (req, res) => {

    db.Place.find()
        .then((places) => {
            res.render('places/index', { places:places })
        })
        .catch(err => {
            console.log(err)
            res.render('error404')
        })
})

// create new place route
router.post('/', (req, res) => {
    console.log(req.body)
    if (!req.body.pic) {
        // Default image if one is not provided
        req.body.pic = 'http://placekitten.com/400/400'
    }
    db.Place.create(req.body)
        .then((placeVar) => {
            console.log(placeVar)
            res.redirect('/places')
        })
        .catch(err => {
            console.log('err', err)
            res.render('error404')
        })
})




router.get('/new', (req, res) => {
    res.render('places/new')
})


//show route
router.get('/:id', (req, res) => {
    db.Place.findById(req.params.id)
        .populate('comments')   
        .then(place => {
            console.log(place.comments)
            res.render('places/show', { place })
        })
        .catch(err => {
            console.log('err', err)
            res.render('error404')
        })
})



// update a place
router.put('/:id', (req, res) => {
    res.send('PUT /places/:id stub')
})

// delete
router.delete('/:id', (req, res) => {
    res.send('DELETE /places/:id stub')
})

// go to edit page
router.get('/:id/edit', (req, res) => {
    res.send('GET edit form stub')
})


router.post('/:id/rant', (req, res) => {
    res.send('GET /places/:id/rant stub')
})

router.delete('/:id/rant/:rantId', (req, res) => {
    res.send('GET /places/:id/rant/:rantId stub')
})

module.exports = router
