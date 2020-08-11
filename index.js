class Formatter {
  static capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
  }

  static  sanitize(string) {
    return string.replace(/[^A-Za-z0-9-']+/g, '');
  }
}
