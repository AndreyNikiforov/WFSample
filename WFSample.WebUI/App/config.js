define(['toastr'], function (toastr) {
    toastr.options.timeOut = 4000;
    toastr.options.positionClass = 'toast-bottom-right';

    var imageSettings = {
        imageBasePath: '../content/images/photos/',
        unknownPersonImageSource: 'unknown_person.jpg'
    };

    var routes = [
    {
        route: '',
        moduleId: 'viewmodels/home',
        title: 'Home',
        nav: true
    }
        //,{
        //url: 'speakers',
        //moduleId: 'viewmodels/speakers',
        //name: 'Speakers',
        //visible: true
        //}
    ];

    var startModule = 'viewmodels/home';

    return {
        imageSettings: imageSettings,
        routes: routes,
        startModule: startModule
    };
});
