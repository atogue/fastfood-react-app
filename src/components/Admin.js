import React, { Component } from 'react'
import AjouterRecette from './AjouterRecette'
import AdminForm from './AdminForm'
import Login from './Login'

import firebase from 'firebase/app'
import 'firebase/auth'
import base, { firebaseApp } from '../base'

class Admin extends Component {
    state = {
        uid: null,
        chef: null
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged(data => {
            if (data) {
                this.handleAuth(data)
            }
        })
    }

    handleAuth = async authData => {
        const box = await base.fetch(this.props.pseudo, { context: this})
        const uid = authData.user? authData.user.uid : authData.uid

        if (!box.chef) { // first connection - create chef: uid
            await base.post(`${this.props.pseudo}/chef`, {
                data: uid
            })
        }

        this.setState({
            uid: uid,
            chef: box.chef || uid
        })
    }

    authenticate = () => {
        const authProvider = new firebase.auth.FacebookAuthProvider()
        firebaseApp
            .auth()
            .signInWithPopup(authProvider)
            .then(this.handleAuth)
    }
    logout = async () => {
        console.log('Déconnexion')
        await firebase.auth().signOut()
        this.setState({ uid: null }) // reset user id logged in
    }

    render() {
        const { recettes, ajouterRecette, majRecette,
            supprimerRecette, chargerExemple } = this.props

        const logout = <button onClick={this.logout}>Déconnexion</button>

        // in case user not connected
        if (!this.state.uid) {
            return <Login authenticate={this.authenticate} />
        }
        if (this.state.uid !== this.state.chef) {
            return (
                <div>
                    <p>Tu n'es pas le chef de cette boite !</p>
                    {logout}
                </div>
            )
        }
        return (
            <div className='cards'>
                <AjouterRecette ajouterRecette={ajouterRecette} />
                {
                    Object.keys(recettes)
                        .map(key => <AdminForm
                                        key={key}
                                        id={key}
                                        majRecette={majRecette}
                                        supprimerRecette={supprimerRecette}
                                        recettes={recettes} />)
                }
                <footer>
                    <button onClick={chargerExemple}>Remplir</button>
                    {logout}
                </footer>
            </div>
        )
    }
}

export default Admin
