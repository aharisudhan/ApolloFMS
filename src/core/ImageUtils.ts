export class ImageUtils {
  public async getImageUriFromBlob(blob) {
    try {
      let imageUri;
      const reader = new FileReader();
      imageUri = new Promise((resolve, reject) => {
        reader.readAsDataURL(blob);
        reader.onerror = () => {
          reader.abort();
        };

        reader.onload = () => {
          imageUri = reader.result;
          resolve(imageUri);
        };
      });
      return imageUri;
    } catch (error) {
      throw error;
    }
  }
}
