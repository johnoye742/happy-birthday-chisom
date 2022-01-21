var messages = new Array();
messages.push("I wish you all the goodies life has to offer...");
messages.push("May you continue to prosper and thrive especially in your career...");
messages.push("May no harm come to you...");
messages.push("May you accomplish all the goals you've set for 2022");
messages.push("May you excel in your studies(like you already have)")
messages.push("My advices for you:");
messages.push("Remember that what you believe in is what works for you...");
messages.push("Don't let anything set a limit for you, you can do anything you put your mind to..");
messages.push("Don't let trust issues stop you from making friends(try to read em)");
messages.push("Your gonna achieve what ever you plan in life");
messages.push("HAPPY BIRTHDAY OGUIKE CHISOM HILARY, age with grace");
messages.push("John Oye 🤟.");

window.onload = () => {
    alert(`Click on the card to see next message`);
var box = document.getElementById("box");

var c = 0;
var music = new Audio("./assets/audio/The Kid LAROI - WITHOUT YOU (Official Video).mp3");
box.onclick=()=> {
   
        music.play();
    
c++;
if(c < messages.length) {
    document.getElementById("msg").innerHTML = messages[c];
} else {
    c = 0;
}
}
}


