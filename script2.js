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
    ],
  };
  
  let currentCategory = "inspiration"; // Default category
  let currentIndex = 0; // Variable to track the current quote index
  
  // Function to display a quote
  function displayQuote(index) {
    const quoteContainer = document.getElementById("quoteContainer");
    const quoteText = document.getElementById("quoteText");
    const authorNameContent = document.getElementById("authorNameContent");
  
    const currentQuote = quotes[currentCategory][index];
    const [text, author] = currentQuote.split(" - ");
  
    quoteText.textContent = text;
    authorNameContent.textContent = `- ${author}`;
  }
  
  // Function to handle next button click
  function nextQuote() {
    currentIndex = (currentIndex + 1) % quotes[currentCategory].length;
    displayQuote(currentIndex);
  }
  
  // Function to handle previous button click
  function prevQuote() {
    currentIndex = (currentIndex - 1 + quotes[currentCategory].length) % quotes[currentCategory].length;
    displayQuote(currentIndex);
  }
  
  // Function to handle random button click
  function randomQuote() {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * quotes[currentCategory].length);
    } while (randomIndex === currentIndex); // Ensure the new quote is not the same as the current one
  
    currentIndex = randomIndex;
    displayQuote(currentIndex);
  }
  
  // Event listeners for buttons
  document.getElementById("nextBtn").addEventListener("click", nextQuote);
  document.getElementById("prevBtn").addEventListener("click", prevQuote);
  document.getElementById("randomBtn").addEventListener("click", randomQuote);
  
  // Category select change event listener
  document.getElementById("categorySelect").addEventListener("change", function () {
    currentCategory = this.value;
    // Update currentIndex if needed
    currentIndex = Math.min(currentIndex, quotes[currentCategory].length - 1);
  
    // Update the displayed quote
    displayQuote(currentIndex);
  });
  
  // Dark mode toggle event listener
  document.getElementById("darkModeToggle").addEventListener("change", function () {
    const body = document.body;
    body.classList.toggle("dark-mode", this.checked);
  });
  
  // Font size control event listeners
  document.getElementById("increaseFont").addEventListener("click", function () {
    const quoteContainer = document.getElementById("quoteContainer");
    const currentFontSize = window.getComputedStyle(quoteContainer).fontSize;
    const newSize = parseFloat(currentFontSize) * 1.2; // Increase font size by 20%
    quoteContainer.style.fontSize = newSize + "px";
  });
  
  document.getElementById("decreaseFont").addEventListener("click", function () {
    const quoteContainer = document.getElementById("quoteContainer");
    const currentFontSize = window.getComputedStyle(quoteContainer).fontSize;
    const newSize = parseFloat(currentFontSize) / 1.2; // Decrease font size by 20%
    quoteContainer.style.fontSize = newSize + "px";
  });
  
  // Initial display
  displayQuote(currentIndex);
  