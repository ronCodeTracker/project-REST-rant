
const React = require('react')
const Def = require('../default')

function comment_form({place}) {
    return (
        <Def>
            <main>
                <h1>Add a New Comment</h1>

                <form method="POST" action={`/places/${place.id}/rant`}>
                    <div className="form-group mx-auto col-sm-6 col-md-4 col-lg-3">
                        <label htmlFor="author">Author</label>
                        <input className="form-control" id="author" name="author" required />
                    </div>
                    <div className="form-group mx-auto col-sm-6 col-md-4 col-lg-3">
                        <label htmlFor="content">Content</label>
                        <input className="form-control"
                            type="textarea"
                            id="content"
                            name="content"/>
                    </div>
                    <div className="form-group mx-auto col-sm-6 col-md-4 col-lg-3">
                        <label htmlFor="stars">Star Rating</label>
                        <input className="form-control"
                            type="number"
                            id="stars"
                            name="stars"
                            defaultValue={5}
                            step="0.5" required/>
                    </div>
                    <div className="form-group mx-auto col-sm-6 col-md-4 col-lg-3">
                        <label htmlFor="rant">Rant</label>
                        <input 
                            type="checkbox"
                            defaultChecked
                            id="rant" name="rant" />
                    </div>
                    <input className="gtn btn-primary" type="submit" value="Add Rant"/>
                </form>

            </main>
        </Def>
    )
}

module.exports = comment_form

