namespace AuctionApp.Views.Register {
    let module: ng.IModule = angular.module('app.register', []);

    module.config(Register.Configuration);

    module.controller('RegisterController', RegisterController);
}