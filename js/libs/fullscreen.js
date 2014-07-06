define(['require', 'jquery'], function(require, $) {
    function getHeight() {
        var height = $(window).height();
//        console.log('Viewport height: ' + height);
        return height;
    }

    function getWidth() {
        var width = $(window).width();
//        console.log('Viewport width: ' + width);
        return width;
    }

    function setHeight(elementid) {
        var height = getHeight();
        document.getElementById(elementid).style.height = height + 'px';
        document.getElementById(elementid).style.minHeight = height + 'px';
    }

    function setWidth(elementid) {
        var width = getWidth();
        document.getElementById(elementid).style.width = width + 'px';
        document.getElementById(elementid).style.minWidth = width + 'px';
    }

    function vertCenter(elementid) {
        var height = getHeight() - getElemHeight('navigation');
        var elemHeight = getElemHeight(elementid);
        var position = height/2 - elemHeight/2;
        document.getElementById(elementid).style.top = position + 'px';
        document.getElementById(elementid).style.marginTop = position + 'px';
    }

    function vertCenterOffset(elementid) {
        var height = getHeight() - getElemHeight('navigation');
        var elemHeight = getElemHeight(elementid);
        var position = height/2 - elemHeight/2 - 32;
        document.getElementById(elementid).style.top = position + 'px';
        document.getElementById(elementid).style.marginTop = position + 'px';
    }

    function getElemHeight(name) {
        var element = document.getElementById(name),
            elemStyle = window.getComputedStyle(element, null),
            elemHeight = parseInt(elemStyle.getPropertyValue('height').split("px")[0]);
        return elemHeight;
    }

    return {
        fitsize: function(elementid) {
            setHeight(elementid);
//            $(window).resize( function() {
//                setHeight(elementid);
//            })
        },
        centeritem: function(elementid) {
            vertCenterOffset(elementid);
        }
    }
})