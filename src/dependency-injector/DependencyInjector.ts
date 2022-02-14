import {UserRepository} from '../domain/repository/UserRepository';
import {ApiManager} from '../domain/api/ApiManager';
import {ValidationUtils} from '../core/ValidationUtils';
import StringsFormater from '../core/StringsFormater';
import {ImageUtils} from '../core/ImageUtils';
import { LoginViewModel } from '../view-model/LoginViewModel';

export class DependencyInjector {
  private static shared: DependencyInjector;
  private apiManager: ApiManager;
  private userRepository: UserRepository;
  private storage: any;
  private validationUtils: ValidationUtils;
  private stringsFormater: StringsFormater;
  private imageUtils: ImageUtils;
  private loginViewModel: LoginViewModel;
  public static initialize(storage: any) {
    if (!this.shared) {
      this.shared = new DependencyInjector(storage);
    }
  }

  public static default() {
    return this.shared;
  }

  constructor(storage: any) {
    this.storage = storage;
    this.apiManager = new ApiManager(this.storage);
    this.imageUtils = new ImageUtils();
    this.stringsFormater = new StringsFormater();
    this.userRepository = new UserRepository(this.apiManager, this.storage);
    this.apiManager.logoutObserver = this.userRepository;
    this.validationUtils = new ValidationUtils();
    this.loginViewModel = new LoginViewModel(
      this.validationUtils,
      this.userRepository,
    );
  }

  public provideUserRepository() {
    return this.userRepository;
  }

    public provideLoginViewModel() {
    return this.loginViewModel;
  }

}
