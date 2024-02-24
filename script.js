const quotes = {
    inspiration: [
      "The only way to do great work is to love what you do. - Steve Jobs",
      "Believe you can and you're halfway there. - Theodore Roosevelt",
      "Strive not to be a success, but rather to be of value. - Albert Einstein",
      "Science is a way of thinking much more than it is a body of knowledge. - Carl Sagan",
      "The saddest aspect of life right now is that science gathers knowledge faster than society gathers wisdom. - Isaac Asimov",
      "Somewhere, something incredible is waiting to be known. - Carl Sagan",
    ],
    science: [
      "Science is a way of thinking much more than it is a body of knowledge. - Carl Sagan",
      "The saddest aspect of life right now is that science gathers knowledge faster than society gathers wisdom. - Isaac Asimov",
      "Somewhere, something incredible is waiting to be known. - Carl Sagan",
      "The only way to do great work is to love what you do. - Steve Jobs",
      "Believe you can and you're halfway there. - Theodore Roosevelt",
      "Strive not to be a success, but rather to be of value. - Albert Einstein",
    ]
  };
  
let currentCategory = 'inspiration';
let currentIndex = 0;
let currentFontSize = 20;
let darkModeEnabled = false;

const quoteText = document.getElementById('quoteText');
const categorySelect = document.getElementById('categorySelect');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const randomBtn = document.getElementById('randomBtn');
const darkModeToggle = document.getElementById('darkModeToggle');
const increaseFontBtn = document.getElementById('increaseFontBtn');
const decreaseFontBtn = document.getElementById('decreaseFontBtn');
const copyBtn = document.getElementById("copyBtn");
const copiedText = document.getElementById("copiedText");

categorySelect.addEventListener('change', (event) => {
    currentCategory = event.target.value;
    currentIndex = 0;
    renderQuote();
});

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        renderQuote();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentIndex < quotes[currentCategory].length - 1) {
        currentIndex++;
        renderQuote();
    }
});

randomBtn.addEventListener('click', () => {
    currentIndex = Math.floor(Math.random() * quotes[currentCategory].length);
    renderQuote();
});

// darkModeToggle.addEventListener('click', () => {
//     darkModeEnabled = !darkModeEnabled;
//     toggleDarkMode();
// });

darkModeToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
    toggleGlowAnimation();
});

function toggleGlowAnimation() {
    const quoteContainer = document.querySelector('.quote-container');
    
    if (document.body.classList.contains('dark-mode')) {
        quoteContainer.classList.add('white-glow');
        quoteContainer.classList.remove('black-glow');
    } else {
        quoteContainer.classList.add('black-glow');
        quoteContainer.classList.remove('white-glow');
    }
}

increaseFontBtn.addEventListener('click', () => {
    if (currentFontSize < 28) {
    currentFontSize += 1;
    quoteText.style.fontSize = `${currentFontSize}px`;
    authorNameContent.style.fontSize = `${currentFontSize}px`;
    }
});

decreaseFontBtn.addEventListener('click', () => {
    if (currentFontSize > 16) {
        currentFontSize -= 1;
        quoteText.style.fontSize = `${currentFontSize}px`;
        authorNameContent.style.fontSize = `${currentFontSize}px`;
    }
});

function renderQuote() {
    const quote = quotes[currentCategory][currentIndex];
    const [quoteText, authorName] = quote.split(' - '); // Splitting the quote into text and author

    // Update the quote text and author name elements
    document.getElementById('quoteText').textContent = `"${quoteText}"`; // Displaying the quote text with double quotes
    document.getElementById('authorNameContent').textContent = `- ${authorName}`; // Displaying the author name with a dash prefix
}
renderQuote();

// function toggleDarkMode() {
//     if (darkModeEnabled) {
//         document.body.classList.add('dark-mode');
//         darkModeToggle.classList.add('fa-sun'); // Change moon to sun
//         darkModeToggle.classList.remove('fa-moon'); // Remove moon class
//     } else {
//         document.body.classList.remove('dark-mode');
//         darkModeToggle.classList.remove('fa-sun'); // Remove sun class
//         darkModeToggle.classList.add('fa-moon'); // Change sun to moon
//     }
// }


// Function to read the quote aloud
function readQuote() {
    const quote = document.getElementById('quoteText').textContent;
    const speech = new SpeechSynthesisUtterance(quote);
    speech.lang = 'en-US';
    window.speechSynthesis.speak(speech);
}

// Function to copy the quote text to clipboard
function copyQuote() {
    const quote = document.getElementById('quoteText').textContent;
    navigator.clipboard.writeText(quote)
        .catch(err => console.error('Failed to copy text: ', err));
}


    

copyBtn.addEventListener("click", function () {
        // Simulate copying action
    copiedText.innerText = "Copied!";

        // Clear the message after 2 seconds
    setTimeout(function () {
        copiedText.innerText = "";
        }, 1000);
});


// Event listeners for read aloud and copy buttons
document.getElementById('readBtn').addEventListener('click', readQuote);
document.getElementById('copyBtn').addEventListener('click', copyQuote);





// stars
document.addEventListener("DOMContentLoaded", function() {
    const numberOfStars = 20;
    const container = document.body;

    for (let i = 0; i < numberOfStars; i++) {
        createStar();
    }

    function createStar() {
        const star = document.createElement("div");
        star.className = "star";

        const size = Math.random() * 3 + 1; // Random size between 1 and 4
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;

        const posX = Math.random() * window.innerWidth;
        const posY = Math.random() * window.innerHeight;
        star.style.left = `${posX}px`;
        star.style.top = `${posY}px`;

        const duration = Math.random() * 1 + 0.5; // Random duration between 0.5 and 1.5 seconds
        const delay = Math.random() * 1; // Random delay between 0 and 1 second
        star.style.animation = `glow ${duration}s ${delay}s infinite alternate`;

        container.appendChild(star);
    }
});
