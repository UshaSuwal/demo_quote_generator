const quotes = {
    inspiration: [
      "The only way to do great work is to love what you do. - Steve Jobs",
      "Believe you can and you're halfway there. - Theodore Roosevelt",
      "Strive not to be a success, but rather to be of value. - Albert Einstein",
    ],
    science: [
      "Science is a way of thinking much more than it is a body of knowledge. - Carl Sagan",
      "The saddest aspect of life right now is that science gathers knowledge faster than society gathers wisdom. - Isaac Asimov",
      "Somewhere, something incredible is waiting to be known. - Carl Sagan",
    ]
  };
  
  let currentCategory = 'inspiration';
  let currentIndex = 0;
  let currentFontSize = 20;
  let darkModeEnabled = false;
  
  const quoteText = document.getElementById('quoteText');
  const categoryContainer = document.getElementById('customDropdown');
  const dropdownHeader = document.querySelector('.dropdown-header');
  const dropdownList = document.getElementById('categoryList');
  
  dropdownHeader.addEventListener('click', () => {
    dropdownList.style.display = (dropdownList.style.display === 'block') ? 'none' : 'block';
  });
  
  function changeCategory(category) {
    currentCategory = category;
    currentIndex = 0;
    renderQuote();
    dropdownHeader.textContent = category.charAt(0).toUpperCase() + category.slice(1); // Capitalize the first letter
    dropdownList.style.display = 'none';
  }
  
  dropdownList.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
      const selectedCategory = event.target.textContent.toLowerCase();
      changeCategory(selectedCategory);
    }
  });
  
  
  const darkModeToggle = document.getElementById('darkModeToggle');
  const increaseFontBtn = document.getElementById('increaseFontBtn');
  const decreaseFontBtn = document.getElementById('decreaseFontBtn');
  const copyBtn = document.getElementById("copyBtn");
  const checkBtn = document.getElementById("checkBtn");
  
  categoryContainer.addEventListener('change', (event) => {
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
  

// darkModeToggle.addEventListener('click', () => {
//     darkModeEnabled = !darkModeEnabled;
//     toggleDarkMode();
// });
  
  darkModeToggle.addEventListener('change', () => {
      document.body.classList.toggle('dark-mode');
      toggleGlowAnimation();
      updateImageSource();
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
  
  function updateImageSource() {
      const logoImage = document.getElementById('logoImage');
      const isDarkMode = document.body.classList.contains('dark-mode');
  
// Set the image source based on dark mode
      logoImage.src = isDarkMode ? 'images/whiteBook.png' : 'images/book.png';
  
      const logo = document.getElementById('logo');

    // Set the image source based on dark mode
      logo.src = isDarkMode ? 'images/whiteLogo.png' : 'images/logo.png';
  }
  
  increaseFontBtn.addEventListener('click', () => {
      if (currentFontSize < 24) {
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
      const [quoteTextContent, authorName] = quote.split(' -');
  
      quoteText.textContent = `"${quoteTextContent.trim()}"`;
      authorNameContent.textContent = `- ${authorName.trim()}`;
  }
  renderQuote();
  
  copyBtn.addEventListener("click", function () {
      checkBtn.style.display = "block";
      copyBtn.style.display= "none";
  
      setTimeout(function () {
          checkBtn.style.display = "none";
          copyBtn.style.display= "block";
      }, 2000);
  });
  
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
  