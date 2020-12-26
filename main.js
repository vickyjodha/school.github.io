$(function () {
	$('nav a[href^="/' + location.pathname.split("/")[1] + '"]').addClass('active');
});
$(document).ready(function () {
	$('[data-bs-toggle="popover"]').popover({
		trigger: 'hover',

	});
});