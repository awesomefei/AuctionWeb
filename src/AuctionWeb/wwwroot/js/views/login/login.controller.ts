namespace AuctionApp.Views.Login {
    export class LoginController {
        public user: Model.UserLogin;

        static $inject = [
            '$state',
            'AuthenticationService'
        ];

        constructor(
            private $state: ng.ui.IStateService,
            private AuthenticationService: Services.AuthenticationService
        ) {
            this.user = new Model.UserLogin('something', 'else');
        }

        public logUserIn(): void {
            if (this.AuthenticationService.login(this.user)) {
                this.$state.go('Home');
                return;
            }

            console.log('User failed to login');
        }
    }
}