import React, { Component } from 'react'


class AjouterRecette extends Component {
    state = {
        nom: '',
        image: '',
        ingredients: '',
        instructions: ''
    }

    handleChange = event => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }
    handleSubmit = event => {
        event.preventDefault() // stop default action submission
        const recette = { ...this.state }
        this.props.ajouterRecette(recette)  // submission
        // Reset
        Object.keys(recette).forEach( item => {
            recette[item] = ''
        })
        this.setState({ ...recette }) // binding every field dynamically
    }

    render() {
        return (
            <div className='card'>
                <form className='admin-form ajouter-recette' onSubmit={this.handleSubmit}>
                    <input name='nom'
                           value={this.state.nom} onChange={this.handleChange}
                           type='text' placeholder='Nom de la recette' />
                    <input name='image'
                           value={this.state.image} onChange={this.handleChange}
                           type='text' placeholder={'Nom de l\'image'} />
                    <textarea name='ingredients'
                              value={this.state.ingredients} onChange={this.handleChange}
                              rows='3' placeholder='liste des ingredients' />
                    <textarea name='instructions'
                              value={this.state.instructions} onChange={this.handleChange}
                              rows='15' placeholder='liste des instructions' />
                              <button>+ Ajouter une recette</button>
                </form>
            </div>
        )
    }
}

export default AjouterRecette