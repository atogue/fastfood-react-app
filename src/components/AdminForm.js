import React from 'react'
import PropTypes from 'prop-types'

const AdminForm = ({ id: key, majRecette, recettes , supprimerRecette }) => {
    const recette = recettes[key]

    const handleChange = (event, id) => {
        const { name, value } = event.target
        const newRecette = recettes[id]
        newRecette[name] = value // update
        majRecette(id, newRecette) // save on state
    }

    return (
        <div className='card'>
            <form className='admin-form'>
                <input
                    name='nom'
                    value={recette.nom}
                    onChange={e => handleChange(e, key)}
                    type='text' placeholder='Nom de la recette'/>
                <input
                    name='image'
                    value={recette.image}
                    onChange={e => handleChange(e, key)}
                    type='text' placeholder={'Adresse de l\'image'} />
                <textarea
                    name='ingredients'
                    value={recette.ingredients}
                    onChange={e => handleChange(e, key)}
                    rows='3' placeholder='liste des ingredients' />
                <textarea
                    name='instructions'
                    value={recette.instructions}
                    onChange={e => handleChange(e, key)}
                    rows='15' placeholder='liste des instructions' />
            </form>
            <button onClick={() => supprimerRecette(key)}>Supprimer</button>
        </div>
    )
}

AdminForm.prototype = {
    key: PropTypes.string.isRequired,
    majRecette: PropTypes.func.isRequired,
    recettes: PropTypes.object.isRequired,
    supprimerRecette: PropTypes.func.isRequired
}

export default AdminForm