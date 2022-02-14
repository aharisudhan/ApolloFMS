import {BaseViewModel} from './BaseViewModel';
import {UserRepository} from '../domain/repository/UserRepository';
import {ValidationUtils} from '../core/ValidationUtils';
import {PlatformType} from '../domain/enumerations/PlatformType';
import {AppType} from '../domain/enumerations/AppType';
// import Strings from '../resources/strings';
import {Platform} from 'react-native';

export interface LoginState {
  isLoading: boolean;
  onSuccess: boolean;
  mobileNumber: string;
  password: string;
  showPassword:boolean;
  isMobileNumberFilled: boolean;
  error?: Error;
  isErrorCardShow: boolean;
  isFocus: boolean;
  isPasswordFocus:boolean;
  mobileNumberValidationError?: Error;
  passwordValidationError?: Error;
}

export class LoginViewModel extends BaseViewModel {
  protected state: LoginState;
  strings;

  constructor(
    private validationUtils: ValidationUtils,
    private userRepository: UserRepository,
  ) {
    super();
    this.state = this.defaultState();
  }

  protected defaultState() {
    return {
      onSuccess: false,
      mobileNumber: '',
      password: '',
      isLoading: false,
      isMobileNumberFilled: false,
      isErrorCardShow: false,
      error: undefined,
      isFocus: false,
      isPasswordFocus:false,
      mobileNumberValidationError: undefined,
      passwordValidationError: undefined,
      showPassword:true,
    };
  }

  private isValid() {
    let mobileNumberValidationError;
    let otpValidationError;

    if (
      this.validationUtils.isMobileNumberValid(this.state.mobileNumber) ===
      false
    ) {
      mobileNumberValidationError = Error(
        this.strings.error_invalid_phone_no_text,
      );
    } else if (
      this.validationUtils.isEmpty(this.state.password) === true ) {
      otpValidationError = Error(this.strings.error_empty_otp_text);
    }
    this.setState({
      ...this.state,
      mobileNumberValidationError,
      otpValidationError,
    });
  }

  public async verifyLogin() {
    this.isValid();
    if (this.state.mobileNumberValidationError) {
      return;
    }
    this.setState({
      ...this.state,
      isLoading: true,
      loadError: undefined,
    });
    try {
      let osPlatform;
      if (Platform.OS === 'android') {
        osPlatform = PlatformType.Andriod;
      } else if (Platform.OS === 'ios') {
        osPlatform = PlatformType.iOS;
      }
      this.setState({
        ...this.state,
        isOtpSentSuccess: true,
        shouldStartTimer: true,
        isLoading: false,
      });
    } catch (error) {
      const statusCodeForForbiddenUser = 403;
      const statusCodeForBlockedUser = 406;
    }
  }
}
