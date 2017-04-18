var AuctionApp;
(function (AuctionApp) {
    var Model;
    (function (Model) {
        var UserLogin = (function () {
            function UserLogin(userName, password) {
                if (userName === void 0) { userName = ''; }
                if (password === void 0) { password = ''; }
                this.userName = userName;
                this.password = password;
            }
            return UserLogin;
        }());
        Model.UserLogin = UserLogin;
    })(Model = AuctionApp.Model || (AuctionApp.Model = {}));
})(AuctionApp || (AuctionApp = {}));
//# sourceMappingURL=userLogin.model.js.map