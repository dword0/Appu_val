document.addEventListener("DOMContentLoaded", () => {

/* ===============================
   TYPEWRITER INTRO
================================= */

const intro = document.getElementById("introText");
const question = document.getElementById("mainQuestion");
const buttons = document.getElementById("buttons");

const introLines = [
    "Eda Appu...",
    "I wanted to ask you something...",
    "It’s important...",
    "💜"
];

let lineIndex = 0;

function typeLine(text, callback) {
    let i = 0;
    intro.innerHTML = "";

    let interval = setInterval(() => {
        intro.innerHTML += text[i];
        i++;

        if (i >= text.length) {
            clearInterval(interval);
            setTimeout(callback, 700);
        }
    }, 40);
}

function runIntro() {
    if (lineIndex < introLines.length) {
        typeLine(introLines[lineIndex], () => {
            lineIndex++;
            runIntro();
        });
    } else {
        intro.style.display = "none";
        question.style.display = "block";
        buttons.style.display = "flex";
    }
}

runIntro();


/* ===============================
   BUTTON ELEMENTS
================================= */

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const gif = document.getElementById("gifContainer");

let noClicks = 0;
let noScale = 1;
let yesScale = 1;


/* ===============================
   NO BUTTON LOGIC
================================= */

const noTexts = [
    "No 😢",
    "Are you sure? 🥺",
    "Really sure? 😭",
    "I'll be sad 💔",
    "Don't do this 💜",
    "Last chance 🥹",
    "Okay now you're just being mean 😭"
];

noBtn.addEventListener("click", () => {

    noClicks++;

    /* SAVE COUNT */
    localStorage.setItem("noClickCount", noClicks);

    if (noClicks < noTexts.length) {
        noBtn.textContent = noTexts[noClicks];
    }

    noScale -= 0.12;
    if (noScale < 0.35) noScale = 0.35;

    noBtn.style.transform = `scale(${noScale})`;

    yesScale += 0.1;
    yesBtn.style.transform = `scale(${yesScale})`;

    gif.innerHTML = `
        <img src="https://media.giphy.com/media/OPU6wzx8JrHna/giphy.gif"
        width="180"
        style="margin-top:20px;border-radius:12px;">
    `;
});



/* ===============================
   RUN AWAY ONLY AFTER 4 CLICKS
================================= */

document.addEventListener("mousemove", (e) => {

    if (noClicks < 4) return;   // ⭐ KEY LINE ⭐

    const rect = noBtn.getBoundingClientRect();

    const btnX = rect.left + rect.width / 2;
    const btnY = rect.top + rect.height / 2;

    const distX = e.clientX - btnX;
    const distY = e.clientY - btnY;

    const distance = Math.sqrt(distX * distX + distY * distY);

    if (distance < 140) {

        const moveX = (Math.random() - 0.5) * 220;
        const moveY = (Math.random() - 0.5) * 220;

        noBtn.style.transform =
            `translate(${moveX}px, ${moveY}px) scale(${noScale})`;
    }
});


/* ===============================
   YES BUTTON CINEMATIC
================================= */

const celebrationSound = document.getElementById("celebrationSound");

yesBtn.addEventListener("click", () => {

    /* Play Celebration Sound */
    if (celebrationSound) {
        celebrationSound.currentTime = 0;
        celebrationSound.play();
    }

    /* Show Overjoyed GIF */
    gif.innerHTML = `
        <img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMnh5ZmI0Z3d5MHFnaHl1OXVrdnRqOWp1cDIwNzNpa242YzRsazUwbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/BQCsG0FBYjeYkmQ5bs/giphy.gif"
        width="220"
        style="margin-top:20px;border-radius:12px;">
    `;

    /* Screen Flash */
    document.body.classList.add("flash");

    /* Screen Shake */
    document.body.classList.add("shake");
    setTimeout(()=>document.body.classList.remove("shake"),400);

    /* Heart Explosion */
    explodeHearts(yesBtn);

    /* Confetti */
    createConfetti();
    drawConfetti();

    /* Redirect */
    setTimeout(() => {
        window.location.href = "yes.html";
    }, 2000);
});


/* HEART EXPLOSION FUNCTION */
function explodeHearts(element){

    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width/2;
    const centerY = rect.top + rect.height/2;

    for(let i=0;i<20;i++){

        const heart = document.createElement("div");
        heart.className = "heart-particle";
        heart.innerHTML = "💜";

        const x = (Math.random()-0.5)*300 + "px";
        const y = (Math.random()-0.5)*300 + "px";

        heart.style.left = centerX + "px";
        heart.style.top = centerY + "px";
        heart.style.setProperty("--x", x);
        heart.style.setProperty("--y", y);

        document.body.appendChild(heart);

        setTimeout(()=>heart.remove(),1000);
    }
}




/* ===============================
   CONFETTI
================================= */

const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confettiPieces = [];

function createConfetti() {
    confettiPieces = [];

    for (let i = 0; i < 120; i++) {
        confettiPieces.push({
            x: Math.random() * canvas.width,
            y: -Math.random() * canvas.height,
            size: 20 + Math.random() * 20,
            speed: 2 + Math.random() * 3
        });
    }
}

function drawConfetti() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    confettiPieces.forEach(piece => {
        ctx.font = piece.size + "px Arial";
        ctx.fillText("💜", piece.x, piece.y);
        piece.y += piece.speed;
    });

    requestAnimationFrame(drawConfetti);
}


/* ===============================
   SPARKLES
================================= */

const sparkleCanvas = document.getElementById("sparkleCanvas");
const sCtx = sparkleCanvas.getContext("2d");

sparkleCanvas.width = window.innerWidth;
sparkleCanvas.height = window.innerHeight;

let stars = [];

for (let i = 0; i < 40; i++) {
    stars.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        r: Math.random() * 2
    });
}

function sparkle() {

    sCtx.clearRect(0, 0, sparkleCanvas.width, sparkleCanvas.height);

    stars.forEach(star => {
        sCtx.beginPath();
        sCtx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        sCtx.fillStyle = "rgba(255,255,255,0.8)";
        sCtx.fill();
    });

    requestAnimationFrame(sparkle);
}

sparkle();

});

