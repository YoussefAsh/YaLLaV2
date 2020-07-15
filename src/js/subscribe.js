// Your web app's Firebase configuration

var firebaseConfig = {
    apiKey: "AIzaSyAaLOFhQtxrfuxIh7aC6ePRs-8miFiE7M4",
    authDomain: "yalla-apply.firebaseapp.com",
    databaseURL: "https://yalla-apply.firebaseio.com",
    projectId: "yalla-apply",
    storageBucket: "",
    messagingSenderId: "1001063994938",
    appId: "1:1001063994938:web:5d21cf0e36a071cd"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var newsletterRef = firebase.database().ref('newsletter');

document.getElementById('newsletterForm').addEventListener('submit', submitForm);

function submitForm(e){
    var email = getInputVal('email');
   saveApplication(email);
}

function getInputVal(id){
 return document.getElementById(id).value;
}

function saveApplication(email)
{
    var newNewsletterRef = newsletterRef.push();
    newNewsletterRef.set({
        email: email
    });
}

