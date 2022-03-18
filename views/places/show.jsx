



const React = require('react')
const Def = require('../default')

function show(data) {
    let comments = (
        <h3 className="inactive">
            No comments yet!
        </h3>
    )

    let rating = (
        <h3 className="inactive">
            Not yet rated
        </h3>
    )



    if (data.place.comments.length) {


        let sumRatings = data.place.comments.reduce((tot, c) => {
            return tot + c.stars
        }, 0)
        let averageRating = Math.round(sumRatings / data.place.comments.length)
        let stars = ''
        for (let i = 0; i < averageRating; i++) {
            stars += '⭐️'
        }
        rating = (
            <h3>
                {stars} stars
            </h3>
        )


        comments = data.place.comments.map(c => {
            return (
                <div className="border" key= { c.id }>
                    <h2 className="rant">{c.rant ? 'Rant! 😡' : 'Rave! 😻'}</h2>
                    <h4>{c.content}</h4>
                    <h3>
                        <stong>- {c.author}</stong>
                    </h3>
                    <h4>Rating: {c.stars}</h4>
                    <h5>Console: {c.id}</h5>
                    <form method="POST" action={`/places/${data.place.id}/rant/${c.id}?_method=DELETE`}>
                        <input type="submit" className="btn btn-danger" value="Delete Comment" />
                    </form>
                </div>
            )
        })
    }
    return (
        <Def>
          <main>
                <h1 className="space2">Show Page</h1>
                <h2>{data.place.name}</h2>
                <p className="text-center">
                    {data.place.cuisines}
                </p>
                <img src={data.place.pic} alt={data.place.name} width="250"></img>
                <p className="text-center">
                    Located in {data.place.city}, {data.place.state}
                </p>
                <div>
                    <h2>Rating</h2>
                    {rating}
                </div>
                <div>
                    <h2>Comments</h2>
                    {comments}
                </div>

                <h3>
                    {data.place.showEstablished()}
                </h3>
                <h4>
                    Serving {data.place.cuisines}
                </h4>

                <a href={`/places/${data.place.id}/edit`} className="btn btn-warning space2">
                    Edit
                </a>
                <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}>
                    <button type="submit" className="btn btn-danger space2">
                        Delete
                    </button>
                </form>
                
                <div>
                    <a href={`/places/${data.place.id}/rant`}>Add new comment</a>
                </div>
                

          </main>
        </Def>
    )
}

module.exports = show



