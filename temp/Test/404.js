
jQuery(document).ready(function($) {

    var fire = $('body.error404 div.fire');
    var btn = $('body.error404 div.fire .btns a.btn');

    btn.click(function(e) {
        var employee = $(this),
            name = employee.attr('class').split(/\s/).pop();

        // Tell GA
        if (typeof(_gaq) === "function") {
            // Classic
            _gaq.push(['_trackEvent', '404', 'fire', name]);
        }
        if (typeof(__gaTracker) === "function") {
            // Universal, custom GA name via Yoast GA plugin
            __gaTracker('send', {
                hitType: 'event',
                eventCategory: '404',
                eventAction: 'fire',
                eventLabel: name
            });
        }

        // Add 'fired' or 'saved' classes
        fire.addClass('fired');
        fire.addClass(name);

        // Remove this click handler
        btn.off('click');

        // Disable the links
        btn.on('click', function() {
            return false;
        });

        return false;
    });

});
