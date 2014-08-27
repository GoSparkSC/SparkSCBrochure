define(['jquery'], function($) {
    function getHeight() {
        return $(window).height();
    }

    function getElemHeight(name) {
        var element = document.getElementById(name),
            elemStyle = window.getComputedStyle(element, null);
        return parseInt(elemStyle.getPropertyValue('height').split("px")[0]);
    }

    function setHeight(elementid) {
        var height = getHeight();
        document.getElementById(elementid).style.height = height + 'px';
        document.getElementById(elementid).style.minHeight = height + 'px';
    }

    function vertCenter(elementid, offset) {
        offset = typeof offset !== 'undefined' ? offset : 32;
        var height = getHeight() - getElemHeight('navigation');
        var elemHeight = getElemHeight(elementid);
        var position = height/2 - elemHeight/2 - offset;
        document.getElementById(elementid).style.top = position + 'px';
        document.getElementById(elementid).style.marginTop = position + 'px';
    }

    return {
        fitsize: function(elementid) {
            setHeight(elementid);
        },
        centeritem: function(elementid) {
            vertCenter(elementid);
        }
    }
})