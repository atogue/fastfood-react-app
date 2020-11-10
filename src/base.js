import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDjkfFdX9CtMnkHaknOfZCQ8oOcC4oxz8U",
    authDomain: "recettes-app-806ed.firebaseapp.com",
    databaseURL: "https://recettes-app-806ed.firebaseio.com"
})

const base = Rebase.createClass(firebaseApp.database())

// This is a named export
export { firebaseApp }

// this is a default export
export default base
