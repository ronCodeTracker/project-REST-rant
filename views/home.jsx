
const React = require('react')
const Def = require('./default')

function home() {
    return (
        <Def>
            <main >
                <h1 className="space2">HOME</h1>
                <div>
                    <img src="/images/food.jpg" width="200"alt="pancakes for everyone" />
                </div>
                <div className="space2">
                    Photo by <a href="https://unsplash.com/photos/eeqbbemH9-c">Chad Montano</a> on <a href="unsplash.com">Unsplash</a>
                <a href="/places">
                    <button className="btn-primary displayChange alignCenter">Places Page</button>
                    </a>
                    <p className="space">hello</p>
                </div>
            </main>
        </Def>
    )
}

module.exports = home


