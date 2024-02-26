const quotes = {
  motivational: [
    "Embrace life's journey; overcome, savor victory. - Steve Maraboli",
    "Don't waste time living others' lives. - Steve Jobs",
    "Do it with passion or not at all. - Rosa Nouchette Carey",
    "Embrace challenges, savor victory. - Steve Maraboli",
    "Chase the vision, not the money; money follows. - Tony Hsieh",
    "In difficulty lies opportunity. - Albert Einstein",
    "Hard work makes you luckier. - Gary Player",
    "Be the change you wish to see. - Mahatma Gandhi",
    "Never too old to set new goals, dream new dreams. - C.S. Lewis",
    "Don't watch the clock; keep going. - Sam Levenson",
    "Success is who you are, not what you have. - Bo Bennett",
  ],
  science: [
    "Science is reality's poetry. - Richard Dawkins",
    "Today's science is tomorrow's tech. - Edward Teller",
    "Science is thinking, not just knowledge. - Carl Sagan",
    "Knowledge unveils universe wonders. - Prekin Hokun",
    "Science knows no borders, belongs to humanity. - Louis Pasteur",
    "Something incredible awaits discovery. - Carl Sagan",
    "Understanding science fosters belief in God. - Joe Rogan",
    "Science and life should not separate. - Rosalind Franklin",
    "Inquiry reveals cosmic revelations. - Galileo Galilei",
    "Quest for understanding uncovers the unknown. - Rachel Carson",
    "Science is antidote to enthusiasm's poison. - Adam Smith",
    "Discovery fuels the flame of human progress. - Louis Pasteur",
  ],
  time: [
    "The trouble is, you think you have time. - Buddha",
    "Lost time is never found again. - Benjamin Franklin",
    "Time is what we want most, but what we use worst. - William Penn",
    "Every moment is a fresh beginning. - T.S. Eliot",
    "Time flies over us, but leaves its shadow behind. - Nathaniel Hawthorne",
    "Make each day your masterpiece. - John Wooden",
    "Time you enjoy wasting is not wasted time. - Marthe Troly-Curtin",
    "The present is a gift; enjoy it to the fullest. - Jim Valvano",
    "Time is the most valuable thing a man can spend. - Theophrastus",
    "Time is the wisest counselor of all. - Pericles",
    "Time flies over us, but leaves its shadow behind. - Nathaniel Hawthorne",
    "Use your time wisely; it's the stuff life is made of. - Benjamin Franklin",
  ],
};

let currentCategory = "time";
let currentIndex = 0;
let currentFontSize = 20;
let darkModeEnabled = false;

const quoteText = document.getElementById("quoteText");
const categoryContainer = document.getElementById("customDropdown");
const dropdownHeader = document.querySelector(".dropdown-header");
const dropdownList = document.getElementById("categoryList");

dropdownHeader.addEventListener("click", () => {
  dropdownList.style.display =
    dropdownList.style.display === "block" ? "none" : "block";
});

function changeCategory(category) {
  currentCategory = category;
  currentIndex = 0;
  renderQuote();
  dropdownHeader.textContent =
    category.charAt(0).toUpperCase() + category.slice(1); // Capitalize the first letter
  dropdownList.style.display = "none";
}

dropdownList.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    const selectedCategory = event.target.textContent.toLowerCase();
    changeCategory(selectedCategory);
  }
});

const darkModeToggle = document.getElementById("darkModeToggle");
const increaseFontBtn = document.getElementById("increaseFontBtn");
const decreaseFontBtn = document.getElementById("decreaseFontBtn");
const copyBtn = document.getElementById("copyBtn");
const checkBtn = document.getElementById("checkBtn");

categoryContainer.addEventListener("change", (event) => {
  currentCategory = event.target.value;
  currentIndex = 0;
  renderQuote();
});

function getPreviousQuote() {
  currentIndex =
    (currentIndex - 1 + quotes[currentCategory].length) %
    quotes[currentCategory].length;
  renderQuote();
}

function getNextQuote() {
  currentIndex = (currentIndex + 1) % quotes[currentCategory].length;
  renderQuote();
}

function getRandomQuote() {
  currentIndex = Math.floor(Math.random() * quotes[currentCategory].length);
  renderQuote();
}

increaseFontBtn.addEventListener("click", () => {
    if (currentFontSize < 25) {
      currentFontSize += 1;
      quoteText.style.fontSize = `${currentFontSize}px`;
      authorNameContent.style.fontSize = `${currentFontSize}px`;
    }
  });
  
  decreaseFontBtn.addEventListener("click", () => {
    if (currentFontSize > 16) {
      currentFontSize -= 1;
      quoteText.style.fontSize = `${currentFontSize}px`;
      authorNameContent.style.fontSize = `${currentFontSize}px`;
    }
  });
  


// DarkMode
darkModeToggle.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode");
  toggleGlowAnimation();
  updateImageSource();
});

function toggleGlowAnimation() {
  const quoteContainer = document.querySelector(".quote-container");

  if (document.body.classList.contains("dark-mode")) {
    quoteContainer.classList.add("white-glow");
    quoteContainer.classList.remove("black-glow");
  } else {
    quoteContainer.classList.add("black-glow");
    quoteContainer.classList.remove("white-glow");
  }
}


// darkmode image change
function updateImageSource() {
  const logoImage = document.getElementById("logoImage");
  const isDarkMode = document.body.classList.contains("dark-mode");
  logoImage.src = isDarkMode ? "images/whiteBook.png" : "images/book.png";

  const logo = document.getElementById("logo");

  logo.src = isDarkMode ? "images/whiteLogo.png" : "images/logo.png";
}


function renderQuote() {
  const quote = quotes[currentCategory][currentIndex];
  const [quoteTextContent, authorName] = quote.split(" -");

  quoteText.textContent = `"${quoteTextContent.trim()}"`;
  authorNameContent.textContent = `- ${authorName.trim()}`;
}
renderQuote();


// copy
copyBtn.addEventListener("click", function () {
  checkBtn.style.display = "block";
  copyBtn.style.display = "none";

  setTimeout(function () {
    checkBtn.style.display = "none";
    copyBtn.style.display = "block";
  }, 2000);
});


//read
function readQuote() {
  const quote = document.getElementById("quoteText").textContent;
  const speech = new SpeechSynthesisUtterance(quote);
  speech.lang = "en-US";
  window.speechSynthesis.speak(speech);
}

// Function to copy the quote text to clipboard
function copyQuote() {
  const quote = document.getElementById("quoteText").textContent;
  navigator.clipboard
    .writeText(quote)
    .catch((err) => console.error("Failed to copy text: ", err));
}

document.getElementById("readBtn").addEventListener("click", readQuote);
document.getElementById("copyBtn").addEventListener("click", copyQuote);

// stars
document.addEventListener("DOMContentLoaded", function () {
  const numberOfStars = 20;
  const container = document.body;

  for (let i = 0; i < numberOfStars; i++) {
    createStar();
  }

  function createStar() {
    const star = document.createElement("div");
    star.className = "star";

    const size = Math.random() * 3 + 1; 
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;

    const posX = Math.random() * window.innerWidth;
    const posY = Math.random() * window.innerHeight;
    star.style.left = `${posX}px`;
    star.style.top = `${posY}px`;

    const duration = Math.random() * 1 + 0.5; 
    const delay = Math.random() * 1; 
    star.style.animation = `glow ${duration}s ${delay}s infinite alternate`;

    container.appendChild(star);
  }
});
