import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDonxYEEIMVscl7imuin_nCUWs8QtSnYWY",
    authDomain: "suciu-todo-app.firebaseapp.com",
    databaseURL: "https://suciu-todo-app.firebaseio.com",
    storageBucket: "suciu-todo-app.appspot.com",
    messagingSenderId: "214766373412"
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
    isRunning: true,
    user: {
        name: 'Chris',
        age: 20
    },
    app: {
        name: 'Todo App',
        version: '1.0.0'
    }
});

// firebaseRef.update({
//     isRunning: false,
//     'app/name': 'Todo Application!'
// });

// firebaseRef.child('app').update({
//     name: 'Todo Application!'
// }).then(() => {
//     console.log('Update succesful!');
// }, (e) => {
//     console.log(e);
// });

// firebaseRef.update({
//     'app/name' : 'Todo Application!',
//     'user/name' : 'Dominique'
// });

// firebaseRef.child('app').update({
//     name: 'Todo Application!!'
// });
//
// firebaseRef.child('user').update({
//     name: 'Camilia'
// });

// firebaseRef.child('app/name').remove();

// firebaseRef.child('app').update({
//     version: '2.0',
//     name: null
// });

// firebaseRef.update({
//     isRunning: null
// });
//
// firebaseRef.child('user/age').remove();

// firebaseRef.child('app').once('value').then((snapshot) => {
//     console.log('Got entire database', snapshot.key, snapshot.val());
// }, (e) => {
//     console.log('Unable to fetch value', e);
// });

// var logData = (snapshot) => {
//     console.log('Got value', snapshot.val());
// };
//
// firebaseRef.on('value', logData);
//
// firebaseRef.off(logData);
//
// firebaseRef.update({isRunning: false});

// firebaseRef.child('user').on('value', (snapshot) => {
//     console.log('User ref changed', snapshot.val());
// });
//
// firebaseRef.update({
//     'user/name': 'Mike'
// });
//
// firebaseRef.update({
//     'app/name': 'Something else'
// });

// var notesRef = firebaseRef.child('notes');
//
// notesRef.on('child_added', (snapshot) => {
//     console.log('child_added', snapshot.key, snapshot.val());
// });
//
// notesRef.on('child_changed', (snapshot) => {
//     console.log('child_changed', snapshot.key, snapshot.val());
// });
//
// notesRef.on('child_removed', (snapshot) => {
//     console.log('child_removed', snapshot.key, snapshot.val());
// });
//
// var newNoteRef = notesRef.push({
//     text: 'Walk the dog!'
// });
//
// console.log('Todo id', newNoteRef.key);

var todos = firebaseRef.child('todos');

todos.on('child_added', (snapshot) => {
    console.log('child_added', snapshot.key, snapshot.val());
});
todos.on('child_changed', (snapshot) => {
    console.log('child_changed', snapshot.key, snapshot.val());
});
todos.on('child_removed', (snapshot) => {
    console.log('child_removed', snapshot.key, snapshot.val());
});

var todoRef01 = todos.push({
    text: 'Film videos'
});

var todoRef02 = todos.push({
    text: 'Film more videos'
});
