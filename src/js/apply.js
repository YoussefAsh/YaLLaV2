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

  var applicationsRef = firebase.database().ref('applications');

document.getElementById('applyForm').addEventListener('submit', submitForm);

function submitForm(e){
    var fname = getInputVal('fname');
    var lname = getInputVal('lname');
    var ign = getInputVal('ign');
    var nationality = getInputVal('nationality');
    var email = getInputVal('email');
    var country = getInputVal('country');
    var phone = getInputVal('phone');
    var age = getInputVal('age');
    var gender;
    if(document.getElementById('male').checked) {
        gender = 'Male';
      }else if(document.getElementById('female').checked) {
        gender= 'Female'
      }
    var language = document.getElementById("language");
    var languages = [];
    for (var i = 0; i < language.length; i++) {
        if (language.options[i].selected) languages.push(language.options[i].value);
    }

    var twitter = getInputVal('twitter');
    var facebook = getInputVal('facebook');
    var instagram = getInputVal('instagram');
    var twitch = getInputVal('twitch');
    var games = getInputVal('games');
    var platform = getInputVal('platform');
    var role; 
    if(document.getElementById('player').checked) {
        role = 'Player';
      }
      else if(document.getElementById('streamer').checked) {
        role = 'Streamer'
      }
      else if(document.getElementById('team').checked) {
        role = 'Team';
      }
      else if(document.getElementById('coach').checked) {
        role = 'Coach'
      }
      else if(document.getElementById('staff').checked) {
        role = 'Staff'
      }
    var accomplishments = getInputVal('accomplishments');
    var who = getInputVal('who');
    var join = getInputVal('join');
    var goals = getInputVal('goals');
    var support = getInputVal('support');
   saveApplication(fname,lname,ign,nationality,email,country,phone
        ,age,gender,languages,twitter,facebook,instagram,
        twitch,games,platform,role,accomplishments,who,join,
        goals,support);
        


}

function getInputVal(id){
 return document.getElementById(id).value;
}

function saveApplication(fname,lname,ign,nationality,email,country,phone
                        ,age,gender,languages,twitter,facebook,instagram,
                        twitch,games,platform,role,accomplishments,who,join,
                        goals,support)
{
    var newApplicationref = applicationsRef.push();
    newApplicationref.set({
        fname: fname,
        lname: lname,
        ign: ign,
        nationality: nationality,
        email: email,
        country: country,
        phone: phone,
        age: age,
        gender: gender,
        languages: languages,
        twitter: twitter,
        facebook: facebook,
        instagram: instagram,
        twitch: twitch,
        games: games,
        platform: platform,
        role: role,
        accomplishments: accomplishments,
        who: who,
        join: join,
        goals: goals,
        support: support
    });
}

