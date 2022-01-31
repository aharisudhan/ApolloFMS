export class ValidationUtils {
  isMobileNumberValid(ph: string) {
    const regX = new RegExp(/^[0-9]{10,10}$/);
    return regX.test(ph);
  }

  isEmailValid(email: string) {
    const regX = new RegExp(
      /^[a-zA-Z0-9_]+(\.[_a-zA-Z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/,
    );
    return regX.test(email);
  }

  isEmpty(str: string) {
    return str.length === 0 ? true : false;
  }
  isValidPincode(pincode: string) {
    const regX = new RegExp(/^[0-9]{6,6}$/);
    return regX.test(pincode);
  }
}
