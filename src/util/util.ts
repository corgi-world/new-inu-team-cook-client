export function cutString(str: string, maxLength: number) {
  if (maxLength <= str.length) {
    str = str.substring(0, maxLength - 3);
    if (str[str.length - 1] === " ") {
      str = str.substring(0, maxLength - 4);
    }
    str += "...";
  }
  return str;
}
