namespace AuctionApp.Services {
    export class AuthenticationService {

        private _isUserAuthenticated = false;
        private _user: any;

        public get User(): Model.User {
            return this._user;
        }


        constructor(
            private $http: ng.IHttpService
        ) {

        }

        /**
         * Returns the FACT that the user has been 
         * authenticated or not.
         */
        public isUserAuthenticated(): boolean {
            return this._isUserAuthenticated;
        }

        /**
         * Validate the login and either sign in or not
         * @param userLogin - Object containing the username and password of the prospective user
         */
        public login(userLogin: Model.UserLogin): ng.IPromise<boolean> {

            // Force logout of user
            this._isUserAuthenticated = false;

            return this.$http.post('account/login', userLogin)
                .then((response) => {
                this._user = response.data;
                this._isUserAuthenticated = true;
                })
                .catch(() => {
                    console.log('login failed');
                    return false;
                });
        }

        /**
         * Validate the login and either sign in or not
         * @param userLogin - Object containing the username and password of the prospective user
         */
        public register(userRegister: Model.UserRegister): ng.IPromise<boolean|void> {

            // Force logout of user
            this._isUserAuthenticated = false;

            return this.$http.post('account/register', userRegister)
                .then((response) => {
                    this._isUserAuthenticated = true;
                    this._user = response.data;
                })
                .catch(() => console.log('login failed'));
        }
    }
    angular.module('app.services', [])
        .service('AuthenticationService', Services.AuthenticationService);
}