window.onload = function() {
    // Your slideshow code here
    var myIndex = 0;
    carousel();

    function carousel() {
        var i;
        var x = document.getElementsByClassName("slide");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        myIndex++;
        if (myIndex > x.length) {
            myIndex = 1;
        }
        x[myIndex - 1].style.display = "block";
        setTimeout(carousel, 2000); // Change image every 2 seconds
    }
};

const swiper = new Swiper('.card-content', {
    // Optional parameters
    loop: true,
    spaceBetween: 12,
    grabCursor: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


// document.addEventListener('scroll', function() {
//     const navbar = document.querySelector('.nav-transparent');
//     if (window.scrollY > 0) {
//         navbar.classList.add('scrolled');
//     } else {
//         navbar.classList.remove('scrolled');
//     }
// });

// function toggleTestimonial(testimonialId) {
//     // Hide all testimonials
//     var testimonials = document.querySelectorAll('.testimonial');
//     testimonials.forEach(function(testimonial) {
//         testimonial.classList.remove('active');
//     });

//     // Show the selected testimonial
//     var selectedTestimonial = document.getElementById(testimonialId);
//     selectedTestimonial.classList.add('active');
// };
// document.addEventListener('DOMContentLoaded', () => {
//     const counters = document.querySelectorAll('.counter');

//     counters.forEach(counter => {
//         counter.innerText = '0';
//         const target = +counter.getAttribute('data-target');
//         const duration = 2000; // Duration in milliseconds
//         const startTime = performance.now();

//         const updateCounter = (currentTime) => {
//             const elapsedTime = currentTime - startTime;
//             const progress = Math.min(elapsedTime / duration, 1);
//             const easedProgress = progress * (2 - progress); // Quadratic easing

//             counter.innerText = Math.floor(easedProgress * target);

//             if (progress < 1) {
//                 requestAnimationFrame(updateCounter);
//             } else {
//                 counter.innerText = target;
//             }
//         };

//         requestAnimationFrame(updateCounter);
//     });
// });


// $(document).ready(function() {
//     const $track = $('.carousel-track');
//     const $items = $('.carousel-item');
//     const $leftArrow = $('.left-arrow');
//     const $rightArrow = $('.right-arrow');
//     const itemWidth = $items.outerWidth(true);
//     const totalItems = $items.length;
//     const clonedCount = 1;
//     let currentIndex = clonedCount;

//     function moveToIndex(index, instant = false) {
//         $track.css('transition', instant ? 'none' : 'transform 0.5s ease-in-out');
//         $track.css('transform', `translateX(${-index * itemWidth}px)`);
//     }

//     function moveLeft() {
//         currentIndex--;
//         if (currentIndex < clonedCount) {
//             moveToIndex(totalItems - clonedCount - 1, true);
//             setTimeout(() => {
//                 currentIndex = totalItems - clonedCount - 2;
//                 moveToIndex(currentIndex);
//             }, 50);
//         } else {
//             moveToIndex(currentIndex);
//         }
//     }

//     function moveRight() {
//         currentIndex++;
//         if (currentIndex >= totalItems - clonedCount) {
//             moveToIndex(clonedCount, true);
//             setTimeout(() => {
//                 currentIndex = clonedCount + 1;
//                 moveToIndex(currentIndex);
//             }, 50);
//         } else {
//             moveToIndex(currentIndex);
//         }
//     }

//     $leftArrow.on('click', moveLeft);
//     $rightArrow.on('click', moveRight);

//     // Automatic scrolling
//     setInterval(moveRight, 3000);

//     // Initial position (skip the cloned items)
//     moveToIndex(currentIndex, true);
// });

$(document).ready(function() {
    const $track = $('.carousel-track');
    const $items = $('.carousel-ele');
    const itemWidth = $items.outerWidth(true);
    const totalItems = $items.length;
    let currentIndex = 0;

    function moveToNext() {
        currentIndex++;
        if (currentIndex >= totalItems - 6) {
            currentIndex = 0;
            $track.css('transition', 'none');
            $track.css('transform', `translateX(0)`);
            setTimeout(() => {
                $track.css('transition', 'transform 0.5s ease-in-out');
                moveToNext();
            }, 50);
        } else {
            $track.css('transform', `translateX(${-currentIndex * itemWidth}px)`);
        }
    }

    function startScrolling() {
        setInterval(() => {
            moveToNext();
        }, 1500); // 500ms for scroll + 1000ms for pause
    }

    startScrolling();
});


