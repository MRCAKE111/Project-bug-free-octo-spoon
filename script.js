const dialogueBox = document.getElementById('dialogue');
const modeDisplay = document.getElementById('currentMode');
const leftEar = document.getElementById('leftEar');
const rightEar = document.getElementById('rightEar');
const voiceBtn = document.getElementById('voiceBtn');

let currentMode = "Normal";

const responses = {
    pet: ["*Purrs*", "Ooh, tickle my heart!", "Love you!"],
    tickle: ["Hehehe! Stop it!", "Wiggle wiggle!", "Me so ticklish!"],
    feed: ["Yum yum!", "More cookies please!", "Full tummy!"]
};

const modeData = {
    "Dance Party": "Let's groove! *Plays upbeat music*",
    "Copycat": "Say something, me repeat it!",
    "Tell My Fortune": "Ask me a question about the future...",
    "Let's Chill": "Relaxing time... ahhh.",
    "Light Show": "Ooh, pretty colors!"
};

// Interaction Function
function interact(type) {
    const randomRes = responses[type][Math.floor(Math.random() * responses[type].length)];
    dialogueBox.innerText = randomRes;
    triggerEarGlow();
}

function triggerEarGlow() {
    leftEar.classList.add('glow');
    rightEar.classList.add('glow');
    setTimeout(() => {
        leftEar.classList.remove('glow');
        rightEar.classList.remove('glow');
    }, 1000);
}

// Voice Recognition Setup
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
if (SpeechRecognition) {
    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.lang = 'en-US';

    voiceBtn.addEventListener('click', () => {
        recognition.start();
        voiceBtn.className = 'mic-on';
    });

    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript.toLowerCase();
        handleVoiceCommand(transcript);
        voiceBtn.className = 'mic-off';
    };
}

function handleVoiceCommand(cmd) {
    if (cmd.includes("dance party")) switchMode("Dance Party");
    else if (cmd.includes("copycat")) switchMode("Copycat");
    else if (cmd.includes("fortune")) switchMode("Tell My Fortune");
    else if (cmd.includes("chill")) switchMode("Let's Chill");
    else if (cmd.includes("light show")) switchMode("Light Show");
    else {
        dialogueBox.innerText = `Me heard: "${cmd}"`;
    }
}

function switchMode(newMode) {
    currentMode = newMode;
    modeDisplay.innerText = newMode;
    dialogueBox.innerText = modeData[newMode];
    triggerEarGlow();
}
