namespace AuctionApp.Model {
    export interface IAuthenticatedState extends ng.ui.IState {
        data: Model.IAuthenticatedStateData;
    }

    export interface IAuthenticatedStateData {
        requiresAuthentication: boolean
    }
}