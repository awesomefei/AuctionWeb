var AuctionApp;
(function (AuctionApp) {
    var Views;
    (function (Views) {
        var Login;
        (function (Login) {
            Configuration.$inject = [
                '$stateProvider'
            ];
            function Configuration($stateProvider) {
                $stateProvider
                    .state('Login', {
                    url: '/login',
                    templateUrl: 'js/views/login/login.view.html',
                    controller: 'LoginController',
                    controllerAs: 'vm'
                });
            }
            Login.Configuration = Configuration;
        })(Login = Views.Login || (Views.Login = {}));
    })(Views = AuctionApp.Views || (AuctionApp.Views = {}));
})(AuctionApp || (AuctionApp = {}));
//# sourceMappingURL=login.config.js.map