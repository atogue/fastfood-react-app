import React from 'react'
// CSS
import './App.css'
import Header from './components/Header'
import Admin from './components/Admin'
import Card from './components/Card'

// Firebase
import withFirebase from './hoc/withFirebase'

// PropTypes check
import PropTypes from 'prop-types'

// Color context over app
import ColorContext from './components/Color'

const App = ({   match,
                 recettes,
                 majRecette,
                 ajouterRecette,
                 supprimerRecette,
                 chargerExemple }) => {

    const cards = Object.keys(recettes)
        .map(card => <Card key={card} id={card} details={recettes[card]} />)

    return (
        <ColorContext>
            <div className='box'>
                <Header pseudo={match.params.pseudo} />
                <div className='cards'>
                    { cards }
                </div>
                <Admin
                    pseudo={match.params.pseudo}
                    recettes={recettes}
                    majRecette={majRecette}
                    ajouterRecette={ajouterRecette}
                    supprimerRecette={supprimerRecette}
                    chargerExemple={chargerExemple} />
            </div>
        </ColorContext>
    )
}

/*class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pseudo: this.props.match.params.pseudo,
            update: false
        }
        console.log('Constructor')
    }
  // state = {
  //   pseudo: this.props.match.params.pseudo,
  //   recettes: {}
  // }

  render () {
      console.log('App - Render')
    const cards = Object.keys(this.props.recettes)
        .map(card => <Card key={card} id={card} details={this.props.recettes[card]} />)
    return (
      <div className='box'>
        <Header pseudo={this.state.pseudo} />
        <div className='cards'>
          { cards }
        </div>
         <Admin
              pseudo={this.state.pseudo}
              recettes={this.props.recettes}
              majRecette={this.props.majRecette}
              ajouterRecette={this.props.ajouterRecette}
              supprimerRecette={this.props.supprimerRecette}
              chargerExemple={this.props.chargerExemple} />
      </div>
    )
  }
}*/

App.propTypes = {
    match: PropTypes.object.isRequired,
    recettes: PropTypes.object.isRequired,
    ajouterRecette: PropTypes.func.isRequired,
    majRecette: PropTypes.func.isRequired,
    supprimerRecette: PropTypes.func.isRequired,
    chargerExemple: PropTypes.func.isRequired
}

const WrappedComponent = withFirebase(App)
export default WrappedComponent
