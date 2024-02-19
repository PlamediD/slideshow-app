document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const galleryContainer = document.querySelector('.gallery-container');
    let currentIndex = 0;
    let slideInterval;

    // Function to show the current slide
   // Update this part of your existing JavaScript

// Function to show the current slide
function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.style.display = 'flex'; // Show the current slide
        } else {
            slide.style.display = 'none'; // Hide other slides
        }
    });
    updateCaption(index);
}

// Function to update the caption
function updateCaption(index) {
    const captions = document.querySelectorAll('.caption');
    captions.forEach((caption, i) => {
        caption.style.display = i === index ? 'block' : 'none';
    });
}


    // Event listener for the next button
    nextBtn.addEventListener('click', function () {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    });

    // Event listener for the previous button
    prevBtn.addEventListener('click', function () {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    });

    // Keyboard navigation
    document.addEventListener('keydown', function (event) {
        if (event.key === 'ArrowRight') {
            currentIndex = (currentIndex + 1) % slides.length;
            showSlide(currentIndex);
        } else if (event.key === 'ArrowLeft') {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            showSlide(currentIndex);
        }
    });

    // Pause on hover
    galleryContainer.addEventListener('mouseenter', function () {
        clearInterval(slideInterval);
    });

    galleryContainer.addEventListener('mouseleave', function () {
        startSlideshow();
    });

    // Automatic transition to the next slide every 3 seconds
    function startSlideshow() {
        slideInterval = setInterval(function () {
            currentIndex = (currentIndex + 1) % slides.length;
            showSlide(currentIndex);
        }, 3000);
    }

    // Show the initial slide
    showSlide(currentIndex);

    // Start the slideshow
    startSlideshow();
});
