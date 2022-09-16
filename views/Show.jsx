const React = require('react');

class Show extends React.Component {
    render() {
        const myStyle = {
            color: '#ffffff',
            backgroundColor: '#000000',
          };
        
        const pokeObj = this.props.pokeEach
        return(
            <div>
                <h1>gotta catch'em all</h1>
                <h2 style={myStyle} >{pokeObj.name}</h2>
                <img src={pokeObj.img +'.jpg'} alt="" />
                <br></br>
                <a href="/pokemon">home button</a>
            </div>
        )
    }
}

module.exports = Show;