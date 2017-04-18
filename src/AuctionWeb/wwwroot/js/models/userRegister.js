var AuctionApp;
(function (AuctionApp) {
    var Model;
    (function (Model) {
        var UserRegister = (function () {
            function UserRegister(userName, email, password, confirmPassword) {
                if (userName === void 0) { userName = ''; }
                if (email === void 0) { email = ''; }
                if (password === void 0) { password = ''; }
                if (confirmPassword === void 0) { confirmPassword = ''; }
                this.userName = userName;
                this.email = email;
                this.password = password;
                this.confirmPassword = confirmPassword;
            }
            return UserRegister;
        }());
        Model.UserRegister = UserRegister;
    })(Model = AuctionApp.Model || (AuctionApp.Model = {}));
})(AuctionApp || (AuctionApp = {}));
//# sourceMappingURL=userRegister.js.map