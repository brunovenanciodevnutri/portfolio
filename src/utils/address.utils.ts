class AddressUtils {
  formatZipCode({ zipCode }: { zipCode: string }) {
    if (!zipCode) return "";
    return `${zipCode.substring(0, 5)}-${zipCode.substring(5, 8)}`;
  }
  formatZipCodeInput(zipCode: string) {
    zipCode = zipCode.replace(/\D/g, "");
    zipCode = zipCode.substring(0, 8);

    if (zipCode.length > 5) {
      zipCode = zipCode.replace(/(\d{5})(\d{1,3})/, "$1-$2");
    }

    return zipCode;
  }
  newFormatToZipcode = (zipcode: string) => {
    return zipcode.replace(/^(\d{5})(\d{3})$/, "$1-$2");
  };
}

export default new AddressUtils();
