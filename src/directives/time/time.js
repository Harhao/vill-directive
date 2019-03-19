export default {
  getFormatTime(value) {
    const date = new Date(value);
    const year = date.getFullYear();
    const month = this.format(date.getMonth() + 1);
    const day = this.format(date.getDay());
    const hours = this.format(date.getHours());
    const minutes = this.format(date.getMinutes());
    const seconds = this.format(date.getSeconds());
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  },

  format(value) {
    return value > 9 ? value : "0" + value;
  }
};
