import React from 'react'
import PropTypes from 'prop-types'

// Color context consumer
import { ColorContext } from './Color'

const Header = ({ pseudo }) => {
    const formatPseudo = pseudo => /[aeiouy]/i.test(pseudo[0]) ? `d'${pseudo}` : `de ${pseudo}`
    return (
        <ColorContext.Consumer>
            { context => (
                <header style={{ backgroundColor: context.state.color }}>
                    <h1>La boite à recettes { formatPseudo(pseudo) }</h1>
                </header>
            )}
        </ColorContext.Consumer>
    )
}

Header.prototype = {
    pseudo: PropTypes.string.isRequired
}
export default Header