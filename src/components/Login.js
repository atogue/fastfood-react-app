import React from 'react'
import PropTypes from 'prop-types'

const Login = ({ authenticate }) => {
    return (
        <div className='login'>
            <h2>Connectes-toi pour créer tes recettes !</h2>
            <button onClick={authenticate} className='facebook-button'>
                Me connecter avec Facebook
            </button>
        </div>
    )
}

Login.prototype = {
    authenticate: PropTypes.func.isRequired
}
export default Login