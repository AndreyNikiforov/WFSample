requirejs.config({
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

define(['durandal/system', 'durandal/app', 'durandal/viewLocator', 'services/logger'], function (system, app, viewLocator, logger) {
    system.debug(true);

    app.title = 'Andrey\'s TodoMVC';

    app.configurePlugins({
        router: true,
        dialog: true,
        widget: true
    });

    app.start().then(function () {
        viewLocator.useConvention();
        app.setRoot('viewmodels/shell', 'entrance');
    });
});