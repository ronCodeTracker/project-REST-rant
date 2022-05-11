

const React = require('react')
const Def = require('../default')

function Index(data) {
    let placesFormatted = data.places.map((place) => {
        return (
            <div key={place.name} className="col-sm-6">

                <h2>
                    <a href={`/places/${place.id}`} className="nounderline" >{place.name}
                    </a>
                </h2>

                <p className="text-center">
                    {place.cuisines}
                </p>
                <img src={place.pic} alt={place.name} width="250"></img>

                <p className="text-center">
                    Located in {place.city}, {place.state}
                </p>

            </div>
        )
    })
    return (
        <Def>
            <h2 className="space2">Places to Rant and Rave About</h2>
            {placesFormatted}
        </Def>
    )
}

module.exports = Index




