/*
    Copyright Bisq 2018
*/

myApp.run(function($rootScope) {
    $rootScope.$on('handlePagesEmit', function(event, args) {
        $rootScope.$broadcast('handlePagesBroadcast', args);
    });
});
