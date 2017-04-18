var AuctionApp;
(function (AuctionApp) {
    var Views;
    (function (Views) {
        var Register;
        (function (Register) {
            Configuration.$inject = [
                '$stateProvider'
            ];
            function Configuration($stateProvider) {
                $stateProvider
                    .state('Register', {
                    url: '/register',
                    templateUrl: 'js/views/register/registration.html',
                    controller: 'RegisterController',
                    controllerAs: 'vm'
                });
            }
            Register.Configuration = Configuration;
        })(Register = Views.Register || (Views.Register = {}));
    })(Views = AuctionApp.Views || (AuctionApp.Views = {}));
})(AuctionApp || (AuctionApp = {}));
//# sourceMappingURL=register.config.js.map