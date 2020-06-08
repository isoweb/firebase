importScripts('https://www.gstatic.com/firebasejs/7.15.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.15.0/firebase-messaging.js');
var firebaseConfig = {
    
  };
  firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();