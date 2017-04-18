var AuctionApp;
(function (AuctionApp) {
    var Views;
    (function (Views) {
        var Login;
        (function (Login) {
            var LoginController = (function () {
                function LoginController($state, AuthenticationService) {
                    this.$state = $state;
                    this.AuthenticationService = AuthenticationService;
                    this.user = new AuctionApp.Model.UserLogin('', '');
                }
                LoginController.prototype.logUserIn = function () {
                    if (this.AuthenticationService.login(this.user)) {
                        this.$state.go('Home');
                        return;
                    }
                    console.log('User failed to login');
                };
                return LoginController;
            }());
            LoginController.$inject = [
                '$state',
                'AuthenticationService'
            ];
            Login.LoginController = LoginController;
        })(Login = Views.Login || (Views.Login = {}));
    })(Views = AuctionApp.Views || (AuctionApp.Views = {}));
})(AuctionApp || (AuctionApp = {}));
//# sourceMappingURL=login.controller.js.map