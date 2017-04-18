var AuctionApp;
(function (AuctionApp) {
    var Views;
    (function (Views) {
        var Register;
        (function (Register) {
            var module = angular.module('app.register', []);
            module.config(Register.Configuration);
            module.controller('RegisterController', Register.RegisterController);
        })(Register = Views.Register || (Views.Register = {}));
    })(Views = AuctionApp.Views || (AuctionApp.Views = {}));
})(AuctionApp || (AuctionApp = {}));
//# sourceMappingURL=register.js.map