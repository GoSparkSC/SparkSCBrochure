define(['jquery'], function($) {
    return {
        smoothscroll: function(elementid, link, offset) {
            $('#' + link).click(function() {
                $('html, body').animate({ scrollTop: $('#' + elementid).offset().top -offset}, 1000);
            });
        }
    }
})