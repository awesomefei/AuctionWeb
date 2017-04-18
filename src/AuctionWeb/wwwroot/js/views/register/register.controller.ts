namespace AuctionApp.Views.Register {
    export class RegisterController {
        public user: Model.UserRegister;

        static $inject = [
            '$state',
            'AuthenticationService'
        ];

        constructor(
            private $state: ng.ui.IStateService,
            private AuthenticationService: Services.AuthenticationService
        ) {
            this.user = new Model.UserRegister();
        }

        public register(): void {
            this.AuthenticationService.register(this.user)
                .then((response) => this.$state.go('Home'))
                .catch(() => console.log('User failed to login'));
            
        }
    }
}