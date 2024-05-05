document.addEventListener("DOMContentLoaded", () => {
  const codeElement = document.getElementById("code");
  const cursorElement = document.getElementById("cursor");
  const typeSpeed = 100; // in milliseconds

  // Function to type code in terminal with typewriter effect
  function typeCode(code, index = 0, callback = null) {
    if (index < code.length) {
      codeElement.innerHTML =
        code.substring(0, index) + '<span class="cursor">|</span>';
      setTimeout(() => typeCode(code, index + 1, callback), typeSpeed);
    } else {
      codeElement.innerHTML = code; // Complete the code
      cursorElement.style.display = "inline-block"; // Show the blinking cursor
      if (callback) callback();
    }
  }

  // Define the raw code to be displayed
  const codeSnippet = `
  const codingDictionary = {
    "Bug": "An unintended feature.",
    "Refactoring": "Cleaning up someone else's code.",
    "Coffee": "The programmer's lifeblood.",
    "Algorithm": "A complex word for a simple concept.",
    "Documentation": "Rarely read, but always expected.",
    "Feature": "Something that breaks when touched."
};

console.log("Welcome to the Coding Dictionary!");

for (let term in codingDictionary) {
    console.log(\`\${term}: \${codingDictionary[term]}\`);
}
`;

  cursorElement.style.display = "none"; // Hide the cursor while typing
  typeCode(codeSnippet);
});
