<?php

if (isset($_POST['submit'])){
    $fname = $_POST['fname'];
    $lname = $_POST['lname'];
    $ign = $_POST['ign'];
    $email = $_POST['email'];
    $nationality = $_POST['nationality'];
    $country = $_POST['country'];
    $phone = $_POST['phone'];
    $age = $_POST['age'];
    $gender = $_POST['gender'];
    $language = $_POST['language'];
    $language_print = print_r($language, TRUE);
    $twitter = $_POST['twitter'];
    $facebook = $_POST['facebook'];
    $instagram = $_POST['instagram'];
    $twitch = $_POST['twitch'];
    $games = $_POST['games'];
    $platform = $_POST['platform'];
    $position = $_POST['position'];
    $accomplishments = $_POST['accomplishments'];
    $who = $_POST['who'];
    $join = $_POST['join'];
    $goals = $_POST['goals'];
    $support = $_POST['support'];


    $mailTo = "whisper@yallaesports.com";
    $headers = "From: ".$email;
    $txt = "First name: ".$fname
    ."\n\n"
    ."Last name: ".$lname
    ."\n\n"
    ."In Game Name: ".$ign
    ."\n\n"
    ."Email: ".$email
    ."\n\n"
    ."Nationality: ".$nationality
    ."\n\n"
    ."Country of Residence: ".$country
    ."\n\n"
    ."Phone Number: ".$phone
    ."\n\n"
    ."Age: ".$age
    ."\n\n"
    ."Gender: ".$gender
    ."\n\n"
    ."Language(s): ".$language_print
    ."\n\n"
    ."Social Media: \n\n"."Twitter: ".$twitter."\nFacebook: ".$facebook."\nInstagram: ".$instagram."\nTwitch: ".$twitch
    ."\n\n"
    ."Game(s) You Play: ".$games
    ."\n\n"
    ."Gaming Platform: ".$platform
    ."\n\n"
    ."Applying As: ".$position
    ."\n\n"
    ."Accomplishments: \n".$accomplishments
    ."\n\n"
    ."Tell Us Who You Are: \n".$who
    ."\n\n"
    ."Why do you want to join YaLLa Esports? \n".$join
    ."\n\n"
    ."What are your goals? \n".$goals
    ."\n\n"
    ."How can YaLLa Esports support you to reach your goals? \n".$support;
    
    $subject = $fname." Application";

    mail($mailTo, $subject, $txt, $headers);
    header("Location: submit.html");

}

?>