const messageElement = document.getElementById("typeMessage");

/* BASE MESSAGE */
let baseMessage ="\nMy Dear Appu… 💜\nI’m really, really happy you said yes... Not like i would've let you say No...But that aside...\nYou bring this beautiful mix of kindness and absolute chaos energy into my life...and somehow you balance both so perfectly...The way you care...the way you always try to give...even from the very first time we met… I noticed it. And I never forgot it...!!!\nAnd your eyes… yeah...I’m not even going to pretend I don’t get lost there sometimes...The first time we met and the look you had the moment I gave you the flowers... ufff... to be frank I kinda melted right then and there...(But i'm gonna deny it if you ask me that ever again...😛😛😛)\nBeing with you just makes life feel more exciting...more alive...more “nerai korai” in the best way possible..And honestly...all I really want is to keep making you happy...in all the little ways I can.\nAlso… I know I sometimes make you angry a lot 😭  \nI’m really sorry for that… but you know I’ll keep trying to be better (and maybe slightly less annoying...maybe...😏)\nAnd I actually wanted to give this to you in a letter...in person...Don’t worry..that still exists. \nThis is just for the time being 💜\n\nI love you Nerai Korai...💜💜💜💜💜";

/* READ NO CLICK COUNT */
let noClicks = parseInt(localStorage.getItem("noClickCount")) || 0;

/* EXTRA ENDING MESSAGE */
let endingMessage = "";

/* LOGIC */
if(noClicks === 0){
    endingMessage =
    "\n\nYou said YES immediately 😍💜\n" +
    "Okay wow… that made me insanely happy 🥹✨ \n Okay wow… I’m going to remember this forever.";
}
else if(noClicks <= 2){
    endingMessage =
    "\n\nYou hesitated a little 😏\n" +
    "But I’ll allow it 💜";
}
else if(noClicks >= 6){
    endingMessage =
    "\n\nAlso… I saw those NO clicks 😭😤\n  I’m choosing to be dramatically offended for exactly 3 seconds…\nThen I forgive you because you’re my Appu 💜";

}
    /*
else{
    endingMessage =
    "\n\nWOW 😑\n" +
    noClicks + " NO clicks??\n" +
    "I’m fake angry now 😤💜";
}*/

/* FINAL MESSAGE */
const messageText = baseMessage + endingMessage;


/* TYPEWRITER */
let index = 0;

setTimeout(startTyping, 1000);

function startTyping(){
    typeMessage();
}

function typeMessage(){

    if(index < messageText.length){

        if(messageText[index] === "\n"){
            messageElement.innerHTML += "<br>";
        } else {
            messageElement.innerHTML += messageText[index];
        }

        index++;
        setTimeout(typeMessage, 40);
    }
}






