define(function(require) {
    require(['jquery', 'fullscreen'], function($, fs) {
        var elementid = 'splash';
        fs.fitsize(elementid);

        elementid = 'letterhead';
        fs.centeritem(elementid);
    });

    require(['jquery', 'stickynav'], function($, sn) {
        var elementid = 'navigation';
        sn.initialize(elementid);
    });

    require(['jquery', 'animate'], function($, a) {
        var elementid = 'splash';

        var link = 'navigation-logo';
        var offset = 0;
        a.smoothscroll(elementid, link, offset);

        elementid = 'ourmission';
        link = elementid + '-link';
        offset = 68;
        a.smoothscroll(elementid, link, offset);

        elementid = 'events';
        link = elementid + '-link';
        offset = 68;
        a.smoothscroll(elementid, link, offset);

        elementid = 'ourteam';
        link = elementid + '-link';
        offset = 68;
        a.smoothscroll(elementid, link, offset);

        elementid = 'contact';
        link = elementid + '-link';
        offset = 68;
        a.smoothscroll(elementid, link, offset);
    })
});