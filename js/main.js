"use strict"

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 200) {
            $('.header').addClass('sticky');
        }

        else {
            $('.header').removeClass('sticky');
        }

    })
})

$(document).ready(function () {
    $('.menu ul li').click(function (event) {
        if (!$(event.target).hasClass('.click-btn').length) {
            $('.menu ul li').removeClass('active');

            $(this).addClass('active');
        }
    });

    $('.menu ul li .click-btn').click(function (event) {
        event.stopPropagation(); // Prevent event bubbling
    });
});

$(document).ready(function () {
    $('.click-btn').click(function () {
        $('ul.sub-menu').slideToggle('slow');
        $(this).toggleClass('click-toggle')
    })
})

$(document).ready(function () {
    $('.menu ul li a').click(function (e) {
        if (this.hash !== "") {
            e.preventDefault();

            var targetSection = $(this.hash);
            var headerHeight = $('.header').outerHeight();
            var offset = targetSection.offset().top - headerHeight;
            $('html, body').animate({
                scrollTop: offset
            }, 800, function () {
                window.location.hash = targetSection.selector;
            });

            $('.offcanvas').offcanvas('hide');
        }

    })
})

$('.slider').owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    autoplay: true,
    smartSpeed: 2000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        992: {
            items: 1
        }
    },

    onChanged: function (event) {
        $('.owl-item img').removeClass('zoom-in');

        $('.owl-item').eq(event.item.index).find('img').addClass('zoom-in')
    }

});

// counter animation starts



$(document).ready(function () {
    $('.scroll_top').hide();

    $(window).scroll(function () {
        if ($(this).scrollTop()) {
            $('.scroll_top').show(500);
        } else {
            $('.scroll_top').hide(500);
        }
    });

    $('.scroll_top').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 2000, () => {
            $('.scroll_top').hide(500);
        });
        return false;
    });
});

$(document).ready(function () {
    $('.photo-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});


$(document).ready(function () {

    function startCounterAnimation() {
        $('.count').each(function () {
            var $this = $(this);
            var targetNum = parseInt($this.text(), 10);

            function formatIndianNumber(num) {
                const parts = num.toString().split('.');
                let intPart = parts[0];
                const decimalPart = parts[1] || '';

                // Add commas for Indian numbering system
                const lastThreeDigits = intPart.slice(-3);
                const otherDigits = intPart.slice(0, -3);

                intPart = otherDigits.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + (otherDigits ? ',' : '') + lastThreeDigits;

                return decimalPart ? intPart + '.' + decimalPart : intPart;
            }

            $({ count: 0 }).animate({
                count: targetNum
            },
                {
                    duration: 3000,
                    easing: 'swing',
                    step: function () {
                        $this.text(formatIndianNumber(Math.floor(this.count)));
                    },
                    complete: function () {
                        $this.text(formatIndianNumber(targetNum));
                    }
                });
        });
    }

    var options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    var observer = new IntersectionObserver(callback, options);

    var targetBox = document.querySelector('.counter-box');

    if (targetBox) { // Check if targetBox is not null
        observer.observe(targetBox);
    }

    function callback(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                observer.unobserve(entry.target);
                startCounterAnimation();
            }
        });
    }
});

$(document).ready(function () {
    $('.testimonial-slider').slick({
        dots: false,
        nav: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});

var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});

$(document).ready(function () {
    $('.faq:first .question').addClass('active');
    $('.faq:first .question').find('.toggle-icon i').addClass('fa-arrow-up');
    $('.faq:first .answer').slideDown();

    $('.question').click(function () {
        // Close other questions
        $('.question').not(this).next('.answer').slideUp();
        $('.question').not(this).removeClass('active');
        $('.question').not(this).find('.toggle-icon i').removeClass('fa-arrow-up').addClass('fa-arrow-down');

        // Toggle the current question
        $(this).toggleClass('active');
        $(this).next('.answer').slideToggle();

        // Update the toggle icon based on the state
        if ($(this).hasClass('active')) {
            $(this).find('.toggle-icon i').removeClass('fa-arrow-down').addClass('fa-arrow-up');
        } else {
            $(this).find('.toggle-icon i').removeClass('fa-arrow-up').addClass('fa-arrow-down');
        }
    });
});


$(document).ready(function () {



    $('.faq-two .faq:first .question').addClass('active')


    $('.faq-two:first .question').find('.toggle-icon i').addClass('fa-arrow-up');


    $('.faq-two .faq:first .answer').slideDown();




})



$(document).ready(function () {

    if ($(window).width() < 992) {

        $('.faq-two .faq:first .question').removeClass('active')



        $('.faq-two .faq:first .answer').slideUp();

    }

});

$(document).ready(function () {
    $('.brand-slider').slick({

        dots: true,

        infinite: true,

        arrows: false,

        speed: 1500,

        cssEase: 'linear',

        pauseOnHover: true,

        autoplay: true,

        autoplaySpeed: 2000,

        slidesToShow: 5,

        slidesToScroll: 1,

        draggable: true,

        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 501,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]


    });

});

$(document).ready(function () {

    $('[data-fancybox="gallery-item"]').fancybox({
        buttons: [
            "slideShow", "thumbs", "zoom", "fullScreen", "share", "close"],
        loop: true,
        protect: true,
    })

});


$(document).ready(function () {
    $('#subscribeBtn').on('click', function (event) {
        event.preventDefault();

        var name = $('#nameinput').val().trim();
        var phone = $('#phoneinput').val().trim();
        var isValid = true;

        $('#nameError').text('');
        $('#phoneError').text('');
        $('#formResult').text('');

        if (name === "") {
            $('#nameError').text('Please enter your name.');
            console.log('Name field is empty.');
            isValid = false;
        }

        if (phone === "") {
            $('#phoneError').text('Please enter your phone number.');
            console.log('Phone field is empty.');
            isValid = false;
        } else if (phone.length !== 10 || !/^\d+$/.test(phone)) {
            $('#phoneError').text('Please enter a valid 10-digit phone number.');
            console.log('Invalid phone number: must be 10 digits.');
            isValid = false;
        }

        if (isValid) {
            var successMessage = 'Form submitted successfully!<br>Name: ' + name + '<br>Phone: ' + phone;
            console.log(`Form submitted successfully!
            Name: ${name}
            Phone: ${phone}`);
            $('#formResult').html(successMessage).addClass('success');
        } else {
            console.log('Form submission failed due to validation errors.');
            $('#formResult').html('Form submission failed due to validation errors.').removeClass('success').addClass('error');
        }
    });
});


