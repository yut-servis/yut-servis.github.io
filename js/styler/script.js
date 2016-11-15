var adjustSectionHeight = function () {
    var winHeight = $(window).height() + 50;

    $('.section > .inner').css('min-height', winHeight);
};

var adjustNavbarVisiblity = function() {
        if ($(window).scrollTop() > 50) {
            $('#mainnav').addClass('scrolled');

        } else {
            $('#mainnav').removeClass('scrolled');
        }

        $('#mainnav a').each(function () {
            var sectionId = $(this).attr('href');

            if ($(sectionId).isOnScreen()) {
                $('#mainnav li').removeClass('active');
                $(this).parent().addClass('active');
            }
        });
}


$(document).ready(function () {
    adjustSectionHeight();
	adjustNavbarVisiblity();

    $(window).resize(function () {
        adjustSectionHeight();
    });

    $(window).scroll(function () {
		adjustNavbarVisiblity();
    });

    // Add scrolling effect when clicking the main navigation
    $('#mainnav a').smoothScroll({
        preventDefault: true,
        afterScroll: function () {
            var sectionId = $(this).attr('href');

            if ($(sectionId).isOnScreen()) {
                $('#mainnav li').removeClass('active');
                $(this).parent().addClass('active');
            }
        }
    });
});


// Detect if the element is visible on viewport
$.fn.isOnScreen = function () {
    var win = $(window);

    var viewport = {
        top: win.scrollTop()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = (viewport.top + win.height()) - 100;

    var bounds = this.offset();
    if (bounds == undefined) return false
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = (bounds.top + this.outerHeight()) - 50;

    return (!(viewport.bottom < bounds.top || viewport.top > bounds.bottom));
};
