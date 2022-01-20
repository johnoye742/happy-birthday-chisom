var messages = new Array();
messages.push("I wish you all the goodies life has to offer...");
messages.push("May you continue to prosper and thrive especially in your career...");
messages.push("May no harm come to you...");
messages.push("May you accomplish all the goals you've set for 2022");
messages.push("May you excel in the things you do")
messages.push("May you have nice friends who would care for you");
messages.push("I wish you much time to groove, and that no harm comes to you");
messages.push("2022 has something great in store for you")
messages.push("My advices for you:");
messages.push("Don't let anything set a limit for you, you can do anything you put your mind to..");
messages.push("Don't put your trust in too many people")
messages.push("If you want something that doesn't exist. Invent it!");
messages.push("You can always say this every morning:\nIt's your boy (girl) `your name` and we back at it like a bad habit, if you want something better go grab it, and today we finna make a great something");
messages.push("HAPPY BIRTHDAY OGUIKE CHISOM HILARY, age with grace");
messages.push("I wrote a song though but it wasn't completed");
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


