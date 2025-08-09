


document.addEventListener('DOMContentLoaded', function () {
    const words = ["Astronomers", "Biologists", "Engineers", "Historians", "Programmers", "Physicists", "You."];
    let currentWordIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;

    function typeWriter() {
        const currentWord = words[currentWordIndex];
        const textElement = document.getElementById('text');

        if (isDeleting) {
            textElement.textContent = currentWord.substring(0, currentCharIndex - 1);
            currentCharIndex--;

            if (currentCharIndex === 0) {
                isDeleting = false;
                currentWordIndex = (currentWordIndex + 1) % words.length;
                const delay = currentWordIndex === 0 ? 3000 : 500;
                setTimeout(typeWriter, delay);
                return;
            }
        } else {
            textElement.textContent = currentWord.substring(0, currentCharIndex + 1);
            currentCharIndex++;

            if (currentCharIndex === currentWord.length) {
                isDeleting = true;
                // Fix: Check for "You." with the period
                const delay = currentWord === "You." ? 6000 : 1000;
                setTimeout(typeWriter, delay);
                return;
            }
        }

        setTimeout(typeWriter, isDeleting ? 100 : 150);
    }

    typeWriter();
});

function w3_open() {

    document.getElementById("sidebar").style.width = "25%";
    document.getElementById("sidebar").style.display = "";
    document.getElementById("main").style.marginLeft = "25%";
    document.getElementById("header").style.marginLeft = "26.5%";
    document.getElementById("header").style.width = "71.9%";
    document.getElementById("openNav").style.display = "none";


}

function w3_close() {
    document.getElementById("sidebar").style.width = "0%";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("header").style.marginLeft = "0";
    document.getElementById("header").style.width = "98.35%";
    document.getElementById("sidebar").style.display = "none";
    document.getElementById("openNav").style.display = "inline-block";
}

