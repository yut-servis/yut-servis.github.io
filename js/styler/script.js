var setSectionHeight = function () {
    // get current window height
    var winHeight = $(window).height() + 50;

    // set all section to window height
    $('.section > .inner').css('min-height', winHeight);
};


$(document).ready(function () {
    setTimeout(function () {
        hideNotification();
    }, 4000);

    // Resize the section on load
    setSectionHeight();

    console.log("ready")
    // Resize the section on window resize
    $(window).resize(function () {
        setSectionHeight();
    });

    // Bind event on window scroll
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#logo').addClass('scrolled');
            $('#mainnav').addClass('scrolled');
        }
        else {
            $('#logo').removeClass('scrolled');
            $('#mainnav').removeClass('scrolled');
        }

        // set active menu to item
        $('#mainnav li').each(function () {

            $(this).parent().addClass('active');

            var section = $(this).attr('data-menuanchor');
            if ($('#' + section).isOnScreen()) {
                // remove all active class
                $('#mainnav li').removeClass('active');
                $(this).addClass('active');
            }
        });
    });

    // Add scrolling effect when clicking the main navigation
    $('#mainnav a').smoothScroll({
        preventDefault: true,
        afterScroll: function () {
            var section = $(this).attr('data-menuanchor');

            if ($('#' + section).isOnScreen()) {
                // remove all active class
                $('#mainnav li').removeClass('active');
                $(this).addClass('active');
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

hideNotification = function () {
    var $flashMessages = $('.js-flash-message')

    $.each($flashMessages, function (index, value) {
        $(this).fadeOut("slow", function () {
            $(this).remove();
        })
    });
};