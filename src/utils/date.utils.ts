import dayjs from "dayjs";

class DateUtils {
  formatDateTime(date: any, reduceHours: number = 0) {
    if (!this.isValid(date)) return "";
    return dayjs(date)
      .subtract(reduceHours, "hour")
      .format("DD/MM/YYYY [às] HH:mm:ss");
  }
  formatDate(date: any) {
    if (!this?.isValid(date)) return date?.split("-").reverse().join("/");
    return dayjs(date).format("DD/MM/YYYY");
  }
  formatDateApi(date: any) {
    if (String(date)?.includes("/")) {
      date = date.split("/").reverse().join("-");
    }
    if (!this.isValid(date)) return "";
    return dayjs(date).format("YYYY-MM-DD");
  }
  isValid(date: any) {
    return dayjs(date).isValid();
  }
  isValidInput(date: string) {
    date = date.split("/").reverse().join("-");
    return dayjs(date).isValid();
  }
  formatInput(date: string) {
    date = date.replace(/\D/g, "");
    date = date.substring(0, 8);

    if (date.length >= 5) {
      date = date.replace(/(\d{2})(\d{2})(\d{4})/, "$1/$2/$3");
    } else if (date.length >= 3) {
      date = date.replace(/(\d{2})(\d{2})/, "$1/$2");
    } else if (date.length >= 1) {
      date = date.replace(/(\d{2})/, "$1");
    }
    return date;
  }
  getYesterday() {
    const yesterday = dayjs().subtract(1, "day");
    return {
      day: yesterday.date(),
      month: yesterday.month() + 1,
      year: yesterday.year(),
    };
  }
  formatDateForRequestFromDateInput(date: Date) {
    if (!date) return;
    return `${date.getFullYear()}-${(
      "0" + (date.getMonth() + 1).toString()
    ).slice(-2)}-${("0" + date.getDate().toString()).slice(-2)}`;
  }
  formatDateFromDateInput(date: Date) {
    if (!date) return;
    return `${("0" + date.getDate().toString()).slice(-2)}/${(
      "0" + (date.getMonth() + 1).toString()
    ).slice(-2)}/${date.getFullYear()}`;
  }
}
export default new DateUtils();
