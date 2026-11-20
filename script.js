```javascript
// ============================
// OPEN HEART
// ============================

function openMessage() {

    const message = document.getElementById("message");

    message.classList.remove("hidden");

    message.scrollIntoView({
        behavior: "smooth"
    });

}


// ============================
// FORGIVENESS POPUP
// ============================

function forgive() {

    const popup = document.getElementById("popup");

    popup.classList.add("show");

    createHearts(25);

}


function closePopup() {

    document.getElementById("popup")
        .classList.remove("show");

}


// ============================
// FLOATING HEARTS
// ============================

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    const hearts = ["❤️", "💗", "💖", "💕", "✨"];

    heart.innerHTML =
        hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        (Math.random() * 18 + 10) + "px";

    heart.style.animationDuration =
        (Math.random() * 5 + 5) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000);

}


// Continuous hearts

setInterval(createHeart, 700);


// Extra hearts for surprise

function createHearts(amount) {

    for (let i = 0; i < amount; i++) {

        setTimeout(() => {
            createHeart();
        }, i * 100);

    }

}


// ============================
// ESC TO CLOSE
// ============================

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {
        closePopup();
    }

});
```
