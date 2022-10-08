// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.11.0/firebase-app.js';
// import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.11.0/firebase-analytics.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA-XZrmxWIYQjKgKKoMS3DeZIb3ScX2NvI',
  authDomain: 'dezatrooper.firebaseapp.com',
  projectId: 'dezatrooper',
  storageBucket: 'dezatrooper.appspot.com',
  messagingSenderId: '245383548833',
  appId: '1:245383548833:web:50c02874dcc4d17d6c45e0',
  measurementId: 'G-ZP55LVFBZP',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;
