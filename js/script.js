$('#navToggler').on('click', function() {
    $('.custom-nav').toggleClass('show');
    $(this).toggleClass('toggle');
})

$('.recommend-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    stagePadding: 5,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 2
        },
        1000: {
            items: 4
        }
    }
})
$('.gallery-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    stagePadding: 5,
    autoplay: false,
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 2
        }
    }
})
$('.booking-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    stagePadding: 5,
    autoplay: false,
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 3
        }
    }
})