var AuctionApp;
(function (AuctionApp) {
    var Views;
    (function (Views) {
        var Login;
        (function (Login) {
            var module = angular.module('app.login', []);
            module.config(Login.Configuration);
            module.controller('LoginController', Login.LoginController);
        })(Login = Views.Login || (Views.Login = {}));
    })(Views = AuctionApp.Views || (AuctionApp.Views = {}));
})(AuctionApp || (AuctionApp = {}));
//# sourceMappingURL=login.js.map