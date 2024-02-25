const typedTextSpan = document.getElementById("typed-text");
      const cursorSpan = document.querySelector(".cursor");
      const textArray = [
        "Inspiration with each tap!",
        "Your quick-quote companion.",
      ];
      const typingDelay = 150;
      const erasingDelay = 70;
      const newTextDelay = 2000;
      let textArrayIndex = 0;
      let charIndex = 0;

      function type() {
        if (charIndex < textArray[textArrayIndex].length) {
          if (!cursorSpan.classList.contains("typing"))
            cursorSpan.classList.add("typing");
          typedTextSpan.textContent +=
            textArray[textArrayIndex].charAt(charIndex);
          charIndex++;
          setTimeout(type, typingDelay);
        } else {
          cursorSpan.classList.remove("typing");
          setTimeout(erase, newTextDelay);
        }
      }

      function erase() {
        if (charIndex > 0) {
          if (!cursorSpan.classList.contains("typing"))
            cursorSpan.classList.add("typing");
          typedTextSpan.textContent = textArray[textArrayIndex].substring(
            0,
            charIndex - 1
          );
          charIndex--;
          setTimeout(erase, erasingDelay);
        } else {
          cursorSpan.classList.remove("typing");
          textArrayIndex = (textArrayIndex + 1) % textArray.length;
          setTimeout(type, typingDelay + 1100);
        }
      }

      document.addEventListener("DOMContentLoaded", function () {
        setTimeout(type, newTextDelay + 250);
      });