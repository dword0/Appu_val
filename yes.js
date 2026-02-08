const messageElement = document.getElementById("typeMessage");

/* BASE MESSAGE */
let baseMessage =
"I’m so happy you said yes 💜\n" +
"You just made my whole day brighter ✨\n" +
"I can’t wait to spend Valentine’s with you 🌸";

/* READ NO CLICK COUNT */
let noClicks = parseInt(localStorage.getItem("noClickCount")) || 0;

/* EXTRA ENDING MESSAGE */
let endingMessage = "";

/* LOGIC */
if(noClicks === 0){
    endingMessage =
    "\n\nYou said YES immediately 😍💜\n" +
    "Okay wow… that made me insanely happy 🥹✨";
}
else if(noClicks <= 2){
    endingMessage =
    "\n\nYou hesitated a little 😏\n" +
    "But I’ll allow it 💜";
}
else if(noClicks > 3){
    endingMessage =
    "\n\nBruh… you pressed NO " + noClicks + " times 😤\n" +
    "I’m pretending to be offended 😭💜";
}
else{
    endingMessage =
    "\n\nWOW 😑\n" +
    noClicks + " NO clicks??\n" +
    "I’m fake angry now 😤💜";
}

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
