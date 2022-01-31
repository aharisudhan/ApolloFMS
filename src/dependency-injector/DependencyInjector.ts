import {UserRepository} from '../domain/repository/UserRepository';
import {ApiManager} from '../domain/api/ApiManager';
import {GenerateOtpViewModel} from '../view-model/GenerateOtpViewModel';
import {VerifyOtpViewModel} from '../view-model/VerifyOtpViewModel';
import {ValidationUtils} from '../core/ValidationUtils';
import {DashBoardViewModel} from '../view-model/DashBoardViewModel';
import {SettingsViewModel} from '../view-model/SettingsViewModel';
import {GalleryViewModel} from '../view-model/GalleryViewModel';
import StringsFormater from '../core/StringsFormater';
import {ImageUtils} from '../core/ImageUtils';
import {UpdateProfileInfoViewModel} from '../view-model/UpdateProfileInfoViewModel';

export class DependencyInjector {
  private static shared: DependencyInjector;
  private apiManager: ApiManager;
  private userRepository: UserRepository;
  private storage: any;
  private validationUtils: ValidationUtils;
  private dashBoardViewModel: DashBoardViewModel;
  private stringsFormater: StringsFormater;
  private imageUtils: ImageUtils;
  private settingsViewModel: SettingsViewModel;
  private galleryViewModel: GalleryViewModel;
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
    this.dashBoardViewModel = new DashBoardViewModel(
      this.userRepository,
      this.storage,
    );
    this.settingsViewModel = new SettingsViewModel(
      this.userRepository,
      this.validationUtils,
      this.stringsFormater,
      this.imageUtils,
    );
    this.galleryViewModel = new GalleryViewModel();
  }

  public provideUserRepository() {
    return this.userRepository;
  }

  public provideGenerateOtpViewModel() {
    return new GenerateOtpViewModel(
      this.validationUtils,
      this.userRepository,
      this.storage,
    );
  }

  public provideUpdateProfileInfoViewModel() {
    return new UpdateProfileInfoViewModel(
      this.validationUtils,
      this.userRepository,
      this.storage,
    );
  }
  public provideVerifyOtpViewModel() {
    return new VerifyOtpViewModel(
      this.validationUtils,
      this.userRepository,
      this.storage,
    );
  }

  public provideDashBoardViewModel() {
    return this.dashBoardViewModel;
  }
  public provideGalleryViewModel() {
    return this.galleryViewModel;
  }

  public provideSettingsViewModel() {
    if (!this.settingsViewModel) {
      this.settingsViewModel = new SettingsViewModel(
        this.userRepository,
        this.validationUtils,
        this.stringsFormater,
        this.imageUtils,
      );
    }

    return this.settingsViewModel;
  }
}
