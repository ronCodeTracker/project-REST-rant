
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
    db.Place.findByIdAndUpdate(req.params.id, req.body)
        .then(() => {
            res.redirect(`/places/${req.params.id}`)
        })
        .catch(err => {
            console.log('err', err)
            res.render('error404')
        })
})

// delete
router.delete('/:id', (req, res) => {
    db.Place.findByIdAndDelete(req.params.id)
        .then(place => {
            res.redirect('/places')
        })
        .catch(err => {
            console.log('err', err)
            res.render('error404')
        })
})

// go to edit page
router.get('/:id/edit', (req, res) => {
    db.Place.findById(req.params.id)
        .then(place => {
            res.render('places/edit', { place })
        })
        .catch(err => {
            res.render('error404')
        })
})



router.get('/:id/rant', (req, res) => {
    db.Place.findById(req.params.id)
        .then(place => {
            res.render('places/newcomment', {place})
        })
})

router.post('/:id/rant', (req, res) => {
    console.log(req.body)
    if (req.body.rant) {
        req.body.rant = true
    }
    else {
        req.body.rant = false
    }
    db.Place.findById(req.params.id)
        .then(place => {
            // Todo: Create comment
            db.Comment.create(req.body)
                .then(comment => {
                    // Todo: Save comment id to place
                    place.comments.push(comment.id)
                    place.save()
                        .then(() => {
                            res.redirect(`/places/${req.params.id}`)
                        })
                })
                .catch(err => {
                    res.render('error404')
                })
        })
        .catch(err => {
            res.render('error404')
        })
    
})

router.delete('/:id/rant/:rantId', (req, res) => {
    console.log('reqparamsrandid' + req.params.rantId)
    db.Comment.findByIdAndDelete(req.params.rantId)
        .then(() => {
            console.log('Success')
            res.redirect(`/places/${req.params.id}`)
        })
        .catch(err => {
            console.log('err', err)
            res.render('error404')
        })
    /*
    db.Place.findById(req.params.id)
        .then(place => {
            console.log('place' + place)
            res.render('places/show')
        })
        .catch(err => {
            console.log('err' + err)
            res.render('error404')
        })  */
    //res.send('here')
})

module.exports = router
