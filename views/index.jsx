const React = require('react');

class Index extends React.Component {
    render() {

        const {pokemon} = this.props
        return(
            <div>
                <h1>see all the pokemon</h1>

                <ul>
                    {pokemon.map((pokeObj,i)=>{
                        return(
                            <li>
                                <a href={`/pokemon/${i}`}> 
                                    {pokeObj.name.charAt(0).toUpperCase() + pokeObj.name.slice(1)}
                                </a>
                
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

module.exports = Index;