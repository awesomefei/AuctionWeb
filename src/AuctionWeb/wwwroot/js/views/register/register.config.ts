namespace AuctionApp.Views.Register {
    Configuration.$inject = [
        '$stateProvider'
    ];

    export function Configuration(
        $stateProvider: ng.ui.IStateProvider
    ) {
        $stateProvider
            .state('Register', <ng.ui.IState>{
                url: '/register',
                templateUrl: 'js/views/register/registration.html',
                controller: 'RegisterController',
                controllerAs: 'vm'
            });
    }
}