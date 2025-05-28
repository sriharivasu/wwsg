

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