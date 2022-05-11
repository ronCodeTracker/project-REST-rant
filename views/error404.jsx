

const React = require('react')
const Def = require('./default')

function error404() {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops, sorry, we can't find this page!</p>
                <div>
                  <img src="http://placekitten.com/200/300"
                    alt="cute kitten on placekitten.com website" />
                </div>
                <div>
                    <a href="http://placekitten.com">placekitten</a>
                </div>
            </main>
        </Def>
    )
}

module.exports = error404



