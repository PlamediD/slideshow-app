document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const galleryContainer = document.querySelector('.gallery-container');
    const fullscreenBtn = document.querySelector('.fullscreen-btn');
    let currentIndex = 0;
    let slideInterval;
    let isFullscreen = false;

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
        updateNavigationDots(index);
    }

    // Function to update the caption
    function updateCaption(index) {
        const captions = document.querySelectorAll('.caption');
        captions.forEach((caption, i) => {
            caption.style.display = i === index ? 'block' : 'none';
        });
    }

    // Function to update navigation dots
    function updateNavigationDots(index) {
        const navigationDots = document.querySelector('.navigation-dots');
        navigationDots.innerHTML = ''; // Clear existing dots

        slides.forEach((slide, i) => {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            dot.addEventListener('click', () => {
                currentIndex = i;
                showSlide(currentIndex);
            });
            navigationDots.appendChild(dot);

            if (i === index) {
                dot.style.backgroundColor = '#3498db'; // Highlight the current dot
            }
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

    // Event listener for fullscreen button
    fullscreenBtn.addEventListener('click', toggleFullscreen);

    // Function to toggle fullscreen mode
    function toggleFullscreen() {
        if (!isFullscreen) {
            if (galleryContainer.requestFullscreen) {
                galleryContainer.requestFullscreen();
            } else if (galleryContainer.mozRequestFullScreen) { // For Firefox
                galleryContainer.mozRequestFullScreen();
            } else if (galleryContainer.webkitRequestFullscreen) { // For Chrome, Safari, and Opera
                galleryContainer.webkitRequestFullscreen();
            } else if (galleryContainer.msRequestFullscreen) { // For Internet Explorer
                galleryContainer.msRequestFullscreen();
            }
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
        }

        isFullscreen = !isFullscreen;
    }

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
