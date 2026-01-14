window.onload = function () {
    const toggleButton = document.getElementById('example-button');
    let cssEnabled = true;

    toggleButton.addEventListener('click', function () {
        const head = document.getElementsByTagName('head')[0];
        const link = document.querySelector('link[href="example.css"]');

        if (cssEnabled) {
            if (link) {
                head.removeChild(link);
            }
            cssEnabled = false;
        } else {
            const newLink = document.createElement('link');
            newLink.rel = 'stylesheet';
            newLink.href = 'example.css';
            head.appendChild(newLink);
            cssEnabled = true;
        }
    });
};