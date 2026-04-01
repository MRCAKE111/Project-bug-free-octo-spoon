
// Expanded phrase library
const responses = {
    pet: ["*Purrs deeply*", "Ooh, tickle my heart!", "Love you, bestie!", "Soft fur, happy Furby!", "Again! Again!"],
    tickle: ["Hehehe! Stop it!", "Wiggle wiggle!", "Me so ticklish!", "No more! *Giggles*", "Haha! You found my spot!"],
    feed: ["Yum yum!", "More cookies please!", "Full tummy!", "Delish!", "Me hungry for more!", "A-dah! Good snack!"],
    fortune: [
        "Cloudy... ask again later.", 
        "Big fun is in your future!", 
        "A surprise is coming!", 
        "Me see greatness!", 
        "The stars say... maybe!",
        "Yes! Definitely yes!"
    ]
};

// ... (Previous Voice Recognition logic stays the same) ...

function handleVoiceCommand(cmd) {
    // Mode Switching Logic
    if (cmd.includes("dance party")) switchMode("Dance Party");
    else if (cmd.includes("copycat")) switchMode("Copycat");
    else if (cmd.includes("tell my fortune") || cmd.includes("fortune")) {
        switchMode("Tell My Fortune");
        setTimeout(giveFortune, 1500); // Give them a moment to see the mode switch
    }
    else if (cmd.includes("chill")) switchMode("Let's Chill");
    else if (cmd.includes("light show")) switchMode("Light Show");
    
    // Easter Egg: If they just say "I love you"
    else if (cmd.includes("love you")) {
        dialogueBox.innerText = "Me love you more!";
        triggerEarGlow();
    }
    else {
        dialogueBox.innerText = `Me heard: "${cmd}"`;
    }
}

function giveFortune() {
    if (currentMode === "Tell My Fortune") {
        const prediction = responses.fortune[Math.floor(Math.random() * responses.fortune.length)];
        dialogueBox.innerText = prediction;
        triggerEarGlow();
    }
}

// Visual "Dance" Effect for Dance Party Mode
function startDanceParty() {
    const avatar = document.getElementById('furby');
    avatar.style.animation = "dance 0.5s infinite alternate";
}

function stopDance() {
    const avatar = document.getElementById('furby');
    avatar.style.animation = "none";
}
