// script.js

document.addEventListener("DOMContentLoaded", () => {
  const rectangle = document.querySelector(".rectangle");
  const slots = document.querySelectorAll(".slot");
  const codeElement = document.getElementById("code");
  const plainTextElement = document.getElementById("plain-text");

  const fruits = ["🍎", "🍌", "🍉"];
  const typeSpeed = 100; // in milliseconds

  // Function to type code in terminal with typewriter effect
  function typeCode(code, index = 0, callback) {
    if (index < code.length) {
      codeElement.innerHTML += code.charAt(index);
      setTimeout(() => typeCode(code, index + 1, callback), typeSpeed);
    } else {
      if (callback) callback();
    }
  }

  // Function to drop fruits into slots
  function dropFruits() {
    fruits.forEach((fruit, index) => {
      slots[index].innerHTML = fruit;
    });
    rectangle.classList.add("appear");

    // New code snippet
    setTimeout(() => {
      const firstElement = fruits[0];
      const newCode1 = `\nconst firstFruit = array[0];`;
      typeCode(newCode1, 0, () => {
        setTimeout(() => {
          plainTextElement.innerHTML = `firstFruit = ${firstElement}<br>`;
          plainTextElement.classList.add("visible");

          // Second code snippet
          setTimeout(() => {
            const secondFruit = fruits[1];
            const newCode2 = `\nconst secondFruit = fruits[1];`;
            typeCode(newCode2, 0, () => {
              setTimeout(() => {
                plainTextElement.innerHTML += `secondFruit = ${secondFruit}<br>`;

                // Third code snippet
                setTimeout(() => {
                  const thirdFruit = fruits[2];
                  const newCode3 = `\nconst thirdFruit = fruits[2];`;
                  typeCode(newCode3, 0, () => {
                    setTimeout(() => {
                      plainTextElement.innerHTML += `thirdFruit = ${thirdFruit}`;
                    }, 1000); // Delay before showing third plain text
                  });
                }, 500); // Delay before typing third code
              }, 1000); // Delay before showing second plain text
            });
          }, 500); // Delay before typing second code
        }, 1000); // Delay before showing first plain text
      });
    }, 1000); // Adjust delay as needed
  }

  // Initial code snippet
  const initialCode = 'const fruits = ["🍎", "🍌", "🍉"]';
  typeCode(initialCode, 0);
  setTimeout(dropFruits, 3000); // Adjust delay as needed
});
