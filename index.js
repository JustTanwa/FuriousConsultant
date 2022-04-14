// burger menu
$(document).ready(function () {
	$('#burger').click(function () {
		$(this).toggleClass('open');
		$('.fullnav').toggleClass('open');
		$('body').toggleClass('fixed');
	});
});

// Name on image
$(window).resize(function () {
    if (window.innerWidth > 920) {
        $(".intro-name").html(`<pre>Hi,
I'm Dominic</pre>`)
    } else {
        $(".intro-name").html(`<pre>Hi,
I'm 
Dominic</pre>`)
    }
});


