var AuctionApp;
(function (AuctionApp) {
    var AuctionItem = (function () {
        function AuctionItem() {
        }
        return AuctionItem;
    }());
    AuctionApp.AuctionItem = AuctionItem;
    var UserController = (function () {
        function UserController($resource) {
            this.$resource = $resource;
            this.UserResource = this.$resource('api/users/:id');
        }
        UserController.prototype.getUsers = function () {
            return this.UserResource.query();
        };
        UserController.prototype.getUserById = function (id) {
            return this.UserResource.query({ 'id': id })[0];
        };
        UserController.prototype.saveUser = function (user) {
            var _this = this;
            return this.UserResource.save((user), function () {
                _this.getUsers();
            });
        };
        return UserController;
    }());
    UserController.$inject = ['$resource'];
    var UserRegistrationController = (function () {
        function UserRegistrationController($uibModalInstance, $resource) {
            this.$uibModalInstance = $uibModalInstance;
            this.$resource = $resource;
            this.UserResource = $resource('api/users/:id', null, {
                'update': { method: 'PUT' }
            });
            this.isEditMode = false;
            this.hasBeenEdited = false;
        }
        UserRegistrationController.prototype.closeModal = function () {
            this.$uibModalInstance.close({ hasBeenEdited: this.hasBeenEdited });
        };
        UserRegistrationController.prototype.toggleEditMode = function () {
            this.isEditMode = !this.isEditMode;
        };
        UserRegistrationController.prototype.saveUser = function () {
            var _this = this;
            this.UserResource.put(this.user)
                .then(function () {
                _this.toggleEditMode();
                _this.hasBeenEdited = true;
            })
                .catch(function () {
                console.log('Something went wrong...');
            });
        };
        return UserRegistrationController;
    }());
    UserRegistrationController.$inject = ['$resource', '$uibModalInstance'];
    var module = angular.module('app', [
        'ngResource',
        'ui.router',
        'ui.bootstrap',
        'app.services',
        'app.views'
    ]);
    module.config(AuctionApp.Configuration);
    module.run(AuctionApp.Run);
})(AuctionApp || (AuctionApp = {}));
//# sourceMappingURL=app.js.map