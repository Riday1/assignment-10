// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAvjj7mLTzSWc4w8YIpOqG4zzW9c3oYrw8",
    authDomain: "tech-tutor-asign-10.firebaseapp.com",
    projectId: "tech-tutor-asign-10",
    storageBucket: "tech-tutor-asign-10.appspot.com",
    messagingSenderId: "614061024083",
    appId: "1:614061024083:web:cb1fd15c051b30b384b7a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;