import firebase from 'firebase';

try {
    var config = {
        apiKey: "AIzaSyDonxYEEIMVscl7imuin_nCUWs8QtSnYWY",
        authDomain: "suciu-todo-app.firebaseapp.com",
        databaseURL: "https://suciu-todo-app.firebaseio.com",
        storageBucket: "suciu-todo-app.appspot.com",
        messagingSenderId: "214766373412"
    };
    firebase.initializeApp(config);
} catch (e) {
    console.log('Connection Failed!', e);
}

export var firebaseRef = firebase.database().ref();
export default firebase;
