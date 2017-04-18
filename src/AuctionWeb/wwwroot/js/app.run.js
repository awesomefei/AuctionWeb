var AuctionApp;
(function (AuctionApp) {
    Run.$inject = [
        '$rootScope',
        '$state',
        'AuthenticationService'
    ];
    function Run($rootScope, $state, AuthenticationService) {
        $rootScope
            .$on('$stateChangeStart', function (event, to) {
            // protect non-public views
            if (to.data && to.data.requiresAuthentication) {
                if (!AuthenticationService.isUserAuthenticated()) {
                    event.preventDefault();
                    $state.go('Login');
                }
            }
        });
    }
    AuctionApp.Run = Run;
})(AuctionApp || (AuctionApp = {}));
//# sourceMappingURL=app.run.js.map