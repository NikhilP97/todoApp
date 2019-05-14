import firebase from 'firebase';

const config = {
 	apiKey: "AIzaSyBCvnmi-l6wZTRvlDlR_-9ME5k5FA8foN4",
	authDomain: "firedux-todo-bb745.firebaseapp.com",
	databaseURL: "https://firedux-todo-bb745.firebaseio.com",
	projectId: "firedux-todo-bb745",
	storageBucket: "firedux-todo-bb745.appspot.com",
	messagingSenderId: "292847188508",
};

firebase.initializeApp(config);

export default firebase;
