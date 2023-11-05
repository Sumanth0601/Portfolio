document.getElementById('theme-toggler').addEventListener('click', function () {
    // Get the current theme value
    const currentTheme = document.body.getAttribute('data-bs-theme');

    // Toggle the theme attribute
    if (currentTheme === 'light') {
        document.body.setAttribute('data-bs-theme', 'dark');
    } else {
        document.body.setAttribute('data-bs-theme', 'light');
    }
});

// Function to change the profession text
function changeProfession() {
    const professionElement = document.getElementById("profession");
    const professions = ["web developer", "coder", "problem solver"];
    let currentIndex = 0;

    // Function to update the profession text
    function updateProfession() {
        professionElement.classList.remove("profession-fade");
        setTimeout(() => {
            professionElement.textContent = professions[currentIndex];
            currentIndex = (currentIndex + 1) % professions.length;
            professionElement.classList.add("profession-fade");
        }, 400); // Change text every 0.5 seconds
    }

    // Update the profession text every 2 seconds (2000 milliseconds)
    setInterval(updateProfession, 2000);
}

// Call the function to start changing the profession text
changeProfession();


const themeButton = document.getElementById("theme-button");
const themeText = document.getElementById("theme-text");
const themeToggler = document.getElementById("theme-toggler");

themeButton.addEventListener("click", function () {
    if (themeText.textContent === "Dark") {
        themeText.textContent = "Light";
        themeToggler.setAttribute("class", "bi bi-moon-stars");
    } else {
        themeText.textContent = "Dark";
        themeToggler.setAttribute("class", "bi bi-moon-stars-fill");
    }
});
