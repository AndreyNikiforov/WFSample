define(['durandal/system', 'services/logger', 'plugins/router'
        , 'config'
        //, 'services/datacontext'
    ],
    function (system, logger, router
        , config
        //, datacontext
    ) {
        var shell = {
            activate: activate,
            router: router
        };
        return shell;

        function activate() {
            try {
                return boot();
            } catch(error) {
                failedInitialization(error);
                return false;
            }
            //return datacontext.primeData()
            //    .then(boot)
            //    .fail(failedInitialization);
        }

        function failedInitialization(error) {
            var msg = 'App initialization failed: ' + error.message;
            logger.logError(msg, error, system.getModuleId(shell), true);
        }

        function boot() {
            logger.log('demo app is loaded!',
                null,
                system.getModuleId(shell),
                true);
            return router.map(config.routes)
                .buildNavigationModel()
                .mapUnknownRoutes('viewmodels/home', 'not-found')
                .activate();
        }
    }
);