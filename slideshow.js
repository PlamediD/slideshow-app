document.addEventListener('DOMContentLoaded', function () {
    const imageContainer = document.querySelector('.image-container');
    const images = document.querySelectorAll('.image-container img');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    let counter = 0;
    let intervalId;

    nextBtn.addEventListener('click', () => {
        counter++;
        if (counter === images.length) {
            counter = 0;
        }
        updateImage();
        resetInterval();
    });

    prevBtn.addEventListener('click', () => {
        counter--;
        if (counter < 0) {
            counter = images.length - 1;
        }
        updateImage();
        resetInterval();
    });

    function updateImage() {
        const newTransformValue = -counter * 100 + '%';
        imageContainer.style.transform = 'translateX(' + newTransformValue + ')';
    }

    function startSlideshow() {
        intervalId = setInterval(() => {
            counter++;
            if (counter === images.length) {
                counter = 0;
            }
            updateImage();
        }, 3000); // Change 3000 to the desired interval in milliseconds (e.g., 5000 for 5 seconds)
    }

    function resetInterval() {
        clearInterval(intervalId);
        startSlideshow();
    }

    // Start automatic slideshow
    startSlideshow();
});
