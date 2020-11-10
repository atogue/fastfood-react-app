import React, { Component } from 'react'
import base from '../base'
import recettes from '../recettes'

const withFirebase = WrappedComponent => (
    class HOC extends Component {
        state = {
          pseudo: this.props.match.params.pseudo,
          recettes: {}
        }

        componentDidMount() {
            this.ref = base.syncState(
                `/${this.state.pseudo}/recettes`,
                {
                    context: this,
                    state: 'recettes'
                })
            this.setState({ update: true })
        }

        componentDidUpdate() {
            const update = !this.state.update
            if (this.state.update === true) {
                this.setState({ update })
            }
        }

        componentWillUnmount() {
            base.removeBinding(this.ref) // close state session when changing the user
        }

        ajouterRecette = recette => {
            const newRecettes = { ...this.state.recettes }
            newRecettes[`recette-${Date.now()}`] = recette
            this.setState({ recettes: newRecettes })
        }
        majRecette = (key, newRecette) => {
            const newRecettes = { ...this.state.recettes }
            newRecettes[key] = newRecette
            this.setState({ recettes: newRecettes }) // be careful when updating by using struct { recettes }
        }
        supprimerRecette = key => {
            const newRecettes = { ...this.state.recettes }
            newRecettes[key] = null
            this.setState({ recettes: newRecettes })
        }

        chargerExemple = () => this.setState({ recettes })

        render() {
            return (
                <WrappedComponent
                    recettes={this.state.recettes}
                    ajouterRecette={this.ajouterRecette}
                    majRecette={this.majRecette}
                    supprimerRecette={this.supprimerRecette}
                    chargerExemple={this.chargerExemple}
                    { ...this.props }
                />
            );
        }
    }
)

export default withFirebase