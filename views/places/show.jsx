



const React = require('react')
const Def = require('../default')

function show(data) {
    let comments = (
        <h3 className="inactive">
            No comments yet!
        </h3>
    )
    if (data.place.comments.length) {
        comments = data.place.comments.map(c => {
            return (
                <div className="border" key= { c.id }>
                    <h2 className="rant">{c.rant ? 'Rant! 😡' : 'Rave! 😻'}</h2>
                    <h4>{c.content}</h4>
                    <h3>
                        <stong>- {c.author}</stong>
                    </h3>
                    <h4>Rating: {c.stars}</h4>
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
                    <p>currently unrated</p>
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

                <a href={`/places/${data.id}/edit`} className="btn btn-warning space2">
                    Edit
                </a>
                <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
                    <button type="submit" className="btn btn-danger space2">
                        Delete
                    </button>
                </form>

          </main>
        </Def>
    )
}

module.exports = show



