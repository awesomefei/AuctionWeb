namespace AuctionApp.Model {
    export class UserRegister {
        constructor(
            public userName: string ='',
            public email: string = '',
            public password: string = '',
            public confirmPassword: string =''
        ) {

        }
    }
}