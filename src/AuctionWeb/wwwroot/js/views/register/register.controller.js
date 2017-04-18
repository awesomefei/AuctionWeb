var AuctionApp;
(function (AuctionApp) {
    var Views;
    (function (Views) {
        var Register;
        (function (Register) {
            var RegisterController = (function () {
                function RegisterController($state, AuthenticationService) {
                    this.$state = $state;
                    this.AuthenticationService = AuthenticationService;
                    this.user = new AuctionApp.Model.UserRegister();
                }
                RegisterController.prototype.register = function () {
                    var _this = this;
                    this.AuthenticationService.register(this.user)
                        .then(function (response) { return _this.$state.go('Home'); })
                        .catch(function () { return console.log('User failed to login'); });
                };
                return RegisterController;
            }());
            RegisterController.$inject = [
                '$state',
                'AuthenticationService'
            ];
            Register.RegisterController = RegisterController;
        })(Register = Views.Register || (Views.Register = {}));
    })(Views = AuctionApp.Views || (AuctionApp.Views = {}));
})(AuctionApp || (AuctionApp = {}));
//# sourceMappingURL=register.controller.js.map