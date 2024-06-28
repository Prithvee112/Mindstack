window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    var logo = document.querySelector('.navbar-link-img');

    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
        logo.src = 'public/Images/logo-scroll.svg';
    } else {
        navbar.classList.remove('scrolled');
        logo.src = 'public/Images/logo.svg';
    }
});

$(document).ready(function() {
    const $track = $('.slider-track');
    const $cards = $('.slider-card');
    const cardCount = $cards.length;
    let currentIndex = 0;

    function updateSlider() {
        const cardWidth = $cards.outerWidth(true);
        $track.css('transform', `translateX(${-currentIndex * cardWidth}px)`);
    }

    function nextSlide() {
        if (currentIndex < cardCount - 6) {
            currentIndex++;
        } else {
            currentIndex = 0;
            $track.css('transition', 'none');
            $track.css('transform', `translateX(0)`);
            setTimeout(() => {
                $track.css('transition', 'transform 0.5s ease');
                currentIndex++;
                updateSlider();
            }, 50);
        }
        updateSlider();
    }

    function prevSlide() {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = cardCount - 6;
            $track.css('transition', 'none');
            $track.css('transform', `translateX(${-currentIndex * cardWidth}px)`);
            setTimeout(() => {
                $track.css('transition', 'transform 0.5s ease');
                currentIndex--;
                updateSlider();
            }, 50);
        }
        updateSlider();
    }

    $('.next').on('click', nextSlide);
    $('.prev').on('click', prevSlide);

    setInterval(nextSlide, 3000); 
});

document.getElementById('services-link').addEventListener('click', function(event) {
    event.preventDefault(); 
    var dropdown = document.getElementById('services-dropdown');
    dropdown.style.display = dropdown.style.display === 'flex' ? 'none' : 'flex';
});

window.addEventListener('click', function(event) {
    if (!event.target.matches('#services-link')) {
        var dropdown = document.getElementById('services-dropdown');
        if (dropdown.style.display === 'flex') {
            dropdown.style.display = 'none';
        }
    }
});

document.getElementById('expertise-link').addEventListener('click', function(event) {
    event.preventDefault();
    var dropdown = document.getElementById('expertise-dropdown');
    dropdown.style.display = dropdown.style.display === 'flex' ? 'none' : 'flex';
});

window.addEventListener('click', function(event) {
    if (!event.target.matches('#expertise-link')) {
        var dropdown = document.getElementById('expertise-dropdown');
        if (dropdown.style.display === 'flex') {
            dropdown.style.display = 'none';
        }
    }
});

document.getElementById('industries-link').addEventListener('click', function(event) {
    event.preventDefault(); 
    var dropdown = document.getElementById('industries-dropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
});

window.addEventListener('click', function(event) {
    if (!event.target.matches('#industries-link')) {
        var dropdown = document.getElementById('industries-dropdown');
        if (dropdown.style.display === 'block') {
            dropdown.style.display = 'none';
        }
    }
});

document.getElementById('company-link').addEventListener('click', function(event) {
    event.preventDefault();
    var dropdown = document.getElementById('company-dropdown');
    dropdown.style.display = dropdown.style.display === 'flex' ? 'none' : 'flex';
});

window.addEventListener('click', function(event) {
    if (!event.target.matches('#company-link')) {
        var dropdown = document.getElementById('company-dropdown');
        if (dropdown.style.display === 'flex') {
            dropdown.style.display = 'none';
        }
    }
});

function toggleTestimonials() {
    const testimonial1 = document.querySelector('.testimonial-1');
    const testimonial2 = document.querySelector('.testimonial-2');

    if (testimonial1.style.display === 'block' || testimonial1.style.display === '') {
        testimonial1.style.display = 'none';
        testimonial2.style.display = 'block';
    } else {
        testimonial1.style.display = 'block';
        testimonial2.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    const testimonial1 = document.querySelector('.testimonial-1');
    const testimonial2 = document.querySelector('.testimonial-2');

    testimonial1.style.display = 'block';
    testimonial2.style.display = 'none';
});

function animateCounters(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counters = document.querySelectorAll('.counter');
            counters.forEach(counter => {
                const target = parseInt(counter.getAttribute('data-target'));
                let count = 0;
                const speed = 10;

                const counterAnimation = setInterval(() => {
                    if (count <= target) {
                        counter.textContent = count;
                        count++;
                    } else {
                        clearInterval(counterAnimation);
                        counter.textContent = target;
                    }
                }, speed);
            });
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const counterSection = document.querySelector('.counter-sec');

    const observer = new IntersectionObserver(animateCounters, {
        threshold: 0.5 
    });

    observer.observe(counterSection);
});

document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const leftButton = document.querySelector('.car-left');
    const rightButton = document.querySelector('.car-right');
    const slideWidth = slides[0].getBoundingClientRect().width;
    let currentIndex = 0;
    const intervalTime = 3000;
    let autoplayInterval;

    const cloneCount = 3; 
    const clones = [];

    for (let i = 0; i < cloneCount; i++) {
        const clone = slides[i].cloneNode(true);
        clone.classList.add('clone');
        track.appendChild(clone);
        clones.push(clone);
    }

    for (let i = slides.length - cloneCount; i < slides.length; i++) {
        const clone = slides[i].cloneNode(true);
        clone.classList.add('clone');
        track.insertBefore(clone, track.firstChild);
        clones.push(clone);
    }

    const allSlides = Array.from(track.children);

    const setSlidePosition = (slide, index) => {
        slide.style.left = slideWidth * index + 'px';
    };

    const moveToSlide = (track, currentSlide, targetSlide) => {
        track.style.transition = 'transform 0.5s ease';
        track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
        currentSlide.classList.remove('current-slide');
        targetSlide.classList.add('current-slide');
    };

    const moveToNextSlide = () => {
        const currentSlide = track.querySelector('.current-slide');
        const nextSlide = currentSlide.nextElementSibling;
        moveToSlide(track, currentSlide, nextSlide);

        currentIndex++;
        if (nextSlide.classList.contains('clone')) {
            setTimeout(() => {
                track.style.transition = 'none';
                currentIndex = currentIndex % slides.length;
                track.style.transform = 'translateX(-' + slides[currentIndex].style.left + ')';
                slides[currentIndex].classList.add('current-slide');
                nextSlide.classList.remove('current-slide');
            }, 500);
        }
    };

    const moveToPrevSlide = () => {
        const currentSlide = track.querySelector('.current-slide');
        const prevSlide = currentSlide.previousElementSibling;
        moveToSlide(track, currentSlide, prevSlide);

        currentIndex--;
        if (prevSlide.classList.contains('clone')) {
            setTimeout(() => {
                track.style.transition = 'none';
                currentIndex = (currentIndex + slides.length) % slides.length;
                track.style.transform = 'translateX(-' + slides[currentIndex].style.left + ')';
                slides[currentIndex].classList.add('current-slide');
                prevSlide.classList.remove('current-slide');
            }, 500);
        }
    };

    const startAutoplay = () => {
        autoplayInterval = setInterval(() => {
            moveToNextSlide();
        }, intervalTime);
    };

    const stopAutoplay = () => {
        clearInterval(autoplayInterval);
    };

    allSlides.forEach(setSlidePosition);
    track.style.transform = 'translateX(-' + slides[currentIndex].style.left + ')';
    slides[currentIndex].classList.add('current-slide');

    leftButton.addEventListener('click', () => {
        stopAutoplay();
        moveToPrevSlide();
        startAutoplay();
    });

    rightButton.addEventListener('click', () => {
        stopAutoplay();
        moveToNextSlide();
        startAutoplay();
    });

    startAutoplay();
});


