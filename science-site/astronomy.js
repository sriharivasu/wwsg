let activeButton = null;

function w3_open() {
    document.getElementById("sidebar").style.width = "25%";
    document.getElementById("sidebar").style.display = "";
    document.getElementById("main").style.marginLeft = "25%";
    document.getElementById("header").style.marginLeft = "20%";
    document.getElementById("header").style.width = "80%";
    document.getElementById("openNav").style.display = "none";
}

function w3_close() {
    document.getElementById("sidebar").style.width = "0%";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("header").style.marginLeft = "0";
    document.getElementById("header").style.width = "100%";
    document.getElementById("sidebar").style.display = "none";
    document.getElementById("openNav").style.display = "inline-block";
}

function showChildren(targetId) {
    const clickedButton = event.target.closest('.person.has-children');
    const buttons = document.querySelectorAll('.person.has-children');

    clickedButton.style.filter = "opacity(100%) sepia(0%)";
    clickedButton.style.borderColor = "#007bff";
    clickedButton.style.boxShadow = "0 8px 25px rgba(0, 123, 255, 0.2)";
    clickedButton.style.background = "rgb(232, 239, 255)"; // Light blue background for active button
    clickedButton.style.fontStyle = "oblique";
    buttons.forEach(button => {
        if (button !== clickedButton) {
            button.style.filter = "opacity(90%) sepia(30%)";
            button.style.border = "2px solid blue";
            button.style.boxShadow = "0 0 10px rgba(0, 0, 255, 0.5)";
            button.style.fontStyle = "normal";

        }
    });
    activeButton = clickedButton;

    // Get the generation number from the target ID
    const genNumber = targetId.split('-')[1];

    // Hide all generations of the same level (siblings' children)
    const allSameGenElements = document.querySelectorAll(`[class*="gen-${genNumber}-"]`);
    allSameGenElements.forEach(element => {
        element.classList.add('hidden');
        element.classList.remove('show');
    });

    // Also hide all generations that come after this one
    const currentGenNum = parseInt(genNumber);
    for (let i = currentGenNum + 1; i <= 6; i++) {
        const laterGenElements = document.querySelectorAll(`[class*="gen-${i}"]`);
        laterGenElements.forEach(element => {
            element.classList.add('hidden');
            element.classList.remove('show');
        });
    }

    // Show the target generation
    const target = document.querySelector(`.${targetId}`);
    if (target) {
        target.classList.remove('hidden');
        target.classList.add('show');

        // Smooth scroll to show the new generation
        setTimeout(() => {
            target.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
    }
}

function toggleHighlight(button) {
    if (activeButton) {
        activeButton.classList.remove('active');
    }

    // Add highlight to clicked button
    button.classList.add('active');
    activeButton = button;
}