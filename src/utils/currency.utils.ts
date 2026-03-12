class CurrencyUtils {
  format(amount: any) {
    const isNegative = amount < 0;
    amount = String(amount).replace(/\D/g, "");
    amount = (amount / 100).toFixed(2);
    const formatter = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format;
    let formattedAmount = formatter(parseFloat(amount));
    if (isNegative) {
      formattedAmount = `-${formattedAmount}`;
    }
    return formattedAmount;
  }

  formatPrice(price: any) {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);
  }

  formatPercentage(amount: any) {
    return `${(amount * 100).toFixed(2)}%`;
  }

  removeMask(amount: any) {
    const money = amount
      ?.replace("R$", "")
      ?.replace("%", "")
      ?.replaceAll(".", "")
      ?.replace(",", ".")
      ?.replaceAll(" ", "");

    return Number(money);
  }
}

export default new CurrencyUtils();
