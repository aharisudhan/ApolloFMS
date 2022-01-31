import {ApiManager} from '../api/ApiManager';
import {AutoSubscribeStore, StoreBase} from 'resub';

export interface UserState {
  isAutoLoggingIn: boolean;
  isAppIntroDone: boolean;
  loggedInToken?: string;
  loggedInUser?: any;
  autoLoginError?: any;
}

@AutoSubscribeStore
export class UserRepository extends StoreBase {
  private apiManager: ApiManager;
  private preferences: any;

  constructor(apiManager: ApiManager, preferences: any) {
    super();
    this.apiManager = apiManager;
    this.preferences = preferences;
  }

  //   async generateOtp(data: any) {
  //     try {
  //       const response = await this.apiManager.generateOtp(data)
  //       return response
  //     } catch (error) {
  //       throw error
  //     }
  //   }
}
