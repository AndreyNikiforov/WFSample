define(['knockout', 'services/logger'], function (ko, logger) {
    var title = 'Home';
    var vm = {
        activate: activate,
        title: title,
        addTodoList: addTodoList,
        todoLists: ko.observableArray(),
        isEditingListTitle: ko.observable(true)
    };

    return vm;

    //#region Internal Methods
    function addTodoList() {
        logger.log('addTodoList', null, title, true);
    }

    function activate() {
        logger.log(title + ' View Activated', null, title, true);
        return true;
    }
    //#endregion
});