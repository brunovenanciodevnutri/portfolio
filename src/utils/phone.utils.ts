class PhoneUtils {
  formatByDddAndNumber(ddd: string, number: string) {
    if (ddd && number) {
      const firstDigit = number[0];
      const firstColumnNumber = number.slice(1, 5);
      const secondtColumnNumber = number.slice(5, 9);
      return `(${ddd}) ${firstDigit}${firstColumnNumber}-${secondtColumnNumber}`;
    }
    return "Não informado.";
  }
  formatNumberInput(phone: string) {
    phone = phone.replace(/\D/g, "");
    phone = phone.substring(0, 11);

    if (phone.length > 6) {
      phone = phone.replace(/(\d{2})(\d{5})(\d{1,4})/, "($1) $2-$3");
    } else if (phone.length > 2) {
      phone = phone.replace(/(\d{2})(\d{1,5})/, "($1) $2");
    } else if (phone.length > 0) {
      phone = phone.replace(/(\d{1,2})/, "($1");
    }

    return phone;
  }
  getDDD(phone: string) {
    phone = phone?.replace(/\D/g, "");
    return phone?.substring(0, 2);
  }
  getNumber(phone: string) {
    phone = phone?.replace(/\D/g, "");
    return phone?.substring(2, 11);
  }
}

export default new PhoneUtils();
