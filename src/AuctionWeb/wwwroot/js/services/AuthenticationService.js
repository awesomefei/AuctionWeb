var AuctionApp;
(function (AuctionApp) {
    var Services;
    (function (Services) {
        var AuthenticationService = (function () {
            function AuthenticationService($http) {
                this.$http = $http;
                this._isUserAuthenticated = false;
            }
            Object.defineProperty(AuthenticationService.prototype, "User", {
                get: function () {
                    return this._user;
                },
                enumerable: true,
                configurable: true
            });
            /**
             * Returns the FACT that the user has been
             * authenticated or not.
             */
            AuthenticationService.prototype.isUserAuthenticated = function () {
                return this._isUserAuthenticated;
            };
            /**
             * Validate the login and either sign in or not
             * @param userLogin - Object containing the username and password of the prospective user
             */
            AuthenticationService.prototype.login = function (userLogin) {
                var _this = this;
                // Force logout of user
                this._isUserAuthenticated = false;
                return this.$http.post('account/login', userLogin)
                    .then(function (response) {
                    _this._user = response.data;
                    _this._isUserAuthenticated = true;
                })
                    .catch(function () {
                    console.log('login failed');
                    return false;
                });
            };
            /**
             * Validate the login and either sign in or not
             * @param userLogin - Object containing the username and password of the prospective user
             */
            AuthenticationService.prototype.register = function (userRegister) {
                var _this = this;
                // Force logout of user
                this._isUserAuthenticated = false;
                return this.$http.post('account/register', userRegister)
                    .then(function (response) {
                    _this._isUserAuthenticated = true;
                    _this._user = response.data;
                })
                    .catch(function () { return console.log('login failed'); });
            };
            return AuthenticationService;
        }());
        Services.AuthenticationService = AuthenticationService;
        angular.module('app.services', [])
            .service('AuthenticationService', Services.AuthenticationService);
    })(Services = AuctionApp.Services || (AuctionApp.Services = {}));
})(AuctionApp || (AuctionApp = {}));
//# sourceMappingURL=AuthenticationService.js.map