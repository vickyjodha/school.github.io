$(function () {
	$('nav a[href^="/' + location.pathname.split("/")[1] + '"]').addClass('active');
});
$(document).ready(function () {
	$('[data-bs-toggle="popover"]').popover({
		trigger: 'hover',

	});
});

// parent slider code


 var $owl = $('#carousel1');
    $owl.children().each(function (index) {
        $(this).attr('data-position', index);

    });
    $('#carousel1').owlCarousel({
        loop: true,
        center: true,
        margin: 0,
        responsiveClass: true,
        nav: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,

        responsive: {
            0: {
                items: 1
            },
            680: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })
    $(document).on('click', '.owl-item>div', function () {
        var $speed = 1000;
        $owl.trigger('to.owl.carousel', [$(this).data('position'), $speed]);
    });