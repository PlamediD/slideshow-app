document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.image-container img');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const galleryContainer = document.querySelector('.gallery-container');
    let currentIndex = 0;
    let slideInterval;

    // Function to show the current image
    function showImage(index) {
        images.forEach((img, i) => {
            if (i === index) {
                img.style.display = 'block'; // Show the current image
            } else {
                img.style.display = 'none'; // Hide other images
            }
        });
    }

    // Event listener for the next button
    nextBtn.addEventListener('click', function () {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    });

    // Event listener for the previous button
    prevBtn.addEventListener('click', function () {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    });

    // Keyboard navigation
    document.addEventListener('keydown', function (event) {
        if (event.key === 'ArrowRight') {
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex);
        } else if (event.key === 'ArrowLeft') {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            showImage(currentIndex);
        }
    });

    // Pause on hover
    galleryContainer.addEventListener('mouseenter', function () {
        clearInterval(slideInterval);
    });

    galleryContainer.addEventListener('mouseleave', function () {
        startSlideshow();
    });

    // Automatic transition to the next image every 3 seconds
    function startSlideshow() {
        slideInterval = setInterval(function () {
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex);
        }, 3000);
    }

    // Show the initial image
    showImage(currentIndex);

    // Start the slideshow
    startSlideshow();
});
