require.config({
    urlArgs: "version=" + (new Date()).getTime(),
    paths: {
        'text': '../Scripts/text',
        'durandal': '../Scripts/durandal',
        'plugins': '../Scripts/durandal/plugins',
        'transitions': '../Scripts/durandal/transitions',
        'jquery': '../Scripts/jquery-2.0.3',
        'knockout': '../Scripts/knockout-3.0.0',
        'breeze': '../Scripts/breeze.min',
        'toastr': '../Scripts/toastr',
    }
});

define(['durandal/system',
    'durandal/app',
    'plugins/router',
        'durandal/viewLocator',
        'services/logger'
    ],
    function (system, app, router, viewLocator, logger) {

    system.debug(true);

    app.title = 'Andrey\'s TodoMVC';

    app.configurePlugins({
        router: true,
        dialog: true,
        widget: true
    });

    app.start().then(function () {

        // When finding a module, replace the viewmodel string 
        // with view to find it partner view.
        // [viewmodel]s/sessions --> [view]s/sessions.html
        // Otherwise you can pass paths for modules, views, partials
        // Defaults to viewmodels/views/views. 
        viewLocator.useConvention();

        app.setRoot('viewmodels/shell', 'entrance');

        // override bad route behavior to write to 
        // console log and show error toast
        router.handleInvalidRoute = function (route, params) {
            logger.logError('No route found', route, 'main', true);
        };
    });

});