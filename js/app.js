require.config({
    baseUrl: 'js/libs', // libraries, dependencies (require.js, jQuery, etc)
    paths: {
        app: '../app'
    }
});

require(['app/main']);