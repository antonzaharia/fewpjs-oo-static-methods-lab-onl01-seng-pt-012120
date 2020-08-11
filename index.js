class Formatter {
  static capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    let r = string.replace(/[^A-Za-z0-9-\\s]+/g, "");
    return r.replace(/[^A-Za-z0-9']+/g, "");
    }
}
