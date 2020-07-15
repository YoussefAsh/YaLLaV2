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

  var eventRef = firebase.database().ref('events/'+ 'WD TFT Event');

document.getElementById('eventForm').addEventListener('submit', submitForm);

function submitForm(e){
  e.preventDefault();
  window.location.href = "http://www.yallaesports.com/success.html";
    var email = getInputVal('email');
    var ign = getInputVal('ign');
    var discord = getInputVal('discord');
    console.log("haha");
   saveApplication(email, ign, discord);


}

function getInputVal(id){
 return document.getElementById(id).value;
}

function saveApplication(email, ign, discord)
{
    var  newEventRef = eventRef.push();
    newEventRef.set({
        ign: ign,
        email: email,
        discord: discord
    });
}

