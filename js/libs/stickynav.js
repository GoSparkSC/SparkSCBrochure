define(['require', 'jquery'], function(require, $) {
    function getElemHeight(name) {
        var element = document.getElementById(name),
            elemStyle = window.getComputedStyle(element, null),
            elemHeight = parseInt(elemStyle.getPropertyValue('height').split("px")[0]);
        return elemHeight;
    }

    function setTop(name) {
        document.getElementById(name).style.position = 'fixed';
        document.getElementById(name).style.top = 0;
    }

    function setOther(name, height, navHeight) {
        document.getElementById(name).style.position = 'absolute';
        document.getElementById(name).style.top = height - navHeight + 'px';
    }

    function setPosition(name, height, navHeight) {
        var scrollVal = $(window).scrollTop();
        if ( scrollVal > height - navHeight ) {
            setTop(name);
        } else {
            setOther(name, height, navHeight);
        }
    }

    return {
        initialize: function(elementid) {
            var height = $(window).height();
            var navHeight = getElemHeight(elementid);
            setPosition(elementid, height, navHeight);
            $(window).scroll(function() {
                setPosition(elementid, height, navHeight);
            });
        }
    }
})