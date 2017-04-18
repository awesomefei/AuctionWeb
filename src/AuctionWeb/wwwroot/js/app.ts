namespace AuctionApp {
    export class AuctionItem {
        public id: number;
        public name: string;
        public description: string;
        public minimumBid: number;
        public numberOfBids: number;
        public imageUrl: number;
    }

    class UserController {
        static $inject = ['$resource'];
        public users: Model.User[];
        private UserResource: ng.resource.IResourceClass<Model.User>;

        constructor(
            private $resource: ng.resource.IResourceService

        ) {
            this.UserResource = this.$resource<Model.User>('api/users/:id');

        }
        getUsers(): Model.User[] {
            return this.UserResource.query();
        }
        getUserById(id): Model.User {
            return this.UserResource.query({ 'id': id })[0];
        }

        saveUser(user: Model.User): Model.User {
            return this.UserResource.save((user), () => {
                this.getUsers();
            })
        }
    }
    class UserRegistrationController {
        public isEditMode;
        public user: Model.User;
        private hasBeenEdited;
        private UserResource;
        static $inject = ['$resource', '$uibModalInstance'];

        constructor(
            private $uibModalInstance: ng.ui.bootstrap.IModalServiceInstance,
            private $resource: ng.resource.IResourceService
        ) {

            this.UserResource = $resource<Model.User>('api/users/:id', null, <ng.resource.IActionHash>{
                'update': { method: 'PUT' }
            });
            this.isEditMode = false;
            this.hasBeenEdited = false;
        }

        closeModal() {
            this.$uibModalInstance.close({ hasBeenEdited: this.hasBeenEdited });
        }

        toggleEditMode() {
            this.isEditMode = !this.isEditMode;
        }

        saveUser() {
            this.UserResource.put(this.user)
                .then(() => {
                    this.toggleEditMode();
                    this.hasBeenEdited = true;
                })
                .catch(() => {
                    console.log('Something went wrong...')
                });
        }
    }

    let module: ng.IModule = angular.module('app', [
        'ngResource',
        'ui.router',
        'ui.bootstrap',
        'app.services',
        'app.views'
    ])


    module.config(Configuration);
    module.run(Run);
}