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
    $('.counter').each(function() {
        var $this = $(this);
        var target = parseInt($this.attr('data-target'));
        var count = 0;
        var speed = 10; // Speed of counting (milliseconds)

        var counter = setInterval(function() {
            if (count <= target) {
                $this.text(count);
                count++;
            } else {
                clearInterval(counter);
                $this.text(target); // Ensure final count is exact
            }
        }, speed);
    });
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

    // Auto-scroll
    setInterval(nextSlide, 3000); // Adjust the time (3000ms = 3s) as needed
});
document.getElementById('services-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor click behavior
    var dropdown = document.getElementById('services-dropdown');
    dropdown.style.display = dropdown.style.display === 'flex' ? 'none' : 'flex';
});

// Close the dropdown if the user clicks outside of it
window.addEventListener('click', function(event) {
    if (!event.target.matches('#services-link')) {
        var dropdown = document.getElementById('services-dropdown');
        if (dropdown.style.display === 'flex') {
            dropdown.style.display = 'none';
        }
    }
});
document.getElementById('expertise-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor click behavior
    var dropdown = document.getElementById('expertise-dropdown');
    dropdown.style.display = dropdown.style.display === 'flex' ? 'none' : 'flex';
});

// Close the dropdown if the user clicks outside of it
window.addEventListener('click', function(event) {
    if (!event.target.matches('#expertise-link')) {
        var dropdown = document.getElementById('expertise-dropdown');
        if (dropdown.style.display === 'flex') {
            dropdown.style.display = 'none';
        }
    }
});
document.getElementById('industries-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor click behavior
    var dropdown = document.getElementById('industries-dropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
});

// Close the dropdown if the user clicks outside of it
window.addEventListener('click', function(event) {
    if (!event.target.matches('#industries-link')) {
        var dropdown = document.getElementById('industries-dropdown');
        if (dropdown.style.display === 'block') {
            dropdown.style.display = 'none';
        }
    }
});
document.getElementById('company-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor click behavior
    var dropdown = document.getElementById('company-dropdown');
    dropdown.style.display = dropdown.style.display === 'flex' ? 'none' : 'flex';
});

// Close the dropdown if the user clicks outside of it
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

// Ensure initial display is correct
document.addEventListener('DOMContentLoaded', (event) => {
    const testimonial1 = document.querySelector('.testimonial-1');
    const testimonial2 = document.querySelector('.testimonial-2');

    testimonial1.style.display = 'block';
    testimonial2.style.display = 'none';
});
