import axios from 'axios';
import {BeingSocialError} from './BeingSocialError';

export class ApiManager {
  private preferences: any;
  logoutObserver: any;

  constructor(preferences: any) {
    axios.defaults.baseURL = 'localhost:8000';

    this.preferences = preferences;
  }

  private async defaultHeaders() {
    const headers: any = {};

    // const token = await this.preferences.getItem(constants.LOGGED_IN_TOKEN)
    // headers['Content-Type'] = 'application/json'
    // if (token) {
    //   headers['Authorization'] = token
    // }
    return headers;
  }

  private processError(error: any) {
    if (axios.isCancel(error)) {
      return new BeingSocialError('Cancelled', 499);
    } else {
      if (
        error.response &&
        error.response.status === 401 &&
        this.logoutObserver
      ) {
        this.logoutObserver.signOut();
      }

      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        const message = error.response.data.message;
        const code = error.response.data.code;

        return new BeingSocialError(message, code);
      } else {
        if (error.response) {
          return new BeingSocialError(error.message, error.response.status);
        } else {
          return new BeingSocialError(error.message, 400);
        }
      }
    }
  }

  public async autoLogin() {
    try {
      const headers = await this.defaultHeaders();
      const response = await axios.post('users/auto-authenticate', null, {
        headers,
      });
      return response.data.data;
    } catch (error) {
      const processedError = this.processError(error);
      if (processedError) {
        throw processedError;
      }
    }
  }
}
