
// name:  Ronald Kiefer
// Hebrew name:   ר ו נ  א ל ד
// date:  February 24, 2022  Thursday
// description:  js controller file for rest-rant app


const router = require('express').Router()

router.get('/', (req, res) => {
    res.render('places/index')
})


router.post('/', (req, res) => {
    res.send('Post/places')// create new place
})

router.get('/new', (req, res) => {
    res.send('GET/places/new')// form page for creating new place
})

router.get('/:id', (req, res) => {
    res.send('GET/places/:id')//details about a place
})

//router.put?  update a place  (places/:id)

router.get('/id/edit', (req, res) => {
    res.send('GET/places/:id/edit')
})//page for editing a place

//router.delete delete a place (places/:id)

router.post('/:id/rant', (req, res) => {
    res.send('POST/places/:id/rant')
})// comment about a place

//router.delete? delete comment about a place (/places/:id/rant/:rantId)



module.exports = router






