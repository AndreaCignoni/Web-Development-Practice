// ===============================
// Dropdown Menu Function (click only)
// ===============================
function toggleDropdown() {
    const dropdown = document.getElementById("jsFunDropdown");
    const isOpen = dropdown.classList.toggle("dropdown-show");
    dropdown.setAttribute("aria-expanded", isOpen);
}

// ===============================
// Character Selection
// ===============================
// mario.jpg sourced from Pixabay (Alexas_Fotos): https://pixabay.com/photos/mario-figure-game-nintendo-super-1558068/
// space-invaders.avif sourced from freepik.com: https://www.freepik.com/free-photos-vectors/space-invaders-pixel-art
// Arthur.webp sourced from Fandom.com: https://ghostsngoblins.fandom.com/wiki/Arthur
// donkey-kong.jpg sourced from Nintendo.com: https://www.nintendo.com/en-gb/Games/Arcade/Donkey-Kong-Original-Edition-918598.html?srsltid=AfmBOoo1e-e5_oy_k08W0qtuELDM-scUp6bMfcmoaXKYNgqpcIi9Clsn
const characters = [
    {
        name: "Mario",
        image: "/images/mario.jpg",
        bio: "A heroic plumber from the Mushroom Kingdom who saves Princess Peach."
    },
    {
        name: "Space Invaders",
        image: "/images/space-invaders.avif",
        bio: "Classic arcade aliens that defined the golden age of gaming."
    },
    {
        name: "Arthur",
        image: "/images/Arthur.webp",
        bio: "A knight from Ghosts 'n Goblins known for extreme difficulty."
    },
    {
        name: "Donkey Kong",
        image: "/images/donkey-kong.jpg",
        bio: "Nintendo’s iconic arcade antagonist turned hero."
    }
];

// The game uses an array of character objects. When the user clicks the button, 
// a random number is generated based on the array length. This number is used to select 
// a character whose name, image, and biography are dynamically displayed on the webpage.

// ===============================
// Global variable to hold the random character
// ===============================
let currentRandomCharacter = null;

function selectRandomCharacter() {
    const randomIndex = Math.floor(Math.random() * characters.length);
    const selected = characters[randomIndex];

    // Store the selected character globally
    currentRandomCharacter = selected;

    const characterName = document.getElementById("characterName");
    const characterImage = document.getElementById("characterImage");
    const characterBio = document.getElementById("characterBio");

    characterName.textContent = selected.name;
    characterBio.textContent = selected.bio;

    characterImage.src = selected.image;
    characterImage.alt = `Character: ${selected.name}`;
    characterImage.style.display = "block";

    const messages = [
        "A true hero has been chosen!",
        "Destiny awaits this champion!",
        "The adventure begins now!"
    ];

    characterOutput.querySelector("p").textContent =
        messages[Math.floor(Math.random() * messages.length)];
}

const characterOutput = document.getElementById('characterOutput');
const characterImage = document.getElementById('characterImage');
const characterName = document.getElementById('characterName');



// ===============================
// Speed Click Challenge
// ===============================
let clickCount = 0;
let startTime = null;
let bestTime = null;

function startGame() {
    clickCount = 0;
    startTime = null;
    document.getElementById("clickCount").textContent = "Clicks: 0/10";
    document.getElementById("timerDisplay").textContent = "Time: 0.00s";
    document.getElementById("gameMessage").textContent = "";

    document.getElementById("gameClickBtn").style.display = "inline-block";
    document.getElementById("startStopBtn").textContent = "Restart Game";
}

function countClick() {
    if (clickCount === 0) {
        startTime = performance.now();
    }

    clickCount++;
    document.getElementById("clickCount").textContent = `Clicks: ${clickCount}/10`;

    if (clickCount === 10) {
        const endTime = performance.now();
        const totalTime = (endTime - startTime) / 1000;
        document.getElementById("timerDisplay").textContent = `Time: ${totalTime.toFixed(2)}s`;

        document.getElementById("gameClickBtn").style.display = "none";
        document.getElementById("gameMessage").textContent = "🎉 Challenge Complete!";

        if (bestTime === null || totalTime < bestTime) {
            bestTime = totalTime;
            document.getElementById("bestTime").textContent = `${bestTime.toFixed(2)}s`;
        }
    }
}

// ===============================
// Hover Image Change
// ===============================
// retro1.jpg sourced from Freepik: https://www.freepik.com/free-photos-vectors/space-invaders
// retro2.jpg sourced from Nintendo Classics: https://www.nintendoclassics.net/2021/05/ghosts-n-goblins-punishing-as-hell.html
function changeImage() {
  document.getElementById("hoverImage").src = "/images/retro2.jpg";
}
function resetImage() {
  document.getElementById("hoverImage").src = "/images/retro1.jpg";
}

// ===============================
// Rating Responses
// ===============================
function rateWebsite() {
  const rating = document.getElementById("ratingRange").value;
  const message = document.getElementById("ratingMessage");
  switch (rating) {
    case "1": message.textContent = "😢 Needs improvement..."; break;
    case "2": message.textContent = "🙂 Not bad, but could be better."; break;
    case "3": message.textContent = "😎 Pretty good!"; break;
    case "4": message.textContent = "🤩 Awesome site!"; break;
    case "5": message.textContent = "🔥 Absolutely legendary!"; break;
  }
}

// ===============================
// Favourite Character Input + Comparison
// ===============================
function displayFavouriteCharacter() {
  const fav = document.getElementById("favCharacterInput").value;
  const output = document.getElementById("favCharacterOutput");
  output.innerHTML = `<span style="color:blue; font-size:20px; font-weight:bold;">${fav}</span>`;
}

function compareCharacters() {
    const fav = document.getElementById("favCharacterInput").value.trim().toLowerCase();
    const message = document.getElementById("comparisonMessage");

    if (!currentRandomCharacter) {
        message.textContent = "Draw a random character first!";
        return;
    }

    if (fav === currentRandomCharacter.name.toLowerCase()) {
        message.textContent = "🎉 You win! Your favourite matches the random hero!";
    } else {
        message.textContent = "😅 Not a match this time. Try again!";
    }
}

document
    .getElementById("characterSelectorBtn")
    .addEventListener("click", selectRandomCharacter);
