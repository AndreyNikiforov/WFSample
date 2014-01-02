define(['durandal/system', 'plugins/router', 'services/logger'],
    function (system, router, logger) {
        logger.log("Shell: before starting app");

        var shell = {
            activate: activate,
            router: router
        };

        return shell;

        //#region Internal Methods
        function activate() {
            return boot();
        }

        function boot() {
            logger.log("Starting app");

            router.on('router:route:not-found', function (fragment) {
                logger.logError("Error app " + fragment, null, null, true);
            });

            var routes = [
                { route: '', moduleId: 'home', title: 'Home', nav: 1 },
                //{ route: 'details', moduleId: 'details', title: 'Details', nav: 2 }
            ];

            return router.makeRelative({ moduleId: 'viewmodels' }) // router will look here for viewmodels by convention
                .map(routes)            // Map the routes
                .buildNavigationModel() // Finds all nav routes and readies them
                .activate();            // Activate the router
        }
        //#endregion
    });